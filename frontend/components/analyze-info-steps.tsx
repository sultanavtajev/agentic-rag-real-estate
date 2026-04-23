"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface StepDef {
  id: string;
  title: string;
  summary: string;
  detail: string;
}

const standardRagSteps: StepDef[] = [
  {
    id: "std-retrieval",
    title: "1. Retrieval",
    summary: "Searches ChromaDB for relevant text chunks.",
    detail:
      "The fixed query is converted to a vector via Voyage AI (the same embedding service used during indexing). " +
      "ChromaDB compares this vector against all stored chunk vectors and returns those scoring above a threshold " +
      "(cosine similarity >= 0.3). At least 3 chunks are always returned, at most 20. " +
      "Note: a broad query like \"identify risks\" yields relatively undirected matches — " +
      "it is Claude that does the heavy lifting of analyzing the context it receives.",
  },
  {
    id: "std-analysis",
    title: "2. LLM analysis",
    summary: "Claude analyzes the text chunks and identifies risks.",
    detail:
      "The text chunks are sent to Claude (claude-sonnet-4-6) with a system prompt that instructs the model " +
      "to identify risks. Claude uses tool-use (identify_risks) to return " +
      "structured risk objects with severity, description, and evidence.",
  },
];

const agenticRagSteps: StepDef[] = [
  {
    id: "agent-planning",
    title: "1. Planning",
    summary: "Decompose the query into targeted sub-questions.",
    detail:
      "Claude generates 2-5 sub-questions based on the main query — " +
      "for example \"moisture damage\", \"condition report\", and \"contract terms\". " +
      "Each sub-question is then embedded separately and queried against the vector database individually. " +
      "This yields much better matches than a single vague search for \"find risks\".",
  },
  {
    id: "agent-retrieval",
    title: "2. Retrieval (specialized)",
    summary: "Each sub-question is embedded and queried against the vector database separately.",
    detail:
      "Each of the 2-5 sub-questions is embedded via Voyage AI and queried against ChromaDB individually. " +
      "Because the sub-questions are concrete (e.g. \"moisture damage in wet rooms\" instead of \"risks\") " +
      "they yield much better semantic matches against relevant chunks. " +
      "Results are deduplicated so the same chunk is not retrieved twice. " +
      "This provides broader and more precise context than Standard RAG's single search.",
  },
  {
    id: "agent-reasoning",
    title: "3. LLM analysis",
    summary: "Claude analyzes all retrieved context.",
    detail:
      "All retrieved text chunks are sent to Claude together with the query. " +
      "Claude identifies risks in the same way as Standard RAG, " +
      "but with broader context from the specialized searches.",
  },
  {
    id: "agent-reflection",
    title: "4. Reflection",
    summary: "Claude reviews its own work and requests more information if needed.",
    detail:
      "The risks from the previous step are sent back to Claude together with all retrieved chunks and the original query. " +
      "Claude now takes on the role of a quality controller (via the validate_risks tool-use) and does the following: " +
      "(1) Assesses whether the evidence in the chunks actually supports each risk. " +
      "(2) Adjusts confidence up or down — risks below 0.3 are removed. " +
      "(3) Proposes new search queries if Claude believes important information is missing. " +
      "If new search queries are returned, more chunks are retrieved from ChromaDB and Claude re-analyzes " +
      "with expanded context. This loop runs at most 2 times. " +
      "The result is fewer false positives (higher precision) and better coverage (higher recall)."
  },
];

const groundTruthSteps: StepDef[] = [
  {
    id: "gt-parsing",
    title: "1. Document parsing",
    summary: "Loads and parses all PDFs in the document set.",
    detail:
      "All PDFs in the document set are read and the text is extracted page by page. " +
      "The full text is sent to Claude for exhaustive analysis.",
  },
  {
    id: "gt-generation",
    title: "2. Ground Truth generation",
    summary: "Claude annotates all risks exhaustively.",
    detail:
      "The full document text is sent to Claude with a special prompt that instructs the model " +
      "to act as a thorough annotator. Claude identifies every risk without a confidence threshold — " +
      "this is the Ground Truth against which other systems are evaluated.",
  },
];

const evaluationSteps: StepDef[] = [
  {
    id: "eval-matching",
    title: "1. Matching",
    summary: "Matches identified risks against Ground Truth.",
    detail:
      "Risks from the analysis are matched against Ground Truth using Jaccard overlap " +
      "on descriptions. A minimum overlap of 0.3 is required to count as a match.",
  },
  {
    id: "eval-metrics",
    title: "2. Metrics",
    summary: "Computes precision, recall, and F1 score.",
    detail:
      "Precision: how many of the identified risks are correct. " +
      "Recall: how many of the actual risks were found. " +
      "F1: the harmonic mean of precision and recall.",
  },
];

function StepSection({ title, steps }: { title: string; steps: StepDef[] }) {
  return (
    <div>
      <h3 className="text-sm font-semibold text-foreground mb-1">{title}</h3>
      <Accordion type="multiple" className="w-full">
        {steps.map((s) => (
          <AccordionItem key={s.id} value={s.id} className="border-b-0">
            <AccordionTrigger className="py-1.5 text-sm hover:no-underline">
              <span>
                <strong className="text-foreground">{s.title}</strong>
                <span className="text-muted-foreground"> — {s.summary}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground pb-2 pl-4">
              {s.detail}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function AnalyzeInfoSteps() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        How the analysis works (click for details):
      </p>
      <div className="space-y-3">
        <StepSection title="Standard RAG" steps={standardRagSteps} />
        <StepSection title="Agentic RAG" steps={agenticRagSteps} />
        <StepSection title="Ground Truth" steps={groundTruthSteps} />
        <StepSection title="Evaluation (optional)" steps={evaluationSteps} />
      </div>
    </div>
  );
}
