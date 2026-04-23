// Enums
export type DocumentType = "salgsoppgave";

// Risk models
export interface IdentifiedRisk {
  risk_id: string;
  description: string;
  evidence: string[];
  source_documents: string[];
  source_pages: number[];
  confidence: number;
  details: Record<string, unknown>;
}

export interface AnalysisResult {
  run_id: string;
  session_id: string;
  document_set_id: string;
  system_type: string;
  risks: IdentifiedRisk[];
  raw_llm_response: string;
  timestamp: string;
  config: Record<string, unknown>;
  duration_s: number;
  input_tokens: number;
  output_tokens: number;
}

// Evaluation models
export interface OverallMetrics {
  precision: number;
  recall: number;
  f1: number;
  total_support: number;
}

export interface GroundTruthRisk {
  risk_id: string;
  description: string;
  evidence: string[];
  source_documents: string[];
  source_pages: number[];
  details: Record<string, unknown>;
}

export interface VerifiedRisk {
  risk: IdentifiedRisk;
  is_real_risk: boolean;
  reasoning: string;
}

export interface MatchedPair {
  system_risk: IdentifiedRisk;
  ground_truth_risk: GroundTruthRisk;
}

export interface EvaluationResult {
  run_id: string;
  system_type: string;
  overall_metrics: OverallMetrics;
  matched_risks: number;
  unmatched_predicted: number;
  unmatched_ground_truth: number;
  matched_pair_details?: MatchedPair[];
  unmatched_predicted_risks?: IdentifiedRisk[];
  unmatched_ground_truth_risks?: GroundTruthRisk[];
  verified_unmatched?: VerifiedRisk[];
  adjusted_metrics?: OverallMetrics;
}

export interface ComparisonReport {
  system_results: Record<string, EvaluationResult>;
  best_system: string;
  statistical_tests: Record<string, number>;
}

// Ablation config
export interface AblationConfig {
  enable_planning: boolean;
  enable_tool_use: boolean;
  enable_reflection: boolean;
}

// API response models
export interface DocumentSetInfo {
  set_id: string;
  file_count: number;
  filenames: string[];
  original_filename: string;
  processed: boolean;
  has_processed_data: boolean;
}

export interface ProcessedFileInfo {
  filename: string;
  size_bytes: number;
}

export interface UploadResponse {
  document_set_id: string;
  files_uploaded: number;
  message: string;
}

export interface ProcessResponse {
  document_set_id: string;
  chunks_created: number;
  message: string;
}

export interface AnalysisResultSummary {
  run_id: string;
  session_id: string;
  system_type: string;
  document_set_id: string;
  risk_count: number;
  timestamp: string;
  duration_s: number;
  input_tokens: number;
  output_tokens: number;
}

// Comparison / evaluation models
export interface RiskSummary {
  system_type: string;
  total_risks: number;
  risks_by_category: Record<string, number>;
}

export interface GroundTruthStatus {
  available: boolean;
  risk_count: number;
}

export interface EnrichedComparisonReport extends ComparisonReport {
  risk_summaries: RiskSummary[];
  has_ground_truth: boolean;
  overlapping_risk_count: number;
  unique_to: Record<string, number>;
  record_id?: string;
  query?: string;
  document_set_id?: string;
  timestamp?: string;
}

export interface EvaluationHistoryItem {
  record_id: string;
  record_type: "comparison" | "single";
  timestamp: string;
  query: string;
  document_set_id: string;
  // Comparison-specific
  system_types?: string[];
  has_ground_truth?: boolean;
  best_system?: string;
  risk_summaries?: RiskSummary[];
  f1_scores?: Record<string, number>;
  // Single-specific
  system_type?: string;
  matched_risks?: number;
  overall_f1?: number;
}

export interface SingleEvaluationRecord {
  record_id: string;
  evaluation: EvaluationResult;
  query: string;
  document_set_id: string;
  timestamp: string;
  record_type: "single";
}

// SSE streaming types
export interface StepProgressEvent {
  step: string;
  substep: string;
  status: string;
  detail: string;
  iteration: number;
}

export interface StreamingAnalysisRequest {
  document_set_id: string;
  query: string;
  run_standard: boolean;
  run_agentic: boolean;
  ablation_config?: AblationConfig | null;
  generate_ground_truth: boolean;
  run_evaluation: boolean;
}

export interface StreamingAnalysisResult {
  run_id: string;
  results: AnalysisResult[];
  ground_truth: { risk_count: number; document_set_id: string } | null;
}

export interface TraceFile {
  filename: string;
  step_name: string;
  timestamp: string;
  duration_s: number;
}

export interface ProcessStepEvent {
  step: string;
  status: "running" | "done";
  elapsed_s: number;
}

export interface ProcessDoneEvent {
  chunks_created: number;
  total_time_s: number;
}

// Aggregate results types
export interface SystemStats {
  count: number;
  avg_risks: number;
  min_risks: number;
  max_risks: number;
  total_risks: number;
  avg_duration: number;
  avg_tokens: number;
  total_tokens: number;
  total_input_tokens: number;
  total_output_tokens: number;
}

export interface EvalStats {
  count: number;
  avg_precision: number;
  avg_recall: number;
  avg_f1: number;
  avg_adjusted_f1: number | null;
}

export interface AggregateResults {
  document_count: number;
  systems: Record<string, SystemStats>;
  evaluation: Record<string, EvalStats>;
  verification: { real: number; fake: number };
  overlap?: {
    avg_shared: number;
    avg_unique_standard: number;
    avg_unique_agentic: number;
  };
  best_system?: Record<string, number>;
  per_document: Record<string, unknown>[];
}

// Categorization types (RQ1b)
export interface RiskCategoryResult {
  risk_id: string;
  category: string;
  confidence: number;
}

export interface CategorizeResponse {
  document_set_id: string;
  record_id: string;
  categorized_count: number;
  new_categories: string[];
  results: RiskCategoryResult[];
}

export interface CategoryStats {
  category: string;
  standard_rag_count: number;
  agentic_rag_count: number;
  ground_truth_count: number;
  total: number;
}

export interface CategoryStatus {
  total_risks: number;
  categorized_count: number;
  uncategorized_count: number;
  categories: CategoryStats[];
}

export interface CategoryConfidenceStats {
  category: string;
  count: number;
  mean_confidence: number;
  min_confidence: number;
  max_confidence: number;
}

export interface CategoryF1Stats {
  category: string;
  support: number;
  standard_f1: number;
  standard_precision: number;
  standard_recall: number;
  agentic_f1: number;
  agentic_precision: number;
  agentic_recall: number;
}

export interface DocumentSetForCategorization {
  document_set_id: string;
  record_id: string;
  standard_rag_risks: number;
  agentic_rag_risks: number;
  ground_truth_risks: number;
  total_risks: number;
  categorized_count: number;
}

// Ablation study types (RQ1a)
export interface AblationDocumentSet {
  document_set_id: string;
  has_full_eval: boolean;
  has_ground_truth: boolean;
}

export interface AblationRunProgress {
  document_set_id: string;
  config_label: string;
  status: "running" | "completed" | "error" | "skipped" | "done";
  f1?: number;
  precision?: number;
  recall?: number;
  message: string;
  current_step: number;
  total_steps: number;
}

export interface AblationStudyResult {
  document_set_id: string;
  config_label: string;
  f1: number;
  precision: number;
  recall: number;
  matched_risks: number;
  total_gt_risks: number;
  total_predicted_risks?: number;
  duration_s: number;
  input_tokens: number;
  output_tokens: number;
}

export interface AblationStudySummary {
  results: AblationStudyResult[];
  averages: Record<string, { f1: number; precision: number; recall: number }>;
  document_set_ids: string[];
  timestamp: string;
}

export interface AblationConfigRisks {
  config_label: string;
  risks: Array<{ risk_id: string; description: string }>;
  risk_count: number;
  categorized_count: number;
}

export interface AblationCategorizeStatus {
  total_risks: number;
  categorized_count: number;
  uncategorized_count: number;
  per_config: Array<{
    config_label: string;
    document_set_id: string;
    total: number;
    categorized: number;
    uncategorized: number;
  }>;
}
