import logging

from rich.logging import RichHandler


def setup_logging(level: str = "INFO") -> None:
    """Konfigurer Python logging med Rich handler.

    Args:
        level: Loggnivå (DEBUG, INFO, WARNING, ERROR, CRITICAL).
    """
    logging.basicConfig(
        level=getattr(logging, level.upper(), logging.INFO),
        format="%(message)s",
        datefmt="[%X]",
        handlers=[RichHandler(rich_tracebacks=True, markup=True)],
        force=True,
    )
