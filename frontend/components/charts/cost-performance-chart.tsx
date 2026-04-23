"use client";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function CostPerformanceChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const stdPt = { system: "Standard RAG", tid: data.systems.standard_rag?.avg_duration ?? 0, f1: (data.evaluation.standard_rag?.avg_f1 ?? 0) * 100 };
  const agPt = { system: "Agentic RAG", tid: data.systems.agentic_rag?.avg_duration ?? 0, f1: (data.evaluation.agentic_rag?.avg_f1 ?? 0) * 100 };
  const gtPt = { system: "Ground Truth", tid: data.systems.ground_truth?.avg_duration ?? 0, f1: 100 };

  return (
    <ChartCard prefix={prefix} title="Cost-performance trade-off">
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 20, bottom: 10, right: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tid" name="Time (s)" type="number" label={{ value: "Time (s)", position: "insideBottom", offset: -5 }} />
          <YAxis dataKey="f1" name="F1 (%)" type="number" domain={[0, 110]} label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(v: number) => v.toFixed(1)} />
          <Scatter name="Standard RAG" data={[stdPt]} fill={COLORS.secondary}>
            <LabelList dataKey="system" position="top" style={{ fontSize: 11 }} />
          </Scatter>
          <Scatter name="Agentic RAG" data={[agPt]} fill={COLORS.primary}>
            <LabelList dataKey="system" position="top" style={{ fontSize: 11 }} />
          </Scatter>
          <Scatter name="Ground Truth" data={[gtPt]} fill={COLORS.accent}>
            <LabelList dataKey="system" position="right" style={{ fontSize: 11 }} />
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
      <Note>
        <p>Standard RAG: {stdPt.tid.toFixed(0)}s for {stdPt.f1.toFixed(1)}% F1. Agentic RAG: {agPt.tid.toFixed(0)}s for {agPt.f1.toFixed(1)}% F1. Ground Truth: {gtPt.tid.toFixed(0)}s for 100% F1 (reference).</p>
      </Note>
    </ChartCard>
  );
}
