"""Tester for standard RAG-pipeline."""

import os
from unittest.mock import MagicMock

import pytest
from dotenv import load_dotenv

from src.models.schemas import (
    AnalysisResult,
    DocumentChunk,
    DocumentType,
    IdentifiedRisk,
)
from src.standard_rag.pipeline import IDENTIFY_RISKS_TOOL, StandardRAGPipeline

load_dotenv()
ANTHROPIC_API_KEY = os.getenv("ANTHROPIC_API_KEY")


def make_mock_response(risks_data):
    """Lag mock anthropic Message med tool_use blokk."""
    tool_block = MagicMock()
    tool_block.type = "tool_use"
    tool_block.name = "identify_risks"
    tool_block.input = {"risks": risks_data}

    response = MagicMock()
    response.content = [tool_block]
    return response


class FakeVectorStore:
    def retrieve(self, query, collection_name, top_k=10):
        return [
            DocumentChunk(
                chunk_id="test_chunk_001",
                document_id="test_doc",
                document_type=DocumentType.salgsoppgave,
                text="Bad: TG3. Fuktskade bak fliser i dusjsone. Anbefalt utbedring.",
                page_numbers=[12],
                section="Bad",
            ),
            DocumentChunk(
                chunk_id="test_chunk_002",
                document_id="test_doc",
                document_type=DocumentType.salgsoppgave,
                text="Tak: TG1. Taktekkingen er i god stand. Ingen synlige skader.",
                page_numbers=[5],
                section="Tak",
            ),
        ]


# --- Unit tests (ingen API-kall) ---


def test_identify_risks_tool_schema_valid():
    """Verifiser at IDENTIFY_RISKS_TOOL er en gyldig dict med name, description, input_schema."""
    assert isinstance(IDENTIFY_RISKS_TOOL, dict)
    assert "name" in IDENTIFY_RISKS_TOOL
    assert "description" in IDENTIFY_RISKS_TOOL
    assert "input_schema" in IDENTIFY_RISKS_TOOL
    assert IDENTIFY_RISKS_TOOL["name"] == "identify_risks"
    assert isinstance(IDENTIFY_RISKS_TOOL["description"], str)

    schema = IDENTIFY_RISKS_TOOL["input_schema"]
    assert schema["type"] == "object"
    assert "risks" in schema["properties"]
    assert "risks" in schema["required"]


def test_build_system_prompt_contains_key_instructions(env_vars):
    """Sjekk at system prompt inneholder noekkelbegreper."""
    pipeline = StandardRAGPipeline(
        settings=_make_settings(),
        vector_store=FakeVectorStore(),
    )
    prompt = pipeline._build_system_prompt()
    assert "risikoer" in prompt
    assert "confidence" in prompt


def test_build_user_prompt_includes_query_and_chunks(env_vars):
    """Bygg user prompt med testdata, verifiser at query og chunk-tekst er inkludert."""
    pipeline = StandardRAGPipeline(
        settings=_make_settings(),
        vector_store=FakeVectorStore(),
    )
    chunks = FakeVectorStore().retrieve("test", "test")
    prompt = pipeline._build_user_prompt("Finn risikoer", chunks)
    assert "Finn risikoer" in prompt
    assert "Fuktskade bak fliser" in prompt
    assert "Taktekkingen er i god stand" in prompt


def test_build_user_prompt_includes_section_info(env_vars):
    """Chunks med section -> section vises i prompt."""
    pipeline = StandardRAGPipeline(
        settings=_make_settings(),
        vector_store=FakeVectorStore(),
    )
    chunks = FakeVectorStore().retrieve("test", "test")
    prompt = pipeline._build_user_prompt("test", chunks)
    assert "Seksjon: Bad" in prompt
    assert "Seksjon: Tak" in prompt


def test_parse_risks_from_mock_response(env_vars):
    """Verifiser at _parse_risks returnerer IdentifiedRisk-liste fra mock response."""
    pipeline = StandardRAGPipeline(
        settings=_make_settings(),
        vector_store=FakeVectorStore(),
    )
    risks_data = [
        {
            "description": "Fuktskade i bad",
            "evidence": ["TG3 bak fliser"],
            "source_documents": ["test_doc"],
            "source_pages": [12],
            "confidence": 0.9,
        }
    ]
    response = make_mock_response(risks_data)
    risks = pipeline._parse_risks(response, "test_run_001")
    assert len(risks) == 1
    assert isinstance(risks[0], IdentifiedRisk)
    assert risks[0].confidence == 0.9


def test_parse_risks_empty_response(env_vars):
    """Respons uten risikoer -> tom liste."""
    pipeline = StandardRAGPipeline(
        settings=_make_settings(),
        vector_store=FakeVectorStore(),
    )
    response = make_mock_response([])
    risks = pipeline._parse_risks(response, "test_run_empty")
    assert risks == []


def test_parse_risks_generates_unique_ids(env_vars):
    """Verifiser at risk_id er unik per risiko."""
    pipeline = StandardRAGPipeline(
        settings=_make_settings(),
        vector_store=FakeVectorStore(),
    )
    risks_data = [
        {
            "description": "Fuktskade i bad",
            "evidence": ["TG3"],
            "source_documents": ["doc1"],
            "source_pages": [12],
            "confidence": 0.9,
        },
        {
            "description": "Avvik i P-ROM",
            "evidence": ["P-ROM avvik"],
            "source_documents": ["doc2"],
            "source_pages": [3],
            "confidence": 0.7,
        },
    ]
    response = make_mock_response(risks_data)
    risks = pipeline._parse_risks(response, "test_run_ids")
    ids = [r.risk_id for r in risks]
    assert len(ids) == len(set(ids))


# --- Integrasjonstest med ekte API-kall ---


@pytest.mark.skipif(not ANTHROPIC_API_KEY, reason="ANTHROPIC_API_KEY mangler")
def test_standard_rag_analyze_with_real_api():
    """Kjor analyze() med ekte API-kall og verifiser AnalysisResult."""
    from src.config import Settings

    settings = Settings(
        anthropic_api_key=ANTHROPIC_API_KEY,
        voyage_api_key="not-needed",
    )
    pipeline = StandardRAGPipeline(settings=settings, vector_store=FakeVectorStore())
    result = pipeline.analyze("test_set", "Identifiser risikoer i dokumentene")

    assert isinstance(result, AnalysisResult)
    assert result.system_type == "standard_rag"
    assert result.document_set_id == "test_set"
    assert isinstance(result.risks, list)
    assert len(result.risks) > 0
    for risk in result.risks:
        assert isinstance(risk, IdentifiedRisk)


# --- Hjelpefunksjon ---


def _make_settings():
    """Lag Settings med test-verdier (krever env_vars fixture)."""
    from src.config import Settings

    return Settings()
