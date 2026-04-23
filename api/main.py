"""FastAPI-applikasjon for Agentic RAG eiendomsanalyse."""

import logging
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from api.routers import ablation, analysis, categorization, documents, experiments
from src.config import get_settings
from src.document_processing.pipeline import DocumentProcessingPipeline
from src.retrieval.embeddings import VoyageAIEmbeddings
from src.retrieval.vector_store import VectorStoreManager
from src.standard_rag.pipeline import StandardRAGPipeline

logger = logging.getLogger(__name__)


@asynccontextmanager
async def lifespan(app: FastAPI) -> AsyncGenerator[None]:
    """Oppstart og nedstengning av applikasjonsressurser."""
    settings = get_settings()

    embedding_provider = VoyageAIEmbeddings(
        api_key=settings.voyage_api_key,
        model=settings.voyage_model,
    )
    vector_store = VectorStoreManager(
        embedding_provider,
        persist_dir=settings.chroma_persist_dir,
    )
    processing_pipeline = DocumentProcessingPipeline(settings)
    standard_pipeline = StandardRAGPipeline(settings, vector_store)

    app.state.settings = settings
    app.state.vector_store = vector_store
    app.state.processing_pipeline = processing_pipeline
    app.state.standard_pipeline = standard_pipeline

    logger.info("Application startup complete")
    yield
    logger.info("Application shutdown")


app = FastAPI(
    title="Agentic RAG Real Estate API",
    version="0.1.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(documents.router, prefix="/api")
app.include_router(analysis.router, prefix="/api")
app.include_router(experiments.router, prefix="/api")
app.include_router(categorization.router, prefix="/api")
app.include_router(ablation.router, prefix="/api")


@app.get("/health")
async def health_check() -> dict[str, str]:
    """Returner helsestatus for applikasjonen."""
    return {"status": "ok"}
