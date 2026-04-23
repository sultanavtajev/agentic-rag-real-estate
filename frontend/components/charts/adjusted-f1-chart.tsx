"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function AdjustedF1Chart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const stdE = data.evaluation.standard_rag;
  const agE = data.evaluation.agentic_rag;

  const chartData = [
    { system: "Standard RAG", "Unadjusted F1": (stdE?.avg_f1 ?? 0) * 100, "Adjusted F1": (stdE?.avg_adjusted_f1 ?? 0) * 100 },
    { system: "Agentic RAG", "Unadjusted F1": (agE?.avg_f1 ?? 0) * 100, "Adjusted F1": (agE?.avg_adjusted_f1 ?? 0) * 100 },
  ];

  return (
    <ChartCard prefix={prefix} title="Unadjusted vs Adjusted F1 (%)">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="system" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
          <Legend />
          <Bar dataKey="Unadjusted F1" fill={COLORS.secondary}>
            <LabelList dataKey="Unadjusted F1" position="top" style={{ fontSize: 10 }} formatter={(v: number) => `${v.toFixed(1)}%`} />
          </Bar>
          <Bar dataKey="Adjusted F1" fill={COLORS.primary}>
            <LabelList dataKey="Adjusted F1" position="top" style={{ fontSize: 10 }} formatter={(v: number) => `${v.toFixed(1)}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>After verification, F1 increases for Standard RAG from {((stdE?.avg_f1 ?? 0) * 100).toFixed(1)}% to {((stdE?.avg_adjusted_f1 ?? 0) * 100).toFixed(1)}% and for Agentic RAG from {((agE?.avg_f1 ?? 0) * 100).toFixed(1)}% to {((agE?.avg_adjusted_f1 ?? 0) * 100).toFixed(1)}%. The improvement is due to confirmed real risks no longer being counted as false positives.</p>
      </Note>
    </ChartCard>
  );
}
