"""Agentic RAG-orkestrator med plan-retrieve-reason-reflect flyt."""

from __future__ import annotations

import logging
import time
import uuid
from datetime import datetime
from typing import TYPE_CHECKING

import anthropic

from src.agentic_rag.components.planner import Planner, SubQuery
from src.agentic_rag.components.reflector import Reflector
from src.agentic_rag.config import AblationConfig
from src.agentic_rag.tools.cross_reference import CrossReferenceTool
from src.agentic_rag.tools.filtered_retrieval import FilteredRetrievalTool
from src.config import Settings
from src.models.schemas import (
    AnalysisResult,
    DocumentChunk,
    DocumentType,
    IdentifiedRisk,
)
from src.retrieval.vector_store import VectorStoreManager
from src.standard_rag.pipeline import IDENTIFY_RISKS_TOOL, RISK_ANALYSIS_SYSTEM_PROMPT

if TYPE_CHECKING:
    from src.tracing.collector import TraceCollector

logger = logging.getLogger(__name__)

_STEP = "agentic_rag"


class AgenticRAGOrchestrator:
    """Orkestrator for agentic RAG med plan-retrieve-reason-reflect flyt."""

    def __init__(
        self,
        settings: Settings,
        vector_store: VectorStoreManager,
        ablation_config: AblationConfig,
    ) -> None:
        self.settings = settings
        self.vector_store = vector_store
        self.ablation_config = ablation_config
        self.client = anthropic.Anthropic(api_key=settings.anthropic_api_key)
        self.planner = Planner(settings)
        self.reflector = Reflector(settings)

    def analyze(
        self,
        document_set_id: str,
        query: str,
        collector: TraceCollector | None = None,
    ) -> AnalysisResult:
        """Kjor komplett agentic RAG-analyse."""
        start_time = time.time()
        self._total_input_tokens = 0
        self._total_output_tokens = 0
        run_id = str(uuid.uuid4())
        logger.info(
            "Starter agentic analyse (run_id=%s, config=%s)",
            run_id,
            self.ablation_config.label(),
        )

        sub_queries = self._plan(query, document_set_id, collector)
        chunks = self._retrieve(sub_queries, document_set_id, collector)
        risks = self._reason(query, chunks, run_id, collector)

        if self.ablation_config.reflection_enabled:
            risks, chunks = self._reflect_loop(
                risks, chunks, query, document_set_id, run_id, collector=collector
            )

        if collector:
            collector.emit_step(_STEP, "done", "done")

        duration_s = round(time.time() - start_time, 2)

        return AnalysisResult(
            run_id=run_id,
            document_set_id=document_set_id,
            system_type=f"agentic_rag_{self.ablation_config.label()}",
            risks=risks,
            raw_llm_response="",
            timestamp=datetime.now(),
            config=self.ablation_config.model_dump(),
            duration_s=duration_s,
            input_tokens=self._total_input_tokens,
            output_tokens=self._total_output_tokens,
        )

    def _plan(
        self,
        query: str,
        document_set_id: str,
        collector: TraceCollector | None = None,
    ) -> list[SubQuery]:
        """Steg 1: Planlegg analyse med sub-queries."""
        if self.ablation_config.planning_enabled:
            if collector:
                collector.emit_step(_STEP, "planning", "running")

            system_prompt = self.planner._build_prompt()
            user_prompt = self.planner._build_user_prompt(query, [document_set_id])

            if collector:
                plan_response = collector.wrap_call(
                    "agentic_planning",
                    system_prompt,
                    user_prompt,
                    self.planner._call_claude,
                    system_prompt,
                    user_prompt,
                )
                self._total_input_tokens += plan_response.usage.input_tokens
                self._total_output_tokens += plan_response.usage.output_tokens
                plan = self.planner._parse_plan(plan_response)
            else:
                plan_response = self.planner._call_claude(
                    self.planner._build_prompt(),
                    self.planner._build_user_prompt(query, [document_set_id]),
                )
                self._total_input_tokens += plan_response.usage.input_tokens
                self._total_output_tokens += plan_response.usage.output_tokens
                plan = self.planner._parse_plan(plan_response)

            if collector:
                collector.emit_step(
                    _STEP,
                    "planning",
                    "done",
                    f"{len(plan.sub_queries)} delsporsmal",
                )
            logger.info("Plan opprettet med %d sub-queries", len(plan.sub_queries))
            return plan.sub_queries

        return [
            SubQuery(
                query=query,
                target_document_types=list(DocumentType),
                rationale="Direct query",
            )
        ]

    def _retrieve(
        self,
        sub_queries: list[SubQuery],
        document_set_id: str,
        collector: TraceCollector | None = None,
    ) -> list[DocumentChunk]:
        """Steg 2: Hent chunks basert pa sub-queries."""
        if collector:
            collector.emit_step(
                _STEP,
                "retrieving",
                "running",
                f"{len(sub_queries)} delsporsmal",
            )

        if self.ablation_config.tool_use_enabled:
            chunks = self._retrieve_with_tools(sub_queries, document_set_id)
        else:
            chunks = self._retrieve_flat(sub_queries, document_set_id)

        if collector:
            collector.emit_step(
                _STEP,
                "retrieving",
                "done",
                f"{len(chunks)} chunks hentet",
            )
        return chunks

    def _retrieve_with_tools(
        self, sub_queries: list[SubQuery], document_set_id: str
    ) -> list[DocumentChunk]:
        """Hent chunks med spesialiserte verktoy."""
        filtered_tool = FilteredRetrievalTool(self.vector_store, document_set_id)
        cross_ref_tool = CrossReferenceTool(self.vector_store, document_set_id)

        seen_ids: set[str] = set()
        all_chunks: list[DocumentChunk] = []

        for sq in sub_queries:
            chunks = self._select_and_execute_tool(sq, filtered_tool, cross_ref_tool)
            for chunk in chunks:
                if chunk.chunk_id not in seen_ids:
                    seen_ids.add(chunk.chunk_id)
                    all_chunks.append(chunk)

        logger.info("Tool-basert retrieval: %d unike chunks", len(all_chunks))
        return all_chunks

    def _select_and_execute_tool(
        self,
        sub_query: SubQuery,
        filtered_tool: FilteredRetrievalTool,
        cross_ref_tool: CrossReferenceTool,
    ) -> list[DocumentChunk]:
        """Velg og kjor riktig verktoy for en sub-query."""
        target_types = sub_query.target_document_types

        if len(target_types) > 1:
            return cross_ref_tool.execute(sub_query.query, {"doc_types": target_types})

        if len(target_types) == 1:
            return filtered_tool.execute(sub_query.query, {"doc_type": target_types[0]})

        return filtered_tool.execute(sub_query.query, {})

    def _retrieve_flat(
        self, sub_queries: list[SubQuery], document_set_id: str
    ) -> list[DocumentChunk]:
        """Flat retrieval uten spesialiserte verktoy."""
        seen_ids: set[str] = set()
        all_chunks: list[DocumentChunk] = []
        for sq in sub_queries:
            chunks = self.vector_store.retrieve(
                sq.query,
                document_set_id,
                top_k=self.settings.retrieval_top_k,
                min_score=self.settings.retrieval_min_score,
                min_results=self.settings.retrieval_min_results,
            )
            for chunk in chunks:
                if chunk.chunk_id not in seen_ids:
                    seen_ids.add(chunk.chunk_id)
                    all_chunks.append(chunk)
        logger.info("Flat retrieval: %d unike chunks", len(all_chunks))
        return all_chunks

    def _reason(
        self,
        query: str,
        chunks: list[DocumentChunk],
        run_id: str,
        collector: TraceCollector | None = None,
    ) -> list[IdentifiedRisk]:
        """Steg 3: Identifiser risikoer via Claude."""
        if collector:
            collector.emit_step(_STEP, "reasoning", "running")

        system_prompt = self._build_system_prompt()
        user_prompt = self._build_user_prompt(query, chunks)

        if collector:
            response = collector.wrap_call(
                "agentic_reasoning",
                system_prompt,
                user_prompt,
                self._call_claude,
                system_prompt,
                user_prompt,
            )
        else:
            response = self._call_claude(system_prompt, user_prompt)

        risks = self._parse_risks(response, run_id)

        if collector:
            collector.emit_step(
                _STEP,
                "reasoning",
                "done",
                f"{len(risks)} risikoer identifisert",
            )
        return risks

    def _build_system_prompt(self) -> str:
        """Bygg system prompt for risikoidentifikasjon."""
        return RISK_ANALYSIS_SYSTEM_PROMPT

    def _build_user_prompt(self, query: str, chunks: list[DocumentChunk]) -> str:
        """Bygg user prompt med query og chunks."""
        context_parts = []
        for chunk in chunks:
            header = f"[{chunk.document_id} | Side {chunk.page_numbers}]"
            if chunk.section:
                header += f" Seksjon: {chunk.section}"
            context_parts.append(f"{header}\n{chunk.text}")

        context = "\n\n---\n\n".join(context_parts)
        return f"Sporsmal: {query}\n\nKontekst fra dokumenter:\n\n{context}"

    def _call_claude(self, system_prompt: str, user_prompt: str) -> anthropic.types.Message:
        """Kall Claude API med identify_risks tool."""
        response = self.client.messages.create(
            model=self.settings.claude_model,
            max_tokens=16384,
            temperature=0.0,
            system=system_prompt,
            messages=[{"role": "user", "content": user_prompt}],
            tools=[IDENTIFY_RISKS_TOOL],
            tool_choice={"type": "tool", "name": "identify_risks"},
        )
        self._total_input_tokens += response.usage.input_tokens
        self._total_output_tokens += response.usage.output_tokens
        return response

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

    def _reflect_loop(
        self,
        risks: list[IdentifiedRisk],
        chunks: list[DocumentChunk],
        query: str,
        document_set_id: str,
        run_id: str,
        max_iterations: int = 1,
        collector: TraceCollector | None = None,
    ) -> tuple[list[IdentifiedRisk], list[DocumentChunk]]:
        """Steg 4: Kjor reflection-loop med maks iterasjoner."""
        for i in range(max_iterations):
            if collector:
                collector.emit_step(
                    _STEP,
                    "reflecting",
                    "running",
                    f"Iterasjon {i + 1}/{max_iterations}",
                    iteration=i + 1,
                )

            # Bygg prompts og wrap kallet for tracing
            system_prompt = self.reflector._build_prompt()
            user_prompt = self.reflector._build_user_prompt(risks, chunks, query)

            if collector:
                reflect_response = collector.wrap_call(
                    f"agentic_reflecting_iter{i + 1}",
                    system_prompt,
                    user_prompt,
                    self.reflector._call_claude,
                    system_prompt,
                    user_prompt,
                )
                self._total_input_tokens += reflect_response.usage.input_tokens
                self._total_output_tokens += reflect_response.usage.output_tokens
                result = self.reflector._parse_reflection(reflect_response)
            else:
                reflect_response = self.reflector._call_claude(system_prompt, user_prompt)
                self._total_input_tokens += reflect_response.usage.input_tokens
                self._total_output_tokens += reflect_response.usage.output_tokens
                result = self.reflector._parse_reflection(reflect_response)

            risks = result.validated_risks

            if not result.re_retrieval_queries:
                if collector:
                    collector.emit_step(
                        _STEP,
                        "reflecting",
                        "done",
                        f"Ferdig etter {i + 1} iterasjoner",
                        iteration=i + 1,
                    )
                logger.info("Reflection ferdig etter %d iterasjoner", i + 1)
                break

            # Re-retrieval trengs
            if collector:
                collector.emit_step(
                    _STEP,
                    "re_retrieving",
                    "running",
                    f"{len(result.re_retrieval_queries)} nye sporsmal",
                    iteration=i + 1,
                )

            new_sub_queries = [
                SubQuery(
                    query=q,
                    target_document_types=list(DocumentType),
                    rationale="Re-retrieval fra refleksjon",
                )
                for q in result.re_retrieval_queries
            ]
            new_chunks = self._retrieve(new_sub_queries, document_set_id)
            chunks = chunks + new_chunks

            if collector:
                collector.emit_step(
                    _STEP,
                    "re_retrieving",
                    "done",
                    f"{len(new_chunks)} nye chunks",
                    iteration=i + 1,
                )
                collector.emit_step(
                    _STEP,
                    "re_reasoning",
                    "running",
                    f"Re-analyse med {len(chunks)} chunks",
                    iteration=i + 1,
                )

            risks = self._reason(query, chunks, run_id)

            if collector:
                collector.emit_step(
                    _STEP,
                    "re_reasoning",
                    "done",
                    f"{len(risks)} risikoer",
                    iteration=i + 1,
                )
        else:
            # Loop ran all iterations
            if collector:
                collector.emit_step(
                    _STEP,
                    "reflecting",
                    "done",
                    f"Maks iterasjoner ({max_iterations}) nadd",
                )

        return risks, chunks
