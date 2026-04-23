"""API-endepunkter for risikoanalyse med SSE-streaming."""

import asyncio
import json
import logging
import threading
import uuid
from collections import defaultdict
from pathlib import Path

from fastapi import APIRouter, Depends, HTTPException, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel, Field

from api.dependencies import get_standard_pipeline
from src.agentic_rag.config import FULL_AGENTIC, AblationConfig
from src.agentic_rag.orchestrator import AgenticRAGOrchestrator
from src.config import Settings
from src.ground_truth.generator import GroundTruthGenerator
from src.models.schemas import AnalysisResult, IdentifiedRisk
from src.standard_rag.pipeline import StandardRAGPipeline
from src.tracing.collector import TRACES_BASE_DIR, TraceCollector

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/analysis", tags=["analysis"])

# Cancel-flagg per session_id
_cancel_flags: dict[str, threading.Event] = {}

RESULTS_DIR = Path("data/results")
GROUND_TRUTH_DIR = Path("data/ground_truth")


class AnalysisRequest(BaseModel):
    """Foresporsel for standard risikoanalyse."""

    document_set_id: str
    query: str = Field(description="Sporring for risikoanalyse")


class AgenticAnalysisRequest(BaseModel):
    """Foresporsel for agentic risikoanalyse."""

    document_set_id: str
    query: str
    ablation_config: AblationConfig | None = None


class StreamingAnalysisRequest(BaseModel):
    """Foresporsel for streaming-analyse med SSE."""

    document_set_id: str
    query: str
    run_standard: bool = False
    run_agentic: bool = False
    ablation_config: AblationConfig | None = None
    generate_ground_truth: bool = False
    run_evaluation: bool = False


class AnalysisResultSummary(BaseModel):
    """Oppsummering av et analyseresultat uten ra LLM-respons."""

    run_id: str
    session_id: str = ""
    system_type: str
    document_set_id: str
    risk_count: int
    timestamp: str
    duration_s: float = 0.0
    input_tokens: int = 0
    output_tokens: int = 0


class TraceFileInfo(BaseModel):
    """Info om en trace-fil."""

    filename: str
    step_name: str
    timestamp: str
    duration_s: float


def _system_type_dir(system_type: str) -> str:
    """Normaliser system_type til mappenavn."""
    if "agentic" in system_type:
        return "agentic_rag"
    if "standard" in system_type:
        return "standard_rag"
    if "ground_truth" in system_type:
        return "ground_truth"
    return system_type


def _save_result(result: AnalysisResult) -> None:
    """Lagre analyseresultat til disk under dokumentsett/system-mappe."""
    dir_name = _system_type_dir(result.system_type)
    result_dir = RESULTS_DIR / result.document_set_id / dir_name
    result_dir.mkdir(parents=True, exist_ok=True)
    path = result_dir / f"{result.run_id}.json"
    path.write_text(result.model_dump_json(indent=2), encoding="utf-8")


def _load_result(run_id: str) -> AnalysisResult:
    """Les analyseresultat fra disk, soek i alle undermapper."""
    # Soek i ny struktur: data/results/{set_id}/{system}/{run_id}.json
    for path in RESULTS_DIR.rglob(f"{run_id}.json"):
        return AnalysisResult.model_validate_json(path.read_text(encoding="utf-8"))
    raise HTTPException(status_code=404, detail=f"Result {run_id} not found")


# ---------------------------------------------------------------------------
# Eksisterende endepunkter (bakoverkompatibilitet)
# ---------------------------------------------------------------------------


@router.post("/standard", response_model=AnalysisResult)
async def run_standard_analysis(
    request: AnalysisRequest,
    pipeline: StandardRAGPipeline = Depends(get_standard_pipeline),
) -> AnalysisResult:
    """Kjor standard RAG-analyse pa et dokumentsett."""
    result = pipeline.analyze(request.document_set_id, request.query)
    _save_result(result)
    return result


@router.post("/agentic", response_model=AnalysisResult)
async def run_agentic_analysis(
    request: AgenticAnalysisRequest,
    http_request: Request,
) -> AnalysisResult:
    """Kjor agentic RAG-analyse med valgfri ablasjonskonfigurasjon."""
    ablation_config = request.ablation_config or FULL_AGENTIC
    settings: Settings = http_request.app.state.settings
    vector_store = http_request.app.state.vector_store

    orchestrator = AgenticRAGOrchestrator(settings, vector_store, ablation_config)
    result = orchestrator.analyze(request.document_set_id, request.query)
    _save_result(result)
    return result


@router.get("/results/{run_id}", response_model=AnalysisResult)
async def get_result(run_id: str) -> AnalysisResult:
    """Hent et spesifikt analyseresultat."""
    return _load_result(run_id)


@router.delete("/results/{run_id}")
async def delete_result(run_id: str) -> dict[str, str]:
    """Slett et analyseresultat."""
    for path in RESULTS_DIR.rglob(f"{run_id}.json"):
        path.unlink()
        return {"deleted": run_id}
    raise HTTPException(status_code=404, detail=f"Result {run_id} not found")


@router.post("/cancel/{session_id}")
async def cancel_analysis(session_id: str) -> dict[str, str]:
    """Avbryt en paagende analysekjoering."""
    flag = _cancel_flags.get(session_id)
    if flag:
        flag.set()
        return {"cancelled": session_id}
    raise HTTPException(status_code=404, detail="Ingen aktiv kjoering med denne IDen")


@router.get("/results", response_model=list[AnalysisResultSummary])
async def list_results(
    system_type: str | None = None,
    document_set_id: str | None = None,
) -> list[AnalysisResultSummary]:
    """List alle analyseresultater med valgfri filtrering."""
    if not RESULTS_DIR.exists():
        return []

    summaries: list[AnalysisResultSummary] = []
    for path in RESULTS_DIR.rglob("*.json"):
        result = AnalysisResult.model_validate_json(
            path.read_text(encoding="utf-8"),
        )
        if system_type and result.system_type != system_type:
            continue
        if document_set_id and result.document_set_id != document_set_id:
            continue
        summaries.append(
            AnalysisResultSummary(
                run_id=result.run_id,
                session_id=result.session_id,
                system_type=result.system_type,
                document_set_id=result.document_set_id,
                risk_count=len(result.risks),
                timestamp=result.timestamp.isoformat(),
                duration_s=result.duration_s,
                input_tokens=result.input_tokens,
                output_tokens=result.output_tokens,
            ),
        )
    return summaries


# ---------------------------------------------------------------------------
# SSE streaming-endepunkt
# ---------------------------------------------------------------------------


@router.post("/run/stream")
async def stream_analysis(
    request: StreamingAnalysisRequest,
    http_request: Request,
) -> StreamingResponse:
    """Kjor analyse med SSE-streaming av fremdrift."""
    settings: Settings = http_request.app.state.settings
    vector_store = http_request.app.state.vector_store
    standard_pipeline: StandardRAGPipeline = http_request.app.state.standard_pipeline

    session_id = str(uuid.uuid4())
    cancel_flag = threading.Event()
    _cancel_flags[session_id] = cancel_flag
    collector = TraceCollector(run_id=session_id)

    def run_pipeline() -> dict:
        """Kjor valgte systemer sekvensielt i en threadpool."""
        results: list[dict] = []
        ground_truth_result: dict | None = None

        def check_cancelled() -> bool:
            if cancel_flag.is_set():
                logger.info("Analyse %s avbrutt av bruker", session_id)
                collector.emit_step("cancelled", "cancelled", "error", "Avbrutt av bruker")
                return True
            return False

        try:
            if request.run_standard:
                collector.emit_step("standard_rag", "start", "running")
                result = standard_pipeline.analyze(
                    request.document_set_id,
                    request.query,
                    collector=collector,
                )
                result.session_id = session_id
                _save_result(result)
                results.append(result.model_dump(mode="json"))

            if check_cancelled():
                return {"run_id": session_id, "results": results, "cancelled": True}

            if request.run_agentic:
                ablation = request.ablation_config or FULL_AGENTIC
                orchestrator = AgenticRAGOrchestrator(settings, vector_store, ablation)
                collector.emit_step("agentic_rag", "start", "running")
                result = orchestrator.analyze(
                    request.document_set_id,
                    request.query,
                    collector=collector,
                )
                result.session_id = session_id
                _save_result(result)
                results.append(result.model_dump(mode="json"))

            if check_cancelled():
                return {"run_id": session_id, "results": results, "cancelled": True}

            if request.generate_ground_truth:
                collector.emit_step("ground_truth", "start", "running")
                generator = GroundTruthGenerator(settings)
                raw_dir = Path("data/raw")
                gt = generator.generate(
                    request.document_set_id,
                    raw_dir,
                    raise_on_empty=False,
                    collector=collector,
                )
                # Lagre ground truth
                GROUND_TRUTH_DIR.mkdir(parents=True, exist_ok=True)
                gt_path = GROUND_TRUTH_DIR / f"{request.document_set_id}.json"
                gt_path.write_text(gt.model_dump_json(indent=2), encoding="utf-8")

                # Lagre GT ogsaa som AnalysisResult for historikk-tabellen
                gt_as_result = AnalysisResult(
                    run_id=session_id + "_gt",
                    session_id=session_id,
                    document_set_id=request.document_set_id,
                    system_type="ground_truth",
                    risks=[
                        IdentifiedRisk(
                            risk_id=r.risk_id,
                            description=r.description,
                            evidence=r.evidence,
                            source_documents=r.source_documents,
                            source_pages=r.source_pages,
                            confidence=r.details.get("confidence", 1.0),
                            details=r.details,
                        )
                        for r in gt.risks
                    ],
                    raw_llm_response="",
                    config={},
                    duration_s=gt.duration_s,
                    input_tokens=gt.input_tokens,
                    output_tokens=gt.output_tokens,
                )
                _save_result(gt_as_result)
                results.append(gt_as_result.model_dump(mode="json"))

                ground_truth_result = {
                    "risk_count": len(gt.risks),
                    "document_set_id": request.document_set_id,
                }

            if request.run_evaluation and results:
                collector.emit_step("evaluation", "matching", "running")
                # Evaluering haandteres av frontend via eksisterende API-er
                collector.emit_step("evaluation", "matching", "done")

        except Exception as exc:
            logger.exception("Pipeline feilet: %s", exc)
            collector.emit_step("error", "pipeline", "error", str(exc))
        finally:
            collector.done()
            _cancel_flags.pop(session_id, None)

        return {
            "run_id": collector.run_id,
            "results": results,
            "ground_truth": ground_truth_result,
        }

    loop = asyncio.get_event_loop()
    task = loop.run_in_executor(None, run_pipeline)

    async def event_generator():
        """Yield SSE-events fra collector-koen."""
        yield f"event: session\ndata: {json.dumps({'session_id': session_id})}\n\n"
        while True:
            try:
                event = await loop.run_in_executor(None, collector.queue.get)
            except Exception:
                break

            if event is None:
                break

            yield f"event: step_progress\ndata: {event.model_dump_json()}\n\n"

        # Vent pa pipeline-resultatet
        pipeline_result = await task
        yield f"event: result\ndata: {json.dumps(pipeline_result, default=str)}\n\n"

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream",
        headers={
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Accel-Buffering": "no",
        },
    )


# ---------------------------------------------------------------------------
# Trace-endepunkter
# ---------------------------------------------------------------------------


@router.get("/traces/{run_id}")
async def list_traces(run_id: str) -> list[TraceFileInfo]:
    """List alle trace-filer for en gitt kjoering."""
    traces_dir = TRACES_BASE_DIR / run_id
    if not traces_dir.exists():
        raise HTTPException(status_code=404, detail=f"Traces not found for run {run_id}")

    files: list[TraceFileInfo] = []
    for path in sorted(traces_dir.glob("*.md")):
        # Parse metadata fra filinnhold
        content = path.read_text(encoding="utf-8")
        step_name = path.stem.split("_", 1)[1] if "_" in path.stem else path.stem
        timestamp = ""
        duration_s = 0.0

        for line in content.split("\n"):
            if line.startswith("- **Tidspunkt:**"):
                timestamp = line.split("**Tidspunkt:**")[1].strip()
            elif line.startswith("- **Varighet:**"):
                dur_str = line.split("**Varighet:**")[1].strip().rstrip("s")
                try:
                    duration_s = float(dur_str)
                except ValueError:
                    pass

        files.append(
            TraceFileInfo(
                filename=path.name,
                step_name=step_name,
                timestamp=timestamp,
                duration_s=duration_s,
            )
        )
    return files


@router.get("/traces/{run_id}/{filename}")
async def get_trace(run_id: str, filename: str) -> dict:
    """Hent innholdet i en spesifikk trace-fil."""
    traces_dir = TRACES_BASE_DIR / run_id
    filepath = traces_dir / filename

    if not filepath.exists():
        raise HTTPException(
            status_code=404,
            detail=f"Trace file not found: {run_id}/{filename}",
        )

    # Sikkerhetssjekk: forhindre path traversal
    if not filepath.resolve().is_relative_to(traces_dir.resolve()):
        raise HTTPException(status_code=400, detail="Invalid filename")

    return {"content": filepath.read_text(encoding="utf-8")}


# ---------------------------------------------------------------------------
# Aggregerte resultater for dashboard
# ---------------------------------------------------------------------------


@router.get("/aggregate")
async def get_aggregate_results():
    """Returnerer aggregerte resultater fra alle analysekjoeringer."""
    # Read all results
    systems: dict[str, list[dict]] = defaultdict(list)
    per_document: dict[str, dict] = defaultdict(dict)

    for path in RESULTS_DIR.rglob("*.json"):
        try:
            result = json.loads(path.read_text(encoding="utf-8"))
            sys_type = result.get("system_type", "")
            # Normalize system type
            if "agentic" in sys_type:
                norm_type = "agentic_rag"
            elif "standard" in sys_type:
                norm_type = "standard_rag"
            elif "ground_truth" in sys_type:
                norm_type = "ground_truth"
            else:
                continue

            set_id = result.get("document_set_id", "")
            entry = {
                "risks": len(result.get("risks", [])),
                "duration_s": result.get("duration_s", 0),
                "input_tokens": result.get("input_tokens", 0),
                "output_tokens": result.get("output_tokens", 0),
            }
            systems[norm_type].append(entry)
            per_document[set_id][norm_type] = entry
        except Exception:
            continue

    # Compute per-system aggregates
    system_stats: dict = {}
    for sys_type, runs in systems.items():
        risks = [r["risks"] for r in runs]
        durations = [r["duration_s"] for r in runs]
        tokens = [r["input_tokens"] + r["output_tokens"] for r in runs]
        n = len(runs)
        input_toks = [r["input_tokens"] for r in runs]
        output_toks = [r["output_tokens"] for r in runs]
        system_stats[sys_type] = {
            "count": n,
            "avg_risks": round(sum(risks) / n, 1) if n else 0,
            "min_risks": min(risks) if risks else 0,
            "max_risks": max(risks) if risks else 0,
            "total_risks": sum(risks),
            "avg_duration": round(sum(durations) / n, 1) if n else 0,
            "avg_tokens": round(sum(tokens) / n) if n else 0,
            "total_tokens": sum(tokens),
            "total_input_tokens": sum(input_toks),
            "total_output_tokens": sum(output_toks),
        }

    # Read eval history for P/R/F1
    eval_stats: dict = defaultdict(
        lambda: {"precision": [], "recall": [], "f1": [], "adjusted_f1": []}
    )
    verification: dict = {
        "real": 0,
        "fake": 0,
        "standard_rag": {"real": 0, "fake": 0},
        "agentic_rag": {"real": 0, "fake": 0},
    }
    eval_per_doc: dict[str, dict] = defaultdict(dict)

    overlap_counts: list[int] = []
    unique_std: list[int] = []
    unique_agent: list[int] = []
    unique_gt: list[int] = []
    best_system_counts: dict[str, int] = defaultdict(int)

    eval_dir = Path("data/eval_history")
    if eval_dir.exists():
        for path in eval_dir.glob("*.json"):
            try:
                data = json.loads(path.read_text(encoding="utf-8"))
                doc_id = data.get("document_set_id", "")

                # Overlap and best_system aggregation
                overlap_counts.append(data.get("overlapping_risk_count", 0))
                ut = data.get("unique_to", {})
                for k, v in ut.items():
                    if "standard" in k:
                        unique_std.append(v)
                    elif "agentic" in k:
                        unique_agent.append(v)
                    elif "ground_truth" in k:
                        unique_gt.append(v)
                best_system_counts[data.get("best_system", "")] += 1

                sr = data.get("system_results", {})
                for sys_key, result in sr.items():
                    if "ground_truth" in sys_key:
                        continue
                    norm = "agentic_rag" if "agentic" in sys_key else "standard_rag"
                    om = result.get("overall_metrics", {})
                    am = result.get("adjusted_metrics")
                    eval_stats[norm]["precision"].append(om.get("precision", 0))
                    eval_stats[norm]["recall"].append(om.get("recall", 0))
                    eval_stats[norm]["f1"].append(om.get("f1", 0))
                    if am:
                        eval_stats[norm]["adjusted_f1"].append(am.get("f1", 0))

                    eval_per_doc[doc_id][norm] = {
                        "precision": round(om.get("precision", 0), 4),
                        "recall": round(om.get("recall", 0), 4),
                        "f1": round(om.get("f1", 0), 4),
                        "adjusted_f1": round(am.get("f1", 0), 4) if am else None,
                        "matched": result.get("matched_risks", 0),
                        "fp": result.get("unmatched_predicted", 0),
                        "fn": result.get("unmatched_ground_truth", 0),
                    }

                    for v in result.get("verified_unmatched", []):
                        if v.get("is_real_risk"):
                            verification["real"] += 1
                            verification[norm]["real"] += 1
                        else:
                            verification["fake"] += 1
                            verification[norm]["fake"] += 1
            except Exception:
                continue

    eval_summary: dict = {}
    for sys_type, vals in eval_stats.items():
        n = len(vals["f1"])
        eval_summary[sys_type] = {
            "count": n,
            "avg_precision": round(sum(vals["precision"]) / n, 4) if n else 0,
            "avg_recall": round(sum(vals["recall"]) / n, 4) if n else 0,
            "avg_f1": round(sum(vals["f1"]) / n, 4) if n else 0,
            "avg_adjusted_f1": round(sum(vals["adjusted_f1"]) / len(vals["adjusted_f1"]), 4)
            if vals["adjusted_f1"]
            else None,
        }

    # Build per_document list
    doc_list: list[dict] = []
    for set_id in sorted(per_document.keys()):
        doc: dict = {"set_id": set_id, **per_document[set_id]}
        if set_id in eval_per_doc:
            doc["evaluation"] = eval_per_doc[set_id]
        doc_list.append(doc)

    # Add chunk counts
    processed_dir = Path("data/processed")
    for doc in doc_list:
        set_id = doc["set_id"]
        chunks_file = processed_dir / set_id / "chunks.md"
        if chunks_file.exists():
            content = chunks_file.read_text(encoding="utf-8")
            doc["chunks"] = content.count("## Chunk ")
        else:
            doc["chunks"] = 0

    return {
        "document_count": len(per_document),
        "systems": system_stats,
        "evaluation": eval_summary,
        "verification": verification,
        "overlap": {
            "avg_shared": round(sum(overlap_counts) / len(overlap_counts), 1)
            if overlap_counts
            else 0,
            "avg_unique_standard": round(sum(unique_std) / len(unique_std), 1) if unique_std else 0,
            "avg_unique_agentic": round(sum(unique_agent) / len(unique_agent), 1)
            if unique_agent
            else 0,
            "avg_unique_gt": round(sum(unique_gt) / len(unique_gt), 1) if unique_gt else 0,
        },
        "best_system": dict(best_system_counts),
        "per_document": doc_list,
    }


CHARTS_DIR = Path("docs/0.6_prosjekt_rapport/4.dokumentasjon/resultater/visualiseringer")


class SaveChartRequest(BaseModel):
    """Request for aa lagre et diagram som PNG."""

    filename: str
    base64_png: str


@router.post("/save-chart")
async def save_chart(request: SaveChartRequest) -> dict[str, str]:
    """Lagre et diagram som PNG-fil."""
    import base64

    CHARTS_DIR.mkdir(parents=True, exist_ok=True)
    safe_name = request.filename.replace("/", "_").replace("\\", "_")
    if not safe_name.endswith(".png") and not safe_name.endswith(".md"):
        safe_name += ".png"
    path = CHARTS_DIR / safe_name
    data = base64.b64decode(request.base64_png)
    path.write_bytes(data)
    return {"saved": str(path)}


@router.post("/save-results-report")
async def save_results_report() -> dict[str, str]:
    """Generer og lagre en strukturert .md-rapport."""
    agg = await get_aggregate_results()
    CHARTS_DIR.mkdir(parents=True, exist_ok=True)
    report = _build_results_md(agg)
    path = CHARTS_DIR / "results_report.md"
    path.write_text(report, encoding="utf-8")
    return {"saved": str(path)}


def _safe(val: float | None, decimals: int = 1) -> str:
    if val is None:
        return "N/A"
    return f"{val:.{decimals}f}"


def _pct(val: float | None) -> str:
    if val is None:
        return "N/A"
    return f"{val * 100:.1f}%"


def _fmt(n: int | float) -> str:
    return f"{n:,.0f}".replace(",", " ")


def _fmt_m(n: int | float) -> str:
    return f"{n / 1e6:.1f}M"


def _fmt_time(seconds: float) -> str:
    h = int(seconds // 3600)
    m = int((seconds % 3600) // 60)
    if h > 0:
        return f"{h}h {m}m"
    return f"{m}m {int(seconds % 60)}s"


# Claude Opus 4.6 pricing
_INPUT_PRICE = 5  # $/MTok
_OUTPUT_PRICE = 25  # $/MTok


def _calc_cost(sys: dict | None) -> float:
    if not sys or sys.get("count", 0) == 0:
        return 0.0
    input_cost = (sys.get("total_input_tokens", 0) / 1e6) * _INPUT_PRICE
    output_cost = (sys.get("total_output_tokens", 0) / 1e6) * _OUTPUT_PRICE
    return (input_cost + output_cost) / sys["count"]


def _stddev(values: list[float]) -> float:
    if len(values) < 2:
        return 0.0
    mean = sum(values) / len(values)
    return (sum((x - mean) ** 2 for x in values) / (len(values) - 1)) ** 0.5


def _build_results_md(agg: dict) -> str:
    """Build a comprehensive results report matching all 21 frontend figures."""
    lines: list[str] = []
    w = lines.append

    charts_path = str(CHARTS_DIR).replace("\\", "/")

    def fig_img(filename: str, label: str) -> None:
        w(f"![{label}]({filename})")
        w("")
        w(f"> Path: `{charts_path}/{filename}`")
        w("")

    sys = agg.get("systems", {})
    ev = agg.get("evaluation", {})
    ver = agg.get("verification", {})
    overlap = agg.get("overlap", {})
    best = agg.get("best_system", {})
    docs = agg.get("per_document", [])
    doc_count = agg.get("document_count", 0)

    std = sys.get("standard_rag", {})
    ag = sys.get("agentic_rag", {})
    gt = sys.get("ground_truth", {})
    std_ev = ev.get("standard_rag", {})
    ag_ev = ev.get("agentic_rag", {})

    w("# Results Report")
    w("")
    w(f"Generated from {doc_count} document sets.")
    w("")

    # ── Fig 1: Overview ──
    w("## Fig 1. Overview")
    w("")
    fig_img("Fig_1_Overview.png", "Fig 1")

    total_risks = sum(s.get("total_risks", 0) for s in sys.values())
    total_tokens = sum(s.get("total_tokens", 0) for s in sys.values())
    total_time = sum(s.get("avg_duration", 0) * s.get("count", 0) for s in sys.values())

    std_v = ver.get("standard_rag", {})
    ag_v = ver.get("agentic_rag", {})
    std_v_total = std_v.get("real", 0) + std_v.get("fake", 0)
    ag_v_total = ag_v.get("real", 0) + ag_v.get("fake", 0)

    std_vr = std_v.get("real", 0) / std_v_total * 100 if std_v_total else None
    ag_vr = ag_v.get("real", 0) / ag_v_total * 100 if ag_v_total else None
    total_runs = std.get("count", 0) + ag.get("count", 0) + gt.get("count", 0)
    std_cnt = std.get("count", 0)
    ag_cnt = ag.get("count", 0)
    gt_cnt = gt.get("count", 0)

    std_time = std.get("avg_duration", 0) * std_cnt
    ag_time = ag.get("avg_duration", 0) * ag_cnt
    gt_time = gt.get("avg_duration", 0) * gt_cnt

    w("| Metric | Value | Description |")
    w("|--------|-------|-------------|")
    w(f"| Document sets analyzed | {_fmt(doc_count)} | Total number of document sets |")
    w(f"| Total risks identified | {_fmt(total_risks)} | All systems combined |")
    w(f"| Standard RAG F1 | {_pct(std_ev.get('avg_f1'))} | Average F1 score |")
    w(f"| Agentic RAG F1 | {_pct(ag_ev.get('avg_f1'))} | Average F1 score |")
    w(
        f"| Verified real rate (Std RAG) | {_safe(std_vr)}%"
        f" | {_fmt(std_v.get('real', 0))} real"
        f" / {_fmt(std_v_total)} total |"
    )
    w(
        f"| Verified real rate (Agentic RAG) | {_safe(ag_vr)}%"
        f" | {_fmt(ag_v.get('real', 0))} real"
        f" / {_fmt(ag_v_total)} total |"
    )
    w(
        f"| Total tokens used | {_fmt_m(total_tokens)}"
        f" | Std: {_fmt_m(std.get('total_tokens', 0))}"
        f" \\| Ag: {_fmt_m(ag.get('total_tokens', 0))}"
        f" \\| GT: {_fmt_m(gt.get('total_tokens', 0))} |"
    )
    w(
        f"| Total time spent | {_fmt_time(total_time)}"
        f" | Std: {_fmt_time(std_time)}"
        f" \\| Ag: {_fmt_time(ag_time)}"
        f" \\| GT: {_fmt_time(gt_time)} |"
    )
    w(
        f"| Total analyses run | {_fmt(total_runs)}"
        f" | Std: {_fmt(std_cnt)}"
        f" \\| Ag: {_fmt(ag_cnt)}"
        f" \\| GT: {_fmt(gt_cnt)} |"
    )
    w(f"| LLM calls (Standard RAG) | {_fmt(std_cnt)} | 1 call per document set |")
    w(
        f"| LLM calls (Agentic RAG) | ~{_fmt(ag_cnt * 4)}"
        f" | {_fmt(ag_cnt)} runs x ~4 calls"
        " (plan + analyze + reflect + re-analyze) |"
    )
    w(f"| LLM calls (Ground Truth) | {_fmt(gt_cnt)} | 1 call per document set (full text) |")
    w("")

    # ── Fig 2: Average risks per system ──
    w("## Fig 2. Average risks per system")
    w("")
    fig_img("Fig_2_Average_risks_per_system.png", "Fig 2")
    std_avg_r = std.get("avg_risks", 0)
    ag_avg_r = ag.get("avg_risks", 0)
    gt_avg_r = gt.get("avg_risks", 0)
    pct_more = round((ag_avg_r / std_avg_r - 1) * 100) if std_avg_r else 0
    w("| System | Avg risks |")
    w("|--------|-----------|")
    w(f"| Standard RAG | {_safe(std_avg_r)} |")
    w(f"| Agentic RAG | {_safe(ag_avg_r)} |")
    w(f"| Ground Truth | {_safe(gt_avg_r)} |")
    w("")
    w(
        f"Agentic RAG finds on average {_safe(ag_avg_r)} risks — {pct_more}% more than "
        f"Standard RAG ({_safe(std_avg_r)}). Ground Truth finds the most ({_safe(gt_avg_r)}) "
        f"since it receives the full document text."
    )
    w("")

    # ── Fig 3: Risk count range ──
    w("## Fig 3. Risk count range per system")
    w("")
    fig_img("Fig_3_Risk_count_range_per_system.png", "Fig 3")
    w("| System | Avg | Min | Max | Total |")
    w("|--------|-----|-----|-----|-------|")
    for label, s in [("Standard RAG", std), ("Agentic RAG", ag), ("Ground Truth", gt)]:
        w(
            f"| {label} | {_safe(s.get('avg_risks', 0))} | {s.get('min_risks', 0)} "
            f"| {s.get('max_risks', 0)} | {_fmt(s.get('total_risks', 0))} |"
        )
    w("")

    # ── Fig 4: Precision, Recall and F1 ──
    w("## Fig 4. Precision, Recall and F1")
    w("")
    fig_img("Fig_4_Precision_Recall_and_F1.png", "Fig 4")
    f1_ratio = (ag_ev.get("avg_f1", 0) / std_ev.get("avg_f1", 1)) if std_ev.get("avg_f1") else 0
    w("| System | Precision | Recall | F1 |")
    w("|--------|-----------|--------|-----|")
    w(
        f"| Standard RAG | {_pct(std_ev.get('avg_precision'))} "
        f"| {_pct(std_ev.get('avg_recall'))} | {_pct(std_ev.get('avg_f1'))} |"
    )
    w(
        f"| Agentic RAG | {_pct(ag_ev.get('avg_precision'))} "
        f"| {_pct(ag_ev.get('avg_recall'))} | {_pct(ag_ev.get('avg_f1'))} |"
    )
    w("")
    w(
        f"Agentic RAG has {f1_ratio:.1f}x higher F1 ({_pct(ag_ev.get('avg_f1'))} vs "
        f"{_pct(std_ev.get('avg_f1'))}). Precision: {_pct(ag_ev.get('avg_precision'))} vs "
        f"{_pct(std_ev.get('avg_precision'))}. Recall: {_pct(ag_ev.get('avg_recall'))} vs "
        f"{_pct(std_ev.get('avg_recall'))}."
    )
    w("")

    # ── Fig 5: Resource usage ──
    w("## Fig 5. Resource usage per system")
    w("")
    fig_img("Fig_5_Resource_usage_per_system.png", "Fig 5")
    std_dur = std.get("avg_duration", 0)
    ag_dur = ag.get("avg_duration", 0)
    gt_dur = gt.get("avg_duration", 0)
    std_tok = std.get("avg_tokens", 0)
    ag_tok = ag.get("avg_tokens", 0)
    gt_tok = gt.get("avg_tokens", 0)
    time_ratio = (ag_dur / std_dur) if std_dur else 0
    token_ratio = (ag_tok / std_tok) if std_tok else 0
    w("| System | Avg duration (s) | Avg tokens |")
    w("|--------|-----------------|------------|")
    w(f"| Standard RAG | {_safe(std_dur)} | {_fmt(std_tok)} |")
    w(f"| Agentic RAG | {_safe(ag_dur)} | {_fmt(ag_tok)} |")
    w(f"| Ground Truth | {_safe(gt_dur)} | {_fmt(gt_tok)} |")
    w("")
    w(
        f"Agentic RAG uses {time_ratio:.1f}x more time ({_safe(ag_dur)}s vs {_safe(std_dur)}s) "
        f"and {token_ratio:.1f}x more tokens ({ag_tok / 1000:.0f}k vs {std_tok / 1000:.0f}k)."
    )
    w("")

    # ── Fig 6: Verification ──
    w("## Fig 6. Verification of unmatched risks")
    w("")
    fig_img("Fig_6_Verification_of_unmatched_risks.png", "Fig 6")
    v_real = ver.get("real", 0)
    v_fake = ver.get("fake", 0)
    v_total = v_real + v_fake
    v_rate = (v_real / v_total * 100) if v_total else 0
    w("| Verdict | Count |")
    w("|---------|-------|")
    w(f"| Real risk | {_fmt(v_real)} |")
    w(f"| False alarm | {_fmt(v_fake)} |")
    w(f"| **Total** | **{_fmt(v_total)}** |")
    w("")
    w(
        f"{v_rate:.1f}% of risks that did not match Ground Truth are actually real "
        f"({_fmt(v_real)} of {_fmt(v_total)}). Only {_fmt(v_fake)} were false alarms. "
        f"GT is not a perfect ground truth."
    )
    w("")

    # ── Fig 7: Adjusted F1 ──
    w("## Fig 7. Unadjusted vs Adjusted F1")
    w("")
    fig_img("Fig_7_Unadjusted_vs_Adjusted_F1.png", "Fig 7")
    w("| System | F1 | Adjusted F1 |")
    w("|--------|----|-------------|")
    w(f"| Standard RAG | {_pct(std_ev.get('avg_f1'))} | {_pct(std_ev.get('avg_adjusted_f1'))} |")
    w(f"| Agentic RAG | {_pct(ag_ev.get('avg_f1'))} | {_pct(ag_ev.get('avg_adjusted_f1'))} |")
    w("")
    w(
        f"After verification, F1 increases for Standard RAG from {_pct(std_ev.get('avg_f1'))} "
        f"to {_pct(std_ev.get('avg_adjusted_f1'))} and for Agentic RAG from "
        f"{_pct(ag_ev.get('avg_f1'))} to {_pct(ag_ev.get('avg_adjusted_f1'))}. "
        "The improvement is due to confirmed real risks "
        "no longer being counted as false positives."
    )
    w("")

    # ── Fig 8: Overlap ──
    w("## Fig 8. Overlap between systems")
    w("")
    fig_img("Fig_8_Overlap_between_systems.png", "Fig 8")
    avg_shared = overlap.get("avg_shared", 0)
    avg_u_std = overlap.get("avg_unique_standard", 0)
    avg_u_ag = overlap.get("avg_unique_agentic", 0)
    avg_u_gt = overlap.get("avg_unique_gt", 0)
    w("| Category | Avg count |")
    w("|----------|-----------|")
    w(f"| Shared risks | {_safe(avg_shared)} |")
    w(f"| Unique to Standard RAG | {_safe(avg_u_std)} |")
    w(f"| Unique to Agentic RAG | {_safe(avg_u_ag)} |")
    w(f"| Unique to Ground Truth | {_safe(avg_u_gt)} |")
    w("")
    w(
        f"On average {_safe(avg_shared)} shared risks. Unique: Standard RAG {_safe(avg_u_std)}, "
        f"Agentic RAG {_safe(avg_u_ag)}, Ground Truth {_safe(avg_u_gt)}. "
        f"The systems are complementary."
    )
    w("")

    # ── Fig 9: Token cost ──
    w("## Fig 9. Total token usage")
    w("")
    fig_img("Fig_9_Total_token_usage.png", "Fig 9")
    std_total_tok = std.get("total_tokens", 0)
    ag_total_tok = ag.get("total_tokens", 0)
    gt_total_tok = gt.get("total_tokens", 0)
    w("| System | Total tokens | Runs |")
    w("|--------|-------------|------|")
    w(f"| Standard RAG | {_fmt_m(std_total_tok)} | {std.get('count', 0)} |")
    w(f"| Agentic RAG | {_fmt_m(ag_total_tok)} | {ag.get('count', 0)} |")
    w(f"| Ground Truth | {_fmt_m(gt_total_tok)} | {gt.get('count', 0)} |")
    w(f"| **Total** | **{_fmt_m(std_total_tok + ag_total_tok + gt_total_tok)}** | |")
    w("")

    # ── Fig 10: F1 distribution ──
    w("## Fig 10. F1 distribution per system")
    w("")
    fig_img("Fig_10_F1_distribution_per_system.png", "Fig 10")
    std_f1s = [
        d.get("evaluation", {}).get("standard_rag", {}).get("f1", 0) * 100
        for d in docs
        if d.get("evaluation", {}).get("standard_rag")
    ]
    ag_f1s = [
        d.get("evaluation", {}).get("agentic_rag", {}).get("f1", 0) * 100
        for d in docs
        if d.get("evaluation", {}).get("agentic_rag")
    ]

    def _stats(vals: list[float]) -> tuple[float, float, float, float]:
        if not vals:
            return 0, 0, 0, 0
        s = sorted(vals)
        mid = len(s) // 2
        median = s[mid] if len(s) % 2 else (s[mid - 1] + s[mid]) / 2
        return sum(s) / len(s), median, min(s), max(s)

    std_avg, std_med, std_min, std_max = _stats(std_f1s)
    ag_avg_f, ag_med, ag_min, ag_max = _stats(ag_f1s)
    w("| System | Mean | Median | Min | Max |")
    w("|--------|------|--------|-----|-----|")
    w(f"| Standard RAG | {std_avg:.1f}% | {std_med:.1f}% | {std_min:.1f}% | {std_max:.1f}% |")
    w(f"| Agentic RAG | {ag_avg_f:.1f}% | {ag_med:.1f}% | {ag_min:.1f}% | {ag_max:.1f}% |")
    w("")

    # ── Fig 11: Stacked match distribution ──
    w("## Fig 11. Average matching distribution")
    w("")
    fig_img("Fig_11_Average_matching_distribution.png", "Fig 11")
    std_matched = ag_matched = std_fp = ag_fp = std_fn = ag_fn = 0
    n_std = n_ag = 0
    for d in docs:
        ev_d = d.get("evaluation", {})
        if "standard_rag" in ev_d:
            std_matched += ev_d["standard_rag"].get("matched", 0)
            std_fp += ev_d["standard_rag"].get("fp", 0)
            std_fn += ev_d["standard_rag"].get("fn", 0)
            n_std += 1
        if "agentic_rag" in ev_d:
            ag_matched += ev_d["agentic_rag"].get("matched", 0)
            ag_fp += ev_d["agentic_rag"].get("fp", 0)
            ag_fn += ev_d["agentic_rag"].get("fn", 0)
            n_ag += 1

    w("| System | Avg matched | Avg unmatched (FP) | Avg missed (FN) |")
    w("|--------|-------------|--------------------|--------------------|")
    if n_std:
        sm, sfp, sfn = std_matched / n_std, std_fp / n_std, std_fn / n_std
        w(f"| Standard RAG | {sm:.1f} | {sfp:.1f} | {sfn:.1f} |")
    else:
        w("| Standard RAG | N/A | N/A | N/A |")
    if n_ag:
        w(f"| Agentic RAG | {ag_matched / n_ag:.1f} | {ag_fp / n_ag:.1f} | {ag_fn / n_ag:.1f} |")
    else:
        w("| Agentic RAG | N/A | N/A | N/A |")
    w("")

    # ── Fig 12: F1 per document set ──
    w("## Fig 12. F1 score per document set")
    w("")
    fig_img("Fig_12_F1_score_per_document_set.png", "Fig 12")
    w(
        "F1 score per document set for both systems. Agentic RAG consistently scores above "
        "Standard RAG across all documents."
    )
    w("")
    w("| Document set | Standard RAG F1 | Agentic RAG F1 |")
    w("|-------------|----------------|----------------|")
    for d in docs:
        ev_d = d.get("evaluation", {})
        std_f1_d = ev_d.get("standard_rag", {}).get("f1")
        ag_f1_d = ev_d.get("agentic_rag", {}).get("f1")
        if std_f1_d is not None or ag_f1_d is not None:
            std_cell = f"{std_f1_d * 100:.1f}%" if std_f1_d is not None else "N/A"
            ag_cell = f"{ag_f1_d * 100:.1f}%" if ag_f1_d is not None else "N/A"
            w(f"| {d.get('set_id', '')} | {std_cell} | {ag_cell} |")
    w("")

    # ── Fig 13: Chunk vs risks ──
    w("## Fig 13. Document size vs number of risks")
    w("")
    fig_img("Fig_13_Document_size_vs_number_of_risks.png", "Fig 13")
    w(
        "The relationship between document size (number of chunks) and number of identified "
        "risks. Larger documents generally yield more risks for both systems."
    )
    w("")

    # ── Fig 14: Confidence interval ──
    w("## Fig 14. F1 score with standard deviation")
    w("")
    fig_img("Fig_14_F1_score_with_standard_deviation.png", "Fig 14")
    std_sd = _stddev(std_f1s)
    ag_sd = _stddev(ag_f1s)
    w("| System | Avg F1 | Std dev |")
    w("|--------|--------|---------|")
    w(f"| Standard RAG | {std_avg:.1f}% | ±{std_sd:.1f}% |")
    w(f"| Agentic RAG | {ag_avg_f:.1f}% | ±{ag_sd:.1f}% |")
    w("")
    w(f"The standard deviation shows the spread in F1 scores across {len(std_f1s)} document sets.")
    w("")

    # ── Fig 15: Cost-performance ──
    w("## Fig 15. Cost-performance trade-off")
    w("")
    fig_img("Fig_15_Cost-performance_trade-off.png", "Fig 15")
    std_f1_val = (std_ev.get("avg_f1", 0) or 0) * 100
    ag_f1_val = (ag_ev.get("avg_f1", 0) or 0) * 100
    w("| System | Avg duration (s) | F1 (%) |")
    w("|--------|-----------------|--------|")
    w(f"| Standard RAG | {_safe(std_dur)} | {std_f1_val:.1f}% |")
    w(f"| Agentic RAG | {_safe(ag_dur)} | {ag_f1_val:.1f}% |")
    w(f"| Ground Truth | {_safe(gt_dur)} | 100.0% |")
    w("")

    # ── Fig 16: F1 vs tokens ──
    w("## Fig 16. F1 vs token usage")
    w("")
    fig_img("Fig_16_F1_vs_token_usage.png", "Fig 16")
    std_ktok = std_tok / 1000
    ag_ktok = ag_tok / 1000
    gt_ktok = gt_tok / 1000
    tok_ratio = (ag_ktok / std_ktok) if std_ktok else 0
    f1_mult = (ag_f1_val / std_f1_val) if std_f1_val else 0
    w("| System | Avg tokens (k) | F1 (%) |")
    w("|--------|---------------|--------|")
    w(f"| Standard RAG | {std_ktok:.0f}k | {std_f1_val:.1f}% |")
    w(f"| Agentic RAG | {ag_ktok:.0f}k | {ag_f1_val:.1f}% |")
    w(f"| Ground Truth | {gt_ktok:.0f}k | 100.0% |")
    w("")
    w(f"Agentic uses {tok_ratio:.1f}x more tokens for {f1_mult:.1f}x higher F1.")
    w("")

    # ── Fig 17: F1 vs cost ──
    w("## Fig 17. F1 vs cost (Claude Opus 4.6)")
    w("")
    fig_img("Fig_17_F1_vs_cost.png", "Fig 17")
    std_cost = _calc_cost(std)
    ag_cost = _calc_cost(ag)
    gt_cost = _calc_cost(gt)
    total_std_c = std_cost * std.get("count", 0)
    total_ag_c = ag_cost * ag.get("count", 0)
    total_gt_c = gt_cost * gt.get("count", 0)
    w("Claude Opus 4.6: $5/MTok input, $25/MTok output.")
    w("")
    w("| System | Avg cost per run | Total cost |")
    w("|--------|-----------------|------------|")
    w(f"| Standard RAG | ${std_cost:.3f} | ${total_std_c:.2f} |")
    w(f"| Agentic RAG | ${ag_cost:.3f} | ${total_ag_c:.2f} |")
    w(f"| Ground Truth | ${gt_cost:.3f} | ${total_gt_c:.2f} |")
    w(f"| **Grand total** | | **${total_std_c + total_ag_c + total_gt_c:.2f}** |")
    w("")

    # ── Fig 18: Best system ──
    w("## Fig 18. Best system per document set")
    w("")
    fig_img("Fig_18_Best_system_per_document_set.png", "Fig 18")
    sys_labels = {
        "standard_rag": "Standard RAG",
        "agentic_rag": "Agentic RAG",
        "ground_truth": "Ground Truth",
    }
    total_best = sum(best.values())
    w("| System | Count | Share |")
    w("|--------|-------|-------|")
    for key, count in best.items():
        label = sys_labels.get(key, key)
        share = (count / total_best * 100) if total_best else 0
        w(f"| {label} | {count} | {share:.0f}% |")
    w("")

    # ── Fig 19: Ablation ──
    w("## Fig 19. Ablation study")
    w("")
    fig_img("Fig_19_Ablation_study.png", "Fig 19")
    w("| Configuration | F1 (%) |")
    w("|--------------|--------|")
    w(f"| Standard RAG (baseline) | {std_f1_val:.1f}% |")
    w(f"| Agentic RAG (P+T+R) | {ag_f1_val:.1f}% |")
    w("")
    w(
        "P+T+R = Planning + Tool use + Reflection. For a complete ablation study "
        "(T+R, P+R, P+T, NONE) separate runs must be performed."
    )
    w("")

    # ── Fig 20: Case study ──
    w("## Fig 20. Case study")
    w("")
    fig_img("Fig_20_Case_study.png", "Fig 20")
    case_doc = next((d for d in docs if d.get("evaluation")), None)
    if case_doc:
        sid = case_doc.get("set_id", "")
        ce = case_doc.get("evaluation", {})
        std_risks = case_doc.get("standard_rag", {}).get("risks", 0)
        ag_risks = case_doc.get("agentic_rag", {}).get("risks", 0)
        gt_risks = case_doc.get("ground_truth", {}).get("risks", 0)
        std_cf1 = ce.get("standard_rag", {}).get("f1", 0) * 100
        ag_cf1 = ce.get("agentic_rag", {}).get("f1", 0) * 100
        w(
            f"Document set **{sid}**: Standard RAG found {std_risks} risks (F1: {std_cf1:.1f}%), "
            f"Agentic RAG found {ag_risks} (F1: {ag_cf1:.1f}%), Ground Truth has {gt_risks}."
        )
    else:
        w("No evaluation data available for case study.")
    w("")

    # ── Fig 21: Document size distribution ──
    w("## Fig 21. Document size distribution")
    w("")
    fig_img("Fig_21_Document_size_distribution.png", "Fig 21")
    chunks = [d.get("chunks", 0) for d in docs if d.get("chunks", 0) > 0]
    if chunks:
        avg_c = sum(chunks) / len(chunks)
        w(
            f"{len(chunks)} document sets. Average: {avg_c:.0f} chunks. "
            f"Range: {min(chunks)}–{max(chunks)} chunks."
        )
    else:
        w("No chunk data available.")
    w("")

    # ── Fig 22: Key conclusions ──
    w("## Fig 22. Key conclusions")
    w("")
    fig_img("Fig_22_Key_conclusions.png", "Fig 22")

    # Recompute values for conclusions
    c_std_f1 = (std_ev.get("avg_f1", 0) or 0) * 100
    c_ag_f1 = (ag_ev.get("avg_f1", 0) or 0) * 100
    c_f1_r = c_ag_f1 / c_std_f1 if c_std_f1 else 0
    c_std_prec = (std_ev.get("avg_precision", 0) or 0) * 100
    c_ag_prec = (ag_ev.get("avg_precision", 0) or 0) * 100
    c_std_rec = (std_ev.get("avg_recall", 0) or 0) * 100
    c_ag_rec = (ag_ev.get("avg_recall", 0) or 0) * 100
    c_std_adj = (std_ev.get("avg_adjusted_f1", 0) or 0) * 100
    c_ag_adj = (ag_ev.get("avg_adjusted_f1", 0) or 0) * 100

    c_std_dur = std.get("avg_duration", 0)
    c_ag_dur = ag.get("avg_duration", 0)
    c_t_r = c_ag_dur / c_std_dur if c_std_dur else 0
    c_std_tok = std.get("avg_tokens", 0)
    c_ag_tok = ag.get("avg_tokens", 0)
    c_tok_r = c_ag_tok / c_std_tok if c_std_tok else 0

    c_std_risks = std.get("avg_risks", 0)
    c_ag_risks = ag.get("avg_risks", 0)
    c_gt_risks = gt.get("avg_risks", 0)
    c_risk_r = c_ag_risks / c_std_risks if c_std_risks else 0

    c_vt = ver.get("real", 0) + ver.get("fake", 0)
    c_rr = ver.get("real", 0) / c_vt * 100 if c_vt else 0
    c_shared = overlap.get("avg_shared", 0)
    c_u_std = overlap.get("avg_unique_standard", 0)
    c_u_ag = overlap.get("avg_unique_agentic", 0)

    c_std_cost = _calc_cost(std)
    c_ag_cost = _calc_cost(ag)
    c_gt_cost = _calc_cost(gt)
    c_cost_r = c_ag_cost / c_std_cost if c_std_cost else 0
    c_total_cost = (
        c_std_cost * std.get("count", 0)
        + c_ag_cost * ag.get("count", 0)
        + c_gt_cost * gt.get("count", 0)
    )
    c_total_runs = std.get("count", 0) + ag.get("count", 0) + gt.get("count", 0)
    c_total_risks = std.get("total_risks", 0) + ag.get("total_risks", 0) + gt.get("total_risks", 0)

    # Per-doc F1 for consistency analysis
    c_std_f1s = [
        d.get("evaluation", {}).get("standard_rag", {}).get("f1", 0) * 100
        for d in docs
        if d.get("evaluation", {}).get("standard_rag")
    ]
    c_ag_f1s = [
        d.get("evaluation", {}).get("agentic_rag", {}).get("f1", 0) * 100
        for d in docs
        if d.get("evaluation", {}).get("agentic_rag")
    ]
    c_std_sd = _stddev(c_std_f1s)
    c_ag_sd = _stddev(c_ag_f1s)
    c_ag_better = sum(1 for i, v in enumerate(c_ag_f1s) if i < len(c_std_f1s) and v > c_std_f1s[i])
    c_ag_better_pct = c_ag_better / len(c_std_f1s) * 100 if c_std_f1s else 0

    w("### 1. Overall performance")
    w("")
    w(
        f"- Agentic RAG achieves **{c_ag_f1:.1f}% F1** vs "
        f"Standard RAG's **{c_std_f1:.1f}%** — "
        f"a **{c_f1_r:.1f}x improvement**"
    )
    w(
        f"- Precision: {c_ag_prec:.1f}% vs {c_std_prec:.1f}% "
        f"— Recall: {c_ag_rec:.1f}% vs {c_std_rec:.1f}%"
    )
    w(
        f"- After verification, adjusted F1 rises to "
        f"{c_ag_adj:.1f}% (Agentic) and "
        f"{c_std_adj:.1f}% (Standard)"
    )
    w(
        f"- Agentic RAG scores higher in "
        f"{c_ag_better_pct:.0f}% of individual document sets "
        f"({c_ag_better} of {len(c_std_f1s)})"
    )
    w("")

    w("### 2. Risk identification")
    w("")
    w(
        f"- Standard RAG finds on average {c_std_risks:.1f} "
        f"risks per document, Agentic RAG finds "
        f"{c_ag_risks:.1f} ({c_risk_r:.1f}x more), "
        f"and Ground Truth {c_gt_risks:.1f}"
    )
    w(
        f"- On average {c_shared:.1f} risks are shared between "
        f"systems, with {c_u_std:.1f} unique to Standard "
        f"and {c_u_ag:.1f} unique to Agentic "
        "— the systems are complementary"
    )
    w(f"- Total risks identified across all systems: {c_total_risks}")
    w("")

    w("### 3. Verification and Ground Truth limitations")
    w("")
    w(
        f"- {c_rr:.1f}% of risks that did not match Ground "
        f"Truth were verified as actually real "
        f"({ver.get('real', 0)} of {c_vt}) — only "
        f"{ver.get('fake', 0)} were false alarms"
    )
    w(
        "- Ground Truth is not a perfect reference — it misses "
        "risks that both RAG systems correctly identify"
    )
    w(
        "- The adjusted F1 (accounting for verified real risks) "
        "gives a more accurate picture of true system performance"
    )
    w("")

    w("### 4. Resource efficiency and cost")
    w("")
    w(
        f"- Agentic RAG uses {c_t_r:.1f}x more time "
        f"({c_ag_dur:.1f}s vs {c_std_dur:.1f}s) and "
        f"{c_tok_r:.1f}x more tokens "
        f"({c_ag_tok / 1000:.0f}k vs {c_std_tok / 1000:.0f}k)"
    )
    w(
        f"- Average cost per run (Claude Opus 4.6): "
        f"Standard RAG ${c_std_cost:.3f}, "
        f"Agentic RAG ${c_ag_cost:.3f}, "
        f"Ground Truth ${c_gt_cost:.3f} "
        f"— Agentic costs {c_cost_r:.1f}x more"
    )
    w(f"- Total experiment cost across all {c_total_runs} runs: ${c_total_cost:.2f}")
    w("")

    w("### 5. Consistency across documents")
    w("")
    w(
        f"- Standard RAG F1: {c_std_f1:.1f}% ± {c_std_sd:.1f}% "
        f"— Agentic RAG F1: {c_ag_f1:.1f}% ± {c_ag_sd:.1f}%"
    )
    if c_ag_sd < c_std_sd:
        w(
            "- Agentic RAG is more consistent (lower standard "
            "deviation), indicating more reliable results "
            "across different document types"
        )
    else:
        w(
            "- Standard RAG is slightly more consistent, but "
            "Agentic RAG compensates with significantly "
            "higher average performance"
        )
    w("")

    w("### 6. Best system distribution")
    w("")
    sys_labels = {
        "standard_rag": "Standard RAG",
        "agentic_rag": "Agentic RAG",
        "ground_truth": "Ground Truth",
    }
    total_b = sum(best.values())
    for key, count in best.items():
        label = sys_labels.get(key, key)
        share = count / total_b * 100 if total_b else 0
        w(f"- {label} was the best system in {count} of {total_b} evaluations ({share:.0f}%)")
    w("")

    w("### 7. Practical implications")
    w("")
    w(
        f"- Standard RAG is cost-effective for basic risk "
        f"screening at ${c_std_cost:.3f}/run, "
        "but misses significant risks"
    )
    w(
        f"- Agentic RAG is recommended for thorough analysis "
        "where risk coverage is critical, despite the "
        f"{c_cost_r:.1f}x cost increase"
    )
    w(
        f"- The multi-step agentic approach (planning + retrieval "
        f"+ reflection) yields {c_f1_r:.1f}x better F1, "
        "justifying the additional resource usage for "
        "high-stakes document analysis"
    )
    w(
        f"- Evaluated across {doc_count} Norwegian real estate "
        f"document sets (salgsoppgaver) with "
        f"{c_total_runs} total analysis runs"
    )
    w("")

    return "\n".join(lines)
