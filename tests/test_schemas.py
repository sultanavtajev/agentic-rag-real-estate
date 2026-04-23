from datetime import datetime

from src.models.schemas import (
    AnalysisResult,
    DocumentChunk,
    DocumentType,
    EvaluationResult,
    GroundTruthAnnotation,
    GroundTruthDocument,
    GroundTruthRisk,
    IdentifiedRisk,
    OverallMetrics,
    ParsedDocument,
    ParsedPage,
)


def test_document_type_enum_values():
    assert DocumentType.salgsoppgave.value == "salgsoppgave"
    assert len(DocumentType) == 1


def test_parsed_page_roundtrip_json():
    page = ParsedPage(page_number=1, text="Testside", tables=[])
    data = page.model_dump_json()
    restored = ParsedPage.model_validate_json(data)
    assert restored == page


def test_parsed_document_roundtrip_json():
    doc = ParsedDocument(
        document_id="doc-1",
        document_type=DocumentType.salgsoppgave,
        filename="test.pdf",
        pages=[ParsedPage(page_number=1, text="Innhold")],
    )
    data = doc.model_dump_json()
    restored = ParsedDocument.model_validate_json(data)
    assert restored == doc


def test_document_chunk_roundtrip_json():
    chunk = DocumentChunk(
        chunk_id="chunk-1",
        document_id="doc-1",
        document_type=DocumentType.salgsoppgave,
        text="Tekstdel",
        page_numbers=[1, 2],
        section="Innledning",
    )
    data = chunk.model_dump_json()
    restored = DocumentChunk.model_validate_json(data)
    assert restored == chunk


def test_identified_risk_roundtrip_json():
    risk = IdentifiedRisk(
        risk_id="risk-1",
        description="Fuktskade i kjeller",
        evidence=["Fukt observert"],
        source_documents=["doc-1"],
        source_pages=[3],
        confidence=0.95,
    )
    data = risk.model_dump_json()
    restored = IdentifiedRisk.model_validate_json(data)
    assert restored == risk


def test_analysis_result_timestamp_default():
    before = datetime.now()
    result = AnalysisResult(
        run_id="run-1",
        document_set_id="set-1",
        system_type="agentic",
        risks=[],
        raw_llm_response="test",
    )
    after = datetime.now()
    assert before <= result.timestamp <= after


def test_analysis_result_roundtrip_json():
    result = AnalysisResult(
        run_id="run-1",
        document_set_id="set-1",
        system_type="agentic",
        risks=[
            IdentifiedRisk(
                risk_id="risk-1",
                description="Avvik i areal",
                evidence=["Areal avviker"],
                source_documents=["doc-1"],
                source_pages=[5],
                confidence=0.8,
            ),
        ],
        raw_llm_response="raw response",
    )
    data = result.model_dump_json()
    restored = AnalysisResult.model_validate_json(data)
    assert restored == result


def test_ground_truth_annotation_roundtrip_json():
    annotation = GroundTruthAnnotation(
        document_set_id="set-1",
        annotator="Tester",
        annotation_date="2026-01-15",
        documents_reviewed=[
            GroundTruthDocument(
                document_id="doc-1",
                document_type=DocumentType.salgsoppgave,
                filename="salgsoppgave.pdf",
            ),
        ],
        risks=[
            GroundTruthRisk(
                risk_id="gt-1",
                description="Manglende klausul",
                evidence=["Klausul mangler"],
                source_documents=["doc-1"],
                source_pages=[10],
            ),
        ],
        notes="Ingen spesielle merknader",
    )
    data = annotation.model_dump_json()
    restored = GroundTruthAnnotation.model_validate_json(data)
    assert restored == annotation


def test_evaluation_result_roundtrip_json():
    result = EvaluationResult(
        run_id="run-1",
        system_type="agentic",
        overall_metrics=OverallMetrics(
            precision=0.88,
            recall=0.82,
            f1=0.85,
            total_support=40,
        ),
        matched_risks=8,
        unmatched_predicted=2,
        unmatched_ground_truth=3,
    )
    data = result.model_dump_json()
    restored = EvaluationResult.model_validate_json(data)
    assert restored == result
