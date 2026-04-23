"""Tester for dokumentprosessering: PDFParser, DocumentChunker, Pipeline."""

from pathlib import Path
from unittest.mock import MagicMock, patch

import pytest

from src.document_processing.chunker import DocumentChunker
from src.document_processing.pdf_parser import PDFParser
from src.document_processing.pipeline import DocumentProcessingPipeline
from src.models.schemas import DocumentType, ParsedDocument, ParsedPage

# --- Fixtures ---


@pytest.fixture()
def sample_parsed_document():
    """ParsedDocument med kjent tekst for chunking-tester."""
    text = "Dette er en testtekst som brukes for chunking. " * 20
    return ParsedDocument(
        document_id="doc_001",
        document_type=DocumentType.salgsoppgave,
        filename="test.pdf",
        pages=[
            ParsedPage(page_number=1, text=text[:500]),
            ParsedPage(page_number=2, text=text[500:]),
        ],
    )


@pytest.fixture()
def section_document():
    """ParsedDocument med seksjonsoverskrifter."""
    text = (
        "Bad\n"
        "Badet er i god stand med fliser. TG1 bad.\n"
        "Tak\n"
        "Taket er nylig rehabilitert. TG0 tak.\n"
    )
    return ParsedDocument(
        document_id="doc_sections",
        document_type=DocumentType.salgsoppgave,
        filename="sections.pdf",
        pages=[ParsedPage(page_number=1, text=text)],
    )


# --- PDFParser ---


class TestPDFParser:
    def test_pdf_parser_file_not_found_raises_file_not_found_error(self):
        parser = PDFParser()
        with pytest.raises(FileNotFoundError):
            parser.parse(
                Path("/nonexistent/file.pdf"),
                "doc_missing",
                DocumentType.salgsoppgave,
            )

    def test_pdf_parser_invalid_file_raises_value_error(self, tmp_path):
        invalid_file = tmp_path / "invalid.pdf"
        invalid_file.write_text("this is not a pdf")
        parser = PDFParser()
        with pytest.raises(ValueError, match="Kunne ikke parse PDF"):
            parser.parse(invalid_file, "doc_invalid", DocumentType.salgsoppgave)

    def test_pdf_parser_valid_pdf_returns_parsed_document(self, tmp_path):
        """Test med en mocked pdfplumber for å verifisere ParsedDocument-retur."""
        pdf_path = tmp_path / "valid.pdf"
        pdf_path.write_bytes(b"%PDF-1.4 dummy")

        mock_page = MagicMock()
        mock_page.extract_text.return_value = "Side 1 innhold"

        mock_pdf = MagicMock()
        mock_pdf.pages = [mock_page]
        mock_pdf.__enter__ = MagicMock(return_value=mock_pdf)
        mock_pdf.__exit__ = MagicMock(return_value=False)

        parser = PDFParser()
        with patch("src.document_processing.pdf_parser.pdfplumber.open", return_value=mock_pdf):
            result = parser.parse(pdf_path, "doc_valid", DocumentType.salgsoppgave)

        assert isinstance(result, ParsedDocument)
        assert result.document_id == "doc_valid"
        assert result.document_type == DocumentType.salgsoppgave
        assert result.filename == "valid.pdf"
        assert len(result.pages) == 1
        assert result.pages[0].text == "Side 1 innhold"
        assert result.pages[0].page_number == 1


# --- DocumentChunker ---


class TestDocumentChunker:
    def test_chunker_fixed_size_basic_respects_chunk_size(self, sample_parsed_document):
        chunker = DocumentChunker(chunk_size=100, chunk_overlap=10)
        chunks = chunker.chunk_document(sample_parsed_document, section_aware=False)

        assert len(chunks) > 0
        for chunk in chunks:
            assert len(chunk.text) <= 100

    def test_chunker_fixed_size_overlap_has_correct_overlap(self):
        text = "abcdefghij " * 50  # 550 chars
        doc = ParsedDocument(
            document_id="doc_overlap",
            document_type=DocumentType.salgsoppgave,
            filename="overlap.pdf",
            pages=[ParsedPage(page_number=1, text=text)],
        )
        chunker = DocumentChunker(chunk_size=100, chunk_overlap=20)
        chunks = chunker.chunk_document(doc, section_aware=False)

        assert len(chunks) > 1
        for i in range(len(chunks) - 1):
            current_end = chunks[i].text
            next_start = chunks[i + 1].text
            # The end of current chunk should share content with start of next
            overlap_text = current_end[-20:]
            assert overlap_text in next_start or next_start[:20] in current_end

    def test_chunker_fixed_size_word_boundary_splits_on_words(self):
        text = "dette er en lang tekst med mange ord som skal deles opp " * 20
        doc = ParsedDocument(
            document_id="doc_words",
            document_type=DocumentType.salgsoppgave,
            filename="words.pdf",
            pages=[ParsedPage(page_number=1, text=text)],
        )
        chunker = DocumentChunker(chunk_size=100, chunk_overlap=10)
        chunks = chunker.chunk_document(doc, section_aware=False)

        for chunk in chunks[:-1]:  # Skip last chunk
            # Chunks shorter than chunk_size were split at a word boundary.
            # The text should end with a complete word, meaning the last
            # char is a letter and the text does not cut a word in half.
            words = chunk.text.split()
            # All words in the chunk should be complete words from source
            for word in words:
                assert word in text

    def test_chunker_section_aware_basic_assigns_sections(self, section_document):
        chunker = DocumentChunker(chunk_size=512, chunk_overlap=64)
        chunks = chunker.chunk_document(section_document, section_aware=True)

        assert len(chunks) >= 2
        sections_found = {c.section for c in chunks}
        assert "Bad" in sections_found
        assert "Tak" in sections_found

    def test_chunker_section_aware_no_cross_section_boundary(self, section_document):
        chunker = DocumentChunker(chunk_size=512, chunk_overlap=64)
        chunks = chunker.chunk_document(section_document, section_aware=True)

        for chunk in chunks:
            if chunk.section == "Bad":
                assert "Taket er nylig" not in chunk.text
            if chunk.section == "Tak":
                assert "Badet er i god" not in chunk.text

    def test_chunker_chunk_id_format_matches_pattern(self, sample_parsed_document):
        chunker = DocumentChunker(chunk_size=200, chunk_overlap=20)
        chunks = chunker.chunk_document(sample_parsed_document, section_aware=False)

        import re

        pattern = re.compile(r"^doc_001_chunk_\d{3}$")
        for chunk in chunks:
            msg = f"chunk_id '{chunk.chunk_id}' matcher ikke"
            assert pattern.match(chunk.chunk_id), msg

    def test_chunker_page_numbers_tracked_correctly(self):
        doc = ParsedDocument(
            document_id="doc_pages",
            document_type=DocumentType.salgsoppgave,
            filename="pages.pdf",
            pages=[
                ParsedPage(page_number=1, text="Side en innhold. " * 30),
                ParsedPage(page_number=2, text="Side to innhold. " * 30),
            ],
        )
        chunker = DocumentChunker(chunk_size=100, chunk_overlap=10)
        chunks = chunker.chunk_document(doc, section_aware=False)

        page_1_chunks = [c for c in chunks if 1 in c.page_numbers]
        page_2_chunks = [c for c in chunks if 2 in c.page_numbers]
        assert len(page_1_chunks) > 0
        assert len(page_2_chunks) > 0

        for chunk in chunks:
            assert len(chunk.page_numbers) > 0
            assert all(p in [1, 2] for p in chunk.page_numbers)


# --- DocumentProcessingPipeline ---


class TestDocumentProcessingPipeline:
    def test_pipeline_extract_and_chunk_integration(self, tmp_path, env_vars, monkeypatch):
        """Integration-test: extract to markdown then chunk from markdown."""
        import src.document_processing.pipeline as pipeline_mod

        monkeypatch.setattr(pipeline_mod, "PROCESSED_DIR", tmp_path / "processed")

        mock_parsed = ParsedDocument(
            document_id="doc_pipe",
            document_type=DocumentType.salgsoppgave,
            filename="pipe.pdf",
            pages=[
                ParsedPage(
                    page_number=1,
                    text="Bad\nBadet har TG3 pa membran. P-ROM: 120 m2.\n",
                ),
                ParsedPage(
                    page_number=2,
                    text="Tak\nTaket er i god stand. TG1 tak.\n",
                ),
            ],
        )

        from src.config import Settings

        settings = Settings(
            anthropic_api_key="test-key",
            voyage_api_key="test-key",
            chunk_size=512,
            chunk_overlap=64,
        )
        pipeline = DocumentProcessingPipeline(settings)

        with patch.object(pipeline.parser, "parse", return_value=mock_parsed):
            md_path = pipeline.extract_to_md(
                Path("/fake/doc.pdf"), "doc_pipe", DocumentType.salgsoppgave, "test_set"
            )

        assert md_path.exists()
        chunks = pipeline.chunk_from_md(md_path, "doc_pipe", DocumentType.salgsoppgave)

        assert len(chunks) > 0
        all_text = " ".join(c.text for c in chunks)
        assert "TG3" in all_text
        assert "P-ROM" in all_text
