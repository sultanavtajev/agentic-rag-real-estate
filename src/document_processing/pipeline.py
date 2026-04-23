"""Komplett pipeline for dokumentprosessering: PDF -> chunks med metadata."""

import logging
from pathlib import Path

from src.config import Settings
from src.document_processing.chunker import DocumentChunker
from src.document_processing.export import export_extracted_md
from src.document_processing.pdf_parser import PDFParser
from src.models.schemas import DocumentChunk, DocumentType, ParsedDocument, ParsedPage

logger = logging.getLogger(__name__)

PROCESSED_DIR = Path("data/processed")


class DocumentProcessingPipeline:
    """Komplett pipeline for dokumentprosessering: PDF -> chunks med metadata."""

    def __init__(self, settings: Settings) -> None:
        self.parser = PDFParser()
        self.chunker = DocumentChunker(
            chunk_size=settings.chunk_size,
            chunk_overlap=settings.chunk_overlap,
        )

    def extract_to_md(
        self,
        file_path: Path,
        document_id: str,
        document_type: DocumentType,
        set_id: str,
    ) -> Path:
        """Steg 1: Parse PDF og lagre ekstrahert tekst som .md-fil."""
        parsed = self.parser.parse(file_path, document_id, document_type)
        processed_dir = PROCESSED_DIR / set_id
        processed_dir.mkdir(parents=True, exist_ok=True)
        safe_name = file_path.stem.replace(" ", "_")
        md_path = processed_dir / f"extracted_{safe_name}.md"
        md_path.write_text(export_extracted_md(parsed), encoding="utf-8")
        logger.info("Ekstrahert tekst lagret til %s", md_path)
        return md_path

    def chunk_from_md(
        self,
        md_path: Path,
        document_id: str,
        document_type: DocumentType,
    ) -> list[DocumentChunk]:
        """Steg 2: Les .md-fil og lag chunks."""
        text = md_path.read_text(encoding="utf-8")
        parsed = ParsedDocument(
            document_id=document_id,
            document_type=document_type,
            filename=md_path.name,
            pages=[ParsedPage(page_number=1, text=text)],
        )
        chunks = self.chunker.chunk_document(parsed, section_aware=False)
        logger.info("Chunket %s: %d chunks", md_path.name, len(chunks))
        return chunks
