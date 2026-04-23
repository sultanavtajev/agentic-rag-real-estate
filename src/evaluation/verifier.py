"""Verifisering av umatchede risikoer mot dokumentteksten."""

import json
import logging
from pathlib import Path

import anthropic

from src.config import Settings
from src.models.schemas import IdentifiedRisk, VerifiedRisk

logger = logging.getLogger(__name__)

PROCESSED_DIR = Path("data/processed")

VERIFY_RISKS_TOOL = {
    "name": "verify_risks",
    "description": "Verifiser om risikoer stoettes av dokumentteksten.",
    "input_schema": {
        "type": "object",
        "properties": {
            "verified_risks": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "risk_id": {"type": "string"},
                        "is_real_risk": {"type": "boolean"},
                        "reasoning": {"type": "string"},
                    },
                    "required": ["risk_id", "is_real_risk", "reasoning"],
                },
            },
        },
        "required": ["verified_risks"],
    },
}

_VERIFY_SYSTEM_PROMPT = (
    "Du er en ekspert paa norske eiendomsdokumenter. "
    "Du faar en salgsoppgave og en liste med risikoer som et analysesystem har identifisert. "
    "Disse risikoene ble IKKE matchet mot en fasit (ground truth). "
    "Din oppgave er aa vurdere om hver risiko faktisk stoettes av dokumentteksten. "
    "En risiko er ekte hvis dokumentet inneholder informasjon som bekrefter eller underbygger den. "
    "En risiko er en falsk alarm hvis dokumentet ikke gir grunnlag for den."
)


class RiskVerifier:
    """Verifiserer umatchede risikoer mot dokumentteksten via Claude."""

    def __init__(self, settings: Settings) -> None:
        self.client = anthropic.Anthropic(api_key=settings.anthropic_api_key)
        self.model = settings.claude_model

    def verify(
        self,
        risks: list[IdentifiedRisk],
        document_set_id: str,
    ) -> list[VerifiedRisk]:
        """Verifiser risikoer mot dokumentteksten."""
        if not risks:
            return []

        doc_text = self._load_document_text(document_set_id)
        if not doc_text:
            logger.warning(
                "Ingen dokumenttekst funnet for %s, skipper verifisering",
                document_set_id,
            )
            return [
                VerifiedRisk(
                    risk=r,
                    is_real_risk=True,
                    reasoning="Dokumenttekst ikke tilgjengelig",
                )
                for r in risks
            ]

        response = self._call_claude(risks, doc_text)
        return self._parse_response(response, risks)

    def _load_document_text(self, document_set_id: str) -> str:
        """Les ekstrahert tekst fra processed-mappen."""
        processed_dir = PROCESSED_DIR / document_set_id
        if not processed_dir.exists():
            return ""
        parts = []
        for md_file in sorted(processed_dir.glob("extracted_*.md")):
            parts.append(md_file.read_text(encoding="utf-8"))
        return "\n\n".join(parts)

    def _call_claude(
        self,
        risks: list[IdentifiedRisk],
        doc_text: str,
    ) -> anthropic.types.Message:
        """Kall Claude for verifisering."""
        risks_json = json.dumps(
            [
                {
                    "risk_id": r.risk_id,
                    "description": r.description,
                    "evidence": r.evidence,
                }
                for r in risks
            ],
            ensure_ascii=False,
            indent=2,
        )
        user_prompt = (
            f"Verifiser foelgende risikoer mot dokumentteksten.\n\n"
            f"Risikoer:\n{risks_json}\n\n"
            f"Dokumenttekst:\n{doc_text}"
        )
        return self.client.messages.create(
            model=self.model,
            max_tokens=16384,
            temperature=0.0,
            system=_VERIFY_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_prompt}],
            tools=[VERIFY_RISKS_TOOL],
            tool_choice={"type": "tool", "name": "verify_risks"},
        )

    def _parse_response(
        self,
        response: anthropic.types.Message,
        risks: list[IdentifiedRisk],
    ) -> list[VerifiedRisk]:
        """Parse Claude-respons til VerifiedRisk-liste."""
        risk_by_id = {r.risk_id: r for r in risks}
        for block in response.content:
            if block.type == "tool_use" and block.name == "verify_risks":
                result = []
                for item in block.input.get("verified_risks", []):
                    risk = risk_by_id.get(item["risk_id"])
                    if risk:
                        result.append(
                            VerifiedRisk(
                                risk=risk,
                                is_real_risk=item["is_real_risk"],
                                reasoning=item.get("reasoning", ""),
                            )
                        )
                # Add any risks that Claude didn't respond about
                responded_ids = {item["risk_id"] for item in block.input.get("verified_risks", [])}
                for r in risks:
                    if r.risk_id not in responded_ids:
                        result.append(
                            VerifiedRisk(
                                risk=r,
                                is_real_risk=True,
                                reasoning="Ikke vurdert av Claude",
                            )
                        )
                return result
        # Fallback: treat all as real if parsing fails
        return [
            VerifiedRisk(risk=r, is_real_risk=True, reasoning="Verifisering feilet") for r in risks
        ]
