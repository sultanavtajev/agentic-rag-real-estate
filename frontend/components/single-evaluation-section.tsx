"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetricsTable } from "@/components/metrics-table";
import { MatchingDetailsTable } from "@/components/matching-details-table";
import { GroundTruthRisksSection } from "@/components/ground-truth-risks-section";
import type { EvaluationResult } from "@/lib/types";

const SYS_LABELS: Record<string, string> = {
  standard_rag: "Standard RAG",
  ground_truth: "Ground Truth",
};

function sysLabel(t: string): string {
  return SYS_LABELS[t] ?? t.replace(/_/g, " ");
}

interface SingleEvaluationSectionProps {
  evaluation: EvaluationResult;
  documentSetId?: string;
}

export function SingleEvaluationSection({
  evaluation,
  documentSetId,
}: SingleEvaluationSectionProps) {
  const hasMatchingDetails =
    (evaluation.matched_pair_details?.length ?? 0) > 0 ||
    (evaluation.unmatched_predicted_risks?.length ?? 0) > 0 ||
    (evaluation.unmatched_ground_truth_risks?.length ?? 0) > 0;

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Evaluering — {sysLabel(evaluation.system_type)}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <MetricsTable overallMetrics={evaluation.overall_metrics} adjustedMetrics={evaluation.adjusted_metrics} />
          <div className="grid grid-cols-3 gap-3 text-center text-sm">
            <div className="rounded-lg bg-green-50 p-2">
              <p className="text-xs text-muted-foreground">Treff</p>
              <p className="font-semibold text-green-700">{evaluation.matched_risks}</p>
            </div>
            <div className="rounded-lg bg-orange-50 p-2">
              <p className="text-xs text-muted-foreground">False positives</p>
              <p className="font-semibold text-orange-700">{evaluation.unmatched_predicted}</p>
            </div>
            <div className="rounded-lg bg-red-50 p-2">
              <p className="text-xs text-muted-foreground">False negatives</p>
              <p className="font-semibold text-red-700">{evaluation.unmatched_ground_truth}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {hasMatchingDetails && <MatchingDetailsTable evaluation={evaluation} />}

      {documentSetId && <GroundTruthRisksSection documentSetId={documentSetId} />}
    </div>
  );
}
