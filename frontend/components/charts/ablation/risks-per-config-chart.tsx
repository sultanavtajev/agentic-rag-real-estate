"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
  LabelList,
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

export function RisksPerConfigChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const configs = ORDERED_CONFIGS.filter((c) =>
    data.results.some((r) => r.config_label === c),
  );

  const chartData = configs.map((cfg) => {
    const rows = data.results.filter((r) => r.config_label === cfg);
    const totalPredicted = rows.reduce((s, r) => {
      if (r.total_predicted_risks != null) return s + r.total_predicted_risks;
      if (r.precision > 0) return s + r.matched_risks / r.precision;
      return s + r.matched_risks;
    }, 0);
    const avgPredicted = rows.length > 0 ? totalPredicted / rows.length : 0;
    return {
      config: cfg,
      avgRisks: +avgPredicted.toFixed(1),
    };
  });

  // Average GT risks
  const gtRows = data.results.filter((r) => r.config_label === configs[0]);
  const avgGt =
    gtRows.length > 0
      ? gtRows.reduce((s, r) => s + r.total_gt_risks, 0) / gtRows.length
      : 0;

  return (
    <ChartCard title="Average risks identified per configuration" prefix={prefix}>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="config" />
          <YAxis
            label={{
              value: "Number of risks",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip
            formatter={(v: number) => [`${v.toFixed(1)} risks`, "Average"]}
          />
          <ReferenceLine
            y={+avgGt.toFixed(1)}
            stroke="#666"
            strokeDasharray="5 5"
            label={{
              value: `GT: ${avgGt.toFixed(1)}`,
              position: "right",
              fill: "#666",
              fontSize: 12,
            }}
          />
          <Bar dataKey="avgRisks" name="Identified risks">
            <LabelList
              dataKey="avgRisks"
              position="top"
              style={{ fontSize: 11 }}
            />
            {chartData.map((d) => (
              <Cell
                key={d.config}
                fill={CONFIG_COLORS[d.config] ?? "#666"}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Average number of identified risks per configuration.
          Dashed line shows average Ground Truth ({avgGt.toFixed(1)} risks).
          {(() => {
            const most = chartData.reduce((a, b) => (b.avgRisks > a.avgRisks ? b : a));
            const least = chartData.reduce((a, b) => (a.avgRisks < b.avgRisks ? a : b));
            return ` ${most.config} identifies the most (${most.avgRisks}), ${least.config} the fewest (${least.avgRisks}).`;
          })()}
        </p>
      </Note>
    </ChartCard>
  );
}
