"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChartCard, Note } from "../chart-helpers";
import type { CategoryStats } from "@/lib/types";

const SYSTEM_COLORS = {
  standard_rag: "#d97757",
  agentic_rag: "#4a7c7c",
  ground_truth: "#22c55e",
};

function truncate(s: string, max = 25) {
  return s.length > max ? s.substring(0, max) + "…" : s;
}

export function CategoryPrevalenceChart({ data, prefix }: { data: CategoryStats[]; prefix?: string }) {
  const sorted = [...data].sort((a, b) => b.total - a.total);
  const grandTotal = sorted.reduce((s, d) => s + d.total, 0);

  const top3 = sorted.slice(0, 3).map((d) => ({
    name: d.category,
    pct: grandTotal > 0 ? ((d.total / grandTotal) * 100).toFixed(1) : "0",
  }));

  const chartData = sorted.map((d) => ({
    ...d,
    label: truncate(d.category),
  }));

  return (
    <ChartCard title="Risk category prevalence" prefix={prefix}>
      <ResponsiveContainer width="100%" height={700}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="label" type="category" width={180} tick={{ fontSize: 11 }} />
          <Tooltip />
          <Legend />
          <Bar dataKey="standard_rag_count" stackId="a" name="Standard RAG" fill={SYSTEM_COLORS.standard_rag} />
          <Bar dataKey="agentic_rag_count" stackId="a" name="Agentic RAG" fill={SYSTEM_COLORS.agentic_rag} />
          <Bar dataKey="ground_truth_count" stackId="a" name="Ground Truth" fill={SYSTEM_COLORS.ground_truth} />
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Top 3 categories: {top3.map((t, i) => (
            <span key={i}>
              <strong>{t.name}</strong> ({t.pct}%){i < 2 ? ", " : ""}
            </span>
          ))} — accounting for {
            grandTotal > 0
              ? ((sorted.slice(0, 3).reduce((s, d) => s + d.total, 0) / grandTotal) * 100).toFixed(1)
              : "0"
          }% of all risks.
        </p>
      </Note>
    </ChartCard>
  );
}
