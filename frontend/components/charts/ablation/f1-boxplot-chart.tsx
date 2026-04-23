"use client";

import { useMemo } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ErrorBar,
  LabelList,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

function quantile(sorted: number[], q: number): number {
  const pos = (sorted.length - 1) * q;
  const lo = Math.floor(pos);
  const hi = Math.ceil(pos);
  return lo === hi ? sorted[lo] : sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
}

export function F1BoxplotChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const chartData = useMemo(() => {
    const configs = Object.keys(data.averages);
    return configs.map((cfg) => {
      const vals = data.results
        .filter((r) => r.config_label === cfg)
        .map((r) => r.f1 * 100)
        .sort((a, b) => a - b);
      if (vals.length === 0) {
        return { config: cfg, median: 0, errorLow: 0, errorHigh: 0, spread: 0 };
      }
      const min = vals[0];
      const max = vals[vals.length - 1];
      const med = quantile(vals, 0.5);
      return {
        config: cfg,
        median: +med.toFixed(1),
        errorLow: +(med - min).toFixed(1),
        errorHigh: +(max - med).toFixed(1),
        spread: +(max - min).toFixed(1),
      };
    });
  }, [data]);

  const mostStable = chartData.reduce((a, b) =>
    b.spread < a.spread ? b : a,
    chartData[0],
  );

  return (
    <ChartCard title="F1 distribution per configuration" prefix={prefix}>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="config" />
          <YAxis
            domain={[0, 100]}
            label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            formatter={(v: number) => `${v.toFixed(1)}%`}
            labelFormatter={(l: string) => `Config: ${l}`}
          />
          <Bar dataKey="median" fill={COLORS.primary} name="Median F1">
            <ErrorBar
              dataKey="errorHigh"
              direction="y"
              width={6}
              stroke="#000000"
              strokeWidth={2}
            />
            <ErrorBar
              dataKey="errorLow"
              direction="y"
              width={6}
              stroke="#000000"
              strokeWidth={2}
            />
            <LabelList
              dataKey="median"
              position="top"
              style={{ fontSize: 10 }}
              formatter={(v: number) => `${v.toFixed(1)}%`}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Bars show median F1; whiskers show min–max range across document sets.
          Smaller spread indicates more consistent performance.{" "}
          <strong>{mostStable.config}</strong> is most stable (spread{" "}
          {mostStable.spread.toFixed(1)} pp).
        </p>
      </Note>
    </ChartCard>
  );
}
