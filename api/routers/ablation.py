"""API-endepunkter for RQ1a ablasjonsstudie med SSE-streaming."""

import asyncio
import json
import logging
import shutil
import time
import uuid
from collections import defaultdict
from datetime import datetime
from pathlib import Path

from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import StreamingResponse

from api.routers._ablation_categorize import categorize_router
from api.routers._ablation_evaluation import (
    evaluate_single_config,
    list_ablation_evaluations,
    list_configs_for_doc_set,
    load_ablation_evaluation,
    save_ablation_evaluations,
)
from api.routers._experiments_helpers import (
    EVAL_HISTORY_DIR,
    GROUND_TRUTH_DIR,
    RESULTS_DIR,
    check_ablation_resume,
    evaluate_result,
    find_full_eval,
    save_analysis_result,
    scan_ablation_document_sets,
)
from src.agentic_rag.config import (
    NO_PLANNING,
    NO_REFLECTION,
    NO_TOOL_USE,
    NONE_AGENTIC,
    ONLY_PLANNING,
    ONLY_REFLECTION,
    ONLY_TOOL_USE,
    AblationConfig,
)
from src.agentic_rag.orchestrator import AgenticRAGOrchestrator
from src.config import Settings
from src.models.schemas import (
    AblationRunProgress,
    AblationRunRequest,
    AblationStudyResult,
    AblationStudySummary,
    AnalysisResult,
    EvaluationResult,
    GroundTruthAnnotation,
)
from src.retrieval.vector_store import VectorStoreManager

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/ablation", tags=["ablation"])
router.include_router(categorize_router)

ABLATION_RESULTS_FILE = Path("data/ablation_study_results.json")
ABLATION_QUERY = "Analyser disse eiendomsdokumentene og identifiser alle risikoer og avvik."

ABLATION_CONFIGS: list[tuple[str, AblationConfig]] = [
    ("T+R", NO_PLANNING),
    ("P+R", NO_TOOL_USE),
    ("P+T", NO_REFLECTION),
    ("P", ONLY_PLANNING),
    ("T", ONLY_TOOL_USE),
    ("R", ONLY_REFLECTION),
    ("NONE", NONE_AGENTIC),
]


def _progress(doc_id: str, label: str, status: str, step: int, total: int, **kw) -> str:
    """Lag AblationRunProgress-event som JSON."""
    return AblationRunProgress(
        document_set_id=doc_id,
        config_label=label,
        status=status,
        current_step=step,
        total_steps=total,
        **kw,
    ).model_dump_json()


def _build_study_result(
    doc_id: str,
    label: str,
    ev: object,
    ar: AnalysisResult,
) -> AblationStudyResult:
    """Bygg AblationStudyResult fra evaluering og analyse."""
    om = ev.overall_metrics
    return AblationStudyResult(
        document_set_id=doc_id,
        config_label=label,
        f1=om.f1,
        precision=om.precision,
        recall=om.recall,
        matched_risks=ev.matched_risks,
        total_gt_risks=om.total_support,
        duration_s=ar.duration_s,
        input_tokens=ar.input_tokens,
        output_tokens=ar.output_tokens,
    )


def _compute_averages(results: list[AblationStudyResult]) -> dict[str, dict[str, float]]:
    """Beregn gjennomsnittlige metrikker per konfigurasjon."""
    sums: dict[str, dict[str, float]] = defaultdict(lambda: defaultdict(float))
    counts: dict[str, int] = defaultdict(int)
    for r in results:
        for k in ("f1", "precision", "recall", "duration_s"):
            sums[r.config_label][k] += getattr(r, k)
        counts[r.config_label] += 1
    return {
        label: {k: round(v / counts[label], 4) for k, v in m.items()} for label, m in sums.items()
    }


@router.get("/document-sets")
async def list_document_sets() -> list[dict]:
    """List dokumentsett tilgjengelige for ablasjonsstudie."""
    return scan_ablation_document_sets()


@router.post("/run/stream")
async def stream_ablation(
    request: AblationRunRequest,
    http_request: Request,
) -> StreamingResponse:
    """Kjor ablasjonsstudie med SSE-streaming av fremdrift."""
    settings: Settings = http_request.app.state.settings
    vector_store: VectorStoreManager = http_request.app.state.vector_store
    all_results: list[AblationStudyResult] = []
    total = len(request.document_set_ids) * (len(ABLATION_CONFIGS) + 1)

    event_queue: asyncio.Queue[str | None] = asyncio.Queue()

    def emit(ev: str) -> None:
        event_queue.put_nowait(ev)

    def run_ablation() -> None:
        step = 0
        for doc_id in request.document_set_ids:
            gt_path = GROUND_TRUTH_DIR / f"{doc_id}.json"
            if not gt_path.exists():
                msg = f"GT mangler for {doc_id}"
                emit(_progress(doc_id, "", "error", step, total, message=msg))
                continue

            gt_text = gt_path.read_text(encoding="utf-8")
            gt = GroundTruthAnnotation.model_validate_json(gt_text)

            doc_evals: dict[str, EvaluationResult] = {}
            doc_risk_counts: dict[str, int] = {}

            for label, config in ABLATION_CONFIGS:
                step += 1
                existing = check_ablation_resume(doc_id, label)
                if existing:
                    try:
                        raw = existing.read_text(encoding="utf-8")
                        cached = AnalysisResult.model_validate_json(raw)
                        ev = evaluate_result(cached, gt, settings)
                        sr = _build_study_result(doc_id, label, ev, cached)
                        all_results.append(sr)
                        doc_evals[label] = ev
                        doc_risk_counts[label] = len(cached.risks)
                        emit(
                            _progress(
                                doc_id,
                                label,
                                "skipped",
                                step,
                                total,
                                f1=sr.f1,
                                precision=sr.precision,
                                recall=sr.recall,
                                message="Cached",
                            )
                        )
                        continue
                    except Exception:
                        logger.warning("Cache-feil, kjorer paa nytt")

                msg = f"Kjorer {label} for {doc_id}"
                emit(_progress(doc_id, label, "running", step, total, message=msg))
                try:
                    orch = AgenticRAGOrchestrator(
                        settings,
                        vector_store,
                        config,
                    )
                    t0 = time.time()
                    result = orch.analyze(doc_id, ABLATION_QUERY)
                    result.duration_s = round(time.time() - t0, 2)
                    save_analysis_result(result)
                    ev = evaluate_result(result, gt, settings)
                    sr = _build_study_result(doc_id, label, ev, result)
                    all_results.append(sr)
                    doc_evals[label] = ev
                    doc_risk_counts[label] = len(result.risks)
                    emit(
                        _progress(
                            doc_id,
                            label,
                            "completed",
                            step,
                            total,
                            f1=sr.f1,
                            precision=sr.precision,
                            recall=sr.recall,
                            message=f"F1={sr.f1:.3f}",
                        )
                    )
                except Exception as exc:
                    logger.exception("Feilet %s/%s", doc_id, label)
                    emit(
                        _progress(
                            doc_id,
                            label,
                            "error",
                            step,
                            total,
                            message=str(exc)[:200],
                        )
                    )

            # Lagre fulle evalueringsresultater for dette dokumentsettet
            if doc_evals:
                try:
                    save_ablation_evaluations(doc_id, doc_evals, doc_risk_counts)
                except Exception:
                    logger.warning("Kunne ikke lagre ablasjon-evaluering for %s", doc_id)

            step += 1
            full = find_full_eval(doc_id)
            if full:
                full_sr = AblationStudyResult(
                    document_set_id=doc_id,
                    config_label="P+T+R",
                    f1=full["f1"],
                    precision=full["precision"],
                    recall=full["recall"],
                    matched_risks=full["matched_risks"],
                    total_gt_risks=0,
                    duration_s=0.0,
                    input_tokens=0,
                    output_tokens=0,
                )
                all_results.append(full_sr)
                emit(
                    _progress(
                        doc_id,
                        "P+T+R",
                        "completed",
                        step,
                        total,
                        f1=full["f1"],
                        precision=full["precision"],
                        recall=full["recall"],
                        message="FULL eval",
                    )
                )

        event_queue.put_nowait(None)  # Sentinel

    loop = asyncio.get_event_loop()
    loop.run_in_executor(None, run_ablation)

    async def event_generator():
        session_id = str(uuid.uuid4())
        yield f"event: session\ndata: {json.dumps({'session_id': session_id})}\n\n"

        while True:
            # Poll queue med timeout for å holde SSE-connection alive
            try:
                ev = await asyncio.wait_for(event_queue.get(), timeout=30.0)
            except asyncio.TimeoutError:
                # Send heartbeat for å holde connection oppe
                yield ": heartbeat\n\n"
                continue

            if ev is None:
                break
            yield f"event: ablation_progress\ndata: {ev}\n\n"

        # Merg med eksisterende resultater i stedet for å overskrive
        existing_results: list[AblationStudyResult] = []
        existing_doc_ids: list[str] = []
        if ABLATION_RESULTS_FILE.exists():
            try:
                existing = json.loads(
                    ABLATION_RESULTS_FILE.read_text(encoding="utf-8")
                )
                new_doc_ids = set(request.document_set_ids)
                existing_results = [
                    AblationStudyResult(**r)
                    for r in existing.get("results", [])
                    if r.get("document_set_id") not in new_doc_ids
                ]
                existing_doc_ids = [
                    d for d in existing.get("document_set_ids", [])
                    if d not in new_doc_ids
                ]
            except (json.JSONDecodeError, OSError):
                pass

        merged_results = existing_results + all_results
        merged_doc_ids = sorted(set(existing_doc_ids + request.document_set_ids))

        summary = AblationStudySummary(
            results=merged_results,
            averages=_compute_averages(merged_results),
            document_set_ids=merged_doc_ids,
            timestamp=datetime.now().isoformat(),
        )
        ABLATION_RESULTS_FILE.parent.mkdir(parents=True, exist_ok=True)
        ABLATION_RESULTS_FILE.write_text(
            summary.model_dump_json(indent=2),
            encoding="utf-8",
        )
        yield f"event: ablation_done\ndata: {summary.model_dump_json()}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


@router.get("/results")
async def get_results() -> AblationStudySummary:
    """Hent siste ablasjonsstudieresultater."""
    if not ABLATION_RESULTS_FILE.exists():
        raise HTTPException(status_code=404, detail="Ingen ablasjonsstudieresultater funnet")
    return AblationStudySummary.model_validate_json(
        ABLATION_RESULTS_FILE.read_text(encoding="utf-8"),
    )


@router.get("/evaluation/{doc_set_id}")
async def get_ablation_evaluation(doc_set_id: str) -> dict:
    """Hent lagret evaluering for et dokumentsett."""
    data = load_ablation_evaluation(doc_set_id)
    if not data:
        raise HTTPException(status_code=404, detail=f"Ingen evaluering for {doc_set_id}")
    return data


@router.get("/evaluation/{doc_set_id}/configs")
async def get_evaluation_configs(doc_set_id: str) -> list[str]:
    """List tilgjengelige konfigurasjoner for evaluering."""
    configs = list_configs_for_doc_set(doc_set_id)
    if not configs:
        raise HTTPException(status_code=404, detail=f"Ingen resultater for {doc_set_id}")
    return configs


@router.post("/evaluation/{doc_set_id}/{config_label}")
async def evaluate_config(
    doc_set_id: str,
    config_label: str,
    http_request: Request,
) -> dict:
    """Evaluer en enkelt konfigurasjon mot ground truth."""
    settings: Settings = http_request.app.state.settings
    result = evaluate_single_config(doc_set_id, config_label, settings)
    if not result:
        raise HTTPException(
            status_code=404,
            detail=f"Kunne ikke evaluere {config_label} for {doc_set_id}",
        )
    return result


@router.get("/evaluations")
async def list_evaluations() -> list[str]:
    """List dokumentsett med lagrede ablasjon-evalueringer."""
    return list_ablation_evaluations()


@router.post("/save-charts")
async def save_ablation_charts(request: Request) -> dict:
    """Lagre ablasjon-visualiseringer og rapport til disk."""
    import base64

    body = await request.json()
    charts = body.get("charts", [])
    report_md = body.get("report_md", "")

    output_dir = Path("docs/0.6_prosjekt_rapport/4.dokumentasjon/resultater/visualiseringer")
    output_dir.mkdir(parents=True, exist_ok=True)

    saved = []
    for chart in charts:
        filename = chart["filename"]
        png_data = base64.b64decode(chart["base64_png"])
        (output_dir / filename).write_bytes(png_data)
        saved.append(filename)

    if report_md:
        report_filename = body.get("report_filename", "ablation_results_report.md")
        (output_dir / report_filename).write_text(report_md, encoding="utf-8")
        saved.append(report_filename)

    return {"saved": saved}


ABLATION_DIR_PREFIXES = ("ablation_",)
TRACES_DIR = Path("data/traces")


@router.delete("/document-set/{doc_set_id}")
async def delete_ablation_document_set(doc_set_id: str) -> dict:
    """Cascade-slett alle ablasjon-resultater for et dokumentsett.

    Sletter analyseresultater, evalueringsrecords, risikokategoriseringer
    og trace-filer. P+T+R (full agentic) beholdes.
    """
    from src.evaluation.category_store import CategoryStore

    doc_dir = RESULTS_DIR / doc_set_id
    if not doc_dir.exists():
        raise HTTPException(status_code=404, detail=f"Dokumentsett {doc_set_id} ikke funnet")

    deleted_run_ids: list[str] = []
    deleted_files = 0

    # 1. Slett ablasjon-resultatfiler og samle run_ids
    for subdir in doc_dir.iterdir():
        if not subdir.is_dir() or not subdir.name.startswith(ABLATION_DIR_PREFIXES):
            continue
        for json_file in subdir.glob("*.json"):
            deleted_run_ids.append(json_file.stem)
            json_file.unlink()
            deleted_files += 1
        # Fjern tom mappe
        if not any(subdir.iterdir()):
            subdir.rmdir()

    if not deleted_run_ids:
        raise HTTPException(status_code=404, detail=f"Ingen ablasjon-resultater for {doc_set_id}")

    # 2. Slett evalueringsrecords som refererer til disse run_ids
    deleted_evals = 0
    if EVAL_HISTORY_DIR.exists():
        run_id_set = set(deleted_run_ids)
        for eval_path in list(EVAL_HISTORY_DIR.glob("*.json")):
            try:
                data = json.loads(eval_path.read_text(encoding="utf-8"))
                sr = data.get("system_results", {})
                has_ablation_ref = any(
                    v.get("run_id") in run_id_set for v in sr.values() if isinstance(v, dict)
                )
                if has_ablation_ref:
                    eval_path.unlink()
                    deleted_evals += 1
            except (json.JSONDecodeError, OSError):
                continue

    # 3. Fjern risikokategoriseringer for slettede run_ids (ablasjon-separat fil)
    store = CategoryStore(path=Path("data/ablation_risk_categories.json"))
    deleted_cats = store.remove_mappings_by_run_ids(deleted_run_ids)

    # 4. Slett trace-mapper
    deleted_traces = 0
    for run_id in deleted_run_ids:
        trace_dir = TRACES_DIR / run_id
        if trace_dir.exists():
            shutil.rmtree(trace_dir)
            deleted_traces += 1

    # 5. Slett ablasjon-evaluering
    from api.routers._ablation_evaluation import ABLATION_EVAL_DIR

    eval_file = ABLATION_EVAL_DIR / f"{doc_set_id}.json"
    if eval_file.exists():
        eval_file.unlink()

    # 6. Oppdater ablation_study_results.json
    if ABLATION_RESULTS_FILE.exists():
        try:
            summary = json.loads(ABLATION_RESULTS_FILE.read_text(encoding="utf-8"))
            summary["results"] = [
                r for r in summary.get("results", []) if r.get("document_set_id") != doc_set_id
            ]
            summary["document_set_ids"] = [
                d for d in summary.get("document_set_ids", []) if d != doc_set_id
            ]
            summary["averages"] = _compute_averages(
                [AblationStudyResult(**r) for r in summary["results"]]
            )
            if summary["results"]:
                ABLATION_RESULTS_FILE.write_text(
                    json.dumps(summary, indent=2, ensure_ascii=False), encoding="utf-8"
                )
            else:
                ABLATION_RESULTS_FILE.unlink()
        except (json.JSONDecodeError, OSError):
            pass

    logger.info(
        "Cascade-slettet ablasjon for %s: %d filer, %d eval, %d kategorier, %d traces",
        doc_set_id,
        deleted_files,
        deleted_evals,
        deleted_cats,
        deleted_traces,
    )

    return {
        "deleted_document_set": doc_set_id,
        "deleted_results": deleted_files,
        "deleted_evaluations": deleted_evals,
        "deleted_categories": deleted_cats,
        "deleted_traces": deleted_traces,
    }
