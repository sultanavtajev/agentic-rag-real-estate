import logging
from typing import Protocol, runtime_checkable

import voyageai

logger = logging.getLogger(__name__)


@runtime_checkable
class EmbeddingProvider(Protocol):
    """Protocol for embedding-leverandører."""

    def embed_documents(self, texts: list[str]) -> list[list[float]]:
        """Embed en liste med dokumenttekster."""
        ...

    def embed_query(self, text: str) -> list[float]:
        """Embed en enkelt søketekst."""
        ...


class VoyageAIEmbeddings:
    """Embedding-leverandør via Voyage AI API."""

    def __init__(self, api_key: str, model: str = "voyage-3-large") -> None:
        """Initialiser Voyage AI-klient.

        Args:
            api_key: Voyage AI API-nøkkel.
            model: Modellnavn for embeddings.
        """
        self.model = model
        self.client = voyageai.Client(api_key=api_key)

    def embed_documents(self, texts: list[str], batch_size: int = 50) -> list[list[float]]:
        """Embed dokumenttekster via Voyage AI i batches.

        Args:
            texts: Liste med tekster å embedde.
            batch_size: Maks antall tekster per API-kall.

        Returns:
            Liste med embedding-vektorer.
        """
        if not texts:
            return []
        all_embeddings: list[list[float]] = []
        for i in range(0, len(texts), batch_size):
            batch = texts[i : i + batch_size]
            result = self.client.embed(batch, model=self.model, input_type="document")
            all_embeddings.extend(result.embeddings)
            logger.info("Embedded batch %d-%d av %d", i + 1, i + len(batch), len(texts))
        return all_embeddings

    def embed_query(self, text: str) -> list[float]:
        """Embed en søketekst via Voyage AI.

        Args:
            text: Søketekst å embedde.

        Returns:
            Embedding-vektor.
        """
        result = self.client.embed([text], model=self.model, input_type="query")
        return result.embeddings[0]
