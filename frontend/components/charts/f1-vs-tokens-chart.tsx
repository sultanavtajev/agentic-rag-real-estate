"use client";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function F1VsTokensChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const stdTokens = (data.systems.standard_rag?.avg_tokens ?? 0) / 1000;
  const agTokens = (data.systems.agentic_rag?.avg_tokens ?? 0) / 1000;
  const gtTokens = (data.systems.ground_truth?.avg_tokens ?? 0) / 1000;

  const stdPt = { system: "Standard RAG", tokens: stdTokens, f1: (data.evaluation.standard_rag?.avg_f1 ?? 0) * 100 };
  const agPt = { system: "Agentic RAG", tokens: agTokens, f1: (data.evaluation.agentic_rag?.avg_f1 ?? 0) * 100 };
  const gtPt = { system: "Ground Truth", tokens: gtTokens, f1: 100 };

  return (
    <ChartCard prefix={prefix} title="F1 vs token usage">
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 20, bottom: 10, right: 80 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="tokens" name="Tokens (k)" type="number" label={{ value: "Avg tokens (k)", position: "insideBottom", offset: -5 }} />
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
        <p>Standard RAG: {stdTokens.toFixed(0)}k tokens for {stdPt.f1.toFixed(1)}% F1. Agentic RAG: {agTokens.toFixed(0)}k tokens for {agPt.f1.toFixed(1)}% F1. Ground Truth: {gtTokens.toFixed(0)}k tokens for 100% F1. Agentic uses {stdTokens > 0 ? (agTokens / stdTokens).toFixed(1) : "N/A"}x more tokens for {stdPt.f1 > 0 ? (agPt.f1 / stdPt.f1).toFixed(1) : "N/A"}x higher F1.</p>
      </Note>
    </ChartCard>
  );
}
