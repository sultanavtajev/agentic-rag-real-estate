from pathlib import Path

from src.config import Settings, get_settings


def test_settings_instantiation_with_env_vars(env_vars):
    settings = Settings()
    assert settings.anthropic_api_key == "test-anthropic-key"
    assert settings.voyage_api_key == "test-voyage-key"


def test_get_settings_returns_singleton(env_vars):
    s1 = get_settings()
    s2 = get_settings()
    assert s1 is s2


def test_settings_default_values(env_vars):
    settings = Settings()
    assert settings.claude_model == "claude-sonnet-4-6"
    assert settings.voyage_model == "voyage-3-large"
    assert settings.chunk_size == 512
    assert settings.chunk_overlap == 64
    assert settings.retrieval_top_k == 20
    assert settings.retrieval_min_score == 0.3
    assert settings.retrieval_min_results == 3
    assert settings.log_level == "INFO"


def test_settings_chroma_persist_dir_is_path(env_vars):
    settings = Settings()
    assert isinstance(settings.chroma_persist_dir, Path)
