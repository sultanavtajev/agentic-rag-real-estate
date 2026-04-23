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
  LabelList,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

const CONFIG_ORDER = ["P+T+R", "T+R", "P+R", "P+T", "P", "T", "R", "NONE"];

export function WaterfallChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const avg = data.averages;
  const baseline = (avg["P+T+R"]?.f1 ?? 0) * 100;

  const chartData = CONFIG_ORDER.map((cfg) => {
    const f1 = (avg[cfg]?.f1 ?? 0) * 100;
    const drop = Math.max(0, baseline - f1);
    return { config: cfg, base: 0, value: f1, drop, total: f1 + drop };
  });

  // For stacked waterfall: invisible base = 0, value = actual F1, drop = baseline - F1
  // The drop sits on top of value, so value + drop = baseline for all except P+T+R

  const maxDrop = Math.max(...chartData.filter((d) => d.config !== "P+T+R").map((d) => d.drop));
  const worstConfig = chartData.find((d) => d.drop === maxDrop);

  return (
    <ChartCard title="F1 waterfall:drop from full configuration" prefix={prefix}>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="config" tick={{ fontSize: 11 }} />
          <YAxis domain={[0, 100]} label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip
            formatter={(v: number, name: string) => {
              if (name === "F1") return `${v.toFixed(1)}%`;
              if (name === "Drop") return `−${v.toFixed(1)} pp`;
              return v;
            }}
          />
          <Bar dataKey="value" stackId="a" name="F1">
            {chartData.map((d, i) => (
              <Cell key={i} fill={d.config === "P+T+R" ? "#22c55e" : COLORS.primary} />
            ))}
            <LabelList
              dataKey="value"
              position="insideBottom"
              style={{ fontSize: 10, fill: "#fff" }}
              formatter={(v: number) => `${v.toFixed(1)}%`}
            />
          </Bar>
          <Bar dataKey="drop" stackId="a" name="Drop">
            {chartData.map((d, i) => (
              <Cell key={i} fill={d.config === "P+T+R" ? "transparent" : "#ef4444"} fillOpacity={0.6} />
            ))}
            <LabelList
              dataKey="drop"
              position="top"
              style={{ fontSize: 10 }}
              formatter={(v: number) => (v > 0 ? `−${v.toFixed(1)}` : "")}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Green bar = full P+T+R baseline ({baseline.toFixed(1)}%). Blue bars show
          remaining F1 for each ablated configuration, red overlay shows the drop.
          {worstConfig && (
            <> Largest degradation: <strong>{worstConfig.config}</strong> (−{worstConfig.drop.toFixed(1)} pp).</>
          )}
        </p>
      </Note>
    </ChartCard>
  );
}
