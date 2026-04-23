"""Tester for agentic RAG-modulen: config, tools, planner, reflector, orchestrator."""

import os
from unittest.mock import MagicMock, patch

import pytest
from dotenv import load_dotenv

from src.agentic_rag.components.planner import AnalysisPlan, Planner, SubQuery
from src.agentic_rag.components.reflector import ReflectionResult, Reflector
from src.agentic_rag.config import (
    FULL_AGENTIC,
    NO_PLANNING,
    NO_REFLECTION,
    NO_TOOL_USE,
    NONE_AGENTIC,
)
from src.agentic_rag.orchestrator import AgenticRAGOrchestrator
from src.agentic_rag.tools.cross_reference import CrossReferenceTool
from src.agentic_rag.tools.filtered_retrieval import FilteredRetrievalTool
from src.models.schemas import DocumentChunk, DocumentType

load_dotenv()
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")


# --- Helpers ---


def make_chunk(chunk_id, text, doc_type=DocumentType.salgsoppgave):
    return DocumentChunk(
        chunk_id=chunk_id,
        document_id="test_doc",
        document_type=doc_type,
        text=text,
        page_numbers=[1],
    )


class FakeVectorStore:
    """Fake VectorStoreManager for testing uten ekte vektorlager."""

    def retrieve(self, query, collection_name, top_k=10):
        return [
            make_chunk("chunk_001", "Bad: TG3. Fuktskade."),
            make_chunk("chunk_002", "Tak: TG1. OK."),
        ]

    def retrieve_by_document_type(self, query, collection_name, doc_type, top_k=10):
        return [
            make_chunk("chunk_001", "Filtrert chunk", doc_type=doc_type),
        ]


# --- AblationConfig tester ---


def test_ablation_config_full_label():
    assert FULL_AGENTIC.label() == "P+T+R"


def test_ablation_config_none_label():
    assert NONE_AGENTIC.label() == "NONE"


def test_ablation_config_partial_labels():
    assert NO_PLANNING.label() == "T+R"
    assert NO_TOOL_USE.label() == "P+R"
    assert NO_REFLECTION.label() == "P+T"


def test_ablation_config_predefined_count():
    predefined = [FULL_AGENTIC, NO_PLANNING, NO_TOOL_USE, NO_REFLECTION, NONE_AGENTIC]
    assert len(predefined) == 5


# --- Tools tester ---


def test_filtered_retrieval_tool_execute():
    store = FakeVectorStore()
    tool = FilteredRetrievalTool(store, "test_col")
    result = tool.execute("fuktskade", {"doc_type": DocumentType.salgsoppgave})
    assert len(result) >= 1
    assert all(isinstance(c, DocumentChunk) for c in result)
    assert result[0].document_type == DocumentType.salgsoppgave


def test_cross_reference_tool_execute():
    store = FakeVectorStore()
    tool = CrossReferenceTool(store, "test_col")
    doc_types = [DocumentType.salgsoppgave]
    result = tool.execute("areal", {"doc_types": doc_types})
    assert len(result) >= 1
    assert all(isinstance(c, DocumentChunk) for c in result)


# --- Planner tester ---


def _make_mock_claude_plan_response():
    """Lag mock Claude-respons med create_plan tool_use."""
    block = MagicMock()
    block.type = "tool_use"
    block.name = "create_plan"
    block.input = {
        "sub_queries": [
            {
                "query": "Fuktskader i bad",
                "target_document_types": ["salgsoppgave"],
                "rationale": "Sjekk salgsoppgave for fukt",
            },
            {
                "query": "Arealoppgave",
                "target_document_types": ["salgsoppgave"],
                "rationale": "Sjekk areal i salgsoppgave",
            },
        ],
        "strategy": "Analyser tilstand og areal",
    }
    response = MagicMock()
    response.content = [block]
    return response


def test_planner_plan_returns_analysis_plan():
    mock_response = _make_mock_claude_plan_response()
    with patch("src.agentic_rag.components.planner.anthropic.Anthropic") as mock_cls:
        mock_client = MagicMock()
        mock_client.messages.create.return_value = mock_response
        mock_cls.return_value = mock_client

        settings = MagicMock()
        settings.anthropic_api_key = "fake-key"
        settings.claude_model = "claude-sonnet-4-6"

        planner = Planner(settings)
        plan = planner.plan("Analyser bolig", ["doc_set_1"])

    assert isinstance(plan, AnalysisPlan)
    assert len(plan.sub_queries) == 2
    assert plan.sub_queries[0].query == "Fuktskader i bad"
    assert plan.strategy == "Analyser tilstand og areal"


def test_sub_query_model_fields():
    sq = SubQuery(
        query="test query",
        target_document_types=[DocumentType.salgsoppgave],
        rationale="test rationale",
    )
    assert sq.query == "test query"
    assert sq.target_document_types == [DocumentType.salgsoppgave]
    assert sq.rationale == "test rationale"


# --- Reflector tester ---


def _make_mock_claude_reflection_response():
    """Lag mock Claude-respons med validate_risks tool_use."""
    block = MagicMock()
    block.type = "tool_use"
    block.name = "validate_risks"
    block.input = {
        "validated_risks": [
            {
                "risk_id": "risk_001",
                "description": "Fuktskade i bad",
                "evidence": ["TG3 pa bad"],
                "source_documents": ["test_doc"],
                "source_pages": [1],
                "confidence": 0.9,
            },
        ],
        "re_retrieval_queries": ["Sjekk tak for fukt"],
        "reasoning": "Fuktskade er godt dokumentert",
    }
    response = MagicMock()
    response.content = [block]
    return response


def test_reflector_reflect_returns_reflection_result():
    mock_response = _make_mock_claude_reflection_response()
    with patch("src.agentic_rag.components.reflector.anthropic.Anthropic") as mock_cls:
        mock_client = MagicMock()
        mock_client.messages.create.return_value = mock_response
        mock_cls.return_value = mock_client

        settings = MagicMock()
        settings.anthropic_api_key = "fake-key"
        settings.claude_model = "claude-sonnet-4-6"

        reflector = Reflector(settings)
        result = reflector.reflect([], [], "Analyser bolig")

    assert isinstance(result, ReflectionResult)
    assert len(result.validated_risks) == 1
    assert result.validated_risks[0].risk_id == "risk_001"
    assert result.re_retrieval_queries == ["Sjekk tak for fukt"]
    assert result.reasoning == "Fuktskade er godt dokumentert"


def test_reflection_result_model_fields():
    from src.models.schemas import IdentifiedRisk

    risk = IdentifiedRisk(
        risk_id="r1",
        description="Test",
        evidence=["e1"],
        source_documents=["d1"],
        source_pages=[1],
        confidence=0.8,
    )
    result = ReflectionResult(
        validated_risks=[risk],
        re_retrieval_queries=["q1"],
        reasoning="OK",
    )
    assert hasattr(result, "validated_risks")
    assert hasattr(result, "re_retrieval_queries")
    assert hasattr(result, "reasoning")
    assert len(result.validated_risks) == 1


# --- Orchestrator tester ---


def test_orchestrator_init_with_ablation_config():
    store = FakeVectorStore()
    settings = MagicMock()
    settings.anthropic_api_key = "fake-key"
    settings.claude_model = "claude-sonnet-4-6"

    for config in [FULL_AGENTIC, NO_PLANNING, NO_TOOL_USE, NO_REFLECTION, NONE_AGENTIC]:
        orch = AgenticRAGOrchestrator(settings, store, config)
        assert orch.ablation_config == config


def test_orchestrator_none_config_uses_flat_retrieval():
    store = FakeVectorStore()
    settings = MagicMock()
    settings.anthropic_api_key = "fake-key"
    settings.claude_model = "claude-sonnet-4-6"

    orch = AgenticRAGOrchestrator(settings, store, NONE_AGENTIC)
    assert not orch.ablation_config.planning_enabled
    assert not orch.ablation_config.tool_use_enabled
    assert not orch.ablation_config.reflection_enabled


# --- Integrasjonstest ---


@pytest.mark.skipif(not ANTHROPIC_API_KEY, reason="ANTHROPIC_API_KEY not set")
def test_orchestrator_analyze_with_real_api():
    from src.config import Settings

    settings = Settings(
        anthropic_api_key=ANTHROPIC_API_KEY,
        voyage_api_key=os.getenv("VOYAGE_API_KEY", "dummy"),
    )
    store = FakeVectorStore()
    orch = AgenticRAGOrchestrator(settings, store, FULL_AGENTIC)
    result = orch.analyze("test_doc_set", "Analyser tilstanden til boligen")

    assert result.run_id
    assert result.document_set_id == "test_doc_set"
    assert "agentic_rag" in result.system_type
    assert isinstance(result.risks, list)
