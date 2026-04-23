"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function DocumentSizeDistributionChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const chunks: number[] = data.per_document
    .map((d) => (d as Record<string, unknown>).chunks as number ?? 0)
    .filter((c) => c > 0);

  if (chunks.length === 0) return null;

  const binSize = 50;
  const maxChunks = Math.max(...chunks);
  const bins: Record<string, number> = {};
  for (let i = 0; i <= maxChunks; i += binSize) {
    bins[`${i}-${i + binSize - 1}`] = 0;
  }
  for (const c of chunks) {
    const binStart = Math.floor(c / binSize) * binSize;
    const key = `${binStart}-${binStart + binSize - 1}`;
    bins[key] = (bins[key] ?? 0) + 1;
  }

  const chartData = Object.entries(bins)
    .filter(([, count]) => count > 0)
    .map(([range, count]) => ({ range, count }));

  const avg = chunks.reduce((a, b) => a + b, 0) / chunks.length;
  const min = Math.min(...chunks);
  const max = Math.max(...chunks);

  return (
    <ChartCard prefix={prefix} title="Document size distribution (number of chunks)">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="range" tick={{ fontSize: 10 }} />
          <YAxis label={{ value: "Number of document sets", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <Bar dataKey="count" fill={COLORS.primary} name="Document sets">
            <LabelList dataKey="count" position="top" style={{ fontSize: 11 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>{chunks.length} document sets. Average: {avg.toFixed(0)} chunks. Range: {min}–{max} chunks. Grouped in bins of {binSize}.</p>
      </Note>
    </ChartCard>
  );
}
