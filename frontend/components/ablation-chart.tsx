"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatPercent } from "@/lib/utils";

interface AblationChartProps {
  data: Array<{ config: string; [key: string]: string | number }>;
}

export function AblationChart({ data }: AblationChartProps) {
  if (data.length === 0) return null;

  const keys = Object.keys(data[0]).filter((k) => k !== "config");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Ablation study — F1 per system</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="config" />
            <YAxis domain={[0, 1]} tickFormatter={(v: number) => formatPercent(v)} />
            <Tooltip formatter={(v: number | undefined) => v != null ? formatPercent(v) : ""} />
            <Legend />
            {keys.map((key) => (
              <Bar
                key={key}
                dataKey={key}
                fill="#6b7280"
                name={key}
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
