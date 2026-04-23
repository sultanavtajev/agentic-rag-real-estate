"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function ResourceUsageChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const std = data.systems.standard_rag;
  const ag = data.systems.agentic_rag;
  const gt = data.systems.ground_truth;

  const chartData = [
    { system: "Standard RAG", tid: std?.avg_duration ?? 0, tokens: (std?.avg_tokens ?? 0) / 1000 },
    { system: "Agentic RAG", tid: ag?.avg_duration ?? 0, tokens: (ag?.avg_tokens ?? 0) / 1000 },
    { system: "Ground Truth", tid: gt?.avg_duration ?? 0, tokens: (gt?.avg_tokens ?? 0) / 1000 },
  ];

  const timeRatio = std?.avg_duration ? ((ag?.avg_duration ?? 0) / std.avg_duration).toFixed(1) : "0";
  const tokenRatio = std?.avg_tokens ? ((ag?.avg_tokens ?? 0) / std.avg_tokens).toFixed(1) : "0";

  return (
    <ChartCard prefix={prefix} title="Resource usage per system">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="system" />
          <YAxis yAxisId="left" label={{ value: "Time (s)", angle: -90, position: "insideLeft" }} />
          <YAxis yAxisId="right" orientation="right" label={{ value: "Tokens (k)", angle: 90, position: "insideRight" }} />
          <Tooltip /><Legend />
          <Bar yAxisId="left" dataKey="tid" fill={COLORS.primary} name="Time (s)">
            <LabelList dataKey="tid" position="top" style={{ fontSize: 10 }} />
          </Bar>
          <Bar yAxisId="right" dataKey="tokens" fill={COLORS.accent} name="Tokens (k)">
            <LabelList dataKey="tokens" position="top" style={{ fontSize: 10 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>Agentic RAG uses {timeRatio}x more time ({ag?.avg_duration?.toFixed(1)}s vs {std?.avg_duration?.toFixed(1)}s) and {tokenRatio}x more tokens ({((ag?.avg_tokens ?? 0) / 1000).toFixed(0)}k vs {((std?.avg_tokens ?? 0) / 1000).toFixed(0)}k).</p>
      </Note>
    </ChartCard>
  );
}
