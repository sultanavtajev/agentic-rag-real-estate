"""Tester for FastAPI API-endepunkter."""

import json
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager
from unittest.mock import MagicMock

import pytest
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.testclient import TestClient

from api.routers import analysis, documents, experiments


@asynccontextmanager
async def _noop_lifespan(app: FastAPI) -> AsyncGenerator[None]:
    """Lifespan som ikkje krev ekte API-noeklar."""
    yield


def _create_test_app() -> FastAPI:
    """Opprett ein FastAPI-app utan ekte lifespan."""
    test_app = FastAPI(title="Test App", lifespan=_noop_lifespan)
    test_app.add_middleware(
        CORSMiddleware,
        allow_origins=["http://localhost:3000"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )
    test_app.include_router(documents.router, prefix="/api")
    test_app.include_router(analysis.router, prefix="/api")
    test_app.include_router(experiments.router, prefix="/api")

    @test_app.get("/health")
    async def health_check() -> dict[str, str]:
        return {"status": "ok"}

    return test_app


@pytest.fixture()
def client(tmp_path):
    """TestClient med mock app.state — unngaar ekte API-kall."""
    test_app = _create_test_app()

    mock_settings = MagicMock()
    mock_settings.chroma_persist_dir = tmp_path / "chroma"
    test_app.state.settings = mock_settings

    mock_vs = MagicMock()
    mock_vs.index_chunks = MagicMock()
    test_app.state.vector_store = mock_vs

    mock_pipeline = MagicMock()
    mock_pipeline.process_document = MagicMock(return_value=[])
    test_app.state.processing_pipeline = mock_pipeline

    mock_standard = MagicMock()
    test_app.state.standard_pipeline = mock_standard

    with TestClient(test_app, raise_server_exceptions=False) as c:
        yield c


def test_health_check_returns_ok(client):
    """GET /health returnerer 200 med status ok."""
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}


def test_cors_headers_for_localhost(client):
    """CORS headers tillater localhost:3000."""
    response = client.options(
        "/health",
        headers={
            "Origin": "http://localhost:3000",
            "Access-Control-Request-Method": "GET",
        },
    )
    assert response.headers.get("access-control-allow-origin") == "http://localhost:3000"


def test_upload_documents_success(client, tmp_path, monkeypatch):
    """POST /api/documents/upload lagrer filer og returnerer riktig respons."""
    monkeypatch.setattr("api.routers.documents.RAW_DIR", tmp_path / "raw")

    response = client.post(
        "/api/documents/upload",
        data={"document_set_id": "test-set"},
        files=[("files", ("rapport.pdf", b"%PDF-fake-content", "application/pdf"))],
    )
    assert response.status_code == 200
    body = response.json()
    assert body["document_set_id"] == "test-set"
    assert body["files_uploaded"] == 1
    assert (tmp_path / "raw" / "test-set" / "rapport.pdf").exists()


def test_upload_documents_no_files_returns_422(client):
    """POST /api/documents/upload uten filer gir 422."""
    response = client.post(
        "/api/documents/upload",
        data={"document_set_id": "test-set"},
    )
    assert response.status_code == 422


def test_list_document_sets_returns_sets(client, tmp_path, monkeypatch):
    """GET /api/documents returnerer dokumentsett fra data/raw/."""
    raw_dir = tmp_path / "raw"
    set_dir = raw_dir / "eiendom-1"
    set_dir.mkdir(parents=True)
    (set_dir / "doc.pdf").write_bytes(b"fake")

    monkeypatch.setattr("api.routers.documents.RAW_DIR", raw_dir)
    monkeypatch.setattr("api.routers.documents._check_collection_exists", lambda _name: False)

    response = client.get("/api/documents")
    assert response.status_code == 200
    body = response.json()
    assert len(body) == 1
    assert body[0]["set_id"] == "eiendom-1"
    assert body[0]["file_count"] == 1
    assert body[0]["processed"] is False


def test_list_document_sets_empty(client, tmp_path, monkeypatch):
    """GET /api/documents returnerer tom liste naar raw dir ikke finnes."""
    monkeypatch.setattr("api.routers.documents.RAW_DIR", tmp_path / "nonexistent")
    response = client.get("/api/documents")
    assert response.status_code == 200
    assert response.json() == []


def _make_analysis_result(run_id="run-1", system_type="standard"):
    """Hjelpefunksjon for aa lage et gyldig AnalysisResult JSON."""
    return {
        "run_id": run_id,
        "document_set_id": "test-set",
        "system_type": system_type,
        "risks": [],
        "raw_llm_response": "test response",
        "timestamp": "2025-01-01T00:00:00",
        "config": {},
    }


def test_get_analysis_result_success(client, tmp_path, monkeypatch):
    """GET /api/analysis/results/{run_id} returnerer lagret resultat."""
    results_dir = tmp_path / "results"
    results_dir.mkdir()
    result_data = _make_analysis_result("run-abc")
    (results_dir / "run-abc.json").write_text(json.dumps(result_data), encoding="utf-8")

    monkeypatch.setattr("api.routers.analysis.RESULTS_DIR", results_dir)

    response = client.get("/api/analysis/results/run-abc")
    assert response.status_code == 200
    assert response.json()["run_id"] == "run-abc"


def test_get_analysis_result_not_found(client, tmp_path, monkeypatch):
    """GET /api/analysis/results/{run_id} returnerer 404 for ukjent run_id."""
    monkeypatch.setattr("api.routers.analysis.RESULTS_DIR", tmp_path / "results")

    response = client.get("/api/analysis/results/nonexistent")
    assert response.status_code == 404


def test_list_analysis_results(client, tmp_path, monkeypatch):
    """GET /api/analysis/results returnerer liste med oppsummeringer."""
    results_dir = tmp_path / "results"
    results_dir.mkdir()
    for i in range(3):
        data = _make_analysis_result(f"run-{i}")
        (results_dir / f"run-{i}.json").write_text(json.dumps(data), encoding="utf-8")

    monkeypatch.setattr("api.routers.analysis.RESULTS_DIR", results_dir)

    response = client.get("/api/analysis/results")
    assert response.status_code == 200
    body = response.json()
    assert len(body) == 3
    assert all("run_id" in item for item in body)


def test_list_analysis_results_empty(client, tmp_path, monkeypatch):
    """GET /api/analysis/results returnerer tom liste naar ingen resultater finnes."""
    monkeypatch.setattr("api.routers.analysis.RESULTS_DIR", tmp_path / "empty")

    response = client.get("/api/analysis/results")
    assert response.status_code == 200
    assert response.json() == []


def test_compare_experiments_not_found(client, tmp_path, monkeypatch):
    """POST /api/experiments/compare med ukjente run_ids gir 404."""
    monkeypatch.setattr("api.routers._experiments_helpers.RESULTS_DIR", tmp_path / "results")

    response = client.post(
        "/api/experiments/compare",
        json={"run_ids": ["nonexistent-1", "nonexistent-2"]},
    )
    assert response.status_code == 404


def test_list_experiment_results_empty(client, tmp_path, monkeypatch):
    """GET /api/experiments/results returnerer tom liste naar ingen rapporter finnes."""
    monkeypatch.setattr("api.routers.experiments.REPORTS_DIR", tmp_path / "reports")

    response = client.get("/api/experiments/results")
    assert response.status_code == 200
    assert response.json() == []
