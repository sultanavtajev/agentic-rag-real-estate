"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
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

export function CostF1TradeoffChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const configs = ORDERED_CONFIGS.filter((c) =>
    data.results.some((r) => r.config_label === c),
  );

  const chartData = configs.map((cfg) => {
    const rows = data.results.filter((r) => r.config_label === cfg);
    const avgF1 = rows.reduce((s, r) => s + r.f1, 0) / rows.length;
    const avgDuration = rows.reduce((s, r) => s + r.duration_s, 0) / rows.length;
    const avgTokens =
      rows.reduce((s, r) => s + r.input_tokens + r.output_tokens, 0) / rows.length;
    return {
      config: cfg,
      f1: +(avgF1 * 100).toFixed(1),
      duration: +avgDuration.toFixed(1),
      tokens: Math.round(avgTokens),
    };
  });

  return (
    <ChartCard title="Cost vs. performance per configuration" prefix={prefix}>
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 30, bottom: 20, left: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="duration" name="Time">
            <Label value="Average time (s)" position="bottom" offset={0} />
          </XAxis>
          <YAxis type="number" dataKey="f1" name="F1" domain={[0, 100]}>
            <Label value="F1 (%)" angle={-90} position="insideLeft" />
          </YAxis>
          <Tooltip
            formatter={(v: number, name: string) =>
              name === "F1" ? `${v.toFixed(1)}%` : name === "Time" ? `${v.toFixed(1)}s` : v.toLocaleString()
            }
            labelFormatter={(_, payload) =>
              payload?.[0]?.payload?.config ?? ""
            }
            content={({ payload }) => {
              if (!payload?.length) return null;
              const d = payload[0].payload;
              return (
                <div className="rounded border bg-background p-2 text-sm shadow">
                  <p className="font-medium">{d.config}</p>
                  <p>F1: {d.f1.toFixed(1)}%</p>
                  <p>Time: {d.duration.toFixed(1)}s</p>
                  <p>Tokens: {d.tokens.toLocaleString()}</p>
                </div>
              );
            }}
          />
          <Scatter data={chartData}>
            {chartData.map((d) => (
              <Cell
                key={d.config}
                fill={CONFIG_COLORS[d.config] ?? "#666"}
                r={Math.max(6, Math.min(20, d.tokens / 5000))}
              />
            ))}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
        {chartData.map((d) => (
          <span key={d.config} className="flex items-center gap-1">
            <span
              className="inline-block w-3 h-3 rounded-full"
              style={{ backgroundColor: CONFIG_COLORS[d.config] ?? "#666" }}
            />
            {d.config}
          </span>
        ))}
      </div>
      <Note>
        <p>
          Each configuration as a point. Point size reflects average token usage.
          {(() => {
            const fastest = chartData.reduce((a, b) => (a.duration < b.duration ? a : b));
            const mostEfficient = chartData.reduce((a, b) => ((b.f1 / (b.tokens || 1)) > (a.f1 / (a.tokens || 1)) ? b : a));
            return ` Fastest: ${fastest.config} (${fastest.duration}s, F1 ${fastest.f1}%). Best F1/token ratio: ${mostEfficient.config}.`;
          })()}
        </p>
      </Note>
    </ChartCard>
  );
}
