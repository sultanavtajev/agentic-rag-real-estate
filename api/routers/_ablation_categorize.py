"""Hjelpefunksjoner og endepunkter for ablasjon-kategorisering."""

import logging
from pathlib import Path

from fastapi import APIRouter, HTTPException, Request

from src.evaluation.categorizer import RiskCategorizer
from src.evaluation.category_store import CategoryStore
from src.models.schemas import (
    AblationCategorizeRequest,
    AblationCategorizeStatus,
    AblationConfigRisks,
    AnalysisResult,
    CategorizeResponse,
)

logger = logging.getLogger(__name__)

RESULTS_DIR = Path("data/results")
ABLATION_CATEGORIES_PATH = Path("data/ablation_risk_categories.json")

categorize_router = APIRouter(tags=["ablation"])
_store = CategoryStore(path=ABLATION_CATEGORIES_PATH)


def _scan_config_dirs(doc_set_id: str) -> list[tuple[str, Path]]:
    """Finn alle ablasjon- og agentic_rag-mapper for et dokumentsett.

    Returns:
        Liste med (config_label, dir_path) tupler.
    """
    base = RESULTS_DIR / doc_set_id
    if not base.exists():
        return []

    configs: list[tuple[str, Path]] = []
    for d in sorted(base.iterdir()):
        if not d.is_dir():
            continue
        if d.name.startswith("ablation_"):
            label = d.name.removeprefix("ablation_")
            configs.append((label, d))
        elif d.name == "agentic_rag":
            configs.append(("P+T+R", d))
    return configs


def _load_risks_from_dir(config_dir: Path) -> list[dict]:
    """Last risikoer fra alle JSON-filer i en config-mappe.

    Returns:
        Liste med {risk_id, description} dicts.
    """
    risks: list[dict] = []
    seen: set[str] = set()
    for path in config_dir.glob("*.json"):
        try:
            ar = AnalysisResult.model_validate_json(path.read_text(encoding="utf-8"))
        except Exception:
            logger.warning("Kunne ikke parse %s", path)
            continue
        for risk in ar.risks:
            if risk.risk_id not in seen:
                seen.add(risk.risk_id)
                risks.append({"risk_id": risk.risk_id, "description": risk.description})
    return risks


def _get_config_risks(doc_set_id: str) -> list[AblationConfigRisks]:
    """Hent risikoer per ablasjonskonfigurasjon for et dokumentsett."""
    configs = _scan_config_dirs(doc_set_id)
    if not configs:
        return []

    data = _store.load()
    mappings = data.get("mappings", {})
    results: list[AblationConfigRisks] = []

    for label, config_dir in configs:
        risks = _load_risks_from_dir(config_dir)
        categorized = sum(1 for r in risks if r["risk_id"] in mappings)
        results.append(
            AblationConfigRisks(
                config_label=label,
                risks=risks,
                risk_count=len(risks),
                categorized_count=categorized,
            )
        )
    return results


def _get_uncategorized_risks(
    doc_set_id: str,
    config_labels: list[str],
) -> list[dict]:
    """Hent ukategoriserte risikoer for gitte config_labels.

    Returns:
        Liste med {risk_id, description, system_type} for ukategoriserte risikoer.
    """
    configs = _scan_config_dirs(doc_set_id)
    label_to_dir = dict(configs)

    uncategorized: list[dict] = []
    seen: set[str] = set()

    for label in config_labels:
        config_dir = label_to_dir.get(label)
        if not config_dir:
            continue
        risks = _load_risks_from_dir(config_dir)
        system_type = f"ablation_{label}"
        for r in risks:
            rid = r["risk_id"]
            if rid not in seen and not _store.is_categorized(rid):
                seen.add(rid)
                uncategorized.append(
                    {
                        "risk_id": rid,
                        "description": r["description"],
                        "system_type": system_type,
                    }
                )
    return uncategorized


def _get_categorization_status() -> AblationCategorizeStatus:
    """Beregn kategoriseringsstatus for alle ablasjon-resultater."""
    total = 0
    categorized = 0
    per_config: list[dict] = []

    if not RESULTS_DIR.exists():
        return AblationCategorizeStatus(
            total_risks=0, categorized_count=0, uncategorized_count=0, per_config=[]
        )

    data = _store.load()
    mappings = data.get("mappings", {})

    for doc_dir in sorted(RESULTS_DIR.iterdir()):
        if not doc_dir.is_dir():
            continue
        configs = _scan_config_dirs(doc_dir.name)
        for label, config_dir in configs:
            risks = _load_risks_from_dir(config_dir)
            cat_count = sum(1 for r in risks if r["risk_id"] in mappings)
            risk_count = len(risks)
            total += risk_count
            categorized += cat_count
            per_config.append(
                {
                    "config_label": label,
                    "document_set_id": doc_dir.name,
                    "total": risk_count,
                    "categorized": cat_count,
                    "uncategorized": risk_count - cat_count,
                }
            )

    return AblationCategorizeStatus(
        total_risks=total,
        categorized_count=categorized,
        uncategorized_count=total - categorized,
        per_config=per_config,
    )


# --- Endepunkter ---


@categorize_router.get("/risks/{doc_set_id}", response_model=list[AblationConfigRisks])
async def get_ablation_risks(doc_set_id: str) -> list[AblationConfigRisks]:
    """Hent risikoer fra ablasjon-resultater per konfigurasjon."""
    results = _get_config_risks(doc_set_id)
    if not results:
        raise HTTPException(status_code=404, detail=f"Ingen ablasjon-resultater for {doc_set_id}")
    return results


@categorize_router.post("/categorize", response_model=CategorizeResponse)
async def categorize_ablation_risks(
    request: AblationCategorizeRequest,
    http_request: Request,
) -> CategorizeResponse:
    """Kategoriser risikoer fra ablasjon-konfigurasjoner."""
    settings = http_request.app.state.settings
    uncategorized = _get_uncategorized_risks(request.document_set_id, request.config_labels)

    if not uncategorized:
        return CategorizeResponse(
            document_set_id=request.document_set_id,
            record_id="ablation",
            categorized_count=0,
            new_categories=[],
            results=[],
        )

    categorizer = RiskCategorizer(settings)
    existing_cats = _store.get_categories()
    results = categorizer.categorize_risks(uncategorized, existing_cats)

    mappings: dict[str, tuple[str, str, float]] = {}
    risk_lookup = {r["risk_id"]: r for r in uncategorized}
    for result in results:
        sys_type = risk_lookup.get(result.risk_id, {}).get("system_type", "unknown")
        mappings[result.risk_id] = (result.category, sys_type, result.confidence)

    new_cats = _store.add_mappings(mappings)

    return CategorizeResponse(
        document_set_id=request.document_set_id,
        record_id="ablation",
        categorized_count=len(results),
        new_categories=new_cats,
        results=results,
    )


@categorize_router.get("/categorization-status", response_model=AblationCategorizeStatus)
async def get_ablation_categorization_status() -> AblationCategorizeStatus:
    """Hent kategoriseringsstatus for alle ablasjon-resultater."""
    return _get_categorization_status()
