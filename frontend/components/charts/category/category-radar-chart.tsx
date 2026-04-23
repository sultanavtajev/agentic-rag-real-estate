"use client";

import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";
import { ChartCard, Note } from "../chart-helpers";
import type { CategoryStats } from "@/lib/types";

const SYSTEMS = [
  { key: "standard_pct", name: "Standard RAG", color: "#2563eb" },
  { key: "agentic_pct", name: "Agentic RAG", color: "#8b5cf6" },
  { key: "ground_truth_pct", name: "Ground Truth", color: "#22c55e" },
] as const;

function truncate(s: string, max = 18) {
  return s.length > max ? s.substring(0, max) + "…" : s;
}

export function CategoryRadarChart({ data, prefix }: { data: CategoryStats[]; prefix?: string }) {
  const top10 = [...data].sort((a, b) => b.total - a.total).slice(0, 10);

  const totalStd = data.reduce((s, d) => s + d.standard_rag_count, 0) || 1;
  const totalAg = data.reduce((s, d) => s + d.agentic_rag_count, 0) || 1;
  const totalGt = data.reduce((s, d) => s + d.ground_truth_count, 0) || 1;

  const chartData = top10.map((d) => ({
    category: truncate(d.category),
    standard_pct: +((d.standard_rag_count / totalStd) * 100).toFixed(1),
    agentic_pct: +((d.agentic_rag_count / totalAg) * 100).toFixed(1),
    ground_truth_pct: +((d.ground_truth_count / totalGt) * 100).toFixed(1),
  }));

  return (
    <ChartCard title="Detection profile by system (radar)" prefix={prefix}>
      <ResponsiveContainer width="100%" height={450}>
        <RadarChart data={chartData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="category" tick={{ fontSize: 10 }} />
          <PolarRadiusAxis tick={{ fontSize: 9 }} />
          <Tooltip formatter={(v: number) => `${v}%`} />
          {SYSTEMS.map((s) => (
            <Radar
              key={s.key}
              name={s.name}
              dataKey={s.key}
              stroke={s.color}
              fill={s.color}
              fillOpacity={0.15}
            />
          ))}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Each axis shows the percentage of that system&apos;s total risks falling in the
          category. Differences in shape reveal detection profile biases across systems.
        </p>
      </Note>
    </ChartCard>
  );
}
