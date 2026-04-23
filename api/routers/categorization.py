"""API-endepunkter for risikokategorisering."""

import logging

from fastapi import APIRouter, HTTPException, Request

from api.routers._experiments_helpers import EVAL_HISTORY_DIR, get_eval_record
from src.evaluation.categorizer import RiskCategorizer
from src.evaluation.category_store import CategoryStore
from src.models.schemas import (
    CategorizeRequest,
    CategorizeResponse,
    CategoryConfidenceStats,
    CategoryF1Stats,
    CategoryStats,
    CategoryStatus,
    DocumentSetForCategorization,
    RiskCategoryResult,
)

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/categorization", tags=["categorization"])

store = CategoryStore()


def _extract_risks_from_record(data: dict) -> list[dict]:
    """Hent alle risikoer fra en eval_history-record.

    Returns:
        Liste med {risk_id, description, system_type} for hver risiko.
    """
    risks: list[dict] = []
    system_results = data.get("system_results", {})

    for sys_type, sr in system_results.items():
        # Matchede risikoer (system-siden)
        for pair in sr.get("matched_pair_details", []):
            sys_risk = pair.get("system_risk", {})
            if sys_risk.get("risk_id"):
                risks.append(
                    {
                        "risk_id": sys_risk["risk_id"],
                        "description": sys_risk.get("description", ""),
                        "system_type": sys_type,
                    }
                )
            gt_risk = pair.get("ground_truth_risk", {})
            if gt_risk.get("risk_id"):
                risks.append(
                    {
                        "risk_id": gt_risk["risk_id"],
                        "description": gt_risk.get("description", ""),
                        "system_type": "ground_truth",
                    }
                )

        # Umatchede predikerte risikoer
        for risk in sr.get("unmatched_predicted_risks", []):
            if risk.get("risk_id"):
                risks.append(
                    {
                        "risk_id": risk["risk_id"],
                        "description": risk.get("description", ""),
                        "system_type": sys_type,
                    }
                )

        # Umatchede ground truth-risikoer
        for risk in sr.get("unmatched_ground_truth_risks", []):
            if risk.get("risk_id"):
                risks.append(
                    {
                        "risk_id": risk["risk_id"],
                        "description": risk.get("description", ""),
                        "system_type": "ground_truth",
                    }
                )

    # Dedupliser basert pa risk_id
    seen: set[str] = set()
    unique: list[dict] = []
    for r in risks:
        if r["risk_id"] not in seen:
            seen.add(r["risk_id"])
            unique.append(r)
    return unique


def _count_risks_by_type(data: dict) -> dict[str, int]:
    """Tell risikoer per system_type fra en eval_history-record."""
    risks = _extract_risks_from_record(data)
    counts: dict[str, int] = {}
    for r in risks:
        st = r["system_type"]
        if "agentic" in st:
            counts["agentic_rag"] = counts.get("agentic_rag", 0) + 1
        elif "ground_truth" in st:
            counts["ground_truth"] = counts.get("ground_truth", 0) + 1
        else:
            counts["standard_rag"] = counts.get("standard_rag", 0) + 1
    return counts


@router.get("/document-sets", response_model=list[DocumentSetForCategorization])
async def list_document_sets() -> list[DocumentSetForCategorization]:
    """Hent alle dokumentsett fra eval_history med kategoriseringsstatus."""
    if not EVAL_HISTORY_DIR.exists():
        return []

    results: list[DocumentSetForCategorization] = []
    for path in EVAL_HISTORY_DIR.glob("*.json"):
        try:
            data = get_eval_record(path.stem)
        except HTTPException:
            continue

        doc_set_id = data.get("document_set_id", "")
        if not doc_set_id:
            continue

        risks = _extract_risks_from_record(data)
        risk_ids = [r["risk_id"] for r in risks]
        counts = _count_risks_by_type(data)
        total = len(risks)
        categorized = total - store.get_uncategorized_count(risk_ids)

        results.append(
            DocumentSetForCategorization(
                document_set_id=doc_set_id,
                record_id=path.stem,
                standard_rag_risks=counts.get("standard_rag", 0),
                agentic_rag_risks=counts.get("agentic_rag", 0),
                ground_truth_risks=counts.get("ground_truth", 0),
                total_risks=total,
                categorized_count=categorized,
            )
        )

    results.sort(key=lambda x: x.document_set_id)
    return results


@router.post("/categorize", response_model=CategorizeResponse)
async def categorize_risks(
    request: CategorizeRequest,
    http_request: Request,
) -> CategorizeResponse:
    """Kategoriser risikoer for et dokumentsett."""
    settings = http_request.app.state.settings
    data = get_eval_record(request.record_id)

    all_risks = _extract_risks_from_record(data)
    uncategorized = [r for r in all_risks if not store.is_categorized(r["risk_id"])]

    if not uncategorized:
        return CategorizeResponse(
            document_set_id=request.document_set_id,
            record_id=request.record_id,
            categorized_count=0,
            new_categories=[],
            results=[],
        )

    categorizer = RiskCategorizer(settings)
    existing_cats = store.get_categories()
    results = categorizer.categorize_risks(uncategorized, existing_cats)

    # Bygg mappinger for lagring
    mappings: dict[str, tuple[str, str, float]] = {}
    risk_lookup = {r["risk_id"]: r for r in uncategorized}
    for result in results:
        sys_type = risk_lookup.get(result.risk_id, {}).get("system_type", "unknown")
        mappings[result.risk_id] = (result.category, sys_type, result.confidence)

    new_cats = store.add_mappings(mappings)

    return CategorizeResponse(
        document_set_id=request.document_set_id,
        record_id=request.record_id,
        categorized_count=len(results),
        new_categories=new_cats,
        results=results,
    )


@router.get("/status", response_model=CategoryStatus)
async def get_status() -> CategoryStatus:
    """Hent samlet kategoriseringsstatus."""
    if not EVAL_HISTORY_DIR.exists():
        return CategoryStatus(
            total_risks=0,
            categorized_count=0,
            uncategorized_count=0,
            categories=[],
        )

    all_risk_ids: list[str] = []
    for path in EVAL_HISTORY_DIR.glob("*.json"):
        try:
            data = get_eval_record(path.stem)
        except HTTPException:
            continue
        risks = _extract_risks_from_record(data)
        all_risk_ids.extend(r["risk_id"] for r in risks)

    # Dedupliser
    all_risk_ids = list(set(all_risk_ids))
    total = len(all_risk_ids)
    uncategorized = store.get_uncategorized_count(all_risk_ids)
    categorized = total - uncategorized

    return CategoryStatus(
        total_risks=total,
        categorized_count=categorized,
        uncategorized_count=uncategorized,
        categories=store.get_stats(),
    )


@router.get("/categories", response_model=list[CategoryStats])
async def get_categories() -> list[CategoryStats]:
    """Hent alle kategorier med statistikk."""
    return store.get_stats()


@router.get("/confidence-stats", response_model=list[CategoryConfidenceStats])
async def get_confidence_stats() -> list[CategoryConfidenceStats]:
    """Confidence statistics per category."""
    data = store.load()
    mappings = data.get("mappings", {})

    # Group confidence values by category
    cat_confidences: dict[str, list[float]] = {}
    for m in mappings.values():
        cat = m["category"]
        conf = m.get("confidence", 0.0)
        cat_confidences.setdefault(cat, []).append(conf)

    results = []
    for cat, confs in sorted(cat_confidences.items()):
        results.append(
            CategoryConfidenceStats(
                category=cat,
                count=len(confs),
                mean_confidence=sum(confs) / len(confs),
                min_confidence=min(confs),
                max_confidence=max(confs),
            )
        )
    return results


@router.get("/f1-per-category", response_model=list[CategoryF1Stats])
async def get_f1_per_category() -> list[CategoryF1Stats]:
    """Compute precision/recall/F1 per category for Standard and Agentic RAG.

    Aggregates TP/FP/FN across all eval_history records using the stored
    category mappings. Matched pairs count as TP for the ground-truth category,
    unmatched predictions count as FP for the predicted category, and unmatched
    ground-truth risks count as FN for the ground-truth category.
    """
    import json as _json

    mappings = store.load().get("mappings", {})
    cat_of: dict[str, str] = {rid: v["category"] for rid, v in mappings.items()}

    systems = ["standard_rag", "agentic_rag_P+T+R"]
    counts: dict[str, dict[str, dict[str, int]]] = {s: {} for s in systems}

    if not EVAL_HISTORY_DIR.exists():
        return []

    for path in EVAL_HISTORY_DIR.glob("*.json"):
        try:
            with path.open(encoding="utf-8") as f:
                data = _json.load(f)
        except (_json.JSONDecodeError, OSError):
            continue
        for sys_name in systems:
            sr = data.get("system_results", {}).get(sys_name)
            if not sr:
                continue
            for pair in sr.get("matched_pair_details", []):
                gt_id = pair.get("ground_truth_risk", {}).get("risk_id")
                cat = cat_of.get(gt_id) if gt_id else None
                if cat:
                    counts[sys_name].setdefault(cat, {"tp": 0, "fp": 0, "fn": 0})["tp"] += 1
            for risk in sr.get("unmatched_predicted_risks", []):
                cat = cat_of.get(risk.get("risk_id", ""))
                if cat:
                    counts[sys_name].setdefault(cat, {"tp": 0, "fp": 0, "fn": 0})["fp"] += 1
            for risk in sr.get("unmatched_ground_truth_risks", []):
                cat = cat_of.get(risk.get("risk_id", ""))
                if cat:
                    counts[sys_name].setdefault(cat, {"tp": 0, "fp": 0, "fn": 0})["fn"] += 1

    def _prf(c: dict[str, int]) -> tuple[float, float, float]:
        tp, fp, fn = c["tp"], c["fp"], c["fn"]
        p = tp / (tp + fp) if tp + fp else 0.0
        r = tp / (tp + fn) if tp + fn else 0.0
        f1 = 2 * p * r / (p + r) if p + r else 0.0
        return p, r, f1

    all_cats = set(counts["standard_rag"]) | set(counts["agentic_rag_P+T+R"])
    results: list[CategoryF1Stats] = []
    for cat in sorted(all_cats):
        std = counts["standard_rag"].get(cat, {"tp": 0, "fp": 0, "fn": 0})
        ag = counts["agentic_rag_P+T+R"].get(cat, {"tp": 0, "fp": 0, "fn": 0})
        sp, sr_, sf = _prf(std)
        ap, ar, af = _prf(ag)
        support = ag["tp"] + ag["fn"]
        results.append(
            CategoryF1Stats(
                category=cat,
                support=support,
                standard_f1=sf,
                standard_precision=sp,
                standard_recall=sr_,
                agentic_f1=af,
                agentic_precision=ap,
                agentic_recall=ar,
            )
        )
    results.sort(key=lambda x: x.support, reverse=True)
    return results


@router.get("/results/{record_id}", response_model=list[RiskCategoryResult])
async def get_categorized_risks(record_id: str) -> list[RiskCategoryResult]:
    """Hent kategoriserte risikoer for et spesifikt eval_history-record."""
    data = get_eval_record(record_id)
    risks = _extract_risks_from_record(data)
    mappings = store.load().get("mappings", {})

    results: list[RiskCategoryResult] = []
    for r in risks:
        rid = r["risk_id"]
        if rid in mappings:
            m = mappings[rid]
            results.append(
                RiskCategoryResult(
                    risk_id=rid,
                    category=m["category"],
                    confidence=m.get("confidence", 0.0),
                )
            )
    return results
