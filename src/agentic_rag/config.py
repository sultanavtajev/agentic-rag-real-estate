"""Konfigurasjon for ablasjonsstudie av agentic RAG-komponenter."""

from pydantic import BaseModel


class AblationConfig(BaseModel):
    """Konfigurasjon for ablasjonsstudie av agentic RAG-komponenter."""

    planning_enabled: bool = True
    tool_use_enabled: bool = True
    reflection_enabled: bool = True

    def label(self) -> str:
        """Generer kort label for denne konfigurasjonen."""
        parts = []
        if self.planning_enabled:
            parts.append("P")
        if self.tool_use_enabled:
            parts.append("T")
        if self.reflection_enabled:
            parts.append("R")
        return "+".join(parts) if parts else "NONE"


FULL_AGENTIC = AblationConfig(planning_enabled=True, tool_use_enabled=True, reflection_enabled=True)
NO_PLANNING = AblationConfig(planning_enabled=False, tool_use_enabled=True, reflection_enabled=True)
NO_TOOL_USE = AblationConfig(planning_enabled=True, tool_use_enabled=False, reflection_enabled=True)
NO_REFLECTION = AblationConfig(
    planning_enabled=True, tool_use_enabled=True, reflection_enabled=False
)
NONE_AGENTIC = AblationConfig(
    planning_enabled=False, tool_use_enabled=False, reflection_enabled=False
)
ONLY_PLANNING = AblationConfig(
    planning_enabled=True, tool_use_enabled=False, reflection_enabled=False
)
ONLY_TOOL_USE = AblationConfig(
    planning_enabled=False, tool_use_enabled=True, reflection_enabled=False
)
ONLY_REFLECTION = AblationConfig(
    planning_enabled=False, tool_use_enabled=False, reflection_enabled=True
)
