"""API-endepunkter for eksperimenter og ablasjonsstudie."""

import json
import logging
from pathlib import Path

from fastapi import APIRouter, Form, HTTPException, Request, UploadFile
from pydantic import BaseModel

from api.routers._experiments_helpers import (
    build_comparison_report,
    build_empty_eval_results,
    build_risk_summary,
    calc_overlap,
    delete_eval_record,
    evaluate_result,
    get_eval_record,
    list_eval_history,
    load_analysis_result,
    save_analysis_result,
    save_eval_record,
)
from src.agentic_rag.config import (
    FULL_AGENTIC,
    NO_PLANNING,
    NO_REFLECTION,
    NO_TOOL_USE,
    NONE_AGENTIC,
    AblationConfig,
)
from src.agentic_rag.orchestrator import AgenticRAGOrchestrator
from src.evaluation.comparator import (
    EnrichedComparisonReport,
    SingleEvaluationRecord,
    SystemComparator,
)
from src.ground_truth.generator import GroundTruthGenerator
from src.models.schemas import (
    AnalysisResult,
    EvaluationResult,
    GroundTruthAnnotation,
)

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/experiments", tags=["experiments"])

REPORTS_DIR = Path("data/reports")
GROUND_TRUTH_DIR = Path("data/ground_truth")

ALL_CONFIGS: list[AblationConfig] = [
    FULL_AGENTIC,
    NO_PLANNING,
    NO_TOOL_USE,
    NO_REFLECTION,
    NONE_AGENTIC,
]


class AblationRequest(BaseModel):
    """Foresporsel for ablasjonsstudie."""

    document_set_id: str
    query: str
    ground_truth_path: str | None = None


class CompareRequest(BaseModel):
    """Foresporsel for sammenligning av kjoringer."""

    run_ids: list[str]


class EvaluateComparisonRequest(BaseModel):
    """Foresporsel for evaluering og sammenligning av kjoringer."""

    run_ids: list[str]
    ground_truth_path: str | None = None
    query: str = ""
    document_set_id: str = ""


class EvaluateSingleRequest(BaseModel):
    """Foresporsel for evaluering av en enkelt kjoring."""

    run_id: str
    ground_truth_path: str
    query: str = ""
    document_set_id: str = ""


@router.post("/ablation")
async def run_ablation(
    request: AblationRequest,
    http_request: Request,
) -> list[EvaluationResult] | list[AnalysisResult]:
    """Kjor ablasjonsstudie med alle konfigurasjoner."""
    settings = http_request.app.state.settings
    vector_store = http_request.app.state.vector_store

    results: list[AnalysisResult] = []
    for config in ALL_CONFIGS:
        orchestrator = AgenticRAGOrchestrator(settings, vector_store, config)
        result = orchestrator.analyze(request.document_set_id, request.query)
        save_analysis_result(result)
        results.append(result)

    if not request.ground_truth_path:
        return results

    gt_path = Path(request.ground_truth_path)
    if not gt_path.exists():
        raise HTTPException(status_code=404, detail="Ground truth file not found")

    ground_truth = GroundTruthAnnotation.model_validate_json(
        gt_path.read_text(encoding="utf-8"),
    )
    return [
        evaluate_result(r, ground_truth) for r in results if "ground_truth" not in r.system_type
    ]


@router.post("/compare")
async def compare_runs(request: CompareRequest) -> dict:
    """Sammenlign flere analysekjoringer."""
    results = [load_analysis_result(rid) for rid in request.run_ids]
    eval_results = build_empty_eval_results(results)

    comparator = SystemComparator()
    report = comparator.compare(eval_results)

    REPORTS_DIR.mkdir(parents=True, exist_ok=True)
    report_path = REPORTS_DIR / f"compare_{'_'.join(request.run_ids[:3])}.json"
    report_path.write_text(report.model_dump_json(indent=2), encoding="utf-8")

    return report.model_dump()


@router.get("/results")
async def list_reports() -> list[dict]:
    """List alle sammenligningsrapporter."""
    if not REPORTS_DIR.exists():
        return []

    reports: list[dict] = []
    for path in REPORTS_DIR.glob("*.json"):
        data = json.loads(path.read_text(encoding="utf-8"))
        reports.append(data)
    return reports


@router.get("/ground-truth/{document_set_id}")
async def get_ground_truth_status(document_set_id: str) -> dict:
    """Sjekk om ground truth finnes for et dokumentsett."""
    gt_path = GROUND_TRUTH_DIR / f"{document_set_id}.json"
    if not gt_path.exists():
        return {"available": False, "risk_count": 0}

    gt = GroundTruthAnnotation.model_validate_json(
        gt_path.read_text(encoding="utf-8"),
    )
    return {"available": True, "risk_count": len(gt.risks)}


@router.get("/ground-truth/{document_set_id}/risks")
async def get_ground_truth_risks(document_set_id: str) -> list[dict]:
    """Hent alle ground truth-risikoer for et dokumentsett."""
    gt_path = GROUND_TRUTH_DIR / f"{document_set_id}.json"
    if not gt_path.exists():
        raise HTTPException(
            status_code=404,
            detail=f"Ground truth ikke funnet for {document_set_id}",
        )

    gt = GroundTruthAnnotation.model_validate_json(
        gt_path.read_text(encoding="utf-8"),
    )
    return [risk.model_dump() for risk in gt.risks]


@router.post("/ground-truth/upload")
async def upload_ground_truth(
    file: UploadFile,
    document_set_id: str = Form(...),
) -> dict:
    """Last opp ground truth-annotering for et dokumentsett."""
    content = await file.read()

    try:
        data = json.loads(content)
    except json.JSONDecodeError as exc:
        raise HTTPException(status_code=400, detail="Ugyldig JSON-fil") from exc

    try:
        gt = GroundTruthAnnotation.model_validate(data)
    except Exception as exc:
        raise HTTPException(
            status_code=400,
            detail=f"Ugyldig GroundTruthAnnotation: {exc}",
        ) from exc

    GROUND_TRUTH_DIR.mkdir(parents=True, exist_ok=True)
    gt_path = GROUND_TRUTH_DIR / f"{document_set_id}.json"
    gt_path.write_text(gt.model_dump_json(indent=2), encoding="utf-8")

    return {
        "document_set_id": document_set_id,
        "risk_count": len(gt.risks),
        "message": f"Ground truth lastet opp med {len(gt.risks)} risikoer",
    }


@router.post("/ground-truth/{document_set_id}/generate")
async def generate_ground_truth(
    document_set_id: str,
    http_request: Request,
) -> dict:
    """Auto-generer ground truth-annotering for et dokumentsett med Claude."""
    raw_dir = Path("data/raw")
    doc_dir = raw_dir / document_set_id

    if not doc_dir.exists():
        raise HTTPException(
            status_code=404,
            detail=f"Dokumentsett ikke funnet: {document_set_id}",
        )

    settings = http_request.app.state.settings
    generator = GroundTruthGenerator(settings)

    try:
        gt = generator.generate(document_set_id, raw_dir, raise_on_empty=True)
    except RuntimeError as exc:
        raise HTTPException(
            status_code=422,
            detail=str(exc),
        ) from exc

    GROUND_TRUTH_DIR.mkdir(parents=True, exist_ok=True)
    gt_path = GROUND_TRUTH_DIR / f"{document_set_id}.json"
    gt_path.write_text(gt.model_dump_json(indent=2), encoding="utf-8")

    return {
        "document_set_id": document_set_id,
        "risk_count": len(gt.risks),
        "message": f"Ground truth auto-generert med {len(gt.risks)} risikoer",
    }


@router.post("/evaluate-comparison", response_model=EnrichedComparisonReport)
async def evaluate_comparison(
    request: EvaluateComparisonRequest,
) -> EnrichedComparisonReport:
    """Evaluer og sammenlign flere analysekjoringer med valgfri ground truth."""
    if len(request.run_ids) < 2:
        raise HTTPException(
            status_code=400,
            detail="Minst to run_ids kreves for sammenligning",
        )

    analysis_results = [load_analysis_result(rid) for rid in request.run_ids]
    risk_summaries = [build_risk_summary(r.system_type, r.risks) for r in analysis_results]
    overlapping_risk_count, unique_to = calc_overlap(analysis_results)

    report = build_comparison_report(
        request.ground_truth_path,
        analysis_results,
        risk_summaries,
        overlapping_risk_count,
        unique_to,
    )
    report.query = request.query
    report.document_set_id = request.document_set_id

    save_eval_record(report.record_id, report.model_dump_json(indent=2))
    return report


@router.post("/evaluate-single")
async def evaluate_single(request: EvaluateSingleRequest) -> EvaluationResult:
    """Evaluer en enkelt analysekjoring mot ground truth."""
    result = load_analysis_result(request.run_id)

    gt_path = Path(request.ground_truth_path)
    if not gt_path.exists():
        raise HTTPException(
            status_code=404,
            detail="Ground truth file not found",
        )

    ground_truth = GroundTruthAnnotation.model_validate_json(
        gt_path.read_text(encoding="utf-8"),
    )
    eval_result = evaluate_result(result, ground_truth)

    record = SingleEvaluationRecord(
        evaluation=eval_result,
        query=request.query,
        document_set_id=request.document_set_id,
    )
    save_eval_record(record.record_id, record.model_dump_json(indent=2))

    return eval_result


@router.get("/history")
async def list_evaluation_history() -> list[dict]:
    """List alle evalueringsrecords med kompakte oppsummeringer."""
    return list_eval_history()


@router.get("/history/{record_id}")
async def get_evaluation_record(record_id: str) -> dict:
    """Hent en full evalueringsrecord."""
    return get_eval_record(record_id)


@router.delete("/history/{record_id}")
async def delete_evaluation_record(record_id: str) -> dict:
    """Slett en evalueringsrecord."""
    return delete_eval_record(record_id)
