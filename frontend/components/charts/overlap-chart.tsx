"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function OverlapChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const chartData = [
    { type: "Shared risks", value: data.overlap?.avg_shared ?? 0 },
    { type: "Unique to Standard RAG", value: data.overlap?.avg_unique_standard ?? 0 },
    { type: "Unique to Agentic RAG", value: data.overlap?.avg_unique_agentic ?? 0 },
    { type: "Unique to Ground Truth", value: (data.overlap as Record<string, number>)?.avg_unique_gt ?? 0 },
  ];

  return (
    <ChartCard prefix={prefix} title="Overlap between systems">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="type" type="category" width={150} />
          <Tooltip formatter={(v: number) => v.toFixed(1)} />
          <Bar dataKey="value" fill={COLORS.accent} name="Number of risks">
            <LabelList dataKey="value" position="right" style={{ fontSize: 11 }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>On average {data.overlap?.avg_shared?.toFixed(1)} shared risks. Unique: Standard RAG {data.overlap?.avg_unique_standard?.toFixed(1)}, Agentic RAG {data.overlap?.avg_unique_agentic?.toFixed(1)}, Ground Truth {((data.overlap as Record<string, number>)?.avg_unique_gt ?? 0).toFixed(1)}. The systems are complementary.</p>
      </Note>
    </ChartCard>
  );
}
