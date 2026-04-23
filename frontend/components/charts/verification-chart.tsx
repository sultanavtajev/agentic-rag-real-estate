"use client";

import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { ChartCard, PIE_COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function VerificationChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const chartData = [
    { name: "Confirmed real", value: data.verification.real },
    { name: "False alarm", value: data.verification.fake },
  ];

  const total = data.verification.real + data.verification.fake;
  const rate = total > 0 ? (data.verification.real / total * 100).toFixed(1) : "0";

  return (
    <ChartCard prefix={prefix} title="Verification of unmatched risks">
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100}
            label={({ name, percent }: { name: string; percent: number }) => `${name}: ${(percent * 100).toFixed(1)}%`}>
            {chartData.map((_, i) => <Cell key={PIE_COLORS[i]} fill={PIE_COLORS[i]} />)}
          </Pie>
          <Tooltip /><Legend />
        </PieChart>
      </ResponsiveContainer>
      <Note>
        <p>{rate}% of risks that did not match Ground Truth are actually real ({data.verification.real} of {total}). Only {data.verification.fake} were false alarms. GT is not a perfect ground truth.</p>
      </Note>
    </ChartCard>
  );
}
