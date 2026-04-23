"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function TokenCostChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const std = data.systems.standard_rag;
  const ag = data.systems.agentic_rag;
  const gt = data.systems.ground_truth;

  const chartData = [
    { system: "Standard RAG", tokens: (std?.total_tokens ?? 0) / 1e6 },
    { system: "Agentic RAG", tokens: (ag?.total_tokens ?? 0) / 1e6 },
    { system: "Ground Truth", tokens: (gt?.total_tokens ?? 0) / 1e6 },
  ];

  const total = ((std?.total_tokens ?? 0) + (ag?.total_tokens ?? 0) + (gt?.total_tokens ?? 0)) / 1e6;

  return (
    <ChartCard prefix={prefix} title="Total token usage (millions)">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="system" />
          <YAxis label={{ value: "Million tokens", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(v: number) => `${v.toFixed(2)}M`} />
          <Bar dataKey="tokens" fill={COLORS.primary} name="Tokens (M)">
            <LabelList dataKey="tokens" position="inside" style={{ fontSize: 12, fill: "#fff", fontWeight: 600 }} formatter={(v: number) => `${v.toFixed(1)}M`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>Standard RAG used a total of {((std?.total_tokens ?? 0) / 1e6).toFixed(1)}M tokens over {std?.count} runs. Agentic RAG used {((ag?.total_tokens ?? 0) / 1e6).toFixed(1)}M and Ground Truth {((gt?.total_tokens ?? 0) / 1e6).toFixed(1)}M. Total: {total.toFixed(1)}M tokens.</p>
      </Note>
    </ChartCard>
  );
}
