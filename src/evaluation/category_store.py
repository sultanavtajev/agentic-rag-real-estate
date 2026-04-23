"""Persistering og tilgang til risikokategoriseringer."""

import json
import logging
from datetime import date
from pathlib import Path

from src.models.schemas import CategoryStats

logger = logging.getLogger(__name__)


class CategoryStore:
    """Lagring og oppslag av risiko-til-kategori-mappinger."""

    DEFAULT_PATH = Path("data/risk_categories.json")

    def __init__(self, path: Path | None = None) -> None:
        self.path = path or self.DEFAULT_PATH

    def load(self) -> dict:
        """Last kategoriseringsdata. Returnerer tom struktur hvis fil ikke finnes."""
        if not self.path.exists():
            return {"metadata": {"categories": [], "last_updated": ""}, "mappings": {}}
        return json.loads(self.path.read_text(encoding="utf-8"))

    def save(self, data: dict) -> None:
        """Skriv kategoriseringsdata til disk."""
        self.path.parent.mkdir(parents=True, exist_ok=True)
        data["metadata"]["last_updated"] = date.today().isoformat()
        self.path.write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
        logger.info("Kategoriseringsdata lagret: %s", self.path)

    def add_mappings(self, mappings: dict[str, tuple[str, str, float]]) -> list[str]:
        """Legg til nye risk_id -> (category, system_type, confidence) mappinger.

        Args:
            mappings: Dict med risk_id som nokkel og (category, system_type, confidence) som verdi.

        Returns:
            Liste over nye kategorier som ble opprettet.
        """
        data = self.load()
        existing_categories = set(data["metadata"]["categories"])
        new_categories: list[str] = []

        for risk_id, (category, system_type, confidence) in mappings.items():
            data["mappings"][risk_id] = {
                "category": category,
                "system_type": system_type,
                "confidence": confidence,
            }
            if category not in existing_categories:
                existing_categories.add(category)
                new_categories.append(category)

        data["metadata"]["categories"] = sorted(existing_categories)
        self.save(data)
        return new_categories

    def get_categories(self) -> list[str]:
        """Hent alle eksisterende kategorier."""
        data = self.load()
        return data["metadata"]["categories"]

    def get_stats(self) -> list[CategoryStats]:
        """Antall risikoer per kategori per system_type."""
        data = self.load()
        stats: dict[str, dict[str, int]] = {}

        for mapping in data["mappings"].values():
            cat = mapping["category"]
            sys_type = mapping["system_type"]
            if cat not in stats:
                stats[cat] = {"standard_rag": 0, "agentic_rag": 0, "ground_truth": 0}
            # Normaliser system_type til de tre hovedtypene
            if "agentic" in sys_type:
                stats[cat]["agentic_rag"] += 1
            elif "ground_truth" in sys_type:
                stats[cat]["ground_truth"] += 1
            else:
                stats[cat]["standard_rag"] += 1

        return [
            CategoryStats(
                category=cat,
                standard_rag_count=counts["standard_rag"],
                agentic_rag_count=counts["agentic_rag"],
                ground_truth_count=counts["ground_truth"],
                total=sum(counts.values()),
            )
            for cat, counts in sorted(stats.items())
        ]

    def get_uncategorized_count(self, all_risk_ids: list[str]) -> int:
        """Tell risikoer som ikke er kategorisert."""
        data = self.load()
        categorized = set(data["mappings"].keys())
        return sum(1 for rid in all_risk_ids if rid not in categorized)

    def is_categorized(self, risk_id: str) -> bool:
        """Sjekk om en risiko allerede er kategorisert."""
        data = self.load()
        return risk_id in data["mappings"]

    def remove_mappings_by_run_ids(self, run_ids: list[str]) -> int:
        """Fjern alle kategorimappinger for gitte run_ids.

        Risk-IDer folger monsteret {run_id}_risk_{n}, saa vi matcher paa prefiks.

        Returns:
            Antall fjernede mappinger.
        """
        data = self.load()
        prefixes = tuple(f"{rid}_risk_" for rid in run_ids)
        to_remove = [k for k in data["mappings"] if k.startswith(prefixes)]
        for k in to_remove:
            del data["mappings"][k]
        if to_remove:
            self.save(data)
            logger.info("Fjernet %d kategorimappinger for %d run_ids", len(to_remove), len(run_ids))
        return len(to_remove)
