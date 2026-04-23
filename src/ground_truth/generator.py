"""Auto-generering av ground truth-annoteringer med Claude."""

from __future__ import annotations

import logging
import time
from datetime import datetime
from pathlib import Path
from typing import TYPE_CHECKING

import anthropic

from src.config import Settings
from src.document_processing.pdf_parser import PDFParser
from src.ground_truth.utils import detect_document_type
from src.models.schemas import (
    GroundTruthAnnotation,
    GroundTruthDocument,
    GroundTruthRisk,
    ParsedDocument,
)
from src.standard_rag.pipeline import IDENTIFY_RISKS_TOOL, RISK_ANALYSIS_SYSTEM_PROMPT

if TYPE_CHECKING:
    from src.tracing.collector import TraceCollector

logger = logging.getLogger(__name__)

_MAX_CHARS_SINGLE_CALL = 150_000

_STEP = "ground_truth"


class GroundTruthGenerator:
    """Genererer ground truth-annoteringer ved hjelp av Claude."""

    def __init__(self, settings: Settings) -> None:
        self.settings = settings
        self.client = anthropic.Anthropic(api_key=settings.anthropic_api_key)
        self.model = settings.claude_model
        self.parser = PDFParser()

    def generate(
        self,
        set_id: str,
        raw_dir: Path,
        *,
        raise_on_empty: bool = False,
        collector: TraceCollector | None = None,
    ) -> GroundTruthAnnotation:
        """Generer ground truth-annotering for et dokumentsett."""
        start_time = time.time()
        self._total_input_tokens = 0
        self._total_output_tokens = 0
        doc_dir = raw_dir / set_id
        pdf_files = sorted(doc_dir.glob("*.pdf"))

        if not pdf_files:
            raise ValueError(f"Ingen PDF-filer funnet i {doc_dir}")

        if collector:
            collector.emit_step(_STEP, "parsing_pdfs", "running", f"{len(pdf_files)} PDF-er")

        parsed_docs = self._parse_documents(pdf_files, set_id)

        if collector:
            collector.emit_step(_STEP, "parsing_pdfs", "done")
            collector.emit_step(_STEP, "detecting_types", "running")

        full_text = self._build_full_text(parsed_docs)

        if collector:
            collector.emit_step(_STEP, "detecting_types", "done")
            collector.emit_step(_STEP, "generating", "running")

        if len(full_text) > _MAX_CHARS_SINGLE_CALL:
            logger.info(
                "Tekst er %d tegn, prosesserer per dokument og merger",
                len(full_text),
            )
            all_risks = self._generate_per_document(parsed_docs, set_id, collector)
        else:
            all_risks = self._generate_single(full_text, set_id, collector)

        if collector:
            collector.emit_step(
                _STEP,
                "generating",
                "done",
                f"{len(all_risks)} risikoer generert",
            )

        if not all_risks:
            logger.warning(
                "Ingen risikoer ble funnet for dokumentsett %s — sjekk dokumenttype-deteksjon",
                set_id,
            )
            if raise_on_empty:
                raise RuntimeError(
                    f"Ground truth-generering for '{set_id}' fant 0 risikoer. "
                    "Sjekk at dokumentene inneholder relevant innhold "
                    "og at dokumenttype ble korrekt detektert."
                )

        if collector:
            collector.emit_step(_STEP, "parsing_risks", "running")

        documents_reviewed = [
            GroundTruthDocument(
                document_id=doc.document_id,
                document_type=doc.document_type,
                filename=doc.filename,
            )
            for doc in parsed_docs
        ]

        logger.info(
            "Generert ground truth for %s: %d risikoer",
            set_id,
            len(all_risks),
        )

        if collector:
            collector.emit_step(_STEP, "parsing_risks", "done", f"{len(all_risks)} risikoer")

        duration_s = round(time.time() - start_time, 2)

        return GroundTruthAnnotation(
            document_set_id=set_id,
            annotator="claude-auto-generated",
            annotation_date=datetime.now().strftime("%Y-%m-%d"),
            documents_reviewed=documents_reviewed,
            risks=all_risks,
            duration_s=duration_s,
            input_tokens=self._total_input_tokens,
            output_tokens=self._total_output_tokens,
            notes=f"Auto-generert ground truth med {self.model}",
        )

    def _parse_documents(self, pdf_files: list[Path], set_id: str) -> list[ParsedDocument]:
        """Parse alle PDF-filer i dokumentsettet."""
        parsed_docs = []
        for pdf_path in pdf_files:
            doc_id = f"{set_id}_{pdf_path.stem}"
            doc = self.parser.parse(
                pdf_path,
                document_id=doc_id,
                document_type=detect_document_type(pdf_path.name),
            )
            parsed_docs.append(doc)
        return parsed_docs

    def _build_full_text(self, parsed_docs: list[ParsedDocument]) -> str:
        """Bygg full tekst fra alle parsede dokumenter."""
        parts = []
        for doc in parsed_docs:
            parts.append(f"=== DOKUMENT: {doc.filename} ===")
            for page in doc.pages:
                parts.append(f"--- Side {page.page_number} ---")
                parts.append(page.text)
        return "\n\n".join(parts)

    def _build_document_text(self, doc: ParsedDocument) -> str:
        """Bygg tekst for et enkelt dokument."""
        parts = [f"=== DOKUMENT: {doc.filename} ==="]
        for page in doc.pages:
            parts.append(f"--- Side {page.page_number} ---")
            parts.append(page.text)
        return "\n\n".join(parts)

    def _generate_single(
        self,
        full_text: str,
        set_id: str,
        collector: TraceCollector | None = None,
    ) -> list[GroundTruthRisk]:
        """Generer risikoer fra full tekst i ett kall."""
        user_prompt = (
            f"Analyser følgende eiendomsdokumenter og identifiser ALLE risikoer.\n\n{full_text}"
        )
        if collector:
            response = collector.wrap_call(
                "ground_truth_generating",
                RISK_ANALYSIS_SYSTEM_PROMPT,
                user_prompt,
                self._call_claude,
                user_prompt,
            )
        else:
            response = self._call_claude(user_prompt)
        return self._parse_risks(response, set_id)

    def _generate_per_document(
        self,
        parsed_docs: list[ParsedDocument],
        set_id: str,
        collector: TraceCollector | None = None,
    ) -> list[GroundTruthRisk]:
        """Generer risikoer per dokument og merg resultater."""
        all_risks: list[GroundTruthRisk] = []
        for idx, doc in enumerate(parsed_docs):
            if collector:
                collector.emit_step(
                    _STEP,
                    "generating",
                    "running",
                    f"Dokument {idx + 1}/{len(parsed_docs)}: {doc.filename}",
                )

            doc_text = self._build_document_text(doc)
            user_prompt = (
                f"Analyser følgende eiendomsdokument og identifiser ALLE risikoer.\n\n{doc_text}"
            )

            if collector:
                response = collector.wrap_call(
                    f"ground_truth_doc_{idx + 1}",
                    RISK_ANALYSIS_SYSTEM_PROMPT,
                    user_prompt,
                    self._call_claude,
                    user_prompt,
                )
            else:
                response = self._call_claude(user_prompt)

            risks = self._parse_risks(response, set_id, offset=len(all_risks))
            all_risks.extend(risks)

        return all_risks

    def _call_claude(self, user_prompt: str) -> anthropic.types.Message:
        """Kall Claude API med tool_use."""
        response = self.client.messages.create(
            model=self.model,
            max_tokens=16384,
            temperature=0.0,
            system=RISK_ANALYSIS_SYSTEM_PROMPT,
            messages=[{"role": "user", "content": user_prompt}],
            tools=[IDENTIFY_RISKS_TOOL],
            tool_choice={"type": "tool", "name": "identify_risks"},
        )
        self._total_input_tokens += response.usage.input_tokens
        self._total_output_tokens += response.usage.output_tokens
        return response

    def _parse_risks(
        self,
        response: anthropic.types.Message,
        set_id: str,
        offset: int = 0,
    ) -> list[GroundTruthRisk]:
        """Parse Claude tool_use-respons til GroundTruthRisk-liste."""
        risks = []
        for block in response.content:
            if block.type == "tool_use" and block.name == "identify_risks":
                raw_risks = block.input.get("risks", [])
                for i, raw in enumerate(raw_risks):
                    details = {**raw.get("details", {}), "confidence": raw.get("confidence", 1.0)}
                    risk = GroundTruthRisk(
                        risk_id=f"gt_{set_id}_{offset + i + 1:03d}",
                        description=raw["description"],
                        evidence=raw.get("evidence", []),
                        source_documents=raw.get("source_documents", []),
                        source_pages=raw.get("source_pages", []),
                        details=details,
                    )
                    risks.append(risk)
        logger.info("Parset %d risikoer fra Claude-respons", len(risks))
        return risks
