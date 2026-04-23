"""CLI for agentic RAG-analyse av eiendomsdokumenter."""

import logging
from pathlib import Path

import typer
from rich.console import Console
from rich.table import Table

from src.agentic_rag.config import AblationConfig
from src.agentic_rag.orchestrator import AgenticRAGOrchestrator
from src.config import get_settings
from src.models.schemas import AnalysisResult
from src.retrieval.embeddings import VoyageAIEmbeddings
from src.retrieval.vector_store import VectorStoreManager
from src.utils.logging_config import setup_logging

app = typer.Typer(help="Kjor agentic RAG-analyse pa eiendomsdokumenter.")
console = Console()
logger = logging.getLogger(__name__)


def _display_results(result: AnalysisResult, config_label: str) -> None:
    """Vis analyseresultater med Rich-formatering.

    Args:
        result: Analyseresultat fra orchestrator.
        config_label: Ablation-konfigurasjonslabel.
    """
    console.print(
        f"\n[bold green]Agentic analyse ferdig[/] — "
        f"config: [bold]{config_label}[/], run_id: {result.run_id}"
    )

    table = Table(title=f"Identifiserte risikoer ({config_label})")
    table.add_column("Severity", style="bold")
    table.add_column("Kategori")
    table.add_column("Beskrivelse")
    table.add_column("Confidence", justify="right")

    for risk in result.risks:
        severity_style = {
            "critical": "red",
            "warning": "yellow",
            "info": "blue",
        }.get(risk.severity.value, "white")
        table.add_row(
            f"[{severity_style}]{risk.severity.value}[/]",
            risk.category.value,
            risk.description[:80],
            f"{risk.confidence:.2f}",
        )

    console.print(table)
    console.print(f"\nTotalt: [bold]{len(result.risks)}[/] risikoer identifisert.")


@app.command()
def main(
    document_set_id: str = typer.Argument(help="ID for dokumentsettet"),
    query: str = typer.Argument(help="Analysesporsmalet"),
    output_path: Path | None = typer.Option(None, help="Lagre resultat som JSON"),
    planning: bool = typer.Option(True, "--planning/--no-planning", help="Aktiver planlegging"),
    tool_use: bool = typer.Option(True, "--tool-use/--no-tool-use", help="Aktiver verktoybruk"),
    reflection: bool = typer.Option(
        True, "--reflection/--no-reflection", help="Aktiver refleksjon"
    ),
) -> None:
    """Kjor agentic RAG-analyse med konfigurerbare komponenter."""
    setup_logging()
    settings = get_settings()

    config = AblationConfig(
        planning_enabled=planning,
        tool_use_enabled=tool_use,
        reflection_enabled=reflection,
    )

    embeddings = VoyageAIEmbeddings(api_key=settings.voyage_api_key, model=settings.voyage_model)
    vector_store = VectorStoreManager(embeddings, settings.chroma_persist_dir)
    orchestrator = AgenticRAGOrchestrator(settings, vector_store, config)

    result = orchestrator.analyze(document_set_id, query)
    _display_results(result, config.label())

    if output_path:
        output_path.write_text(result.model_dump_json(indent=2), encoding="utf-8")
        console.print(f"Resultat lagret til [bold]{output_path}[/]")


if __name__ == "__main__":
    app()
