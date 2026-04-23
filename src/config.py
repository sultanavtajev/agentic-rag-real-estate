from functools import lru_cache
from pathlib import Path

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """Sentral konfigurasjon for Agentic RAG-prosjektet."""

    anthropic_api_key: str
    voyage_api_key: str
    claude_model: str = "claude-sonnet-4-6"
    voyage_model: str = "voyage-3-large"
    chroma_persist_dir: Path = Path("./data/chroma_db")
    chunk_size: int = 512
    chunk_overlap: int = 64
    retrieval_top_k: int = 20
    retrieval_min_score: float = 0.3
    retrieval_min_results: int = 3
    log_level: str = "INFO"

    model_config = {"env_file": ".env", "env_file_encoding": "utf-8"}


@lru_cache
def get_settings() -> Settings:
    """Returner singleton Settings-instans."""
    return Settings()
