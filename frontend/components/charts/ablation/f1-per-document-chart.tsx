"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
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

export function F1PerDocumentChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const docIds = [...new Set(data.results.map((r) => r.document_set_id))].sort(
    (a, b) => a.localeCompare(b, undefined, { numeric: true }),
  );

  const configs = ORDERED_CONFIGS.filter((c) =>
    data.results.some((r) => r.config_label === c),
  );

  const chartData = docIds.map((docId) => {
    const entry: Record<string, string | number> = { docId };
    for (const cfg of configs) {
      const r = data.results.find(
        (r) => r.document_set_id === docId && r.config_label === cfg,
      );
      if (r) entry[cfg] = +(r.f1 * 100).toFixed(1);
    }
    return entry;
  });

  return (
    <ChartCard title="F1 score per document set" prefix={prefix}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="docId" tick={{ fontSize: 11 }} />
          <YAxis
            domain={[0, 100]}
            label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
          <Legend />
          {configs.map((cfg) => (
            <Line
              key={cfg}
              type="monotone"
              dataKey={cfg}
              stroke={CONFIG_COLORS[cfg] ?? "#666"}
              strokeWidth={cfg === "P+T+R" ? 3 : 1.5}
              dot={{ r: cfg === "P+T+R" ? 4 : 2 }}
              connectNulls
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <Note>
        <p>
          F1 score per document set for each ablation configuration. P+T+R (full) is highlighted.
          {(() => {
            const ptrResults = data.results.filter((r) => r.config_label === "P+T+R");
            if (ptrResults.length === 0) return "";
            const best = ptrResults.reduce((a, b) => (b.f1 > a.f1 ? b : a));
            const worst = ptrResults.reduce((a, b) => (a.f1 < b.f1 ? a : b));
            return ` P+T+R range: ${(worst.f1 * 100).toFixed(1)}% (${worst.document_set_id}) to ${(best.f1 * 100).toFixed(1)}% (${best.document_set_id}).`;
          })()}
        </p>
      </Note>
    </ChartCard>
  );
}
