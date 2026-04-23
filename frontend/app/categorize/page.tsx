"use client";

import { useCallback, useEffect, useState } from "react";
import { CategorizeOverview } from "@/components/categorization-overview";
import { CategorizeDocumentList } from "@/components/categorization-document-list";
import { CategorizeResults } from "@/components/categorization-results";
import { CategorizationCharts } from "@/components/categorization-charts";
import { Progress } from "@/components/ui/progress";
import {
  categorizeDocumentSet,
  getCategorizedRisks,
  getCategorizeStatus,
  getCategoryConfidenceStats,
  getDocumentSetsForCategorization,
} from "@/lib/api-client";
import type {
  CategoryConfidenceStats,
  CategoryStatus,
  DocumentSetForCategorization,
  RiskCategoryResult,
} from "@/lib/types";
import { useAutoScreenshot } from "@/hooks/use-auto-screenshot";

export default function CategorizePage() {
  const [status, setStatus] = useState<CategoryStatus | null>(null);
  const [docSets, setDocSets] = useState<DocumentSetForCategorization[]>([]);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [results, setResults] = useState<Map<string, RiskCategoryResult[]>>(
    new Map(),
  );
  const [confidence, setConfidence] = useState<CategoryConfidenceStats[]>([]);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [error, setError] = useState<string | null>(null);
  useAutoScreenshot("Appendix_A6_Categorization.png", {
    ready: !loading && !running,
  });

  const fetchData = useCallback(async () => {
    try {
      const [s, ds, conf] = await Promise.all([
        getCategorizeStatus(),
        getDocumentSetsForCategorization(),
        getCategoryConfidenceStats().catch(() => [] as CategoryConfidenceStats[]),
      ]);
      setStatus(s);
      setDocSets(ds);
      setConfidence(conf);

      // Last eksisterende kategoriserte risikoer for alle sett som har noen
      const newResults = new Map<string, RiskCategoryResult[]>();
      for (const d of ds) {
        if (d.categorized_count > 0) {
          try {
            const risks = await getCategorizedRisks(d.record_id);
            if (risks.length > 0) {
              newResults.set(d.record_id, risks);
            }
          } catch {
            // Ignorer feil for enkelt-records
          }
        }
      }
      setResults(newResults);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Could not fetch data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCategorize = useCallback(
    async (ids: string[]) => {
      if (ids.length === 0) return;
      setRunning(true);
      setProgress({ done: 0, total: ids.length });
      setError(null);

      for (let i = 0; i < ids.length; i++) {
        const docSet = docSets.find((d) => d.document_set_id === ids[i]);
        if (!docSet) continue;
        try {
          const res = await categorizeDocumentSet(
            docSet.document_set_id,
            docSet.record_id,
          );
          setResults((prev) => {
            const next = new Map(prev);
            next.set(res.record_id, res.results);
            return next;
          });
        } catch (err: unknown) {
          setError(
            err instanceof Error ? err.message : `Error at ${ids[i]}`,
          );
        }
        setProgress({ done: i + 1, total: ids.length });
      }

      setRunning(false);
      setSelectedIds(new Set());
      await fetchData();
    },
    [docSets, fetchData],
  );

  const progressPct =
    progress.total > 0
      ? Math.round((progress.done / progress.total) * 100)
      : 0;

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Risk Categorization</h1>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {running && (
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">
            Categorizing {progress.done}/{progress.total}...
          </p>
          <Progress value={progressPct} className="h-2" />
        </div>
      )}

      <CategorizeOverview status={status} loading={loading} />

      <CategorizeDocumentList
        documentSets={docSets}
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        onCategorize={handleCategorize}
        loading={running}
      />

      <CategorizeResults results={results} />

      {status && status.categories.length > 0 && (
        <CategorizationCharts categories={status.categories} confidence={confidence} />
      )}
    </div>
  );
}
