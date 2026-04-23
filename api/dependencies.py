"""Dependency injection for FastAPI-endepunkter."""

from fastapi import Request

from src.agentic_rag.config import FULL_AGENTIC, AblationConfig
from src.agentic_rag.orchestrator import AgenticRAGOrchestrator
from src.config import Settings
from src.document_processing.pipeline import DocumentProcessingPipeline
from src.retrieval.vector_store import VectorStoreManager
from src.standard_rag.pipeline import StandardRAGPipeline


def get_settings(request: Request) -> Settings:
    """Hent Settings-instans fra app state."""
    return request.app.state.settings


def get_vector_store(request: Request) -> VectorStoreManager:
    """Hent VectorStoreManager-instans fra app state."""
    return request.app.state.vector_store


def get_processing_pipeline(request: Request) -> DocumentProcessingPipeline:
    """Hent DocumentProcessingPipeline-instans fra app state."""
    return request.app.state.processing_pipeline


def get_standard_pipeline(request: Request) -> StandardRAGPipeline:
    """Hent StandardRAGPipeline-instans fra app state."""
    return request.app.state.standard_pipeline


def get_agentic_pipeline(
    request: Request,
    ablation_config: AblationConfig = FULL_AGENTIC,
) -> AgenticRAGOrchestrator:
    """Opprett AgenticRAGOrchestrator med gitt ablasjonskonfigurasjon.

    Args:
        request: FastAPI request med tilgang til app state.
        ablation_config: Konfigurasjon for ablasjonsstudie.

    Returns:
        Ny AgenticRAGOrchestrator-instans.
    """
    return AgenticRAGOrchestrator(
        settings=request.app.state.settings,
        vector_store=request.app.state.vector_store,
        ablation_config=ablation_config,
    )
