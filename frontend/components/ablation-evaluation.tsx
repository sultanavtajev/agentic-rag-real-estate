"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricsTable } from "@/components/metrics-table";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  getAblationEvaluation,
  getAblationEvaluationConfigs,
  evaluateAblationConfig,
} from "@/lib/api-client";
import type { EnrichedComparisonReport, AblationStudySummary } from "@/lib/types";

const SYS_LABELS: Record<string, string> = {
  "P+T+R": "P+T+R (Full)",
  "T+R": "T+R (No Planning)",
  "P+R": "P+R (No Tool Use)",
  "P+T": "P+T (No Reflection)",
  P: "P (Planning only)",
  T: "T (Tool Use only)",
  R: "R (Reflection only)",
  NONE: "NONE (None)",
};

function sysLabel(t: string): string {
  return SYS_LABELS[t] ?? t;
}

interface Props {
  results: AblationStudySummary | null;
}

interface EvalProgress {
  current: number;
  total: number;
  currentLabel: string;
}

export function AblationEvaluation({ results }: Props) {
  const [expandedDoc, setExpandedDoc] = useState<string | null>(null);
  const [evalData, setEvalData] = useState<Map<string, EnrichedComparisonReport>>(new Map());
  const [progress, setProgress] = useState<EvalProgress | null>(null);

  const docSetIds = results
    ? [...new Set(results.results.map((r) => r.document_set_id))].sort()
    : [];

  const handleExpand = useCallback(async (docId: string) => {
    if (expandedDoc === docId) {
      setExpandedDoc(null);
      return;
    }
    setExpandedDoc(docId);
    if (evalData.has(docId)) return;

    // Proev aa laste lagret evaluering foerst
    try {
      const cached = await getAblationEvaluation(docId);
      setEvalData((prev) => new Map(prev).set(docId, cached));
      return;
    } catch {
      // Ikke lagret — evaluer per config
    }

    // Hent tilgjengelige configs og evaluer sekvensielt
    try {
      const configs = await getAblationEvaluationConfigs(docId);
      setProgress({ current: 0, total: configs.length, currentLabel: configs[0] });

      for (let i = 0; i < configs.length; i++) {
        setProgress({ current: i, total: configs.length, currentLabel: configs[i] });
        await evaluateAblationConfig(docId, configs[i]);
      }

      // Last det fullstendige resultatet
      const full = await getAblationEvaluation(docId);
      setEvalData((prev) => new Map(prev).set(docId, full));
    } catch {
      // Evaluation failed
    } finally {
      setProgress(null);
    }
  }, [expandedDoc, evalData]);

  useEffect(() => {
    setEvalData(new Map());
  }, [results]);

  if (docSetIds.length === 0) return null;

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Evaluation</h2>

      <div className="space-y-2 max-h-[280px] overflow-y-auto">
        {docSetIds.map((docId) => {
          const isOpen = expandedDoc === docId;
          const report = evalData.get(docId);
          const isEvaluating = progress !== null && expandedDoc === docId;

          return (
            <Card key={docId}>
              <div
                className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-muted/30"
                onClick={() => handleExpand(docId)}
              >
                <div className="flex items-center gap-2">
                  {isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                  <span className="font-medium">{docId}</span>
                  {report && (
                    <Badge variant="outline" className="text-xs">
                      Best: {sysLabel(report.best_system)}
                    </Badge>
                  )}
                </div>
              </div>

              {isOpen && (
                <CardContent className="pt-0 space-y-6">
                  {isEvaluating && progress && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        <p>
                          Evaluating {sysLabel(progress.currentLabel)} against Ground Truth
                          ({progress.current + 1}/{progress.total})
                        </p>
                      </div>
                      <div className="h-2 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-300"
                          style={{ width: `${((progress.current + 1) / progress.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {report && <AblationComparisonDetail report={report} />}

                  {!isEvaluating && !report && (
                    <p className="text-sm text-muted-foreground">
                      No evaluation available. Run the ablation study first.
                    </p>
                  )}
                </CardContent>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
}

function AblationComparisonDetail({
  report,
}: {
  report: EnrichedComparisonReport;
}) {
  const systemKeys = Object.keys(report.system_results);

  const f1Values = systemKeys.map((k) => ({
    key: k,
    f1: report.system_results[k].overall_metrics.f1,
  }));
  const maxF1 = Math.max(...f1Values.map((v) => v.f1));
  const minF1 = Math.min(...f1Values.map((v) => v.f1));

  return (
    <div className="space-y-6 overflow-hidden">
      {/* Comparison — number of risks per config */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm">Comparison</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {report.risk_summaries.map((s) => (
              <div key={s.system_type} className="rounded-lg border p-3 text-center min-w-0">
                <p className="text-xs text-muted-foreground truncate">{sysLabel(s.system_type)}</p>
                <p className="text-xl font-bold">{s.total_risks}</p>
                <p className="text-xs text-muted-foreground">risks</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Best:</span>
            <Badge className="bg-green-100 text-green-800 border-green-200">
              {sysLabel(report.best_system)}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Metrikker per config */}
      <div className="space-y-4">
        {systemKeys.map((key) => {
          const evalResult = report.system_results[key];
          const f1 = evalResult.overall_metrics.f1;
          const isBest = f1Values.length > 1 && f1 === maxF1;
          const isWorst = f1Values.length > 1 && f1 === minF1;

          return (
            <Card
              key={key}
              className={isBest ? "border-green-200" : isWorst ? "border-red-200" : ""}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-2">
                  <CardTitle className="text-base">{sysLabel(key)}</CardTitle>
                  {isBest && (
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                      Best
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="overflow-hidden">
                <MetricsTable
                  overallMetrics={evalResult.overall_metrics}
                  adjustedMetrics={evalResult.adjusted_metrics}
                />
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
