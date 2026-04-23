"use client";

import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function ChunkVsRisksChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const stdData: { chunks: number; risks: number }[] = [];
  const agData: { chunks: number; risks: number }[] = [];

  for (const doc of data.per_document) {
    const d = doc as Record<string, Record<string, number> & number>;
    const chunks = (d.chunks as unknown as number) ?? 0;
    if (chunks === 0) continue;
    if (d.standard_rag?.risks != null) stdData.push({ chunks, risks: d.standard_rag.risks });
    if (d.agentic_rag?.risks != null) agData.push({ chunks, risks: d.agentic_rag.risks });
  }

  return (
    <ChartCard prefix={prefix} title="Document size vs number of risks">
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="chunks" name="Chunks" type="number" label={{ value: "Chunks", position: "insideBottom", offset: -5 }} />
          <YAxis dataKey="risks" name="Risks" type="number" label={{ value: "Risks", angle: -90, position: "insideLeft" }} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Legend />
          <Scatter name="Standard RAG" data={stdData} fill={COLORS.secondary} />
          <Scatter name="Agentic RAG" data={agData} fill={COLORS.primary} />
        </ScatterChart>
      </ResponsiveContainer>
      <Note>
        <p>The relationship between document size (number of chunks) and number of identified risks. Larger documents generally yield more risks for both systems.</p>
      </Note>
    </ChartCard>
  );
}
