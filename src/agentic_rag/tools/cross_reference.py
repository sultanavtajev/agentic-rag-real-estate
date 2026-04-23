"""Verktoy for kryss-referanse mellom dokumenttyper."""

import logging

from src.models.schemas import DocumentChunk, DocumentType
from src.retrieval.vector_store import VectorStoreManager

logger = logging.getLogger(__name__)


class CrossReferenceTool:
    """Kryss-referanse mellom dokumenttyper."""

    name: str = "cross_reference"
    description: str = "Kryss-referanse mellom dokumenttyper"

    def __init__(self, vector_store: VectorStoreManager, collection_name: str) -> None:
        """Initialiser med vektorlager og collection-navn.

        Args:
            vector_store: VectorStoreManager-instans.
            collection_name: Navn på ChromaDB collection.
        """
        self.vector_store = vector_store
        self.collection_name = collection_name

    def execute(self, query: str, context: dict) -> list[DocumentChunk]:
        """Hent chunks på tvers av dokumenttyper.

        Args:
            query: Soketekst.
            context: Kontekst med 'doc_types' (list[DocumentType]).

        Returns:
            Samlet liste med DocumentChunk-er fra alle dokumenttyper.
        """
        doc_types = context.get("doc_types", [])
        if not doc_types:
            logger.warning("Ingen doc_types i context, returnerer tom liste")
            return []

        all_chunks: list[DocumentChunk] = []
        for doc_type in doc_types:
            if not isinstance(doc_type, DocumentType):
                continue
            chunks = self.vector_store.retrieve_by_document_type(
                query=query,
                collection_name=self.collection_name,
                doc_type=doc_type,
            )
            all_chunks.extend(chunks)
            logger.info("Kryss-referanse: %d chunks fra %s", len(chunks), doc_type.value)
        return all_chunks
