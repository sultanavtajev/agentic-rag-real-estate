import type {
  AblationCategorizeStatus,
  AblationConfigRisks,
  AblationDocumentSet,
  AblationRunProgress,
  AblationStudySummary,
  AggregateResults,
  AnalysisResult,
  AnalysisResultSummary,
  AblationConfig,
  CategorizeResponse,
  CategoryConfidenceStats,
  CategoryF1Stats,
  CategoryStats,
  CategoryStatus,
  ComparisonReport,
  DocumentSetForCategorization,
  DocumentSetInfo,
  EnrichedComparisonReport,
  ProcessedFileInfo,
  EvaluationHistoryItem,
  EvaluationResult,
  GroundTruthRisk,
  GroundTruthStatus,
  ProcessDoneEvent,
  ProcessResponse,
  RiskCategoryResult,
  ProcessStepEvent,
  SingleEvaluationRecord,
  StepProgressEvent,
  StreamingAnalysisRequest,
  StreamingAnalysisResult,
  TraceFile,
  UploadResponse,
} from "./types";

const API_BASE = "/api/proxy";

async function fetchApi<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json", ...options?.headers },
    ...options,
  });
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error ${response.status}: ${error}`);
  }
  return response.json() as Promise<T>;
}

export async function uploadDocuments(
  files: File[],
  documentSetId: string,
): Promise<UploadResponse> {
  const formData = new FormData();
  formData.append("document_set_id", documentSetId);
  files.forEach((file) => formData.append("files", file));

  const response = await fetch(`${API_BASE}/documents/upload`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Upload error ${response.status}: ${detail}`);
  }
  return response.json() as Promise<UploadResponse>;
}

export async function processDocuments(setId: string): Promise<ProcessResponse> {
  return fetchApi<ProcessResponse>(`/documents/${setId}/process`, { method: "POST" });
}

export async function listDocuments(): Promise<DocumentSetInfo[]> {
  return fetchApi<DocumentSetInfo[]>("/documents");
}

export async function deleteDocumentSet(setId: string): Promise<{ deleted: string }> {
  return fetchApi<{ deleted: string }>(`/documents/${setId}`, { method: "DELETE" });
}

export async function deleteResult(runId: string): Promise<{ deleted: string }> {
  return fetchApi<{ deleted: string }>(`/analysis/results/${runId}`, { method: "DELETE" });
}

export async function saveChart(filename: string, base64Png: string): Promise<{ saved: string }> {
  return fetchApi<{ saved: string }>("/analysis/save-chart", {
    method: "POST",
    body: JSON.stringify({ filename, base64_png: base64Png }),
  });
}

export async function saveResultsReport(): Promise<{ saved: string }> {
  return fetchApi<{ saved: string }>("/analysis/save-results-report", { method: "POST" });
}

export async function runStandardAnalysis(
  documentSetId: string,
  query: string,
): Promise<AnalysisResult> {
  return fetchApi<AnalysisResult>("/analysis/standard", {
    method: "POST",
    body: JSON.stringify({ document_set_id: documentSetId, query }),
  });
}

export async function runAgenticAnalysis(
  documentSetId: string,
  query: string,
  ablationConfig?: AblationConfig,
): Promise<AnalysisResult> {
  return fetchApi<AnalysisResult>("/analysis/agentic", {
    method: "POST",
    body: JSON.stringify({
      document_set_id: documentSetId,
      query,
      ablation_config: ablationConfig ?? null,
    }),
  });
}

export async function getResult(runId: string): Promise<AnalysisResult> {
  return fetchApi<AnalysisResult>(`/analysis/results/${runId}`);
}

export async function listResults(
  systemType?: string,
  documentSetId?: string,
): Promise<AnalysisResultSummary[]> {
  const params = new URLSearchParams();
  if (systemType) params.append("system_type", systemType);
  if (documentSetId) params.append("document_set_id", documentSetId);
  const query = params.toString();
  return fetchApi<AnalysisResultSummary[]>(`/analysis/results${query ? `?${query}` : ""}`);
}

export async function runAblation(
  documentSetId: string,
  query: string,
  groundTruthPath?: string,
): Promise<EvaluationResult[]> {
  return fetchApi<EvaluationResult[]>("/experiments/ablation", {
    method: "POST",
    body: JSON.stringify({
      document_set_id: documentSetId,
      query,
      ground_truth_path: groundTruthPath ?? null,
    }),
  });
}

export async function compareExperiments(runIds: string[]): Promise<ComparisonReport> {
  return fetchApi<ComparisonReport>("/experiments/compare", {
    method: "POST",
    body: JSON.stringify({ run_ids: runIds }),
  });
}

export async function listExperimentResults(): Promise<ComparisonReport[]> {
  return fetchApi<ComparisonReport[]>("/experiments/results");
}

export async function getGroundTruthStatus(
  documentSetId: string,
): Promise<GroundTruthStatus> {
  return fetchApi<GroundTruthStatus>(
    `/experiments/ground-truth/${documentSetId}`,
  );
}

export async function getGroundTruthRisks(
  documentSetId: string,
): Promise<GroundTruthRisk[]> {
  return fetchApi<GroundTruthRisk[]>(
    `/experiments/ground-truth/${documentSetId}/risks`,
  );
}

export async function uploadGroundTruth(
  file: File,
  documentSetId: string,
): Promise<{ message: string; risk_count: number }> {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("document_set_id", documentSetId);

  const response = await fetch(`${API_BASE}/experiments/ground-truth/upload`, {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Upload error ${response.status}: ${detail}`);
  }
  return response.json() as Promise<{ message: string; risk_count: number }>;
}

export async function generateGroundTruth(
  documentSetId: string,
): Promise<{ message: string; risk_count: number }> {
  return fetchApi<{ message: string; risk_count: number }>(
    `/experiments/ground-truth/${documentSetId}/generate`,
    { method: "POST" },
  );
}

export async function evaluateComparison(
  runIds: string[],
  groundTruthPath?: string,
  query?: string,
  documentSetId?: string,
): Promise<EnrichedComparisonReport> {
  return fetchApi<EnrichedComparisonReport>("/experiments/evaluate-comparison", {
    method: "POST",
    body: JSON.stringify({
      run_ids: runIds,
      ground_truth_path: groundTruthPath ?? null,
      query: query ?? null,
      document_set_id: documentSetId ?? null,
    }),
  });
}

export async function evaluateSingle(
  runId: string,
  groundTruthPath: string,
  query?: string,
  documentSetId?: string,
): Promise<EvaluationResult> {
  return fetchApi<EvaluationResult>("/experiments/evaluate-single", {
    method: "POST",
    body: JSON.stringify({
      run_id: runId,
      ground_truth_path: groundTruthPath,
      query: query ?? null,
      document_set_id: documentSetId ?? null,
    }),
  });
}

export async function listEvaluationHistory(): Promise<EvaluationHistoryItem[]> {
  return fetchApi<EvaluationHistoryItem[]>("/experiments/history");
}

export async function getEvaluationRecord(recordId: string) {
  type Record = EnrichedComparisonReport | SingleEvaluationRecord;
  return fetchApi<Record>(`/experiments/history/${recordId}`);
}

export async function deleteEvaluationRecord(recordId: string) {
  return fetchApi<{ deleted: string }>(`/experiments/history/${recordId}`, { method: "DELETE" });
}

// ---------------------------------------------------------------------------
// SSE Streaming Analysis
// ---------------------------------------------------------------------------

export async function cancelAnalysis(sessionId: string): Promise<void> {
  await fetchApi(`/analysis/cancel/${sessionId}`, { method: "POST" });
}

export interface StreamAnalysisCallbacks {
  onSession?: (sessionId: string) => void;
  onStepProgress: (event: StepProgressEvent) => void;
  onResult: (result: StreamingAnalysisResult) => void;
  onError: (error: string) => void;
  onComplete: () => void;
}

export async function streamAnalysis(
  request: StreamingAnalysisRequest,
  callbacks: StreamAnalysisCallbacks,
  signal?: AbortSignal,
): Promise<void> {
  const response = await fetch(`${API_BASE}/analysis/run/stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
    signal,
  });

  if (!response.ok) {
    const text = await response.text();
    callbacks.onError(`API error ${response.status}: ${text}`);
    callbacks.onComplete();
    return;
  }

  const reader = response.body?.getReader();
  if (!reader) {
    callbacks.onError("No response body");
    callbacks.onComplete();
    return;
  }

  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });

      // Parse SSE events from buffer
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      let eventType = "";
      let data = "";

      for (const line of lines) {
        if (line.startsWith("event: ")) {
          eventType = line.slice(7).trim();
        } else if (line.startsWith("data: ")) {
          data = line.slice(6);
        } else if (line === "" && eventType && data) {
          // End of event
          try {
            if (eventType === "session") {
              const parsed = JSON.parse(data) as { session_id: string };
              callbacks.onSession?.(parsed.session_id);
            } else if (eventType === "step_progress") {
              callbacks.onStepProgress(JSON.parse(data) as StepProgressEvent);
            } else if (eventType === "result") {
              callbacks.onResult(JSON.parse(data) as StreamingAnalysisResult);
            }
          } catch (parseErr) {
            console.warn("Failed to parse SSE event:", parseErr);
          }
          eventType = "";
          data = "";
        }
      }
    }
  } catch (err) {
    callbacks.onError(err instanceof Error ? err.message : "Stream error");
  } finally {
    reader.releaseLock();
    callbacks.onComplete();
  }
}

// ---------------------------------------------------------------------------
// SSE Streaming Document Processing
// ---------------------------------------------------------------------------

export interface StreamProcessCallbacks {
  onStep: (event: ProcessStepEvent) => void;
  onDone: (event: ProcessDoneEvent) => void;
  onError: (error: string) => void;
}

export async function streamProcessDocuments(
  setId: string,
  callbacks: StreamProcessCallbacks,
): Promise<void> {
  const response = await fetch(`${API_BASE}/documents/${setId}/process/stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    const text = await response.text();
    callbacks.onError(`API error ${response.status}: ${text}`);
    return;
  }

  const reader = response.body?.getReader();
  if (!reader) {
    callbacks.onError("No response body");
    return;
  }

  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      let eventType = "";
      let data = "";

      for (const line of lines) {
        if (line.startsWith("event: ")) {
          eventType = line.slice(7).trim();
        } else if (line.startsWith("data: ")) {
          data = line.slice(6);
        } else if (line === "" && eventType && data) {
          try {
            if (eventType === "step") {
              callbacks.onStep(JSON.parse(data) as ProcessStepEvent);
            } else if (eventType === "done") {
              callbacks.onDone(JSON.parse(data) as ProcessDoneEvent);
            }
          } catch {
            // ignore parse errors
          }
          eventType = "";
          data = "";
        }
      }
    }
  } catch (err) {
    callbacks.onError(err instanceof Error ? err.message : "Stream error");
  } finally {
    reader.releaseLock();
  }
}

// ---------------------------------------------------------------------------
// Trace API
// ---------------------------------------------------------------------------

export async function listProcessedFiles(setId: string): Promise<ProcessedFileInfo[]> {
  return fetchApi<ProcessedFileInfo[]>(`/documents/${setId}/processed`);
}

export async function getProcessedFile(setId: string, filename: string): Promise<string> {
  const response = await fetch(`${API_BASE}/documents/${setId}/processed/${filename}`);
  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error ${response.status}: ${error}`);
  }
  return response.text();
}

export async function listTraces(runId: string): Promise<TraceFile[]> {
  return fetchApi<TraceFile[]>(`/analysis/traces/${runId}`);
}

export async function getTrace(
  runId: string,
  filename: string,
): Promise<{ content: string }> {
  return fetchApi<{ content: string }>(`/analysis/traces/${runId}/${filename}`);
}

export async function getAggregateResults(): Promise<AggregateResults> {
  return fetchApi<AggregateResults>("/analysis/aggregate");
}

// ---------------------------------------------------------------------------
// Categorization API (RQ1b)
// ---------------------------------------------------------------------------

export async function getDocumentSetsForCategorization(): Promise<
  DocumentSetForCategorization[]
> {
  return fetchApi<DocumentSetForCategorization[]>(
    "/categorization/document-sets",
  );
}

export async function categorizeDocumentSet(
  documentSetId: string,
  recordId: string,
): Promise<CategorizeResponse> {
  return fetchApi<CategorizeResponse>("/categorization/categorize", {
    method: "POST",
    body: JSON.stringify({ document_set_id: documentSetId, record_id: recordId }),
  });
}

export async function getCategorizeStatus(): Promise<CategoryStatus> {
  return fetchApi<CategoryStatus>("/categorization/status");
}

export async function getCategories(): Promise<CategoryStats[]> {
  return fetchApi<CategoryStats[]>("/categorization/categories");
}

export async function getCategoryConfidenceStats(): Promise<CategoryConfidenceStats[]> {
  return fetchApi<CategoryConfidenceStats[]>("/categorization/confidence-stats");
}

export async function getF1PerCategory(): Promise<CategoryF1Stats[]> {
  return fetchApi<CategoryF1Stats[]>("/categorization/f1-per-category");
}

export async function getCategorizedRisks(
  recordId: string,
): Promise<RiskCategoryResult[]> {
  return fetchApi<RiskCategoryResult[]>(
    `/categorization/results/${recordId}`,
  );
}

// ---------------------------------------------------------------------------
// Ablation Study API (RQ1a)
// ---------------------------------------------------------------------------

export async function getAblationDocumentSets(): Promise<AblationDocumentSet[]> {
  return fetchApi<AblationDocumentSet[]>("/ablation/document-sets");
}

export async function getAblationResults(): Promise<AblationStudySummary> {
  return fetchApi<AblationStudySummary>("/ablation/results");
}

export async function getAblationRisks(docSetId: string): Promise<AblationConfigRisks[]> {
  return fetchApi<AblationConfigRisks[]>(`/ablation/risks/${docSetId}`);
}

export async function categorizeAblation(
  docSetId: string,
  configLabels: string[],
): Promise<CategorizeResponse> {
  return fetchApi<CategorizeResponse>("/ablation/categorize", {
    method: "POST",
    body: JSON.stringify({ document_set_id: docSetId, config_labels: configLabels }),
  });
}

export async function getAblationCategorizationStatus(): Promise<AblationCategorizeStatus> {
  return fetchApi<AblationCategorizeStatus>("/ablation/categorization-status");
}

export async function getAblationEvaluation(docSetId: string): Promise<EnrichedComparisonReport> {
  return fetchApi<EnrichedComparisonReport>(`/ablation/evaluation/${docSetId}`);
}

export async function getAblationEvaluationConfigs(docSetId: string): Promise<string[]> {
  return fetchApi<string[]>(`/ablation/evaluation/${docSetId}/configs`);
}

export async function evaluateAblationConfig(
  docSetId: string,
  configLabel: string,
): Promise<{ config_label: string; overall_metrics: { f1: number; precision: number; recall: number }; risk_count: number }> {
  return fetchApi(`/ablation/evaluation/${docSetId}/${configLabel}`, { method: "POST" });
}

export async function listAblationEvaluations(): Promise<string[]> {
  return fetchApi<string[]>("/ablation/evaluations");
}

export async function saveAblationCharts(
  charts: { filename: string; base64_png: string }[],
  reportMd: string,
  reportFilename?: string,
): Promise<{ saved: string[] }> {
  return fetchApi<{ saved: string[] }>("/ablation/save-charts", {
    method: "POST",
    body: JSON.stringify({
      charts,
      report_md: reportMd,
      report_filename: reportFilename ?? "ablation_results_report.md",
    }),
  });
}

export async function deleteAblationDocumentSet(docSetId: string): Promise<{
  deleted_document_set: string;
  deleted_results: number;
  deleted_evaluations: number;
  deleted_categories: number;
  deleted_traces: number;
}> {
  return fetchApi(`/ablation/document-set/${docSetId}`, { method: "DELETE" });
}

export interface StreamAblationCallbacks {
  onProgress: (event: AblationRunProgress) => void;
  onError: (error: string) => void;
  onComplete: () => void;
}

export async function streamAblationStudy(
  documentSetIds: string[],
  callbacks: StreamAblationCallbacks,
  signal?: AbortSignal,
): Promise<void> {
  const response = await fetch(`${API_BASE}/ablation/run/stream`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ document_set_ids: documentSetIds }),
    signal,
  });

  if (!response.ok) {
    const text = await response.text();
    callbacks.onError(`API error ${response.status}: ${text}`);
    callbacks.onComplete();
    return;
  }

  const reader = response.body?.getReader();
  if (!reader) {
    callbacks.onError("No response body");
    callbacks.onComplete();
    return;
  }

  const decoder = new TextDecoder();
  let buffer = "";

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      let eventType = "";
      let data = "";

      for (const line of lines) {
        if (line.startsWith("event: ")) {
          eventType = line.slice(7).trim();
        } else if (line.startsWith("data: ")) {
          data = line.slice(6);
        } else if (line === "" && eventType && data) {
          try {
            if (eventType === "ablation_progress") {
              callbacks.onProgress(JSON.parse(data) as AblationRunProgress);
            } else if (eventType === "ablation_done") {
              callbacks.onProgress({ ...JSON.parse(data), status: "done" } as AblationRunProgress);
            }
          } catch {
            // ignore parse errors
          }
          eventType = "";
          data = "";
        }
      }
    }
  } catch (err) {
    callbacks.onError(err instanceof Error ? err.message : "Stream error");
  } finally {
    reader.releaseLock();
    callbacks.onComplete();
  }
}
