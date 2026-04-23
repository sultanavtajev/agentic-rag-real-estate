"""Pydantic-modeller og enums for dokumentanalyse-systemet."""

from datetime import datetime
from enum import Enum

from pydantic import BaseModel, Field


class DocumentType(str, Enum):
    """Type dokument som analyseres."""

    salgsoppgave = "salgsoppgave"


# --- Dokumentmodeller ---


class ParsedPage(BaseModel):
    """En enkelt side fra et parset dokument."""

    page_number: int = Field(description="Sidenummer i originaldokumentet")
    text: str = Field(description="Ekstrahert tekst fra siden")


class ParsedDocument(BaseModel):
    """Et fullstendig parset dokument med alle sider."""

    document_id: str = Field(description="Unik identifikator for dokumentet")
    document_type: DocumentType
    filename: str
    pages: list[ParsedPage]
    metadata: dict = Field(default_factory=dict)


class DocumentChunk(BaseModel):
    """En tekstdel fra et dokument, brukt for embedding og soek."""

    chunk_id: str = Field(description="Unik identifikator for chunken")
    document_id: str = Field(description="ID til kildedokumentet")
    document_type: DocumentType
    text: str
    page_numbers: list[int] = Field(
        description="Sidenumre chunken stammer fra",
    )
    section: str | None = None
    metadata: dict = Field(default_factory=dict)


# --- Risikomodeller ---


class IdentifiedRisk(BaseModel):
    """En risiko identifisert av analysesystemet."""

    risk_id: str = Field(description="Unik identifikator for risikoen")
    description: str = Field(description="Beskrivelse av risikoen")
    evidence: list[str] = Field(
        description="Tekstutdrag som underbygger risikoen",
    )
    source_documents: list[str] = Field(
        description="ID-er til kildedokumenter",
    )
    source_pages: list[int] = Field(
        description="Sidenumre der risikoen ble funnet",
    )
    confidence: float = Field(description="Konfidensgrad mellom 0 og 1")
    details: dict = Field(default_factory=dict)


class AnalysisResult(BaseModel):
    """Resultat fra en komplett risikoanalyse."""

    run_id: str = Field(description="Unik identifikator for analysekoringen")
    session_id: str = Field(default="", description="Felles ID for analyser kjort sammen")
    document_set_id: str = Field(description="ID til dokumentsettet som ble analysert")
    system_type: str = Field(description="Type analysesystem brukt")
    risks: list[IdentifiedRisk]
    raw_llm_response: str = Field(
        description="Ra respons fra LLM for sporbarhet",
    )
    timestamp: datetime = Field(default_factory=datetime.now)
    config: dict = Field(default_factory=dict)
    duration_s: float = Field(default=0.0, description="Total tid i sekunder")
    input_tokens: int = Field(default=0, description="Totalt antall input-tokens brukt")
    output_tokens: int = Field(default=0, description="Totalt antall output-tokens brukt")


# --- Ground truth-modeller ---


class GroundTruthDocument(BaseModel):
    """Dokumentreferanse i ground truth-annotering."""

    document_id: str
    document_type: DocumentType
    filename: str


class GroundTruthRisk(BaseModel):
    """En manuelt annotert risiko brukt som fasit."""

    risk_id: str = Field(description="Unik identifikator for risikoen")
    description: str
    evidence: list[str]
    source_documents: list[str]
    source_pages: list[int]
    details: dict = Field(default_factory=dict)


class GroundTruthAnnotation(BaseModel):
    """Komplett ground truth-annotering for et dokumentsett."""

    document_set_id: str = Field(
        description="ID til dokumentsettet som er annotert",
    )
    annotator: str = Field(description="Navn pa personen som annoterte")
    annotation_date: str = Field(description="Dato for annotering (ISO-format)")
    documents_reviewed: list[GroundTruthDocument]
    risks: list[GroundTruthRisk]
    notes: str = Field(description="Generelle notater fra annotator")
    duration_s: float = Field(default=0.0, description="Total tid i sekunder")
    input_tokens: int = Field(default=0, description="Totalt antall input-tokens brukt")
    output_tokens: int = Field(default=0, description="Totalt antall output-tokens brukt")


# --- Evalueringsmodeller ---


class MatchedPair(BaseModel):
    """Et par av matchede risikoer mellom system og ground truth."""

    system_risk: IdentifiedRisk
    ground_truth_risk: GroundTruthRisk


class VerifiedRisk(BaseModel):
    """En verifisert umatched risiko."""

    risk: IdentifiedRisk
    is_real_risk: bool = Field(description="Om risikoen stoettes av dokumentteksten")
    reasoning: str = Field(default="", description="Begrunnelse fra Claude")


class OverallMetrics(BaseModel):
    """Aggregerte evalueringsmetrikker pa tvers av alle kategorier."""

    precision: float
    recall: float
    f1: float
    total_support: int = Field(description="Totalt antall ground truth-risikoer")


class EvaluationResult(BaseModel):
    """Komplett evalueringsresultat for en analysekjoring."""

    run_id: str = Field(description="ID til analysekoringen som ble evaluert")
    system_type: str = Field(description="Type analysesystem som ble evaluert")
    overall_metrics: OverallMetrics
    matched_risks: int = Field(
        description="Antall risikoer som ble korrekt matchet",
    )
    unmatched_predicted: int = Field(
        description="Antall predikerte risikoer uten match (false positives)",
    )
    unmatched_ground_truth: int = Field(
        description="Antall ground truth-risikoer uten match (false negatives)",
    )
    matched_pair_details: list[MatchedPair] = Field(
        default_factory=list,
        description="Detaljer for hvert matchet par med overlap-score",
    )
    unmatched_predicted_risks: list[IdentifiedRisk] = Field(
        default_factory=list,
        description="Predikerte risikoer uten match (false positives)",
    )
    unmatched_ground_truth_risks: list[GroundTruthRisk] = Field(
        default_factory=list,
        description="Ground truth-risikoer uten match (false negatives)",
    )
    verified_unmatched: list[VerifiedRisk] = Field(
        default_factory=list,
        description="Verifiserte umatchede risikoer med begrunnelse",
    )
    adjusted_metrics: OverallMetrics | None = Field(
        default=None,
        description="Justerte metrikker der bekreftet ekte risikoer ikke telles som FP",
    )


# --- Kategoriseringsmodeller ---


class RiskCategoryResult(BaseModel):
    """Resultat fra kategorisering av en enkelt risiko."""

    risk_id: str = Field(description="ID for risikoen som ble kategorisert")
    category: str = Field(description="Tildelt kategori")
    confidence: float = Field(description="Konfidensverdi 0-1")


class CategorizeRequest(BaseModel):
    """Foresprsel om kategorisering av risikoer i et dokumentsett."""

    document_set_id: str
    record_id: str = Field(description="eval_history record UUID")


class CategorizeResponse(BaseModel):
    """Respons fra kategorisering av risikoer."""

    document_set_id: str
    record_id: str
    categorized_count: int
    new_categories: list[str]
    results: list[RiskCategoryResult]


class CategoryStats(BaseModel):
    """Statistikk for en enkelt kategori."""

    category: str
    standard_rag_count: int = 0
    agentic_rag_count: int = 0
    ground_truth_count: int = 0
    total: int = 0


class CategoryStatus(BaseModel):
    """Samlet kategoriseringsstatus."""

    total_risks: int
    categorized_count: int
    uncategorized_count: int
    categories: list[CategoryStats]


class DocumentSetForCategorization(BaseModel):
    """Dokumentsett med kategoriseringsinformasjon."""

    document_set_id: str
    record_id: str
    standard_rag_risks: int = 0
    agentic_rag_risks: int = 0
    ground_truth_risks: int = 0
    total_risks: int = 0
    categorized_count: int = 0


# --- Ablasjonsstudie-modeller ---


class AblationRunRequest(BaseModel):
    """Foresporsel om aa kjore ablasjonsstudie."""

    document_set_ids: list[str] = Field(description="Dokumentsett-IDer som skal analyseres")


class AblationRunProgress(BaseModel):
    """Fremdriftsoppdatering for en ablasjonskonfigurasjon."""

    document_set_id: str
    config_label: str = Field(description="P+T+R, T+R, P+R, P+T eller NONE")
    status: str = Field(description="running, completed, error, skipped")
    f1: float | None = None
    precision: float | None = None
    recall: float | None = None
    message: str = ""
    current_step: int = 0
    total_steps: int = 0


class AblationStudyResult(BaseModel):
    """Resultat fra en enkelt ablasjonskonfigurasjon for et dokumentsett."""

    document_set_id: str
    config_label: str
    f1: float
    precision: float
    recall: float
    matched_risks: int
    total_gt_risks: int
    total_predicted_risks: int | None = None
    duration_s: float
    input_tokens: int
    output_tokens: int


class AblationStudySummary(BaseModel):
    """Samlet resultat fra en ablasjonsstudie."""

    results: list[AblationStudyResult]
    averages: dict[str, dict[str, float]]
    document_set_ids: list[str]
    timestamp: str


# --- Ablasjon-kategoriseringsmodeller ---


class CategoryF1Stats(BaseModel):
    """F1/precision/recall per category for Standard vs Agentic RAG."""

    category: str
    support: int
    standard_f1: float
    standard_precision: float
    standard_recall: float
    agentic_f1: float
    agentic_precision: float
    agentic_recall: float


class CategoryConfidenceStats(BaseModel):
    """Konfidensstatistikk per kategori."""

    category: str
    count: int
    mean_confidence: float
    min_confidence: float
    max_confidence: float


class AblationConfigRisks(BaseModel):
    """Risikoer fra en enkelt ablasjonskonfigurasjon."""

    config_label: str
    risks: list[dict] = Field(description="Liste med {risk_id, description}")
    risk_count: int
    categorized_count: int


class AblationCategorizeRequest(BaseModel):
    """Foresporsel om kategorisering av ablasjon-risikoer."""

    document_set_id: str
    config_labels: list[str] = Field(description="F.eks. ['T+R', 'P+R']")


class AblationCategorizeStatus(BaseModel):
    """Samlet kategoriseringsstatus for ablasjon-risikoer."""

    total_risks: int
    categorized_count: int
    uncategorized_count: int
    per_config: list[dict] = Field(
        description="Liste med {config_label, total, categorized, uncategorized}",
    )
