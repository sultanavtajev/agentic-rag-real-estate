"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricsTable } from "@/components/metrics-table";
import { MatchingDetailsTable } from "@/components/matching-details-table";
import { GroundTruthRisksSection } from "@/components/ground-truth-risks-section";
import type { EnrichedComparisonReport } from "@/lib/types";

const SYS_LABELS: Record<string, string> = {
  standard_rag: "Standard RAG",
  ground_truth: "Ground Truth",
};

function sysLabel(t: string): string {
  return SYS_LABELS[t] ?? t.replace(/_/g, " ");
}

interface ComparisonSectionProps {
  report: EnrichedComparisonReport;
  documentSetId?: string;
}

export function ComparisonSection({ report, documentSetId }: ComparisonSectionProps) {
  const systemKeys = Object.keys(report.system_results).filter(
    (k) => !k.includes("ground_truth"),
  );
  const pValue = report.statistical_tests?.p_value;

  return (
    <div className="space-y-6 overflow-hidden">
      {/* Sammenligning */}
      <Card>
        <CardHeader>
          <CardTitle>Sammenligning</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-2">
            {report.risk_summaries.map((s) => (
              <div key={s.system_type} className="rounded-lg border p-3 text-center min-w-0">
                <p className="text-xs text-muted-foreground truncate">{sysLabel(s.system_type)}</p>
                <p className="text-xl font-bold">{s.total_risks}</p>
                <p className="text-xs text-muted-foreground">risikoer</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">
              {report.overlapping_risk_count} felles risikoer
            </Badge>
            {Object.entries(report.unique_to).map(([system, count]) => (
              <Badge key={system} variant="secondary">
                {count} unike for {sysLabel(system)}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Metrikker per system */}
      {report.has_ground_truth && (
        <>
          <div className="space-y-4">
            {systemKeys.map((key) => {
              const evalResult = report.system_results[key];
              return (
                <Card key={key} className="overflow-hidden">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{sysLabel(key)}</CardTitle>
                  </CardHeader>
                  <CardContent className="overflow-hidden">
                    <MetricsTable overallMetrics={evalResult.overall_metrics} adjustedMetrics={evalResult.adjusted_metrics} />
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Beste system */}
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Beste system:</span>
              <Badge className="bg-green-100 text-green-800 border-green-200">
                {sysLabel(report.best_system)}
              </Badge>
            </div>
            {pValue != null && (
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">p-verdi:</span>
                <Badge
                  className={
                    pValue < 0.05
                      ? "bg-green-100 text-green-800 border-green-200"
                      : "bg-gray-100 text-gray-600 border-gray-200"
                  }
                >
                  {pValue.toFixed(4)}
                </Badge>
              </div>
            )}
          </div>

          {/* Matching-detaljer */}
          {systemKeys.map((key) => {
            const evalResult = report.system_results[key];
            const hasDetails =
              (evalResult.matched_pair_details?.length ?? 0) > 0 ||
              (evalResult.unmatched_predicted_risks?.length ?? 0) > 0 ||
              (evalResult.unmatched_ground_truth_risks?.length ?? 0) > 0;
            if (!hasDetails) return null;
            return (
              <div key={`matching-${key}`} className="space-y-2">
                <h3 className="text-base font-semibold">{sysLabel(key)}</h3>
                <MatchingDetailsTable evaluation={evalResult} />
              </div>
            );
          })}
        </>
      )}

      {documentSetId && report.has_ground_truth && (
        <GroundTruthRisksSection documentSetId={documentSetId} />
      )}
    </div>
  );
}
