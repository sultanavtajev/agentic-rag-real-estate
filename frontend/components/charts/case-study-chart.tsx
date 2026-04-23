"use client";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

export function CaseStudyChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const doc = data.per_document.find((d) => {
    const dd = d as Record<string, unknown>;
    return dd.evaluation != null;
  }) as Record<string, unknown> | undefined;

  if (!doc) return null;

  const setId = doc.set_id as string;
  const ev = doc.evaluation as Record<string, Record<string, number>>;
  const std = doc.standard_rag as Record<string, number> | undefined;
  const ag = doc.agentic_rag as Record<string, number> | undefined;
  const gt = doc.ground_truth as Record<string, number> | undefined;

  const riskData = [
    { system: "Standard RAG", risks: std?.risks ?? 0 },
    { system: "Agentic RAG", risks: ag?.risks ?? 0 },
    { system: "Ground Truth", risks: gt?.risks ?? 0 },
  ];

  const matchData = [
    { system: "Standard RAG", Matched: ev?.standard_rag?.matched ?? 0, FP: ev?.standard_rag?.fp ?? 0, FN: ev?.standard_rag?.fn ?? 0 },
    { system: "Agentic RAG", Matched: ev?.agentic_rag?.matched ?? 0, FP: ev?.agentic_rag?.fp ?? 0, FN: ev?.agentic_rag?.fn ?? 0 },
  ];

  return (
    <ChartCard prefix={prefix} title={`Case study: ${setId}`}>
      <div className="space-y-4">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={riskData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="system" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="risks" fill="#2563eb" name="Risks">
              <LabelList dataKey="risks" position="top" style={{ fontSize: 11 }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={matchData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="system" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Matched" stackId="a" fill="#22c55e">
              <LabelList dataKey="Matched" position="center" style={{ fontSize: 10, fill: "#fff" }} />
            </Bar>
            <Bar dataKey="FP" stackId="a" fill="#f97316">
              <LabelList dataKey="FP" position="center" style={{ fontSize: 10, fill: "#fff" }} />
            </Bar>
            <Bar dataKey="FN" stackId="a" fill="#ef4444">
              <LabelList dataKey="FN" position="center" style={{ fontSize: 10, fill: "#fff" }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Note>
        <p>Document set {setId}: Standard RAG found {std?.risks ?? 0} risks (F1: {((ev?.standard_rag?.f1 ?? 0) * 100).toFixed(1)}%), Agentic RAG found {ag?.risks ?? 0} (F1: {((ev?.agentic_rag?.f1 ?? 0) * 100).toFixed(1)}%), Ground Truth has {gt?.risks ?? 0}.</p>
      </Note>
    </ChartCard>
  );
}
