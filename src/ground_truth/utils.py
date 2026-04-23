"""Verktøyfunksjoner for ground truth-modulen."""

import logging

from src.models.schemas import DocumentType

logger = logging.getLogger(__name__)


def detect_document_type(filename: str) -> DocumentType:
    """Returner dokumenttype. Kun salgsoppgave stottet.

    Args:
        filename: Filnavnet (f.eks. "salgsoppgave_enebolig.pdf").

    Returns:
        DocumentType.salgsoppgave.
    """
    return DocumentType.salgsoppgave
