"use client";

import Link from "next/link";
import { RiskCard } from "@/components/risk-card";
import { ComparisonSection } from "@/components/comparison-section";
import { SingleEvaluationSection } from "@/components/single-evaluation-section";
import type {
  AnalysisResult,
  EnrichedComparisonReport,
  EvaluationResult,
} from "@/lib/types";

interface RiskResultsProps {
  results: AnalysisResult[];
  comparisonReport: EnrichedComparisonReport | null;
  singleEvaluation: EvaluationResult | null;
  documentSetId?: string;
}

export function RiskResults({
  results,
  comparisonReport,
  singleEvaluation,
  documentSetId,
}: RiskResultsProps) {
  return (
    <div className="space-y-6">
      {/* Risk cards per system */}
      {results.length > 0 && (
        <div
          className={
            results.length > 1
              ? "grid gap-6 lg:grid-cols-2"
              : "space-y-4"
          }
        >
          {results.map((result) => (
            <div key={result.run_id} className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-medium">{result.system_type}</h3>
              </div>
              {result.risks.map((risk) => (
                <RiskCard key={risk.risk_id} risk={risk} />
              ))}
              {result.risks.length === 0 && (
                <p className="text-sm text-muted-foreground">
                  Ingen risikoer funnet.
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Comparison */}
      {comparisonReport && results.length > 1 && (
        <ComparisonSection report={comparisonReport} documentSetId={documentSetId} />
      )}

      {/* Single evaluation */}
      {singleEvaluation && results.length === 1 && (
        <SingleEvaluationSection evaluation={singleEvaluation} documentSetId={documentSetId} />
      )}

      {/* History link */}
      {(comparisonReport || singleEvaluation) && (
        <div className="flex justify-end">
          <Link
            href="/history"
            className="text-sm text-muted-foreground hover:underline"
          >
            Se tidligere resultater
          </Link>
        </div>
      )}
    </div>
  );
}
