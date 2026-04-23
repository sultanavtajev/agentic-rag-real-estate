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

function truncate(s: string, max = 20) {
  return s.length > max ? s.substring(0, max) + "…" : s;
}

export function CategorySystemComparisonChart({ data, prefix }: { data: CategoryStats[]; prefix?: string }) {
  const top15 = [...data].sort((a, b) => b.total - a.total).slice(0, 15);

  const chartData = top15.map((d) => ({
    ...d,
    label: truncate(d.category),
  }));

  // Find category with biggest difference between systems
  let maxDiff = 0;
  let maxDiffCat = "";
  for (const d of top15) {
    const vals = [d.standard_rag_count, d.agentic_rag_count, d.ground_truth_count];
    const diff = Math.max(...vals) - Math.min(...vals);
    if (diff > maxDiff) {
      maxDiff = diff;
      maxDiffCat = d.category;
    }
  }

  return (
    <ChartCard title="Category distribution by system (top 15)" prefix={prefix}>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="label"
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 11 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="standard_rag_count" name="Standard RAG" fill={SYSTEM_COLORS.standard_rag} />
          <Bar dataKey="agentic_rag_count" name="Agentic RAG" fill={SYSTEM_COLORS.agentic_rag} />
          <Bar dataKey="ground_truth_count" name="Ground Truth" fill={SYSTEM_COLORS.ground_truth} />
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Largest inter-system difference: <strong>{maxDiffCat}</strong> (Δ{maxDiff} risks
          between highest and lowest system count).
        </p>
      </Note>
    </ChartCard>
  );
}
