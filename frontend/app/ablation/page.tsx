"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AblationCategorization } from "@/components/ablation-categorization";
import { AblationDocumentSelector } from "@/components/ablation-document-selector";
import { AblationEvaluation } from "@/components/ablation-evaluation";
import { AblationProgressLog } from "@/components/ablation-progress-log";
import { AblationCharts } from "@/components/ablation-charts";
import { AblationResultsTable } from "@/components/ablation-results-table";
import { AnalysisHistoryTable, type AnalysisHistoryHandle } from "@/components/analysis-history-table";
import {
  getAblationDocumentSets,
  getAblationResults,
  streamAblationStudy,
} from "@/lib/api-client";
import type {
  AblationDocumentSet,
  AblationRunProgress,
  AblationStudySummary,
} from "@/lib/types";
import { useAutoScreenshot } from "@/hooks/use-auto-screenshot";

export default function AblationPage() {
  const [documentSets, setDocumentSets] = useState<AblationDocumentSet[]>([]);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [events, setEvents] = useState<AblationRunProgress[]>([]);
  const [results, setResults] = useState<AblationStudySummary | null>(null);
  const [loading, setLoading] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const historyRef = useRef<AnalysisHistoryHandle>(null);
  useAutoScreenshot("Appendix_A7_Ablation.png", {
    ready: !loading && !isRunning,
  });

  const fetchInitialData = useCallback(async () => {
    try {
      const [docs, res] = await Promise.allSettled([
        getAblationDocumentSets(),
        getAblationResults(),
      ]);
      if (docs.status === "fulfilled") setDocumentSets(docs.value);
      if (res.status === "fulfilled") setResults(res.value);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Could not fetch data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const totalSteps = events.length > 0
    ? (events[events.length - 1]?.total_steps ?? 0)
    : 0;
  const completedSteps = events.filter(
    (e) => e.status === "completed" || e.status === "error" || e.status === "skipped",
  ).length;

  const handleStart = useCallback(async () => {
    if (selectedIds.size === 0) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setIsRunning(true);
    setEvents([]);
    setError(null);

    await streamAblationStudy(
      [...selectedIds],
      {
        onProgress: (event) => {
          setEvents((prev) => [...prev, event]);

          if (event.status === "done") {
            getAblationResults()
              .then((r) => setResults(r))
              .catch(() => {});
          }
        },
        onError: (errMsg) => setError(errMsg),
        onComplete: () => {
          setIsRunning(false);
          getAblationResults()
            .then((r) => setResults(r))
            .catch(() => {});
          historyRef.current?.refresh();
        },
      },
      controller.signal,
    );
  }, [selectedIds]);

  const documentSetIds = results?.document_set_ids ?? [];

  return (
    <div className="space-y-8">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Ablation study (RQ1a)</h1>
        <p className="text-sm text-muted-foreground">
          Run analysis with different configurations to measure the contribution
          of planning, tool use, and reflection.
        </p>
      </div>

      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {/* 1. Select document sets + run */}
      <AblationDocumentSelector
        documentSets={documentSets}
        selectedIds={selectedIds}
        onSelectionChange={setSelectedIds}
        onStart={handleStart}
        loading={isRunning || loading}
      />

      {(isRunning || events.length > 0) && (
        <AblationProgressLog
          events={events}
          totalSteps={totalSteps}
          completedSteps={completedSteps}
        />
      )}

      {/* 2. Previous analyses */}
      <AnalysisHistoryTable ref={historyRef} mode="ablation" />

      {/* 3. Evaluation */}
      <AblationEvaluation results={results} />

      {/* 4. Categorization */}
      <AblationCategorization documentSetIds={documentSetIds} />

      {/* 5. Results + Visualizations */}
      {results && (
        <>
          <AblationResultsTable
            results={results.results}
            averages={results.averages}
          />
          <AblationCharts data={results} />
        </>
      )}
    </div>
  );
}
