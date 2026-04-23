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
import { ChartCard, Note } from "../chart-helpers";

interface ConfidenceData {
  category: string;
  count: number;
  mean_confidence: number;
  min_confidence: number;
  max_confidence: number;
}

function truncate(s: string, max = 20) {
  return s.length > max ? s.substring(0, max) + "…" : s;
}

function barColor(mean: number) {
  if (mean > 0.8) return "#22c55e";
  if (mean > 0.6) return "#eab308";
  return "#ef4444";
}

export function CategoryConfidenceChart({
  data,
  prefix,
}: {
  data: ConfidenceData[];
  prefix?: string;
}) {
  const sorted = [...data].sort((a, b) => b.mean_confidence - a.mean_confidence);

  const chartData = sorted.map((d) => ({
    ...d,
    label: truncate(d.category),
    errorLow: d.mean_confidence - d.min_confidence,
    errorHigh: d.max_confidence - d.mean_confidence,
  }));

  const lowest = sorted.length > 0 ? sorted[sorted.length - 1] : null;
  const lowConfidence = sorted.filter((d) => d.mean_confidence < 0.6);

  return (
    <ChartCard title="Classification confidence by category" prefix={prefix}>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="label"
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 11 }}
          />
          <YAxis domain={[0, 1]} label={{ value: "Confidence", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(v: number) => v.toFixed(3)} />
          <Bar dataKey="mean_confidence" name="Mean confidence">
            {chartData.map((d, i) => (
              <Cell key={i} fill={barColor(d.mean_confidence)} />
            ))}
            <ErrorBar dataKey="errorHigh" direction="both" width={4} strokeWidth={1.5} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          {lowest ? (
            <>
              Lowest confidence: <strong>{lowest.category}</strong> (mean{" "}
              {lowest.mean_confidence.toFixed(3)}).
            </>
          ) : (
            "No data."
          )}{" "}
          {lowConfidence.length > 0
            ? `${lowConfidence.length} categor${lowConfidence.length === 1 ? "y" : "ies"} below 0.6 threshold (most ambiguous).`
            : "All categories above 0.6 confidence."}
        </p>
      </Note>
    </ChartCard>
  );
}
