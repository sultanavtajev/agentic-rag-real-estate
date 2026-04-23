"""Chunking av parsede dokumenter for embedding og søk.

Deler opp ParsedDocument i DocumentChunk-objekter med støtte for
fast størrelse og seksjonsbevisst splitting.
"""

import logging

from src.models.schemas import DocumentChunk, ParsedDocument
from src.utils.text import detect_section_headers

logger = logging.getLogger(__name__)


class DocumentChunker:
    """Deler parsede dokumenter i chunks for embedding og søk.

    Args:
        chunk_size: Maks antall tegn per chunk.
        chunk_overlap: Antall tegn overlapp mellom chunks.
    """

    def __init__(self, chunk_size: int = 512, chunk_overlap: int = 64) -> None:
        self.chunk_size = chunk_size
        self.chunk_overlap = chunk_overlap

    def chunk_document(
        self, doc: ParsedDocument, section_aware: bool = True
    ) -> list[DocumentChunk]:
        """Del opp et dokument i chunks.

        Args:
            doc: Parset dokument som skal chunkes.
            section_aware: Bruk seksjonsoverskrifter for splitting.

        Returns:
            Liste med DocumentChunk-objekter.
        """
        if section_aware:
            return self._section_aware_chunks(doc)
        return self._fixed_size_chunks(doc)

    def _build_page_text_ranges(self, doc: ParsedDocument) -> list[tuple[int, int, int]]:
        """Bygg liste med (start_pos, end_pos, page_number) for sammenslått tekst.

        Args:
            doc: Parset dokument.

        Returns:
            Liste med tupler (start, end, sidenummer).
        """
        ranges: list[tuple[int, int, int]] = []
        offset = 0
        for page in doc.pages:
            end = offset + len(page.text)
            ranges.append((offset, end, page.page_number))
            offset = end
        return ranges

    def _get_page_numbers(
        self,
        chunk_start: int,
        chunk_end: int,
        page_ranges: list[tuple[int, int, int]],
    ) -> list[int]:
        """Finn hvilke sidenumre en chunk-posisjon dekker.

        Args:
            chunk_start: Startposisjon i sammenslått tekst.
            chunk_end: Sluttposisjon i sammenslått tekst.
            page_ranges: Sideposisjoner fra _build_page_text_ranges.

        Returns:
            Sortert liste med sidenumre.
        """
        pages: list[int] = []
        for start, end, page_num in page_ranges:
            if chunk_start < end and chunk_end > start:
                pages.append(page_num)
        return sorted(pages)

    def _split_text_into_chunks(self, text: str, offset: int = 0) -> list[tuple[int, int]]:
        """Splitt tekst i (start, end)-posisjoner med ordgrense-splitting.

        Args:
            text: Teksten som skal splittes.
            offset: Global offset for posisjonering.

        Returns:
            Liste med (start, end) tupler relativt til global posisjon.
        """
        chunks: list[tuple[int, int]] = []
        pos = 0
        text_len = len(text)

        while pos < text_len:
            end = min(pos + self.chunk_size, text_len)

            # Splitt på ordgrense hvis vi ikke er på slutten
            if end < text_len:
                space_idx = text.rfind(" ", pos, end)
                if space_idx > pos:
                    end = space_idx

            chunks.append((offset + pos, offset + end))

            # Neste chunk starter med overlapp
            next_pos = end - self.chunk_overlap
            if next_pos <= pos:
                next_pos = end
            pos = next_pos

        return chunks

    def _fixed_size_chunks(self, doc: ParsedDocument) -> list[DocumentChunk]:
        """Splitt dokument i chunks med fast størrelse.

        Args:
            doc: Parset dokument.

        Returns:
            Liste med DocumentChunk-objekter.
        """
        full_text = "".join(page.text for page in doc.pages)
        if not full_text.strip():
            return []

        page_ranges = self._build_page_text_ranges(doc)
        chunk_positions = self._split_text_into_chunks(full_text)

        return [
            DocumentChunk(
                chunk_id=f"{doc.document_id}_chunk_{i:03d}",
                document_id=doc.document_id,
                document_type=doc.document_type,
                text=full_text[start:end],
                page_numbers=self._get_page_numbers(start, end, page_ranges),
                section=None,
            )
            for i, (start, end) in enumerate(chunk_positions)
        ]

    def _section_aware_chunks(self, doc: ParsedDocument) -> list[DocumentChunk]:
        """Splitt dokument i chunks per seksjon.

        Args:
            doc: Parset dokument.

        Returns:
            Liste med DocumentChunk-objekter med seksjonsinformasjon.
        """
        full_text = "".join(page.text for page in doc.pages)
        if not full_text.strip():
            return []

        headers = detect_section_headers(full_text)
        if not headers:
            logger.info("Ingen seksjoner funnet, bruker fixed-size chunking")
            return self._fixed_size_chunks(doc)

        page_ranges = self._build_page_text_ranges(doc)
        sections = self._build_sections(headers, len(full_text))
        chunks: list[DocumentChunk] = []
        chunk_idx = 0

        for section_name, sec_start, sec_end in sections:
            section_text = full_text[sec_start:sec_end]
            if not section_text.strip():
                continue

            positions = self._split_text_into_chunks(section_text, sec_start)
            for start, end in positions:
                chunks.append(
                    DocumentChunk(
                        chunk_id=f"{doc.document_id}_chunk_{chunk_idx:03d}",
                        document_id=doc.document_id,
                        document_type=doc.document_type,
                        text=full_text[start:end],
                        page_numbers=self._get_page_numbers(start, end, page_ranges),
                        section=section_name,
                    )
                )
                chunk_idx += 1

        return chunks

    @staticmethod
    def _build_sections(headers: list[dict], text_length: int) -> list[tuple[str, int, int]]:
        """Bygg (section_name, start, end) tupler fra header-posisjoner.

        Args:
            headers: Resultater fra detect_section_headers.
            text_length: Total lengde på sammenslått tekst.

        Returns:
            Liste med (seksjonsnavn, start, slutt).
        """
        sections: list[tuple[str, int, int]] = []
        for i, header in enumerate(headers):
            start = header["position"]
            end = headers[i + 1]["position"] if i + 1 < len(headers) else text_length
            sections.append((header["section"], start, end))
        return sections
