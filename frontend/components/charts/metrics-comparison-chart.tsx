"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function MetricsComparisonChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const stdE = data.evaluation.standard_rag;
  const agE = data.evaluation.agentic_rag;

  const chartData = [
    { metric: "Precision", "Standard RAG": (stdE?.avg_precision ?? 0) * 100, "Agentic RAG": (agE?.avg_precision ?? 0) * 100 },
    { metric: "Recall", "Standard RAG": (stdE?.avg_recall ?? 0) * 100, "Agentic RAG": (agE?.avg_recall ?? 0) * 100 },
    { metric: "F1", "Standard RAG": (stdE?.avg_f1 ?? 0) * 100, "Agentic RAG": (agE?.avg_f1 ?? 0) * 100 },
  ];

  const f1Ratio = (stdE?.avg_f1 ?? 0) > 0 ? ((agE?.avg_f1 ?? 0) / stdE!.avg_f1).toFixed(1) : "N/A";

  return (
    <ChartCard prefix={prefix} title="Precision, Recall and F1 (%)">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="metric" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
          <Legend />
          <Bar dataKey="Standard RAG" fill={COLORS.secondary}>
            <LabelList dataKey="Standard RAG" position="top" style={{ fontSize: 10 }} formatter={(v: number) => `${v.toFixed(1)}%`} />
          </Bar>
          <Bar dataKey="Agentic RAG" fill={COLORS.primary}>
            <LabelList dataKey="Agentic RAG" position="top" style={{ fontSize: 10 }} formatter={(v: number) => `${v.toFixed(1)}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>Agentic RAG has {f1Ratio}x higher F1 ({((agE?.avg_f1 ?? 0) * 100).toFixed(1)}% vs {((stdE?.avg_f1 ?? 0) * 100).toFixed(1)}%). Precision: {((agE?.avg_precision ?? 0) * 100).toFixed(1)}% vs {((stdE?.avg_precision ?? 0) * 100).toFixed(1)}%. Recall: {((agE?.avg_recall ?? 0) * 100).toFixed(1)}% vs {((stdE?.avg_recall ?? 0) * 100).toFixed(1)}%.</p>
      </Note>
    </ChartCard>
  );
}
