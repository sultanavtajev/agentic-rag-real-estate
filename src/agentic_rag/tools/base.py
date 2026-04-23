"""Basis-protocol for agent-verktoy."""

from typing import Protocol, runtime_checkable

from src.models.schemas import DocumentChunk


@runtime_checkable
class AgentTool(Protocol):
    """Protocol for agent-verktoy."""

    name: str
    description: str

    def execute(self, query: str, context: dict) -> list[DocumentChunk]:
        """Kjor verktøyet med gitt query og kontekst."""
        ...
