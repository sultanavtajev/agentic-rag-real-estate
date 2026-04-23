"""Reflector-komponent for kvalitetskontroll av identifiserte risikoer."""

import logging

import anthropic
from pydantic import BaseModel, Field

from src.config import Settings
from src.models.schemas import (
    DocumentChunk,
    IdentifiedRisk,
)

logger = logging.getLogger(__name__)

MIN_CONFIDENCE_THRESHOLD = 0.3


class ReflectionResult(BaseModel):
    """Resultat fra refleksjon og validering av risikoer."""

    validated_risks: list[IdentifiedRisk] = Field(
        description="Validerte risikoer med justert confidence",
    )
    re_retrieval_queries: list[str] = Field(
        default_factory=list,
        description="Nye sporsmal for ytterligere retrieval",
    )
    reasoning: str = Field(
        description="Begrunnelse for valideringsbeslutninger",
    )


VALIDATE_RISKS_TOOL = {
    "name": "validate_risks",
    "description": "Valider identifiserte risikoer mot evidens.",
    "input_schema": {
        "type": "object",
        "properties": {
            "validated_risks": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "risk_id": {"type": "string"},
                        "description": {"type": "string"},
                        "evidence": {
                            "type": "array",
                            "items": {"type": "string"},
                        },
                        "source_documents": {
                            "type": "array",
                            "items": {"type": "string"},
                        },
                        "source_pages": {
                            "type": "array",
                            "items": {"type": "integer"},
                        },
                        "confidence": {
                            "type": "number",
                            "minimum": 0.0,
                            "maximum": 1.0,
                        },
                    },
                    "required": [
                        "risk_id",
                        "description",
                        "evidence",
                        "source_documents",
                        "source_pages",
                        "confidence",
                    ],
                },
            },
            "re_retrieval_queries": {
                "type": "array",
                "items": {"type": "string"},
            },
            "reasoning": {"type": "string"},
        },
        "required": [
            "validated_risks",
            "re_retrieval_queries",
            "reasoning",
        ],
    },
}


class Reflector:
    """Kvalitetskontroll av identifiserte risikoer mot evidens."""

    def __init__(self, settings: Settings) -> None:
        self.settings = settings
        self.client = anthropic.Anthropic(api_key=settings.anthropic_api_key)

    def reflect(
        self,
        risks: list[IdentifiedRisk],
        chunks: list[DocumentChunk],
        query: str,
    ) -> ReflectionResult:
        """Valider risikoer mot hentet evidens.

        Args:
            risks: Identifiserte risikoer a validere.
            chunks: Dokumentchunks brukt som evidens.
            query: Opprinnelig analysesporsmal.

        Returns:
            ReflectionResult med validerte risikoer.
        """
        system_prompt = self._build_prompt()
        user_prompt = self._build_user_prompt(risks, chunks, query)
        response = self._call_claude(system_prompt, user_prompt)
        return self._parse_reflection(response)

    def _build_prompt(self) -> str:
        """Bygg system prompt for refleksjon."""
        return (
            "Du er en kvalitetskontrollor for risikoanalyse. "
            "Valider identifiserte risikoer mot evidensen i "
            "dokumentchunkene.\n\n"
            "For hver risiko:\n"
            "- Vurder om evidensen stotter risikoen\n"
            "- Juster confidence opp eller ned basert pa evidens\n"
            "- Fjern risikoer uten tilstrekkelig evidens\n"
            "- Foreslaa nye sporsmal hvis viktig informasjon mangler\n\n"
            "Vurder ogsa om det er risikoer som burde vart identifisert "
            "men som mangler."
        )

    def _build_user_prompt(
        self,
        risks: list[IdentifiedRisk],
        chunks: list[DocumentChunk],
        query: str,
    ) -> str:
        """Bygg user prompt med risikoer og evidens."""
        risks_text = "\n\n".join(
            f"Risiko {i + 1}: {r.description}\n"
            f"  Confidence: {r.confidence}\n"
            f"  Evidens: {'; '.join(r.evidence)}"
            for i, r in enumerate(risks)
        )
        chunks_text = "\n\n---\n\n".join(
            f"[{c.document_id} | Side {c.page_numbers}]\n{c.text}" for c in chunks
        )
        return (
            f"Sporsmal: {query}\n\n"
            f"Identifiserte risikoer:\n{risks_text}\n\n"
            f"Dokumentkontekst:\n{chunks_text}"
        )

    def _call_claude(self, system_prompt: str, user_prompt: str) -> anthropic.types.Message:
        """Kall Claude API med validate_risks tool.

        Args:
            system_prompt: System-instruksjoner.
            user_prompt: Risikoer og evidens.

        Returns:
            Claude API-respons.
        """
        return self.client.messages.create(
            model=self.settings.claude_model,
            max_tokens=16384,
            temperature=0.0,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}],
            tools=[VALIDATE_RISKS_TOOL],
            tool_choice={"type": "tool", "name": "validate_risks"},
        )

    def _parse_reflection(self, response: anthropic.types.Message) -> ReflectionResult:
        """Parse Claude tool_use-respons til ReflectionResult.

        Args:
            response: Claude API-respons med tool_use blokker.

        Returns:
            ReflectionResult med validerte risikoer.
        """
        for block in response.content:
            if block.type == "tool_use" and block.name == "validate_risks":
                raw = block.input
                validated = [
                    IdentifiedRisk(
                        risk_id=r["risk_id"],
                        description=r["description"],
                        evidence=r.get("evidence", []),
                        source_documents=r.get("source_documents", []),
                        source_pages=r.get("source_pages", []),
                        confidence=r.get("confidence", 0.5),
                        details=r.get("details", {}),
                    )
                    for r in raw["validated_risks"]
                    if r.get("confidence", 0.5) >= MIN_CONFIDENCE_THRESHOLD
                ]
                result = ReflectionResult(
                    validated_risks=validated,
                    re_retrieval_queries=raw.get("re_retrieval_queries", []),
                    reasoning=raw.get("reasoning", ""),
                )
                logger.info(
                    "Refleksjon fullfort: %d av %d risikoer validert",
                    len(validated),
                    len(raw["validated_risks"]),
                )
                return result
        msg = "Ingen validate_risks tool_use i Claude-respons"
        raise RuntimeError(msg)
