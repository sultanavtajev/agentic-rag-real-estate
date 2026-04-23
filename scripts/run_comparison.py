"""CLI for sammenligning av evalueringsresultater."""

import logging
from pathlib import Path

import typer
from rich.console import Console
from rich.table import Table

from src.evaluation.comparator import (
    SystemComparator,
    export_csv,
    export_latex_table,
)
from src.models.schemas import EvaluationResult
from src.utils.logging_config import setup_logging

app = typer.Typer(help="Sammenlign evalueringsresultater fra ulike systemer.")
console = Console()
logger = logging.getLogger(__name__)


def _load_results(results_dir: Path) -> list[EvaluationResult]:
    """Les alle JSON-evalueringsresultater fra en katalog.

    Args:
        results_dir: Katalog med JSON-filer.

    Returns:
        Liste med EvaluationResult-objekter.

    Raises:
        FileNotFoundError: Hvis katalogen ikke finnes.
        ValueError: Hvis ingen JSON-filer finnes i katalogen.
    """
    if not results_dir.is_dir():
        raise FileNotFoundError(f"Katalogen finnes ikke: {results_dir}")

    json_files = sorted(results_dir.glob("*.json"))
    if not json_files:
        raise ValueError(f"Ingen JSON-filer funnet i {results_dir}")

    results = []
    for path in json_files:
        text = path.read_text(encoding="utf-8")
        results.append(EvaluationResult.model_validate_json(text))
        logger.info("Lastet %s", path.name)

    return results


def _display_report(report: object) -> None:
    """Vis sammenligningsrapport med Rich-formatering.

    Args:
        report: ComparisonReport fra SystemComparator.
    """
    table = Table(title="Systemsammenligning")
    table.add_column("System", style="bold")
    table.add_column("P", justify="right")
    table.add_column("R", justify="right")
    table.add_column("F1", justify="right")
    table.add_column("Signifikans", justify="center")

    sig_pairs = {k: v for k, v in report.statistical_tests.items() if v < 0.05}

    for system_type, result in report.system_results.items():
        om = result.overall_metrics
        is_sig = any(system_type in k for k in sig_pairs)
        sig_marker = "* (p<0.05)" if is_sig else ""
        table.add_row(
            system_type,
            f"{om.precision:.3f}",
            f"{om.recall:.3f}",
            f"{om.f1:.3f}",
            sig_marker,
        )

    console.print(table)
    console.print(f"\nBeste system: [bold green]{report.best_system}[/]")


@app.command()
def main(
    results_dir: Path = typer.Argument(help="Katalog med evalueringsresultater (JSON)"),
    output_path: Path | None = typer.Option(None, help="Lagre rapport som JSON eller CSV"),
    latex: bool = typer.Option(False, help="Generer LaTeX-tabell"),
) -> None:
    """Sammenlign evalueringsresultater fra ulike analysesystemer."""
    setup_logging()

    results = _load_results(results_dir)
    console.print(f"Lastet [bold]{len(results)}[/] evalueringsresultater")

    comparator = SystemComparator()
    report = comparator.compare(results)
    _display_report(report)

    if latex:
        latex_table = export_latex_table(report)
        console.print("\n[bold]LaTeX-tabell:[/]")
        console.print(latex_table)
        if output_path and output_path.suffix == ".tex":
            output_path.write_text(latex_table, encoding="utf-8")
            console.print(f"LaTeX lagret til [bold]{output_path}[/]")

    if output_path:
        if output_path.suffix == ".csv":
            export_csv(report, output_path)
            console.print(f"CSV lagret til [bold]{output_path}[/]")
        elif output_path.suffix == ".json":
            output_path.write_text(report.model_dump_json(indent=2), encoding="utf-8")
            console.print(f"Rapport lagret til [bold]{output_path}[/]")


if __name__ == "__main__":
    app()
