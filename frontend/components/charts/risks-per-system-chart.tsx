"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function RisksPerSystemChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const std = data.systems.standard_rag;
  const ag = data.systems.agentic_rag;
  const gt = data.systems.ground_truth;

  const chartData = [
    { system: "Standard RAG", risks: std?.avg_risks ?? 0 },
    { system: "Agentic RAG", risks: ag?.avg_risks ?? 0 },
    { system: "Ground Truth", risks: gt?.avg_risks ?? 0 },
  ];

  const pctMore = std?.avg_risks ? (((ag?.avg_risks ?? 0) / std.avg_risks - 1) * 100).toFixed(0) : "0";

  return (
    <ChartCard prefix={prefix} title="Average risks per system">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="system" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="risks" fill={COLORS.primary} name="Risks">
            <LabelList dataKey="risks" position="top" style={{ fontSize: 11 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>Agentic RAG finds on average {ag?.avg_risks?.toFixed(1)} risks — {pctMore}% more than Standard RAG ({std?.avg_risks?.toFixed(1)}). Ground Truth finds the most ({gt?.avg_risks?.toFixed(1)}) since it receives the full document text.</p>
      </Note>
    </ChartCard>
  );
}
