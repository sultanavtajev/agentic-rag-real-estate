"use client";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function F1PerDocumentChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const chartData = data.per_document
    .filter((doc) => (doc as Record<string, unknown>).evaluation)
    .map((doc) => {
      const d = doc as Record<string, Record<string, Record<string, number>>>;
      return {
        set_id: (doc as Record<string, unknown>).set_id as string,
        "Standard RAG": (d.evaluation?.standard_rag?.f1 ?? 0) * 100,
        "Agentic RAG": (d.evaluation?.agentic_rag?.f1 ?? 0) * 100,
      };
    });

  return (
    <ChartCard prefix={prefix} title="F1 score per document set">
      <ResponsiveContainer width="100%" height={350}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="set_id" tick={{ fontSize: 10 }} interval={Math.floor(chartData.length / 10)} />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
          <Legend />
          <Line type="monotone" dataKey="Standard RAG" stroke={COLORS.secondary} dot={false} strokeWidth={1.5} />
          <Line type="monotone" dataKey="Agentic RAG" stroke={COLORS.primary} dot={false} strokeWidth={1.5} />
        </LineChart>
      </ResponsiveContainer>
      <Note>
        <p>F1 score per document set for both systems. Agentic RAG (blue) consistently scores above Standard RAG (gray) across all documents.</p>
      </Note>
    </ChartCard>
  );
}
