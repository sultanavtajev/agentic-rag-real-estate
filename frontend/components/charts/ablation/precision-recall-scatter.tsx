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
  Cell,
} from "recharts";
import { ChartCard, COLORS, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

const CONFIG_ORDER = ["P+T+R", "T+R", "P+R", "P+T", "P", "T", "R", "NONE"];
const DOT_COLORS: Record<string, string> = {
  "P+T+R": "#22c55e",
  "T+R": COLORS.accent,
  "P+R": COLORS.accent,
  "P+T": COLORS.accent,
  P: COLORS.primary,
  T: COLORS.primary,
  R: COLORS.primary,
  NONE: "#94a3b8",
};

function isoLinePoints(f1pct: number) {
  const pts: { precision: number; recall: number }[] = [];
  for (let p = 1; p <= 100; p += 2) {
    const r = (f1pct * p) / (2 * p - f1pct);
    if (r >= 0 && r <= 100) pts.push({ precision: p, recall: r });
  }
  return pts;
}

export function PrecisionRecallScatter({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const avg = data.averages;

  const points = CONFIG_ORDER.filter((c) => avg[c]).map((c) => ({
    precision: (avg[c].precision ?? 0) * 100,
    recall: (avg[c].recall ?? 0) * 100,
    f1: (avg[c].f1 ?? 0) * 100,
    label: c,
  }));

  const bestF1 = points.reduce((a, b) => (b.f1 > a.f1 ? b : a), points[0]);
  const worstF1 = points.reduce((a, b) => (b.f1 < a.f1 ? b : a), points[0]);

  const iso25 = isoLinePoints(25);
  const iso50 = isoLinePoints(50);
  const iso75 = isoLinePoints(75);

  return (
    <ChartCard title="Precision vs. recall per configuration" prefix={prefix}>
      <ResponsiveContainer width="100%" height={340}>
        <ScatterChart margin={{ top: 20, right: 40, bottom: 10, left: 10 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="precision"
            type="number"
            domain={[0, 100]}
            name="Precision"
            label={{ value: "Precision (%)", position: "insideBottom", offset: -5 }}
          />
          <YAxis
            dataKey="recall"
            type="number"
            domain={[0, 100]}
            name="Recall"
            label={{ value: "Recall (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            content={({ payload }) => {
              if (!payload?.[0]?.payload?.label) return null;
              const d = payload[0].payload;
              return (
                <div className="rounded-md border bg-background p-2 text-xs shadow-sm">
                  <strong>{d.label}</strong><br />
                  Precision: {d.precision.toFixed(1)}%<br />
                  Recall: {d.recall.toFixed(1)}%<br />
                  F1: {d.f1.toFixed(1)}%
                </div>
              );
            }}
          />
          <Scatter name="F1=25%" data={iso25} fill="none" line={{ stroke: "#e2e8f0", strokeDasharray: "4 4" }} shape={() => <></>} legendType="none" />
          <Scatter name="F1=50%" data={iso50} fill="none" line={{ stroke: "#cbd5e1", strokeDasharray: "4 4" }} shape={() => <></>} legendType="none" />
          <Scatter name="F1=75%" data={iso75} fill="none" line={{ stroke: "#94a3b8", strokeDasharray: "4 4" }} shape={() => <></>} legendType="none" />
          <Scatter name="Configurations" data={points} fill={COLORS.primary}>
            {points.map((p, i) => (
              <Cell key={i} fill={DOT_COLORS[p.label] ?? COLORS.secondary} r={6} />
            ))}
            <LabelList dataKey="label" position="top" style={{ fontSize: 10, fontWeight: 600 }} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <Note>
        <p>
          Each dot is one ablation configuration plotted by average precision and
          recall. Dashed curves are F1 iso-lines (25%, 50%, 75%). Points closer
          to the top-right have better overall performance.
          {bestF1 && worstF1 && (
            <> Best: <strong>{bestF1.label}</strong> (F1 {bestF1.f1.toFixed(1)}%),
            worst: <strong>{worstF1.label}</strong> (F1 {worstF1.f1.toFixed(1)}%).
            High recall with low precision indicates many false positives.</>
          )}
        </p>
      </Note>
    </ChartCard>
  );
}
