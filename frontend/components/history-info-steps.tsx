"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    id: "matching",
    title: "1. Matching",
    summary: "Risks from the analysis are matched against Ground Truth.",
    detail:
      "Each risk from the analysis system is compared with all risks in the Ground Truth " +
      "using Jaccard overlap on descriptions and evidence. " +
      "A minimum overlap of 0.3 is required to count as a match. " +
      "Matching is greedy — the best pairs are chosen first, and each risk can only be matched once.",
  },
  {
    id: "metrics",
    title: "2. Metrics",
    summary: "Precision, recall, and F1 score are computed.",
    detail:
      "Precision: of the risks the system found, how many were actually real? (High precision = few false alarms). " +
      "Recall: of all the real risks, how many did the system manage to find? (High recall = few misses). " +
      "F1: the harmonic mean of precision and recall — balances both.",
  },
  {
    id: "comparison",
    title: "3. Comparison",
    summary: "The systems are compared across several dimensions.",
    detail:
      "Comparison without Ground Truth: number of risks per system, shared risks, and unique risks. " +
      "Comparison with Ground Truth: precision, recall, and F1 per system. " +
      "Time spent and tokens consumed are also compared. " +
      "Statistical significance is tested with a paired bootstrap test (p-value).",
  },
  {
    id: "overlap",
    title: "4. Overlap and unique findings",
    summary: "Identify which risks are shared and which are unique.",
    detail:
      "The systems are compared pairwise to find overlapping risks (both systems found the same risk) " +
      "and unique risks (only one system found it). " +
      "This shows the strengths of each system — for example whether Agentic RAG finds risks that Standard RAG misses.",
  },
];

export function HistoryInfoSteps() {
  return (
    <div className="space-y-2">
      <p className="text-sm text-muted-foreground">
        How the evaluation works (click for details):
      </p>
      <Accordion type="multiple" className="w-full">
        {steps.map((s) => (
          <AccordionItem key={s.id} value={s.id} className="border-b-0">
            <AccordionTrigger className="py-2 text-sm hover:no-underline">
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
