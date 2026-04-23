"""Tester for evaluate-comparison, evaluate-single, og ground truth-endepunkter."""

import json
from collections.abc import AsyncGenerator
from contextlib import asynccontextmanager
from unittest.mock import MagicMock

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from api.routers import _experiments_helpers, experiments


@asynccontextmanager
async def _noop_lifespan(app: FastAPI) -> AsyncGenerator[None]:
    yield


def _create_test_app() -> FastAPI:
    test_app = FastAPI(title="Test Evaluate", lifespan=_noop_lifespan)
    test_app.include_router(experiments.router, prefix="/api")
    return test_app


@pytest.fixture()
def client(tmp_path):
    test_app = _create_test_app()
    test_app.state.settings = MagicMock()
    test_app.state.vector_store = MagicMock()

    with TestClient(test_app, raise_server_exceptions=False) as c:
        yield c


def _make_analysis_result(
    run_id="run-1",
    system_type="standard",
    risks=None,
):
    """Lag et gyldig AnalysisResult JSON-objekt."""
    if risks is None:
        risks = []
    return {
        "run_id": run_id,
        "document_set_id": "test-set",
        "system_type": system_type,
        "risks": risks,
        "raw_llm_response": "test response",
        "timestamp": "2025-01-01T00:00:00",
        "config": {},
    }


def _make_risk(
    risk_id="r1",
    description="Fuktig kjeller med synlig mugg",
    evidence=None,
):
    """Lag et gyldig IdentifiedRisk JSON-objekt."""
    return {
        "risk_id": risk_id,
        "description": description,
        "evidence": evidence or ["Fukt observert i kjeller"],
        "source_documents": ["doc-1"],
        "source_pages": [1],
        "confidence": 0.8,
        "details": {},
    }


def _make_ground_truth(risks=None):
    """Lag et gyldig GroundTruthAnnotation JSON-objekt."""
    if risks is None:
        risks = []
    return {
        "document_set_id": "test-set",
        "annotator": "tester",
        "annotation_date": "2025-01-01",
        "documents_reviewed": [
            {
                "document_id": "doc-1",
                "document_type": "salgsoppgave",
                "filename": "salgsoppgave.pdf",
            }
        ],
        "risks": risks,
        "notes": "Test ground truth",
    }


def _make_gt_risk(
    risk_id="gt-r1",
    description="Fuktig kjeller med synlig mugg",
    evidence=None,
):
    """Lag et gyldig GroundTruthRisk JSON-objekt."""
    return {
        "risk_id": risk_id,
        "description": description,
        "evidence": evidence or ["Fukt observert i kjeller"],
        "source_documents": ["doc-1"],
        "source_pages": [1],
        "details": {},
    }


def _setup_results(tmp_path, monkeypatch, results_data):
    """Skriv analyseresultater til tmp_path og monkeypatch RESULTS_DIR."""
    results_dir = tmp_path / "results"
    results_dir.mkdir(parents=True, exist_ok=True)
    for data in results_data:
        path = results_dir / f"{data['run_id']}.json"
        path.write_text(json.dumps(data), encoding="utf-8")
    monkeypatch.setattr(_experiments_helpers, "RESULTS_DIR", results_dir)
    return results_dir


def _setup_eval_history(tmp_path, monkeypatch):
    """Monkeypatch EVAL_HISTORY_DIR til tmp_path."""
    eval_dir = tmp_path / "eval_history"
    eval_dir.mkdir(parents=True, exist_ok=True)
    monkeypatch.setattr(_experiments_helpers, "EVAL_HISTORY_DIR", eval_dir)
    return eval_dir


# --- evaluate-comparison utan GT ---


def test_evaluate_comparison_without_gt(client, tmp_path, monkeypatch):
    """Evaluate-comparison utan ground truth returnerer risk summaries og overlap."""
    _setup_eval_history(tmp_path, monkeypatch)
    risk_a = _make_risk("r1", "Fuktig kjeller med mugg")
    risk_b = _make_risk("r2", "Fuktig kjeller med mugg og sopp")
    risk_c = _make_risk("r3", "Areal avvik paa 5 kvm")

    results = [
        _make_analysis_result("run-std", "standard", risks=[risk_a, risk_c]),
        _make_analysis_result("run-agent", "agentic", risks=[risk_b]),
    ]
    _setup_results(tmp_path, monkeypatch, results)

    response = client.post(
        "/api/experiments/evaluate-comparison",
        json={"run_ids": ["run-std", "run-agent"]},
    )
    assert response.status_code == 200
    body = response.json()

    assert body["has_ground_truth"] is False
    assert len(body["risk_summaries"]) == 2
    assert body["risk_summaries"][0]["system_type"] == "standard"
    assert body["risk_summaries"][0]["total_risks"] == 2
    assert body["risk_summaries"][1]["system_type"] == "agentic"
    assert body["risk_summaries"][1]["total_risks"] == 1

    # Overlap: risk_a og risk_b overlapper (similar text)
    assert body["overlapping_risk_count"] >= 1
    assert "standard" in body["unique_to"]
    assert "agentic" in body["unique_to"]


# --- evaluate-comparison med GT ---


def test_evaluate_comparison_with_gt(client, tmp_path, monkeypatch):
    """Evaluate-comparison med ground truth returnerer metrikker og p-verdi."""
    _setup_eval_history(tmp_path, monkeypatch)
    risk_std = _make_risk("r1", "Fuktig kjeller med mugg")
    risk_agent = _make_risk("r2", "Fuktig kjeller med mugg")

    results = [
        _make_analysis_result("run-std", "standard", risks=[risk_std]),
        _make_analysis_result("run-agent", "agentic", risks=[risk_agent]),
    ]
    _setup_results(tmp_path, monkeypatch, results)

    gt_risk = _make_gt_risk("gt-1", "Fuktig kjeller med mugg")
    gt_data = _make_ground_truth(risks=[gt_risk])
    gt_path = tmp_path / "gt.json"
    gt_path.write_text(json.dumps(gt_data), encoding="utf-8")

    response = client.post(
        "/api/experiments/evaluate-comparison",
        json={
            "run_ids": ["run-std", "run-agent"],
            "ground_truth_path": str(gt_path),
        },
    )
    assert response.status_code == 200
    body = response.json()

    assert body["has_ground_truth"] is True
    assert len(body["risk_summaries"]) == 2
    assert body["best_system"] in ("standard", "agentic")

    # Skal ha system_results med metrikker
    assert "standard" in body["system_results"]
    assert "agentic" in body["system_results"]

    # Skal ha statistical_tests (p-verdi)
    assert len(body["statistical_tests"]) >= 1


# --- GT upload og status ---


def test_ground_truth_status_not_found(client, tmp_path, monkeypatch):
    """Ground truth status returnerer available=False naar fila ikkje finst."""
    monkeypatch.setattr(experiments, "GROUND_TRUTH_DIR", tmp_path / "gt")

    response = client.get("/api/experiments/ground-truth/nonexistent")
    assert response.status_code == 200
    body = response.json()
    assert body["available"] is False
    assert body["risk_count"] == 0


def test_ground_truth_upload_and_status(client, tmp_path, monkeypatch):
    """Upload ground truth og verifiser status etterpaa."""
    gt_dir = tmp_path / "gt"
    monkeypatch.setattr(experiments, "GROUND_TRUTH_DIR", gt_dir)

    gt_risk = _make_gt_risk("gt-1", "Fukt i kjeller")
    gt_data = _make_ground_truth(risks=[gt_risk])

    response = client.post(
        "/api/experiments/ground-truth/upload",
        files=[("file", ("gt.json", json.dumps(gt_data).encode(), "application/json"))],
        data={"document_set_id": "test-set"},
    )
    assert response.status_code == 200
    body = response.json()
    assert body["risk_count"] == 1
    assert body["document_set_id"] == "test-set"

    # Sjekk status etterpaa
    response = client.get("/api/experiments/ground-truth/test-set")
    assert response.status_code == 200
    body = response.json()
    assert body["available"] is True
    assert body["risk_count"] == 1


def test_ground_truth_upload_invalid_json(client, tmp_path, monkeypatch):
    """Upload med ugyldig JSON gir 400."""
    monkeypatch.setattr(experiments, "GROUND_TRUTH_DIR", tmp_path / "gt")

    response = client.post(
        "/api/experiments/ground-truth/upload",
        files=[("file", ("gt.json", b"not json", "application/json"))],
        data={"document_set_id": "test-set"},
    )
    assert response.status_code == 400


def test_ground_truth_upload_invalid_schema(client, tmp_path, monkeypatch):
    """Upload med ugyldig schema gir 400."""
    monkeypatch.setattr(experiments, "GROUND_TRUTH_DIR", tmp_path / "gt")

    response = client.post(
        "/api/experiments/ground-truth/upload",
        files=[("file", ("gt.json", json.dumps({"bad": "data"}).encode(), "application/json"))],
        data={"document_set_id": "test-set"},
    )
    assert response.status_code == 400


# --- evaluate-single ---


def test_evaluate_single(client, tmp_path, monkeypatch):
    """Evaluate-single returnerer EvaluationResult med metrikker."""
    _setup_eval_history(tmp_path, monkeypatch)
    risk = _make_risk("r1", "Fuktig kjeller med mugg")
    result_data = _make_analysis_result("run-1", "standard", risks=[risk])
    _setup_results(tmp_path, monkeypatch, [result_data])

    gt_risk = _make_gt_risk("gt-1", "Fuktig kjeller med mugg")
    gt_data = _make_ground_truth(risks=[gt_risk])
    gt_path = tmp_path / "gt.json"
    gt_path.write_text(json.dumps(gt_data), encoding="utf-8")

    response = client.post(
        "/api/experiments/evaluate-single",
        json={
            "run_id": "run-1",
            "ground_truth_path": str(gt_path),
        },
    )
    assert response.status_code == 200
    body = response.json()

    assert body["run_id"] == "run-1"
    assert body["system_type"] == "standard"
    assert body["matched_risks"] == 1
    assert body["unmatched_predicted"] == 0
    assert body["unmatched_ground_truth"] == 0


def test_evaluate_single_not_found(client, tmp_path, monkeypatch):
    """Evaluate-single med ukjent run_id gir 404."""
    monkeypatch.setattr(_experiments_helpers, "RESULTS_DIR", tmp_path / "results")

    response = client.post(
        "/api/experiments/evaluate-single",
        json={
            "run_id": "nonexistent",
            "ground_truth_path": "/some/path.json",
        },
    )
    assert response.status_code == 404


def test_evaluate_single_gt_not_found(client, tmp_path, monkeypatch):
    """Evaluate-single med ukjent ground truth-fil gir 404."""
    result_data = _make_analysis_result("run-1", "standard")
    _setup_results(tmp_path, monkeypatch, [result_data])
    _setup_eval_history(tmp_path, monkeypatch)

    response = client.post(
        "/api/experiments/evaluate-single",
        json={
            "run_id": "run-1",
            "ground_truth_path": str(tmp_path / "nonexistent.json"),
        },
    )
    assert response.status_code == 404


def test_evaluate_comparison_too_few_runs(client):
    """Evaluate-comparison med under 2 run_ids gir 400."""
    response = client.post(
        "/api/experiments/evaluate-comparison",
        json={"run_ids": ["run-1"]},
    )
    assert response.status_code == 400


def test_evaluate_comparison_no_risks(client, tmp_path, monkeypatch):
    """Evaluate-comparison med tomme resultater fungerer."""
    _setup_eval_history(tmp_path, monkeypatch)
    results = [
        _make_analysis_result("run-std", "standard", risks=[]),
        _make_analysis_result("run-agent", "agentic", risks=[]),
    ]
    _setup_results(tmp_path, monkeypatch, results)

    response = client.post(
        "/api/experiments/evaluate-comparison",
        json={"run_ids": ["run-std", "run-agent"]},
    )
    assert response.status_code == 200
    body = response.json()
    assert body["overlapping_risk_count"] == 0
    assert body["risk_summaries"][0]["total_risks"] == 0
    assert body["risk_summaries"][1]["total_risks"] == 0


# --- Historikk-tester ---


def test_evaluate_comparison_saves_to_history(client, tmp_path, monkeypatch):
    """Evaluate-comparison lagrer resultatet til historikk."""
    eval_dir = _setup_eval_history(tmp_path, monkeypatch)
    results = [
        _make_analysis_result("run-std", "standard", risks=[]),
        _make_analysis_result("run-agent", "agentic", risks=[]),
    ]
    _setup_results(tmp_path, monkeypatch, results)

    response = client.post(
        "/api/experiments/evaluate-comparison",
        json={"run_ids": ["run-std", "run-agent"]},
    )
    assert response.status_code == 200
    body = response.json()

    record_id = body["record_id"]
    saved_path = eval_dir / f"{record_id}.json"
    assert saved_path.exists()

    saved = json.loads(saved_path.read_text(encoding="utf-8"))
    assert saved["record_id"] == record_id
    assert "system_results" in saved


def test_evaluate_single_saves_to_history(client, tmp_path, monkeypatch):
    """Evaluate-single lagrer wrappet resultat til historikk."""
    eval_dir = _setup_eval_history(tmp_path, monkeypatch)
    risk = _make_risk("r1", "Fuktig kjeller med mugg")
    result_data = _make_analysis_result("run-1", "standard", risks=[risk])
    _setup_results(tmp_path, monkeypatch, [result_data])

    gt_risk = _make_gt_risk("gt-1", "Fuktig kjeller med mugg")
    gt_data = _make_ground_truth(risks=[gt_risk])
    gt_path = tmp_path / "gt.json"
    gt_path.write_text(json.dumps(gt_data), encoding="utf-8")

    response = client.post(
        "/api/experiments/evaluate-single",
        json={"run_id": "run-1", "ground_truth_path": str(gt_path)},
    )
    assert response.status_code == 200

    # Sjekk at en fil ble lagret
    saved_files = list(eval_dir.glob("*.json"))
    assert len(saved_files) == 1

    saved = json.loads(saved_files[0].read_text(encoding="utf-8"))
    assert saved["record_type"] == "single"
    assert saved["evaluation"]["run_id"] == "run-1"


def test_list_evaluation_history(client, tmp_path, monkeypatch):
    """History-endepunktet lister bade comparison og single records."""
    _setup_eval_history(tmp_path, monkeypatch)

    # Sett opp resultater og kjor begge endepunkter
    risk = _make_risk("r1", "Fuktig kjeller med mugg")
    results = [
        _make_analysis_result("run-std", "standard", risks=[risk]),
        _make_analysis_result("run-agent", "agentic", risks=[risk]),
    ]
    _setup_results(tmp_path, monkeypatch, results)

    gt_risk = _make_gt_risk("gt-1", "Fuktig kjeller med mugg")
    gt_data = _make_ground_truth(risks=[gt_risk])
    gt_path = tmp_path / "gt.json"
    gt_path.write_text(json.dumps(gt_data), encoding="utf-8")

    # Kjor comparison
    client.post(
        "/api/experiments/evaluate-comparison",
        json={"run_ids": ["run-std", "run-agent"]},
    )

    # Kjor single
    client.post(
        "/api/experiments/evaluate-single",
        json={"run_id": "run-std", "ground_truth_path": str(gt_path)},
    )

    response = client.get("/api/experiments/history")
    assert response.status_code == 200
    body = response.json()
    assert len(body) == 2

    types = {item["record_type"] for item in body}
    assert types == {"comparison", "single"}


def test_get_evaluation_record(client, tmp_path, monkeypatch):
    """Hent et spesifikt evalueringsrecord via history-endepunktet."""
    _setup_eval_history(tmp_path, monkeypatch)
    results = [
        _make_analysis_result("run-std", "standard", risks=[]),
        _make_analysis_result("run-agent", "agentic", risks=[]),
    ]
    _setup_results(tmp_path, monkeypatch, results)

    resp = client.post(
        "/api/experiments/evaluate-comparison",
        json={"run_ids": ["run-std", "run-agent"]},
    )
    record_id = resp.json()["record_id"]

    response = client.get(f"/api/experiments/history/{record_id}")
    assert response.status_code == 200
    body = response.json()
    assert body["record_id"] == record_id
    assert "system_results" in body


def test_delete_evaluation_record(client, tmp_path, monkeypatch):
    """Slett et evalueringsrecord og verifiser at det er borte."""
    _setup_eval_history(tmp_path, monkeypatch)
    results = [
        _make_analysis_result("run-std", "standard", risks=[]),
        _make_analysis_result("run-agent", "agentic", risks=[]),
    ]
    _setup_results(tmp_path, monkeypatch, results)

    resp = client.post(
        "/api/experiments/evaluate-comparison",
        json={"run_ids": ["run-std", "run-agent"]},
    )
    record_id = resp.json()["record_id"]

    # Slett
    response = client.delete(f"/api/experiments/history/{record_id}")
    assert response.status_code == 200
    assert response.json()["deleted"] == record_id

    # Verifiser at den er borte
    response = client.get(f"/api/experiments/history/{record_id}")
    assert response.status_code == 404


def test_delete_nonexistent_record(client, tmp_path, monkeypatch):
    """Slett et record som ikkje finst gir 404."""
    _setup_eval_history(tmp_path, monkeypatch)

    response = client.delete("/api/experiments/history/nonexistent-id")
    assert response.status_code == 404


def test_history_empty(client, tmp_path, monkeypatch):
    """Tom historikk returnerer tom liste."""
    _setup_eval_history(tmp_path, monkeypatch)

    response = client.get("/api/experiments/history")
    assert response.status_code == 200
    assert response.json() == []
