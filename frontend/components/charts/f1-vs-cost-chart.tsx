"use client";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList } from "recharts";
import { ChartCard, COLORS, Note } from "./chart-helpers";
import type { AggregateResults } from "@/lib/types";

// Claude Opus 4.6 pricing
const INPUT_PRICE = 5; // $/MTok
const OUTPUT_PRICE = 25; // $/MTok

function calcCost(sys: { total_input_tokens: number; total_output_tokens: number; count: number } | undefined): number {
  if (!sys || sys.count === 0) return 0;
  const inputCost = (sys.total_input_tokens / 1e6) * INPUT_PRICE;
  const outputCost = (sys.total_output_tokens / 1e6) * OUTPUT_PRICE;
  return (inputCost + outputCost) / sys.count; // avg cost per run
}

export function F1VsCostChart({ data, prefix }: { data: AggregateResults; prefix?: string }) {
  const stdCost = calcCost(data.systems.standard_rag);
  const agCost = calcCost(data.systems.agentic_rag);
  const gtCost = calcCost(data.systems.ground_truth);

  const stdPt = { system: "Standard RAG", cost: stdCost, f1: (data.evaluation.standard_rag?.avg_f1 ?? 0) * 100 };
  const agPt = { system: "Agentic RAG", cost: agCost, f1: (data.evaluation.agentic_rag?.avg_f1 ?? 0) * 100 };
  const gtPt = { system: "Ground Truth", cost: gtCost, f1: 100 };

  const totalStd = stdCost * (data.systems.standard_rag?.count ?? 0);
  const totalAg = agCost * (data.systems.agentic_rag?.count ?? 0);
  const totalGt = gtCost * (data.systems.ground_truth?.count ?? 0);

  return (
    <ChartCard prefix={prefix} title="F1 vs cost (Claude Opus 4.6)">
      <ResponsiveContainer width="100%" height={350}>
        <ScatterChart margin={{ top: 20, bottom: 10, right: 100 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="cost" name="Cost ($)" type="number" label={{ value: "Avg cost per run ($)", position: "insideBottom", offset: -5 }} />
          <YAxis dataKey="f1" name="F1 (%)" type="number" domain={[0, 110]} label={{ value: "F1 (%)", angle: -90, position: "insideLeft" }} />
          <Tooltip formatter={(v: number) => `$${v.toFixed(3)}`} />
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
        <p>Claude Opus 4.6: $5/MTok input, $25/MTok output. Avg cost per run: Standard RAG ${stdCost.toFixed(3)}, Agentic RAG ${agCost.toFixed(3)}, Ground Truth ${gtCost.toFixed(3)}. Total cost ({data.systems.standard_rag?.count ?? 0} runs each): Std ${totalStd.toFixed(2)}, Ag ${totalAg.toFixed(2)}, GT ${totalGt.toFixed(2)}. Grand total: ${(totalStd + totalAg + totalGt).toFixed(2)}.</p>
      </Note>
    </ChartCard>
  );
}
