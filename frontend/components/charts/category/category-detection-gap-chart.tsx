"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  Legend,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { CategoryStats } from "@/lib/types";

interface Props {
  data: CategoryStats[];
  prefix?: string;
}

export function CategoryDetectionGapChart({ data, prefix }: Props) {
  const processed = data
    .map((d) => ({
      category: d.category,
      std_delta: d.standard_rag_count - d.ground_truth_count,
      agentic_delta: d.agentic_rag_count - d.ground_truth_count,
    }))
    .sort(
      (a, b) =>
        Math.max(Math.abs(b.std_delta), Math.abs(b.agentic_delta)) -
        Math.max(Math.abs(a.std_delta), Math.abs(a.agentic_delta))
    );

  const maxAbs = Math.max(
    ...processed.map((d) => Math.max(Math.abs(d.std_delta), Math.abs(d.agentic_delta))),
    1
  );
  const domain = [-maxAbs - 1, maxAbs + 1];

  const mostOver = processed.reduce((best, d) => {
    const val = Math.max(d.std_delta, d.agentic_delta);
    return val > best.val ? { cat: d.category, val } : best;
  }, { cat: "", val: -Infinity });

  const mostUnder = processed.reduce((best, d) => {
    const val = Math.min(d.std_delta, d.agentic_delta);
    return val < best.val ? { cat: d.category, val } : best;
  }, { cat: "", val: Infinity });

  return (
    <ChartCard title="Detection gap per category (system vs. ground truth)" prefix={prefix}>
      <ResponsiveContainer width="100%" height={700}>
        <BarChart data={processed} layout="vertical" margin={{ left: 10, right: 20, top: 10, bottom: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={domain} tickFormatter={(v: number) => (v > 0 ? `+${v}` : String(v))} />
          <YAxis type="category" dataKey="category" width={180} tick={{ fontSize: 11 }} />
          <Tooltip
            formatter={(value: number, name: string) => [
              `${value > 0 ? "+" : ""}${value}`,
              name === "std_delta" ? "Standard RAG" : "Agentic RAG",
            ]}
          />
          <Legend
            formatter={(value: string) =>
              value === "std_delta" ? "Standard RAG" : "Agentic RAG"
            }
          />
          <ReferenceLine x={0} stroke="#666" />
          <Bar dataKey="std_delta" fill={COLORS.primary} barSize={12} />
          <Bar dataKey="agentic_delta" fill={COLORS.accent} barSize={12} />
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Positive values = over-detection, negative = under-detection relative to ground truth.
          {mostOver.val > 0 && ` Most over-detected: ${mostOver.cat} (+${mostOver.val}).`}
          {mostUnder.val < 0 && ` Most under-detected: ${mostUnder.cat} (${mostUnder.val}).`}
        </p>
      </Note>
    </ChartCard>
  );
}
