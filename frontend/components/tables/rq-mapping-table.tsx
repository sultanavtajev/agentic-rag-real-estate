"use client";

import { ChartCard } from "@/components/charts/chart-helpers";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const rows = [
  {
    rq: "RQ",
    question:
      "To what extent does agentic RAG improve risk identification vs. standard RAG?",
    method: "Comparison of two systems on identical document sets",
    data: "204 Norwegian sales prospectuses, auto-generated Ground Truth",
    metrics: "Precision, Recall, F1, Adjusted F1",
  },
  {
    rq: "RQ1a",
    question: "Which agentic components contribute most to improved performance?",
    method: "Ablation study, 2\u00B3 factorial design (8 configurations)",
    data: "Same 204 document sets, all configurations evaluated against GT",
    metrics: "Delta-F1 per component, pair interactions",
  },
  {
    rq: "RQ1b",
    question:
      "For which risk categories is the improvement greatest?",
    method: "LLM-based risk categorization",
    data: "29 categories, all identified risks from both systems",
    metrics: "F1 per risk category per system",
  },
];

export function RQMappingTable({ prefix }: { prefix?: string }) {
  return (
    <ChartCard
      prefix={prefix}
      title="Table 3.1: RQ to methodology mapping"
    >
      <Table className="table-fixed w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[8%] font-semibold">RQ</TableHead>
            <TableHead className="w-[24%] font-semibold">
              Research Question
            </TableHead>
            <TableHead className="w-[24%] font-semibold">Method</TableHead>
            <TableHead className="w-[24%] font-semibold">Data Source</TableHead>
            <TableHead className="w-[20%] font-semibold">Metrics</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((r) => (
            <TableRow key={r.rq} className="align-top">
              <TableCell className="font-semibold">{r.rq}</TableCell>
              <TableCell className="text-sm break-words whitespace-normal">{r.question}</TableCell>
              <TableCell className="text-sm break-words whitespace-normal">{r.method}</TableCell>
              <TableCell className="text-sm break-words whitespace-normal">{r.data}</TableCell>
              <TableCell className="text-sm break-words whitespace-normal">{r.metrics}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ChartCard>
  );
}
