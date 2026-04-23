"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function StackedMatchChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  let stdMatched = 0, stdFP = 0, stdFN = 0, stdCount = 0;
  let agMatched = 0, agFP = 0, agFN = 0, agCount = 0;

  for (const doc of data.per_document) {
    const ev = (doc as Record<string, Record<string, Record<string, number>>>).evaluation;
    if (ev?.standard_rag) {
      stdMatched += ev.standard_rag.matched ?? 0;
      stdFP += ev.standard_rag.fp ?? 0;
      stdFN += ev.standard_rag.fn ?? 0;
      stdCount++;
    }
    if (ev?.agentic_rag) {
      agMatched += ev.agentic_rag.matched ?? 0;
      agFP += ev.agentic_rag.fp ?? 0;
      agFN += ev.agentic_rag.fn ?? 0;
      agCount++;
    }
  }

  const chartData = [
    {
      system: "Standard RAG",
      "Matched": stdCount ? stdMatched / stdCount : 0,
      "Unique (FP)": stdCount ? stdFP / stdCount : 0,
      "Missed (FN)": stdCount ? stdFN / stdCount : 0,
    },
    {
      system: "Agentic RAG",
      "Matched": agCount ? agMatched / agCount : 0,
      "Unique (FP)": agCount ? agFP / agCount : 0,
      "Missed (FN)": agCount ? agFN / agCount : 0,
    },
  ];

  return (
    <ChartCard prefix={prefix} title="Average matching distribution">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="system" />
          <YAxis />
          <Tooltip formatter={(v: number) => v.toFixed(1)} />
          <Legend />
          <Bar dataKey="Matched" stackId="a" fill="#22c55e">
            <LabelList dataKey="Matched" position="center" style={{ fontSize: 10, fill: "#fff" }} />
          </Bar>
          <Bar dataKey="Unique (FP)" stackId="a" fill="#f97316">
            <LabelList dataKey="Unique (FP)" position="center" style={{ fontSize: 10, fill: "#fff" }} />
          </Bar>
          <Bar dataKey="Missed (FN)" stackId="a" fill="#ef4444">
            <LabelList dataKey="Missed (FN)" position="center" style={{ fontSize: 10, fill: "#fff" }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>Standard RAG matches on average {chartData[0]["Matched"].toFixed(1)} risks against GT, has {chartData[0]["Unique (FP)"].toFixed(1)} unmatched and misses {chartData[0]["Missed (FN)"].toFixed(1)}. Agentic RAG matches {chartData[1]["Matched"].toFixed(1)}, has {chartData[1]["Unique (FP)"].toFixed(1)} unmatched and misses {chartData[1]["Missed (FN)"].toFixed(1)}.</p>
      </Note>
    </ChartCard>
  );
}
