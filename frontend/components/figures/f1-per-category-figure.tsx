"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { ChartCard, Note } from "@/components/charts/chart-helpers";
import { getF1PerCategory } from "@/lib/api-client";
import type { CategoryF1Stats } from "@/lib/types";

const MIN_SUPPORT = 10;

function truncate(s: string, max = 22) {
  return s.length > max ? s.substring(0, max) + "\u2026" : s;
}

export function F1PerCategoryFigure({ prefix }: { prefix?: string }) {
  const [data, setData] = useState<CategoryF1Stats[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getF1PerCategory()
      .then((res) => {
        if (!cancelled) setData(res);
      })
      .catch((e: unknown) => {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e));
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (error) {
    return (
      <ChartCard prefix={prefix} title="F1 per category">
        <p className="text-sm text-red-600">Failed to load: {error}</p>
      </ChartCard>
    );
  }

  if (!data) {
    return (
      <ChartCard prefix={prefix} title="F1 per category">
        <p className="text-sm text-muted-foreground">Loading...</p>
      </ChartCard>
    );
  }

  const filtered = data.filter((d) => d.support >= MIN_SUPPORT);
  const chartData = filtered.map((d) => ({
    category: d.category,
    label: truncate(d.category.replace(/_/g, " ")),
    standard_f1: d.standard_f1 * 100,
    agentic_f1: d.agentic_f1 * 100,
    support: d.support,
  }));

  const stdMacro =
    filtered.reduce((s, d) => s + d.standard_f1, 0) / (filtered.length || 1);
  const agMacro =
    filtered.reduce((s, d) => s + d.agentic_f1, 0) / (filtered.length || 1);

  const sortedByAg = [...filtered].sort((a, b) => b.agentic_f1 - a.agentic_f1);
  const top = sortedByAg.slice(0, 3);
  const bottom = sortedByAg.slice(-3).reverse();

  return (
    <ChartCard prefix={prefix} title="F1 per category">
      <ResponsiveContainer width="100%" height={500}>
        <BarChart data={chartData} margin={{ bottom: 110 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="label"
            angle={-45}
            textAnchor="end"
            interval={0}
            height={120}
            tick={{ fontSize: 11 }}
          />
          <YAxis
            domain={[0, 100]}
            label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            formatter={(value) => `${Number(value).toFixed(1)}%`}
            labelFormatter={(label, payload) => {
              const p = payload?.[0]?.payload as
                | { category: string; support: number }
                | undefined;
              return p ? `${p.category} (support ${p.support})` : label;
            }}
          />
          <Legend />
          <Bar dataKey="standard_f1" name="Standard RAG" fill="#d97757" />
          <Bar dataKey="agentic_f1" name="Agentic RAG" fill="#4a7c7c" />
        </BarChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Support = number of ground-truth risks per category (TP + FN).
          Categories with support &lt; {MIN_SUPPORT} are excluded to avoid
          statistical noise from rare categories.
        </p>
        <p className="mt-1">
          Macro-F1 across {filtered.length} categories: Standard RAG{" "}
          <strong>{(stdMacro * 100).toFixed(1)}%</strong>, Agentic RAG{" "}
          <strong>{(agMacro * 100).toFixed(1)}%</strong>.
        </p>
        <p className="mt-1">
          Top 3 agentic: {top.map((d) => `${d.category} (${(d.agentic_f1 * 100).toFixed(1)}%)`).join(", ")}.
        </p>
        <p className="mt-1">
          Bottom 3 agentic: {bottom.map((d) => `${d.category} (${(d.agentic_f1 * 100).toFixed(1)}%)`).join(", ")}.
        </p>
      </Note>
    </ChartCard>
  );
}
