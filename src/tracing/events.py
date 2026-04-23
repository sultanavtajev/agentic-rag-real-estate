"""Event-modeller for SSE-fremdriftsrapportering."""

from pydantic import BaseModel


class StepProgressEvent(BaseModel):
    """Fremdriftsevent som sendes via SSE til frontend."""

    step: str  # "agentic_rag", "standard_rag", "ground_truth", "evaluation"
    substep: str  # "planning", "retrieving", "reasoning", "reflecting", etc.
    status: str  # "running", "done", "error"
    detail: str = ""  # "Genererer 4 delsporsmal..."
    iteration: int = 0
