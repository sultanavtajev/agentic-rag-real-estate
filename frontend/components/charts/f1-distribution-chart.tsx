"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function F1DistributionChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const stdF1s: number[] = [];
  const agF1s: number[] = [];

  for (const doc of data.per_document) {
    const ev = (doc as Record<string, Record<string, Record<string, number>>>).evaluation;
    if (ev?.standard_rag?.f1 != null) stdF1s.push(ev.standard_rag.f1 * 100);
    if (ev?.agentic_rag?.f1 != null) agF1s.push(ev.agentic_rag.f1 * 100);
  }

  const avg = (arr: number[]) => (arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0);
  const median = (arr: number[]) => {
    if (!arr.length) return 0;
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };

  const chartData = [
    { system: "Standard RAG", avg: avg(stdF1s), median: median(stdF1s), min: stdF1s.length ? Math.min(...stdF1s) : 0, max: stdF1s.length ? Math.max(...stdF1s) : 0 },
    { system: "Agentic RAG", avg: avg(agF1s), median: median(agF1s), min: agF1s.length ? Math.min(...agF1s) : 0, max: agF1s.length ? Math.max(...agF1s) : 0 },
  ];

  return (
    <ChartCard prefix={prefix} title="F1 distribution per system">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="system" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
          <Legend />
          <Bar dataKey="median" fill={COLORS.primary} name="Median F1 (%)">
            <LabelList dataKey="median" position="top" style={{ fontSize: 10 }} formatter={(v: number) => `${v.toFixed(1)}%`} />
          </Bar>
          <Bar dataKey="avg" fill={COLORS.secondary} name="Mean F1 (%)">
            <LabelList dataKey="avg" position="top" style={{ fontSize: 10 }} formatter={(v: number) => `${v.toFixed(1)}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>Standard RAG: median {chartData[0].median.toFixed(1)}%, mean {chartData[0].avg.toFixed(1)}%, range {chartData[0].min.toFixed(1)}%–{chartData[0].max.toFixed(1)}%. Agentic RAG: median {chartData[1].median.toFixed(1)}%, mean {chartData[1].avg.toFixed(1)}%, range {chartData[1].min.toFixed(1)}%–{chartData[1].max.toFixed(1)}%.</p>
      </Note>
    </ChartCard>
  );
}
