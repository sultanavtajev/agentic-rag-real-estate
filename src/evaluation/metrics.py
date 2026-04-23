"""Evalueringsmetrikker for matching og scoring av identifiserte risikoer."""

import json
import logging

import anthropic
from pydantic import BaseModel

from src.config import Settings
from src.models.schemas import (
    GroundTruthRisk,
    IdentifiedRisk,
    OverallMetrics,
)

logger = logging.getLogger(__name__)

MATCH_RISKS_TOOL = {
    "name": "match_risks",
    "description": "Match risikoer fra analysesystemer mot ground truth.",
    "input_schema": {
        "type": "object",
        "properties": {
            "matches": {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                        "ground_truth_risk_id": {"type": "string"},
                        "matched_systems": {
                            "type": "object",
                            "additionalProperties": {"type": "string"},
                        },
                    },
                    "required": ["ground_truth_risk_id", "matched_systems"],
                },
            },
            "unmatched_by_system": {
                "type": "object",
                "additionalProperties": {
                    "type": "array",
                    "items": {"type": "string"},
                },
            },
            "unmatched_ground_truth": {
                "type": "array",
                "items": {"type": "string"},
            },
        },
        "required": ["matches", "unmatched_by_system", "unmatched_ground_truth"],
    },
}

_MATCH_SYSTEM_PROMPT = (
    "Du er en ekspert paa aa sammenligne risikoer i eiendomsdokumenter. "
    "Du faar risikoer identifisert av ulike analysesystemer og en ground truth (fasit). "
    "Din oppgave er aa avgjore hvilke risikoer som handler om SAMME underliggende problem. "
    "To risikoer matcher hvis de beskriver samme reelle risiko, "
    "selv om ordlyden er helt forskjellig. "
    "Hver ground truth-risiko kan matche mot maks en risiko per system. "
    "Hver system-risiko kan matche mot maks en ground truth-risiko."
)


class MatchResult(BaseModel):
    """Resultat av matching mellom predikerte og ground truth-risikoer."""

    matched_pairs: list[tuple[IdentifiedRisk, GroundTruthRisk]]
    matched_scores: list[float] = []
    unmatched_predicted: list[IdentifiedRisk]
    unmatched_ground_truth: list[GroundTruthRisk]


class LLMRiskMatcher:
    """Matcher risikoer via Claude API for semantisk forstaelse."""

    def __init__(self, settings: Settings) -> None:
        self.client = anthropic.Anthropic(api_key=settings.anthropic_api_key)
        self.model = settings.claude_model

    def match_all(
        self,
        systems: dict[str, list[IdentifiedRisk]],
        ground_truth: list[GroundTruthRisk],
    ) -> dict[str, MatchResult]:
        """Match risikoer fra alle systemer mot ground truth i ett kall.

        Args:
            systems: Dict med system_type -> liste med risikoer.
            ground_truth: Ground truth-risikoer.

        Returns:
            Dict med system_type -> MatchResult.
        """
        if not ground_truth:
            return {
                sys: MatchResult(
                    matched_pairs=[],
                    unmatched_predicted=list(risks),
                    unmatched_ground_truth=list(ground_truth),
                )
                for sys, risks in systems.items()
            }

        raw_response = self._call_claude(systems, ground_truth)
        return self._parse_response(raw_response, systems, ground_truth)

    def match(
        self,
        predicted: list[IdentifiedRisk],
        ground_truth: list[GroundTruthRisk],
    ) -> MatchResult:
        """Match en enkelt systems risikoer mot ground truth."""
        results = self.match_all({"system": predicted}, ground_truth)
        return results["system"]

    def _build_user_prompt(
        self,
        systems: dict[str, list[IdentifiedRisk]],
        ground_truth: list[GroundTruthRisk],
    ) -> str:
        """Bygg user prompt med alle risikoer som JSON."""
        systems_data = {}
        for sys_type, risks in systems.items():
            systems_data[sys_type] = [
                {
                    "risk_id": r.risk_id,
                    "description": r.description,
                    "evidence": r.evidence,
                }
                for r in risks
            ]

        gt_data = [
            {
                "risk_id": r.risk_id,
                "description": r.description,
                "evidence": r.evidence,
            }
            for r in ground_truth
        ]

        payload = {"systems": systems_data, "ground_truth": gt_data}
        return "Match risikoene fra analysesystemene mot ground truth.\n\n" + json.dumps(
            payload, ensure_ascii=False, indent=2
        )

    def _call_claude(
        self,
        systems: dict[str, list[IdentifiedRisk]],
        ground_truth: list[GroundTruthRisk],
    ) -> anthropic.types.Message:
        """Kall Claude API med match_risks tool."""
        user_prompt = self._build_user_prompt(systems, ground_truth)
        return self.client.messages.create(
            model=self.model,
            max_tokens=16384,
            temperature=0.0,
            system=_MATCH_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_prompt}],
            tools=[MATCH_RISKS_TOOL],
            tool_choice={"type": "tool", "name": "match_risks"},
        )

    def _parse_response(
        self,
        response: anthropic.types.Message,
        systems: dict[str, list[IdentifiedRisk]],
        ground_truth: list[GroundTruthRisk],
    ) -> dict[str, MatchResult]:
        """Parse Claude-respons til MatchResult per system."""
        # Bygg oppslag
        risk_by_id: dict[str, IdentifiedRisk] = {}
        for risks in systems.values():
            for r in risks:
                risk_by_id[r.risk_id] = r
        gt_by_id = {r.risk_id: r for r in ground_truth}

        # Parse tool-use respons
        raw = self._extract_tool_input(response)

        results: dict[str, MatchResult] = {}
        for sys_type, risks in systems.items():
            matched_pairs: list[tuple[IdentifiedRisk, GroundTruthRisk]] = []
            matched_pred_ids: set[str] = set()
            matched_gt_ids: set[str] = set()

            for match in raw.get("matches", []):
                gt_id = match["ground_truth_risk_id"]
                sys_risk_id = match.get("matched_systems", {}).get(sys_type)
                if sys_risk_id and gt_id in gt_by_id and sys_risk_id in risk_by_id:
                    matched_pairs.append((risk_by_id[sys_risk_id], gt_by_id[gt_id]))
                    matched_pred_ids.add(sys_risk_id)
                    matched_gt_ids.add(gt_id)

            unmatched_pred = [r for r in risks if r.risk_id not in matched_pred_ids]
            unmatched_gt = [r for r in ground_truth if r.risk_id not in matched_gt_ids]

            results[sys_type] = MatchResult(
                matched_pairs=matched_pairs,
                unmatched_predicted=unmatched_pred,
                unmatched_ground_truth=unmatched_gt,
            )

        logger.info(
            "LLM-matching: %s",
            {s: len(r.matched_pairs) for s, r in results.items()},
        )
        return results

    def _extract_tool_input(self, response: anthropic.types.Message) -> dict:
        """Hent tool-use input fra Claude-respons."""
        for block in response.content:
            if block.type == "tool_use" and block.name == "match_risks":
                return block.input
        msg = "Ingen match_risks tool_use i Claude-respons"
        raise RuntimeError(msg)


class RiskMatcher:
    """Fallback-matcher med Jaccard ordoverlapp (for tester uten API)."""

    def match(
        self,
        predicted: list[IdentifiedRisk],
        ground_truth: list[GroundTruthRisk],
    ) -> MatchResult:
        """Match predikerte risikoer mot ground truth med Jaccard."""
        candidates: list[tuple[float, int, int]] = []
        for i, pred in enumerate(predicted):
            for j, gt in enumerate(ground_truth):
                overlap = self._compute_overlap(pred, gt)
                if overlap >= 0.3:
                    candidates.append((overlap, i, j))

        candidates.sort(key=lambda x: x[0], reverse=True)

        matched_pred: set[int] = set()
        matched_gt: set[int] = set()
        matched_pairs: list[tuple[IdentifiedRisk, GroundTruthRisk]] = []
        matched_scores: list[float] = []

        for overlap, i, j in candidates:
            if i in matched_pred or j in matched_gt:
                continue
            matched_pairs.append((predicted[i], ground_truth[j]))
            matched_scores.append(overlap)
            matched_pred.add(i)
            matched_gt.add(j)

        return MatchResult(
            matched_pairs=matched_pairs,
            matched_scores=matched_scores,
            unmatched_predicted=[p for i, p in enumerate(predicted) if i not in matched_pred],
            unmatched_ground_truth=[g for j, g in enumerate(ground_truth) if j not in matched_gt],
        )

    def _compute_overlap(self, predicted: IdentifiedRisk, ground_truth: GroundTruthRisk) -> float:
        """Beregn Jaccard ordoverlapp."""
        pred_text = predicted.description + " " + " ".join(predicted.evidence)
        gt_text = ground_truth.description + " " + " ".join(ground_truth.evidence)
        pred_words = set(pred_text.lower().split())
        gt_words = set(gt_text.lower().split())
        if not pred_words and not gt_words:
            return 0.0
        return len(pred_words & gt_words) / len(pred_words | gt_words)


def compute_overall_metrics(match_result: MatchResult) -> OverallMetrics:
    """Beregn evalueringsmetrikker fra match-resultat."""
    tp = len(match_result.matched_pairs)
    fp = len(match_result.unmatched_predicted)
    fn = len(match_result.unmatched_ground_truth)
    total_support = tp + fn

    precision = tp / (tp + fp) if (tp + fp) > 0 else 0.0
    recall = tp / (tp + fn) if (tp + fn) > 0 else 0.0
    f1 = 2 * precision * recall / (precision + recall) if (precision + recall) > 0 else 0.0

    return OverallMetrics(precision=precision, recall=recall, f1=f1, total_support=total_support)
