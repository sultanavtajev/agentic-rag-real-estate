"""Parser for PDF-filer til strukturerte ParsedDocument-objekter."""

import logging
from pathlib import Path

import pdfplumber

from src.models.schemas import DocumentType, ParsedDocument, ParsedPage

logger = logging.getLogger(__name__)


class PDFParser:
    """Parser PDF-filer til strukturerte ParsedDocument-objekter."""

    def parse(
        self, file_path: Path, document_id: str, document_type: DocumentType
    ) -> ParsedDocument:
        """Parse en PDF-fil til ParsedDocument.

        Args:
            file_path: Sti til PDF-filen.
            document_id: Unik ID for dokumentet.
            document_type: Type dokument (salgsoppgave).

        Returns:
            ParsedDocument med sider, tekst og tabeller.

        Raises:
            FileNotFoundError: Hvis filen ikke finnes.
            ValueError: Hvis filen ikke er en gyldig PDF.
        """
        if not file_path.exists():
            raise FileNotFoundError(f"PDF-fil ikke funnet: {file_path}")

        pages = self._extract_pages(file_path)

        logger.info("Parset %s: %d sider", file_path.name, len(pages))

        return ParsedDocument(
            document_id=document_id,
            document_type=document_type,
            filename=file_path.name,
            pages=pages,
            metadata={"source_path": str(file_path)},
        )

    def _extract_pages(self, file_path: Path) -> list[ParsedPage]:
        """Ekstraher sider fra en PDF-fil med pdfplumber.

        Args:
            file_path: Sti til PDF-filen.

        Returns:
            Liste med ParsedPage-objekter.

        Raises:
            ValueError: Hvis PDF-filen ikke kan parses.
        """
        pages: list[ParsedPage] = []
        try:
            with pdfplumber.open(file_path) as pdf:
                for page_num, page in enumerate(pdf.pages, start=1):
                    parsed_page = self._parse_single_page(page, page_num)
                    pages.append(parsed_page)
        except ValueError:
            raise
        except Exception as e:
            raise ValueError(f"Kunne ikke parse PDF: {file_path}") from e
        return pages

    def _parse_single_page(self, page: pdfplumber.pdf.Page, page_num: int) -> ParsedPage:
        """Parse en enkelt PDF-side.

        Args:
            page: pdfplumber Page-objekt.
            page_num: Sidenummer.

        Returns:
            ParsedPage med tekst og tabeller.
        """
        text = page.extract_text() or ""
        return ParsedPage(page_number=page_num, text=text)
