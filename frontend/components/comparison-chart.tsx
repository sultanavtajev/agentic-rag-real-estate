"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPercent } from "@/lib/utils";
import type { EnrichedComparisonReport } from "@/lib/types";

interface ComparisonChartProps {
  report: EnrichedComparisonReport;
}

export function ComparisonChart({ report }: ComparisonChartProps) {
  const systemKeys = Object.keys(report.system_results);
  if (systemKeys.length < 2) return null;

  const data = systemKeys.map((key) => ({
    system: key,
    f1: report.system_results[key].overall_metrics.f1,
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>F1-score per system</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="system" />
            <YAxis
              domain={[0, 1]}
              tickFormatter={(v: number) => formatPercent(v)}
            />
            <Tooltip
              formatter={(v: number | undefined) =>
                v != null ? formatPercent(v) : ""
              }
            />
            <Bar
              dataKey="f1"
              fill="#3b82f6"
              name="F1"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
