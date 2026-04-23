"use client";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

const SINGLES = ["P", "T", "R"];
const PAIRS = ["P+T", "P+R", "T+R"];
const FULL = ["P+T+R"];

export function InteractionEffectsChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const avg = data.averages;

  const singles = SINGLES.map((c) => ({
    x: 1,
    f1: (avg[c]?.f1 ?? 0) * 100,
    label: c,
  }));
  const pairs = PAIRS.map((c) => ({
    x: 2,
    f1: (avg[c]?.f1 ?? 0) * 100,
    label: c,
  }));
  const full = FULL.map((c) => ({
    x: 3,
    f1: (avg[c]?.f1 ?? 0) * 100,
    label: c,
  }));

  const avgSingle = singles.reduce((s, d) => s + d.f1, 0) / (singles.length || 1);
  const avgPair = pairs.reduce((s, d) => s + d.f1, 0) / (pairs.length || 1);
  const avgFull = full[0]?.f1 ?? 0;
  const expectedPair = avgSingle * 2;
  const synergy = avgPair > expectedPair;

  const trendData = [
    { x: 1, f1: avgSingle, label: "avg" },
    { x: 2, f1: avgPair, label: "avg" },
    { x: 3, f1: avgFull, label: "avg" },
  ];

  return (
    <ChartCard title="Interaction effects:F1 by component count" prefix={prefix}>
      <ResponsiveContainer width="100%" height={320}>
        <ScatterChart margin={{ top: 20, right: 30, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="x"
            type="number"
            domain={[0.5, 3.5]}
            ticks={[1, 2, 3]}
            tickFormatter={(v: number) => `${v} comp.`}
          />
          <YAxis
            dataKey="f1"
            domain={[0, 100]}
            label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip formatter={(v: number) => `${v.toFixed(1)}%`} />
          <Scatter name="Individual (1)" data={singles} fill={COLORS.primary}>
            <LabelList dataKey="label" position="right" style={{ fontSize: 10 }} />
          </Scatter>
          <Scatter name="Pairs (2)" data={pairs} fill={COLORS.accent}>
            <LabelList dataKey="label" position="right" style={{ fontSize: 10 }} />
          </Scatter>
          <Scatter name="Full (3)" data={full} fill="#22c55e">
            <LabelList dataKey="label" position="right" style={{ fontSize: 10 }} />
          </Scatter>
          <Scatter
            name="Average trend"
            data={trendData}
            fill="none"
            line={{ stroke: "#94a3b8", strokeDasharray: "5 5", strokeWidth: 2 }}
            legendType="none"
            shape={() => null}
          />
          <ReferenceLine y={0} stroke="#e2e8f0" />
        </ScatterChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Each dot is one ablation configuration at its component count.
          Dashed line connects the averages per group.
          {synergy
            ? " Super-additive synergy detected: pairs outperform the sum of individual components."
            : " No strong super-additive synergy detected: pairs roughly match the sum of individuals."}
        </p>
      </Note>
    </ChartCard>
  );
}
