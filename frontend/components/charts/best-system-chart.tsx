"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartCard, COLORS, PIE_COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

const SYS_LABELS: Record<string, string> = {
  standard_rag: "Standard RAG",
  agentic_rag: "Agentic RAG",
  ground_truth: "Ground Truth",
};

const SLICE_COLORS = [COLORS.secondary, COLORS.primary, COLORS.accent, PIE_COLORS[0]];

export function BestSystemChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const best = data.best_system ?? {};
  const chartData = Object.entries(best)
    .filter(([, v]) => v > 0)
    .map(([k, v]) => ({ name: SYS_LABELS[k] ?? k, value: v }));

  const total = chartData.reduce((s, d) => s + d.value, 0);

  if (chartData.length === 0) return null;

  return (
    <ChartCard prefix={prefix} title="Best system per document set">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}
            label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
            {chartData.map((_, i) => <Cell key={i} fill={SLICE_COLORS[i % SLICE_COLORS.length]} />)}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <Note>
        <p>Out of {total} evaluations: {chartData.map(d => `${d.name} was best ${d.value} times (${(d.value / total * 100).toFixed(0)}%)`).join(", ")}. Ground Truth is almost always best since it receives the full document text.</p>
      </Note>
    </ChartCard>
  );
}
