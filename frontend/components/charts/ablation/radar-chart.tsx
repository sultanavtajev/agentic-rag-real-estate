"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

const CONFIG_COLORS = [
  COLORS.primary,
  COLORS.accent,
  "#22c55e",
  "#f97316",
  "#ef4444",
];

export function AblationRadarChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const configs = Object.keys(data.averages);

  const chartData = ["F1", "Precision", "Recall"].map((metric) => {
    const key = metric.toLowerCase() as "f1" | "precision" | "recall";
    const entry: Record<string, string | number> = { metric };
    for (const cfg of configs) {
      entry[cfg] = +(data.averages[cfg][key] * 100).toFixed(1);
    }
    return entry;
  });

  return (
    <ChartCard title="Configuration profile (Radar)" prefix={prefix}>
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={chartData} cx="50%" cy="50%" outerRadius="70%">
          <PolarGrid />
          <PolarAngleAxis dataKey="metric" />
          <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
          {configs.map((cfg, i) => (
            <Radar
              key={cfg}
              name={cfg}
              dataKey={cfg}
              stroke={CONFIG_COLORS[i % CONFIG_COLORS.length]}
              fill={CONFIG_COLORS[i % CONFIG_COLORS.length]}
              fillOpacity={0.15}
            />
          ))}
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Each polygon represents a configuration. {(() => {
            const best = configs.reduce((a, b) => (data.averages[a].f1 > data.averages[b].f1 ? a : b));
            const avg = data.averages[best];
            return `Best overall profile: ${best} (F1: ${(avg.f1 * 100).toFixed(1)}%, P: ${(avg.precision * 100).toFixed(1)}%, R: ${(avg.recall * 100).toFixed(1)}%).`;
          })()}
        </p>
      </Note>
    </ChartCard>
  );
}
