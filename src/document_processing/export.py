"""Eksport av prosesserte dokumenter til Markdown-format."""

import logging

from src.models.schemas import DocumentChunk, ParsedDocument

logger = logging.getLogger(__name__)


def export_extracted_md(parsed_doc: ParsedDocument) -> str:
    """Generer Markdown med ekstrahert tekst fra et parset dokument.

    Args:
        parsed_doc: Parset dokument med sider og tekst.

    Returns:
        Markdown-formatert streng med innholdet.
    """
    lines: list[str] = [f"# {parsed_doc.filename}", ""]

    for page in parsed_doc.pages:
        lines.append(f"## Side {page.page_number}")
        lines.append("")

        text = page.text.strip() if page.text else ""
        lines.append(text if text else "(Ingen tekst ekstrahert)")
        lines.append("")

    return "\n".join(lines).rstrip() + "\n"


def export_chunks_md(
    chunks: list[DocumentChunk],
    chunk_size: int,
    chunk_overlap: int,
) -> str:
    """Generer Markdown med alle chunks og metadata.

    Args:
        chunks: Liste med dokumentchunks.
        chunk_size: Chunk-storrelse brukt ved chunking.
        chunk_overlap: Overlapp brukt ved chunking.

    Returns:
        Markdown-formatert streng med alle chunks.
    """
    if not chunks:
        return "# Chunks\n\nIngen chunks generert.\n"

    doc_set_id = _extract_set_id(chunks[0].document_id)

    lines: list[str] = [
        f"# Chunks for {doc_set_id}",
        "",
        (
            f"Totalt: {len(chunks)} chunks | "
            f"Chunk-størrelse: {chunk_size} | "
            f"Overlapp: {chunk_overlap}"
        ),
        "",
        "---",
        "",
    ]

    for i, chunk in enumerate(chunks, 1):
        lines.extend(_format_chunk(i, chunk))

    return "\n".join(lines).rstrip() + "\n"


def _extract_set_id(document_id: str) -> str:
    """Ekstraher dokumentsett-ID fra en document_id.

    Args:
        document_id: Full dokument-ID (f.eks. 'setid_filnavn').

    Returns:
        Dokumentsett-ID (delen for forste underscore).
    """
    return document_id.split("_", 1)[0]


def _format_chunk(index: int, chunk: DocumentChunk) -> list[str]:
    """Formater en enkelt chunk som Markdown.

    Args:
        index: Lopende nummer for chunken.
        chunk: DocumentChunk-objekt.

    Returns:
        Liste med Markdown-linjer for chunken.
    """
    lines: list[str] = [f"## Chunk {index:03d}"]
    lines.append(f"- **ID:** {chunk.chunk_id}")

    pages = chunk.page_numbers
    if pages:
        page_str = f"{pages[0]}" if len(pages) == 1 else f"{pages[0]}–{pages[-1]}"
        lines.append(f"- **Sider:** {page_str}")

    if chunk.section is not None:
        lines.append(f"- **Seksjon:** {chunk.section}")

    lines.append("")

    # Chunk text as blockquote
    for text_line in chunk.text.splitlines():
        lines.append(f"> {text_line}" if text_line else ">")

    lines.extend(["", "---", ""])
    return lines
