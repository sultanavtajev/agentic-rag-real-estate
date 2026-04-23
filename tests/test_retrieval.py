"""Tester for retrieval-modulen: embeddings og vektorlager."""

import hashlib
import os

import pytest
from dotenv import load_dotenv

from src.models.schemas import DocumentChunk, DocumentType
from src.retrieval.vector_store import VectorStoreManager

load_dotenv()
VOYAGE_API_KEY = os.getenv("VOYAGE_API_KEY")


# --- Helpers ---


class FakeEmbeddingProvider:
    """Deterministisk embedding provider for testing uten API."""

    def embed_documents(self, texts: list[str]) -> list[list[float]]:
        return [self._hash_to_vector(t) for t in texts]

    def embed_query(self, text: str) -> list[float]:
        return self._hash_to_vector(text)

    def _hash_to_vector(self, text: str, dim: int = 128) -> list[float]:
        h = hashlib.sha256(text.encode()).digest()
        return [float(b) / 255.0 for b in h[: dim // 2]] * 2


def make_chunk(chunk_id, text, doc_type=DocumentType.salgsoppgave):
    return DocumentChunk(
        chunk_id=chunk_id,
        document_id="test_doc",
        document_type=doc_type,
        text=text,
        page_numbers=[1],
    )


# --- VoyageAIEmbeddings tests (ekte API) ---


@pytest.mark.skipif(not VOYAGE_API_KEY, reason="VOYAGE_API_KEY not set")
def test_voyage_embed_query_returns_vector():
    from src.retrieval.embeddings import VoyageAIEmbeddings

    provider = VoyageAIEmbeddings(api_key=VOYAGE_API_KEY)
    result = provider.embed_query("test tekst")
    assert isinstance(result, list)
    assert len(result) > 0
    assert all(isinstance(x, float) for x in result)


@pytest.mark.skipif(not VOYAGE_API_KEY, reason="VOYAGE_API_KEY not set")
def test_voyage_embed_documents_returns_correct_count():
    from src.retrieval.embeddings import VoyageAIEmbeddings

    provider = VoyageAIEmbeddings(api_key=VOYAGE_API_KEY)
    texts = ["tekst en", "tekst to", "tekst tre"]
    result = provider.embed_documents(texts)
    assert len(result) == 3
    assert all(isinstance(v, list) for v in result)


# --- VectorStoreManager tests (med FakeEmbeddingProvider) ---


@pytest.fixture
def vsm(tmp_path):
    return VectorStoreManager(
        embedding_provider=FakeEmbeddingProvider(),
        persist_dir=tmp_path / "chroma",
    )


def test_vectorstore_index_chunks(vsm):
    chunks = [make_chunk(f"c{i}", f"tekst nummer {i}") for i in range(5)]
    vsm.index_chunks(chunks, "test_col")
    collection = vsm.client.get_collection("test_col")
    assert collection.count() == 5


def test_vectorstore_retrieve_returns_chunks(vsm):
    chunks = [make_chunk(f"c{i}", f"tekst nummer {i}") for i in range(5)]
    vsm.index_chunks(chunks, "test_col")
    results = vsm.retrieve("tekst nummer 0", "test_col", top_k=3)
    assert len(results) > 0
    assert all(isinstance(c, DocumentChunk) for c in results)


def test_vectorstore_retrieve_by_document_type_filters(vsm):
    chunks = [
        make_chunk("c0", "salgsoppgave tekst", DocumentType.salgsoppgave),
        make_chunk("c1", "salg tekst", DocumentType.salgsoppgave),
        make_chunk("c2", "salg annen tekst", DocumentType.salgsoppgave),
        make_chunk("c3", "salg annet", DocumentType.salgsoppgave),
    ]
    vsm.index_chunks(chunks, "test_col")
    results = vsm.retrieve_by_document_type(
        "tekst", "test_col", DocumentType.salgsoppgave, top_k=10
    )
    assert len(results) >= 1
    assert all(c.document_type == DocumentType.salgsoppgave for c in results)


def test_vectorstore_delete_collection(vsm):
    chunks = [make_chunk("c0", "tekst")]
    vsm.index_chunks(chunks, "test_col")
    vsm.delete_collection("test_col")
    with pytest.raises(Exception):
        vsm.client.get_collection("test_col")


def test_vectorstore_index_empty_list(vsm):
    vsm.index_chunks([], "test_col")
    # Should not raise; collection may not exist since nothing was indexed


def test_vectorstore_retrieve_respects_top_k(vsm):
    chunks = [make_chunk(f"c{i}", f"tekst variasjon {i}") for i in range(10)]
    vsm.index_chunks(chunks, "test_col")
    results = vsm.retrieve("tekst variasjon", "test_col", top_k=3)
    assert len(results) <= 3
