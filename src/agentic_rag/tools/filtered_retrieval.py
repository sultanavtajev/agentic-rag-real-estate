"""Verktoy for filtrert dokumenthenting basert på dokumenttype."""

import logging

from src.models.schemas import DocumentChunk, DocumentType
from src.retrieval.vector_store import VectorStoreManager

logger = logging.getLogger(__name__)


class FilteredRetrievalTool:
    """Hent dokumentchunks filtrert på dokumenttype."""

    name: str = "filtered_retrieval"
    description: str = "Hent dokumentchunks filtrert på dokumenttype"

    def __init__(self, vector_store: VectorStoreManager, collection_name: str) -> None:
        """Initialiser med vektorlager og collection-navn.

        Args:
            vector_store: VectorStoreManager-instans.
            collection_name: Navn på ChromaDB collection.
        """
        self.vector_store = vector_store
        self.collection_name = collection_name

    def execute(self, query: str, context: dict) -> list[DocumentChunk]:
        """Hent chunks, filtrert på dokumenttype hvis tilgjengelig.

        Args:
            query: Soketekst.
            context: Kontekst med valgfri 'doc_type' (DocumentType).

        Returns:
            Liste med relevante DocumentChunk-er.
        """
        doc_type = context.get("doc_type")
        if isinstance(doc_type, DocumentType):
            logger.info("Filtrert retrieval for type: %s", doc_type.value)
            return self.vector_store.retrieve_by_document_type(
                query=query,
                collection_name=self.collection_name,
                doc_type=doc_type,
            )
        logger.info("Ingen doc_type i context, bruker vanlig retrieve")
        return self.vector_store.retrieve(query=query, collection_name=self.collection_name)
