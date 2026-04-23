"use client";

import { useMemo } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

const DOT_COLORS = [
  COLORS.primary,
  COLORS.accent,
  "#22c55e",
  "#f97316",
  "#ef4444",
];

export function CostPerformanceScatter({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const points = useMemo(() => {
    const configs = Object.keys(data.averages);
    return configs.map((cfg, i) => {
      const rows = data.results.filter((r) => r.config_label === cfg);
      const avgTokens =
        rows.length > 0
          ? rows.reduce((s, r) => s + r.input_tokens + r.output_tokens, 0) / rows.length
          : 0;
      return {
        config: cfg,
        tokens: Math.round(avgTokens),
        f1: +(data.averages[cfg].f1 * 100).toFixed(1),
        color: DOT_COLORS[i % DOT_COLORS.length],
      };
    });
  }, [data]);

  const best = points.reduce(
    (a, b) => (b.tokens > 0 && b.f1 / b.tokens > a.f1 / (a.tokens || 1) ? b : a),
    points[0],
  );

  return (
    <ChartCard title="Cost vs. performance" prefix={prefix}>
      <ResponsiveContainer width="100%" height={320}>
        <ScatterChart margin={{ top: 20, right: 30, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="tokens"
            type="number"
            name="Avg tokens"
            label={{ value: "Avg tokens", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            dataKey="f1"
            type="number"
            name="F1 (%)"
            domain={[0, 100]}
            label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            formatter={(v: number, name: string) =>
              name === "Avg tokens" ? v.toLocaleString() : `${v.toFixed(1)}%`
            }
          />
          {points.map((pt) => (
            <Scatter
              key={pt.config}
              name={pt.config}
              data={[pt]}
              fill={pt.color}
              shape="circle"
            >
              <LabelList dataKey="config" position="top" style={{ fontSize: 11 }} />
            </Scatter>
          ))}
        </ScatterChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Each dot is one ablation configuration. Top-left = best efficiency (high
          F1, low tokens). <strong>{best.config}</strong> offers the best F1 per
          token.
        </p>
      </Note>
    </ChartCard>
  );
}
