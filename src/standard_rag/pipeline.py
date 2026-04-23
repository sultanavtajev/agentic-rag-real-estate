"""Standard RAG-pipeline for risikoidentifikasjon i eiendomsdokumenter."""

from __future__ import annotations

import logging
import time
import uuid
from datetime import datetime
from typing import TYPE_CHECKING

import anthropic

from src.config import Settings
from src.models.schemas import (
    AnalysisResult,
    DocumentChunk,
    IdentifiedRisk,
)
from src.retrieval.vector_store import VectorStoreManager

if TYPE_CHECKING:
    from src.tracing.collector import TraceCollector

logger = logging.getLogger(__name__)

RISK_ANALYSIS_SYSTEM_PROMPT = (
    "Du er en ekspert på analyse av norske eiendomsdokumenter. "
    "Din oppgave er å identifisere risikoer i dokumentene "
    "basert på gitt kontekst.\n\n"
    "Identifiser alle risikoer du finner i dokumentene, "
    "uavhengig av type.\n\n"
    "Analyser konteksten grundig og identifiser alle relevante "
    "risikoer. Oppgi evidens fra kildeteksten og angi confidence "
    "mellom 0.0 og 1.0."
)

IDENTIFY_RISKS_TOOL = {
    "name": "identify_risks",
    "description": ("Identifiser risikoer i norske eiendomsdokumenter basert på gitt kontekst."),
    "input_schema": {
        "type": "object",
        "properties": {
            "risks": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
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
                        "description",
                        "evidence",
                        "source_documents",
                        "source_pages",
                        "confidence",
                    ],
                },
            },
        },
        "required": ["risks"],
    },
}

_STEP = "standard_rag"


class StandardRAGPipeline:
    """Standard RAG-pipeline for risikoidentifikasjon."""

    def __init__(self, settings: Settings, vector_store: VectorStoreManager) -> None:
        self.settings = settings
        self.vector_store = vector_store
        self.client = anthropic.Anthropic(api_key=settings.anthropic_api_key)

    def analyze(
        self,
        document_set_id: str,
        query: str,
        collector: TraceCollector | None = None,
    ) -> AnalysisResult:
        """Kjør standard RAG-analyse."""
        start_time = time.time()
        run_id = str(uuid.uuid4())

        if collector:
            collector.emit_step(_STEP, "retrieving", "running")

        chunks = self.vector_store.retrieve(
            query,
            document_set_id,
            top_k=self.settings.retrieval_top_k,
            min_score=self.settings.retrieval_min_score,
            min_results=self.settings.retrieval_min_results,
        )

        if collector:
            collector.emit_step(_STEP, "retrieving", "done", f"{len(chunks)} chunks hentet")
            collector.emit_step(_STEP, "analyzing", "running")

        system_prompt = self._build_system_prompt()
        user_prompt = self._build_user_prompt(query, chunks)

        if collector:
            response = collector.wrap_call(
                "standard_analyzing",
                system_prompt,
                user_prompt,
                self._call_claude,
                system_prompt,
                user_prompt,
            )
        else:
            response = self._call_claude(system_prompt, user_prompt)

        if collector:
            collector.emit_step(_STEP, "analyzing", "done")
            collector.emit_step(_STEP, "parsing", "running")

        input_tokens = response.usage.input_tokens
        output_tokens = response.usage.output_tokens

        risks = self._parse_risks(response, run_id)

        if collector:
            collector.emit_step(_STEP, "parsing", "done", f"{len(risks)} risikoer")

        duration_s = round(time.time() - start_time, 2)

        return AnalysisResult(
            run_id=run_id,
            document_set_id=document_set_id,
            system_type="standard_rag",
            risks=risks,
            raw_llm_response=str(response),
            timestamp=datetime.now(),
            config={},
            duration_s=duration_s,
            input_tokens=input_tokens,
            output_tokens=output_tokens,
        )

    def _build_system_prompt(self) -> str:
        """Bygg system prompt for risikoidentifikasjon."""
        return RISK_ANALYSIS_SYSTEM_PROMPT

    def _build_user_prompt(self, query: str, chunks: list[DocumentChunk]) -> str:
        """Bygg user prompt med query og retrieved chunks."""
        context_parts = []
        for chunk in chunks:
            header = f"[{chunk.document_id} | Side {chunk.page_numbers}]"
            if chunk.section:
                header += f" Seksjon: {chunk.section}"
            context_parts.append(f"{header}\n{chunk.text}")

        context = "\n\n---\n\n".join(context_parts)
        return f"Spørsmål: {query}\n\nKontekst fra dokumenter:\n\n{context}"

    def _call_claude(self, system_prompt: str, user_prompt: str) -> anthropic.types.Message:
        """Kall Claude API med tool_use."""
        return self.client.messages.create(
            model=self.settings.claude_model,
            max_tokens=16384,
            temperature=0.0,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}],
            tools=[IDENTIFY_RISKS_TOOL],
            tool_choice={"type": "tool", "name": "identify_risks"},
        )

    def _parse_risks(self, response: anthropic.types.Message, run_id: str) -> list[IdentifiedRisk]:
        """Parse Claude tool_use-respons til IdentifiedRisk-liste."""
        risks = []
        for block in response.content:
            if block.type == "tool_use" and block.name == "identify_risks":
                raw_risks = block.input.get("risks", [])
                for i, raw in enumerate(raw_risks):
                    risk = IdentifiedRisk(
                        risk_id=f"{run_id}_risk_{i:03d}",
                        description=raw["description"],
                        evidence=raw.get("evidence", []),
                        source_documents=raw.get("source_documents", []),
                        source_pages=raw.get("source_pages", []),
                        confidence=raw.get("confidence", 0.5),
                        details=raw.get("details", {}),
                    )
                    risks.append(risk)
        logger.info("Identifisert %d risikoer", len(risks))
        return risks
