import pytest

from src.config import get_settings


@pytest.fixture(autouse=True)
def _clear_settings_cache():
    """Clear the lru_cache on get_settings before each test."""
    get_settings.cache_clear()
    yield
    get_settings.cache_clear()


@pytest.fixture()
def env_vars(monkeypatch):
    """Set required environment variables for Settings instantiation."""
    monkeypatch.setenv("ANTHROPIC_API_KEY", "test-anthropic-key")
    monkeypatch.setenv("VOYAGE_API_KEY", "test-voyage-key")
