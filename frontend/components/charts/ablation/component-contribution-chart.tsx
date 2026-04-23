"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

const BAR_COLORS = [COLORS.primary, COLORS.accent, "#22c55e"];

export function ComponentContributionChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const avg = data.averages;
  const full = avg["P+T+R"]?.f1 ?? 0;

  const deltas = [
    { component: "Planning (P)", delta: (full - (avg["T+R"]?.f1 ?? 0)) * 100 },
    { component: "Tool Use (T)", delta: (full - (avg["P+R"]?.f1 ?? 0)) * 100 },
    { component: "Reflection (R)", delta: (full - (avg["P+T"]?.f1 ?? 0)) * 100 },
  ];

  const best = deltas.reduce((a, b) => (b.delta > a.delta ? b : a), deltas[0]);

  return (
    <ChartCard title="Component contribution (ΔF1)" prefix={prefix}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={deltas}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="component" />
          <YAxis
            label={{ value: "ΔF1 (pp)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(v: number) => `${v.toFixed(2)} pp`} />
          <Bar dataKey="delta" name="ΔF1">
            {deltas.map((_, i) => (
              <Cell key={i} fill={BAR_COLORS[i % BAR_COLORS.length]} />
            ))}
            <LabelList
              dataKey="delta"
              position="top"
              style={{ fontSize: 11 }}
              formatter={(v: number) => `${v >= 0 ? "+" : ""}${v.toFixed(2)}`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          ΔF1 = F1(P+T+R) − F1(without component). Positive values indicate the
          component improves performance. <strong>{best.component}</strong>{" "}
          contributes most with Δ{best.delta >= 0 ? "+" : ""}
          {best.delta.toFixed(2)} pp.
        </p>
      </Note>
    </ChartCard>
  );
}
