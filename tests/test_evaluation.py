"""Tester for evalueringsmodulen (metrics og comparator)."""

import csv

import pytest

from src.evaluation.comparator import (
    ComparisonReport,
    export_csv,
    export_latex_table,
    paired_bootstrap_test,
)
from src.evaluation.metrics import (
    MatchResult,
    RiskMatcher,
    compute_overall_metrics,
)
from src.models.schemas import (
    EvaluationResult,
    GroundTruthRisk,
    IdentifiedRisk,
    OverallMetrics,
)


def _make_predicted_risk(
    description: str,
    evidence: list[str],
) -> IdentifiedRisk:
    return IdentifiedRisk(
        risk_id="pred-1",
        description=description,
        evidence=evidence,
        source_documents=["doc-1"],
        source_pages=[1],
        confidence=0.9,
    )


def _make_ground_truth_risk(
    description: str,
    evidence: list[str],
) -> GroundTruthRisk:
    return GroundTruthRisk(
        risk_id="gt-1",
        description=description,
        evidence=evidence,
        source_documents=["doc-1"],
        source_pages=[1],
    )


def _make_evaluation_result(
    system_type: str,
    overall: OverallMetrics,
) -> EvaluationResult:
    return EvaluationResult(
        run_id="run-1",
        system_type=system_type,
        overall_metrics=overall,
        matched_risks=2,
        unmatched_predicted=1,
        unmatched_ground_truth=1,
    )


class TestRiskMatcher:
    def test_risk_matcher_matches_with_text_overlap(self):
        """Risikoer med overlappende tekst skal matches."""
        pred1 = _make_predicted_risk(
            "fukt i kjeller med vannskader",
            ["fuktskader pavist i kjeller"],
        )
        pred2 = _make_predicted_risk(
            "avvik i areal for loft",
            ["loftareal maalt til 25 kvm mot oppgitt 30"],
        )
        gt1 = _make_ground_truth_risk(
            "fukt i kjeller med vannskader observert",
            ["fuktskader i kjeller dokumentert"],
        )
        gt2 = _make_ground_truth_risk(
            "avvik i areal for loft registrert",
            ["loftareal maalt til 25 kvm mot oppgitt 30 kvm"],
        )

        matcher = RiskMatcher()
        result = matcher.match([pred1, pred2], [gt1, gt2])

        assert len(result.matched_pairs) == 2
        assert result.unmatched_predicted == []
        assert result.unmatched_ground_truth == []

    def test_risk_matcher_returns_unmatched(self):
        """Risikoer med ingen tekstoverlapp skal vaere umatchet."""
        pred = _make_predicted_risk(
            "fukt i kjeller",
            ["fuktskader"],
        )
        gt = _make_ground_truth_risk(
            "manglende klausul i kontrakt",
            ["kontrakt paragraf 5"],
        )

        matcher = RiskMatcher()
        result = matcher.match([pred], [gt])

        assert result.matched_pairs == []
        assert len(result.unmatched_predicted) == 1
        assert len(result.unmatched_ground_truth) == 1


class TestOverallMetrics:
    def test_compute_overall_metrics_from_match_result(self):
        """Overall metrikker skal beregnes fra MatchResult."""
        pred1 = _make_predicted_risk("risiko A", ["bevis A"])
        gt1 = _make_ground_truth_risk("risiko A", ["bevis A"])
        pred2 = _make_predicted_risk("risiko B", ["bevis B"])
        gt2 = _make_ground_truth_risk("risiko B", ["bevis B"])
        unmatched_pred = _make_predicted_risk("risiko C", ["bevis C"])
        unmatched_gt = _make_ground_truth_risk("risiko D", ["bevis D"])

        match_result = MatchResult(
            matched_pairs=[(pred1, gt1), (pred2, gt2)],
            unmatched_predicted=[unmatched_pred],
            unmatched_ground_truth=[unmatched_gt],
        )

        # 2 TP, 1 FP, 1 FN -> P=2/3, R=2/3, F1=2/3
        overall = compute_overall_metrics(match_result)

        assert overall.precision == pytest.approx(2 / 3)
        assert overall.recall == pytest.approx(2 / 3)
        assert overall.f1 == pytest.approx(2 / 3)
        assert overall.total_support == 3


class TestBootstrap:
    def test_paired_bootstrap_returns_valid_pvalue(self):
        """P-verdi fra bootstrap-test skal vaere mellom 0.0 og 1.0."""
        scores_a = [0.8, 0.7, 0.9]
        scores_b = [0.6, 0.5, 0.7]

        p_value = paired_bootstrap_test(scores_a, scores_b)

        assert 0.0 <= p_value <= 1.0

    def test_paired_bootstrap_identical_scores_high_pvalue(self):
        """Identiske scores skal gi p-verdi naer 1.0."""
        scores = [0.7, 0.7, 0.7]

        p_value = paired_bootstrap_test(scores, scores)

        assert p_value >= 0.9


class TestExportLatex:
    def test_export_latex_table_valid(self):
        """LaTeX-tabell skal inneholde tabular-environment og textbf for beste verdier."""
        result_a = _make_evaluation_result(
            "standard_rag",
            OverallMetrics(precision=0.8, recall=0.7, f1=0.745, total_support=5),
        )
        result_b = _make_evaluation_result(
            "agentic_rag",
            OverallMetrics(precision=0.6, recall=0.5, f1=0.545, total_support=5),
        )

        report = ComparisonReport(
            system_results={
                "standard_rag": result_a,
                "agentic_rag": result_b,
            },
            best_system="standard_rag",
            statistical_tests={"standard_rag_vs_agentic_rag": 0.03},
        )

        latex = export_latex_table(report)

        assert r"\begin{tabular}" in latex
        assert r"\end{tabular}" in latex
        assert r"\textbf" in latex


class TestExportCsv:
    def test_export_csv_writes_file(self, tmp_path):
        """CSV-export skal skrive korrekt header og data."""
        result_a = _make_evaluation_result(
            "standard_rag",
            OverallMetrics(precision=0.8, recall=0.7, f1=0.745, total_support=5),
        )
        result_b = _make_evaluation_result(
            "agentic_rag",
            OverallMetrics(precision=0.6, recall=0.5, f1=0.545, total_support=5),
        )

        report = ComparisonReport(
            system_results={
                "standard_rag": result_a,
                "agentic_rag": result_b,
            },
            best_system="standard_rag",
            statistical_tests={"standard_rag_vs_agentic_rag": 0.03},
        )

        csv_path = tmp_path / "results.csv"
        export_csv(report, csv_path)

        assert csv_path.exists()

        with csv_path.open(encoding="utf-8") as f:
            reader = list(csv.reader(f))

        header = reader[0]
        assert header == ["system", "precision", "recall", "f1", "support"]

        # 2 systems x 1 overall = 2 data rows + 1 header
        assert len(reader) == 3

        # Verify values are parseable floats
        for row in reader[1:]:
            assert len(row) == 5
            float(row[2])  # precision
            float(row[3])  # recall
            float(row[4])  # f1
