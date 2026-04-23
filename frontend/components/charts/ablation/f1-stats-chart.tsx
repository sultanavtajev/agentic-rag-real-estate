"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ErrorBar,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

const ORDERED_CONFIGS = ["P+T+R", "T+R", "P+R", "P+T", "P", "T", "R", "NONE"];

function stats(values: number[]) {
  if (values.length === 0) return { min: 0, max: 0, mean: 0, median: 0 };
  const sorted = [...values].sort((a, b) => a - b);
  const mean = values.reduce((s, v) => s + v, 0) / values.length;
  const mid = Math.floor(sorted.length / 2);
  const median =
    sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  return { min: sorted[0], max: sorted[sorted.length - 1], mean, median };
}

export function F1StatsChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const configs = ORDERED_CONFIGS.filter((c) =>
    data.results.some((r) => r.config_label === c),
  );

  const chartData = configs.map((cfg) => {
    const f1s = data.results
      .filter((r) => r.config_label === cfg)
      .map((r) => r.f1 * 100);
    const s = stats(f1s);
    return {
      config: cfg,
      mean: +s.mean.toFixed(1),
      median: +s.median.toFixed(1),
      min: +s.min.toFixed(1),
      max: +s.max.toFixed(1),
      errorLow: +(s.mean - s.min).toFixed(1),
      errorHigh: +(s.max - s.mean).toFixed(1),
    };
  });

  return (
    <ChartCard title="F1 distribution per configuration (min/mean/max)" prefix={prefix}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="config" />
          <YAxis
            domain={[0, 100]}
            label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            formatter={(v: number, name: string) => [`${v.toFixed(1)}%`, name]}
          />
          <Legend />
          <Bar dataKey="mean" name="Mean" fill={COLORS.primary}>
            <ErrorBar
              dataKey="errorHigh"
              width={4}
              direction="y"
              stroke={COLORS.primary}
            />
          </Bar>
          <Bar dataKey="median" name="Median" fill={COLORS.accent} />
          <Bar dataKey="min" name="Min" fill="#94a3b8" />
          <Bar dataKey="max" name="Max" fill="#22c55e" />
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Min, mean, median and max F1 score per ablation configuration.
          {(() => {
            const best = chartData.reduce((a, b) => (b.mean > a.mean ? b : a));
            const widest = chartData.reduce((a, b) => ((b.max - b.min) > (a.max - a.min) ? b : a));
            return ` Highest mean: ${best.config} (${best.mean}%). Widest spread: ${widest.config} (${widest.min}%–${widest.max}%).`;
          })()}
        </p>
      </Note>
    </ChartCard>
  );
}
