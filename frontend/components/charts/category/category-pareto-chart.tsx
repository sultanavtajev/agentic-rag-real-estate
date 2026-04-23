"use client";

import {
  ComposedChart,
  Bar,
  Line,
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

export function CategoryParetoChart({ data, prefix }: Props) {
  const sorted = [...data].sort((a, b) => b.total - a.total);
  const grandTotal = sorted.reduce((s, d) => s + d.total, 0);

  const processed = sorted.reduce<{ category: string; total: number; cumulative_pct: number }[]>((acc, d) => {
    const prev = acc.length > 0 ? acc[acc.length - 1].cumulative_pct : 0;
    const pct = grandTotal > 0 ? prev + (d.total / grandTotal) * 100 : 0;
    acc.push({ category: d.category, total: d.total, cumulative_pct: pct });
    return acc;
  }, []);

  const threshold80 = processed.findIndex((d) => d.cumulative_pct >= 80);
  const topN = threshold80 >= 0 ? threshold80 + 1 : processed.length;
  const topPct = processed[topN - 1]?.cumulative_pct ?? 100;

  return (
    <ChartCard title="Pareto analysis of risk categories" prefix={prefix}>
      <ResponsiveContainer width="100%" height={450}>
        <ComposedChart data={processed} margin={{ left: 10, right: 20, top: 10, bottom: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="category"
            tick={{ fontSize: 10, angle: -45, textAnchor: "end" }}
            interval={0}
            height={80}
            tickFormatter={(v: string) => (v.length > 20 ? v.slice(0, 18) + "..." : v)}
          />
          <YAxis yAxisId="left" label={{ value: "Count", angle: -90, position: "insideLeft" }} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={[0, 100]}
            tickFormatter={(v: number) => `${v}%`}
            label={{ value: "Cumulative %", angle: 90, position: "insideRight" }}
          />
          <Tooltip
            formatter={(value: number, name: string) =>
              name === "total" ? [value, "Count"] : [`${value.toFixed(1)}%`, "Cumulative"]
            }
          />
          <Legend />
          <ReferenceLine yAxisId="right" y={80} stroke="#ef4444" strokeDasharray="6 4" label="80%" />
          <Bar yAxisId="left" dataKey="total" fill={COLORS.primary} name="Count" />
          <Line
            yAxisId="right"
            dataKey="cumulative_pct"
            stroke={COLORS.accent}
            strokeWidth={2}
            dot={{ r: 3 }}
            name="Cumulative %"
          />
        </ComposedChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Top {topN} categories account for {topPct.toFixed(0)}% of all risks.
          Categories are sorted by total count descending.
        </p>
      </Note>
    </ChartCard>
  );
}
