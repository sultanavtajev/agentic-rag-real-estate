"""CLI for ablasjonsstudie — kjorer alle 5 konfigurasjoner."""

import logging
from pathlib import Path

import typer
from rich.console import Console
from rich.progress import Progress
from rich.table import Table

from src.agentic_rag.config import (
    FULL_AGENTIC,
    NO_PLANNING,
    NO_REFLECTION,
    NO_TOOL_USE,
    NONE_AGENTIC,
)
from src.agentic_rag.orchestrator import AgenticRAGOrchestrator
from src.config import get_settings
from src.evaluation.metrics import (
    RiskMatcher,
    compute_category_metrics,
    compute_overall_metrics,
)
from src.models.schemas import GroundTruthAnnotation
from src.retrieval.embeddings import VoyageAIEmbeddings
from src.retrieval.vector_store import VectorStoreManager
from src.utils.logging_config import setup_logging

app = typer.Typer(help="Kjor ablasjonsstudie med alle 5 konfigurasjoner.")
console = Console()
logger = logging.getLogger(__name__)

ALL_CONFIGS = [FULL_AGENTIC, NO_PLANNING, NO_TOOL_USE, NO_REFLECTION, NONE_AGENTIC]


def _run_all_configs(
    document_set_id: str,
    query: str,
    vector_store: VectorStoreManager,
    settings: object,
) -> dict[str, object]:
    """Kjor analyse for alle ablasjonskonfigurasjoner.

    Args:
        document_set_id: ID for dokumentsettet.
        query: Analysesporsmalet.
        vector_store: VectorStoreManager-instans.
        settings: Prosjektkonfigurasjon.

    Returns:
        Dict med config-label som noekkel og AnalysisResult som verdi.
    """
    results = {}
    with Progress(console=console) as progress:
        task = progress.add_task("Kjorer ablasjonsstudie...", total=len(ALL_CONFIGS))
        for config in ALL_CONFIGS:
            label = config.label()
            progress.update(task, description=f"Kjorer {label}...")
            orchestrator = AgenticRAGOrchestrator(settings, vector_store, config)
            results[label] = orchestrator.analyze(document_set_id, query)
            progress.advance(task)
    return results


def _evaluate_and_display(results: dict, ground_truth_path: Path) -> None:
    """Evaluer resultater mot ground truth og vis metrikkstabell.

    Args:
        results: Dict med config-label og AnalysisResult.
        ground_truth_path: Sti til ground truth JSON-fil.
    """
    gt_text = ground_truth_path.read_text(encoding="utf-8")
    gt = GroundTruthAnnotation.model_validate_json(gt_text)
    matcher = RiskMatcher()

    table = Table(title="Ablasjonsstudie — Evalueringsmetrikker")
    table.add_column("Config", style="bold")
    table.add_column("P", justify="right")
    table.add_column("R", justify="right")
    table.add_column("F1", justify="right")

    for label, result in results.items():
        match_result = matcher.match(result.risks, gt.risks)
        cat_metrics = compute_category_metrics(match_result)
        overall = compute_overall_metrics(cat_metrics)
        table.add_row(
            label,
            f"{overall.precision:.3f}",
            f"{overall.recall:.3f}",
            f"{overall.f1:.3f}",
        )

    console.print(table)


def _save_results(results: dict, output_dir: Path) -> None:
    """Lagre alle resultater som JSON-filer.

    Args:
        results: Dict med config-label og AnalysisResult.
        output_dir: Katalog for output-filer.
    """
    output_dir.mkdir(parents=True, exist_ok=True)
    for label, result in results.items():
        filename = f"ablation_{label.replace('+', '_')}.json"
        path = output_dir / filename
        path.write_text(result.model_dump_json(indent=2), encoding="utf-8")
    console.print(f"Resultater lagret i [bold]{output_dir}[/]")


@app.command()
def main(
    document_set_id: str = typer.Argument(help="ID for dokumentsettet"),
    query: str = typer.Argument(help="Analysesporsmalet"),
    ground_truth_path: Path | None = typer.Option(None, help="Sti til ground truth JSON-fil"),
    output_dir: Path | None = typer.Option(None, help="Katalog for output-filer"),
) -> None:
    """Kjor ablasjonsstudie med alle 5 agentic RAG-konfigurasjoner."""
    setup_logging()
    settings = get_settings()

    embeddings = VoyageAIEmbeddings(api_key=settings.voyage_api_key, model=settings.voyage_model)
    vector_store = VectorStoreManager(embeddings, settings.chroma_persist_dir)

    results = _run_all_configs(document_set_id, query, vector_store, settings)

    console.print(f"\n[bold green]Ablasjonsstudie ferdig[/] — {len(results)} konfigurasjoner kjort")

    if ground_truth_path:
        _evaluate_and_display(results, ground_truth_path)

    if output_dir:
        _save_results(results, output_dir)


if __name__ == "__main__":
    app()
