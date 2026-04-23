"""Sammenligning av evalueringsresultater mellom ulike analysesystemer."""

import csv
import logging
from datetime import datetime
from itertools import combinations
from pathlib import Path
from uuid import uuid4

import numpy as np
from pydantic import BaseModel, Field

from src.models.schemas import EvaluationResult

logger = logging.getLogger(__name__)


class ComparisonReport(BaseModel):
    """Rapport fra sammenligning av flere analysesystemer."""

    system_results: dict[str, EvaluationResult] = Field(
        description="Evalueringsresultat per system, noekkel = system_type",
    )
    best_system: str = Field(
        description="System med hoeyest overall F1-score",
    )
    statistical_tests: dict[str, float] = Field(
        description="P-verdier fra parvise tester, noekkel = systemA_vs_systemB",
    )


class RiskSummary(BaseModel):
    """Oppsummering av risikoer for ett system."""

    system_type: str
    total_risks: int
    risks_by_category: dict[str, int]


class EnrichedComparisonReport(ComparisonReport):
    """Utvidet sammenligningsrapport med risiko-oppsummeringer og overlap."""

    record_id: str = Field(
        default_factory=lambda: str(uuid4()),
        description="Unik ID for denne evalueringsrapporten",
    )
    query: str = Field(default="", description="Sporringen som ble brukt i analysen")
    document_set_id: str = Field(default="", description="ID til dokumentsettet")
    timestamp: datetime = Field(
        default_factory=datetime.now,
        description="Tidspunkt for evalueringen",
    )
    risk_summaries: list[RiskSummary] = Field(default_factory=list)
    has_ground_truth: bool = False
    overlapping_risk_count: int = 0
    unique_to: dict[str, int] = Field(default_factory=dict)
    record_type: str = Field(
        default="comparison",
        description="Alltid 'comparison' for sammenligningsrapporter",
    )


class SingleEvaluationRecord(BaseModel):
    """Lagret enkelt-evaluering med metadata."""

    record_id: str = Field(default_factory=lambda: str(uuid4()))
    evaluation: EvaluationResult
    query: str = Field(default="")
    document_set_id: str = Field(default="")
    timestamp: datetime = Field(default_factory=datetime.now)
    record_type: str = Field(
        default="single",
        description="Alltid 'single' for enkelt-evalueringer",
    )


class SystemComparator:
    """Sammenligner evalueringsresultater fra flere systemer."""

    def compare(self, results: list[EvaluationResult]) -> ComparisonReport:
        """Sammenlign evalueringsresultater og finn beste system.

        Args:
            results: Liste med evalueringsresultater fra ulike systemer.

        Returns:
            ComparisonReport med resultater, beste system og statistiske tester.
        """
        system_results = {r.system_type: r for r in results}

        best_system = max(
            system_results,
            key=lambda s: system_results[s].overall_metrics.f1,
        )

        statistical_tests = self._run_pairwise_tests(system_results)

        logger.info("Beste system: %s", best_system)
        return ComparisonReport(
            system_results=system_results,
            best_system=best_system,
            statistical_tests=statistical_tests,
        )

    def _run_pairwise_tests(self, system_results: dict[str, EvaluationResult]) -> dict[str, float]:
        """Kjoer parvise bootstrap-tester mellom alle systemer."""
        tests: dict[str, float] = {}
        systems = list(system_results.keys())

        for sys_a, sys_b in combinations(systems, 2):
            scores_a = _extract_f1_scores(system_results[sys_a])
            scores_b = _extract_f1_scores(system_results[sys_b])
            p_value = paired_bootstrap_test(scores_a, scores_b)
            tests[f"{sys_a}_vs_{sys_b}"] = p_value

        return tests


def _extract_f1_scores(result: EvaluationResult) -> list[float]:
    """Hent F1-score fra et evalueringsresultat."""
    return [result.overall_metrics.f1]


def paired_bootstrap_test(
    scores_a: list[float],
    scores_b: list[float],
    n_iterations: int = 10000,
) -> float:
    """Parvis bootstrap-test for statistisk signifikans.

    Args:
        scores_a: F1-scores per kategori for system A.
        scores_b: F1-scores per kategori for system B.
        n_iterations: Antall bootstrap-iterasjoner.

    Returns:
        P-verdi mellom 0.0 og 1.0.
    """
    if not scores_a or not scores_b:
        return 1.0

    arr_a = np.array(scores_a)
    arr_b = np.array(scores_b)
    observed_diff = float(np.mean(arr_a) - np.mean(arr_b))

    rng = np.random.default_rng(seed=42)
    n = len(arr_a)
    count = 0

    for _ in range(n_iterations):
        indices = rng.integers(0, n, size=n)
        sampled_diff = float(np.mean(arr_a[indices]) - np.mean(arr_b[indices]))

        if observed_diff >= 0 and sampled_diff >= observed_diff:
            count += 1
        elif observed_diff < 0 and sampled_diff <= observed_diff:
            count += 1

    return count / n_iterations


def export_latex_table(report: ComparisonReport) -> str:
    """Generer LaTeX-tabell med P/R/F1 per system per kategori.

    Args:
        report: ComparisonReport med resultater og statistiske tester.

    Returns:
        Komplett LaTeX-tabell som string.
    """
    lines = [
        r"\begin{tabular}{l r r r}",
        r"\hline",
        r"System & P & R & F1 \\",
        r"\hline",
    ]

    sig_systems = _find_significant_systems(report)

    for system_type, result in report.system_results.items():
        name = f"{system_type}*" if system_type in sig_systems else system_type
        om = result.overall_metrics
        is_best_overall = system_type == report.best_system
        f1_str = _format_metric(om.f1, is_best_overall)
        lines.append(f"{name} & {om.precision:.3f} & {om.recall:.3f} & {f1_str} \\\\")
        lines.append(r"\hline")

    lines.append(r"\end{tabular}")
    return "\n".join(lines)


def _find_significant_systems(report: ComparisonReport) -> set[str]:
    """Finn systemer som har minst en signifikant forskjell (p < 0.05)."""
    sig: set[str] = set()
    for key, p_val in report.statistical_tests.items():
        if p_val < 0.05:
            parts = key.split("_vs_")
            sig.update(parts)
    return sig


def _format_metric(value: float, is_best: bool) -> str:
    """Formater metrikkverdi, uthev med textbf hvis best."""
    formatted = f"{value:.3f}"
    if is_best:
        return rf"\textbf{{{formatted}}}"
    return formatted


def export_csv(report: ComparisonReport, path: Path) -> None:
    """Skriv evalueringsresultater til CSV.

    Args:
        report: ComparisonReport med resultater.
        path: Filsti for CSV-output.
    """
    with path.open("w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow(["system", "precision", "recall", "f1", "support"])

        for system_type, result in report.system_results.items():
            om = result.overall_metrics
            writer.writerow(
                [
                    system_type,
                    f"{om.precision:.4f}",
                    f"{om.recall:.4f}",
                    f"{om.f1:.4f}",
                    om.total_support,
                ]
            )

    logger.info("CSV eksportert til %s", path)
