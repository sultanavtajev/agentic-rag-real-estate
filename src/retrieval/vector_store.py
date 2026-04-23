"""Vektorlagring og retrieval via ChromaDB."""

import json
import logging
from pathlib import Path

import chromadb

from src.models.schemas import DocumentChunk, DocumentType
from src.retrieval.embeddings import EmbeddingProvider

logger = logging.getLogger(__name__)


def _l2_to_similarity(distance: float) -> float:
    """Konverter ChromaDB L2-squared distance til cosine similarity.

    For normaliserte vektorer: cosine_similarity = 1 - (l2² / 2).
    """
    return max(0.0, 1.0 - distance / 2.0)


class VectorStoreManager:
    """Administrerer vektorlagring og retrieval via ChromaDB."""

    def __init__(self, embedding_provider: EmbeddingProvider, persist_dir: Path) -> None:
        """Initialiser ChromaDB persistent client.

        Args:
            embedding_provider: Provider for embedding av tekst.
            persist_dir: Sti til ChromaDB persistens-mappe.
        """
        self.embedding_provider = embedding_provider
        self.client = chromadb.PersistentClient(path=str(persist_dir))

    def index_chunks(self, chunks: list[DocumentChunk], collection_name: str) -> None:
        """Indekser chunks i ChromaDB collection.

        Args:
            chunks: Liste med DocumentChunk-objekter.
            collection_name: Navn paa ChromaDB collection.
        """
        if not chunks:
            return

        collection = self.client.get_or_create_collection(name=collection_name)
        texts = [chunk.text for chunk in chunks]
        embeddings = self.embedding_provider.embed_documents(texts)

        ids = [chunk.chunk_id for chunk in chunks]
        metadatas = [self._chunk_to_metadata(chunk) for chunk in chunks]

        collection.add(
            ids=ids,
            embeddings=embeddings,
            documents=texts,
            metadatas=metadatas,
        )
        logger.info("Indeksert %d chunks i collection '%s'", len(chunks), collection_name)

    def retrieve(
        self,
        query: str,
        collection_name: str,
        top_k: int = 20,
        min_score: float = 0.3,
        min_results: int = 3,
    ) -> list[DocumentChunk]:
        """Hent relevante chunks via terskel-basert similarity search.

        Args:
            query: Soketekst.
            collection_name: ChromaDB collection aa soeke i.
            top_k: Maks antall resultater aa hente fra ChromaDB.
            min_score: Minimum cosine similarity for aa inkludere en chunk.
            min_results: Minimum antall chunks aa returnere (fallback).

        Returns:
            Liste med DocumentChunk sortert etter relevans.
        """
        collection = self.client.get_collection(name=collection_name)
        query_embedding = self.embedding_provider.embed_query(query)

        results = collection.query(
            query_embeddings=[query_embedding],
            n_results=top_k,
            include=["documents", "metadatas", "distances"],
        )
        return self._filter_by_score(results, min_score, min_results)

    def retrieve_by_document_type(
        self,
        query: str,
        collection_name: str,
        doc_type: DocumentType,
        top_k: int = 20,
        min_score: float = 0.3,
        min_results: int = 3,
    ) -> list[DocumentChunk]:
        """Hent chunks filtrert paa dokumenttype med terskel.

        Args:
            query: Soketekst.
            collection_name: ChromaDB collection.
            doc_type: Dokumenttype aa filtrere paa.
            top_k: Maks antall resultater.
            min_score: Minimum cosine similarity.
            min_results: Minimum antall chunks (fallback).

        Returns:
            Filtrerte DocumentChunk-er sortert etter relevans.
        """
        collection = self.client.get_collection(name=collection_name)
        query_embedding = self.embedding_provider.embed_query(query)

        results = collection.query(
            query_embeddings=[query_embedding],
            n_results=top_k,
            where={"document_type": doc_type.value},
            include=["documents", "metadatas", "distances"],
        )
        return self._filter_by_score(results, min_score, min_results)

    def delete_collection(self, collection_name: str) -> None:
        """Slett en ChromaDB collection.

        Args:
            collection_name: Navn paa collection aa slette.
        """
        self.client.delete_collection(name=collection_name)
        logger.info("Slettet collection '%s'", collection_name)

    def _chunk_to_metadata(self, chunk: DocumentChunk) -> dict:
        """Konverter DocumentChunk-metadata til ChromaDB-kompatibelt format."""
        metadata = {
            "document_id": chunk.document_id,
            "document_type": chunk.document_type.value,
            "page_numbers": json.dumps(chunk.page_numbers),
        }
        if chunk.section:
            metadata["section"] = chunk.section
        return metadata

    def _filter_by_score(
        self,
        results: dict,
        min_score: float,
        min_results: int,
    ) -> list[DocumentChunk]:
        """Filtrer ChromaDB-resultater basert paa similarity score.

        Returnerer chunks med score >= min_score, men alltid minst min_results.
        """
        if not results["ids"] or not results["ids"][0]:
            return []

        scored_chunks: list[tuple[float, DocumentChunk]] = []
        for i, chunk_id in enumerate(results["ids"][0]):
            metadata = results["metadatas"][0][i]
            text = results["documents"][0][i]
            distance = results["distances"][0][i]
            score = _l2_to_similarity(distance)

            chunk = DocumentChunk(
                chunk_id=chunk_id,
                document_id=metadata["document_id"],
                document_type=DocumentType(metadata["document_type"]),
                text=text,
                page_numbers=json.loads(metadata["page_numbers"]),
                section=metadata.get("section"),
                metadata={"similarity_score": round(score, 4)},
            )
            scored_chunks.append((score, chunk))

        # Filtrer paa terskel, men behold minimum min_results
        above_threshold = [(s, c) for s, c in scored_chunks if s >= min_score]

        if len(above_threshold) >= min_results:
            selected = above_threshold
        else:
            selected = scored_chunks[:min_results]

        logger.info(
            "Retrieval: %d/%d chunks over terskel %.2f (returnerer %d)",
            len(above_threshold),
            len(scored_chunks),
            min_score,
            len(selected),
        )
        return [chunk for _, chunk in selected]
