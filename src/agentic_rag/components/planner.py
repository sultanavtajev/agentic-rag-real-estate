"""Planner-komponent for dekomponering av analysesporsmal."""

import logging

import anthropic
from pydantic import BaseModel, Field

from src.config import Settings
from src.models.schemas import DocumentType

logger = logging.getLogger(__name__)


class SubQuery(BaseModel):
    """En delsporsmal rettet mot spesifikke dokumenttyper."""

    query: str = Field(description="Delsporsmal for retrieval")
    target_document_types: list[DocumentType] = Field(
        description="Dokumenttyper som er relevante for dette delsporsmal",
    )
    rationale: str = Field(description="Begrunnelse for dette delsporsmal")


class AnalysisPlan(BaseModel):
    """Plan for analyse med dekomponerte delsporsmal."""

    sub_queries: list[SubQuery] = Field(
        description="Liste med delsporsmal for retrieval",
    )
    strategy: str = Field(description="Overordnet analysestrategi")


CREATE_PLAN_TOOL = {
    "name": "create_plan",
    "description": "Opprett en analyseplan med dekomponerte delsporsmal.",
    "input_schema": {
        "type": "object",
        "properties": {
            "sub_queries": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "query": {"type": "string"},
                        "target_document_types": {
                            "type": "array",
                            "items": {
                                "type": "string",
                                "enum": [dt.value for dt in DocumentType],
                            },
                        },
                        "rationale": {"type": "string"},
                    },
                    "required": ["query", "target_document_types", "rationale"],
                },
            },
            "strategy": {"type": "string"},
        },
        "required": ["sub_queries", "strategy"],
    },
}


class Planner:
    """Dekomponerer analysesporsmal til malrettede delsporsmal."""

    def __init__(self, settings: Settings) -> None:
        self.settings = settings
        self.client = anthropic.Anthropic(api_key=settings.anthropic_api_key)

    def plan(self, query: str, available_documents: list[str]) -> AnalysisPlan:
        """Lag en analyseplan basert pa sporsmalet.

        Args:
            query: Hovedsporsmal for analysen.
            available_documents: Liste med tilgjengelige dokumentnavn.

        Returns:
            AnalysisPlan med dekomponerte delsporsmal.
        """
        system_prompt = self._build_prompt()
        user_prompt = self._build_user_prompt(query, available_documents)
        response = self._call_claude(system_prompt, user_prompt)
        return self._parse_plan(response)

    def _build_prompt(self) -> str:
        """Bygg system prompt for planlegging."""
        return (
            "Du er en planlegger for eiendomsdokumentanalyse. "
            "Dekomponer hovedsporsmal i malrettede sub-queries "
            "som kan brukes til a hente relevante dokumentdeler.\n\n"
            "Dokumenttype:\n"
            "- salgsoppgave: Informasjon om eiendommen for salg\n\n"
            "Lag en plan med 2-5 delsporsmal som dekker ulike aspekter "
            "av hovedsporsmal."
        )

    def _build_user_prompt(self, query: str, available_documents: list[str]) -> str:
        """Bygg user prompt med query og dokumentliste."""
        docs_list = "\n".join(f"- {doc}" for doc in available_documents)
        return f"Hovedsporsmal: {query}\n\nTilgjengelige dokumenter:\n{docs_list}"

    def _call_claude(self, system_prompt: str, user_prompt: str) -> anthropic.types.Message:
        """Kall Claude API med create_plan tool.

        Args:
            system_prompt: System-instruksjoner.
            user_prompt: Brukerens sporsmal med kontekst.

        Returns:
            Claude API-respons.
        """
        return self.client.messages.create(
            model=self.settings.claude_model,
            max_tokens=16384,
            temperature=0.0,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}],
            tools=[CREATE_PLAN_TOOL],
            tool_choice={"type": "tool", "name": "create_plan"},
        )

    def _parse_plan(self, response: anthropic.types.Message) -> AnalysisPlan:
        """Parse Claude tool_use-respons til AnalysisPlan.

        Args:
            response: Claude API-respons med tool_use blokker.

        Returns:
            AnalysisPlan med dekomponerte delsporsmal.
        """
        for block in response.content:
            if block.type == "tool_use" and block.name == "create_plan":
                plan = AnalysisPlan(
                    sub_queries=[
                        SubQuery(
                            query=sq["query"],
                            target_document_types=[
                                DocumentType(dt) for dt in sq["target_document_types"]
                            ],
                            rationale=sq["rationale"],
                        )
                        for sq in block.input["sub_queries"]
                    ],
                    strategy=block.input["strategy"],
                )
                logger.info(
                    "Plan opprettet med %d delsporsmal",
                    len(plan.sub_queries),
                )
                return plan
        msg = "Ingen create_plan tool_use i Claude-respons"
        raise RuntimeError(msg)
