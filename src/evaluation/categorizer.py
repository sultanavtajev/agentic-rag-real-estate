"""Kategorisering av risikoer via Claude med tool_use."""

import logging

import anthropic

from src.config import Settings
from src.models.schemas import RiskCategoryResult

logger = logging.getLogger(__name__)

CATEGORIZE_TOOL = {
    "name": "categorize_risks",
    "description": "Categorize risks identified in Norwegian real estate documents",
    "input_schema": {
        "type": "object",
        "properties": {
            "categorized_risks": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "risk_id": {"type": "string"},
                        "category": {
                            "type": "string",
                            "description": "Category in snake_case, e.g. moisture_and_wet_rooms",
                        },
                        "confidence": {"type": "number", "minimum": 0, "maximum": 1},
                    },
                    "required": ["risk_id", "category", "confidence"],
                },
            },
        },
        "required": ["categorized_risks"],
    },
}

SYSTEM_PROMPT = """You are an expert on Norwegian real estate documents and risk assessment.
Categorize each risk into an appropriate category.

Existing categories already in use:
{existing_categories}

Rules:
- Reuse existing categories where applicable
- Create new categories only if no existing category fits
- Use snake_case for category names (e.g. moisture_and_wet_rooms, electrical_systems)
- Category names must be in English
- Set confidence between 0 and 1 based on how certain you are"""


class RiskCategorizer:
    """Kategoriserer risikoer ved hjelp av Claude."""

    def __init__(self, settings: Settings) -> None:
        self.client = anthropic.Anthropic(api_key=settings.anthropic_api_key)
        self.model = settings.claude_model

    def categorize_risks(
        self,
        risks: list[dict],
        existing_categories: list[str],
    ) -> list[RiskCategoryResult]:
        """Kategoriser risikoer via Claude med tool_use.

        Args:
            risks: Liste med {risk_id, description, system_type}.
            existing_categories: Kategorier som allerede eksisterer.

        Returns:
            Liste med kategoriseringsresultater.
        """
        if not risks:
            return []

        user_message = self._build_user_message(risks)
        system_prompt = self._build_system_prompt(existing_categories)
        tool_results = self._call_claude(system_prompt, user_message)
        return self._parse_results(tool_results)

    def _build_system_prompt(self, existing_categories: list[str]) -> str:
        """Bygg system-prompt med eksisterende kategorier."""
        cat_str = ", ".join(existing_categories) if existing_categories else "(none yet)"
        return SYSTEM_PROMPT.format(existing_categories=cat_str)

    def _build_user_message(self, risks: list[dict]) -> str:
        """Bygg brukermelding med risikoer som skal kategoriseres."""
        lines = ["Categorize the following risks:\n"]
        for r in risks:
            lines.append(f"- ID: {r['risk_id']}")
            lines.append(f"  Description: {r['description']}")
            lines.append(f"  System: {r['system_type']}\n")
        return "\n".join(lines)

    def _call_claude(self, system_prompt: str, user_message: str) -> list[dict]:
        """Send forespørsel til Claude og returner kategoriserte risikoer."""
        response = self.client.messages.create(
            model=self.model,
            max_tokens=16384,
            temperature=0.0,
            system=system_prompt,
            tools=[CATEGORIZE_TOOL],
            tool_choice={"type": "tool", "name": "categorize_risks"},
            messages=[{"role": "user", "content": user_message}],
        )

        for block in response.content:
            if block.type == "tool_use" and block.name == "categorize_risks":
                return block.input.get("categorized_risks", [])

        logger.warning("Ingen tool_use-blokk i Claude-respons")
        return []

    def _parse_results(self, tool_results: list[dict]) -> list[RiskCategoryResult]:
        """Konverter rå tool-resultater til RiskCategoryResult-objekter."""
        return [
            RiskCategoryResult(
                risk_id=r["risk_id"],
                category=r["category"],
                confidence=r.get("confidence", 0.0),
            )
            for r in tool_results
        ]
