"use client";

import { useCallback, useRef, useState } from "react";
import { useAutoScreenshot } from "@/hooks/use-auto-screenshot";
import { Button } from "@/components/ui/button";
import { AnalysisForm } from "@/components/analysis-form";
import { AnalysisHistoryTable, type AnalysisHistoryHandle } from "@/components/analysis-history-table";
import { AnalyzeInfoSteps } from "@/components/analyze-info-steps";
import {
  ProgressSteps,
  type Step,
  type SubStep,
} from "@/components/progress-steps";
import type { SystemSelection } from "@/components/system-selector";
import {
  runStandardAnalysis,
  runAgenticAnalysis,
  generateGroundTruth,
  evaluateComparison,
  evaluateSingle,
  streamAnalysis,
  cancelAnalysis,
} from "@/lib/api-client";
import type {
  AnalysisResult,
  StepProgressEvent,
} from "@/lib/types";

// ---------------------------------------------------------------------------
// Substep-definisjoner drevet av SSE
// ---------------------------------------------------------------------------

type SubStepDef = { id: string; label: string; estimatedMs?: number };

const SUBSTEP_MAP: Record<string, { substeps: SubStepDef[] }> = {
  standard_rag: {
    substeps: [
      { id: "retrieving", label: "Retrieving relevant documents", estimatedMs: 3000 },
      { id: "analyzing", label: "Analyzing with Claude", estimatedMs: 25000 },
      { id: "parsing", label: "Parsing risks", estimatedMs: 2000 },
    ],
  },
  agentic_rag: {
    substeps: [
      { id: "planning", label: "Planning sub-questions", estimatedMs: 5000 },
      { id: "retrieving", label: "Retrieving documents (specialized)", estimatedMs: 8000 },
      { id: "reasoning", label: "Analyzing with Claude", estimatedMs: 25000 },
      { id: "reflecting", label: "Reflecting and validating", estimatedMs: 15000 },
      { id: "re_retrieving", label: "Retrieving more documents (re-retrieval)", estimatedMs: 5000 },
      { id: "re_reasoning", label: "Re-analyzing with expanded context", estimatedMs: 20000 },
    ],
  },
  ground_truth: {
    substeps: [
      { id: "parsing_pdfs", label: "Loading and parsing PDFs", estimatedMs: 3000 },
      { id: "detecting_types", label: "Detecting document types", estimatedMs: 1000 },
      { id: "generating", label: "Generating annotations with Claude", estimatedMs: 30000 },
      { id: "parsing_risks", label: "Parsing risks", estimatedMs: 2000 },
    ],
  },
  evaluation: {
    substeps: [
      { id: "matching", label: "Matching risks against Ground Truth", estimatedMs: 2000 },
      { id: "computing", label: "Computing metrics", estimatedMs: 2000 },
      { id: "building_report", label: "Building report", estimatedMs: 1000 },
    ],
  },
};

// Fallback for non-streaming (legacy)
const SUBSTEPS_LEGACY: Record<string, SubStep[]> = {
  "Standard RAG": SUBSTEP_MAP.standard_rag.substeps.map((s) => ({
    label: s.label,
    estimatedMs: s.estimatedMs,
  })),
  "Agentic RAG": SUBSTEP_MAP.agentic_rag.substeps.map((s) => ({
    label: s.label,
    estimatedMs: s.estimatedMs,
  })),
  "Ground Truth": SUBSTEP_MAP.ground_truth.substeps.map((s) => ({
    label: s.label,
    estimatedMs: s.estimatedMs,
  })),
  Evaluation: SUBSTEP_MAP.evaluation.substeps.map((s) => ({
    label: s.label,
    estimatedMs: s.estimatedMs,
  })),
};

// Map backend step name to label
const STEP_LABELS: Record<string, string> = {
  standard_rag: "Running Standard RAG",
  agentic_rag: "Running Agentic RAG",
  ground_truth: "Running Ground Truth",
  evaluation: "Evaluating results",
};

export default function AnalyzePage() {
  const historyRef = useRef<AnalysisHistoryHandle>(null);
  const abortRef = useRef<AbortController | null>(null);
  const sessionRef = useRef<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [steps, setSteps] = useState<Step[]>([]);
  useAutoScreenshot("Appendix_A3_Analysis.png");

  const updateStep = useCallback((index: number, update: Partial<Step>) => {
    setSteps((prev) =>
      prev.map((s, i) => (i === index ? { ...s, ...update } : s)),
    );
  }, []);

  // ---------------------------------------------------------------------------
  // SSE-drevet analyse
  // ---------------------------------------------------------------------------

  const handleCancel = useCallback(async () => {
    abortRef.current?.abort();
    abortRef.current = null;
    if (sessionRef.current) {
      try { await cancelAnalysis(sessionRef.current); } catch { /* ignore */ }
      sessionRef.current = null;
    }
    setLoading(false);
    setError("The analysis was cancelled.");
  }, []);

  const handleAnalyzeStreaming = async (
    documentSetIds: string[],
    query: string,
    selection: SystemSelection,
  ) => {
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setLoading(true);
    setError("");
    setSteps([]);

    for (let idx = 0; idx < documentSetIds.length; idx++) {
      const documentSetId = documentSetIds[idx];
      setError(
        `Analyzing ${documentSetId} (${idx + 1} of ${documentSetIds.length})...`,
      );

      if (controller.signal.aborted) break;

      await runStreamingForSet(
        documentSetId,
        query,
        selection,
        controller,
      );

      historyRef.current?.refresh();
    }

    setLoading(false);
    setError("");
    historyRef.current?.refresh();
  };

  const runStreamingForSet = async (
    documentSetId: string,
    query: string,
    selection: SystemSelection,
    controller: AbortController,
  ) => {
    // Bygg step-liste basert pa valgte systemer
    const stepsConfig: { key: string; label: string; substeps: SubStep[] }[] =
      [];

    if (selection.standard) {
      stepsConfig.push({
        key: "standard_rag",
        label: STEP_LABELS.standard_rag,
        substeps: SUBSTEP_MAP.standard_rag.substeps.map((s) => ({
          id: s.id, label: s.label, estimatedMs: s.estimatedMs,
        })),
      });
    }
    if (selection.agentic) {
      stepsConfig.push({
        key: "agentic_rag",
        label: STEP_LABELS.agentic_rag,
        substeps: SUBSTEP_MAP.agentic_rag.substeps.map((s) => ({
          id: s.id, label: s.label, estimatedMs: s.estimatedMs,
        })),
      });
    }
    if (selection.groundTruth) {
      stepsConfig.push({
        key: "ground_truth",
        label: STEP_LABELS.ground_truth,
        substeps: SUBSTEP_MAP.ground_truth.substeps.map((s) => ({
          id: s.id, label: s.label, estimatedMs: s.estimatedMs,
        })),
      });
    }

    const hasRagSystem = selection.standard || selection.agentic;
    if (hasRagSystem) {
      stepsConfig.push({
        key: "evaluation",
        label: STEP_LABELS.evaluation,
        substeps: SUBSTEP_MAP.evaluation.substeps.map((s) => ({
          id: s.id, label: s.label, estimatedMs: s.estimatedMs,
        })),
      });
    }

    const initialSteps: Step[] = stepsConfig.map((cfg) => ({
      label: `${cfg.label} (${documentSetId})`,
      status: "pending" as const,
      substeps: cfg.substeps,
    }));
    initialSteps.push({ label: "Analysis complete", status: "pending" });
    setSteps(initialSteps);

    const stepKeyToIndex: Record<string, number> = {};
    stepsConfig.forEach((cfg, i) => {
      stepKeyToIndex[cfg.key] = i;
    });
    const doneStepIdx = initialSteps.length - 1;

    let hasError = false;
    let collectedResults: AnalysisResult[] = [];

    try {
      await new Promise<void>((resolve, reject) => {
        streamAnalysis(
          {
            document_set_id: documentSetId,
            query,
            run_standard: selection.standard,
            run_agentic: selection.agentic,
            ablation_config: selection.ablationConfig ?? null,
            generate_ground_truth: selection.groundTruth,
            run_evaluation: hasRagSystem,
          },
          {
            onSession: (sid) => { sessionRef.current = sid; },
            onStepProgress: (event: StepProgressEvent) => {
              const stepIdx = stepKeyToIndex[event.step];
              if (stepIdx === undefined) return;

              setSteps((prev) => {
                const updated = [...prev];
                const step = { ...updated[stepIdx] };

                if (step.status === "pending") step.status = "running";

                if (step.substeps) {
                  step.substeps = step.substeps.map((sub) =>
                    sub.id === event.substep
                      ? {
                          ...sub,
                          status: event.status as
                            | "running" | "done" | "error" | "pending",
                          detail: event.detail || sub.detail,
                        }
                      : sub,
                  );
                }

                if (event.substep === "done" && event.status === "done") {
                  step.status = "done";
                }
                if (
                  step.substeps?.length &&
                  step.substeps.every((s) => s.status === "done")
                ) {
                  step.status = "done";
                }
                if (event.status === "error") {
                  step.status = "error";
                  step.error = event.detail;
                  hasError = true;
                }

                updated[stepIdx] = step;
                return updated;
              });
            },
            onResult: (result) => { collectedResults = result.results; },
            onError: (errMsg) => {
              hasError = true;
              setError(errMsg);
              reject(new Error(errMsg));
            },
            onComplete: () => { resolve(); },
          },
          controller.signal,
        );
      });

      const evalIdx = stepKeyToIndex["evaluation"];
      if (evalIdx !== undefined && collectedResults.length > 0) {
        updateStep(evalIdx, { status: "running" });
        await runEvaluation(collectedResults, selection, documentSetId, query);
        updateStep(evalIdx, { status: "done" });
      } else if (evalIdx !== undefined && collectedResults.length === 0) {
        updateStep(evalIdx, {
          status: "error",
          error: "No analysis results to evaluate",
        });
      }

      updateStep(doneStepIdx, {
        status: hasError ? "error" : "done",
        ...(hasError
          ? { error: "Some steps failed — see details above" }
          : {}),
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Analysis failed";
      setError(msg);
      setSteps((prev) =>
        prev.map((s) =>
          s.status === "running"
            ? { ...s, status: "error", error: msg }
            : s,
        ),
      );
    }
  };

  // ---------------------------------------------------------------------------
  // Fallback (uten streaming)
  // ---------------------------------------------------------------------------

  const handleAnalyzeLegacy = async (
    documentSetIds: string[],
    query: string,
    selection: SystemSelection,
  ) => {
    setLoading(true);
    setError("");

    for (let idx = 0; idx < documentSetIds.length; idx++) {
      const documentSetId = documentSetIds[idx];
      setError(
        `Analyzing ${documentSetId} (${idx + 1} of ${documentSetIds.length})...`,
      );

      const systemsToRun: string[] = [];
      if (selection.standard) systemsToRun.push("Standard RAG");
      if (selection.agentic) systemsToRun.push("Agentic RAG");
      if (selection.groundTruth) systemsToRun.push("Ground Truth");

      const hasRagSystem = selection.standard || selection.agentic;
      const hasEvalStep = hasRagSystem;

      const newSteps: Step[] = [
        { label: "Retrieving documents from vector database", status: "running" },
        ...systemsToRun.map((s) => ({
          label: `Running ${s} (${documentSetId})`,
          status: "pending" as const,
          substeps: SUBSTEPS_LEGACY[s],
        })),
        ...(hasEvalStep
          ? [{
              label: "Evaluating results",
              status: "pending" as const,
              substeps: SUBSTEPS_LEGACY.Evaluation,
            }]
          : []),
        { label: "Analysis complete", status: "pending" },
      ];
      setSteps(newSteps);

      const evalStepIdx = hasEvalStep ? 1 + systemsToRun.length : -1;
      const doneStepIdx = hasEvalStep
        ? evalStepIdx + 1
        : 1 + systemsToRun.length;

      try {
        await new Promise((r) => setTimeout(r, 300));
        updateStep(0, { status: "done" });

        const collectedResults: AnalysisResult[] = [];
        let stepIdx = 1;
        let hasStepError = false;

        for (const system of systemsToRun) {
          updateStep(stepIdx, { status: "running" });

          try {
            if (system === "Standard RAG") {
              collectedResults.push(
                await runStandardAnalysis(documentSetId, query),
              );
            } else if (system === "Agentic RAG") {
              collectedResults.push(
                await runAgenticAnalysis(
                  documentSetId, query, selection.ablationConfig,
                ),
              );
            } else if (system === "Ground Truth") {
              await generateGroundTruth(documentSetId);
            }

            updateStep(stepIdx, { status: "done" });
          } catch (err) {
            const msg = err instanceof Error ? err.message : "Step failed";
            updateStep(stepIdx, { status: "error", error: msg });
            hasStepError = true;
          }

          stepIdx++;
        }

        if (hasEvalStep && collectedResults.length > 0) {
          updateStep(evalStepIdx, { status: "running" });
          try {
            await runEvaluation(
              collectedResults, selection, documentSetId, query,
            );
            updateStep(evalStepIdx, { status: "done" });
          } catch (err) {
            const msg = err instanceof Error ? err.message : "Evaluation failed";
            updateStep(evalStepIdx, { status: "error", error: msg });
            hasStepError = true;
          }
        } else if (hasEvalStep && collectedResults.length === 0) {
          updateStep(evalStepIdx, {
            status: "error",
            error: "No analysis results to evaluate",
          });
        }

        updateStep(doneStepIdx, {
          status: hasStepError ? "error" : "done",
          ...(hasStepError
            ? { error: "Some steps failed — see details above" }
            : {}),
        });
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Analysis failed";
        setError(msg);
        setSteps((prev) =>
          prev.map((s) =>
            s.status === "running"
              ? { ...s, status: "error", error: msg }
              : s,
          ),
        );
      }

      historyRef.current?.refresh();
    }

    setLoading(false);
    setError("");
    historyRef.current?.refresh();
  };

  // Bruk streaming som default
  const handleAnalyze = handleAnalyzeStreaming;

  const runEvaluation = async (
    collectedResults: AnalysisResult[],
    selection: SystemSelection,
    documentSetId: string,
    query: string,
  ) => {
    const ragRunIds = collectedResults.map((r) => r.run_id);
    const gtPath = selection.groundTruth
      ? `data/ground_truth/${documentSetId}.json`
      : undefined;

    try {
      if (selection.groundTruth && collectedResults.length > 1) {
        await evaluateComparison(ragRunIds, gtPath, query, documentSetId);
      } else if (selection.groundTruth && collectedResults.length === 1) {
        await evaluateSingle(ragRunIds[0], gtPath!, query, documentSetId);
      } else if (collectedResults.length > 1) {
        await evaluateComparison(ragRunIds, undefined, query, documentSetId);
      }
    } catch (err) {
      console.error("[runEvaluation] Evaluation failed:", err);
      throw err;
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Analysis</h1>
        <AnalyzeInfoSteps />
      </div>

      <AnalysisForm loading={loading} onAnalyze={handleAnalyze} />

      {steps.length > 0 && (
        <div className="space-y-2">
          <ProgressSteps steps={steps} />
          {loading && (
            <Button variant="outline" size="sm" onClick={handleCancel}>
              Cancel analysis
            </Button>
          )}
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          {error}
        </div>
      )}

      <AnalysisHistoryTable ref={historyRef} />
    </div>
  );
}
