"""TraceCollector — samler SSE-events og lagrer LLM-kall som .md-filer."""

import json
import logging
import queue
import time
from datetime import datetime, timezone
from pathlib import Path

from src.tracing.events import StepProgressEvent

logger = logging.getLogger(__name__)

TRACES_BASE_DIR = Path("data/traces")


class TraceCollector:
    """Thread-safe samler for fremdriftsevents og LLM-trace-filer.

    Brukes av sync-pipelines til a pushe events pa en ko som leses
    asynkront av SSE-endepunktet.
    """

    def __init__(self, run_id: str) -> None:
        self.run_id = run_id
        self.traces_dir = TRACES_BASE_DIR / run_id
        self.traces_dir.mkdir(parents=True, exist_ok=True)
        self.queue: queue.Queue[StepProgressEvent | None] = queue.Queue()
        self._call_counter = 0

    def emit_step(
        self,
        step: str,
        substep: str,
        status: str,
        detail: str = "",
        iteration: int = 0,
    ) -> None:
        """Push et fremdriftsevent pa koen."""
        event = StepProgressEvent(
            step=step,
            substep=substep,
            status=status,
            detail=detail,
            iteration=iteration,
        )
        self.queue.put(event)
        logger.debug("SSE event: %s/%s -> %s", step, substep, status)

    def record_llm_call(
        self,
        step_name: str,
        system_prompt: str,
        user_prompt: str,
        response: object,
        duration_s: float,
    ) -> None:
        """Skriv en .md trace-fil for et LLM-kall."""
        self._call_counter += 1
        timestamp = datetime.now(timezone.utc).isoformat()

        # Trekk ut bruksdata og innhold fra Anthropic-respons
        input_tokens = 0
        output_tokens = 0
        response_text = ""
        raw_json = ""

        if hasattr(response, "usage"):
            input_tokens = getattr(response.usage, "input_tokens", 0)
            output_tokens = getattr(response.usage, "output_tokens", 0)

        if hasattr(response, "content"):
            parts = []
            for block in response.content:
                if hasattr(block, "text"):
                    parts.append(block.text)
                elif hasattr(block, "input"):
                    parts.append(
                        f"[tool_use: {getattr(block, 'name', '?')}]\n"
                        f"{json.dumps(block.input, ensure_ascii=False, indent=2)}"
                    )
            response_text = "\n\n".join(parts)

        try:
            if hasattr(response, "model_dump"):
                raw_json = json.dumps(response.model_dump(), ensure_ascii=False, indent=2)
            else:
                raw_json = str(response)
        except Exception:
            raw_json = str(response)

        md = (
            f"# Trace: {step_name}\n"
            f"- **Run ID:** {self.run_id}\n"
            f"- **Tidspunkt:** {timestamp}\n"
            f"- **Varighet:** {duration_s:.2f}s\n"
            f"- **Input tokens:** {input_tokens}\n"
            f"- **Output tokens:** {output_tokens}\n\n"
            f"## System Prompt\n{system_prompt}\n\n"
            f"## User Prompt\n{user_prompt}\n\n"
            f"## Response\n{response_text}\n\n"
            f"## Raw Response\n```json\n{raw_json}\n```\n"
        )

        filename = f"{self._call_counter:02d}_{step_name}.md"
        filepath = self.traces_dir / filename
        filepath.write_text(md, encoding="utf-8")
        logger.debug("Trace lagret: %s", filepath)

    def wrap_call(
        self,
        step_name: str,
        system_prompt: str,
        user_prompt: str,
        callable_fn: object,
        *args: object,
        **kwargs: object,
    ) -> object:
        """Timer og registrer et LLM-kall.

        Args:
            step_name: Navn pa steget (brukes i filnavn).
            system_prompt: System-prompten sendt til LLM.
            user_prompt: User-prompten sendt til LLM.
            callable_fn: Funksjon som kaller LLM-en.
            *args: Argumenter til callable_fn.
            **kwargs: Keyword-argumenter til callable_fn.

        Returns:
            Responsen fra callable_fn.
        """
        start = time.time()
        result = callable_fn(*args, **kwargs)  # type: ignore[operator]
        duration = time.time() - start
        self.record_llm_call(step_name, system_prompt, user_prompt, result, duration)
        return result

    def done(self) -> None:
        """Signal at alle events er sendt (sentinel)."""
        self.queue.put(None)
