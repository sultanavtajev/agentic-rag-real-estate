"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ErrorBar, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function ConfidenceIntervalChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const stdF1s: number[] = [];
  const agF1s: number[] = [];
  for (const doc of data.per_document) {
    const d = doc as Record<string, unknown>;
    const ev = d.evaluation as Record<string, Record<string, number>> | undefined;
    if (ev?.standard_rag?.f1 != null) stdF1s.push(ev.standard_rag.f1 * 100);
    if (ev?.agentic_rag?.f1 != null) agF1s.push(ev.agentic_rag.f1 * 100);
  }

  const stddev = (arr: number[]) => {
    if (arr.length < 2) return 0;
    const mean = arr.reduce((a, b) => a + b) / arr.length;
    return Math.sqrt(arr.reduce((s, v) => s + (v - mean) ** 2, 0) / (arr.length - 1));
  };

  const barData = [
    { system: "Standard RAG", f1: (data.evaluation.standard_rag?.avg_f1 ?? 0) * 100, stdDev: stddev(stdF1s) },
    { system: "Agentic RAG", f1: (data.evaluation.agentic_rag?.avg_f1 ?? 0) * 100, stdDev: stddev(agF1s) },
  ];

  return (
    <ChartCard prefix={prefix} title="F1 score with standard deviation">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="system" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
          <Bar dataKey="f1" fill={COLORS.primary} name="F1 (%)">
            <ErrorBar dataKey="stdDev" width={4} strokeWidth={2} stroke="#000" />
            <LabelList dataKey="f1" position="top" style={{ fontSize: 10 }} formatter={(v: number) => `${v.toFixed(1)}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>Standard RAG: F1 = {barData[0].f1.toFixed(1)}% (±{barData[0].stdDev.toFixed(1)}%). Agentic RAG: F1 = {barData[1].f1.toFixed(1)}% (±{barData[1].stdDev.toFixed(1)}%). The standard deviation shows the spread in F1 scores across {stdF1s.length} document sets.</p>
      </Note>
    </ChartCard>
  );
}
