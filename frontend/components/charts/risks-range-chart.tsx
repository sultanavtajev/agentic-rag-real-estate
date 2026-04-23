"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ErrorBar, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function RisksRangeChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const std = data.systems.standard_rag;
  const ag = data.systems.agentic_rag;
  const gt = data.systems.ground_truth;

  const chartData = [
    {
      system: "Standard RAG",
      avg: std?.avg_risks ?? 0,
      errorLow: (std?.avg_risks ?? 0) - (std?.min_risks ?? 0),
      errorHigh: (std?.max_risks ?? 0) - (std?.avg_risks ?? 0),
      total: std?.total_risks ?? 0,
    },
    {
      system: "Agentic RAG",
      avg: ag?.avg_risks ?? 0,
      errorLow: (ag?.avg_risks ?? 0) - (ag?.min_risks ?? 0),
      errorHigh: (ag?.max_risks ?? 0) - (ag?.avg_risks ?? 0),
      total: ag?.total_risks ?? 0,
    },
    {
      system: "Ground Truth",
      avg: gt?.avg_risks ?? 0,
      errorLow: (gt?.avg_risks ?? 0) - (gt?.min_risks ?? 0),
      errorHigh: (gt?.max_risks ?? 0) - (gt?.avg_risks ?? 0),
      total: gt?.total_risks ?? 0,
    },
  ];

  return (
    <ChartCard prefix={prefix} title="Risk count range per system (avg ± min/max)">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="system" />
          <YAxis />
          <Tooltip formatter={(v: number) => v.toFixed(1)} />
          <Bar dataKey="avg" fill={COLORS.primary} name="Average risks">
            <ErrorBar dataKey="errorHigh" direction="y" width={4} strokeWidth={2} stroke="#000" />
            <LabelList dataKey="avg" position="top" style={{ fontSize: 11 }} formatter={(v: number) => v.toFixed(1)} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>Standard RAG: avg {std?.avg_risks?.toFixed(1)}, range {std?.min_risks}–{std?.max_risks}, total {std?.total_risks?.toLocaleString()}. Agentic RAG: avg {ag?.avg_risks?.toFixed(1)}, range {ag?.min_risks}–{ag?.max_risks}, total {ag?.total_risks?.toLocaleString()}. Ground Truth: avg {gt?.avg_risks?.toFixed(1)}, range {gt?.min_risks}–{gt?.max_risks}, total {gt?.total_risks?.toLocaleString()}.</p>
      </Note>
    </ChartCard>
  );
}
