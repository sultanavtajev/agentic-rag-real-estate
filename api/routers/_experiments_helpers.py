"""Hjelpefunksjoner for experiments-routeren."""

import json
import logging
from itertools import combinations
from pathlib import Path

from fastapi import HTTPException

from src.config import Settings, get_settings
from src.evaluation.comparator import (
    EnrichedComparisonReport,
    RiskSummary,
    SystemComparator,
)
from src.evaluation.metrics import (
    LLMRiskMatcher,
    MatchResult,
    RiskMatcher,
    compute_overall_metrics,
)
from src.evaluation.verifier import RiskVerifier
from src.models.schemas import (
    AnalysisResult,
    EvaluationResult,
    GroundTruthAnnotation,
    IdentifiedRisk,
    MatchedPair,
    OverallMetrics,
)

logger = logging.getLogger(__name__)

RESULTS_DIR = Path("data/results")
EVAL_HISTORY_DIR = Path("data/eval_history")


def _system_type_dir(system_type: str) -> str:
    """Normaliser system_type til mappenavn.

    Ablasjonskonfigurasjoner (f.eks. agentic_rag_T+R) faar egne mapper
    (ablation_T+R), mens FULL (agentic_rag_P+T+R) bruker standard agentic_rag.
    """
    if system_type.startswith("agentic_rag_") and system_type != "agentic_rag_P+T+R":
        label = system_type.removeprefix("agentic_rag_")
        return f"ablation_{label}"
    if "agentic" in system_type:
        return "agentic_rag"
    if "standard" in system_type:
        return "standard_rag"
    if "ground_truth" in system_type:
        return "ground_truth"
    return system_type


def save_analysis_result(result: AnalysisResult) -> None:
    """Lagre analyseresultat til disk under dokumentsett/system-mappe."""
    dir_name = _system_type_dir(result.system_type)
    result_dir = RESULTS_DIR / result.document_set_id / dir_name
    result_dir.mkdir(parents=True, exist_ok=True)
    path = result_dir / f"{result.run_id}.json"
    path.write_text(result.model_dump_json(indent=2), encoding="utf-8")


def load_analysis_result(run_id: str) -> AnalysisResult:
    """Les analyseresultat fra disk, soek i alle undermapper."""
    for path in RESULTS_DIR.rglob(f"{run_id}.json"):
        return AnalysisResult.model_validate_json(path.read_text(encoding="utf-8"))
    raise HTTPException(status_code=404, detail=f"Result {run_id} not found")


def evaluate_result(
    result: AnalysisResult,
    ground_truth: GroundTruthAnnotation,
    settings: Settings | None = None,
) -> EvaluationResult:
    """Evaluer et analyseresultat mot ground truth.

    Bruker LLM-basert matching hvis API-nokkel er tilgjengelig, ellers Jaccard-fallback.
    """
    resolved_settings = settings or get_settings()
    try:
        matcher = LLMRiskMatcher(resolved_settings)
        match_result = matcher.match(result.risks, ground_truth.risks)
    except Exception:
        logger.warning("LLM-matching feilet, bruker Jaccard-fallback")
        matcher_fallback = RiskMatcher()
        match_result = matcher_fallback.match(result.risks, ground_truth.risks)

    overall_metrics = compute_overall_metrics(match_result)

    matched_pair_details = [
        MatchedPair(system_risk=pred, ground_truth_risk=gt)
        for pred, gt in match_result.matched_pairs
    ]

    # Verify unmatched predicted risks
    verified_unmatched = []
    adjusted_metrics = None
    if match_result.unmatched_predicted and resolved_settings:
        try:
            verifier = RiskVerifier(resolved_settings)
            verified_unmatched = verifier.verify(
                match_result.unmatched_predicted,
                result.document_set_id,
            )
            # Compute adjusted metrics
            confirmed_fp = sum(1 for v in verified_unmatched if not v.is_real_risk)
            tp = len(match_result.matched_pairs)
            fn = len(match_result.unmatched_ground_truth)
            adj_precision = tp / (tp + confirmed_fp) if (tp + confirmed_fp) > 0 else 0.0
            adj_recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0
            adj_f1 = (
                2 * adj_precision * adj_recall / (adj_precision + adj_recall)
                if (adj_precision + adj_recall) > 0
                else 0.0
            )
            adjusted_metrics = OverallMetrics(
                precision=adj_precision,
                recall=adj_recall,
                f1=adj_f1,
                total_support=tp + fn,
            )
        except Exception:
            logger.warning("Verifisering av umatchede risikoer feilet")

    return EvaluationResult(
        run_id=result.run_id,
        system_type=result.system_type,
        overall_metrics=overall_metrics,
        matched_risks=len(match_result.matched_pairs),
        unmatched_predicted=len(match_result.unmatched_predicted),
        unmatched_ground_truth=len(match_result.unmatched_ground_truth),
        matched_pair_details=matched_pair_details,
        unmatched_predicted_risks=match_result.unmatched_predicted,
        unmatched_ground_truth_risks=match_result.unmatched_ground_truth,
        verified_unmatched=verified_unmatched,
        adjusted_metrics=adjusted_metrics,
    )


def build_risk_summary(system_type: str, risks: list[IdentifiedRisk]) -> RiskSummary:
    """Bygg risiko-oppsummering for et system."""
    return RiskSummary(
        system_type=system_type,
        total_risks=len(risks),
        risks_by_category={},
    )


def compute_overlap(
    risks_a: list[IdentifiedRisk],
    risks_b: list[IdentifiedRisk],
) -> int:
    """Beregn antall overlappende risikoer mellom to systemer via Jaccard."""
    count = 0
    matched_b: set[int] = set()
    for risk_a in risks_a:
        text_a = risk_a.description + " " + " ".join(risk_a.evidence)
        words_a = set(text_a.lower().split())
        for j, risk_b in enumerate(risks_b):
            if j in matched_b:
                continue
            text_b = risk_b.description + " " + " ".join(risk_b.evidence)
            words_b = set(text_b.lower().split())
            if not words_a and not words_b:
                continue
            jaccard = len(words_a & words_b) / len(words_a | words_b)
            if jaccard >= 0.3:
                count += 1
                matched_b.add(j)
                break
    return count


def save_eval_record(record_id: str, data: str) -> None:
    """Lagre evalueringsrecord til historikk-mappen."""
    EVAL_HISTORY_DIR.mkdir(parents=True, exist_ok=True)
    path = EVAL_HISTORY_DIR / f"{record_id}.json"
    path.write_text(data, encoding="utf-8")
    logger.info("Evalueringsrecord lagret: %s", path)


def build_comparison_summary(data: dict) -> dict:
    """Bygg kompakt oppsummering fra en comparison-record."""
    system_results = data.get("system_results", {})
    f1_per_system = {}
    risks_per_system = {}
    for sys_type, sr in system_results.items():
        om = sr.get("overall_metrics", {})
        f1_per_system[sys_type] = om.get("f1", 0.0)
        risks_per_system[sys_type] = sr.get("matched_risks", 0)

    return {
        "record_id": data.get("record_id", ""),
        "record_type": "comparison",
        "timestamp": data.get("timestamp", ""),
        "query": data.get("query", ""),
        "document_set_id": data.get("document_set_id", ""),
        "system_types": list(system_results.keys()),
        "has_ground_truth": data.get("has_ground_truth", False),
        "best_system": data.get("best_system", ""),
        "risk_summaries": data.get("risk_summaries", []),
        "f1_scores": f1_per_system,
    }


def build_single_summary(data: dict) -> dict:
    """Bygg kompakt oppsummering fra en single-record."""
    evaluation = data.get("evaluation", {})
    om = evaluation.get("overall_metrics", {})
    return {
        "record_id": data.get("record_id", ""),
        "record_type": "single",
        "timestamp": data.get("timestamp", ""),
        "query": data.get("query", ""),
        "document_set_id": data.get("document_set_id", ""),
        "system_type": evaluation.get("system_type", ""),
        "matched_risks": evaluation.get("matched_risks", 0),
        "overall_f1": om.get("f1", 0.0),
    }


def list_eval_history() -> list[dict]:
    """Les alle evalueringsrecords og returner kompakte oppsummeringer."""
    if not EVAL_HISTORY_DIR.exists():
        return []

    summaries: list[dict] = []
    for path in EVAL_HISTORY_DIR.glob("*.json"):
        data = json.loads(path.read_text(encoding="utf-8"))
        record_type = data.get("record_type", "comparison")
        if record_type == "single":
            summaries.append(build_single_summary(data))
        else:
            summaries.append(build_comparison_summary(data))

    summaries.sort(key=lambda s: s.get("timestamp", ""), reverse=True)
    return summaries


def get_eval_record(record_id: str) -> dict:
    """Last en full evalueringsrecord, kast 404 hvis ikke funnet."""
    path = EVAL_HISTORY_DIR / f"{record_id}.json"
    if not path.exists():
        raise HTTPException(status_code=404, detail=f"Record {record_id} not found")
    return json.loads(path.read_text(encoding="utf-8"))


def delete_eval_record(record_id: str) -> dict:
    """Slett en evalueringsrecord, kast 404 hvis ikke funnet."""
    path = EVAL_HISTORY_DIR / f"{record_id}.json"
    if not path.exists():
        raise HTTPException(status_code=404, detail=f"Record {record_id} not found")
    path.unlink()
    logger.info("Evalueringsrecord slettet: %s", record_id)
    return {"deleted": record_id}


def calc_overlap(
    analysis_results: list[AnalysisResult],
) -> tuple[int, dict[str, int]]:
    """Beregn overlap og unike risikoer mellom systemer."""
    unique_to: dict[str, int] = {}
    overlapping_risk_count = 0

    if len(analysis_results) == 2:
        r_a, r_b = analysis_results
        overlap = compute_overlap(r_a.risks, r_b.risks)
        overlapping_risk_count = overlap
        unique_to[r_a.system_type] = len(r_a.risks) - overlap
        unique_to[r_b.system_type] = len(r_b.risks) - overlap
    else:
        _calc_multi_overlap(analysis_results, unique_to)
        for idx_a, idx_b in combinations(range(len(analysis_results)), 2):
            overlapping_risk_count += compute_overlap(
                analysis_results[idx_a].risks,
                analysis_results[idx_b].risks,
            )

    return overlapping_risk_count, unique_to


def _calc_multi_overlap(
    analysis_results: list[AnalysisResult],
    unique_to: dict[str, int],
) -> None:
    """Beregn parvis overlap for fleire enn to systemer."""
    for i, r_a in enumerate(analysis_results):
        total_overlap = 0
        for j, r_b in enumerate(analysis_results):
            if i != j:
                total_overlap += compute_overlap(r_a.risks, r_b.risks)
        unique_to[r_a.system_type] = max(0, len(r_a.risks) - total_overlap)


def build_comparison_report(
    ground_truth_path: str | None,
    analysis_results: list[AnalysisResult],
    risk_summaries: list[RiskSummary],
    overlapping_risk_count: int,
    unique_to: dict[str, int],
) -> EnrichedComparisonReport:
    """Bygg EnrichedComparisonReport med eller uten ground truth."""
    has_ground_truth = False

    if ground_truth_path:
        gt_path = Path(ground_truth_path)
        if not gt_path.exists():
            raise HTTPException(
                status_code=404,
                detail="Ground truth file not found",
            )
        ground_truth = GroundTruthAnnotation.model_validate_json(
            gt_path.read_text(encoding="utf-8"),
        )
        has_ground_truth = True
        eval_results = [evaluate_result(r, ground_truth) for r in analysis_results]
    else:
        eval_results = build_empty_eval_results(analysis_results)

    comparator = SystemComparator()
    base_report = comparator.compare(eval_results)

    return EnrichedComparisonReport(
        system_results=base_report.system_results,
        best_system=base_report.best_system,
        statistical_tests=base_report.statistical_tests,
        risk_summaries=risk_summaries,
        has_ground_truth=has_ground_truth,
        overlapping_risk_count=overlapping_risk_count,
        unique_to=unique_to,
    )


def build_empty_eval_results(
    analysis_results: list[AnalysisResult],
) -> list[EvaluationResult]:
    """Bygg EvaluationResults med tomme metrikker."""
    empty_match = MatchResult(
        matched_pairs=[],
        matched_scores=[],
        unmatched_predicted=[],
        unmatched_ground_truth=[],
    )
    return [
        EvaluationResult(
            run_id=r.run_id,
            system_type=r.system_type,
            overall_metrics=compute_overall_metrics(empty_match),
            matched_risks=0,
            unmatched_predicted=len(r.risks),
            unmatched_ground_truth=0,
        )
        for r in analysis_results
    ]


# ---------------------------------------------------------------------------
# Ablasjon-hjelpefunksjoner
# ---------------------------------------------------------------------------

GROUND_TRUTH_DIR = Path("data/ground_truth")


def scan_ablation_document_sets() -> list[dict]:
    """Scan eval_history og ground_truth for dokumentsett med FULL-eval."""
    if not EVAL_HISTORY_DIR.exists():
        return []

    doc_sets: dict[str, dict] = {}
    for path in EVAL_HISTORY_DIR.glob("*.json"):
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            continue
        doc_id = data.get("document_set_id", "")
        if not doc_id:
            continue
        if doc_id not in doc_sets:
            doc_sets[doc_id] = {
                "document_set_id": doc_id,
                "has_full_eval": False,
                "has_ground_truth": False,
            }
        sr = data.get("system_results", {})
        if "agentic_rag_P+T+R" in sr or "agentic_rag" in sr:
            doc_sets[doc_id]["has_full_eval"] = True

    for doc_id in doc_sets:
        if (GROUND_TRUTH_DIR / f"{doc_id}.json").exists():
            doc_sets[doc_id]["has_ground_truth"] = True

    return sorted(doc_sets.values(), key=lambda d: d["document_set_id"])


def find_full_eval(doc_set_id: str) -> dict | None:
    """Finn FULL (P+T+R) evalueringsmetrikker fra eval_history."""
    if not EVAL_HISTORY_DIR.exists():
        return None
    for path in EVAL_HISTORY_DIR.glob("*.json"):
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            continue
        if data.get("document_set_id") != doc_set_id:
            continue
        for key in ("agentic_rag_P+T+R", "agentic_rag"):
            sr = data.get("system_results", {}).get(key)
            if sr:
                om = sr.get("overall_metrics", {})
                return {
                    "f1": om.get("f1", 0.0),
                    "precision": om.get("precision", 0.0),
                    "recall": om.get("recall", 0.0),
                    "matched_risks": sr.get("matched_risks", 0),
                }
    return None


def check_ablation_resume(doc_set_id: str, label: str) -> Path | None:
    """Returner path til cached ablasjon-resultat hvis det finnes."""
    d = RESULTS_DIR / doc_set_id / f"ablation_{label}"
    if d.exists():
        jsons = list(d.glob("*.json"))
        if jsons:
            return jsons[0]
    return None
