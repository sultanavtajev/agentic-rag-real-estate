"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ErrorBar,
  Cell,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

const ORDERED_CONFIGS = ["P+T+R", "T+R", "P+R", "P+T", "P", "T", "R", "NONE"];
const CONFIG_COLORS: Record<string, string> = {
  "P+T+R": COLORS.primary,
  "T+R": COLORS.accent,
  "P+R": "#22c55e",
  "P+T": "#f97316",
  P: "#ef4444",
  T: "#06b6d4",
  R: "#ec4899",
  NONE: "#94a3b8",
};

function stddev(values: number[]): number {
  if (values.length < 2) return 0;
  const mean = values.reduce((s, v) => s + v, 0) / values.length;
  const variance = values.reduce((s, v) => s + (v - mean) ** 2, 0) / (values.length - 1);
  return Math.sqrt(variance);
}

export function ConfidenceIntervalChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const configs = ORDERED_CONFIGS.filter((c) =>
    data.results.some((r) => r.config_label === c),
  );

  const chartData = configs.map((cfg) => {
    const f1s = data.results
      .filter((r) => r.config_label === cfg)
      .map((r) => r.f1 * 100);
    const mean = f1s.reduce((s, v) => s + v, 0) / f1s.length;
    const sd = stddev(f1s);
    return {
      config: cfg,
      mean: +mean.toFixed(1),
      sd: +sd.toFixed(1),
      n: f1s.length,
    };
  });

  return (
    <ChartCard title="F1 score with standard deviation per configuration" prefix={prefix}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="config" />
          <YAxis
            domain={[0, 100]}
            label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            content={({ payload }) => {
              if (!payload?.length) return null;
              const d = payload[0].payload;
              return (
                <div className="rounded border bg-background p-2 text-sm shadow">
                  <p className="font-medium">{d.config}</p>
                  <p>Mean: {d.mean.toFixed(1)}%</p>
                  <p>Std dev: ±{d.sd.toFixed(1)} pp</p>
                  <p>n = {d.n} document sets</p>
                </div>
              );
            }}
          />
          <Bar dataKey="mean" name="Mean F1">
            <ErrorBar dataKey="sd" width={6} direction="y" stroke="#333" strokeWidth={1.5} />
            {chartData.map((d) => (
              <Cell key={d.config} fill={CONFIG_COLORS[d.config] ?? "#666"} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Average F1 score with ±1 standard deviation.
          {(() => {
            const mostConsistent = chartData.reduce((a, b) => (a.sd < b.sd ? a : b));
            const leastConsistent = chartData.reduce((a, b) => (a.sd > b.sd ? a : b));
            return ` Most consistent: ${mostConsistent.config} (±${mostConsistent.sd}%). Least consistent: ${leastConsistent.config} (±${leastConsistent.sd}%).`;
          })()}
        </p>
      </Note>
    </ChartCard>
  );
}
