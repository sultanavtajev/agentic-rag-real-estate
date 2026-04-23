"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function AblationResultsChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const chartData = [
    { config: "Standard RAG\n(baseline)", f1: (data.evaluation.standard_rag?.avg_f1 ?? 0) * 100 },
    { config: "Agentic RAG\n(P+T+R)", f1: (data.evaluation.agentic_rag?.avg_f1 ?? 0) * 100 },
  ];

  return (
    <ChartCard prefix={prefix} title="Ablation study — F1 per configuration">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="config" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
          <Bar dataKey="f1" fill={COLORS.primary} name="F1 (%)">
            <LabelList dataKey="f1" position="top" style={{ fontSize: 10 }} formatter={(v: number) => `${v.toFixed(1)}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>Shows F1 score for baseline (Standard RAG) and full agentic configuration (P+T+R = Planning + Tool use + Reflection). For a complete ablation study (T+R, P+R, P+T, NONE) separate runs must be performed.</p>
      </Note>
    </ChartCard>
  );
}
