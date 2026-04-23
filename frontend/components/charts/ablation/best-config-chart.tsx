"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

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

export function BestConfigChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const docIds = [...new Set(data.results.map((r) => r.document_set_id))];

  const wins: Record<string, number> = {};
  for (const docId of docIds) {
    const docResults = data.results.filter((r) => r.document_set_id === docId);
    if (docResults.length === 0) continue;
    const best = docResults.reduce((a, b) => (b.f1 > a.f1 ? b : a));
    wins[best.config_label] = (wins[best.config_label] ?? 0) + 1;
  }

  const chartData = Object.entries(wins)
    .map(([config, count]) => ({ config, count }))
    .sort((a, b) => b.count - a.count);

  const total = docIds.length;

  return (
    <ChartCard title="Best configuration per document set" prefix={prefix}>
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="count"
            nameKey="config"
            cx="50%"
            cy="50%"
            outerRadius={120}
            innerRadius={50}
            label={({ config, count }) =>
              `${config} (${count})`
            }
            labelLine
          >
            {chartData.map((d) => (
              <Cell
                key={d.config}
                fill={CONFIG_COLORS[d.config] ?? "#666"}
              />
            ))}
          </Pie>
          <Tooltip
            formatter={(v: number, name: string) => [
              `${v} av ${total} (${((v / total) * 100).toFixed(0)}%)`,
              name,
            ]}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Distribution of which configuration achieves the highest F1 score per document set
          ({total} document sets total).
          {(() => {
            if (chartData.length === 0) return "";
            const top = chartData[0];
            return ` ${top.config} wins in ${top.count} of ${total} cases (${((top.count / total) * 100).toFixed(0)}%).`;
          })()}
        </p>
      </Note>
    </ChartCard>
  );
}
