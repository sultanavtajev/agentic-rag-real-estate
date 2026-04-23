"""Hjelpefunksjoner for ablasjon-evaluering med full EvaluationResult."""

import json
import logging
from datetime import datetime
from pathlib import Path

from api.routers._experiments_helpers import (
    GROUND_TRUTH_DIR,
    RESULTS_DIR,
    evaluate_result,
)
from src.config import Settings
from src.models.schemas import (
    AnalysisResult,
    EvaluationResult,
    GroundTruthAnnotation,
)

logger = logging.getLogger(__name__)

ABLATION_EVAL_DIR = Path("data/ablation_evaluations")


def save_ablation_evaluations(
    doc_set_id: str,
    eval_results: dict[str, EvaluationResult],
    risk_counts: dict[str, int],
) -> None:
    """Lagre fulle evalueringsresultater for alle ablasjon-konfigurasjoner."""
    ABLATION_EVAL_DIR.mkdir(parents=True, exist_ok=True)

    # Bygg system_results som serialiserbare dicts
    system_results = {}
    for label, ev in eval_results.items():
        system_results[label] = ev.model_dump()

    # Bygg risk_summaries
    risk_summaries = [
        {"system_type": label, "total_risks": count, "risks_by_category": {}}
        for label, count in risk_counts.items()
    ]

    # Finn beste system basert paa F1
    best_system = max(eval_results, key=lambda k: eval_results[k].overall_metrics.f1)

    data = {
        "document_set_id": doc_set_id,
        "system_results": system_results,
        "risk_summaries": risk_summaries,
        "has_ground_truth": True,
        "overlapping_risk_count": 0,
        "unique_to": {},
        "best_system": best_system,
        "statistical_tests": {},
        "timestamp": datetime.now().isoformat(),
    }

    path = ABLATION_EVAL_DIR / f"{doc_set_id}.json"
    path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
    logger.info("Ablasjon-evaluering lagret: %s", path)


def load_ablation_evaluation(doc_set_id: str) -> dict | None:
    """Last lagret ablasjon-evaluering for et dokumentsett."""
    path = ABLATION_EVAL_DIR / f"{doc_set_id}.json"
    if not path.exists():
        return None
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (json.JSONDecodeError, OSError):
        return None


def evaluate_ablation_for_doc_set(
    doc_set_id: str,
    settings: Settings,
) -> dict | None:
    """Evaluer alle ablasjon-konfigurasjoner for et dokumentsett mot GT.

    Laster eksisterende analysefiler og evaluerer dem. Lagrer resultatet.
    """
    gt_path = GROUND_TRUTH_DIR / f"{doc_set_id}.json"
    if not gt_path.exists():
        return None

    gt = GroundTruthAnnotation.model_validate_json(gt_path.read_text(encoding="utf-8"))
    doc_dir = RESULTS_DIR / doc_set_id
    if not doc_dir.exists():
        return None

    eval_results: dict[str, EvaluationResult] = {}
    risk_counts: dict[str, int] = {}

    for subdir in sorted(doc_dir.iterdir()):
        if not subdir.is_dir():
            continue

        # Bestem config label
        if subdir.name.startswith("ablation_"):
            label = subdir.name.removeprefix("ablation_")
        elif subdir.name == "agentic_rag":
            label = "P+T+R"
        else:
            continue

        # Last nyeste analysefil
        json_files = list(subdir.glob("*.json"))
        if not json_files:
            continue

        latest = max(json_files, key=lambda p: p.stat().st_mtime)
        try:
            ar = AnalysisResult.model_validate_json(latest.read_text(encoding="utf-8"))
        except Exception:
            logger.warning("Kunne ikke parse %s", latest)
            continue

        try:
            ev = evaluate_result(ar, gt, settings)
            eval_results[label] = ev
            risk_counts[label] = len(ar.risks)
        except Exception:
            logger.exception("Evaluering feilet for %s/%s", doc_set_id, label)

    if not eval_results:
        return None

    save_ablation_evaluations(doc_set_id, eval_results, risk_counts)
    return load_ablation_evaluation(doc_set_id)


def list_ablation_evaluations() -> list[str]:
    """List dokumentsett som har lagrede ablasjon-evalueringer."""
    if not ABLATION_EVAL_DIR.exists():
        return []
    return sorted(p.stem for p in ABLATION_EVAL_DIR.glob("*.json"))


def list_configs_for_doc_set(doc_set_id: str) -> list[str]:
    """List tilgjengelige ablasjon-konfigurasjoner for et dokumentsett."""
    doc_dir = RESULTS_DIR / doc_set_id
    if not doc_dir.exists():
        return []

    labels: list[str] = []
    for subdir in sorted(doc_dir.iterdir()):
        if not subdir.is_dir() or not list(subdir.glob("*.json")):
            continue
        if subdir.name.startswith("ablation_"):
            labels.append(subdir.name.removeprefix("ablation_"))
        elif subdir.name == "agentic_rag":
            labels.append("P+T+R")
    return labels


def evaluate_single_config(
    doc_set_id: str,
    config_label: str,
    settings: Settings,
) -> dict | None:
    """Evaluer en enkelt ablasjon-konfigurasjon mot GT.

    Oppdaterer den lagrede evalueringsfilen med det nye resultatet.
    """
    gt_path = GROUND_TRUTH_DIR / f"{doc_set_id}.json"
    if not gt_path.exists():
        return None

    gt = GroundTruthAnnotation.model_validate_json(gt_path.read_text(encoding="utf-8"))

    # Finn riktig mappe
    if config_label == "P+T+R":
        config_dir = RESULTS_DIR / doc_set_id / "agentic_rag"
    else:
        config_dir = RESULTS_DIR / doc_set_id / f"ablation_{config_label}"

    if not config_dir.exists():
        return None

    json_files = list(config_dir.glob("*.json"))
    if not json_files:
        return None

    latest = max(json_files, key=lambda p: p.stat().st_mtime)
    ar = AnalysisResult.model_validate_json(latest.read_text(encoding="utf-8"))
    ev = evaluate_result(ar, gt, settings)

    # Oppdater lagret fil
    existing = load_ablation_evaluation(doc_set_id) or {
        "document_set_id": doc_set_id,
        "system_results": {},
        "risk_summaries": [],
        "has_ground_truth": True,
        "overlapping_risk_count": 0,
        "unique_to": {},
        "best_system": config_label,
        "statistical_tests": {},
        "timestamp": datetime.now().isoformat(),
    }

    existing["system_results"][config_label] = ev.model_dump()

    # Oppdater risk_summaries
    summaries = {s["system_type"]: s for s in existing.get("risk_summaries", [])}
    summaries[config_label] = {
        "system_type": config_label,
        "total_risks": len(ar.risks),
        "risks_by_category": {},
    }
    existing["risk_summaries"] = list(summaries.values())

    # Oppdater best_system
    best_label = max(
        existing["system_results"],
        key=lambda k: existing["system_results"][k].get("overall_metrics", {}).get("f1", 0),
    )
    existing["best_system"] = best_label
    existing["timestamp"] = datetime.now().isoformat()

    ABLATION_EVAL_DIR.mkdir(parents=True, exist_ok=True)
    path = ABLATION_EVAL_DIR / f"{doc_set_id}.json"
    path.write_text(json.dumps(existing, indent=2, ensure_ascii=False), encoding="utf-8")

    return {
        "config_label": config_label,
        "overall_metrics": ev.model_dump()["overall_metrics"],
        "risk_count": len(ar.risks),
    }
