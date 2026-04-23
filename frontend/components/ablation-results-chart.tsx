"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CONFIG_ORDER = ["P+T+R", "T+R", "P+R", "P+T", "NONE"] as const;

const BAR_COLORS = [
  "#2563eb", // blue – P+T+R (full)
  "#8b5cf6", // violet – T+R
  "#f59e0b", // amber – P+R
  "#10b981", // emerald – P+T
  "#6b7280", // gray – NONE
];

interface Props {
  averages: Record<string, { f1: number; precision: number; recall: number }>;
}

export function AblationResultsChart({ averages }: Props) {
  const data = CONFIG_ORDER.map((label, i) => ({
    label,
    f1: averages[label]?.f1 ?? 0,
    color: BAR_COLORS[i],
  }));

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Average F1 per configuration</h2>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 16, bottom: 8, left: 0 }}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="label" className="text-xs" />
            <YAxis domain={[0, 1]} tickFormatter={(v: number) => `${(v * 100).toFixed(0)}%`} className="text-xs" />
            <Tooltip
              formatter={(value: number) => [`${(value * 100).toFixed(1)}%`, "F1"]}
            />
            <Bar dataKey="f1" radius={[4, 4, 0, 0]}>
              {data.map((entry, i) => (
                <Cell key={entry.label} fill={BAR_COLORS[i]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
