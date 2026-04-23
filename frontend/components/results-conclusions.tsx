"use client";

import { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { AggregateResults } from "@/lib/types";

interface Props {
  data: AggregateResults;
  prefix?: string;
}

// Claude Opus 4.6 pricing
const INPUT_PRICE = 5; // $/MTok
const OUTPUT_PRICE = 25; // $/MTok

function calcCost(sys: { total_input_tokens: number; total_output_tokens: number; count: number } | undefined): number {
  if (!sys || sys.count === 0) return 0;
  const inputCost = (sys.total_input_tokens / 1e6) * INPUT_PRICE;
  const outputCost = (sys.total_output_tokens / 1e6) * OUTPUT_PRICE;
  return (inputCost + outputCost) / sys.count;
}

function stddev(values: number[]): number {
  if (values.length < 2) return 0;
  const mean = values.reduce((s, v) => s + v, 0) / values.length;
  const variance = values.reduce((s, v) => s + (v - mean) ** 2, 0) / (values.length - 1);
  return Math.sqrt(variance);
}

export function ResultsConclusions({ data, prefix }: Props) {
  // ── System stats ──
  const std = data.systems.standard_rag;
  const ag = data.systems.agentic_rag;
  const gt = data.systems.ground_truth;

  // ── F1 / Precision / Recall ──
  const stdF1 = (data.evaluation.standard_rag?.avg_f1 ?? 0) * 100;
  const agF1 = (data.evaluation.agentic_rag?.avg_f1 ?? 0) * 100;
  const f1Ratio = stdF1 > 0 ? agF1 / stdF1 : 0;

  const stdPrec = (data.evaluation.standard_rag?.avg_precision ?? 0) * 100;
  const agPrec = (data.evaluation.agentic_rag?.avg_precision ?? 0) * 100;
  const stdRecall = (data.evaluation.standard_rag?.avg_recall ?? 0) * 100;
  const agRecall = (data.evaluation.agentic_rag?.avg_recall ?? 0) * 100;

  const stdAdjF1 = (data.evaluation.standard_rag?.avg_adjusted_f1 ?? 0) * 100;
  const agAdjF1 = (data.evaluation.agentic_rag?.avg_adjusted_f1 ?? 0) * 100;

  // ── Resource usage ──
  const stdTime = std?.avg_duration ?? 0;
  const agTime = ag?.avg_duration ?? 0;
  const timeRatio = stdTime > 0 ? agTime / stdTime : 0;

  const stdTokens = std?.avg_tokens ?? 0;
  const agTokens = ag?.avg_tokens ?? 0;
  const tokenRatio = stdTokens > 0 ? agTokens / stdTokens : 0;

  // ── Risks ──
  const stdRisks = std?.avg_risks ?? 0;
  const agRisks = ag?.avg_risks ?? 0;
  const gtRisks = gt?.avg_risks ?? 0;
  const riskRatio = stdRisks > 0 ? agRisks / stdRisks : 0;

  // ── Verification ──
  const verifyTotal = data.verification.real + data.verification.fake;
  const realRate = verifyTotal > 0 ? (data.verification.real / verifyTotal) * 100 : 0;

  // ── Overlap ──
  const avgShared = data.overlap?.avg_shared ?? 0;
  const uStd = data.overlap?.avg_unique_standard ?? 0;
  const uAg = data.overlap?.avg_unique_agentic ?? 0;

  // ── Cost ──
  const stdCost = calcCost(std);
  const agCost = calcCost(ag);
  const gtCost = calcCost(gt);
  const costRatio = stdCost > 0 ? agCost / stdCost : 0;
  const totalCost = stdCost * (std?.count ?? 0) + agCost * (ag?.count ?? 0) + gtCost * (gt?.count ?? 0);

  // ── F1 distribution ──
  const perDoc = data.per_document ?? [];
  const stdF1s = perDoc
    .map((d) => (d as Record<string, Record<string, Record<string, number>>>).evaluation?.standard_rag?.f1)
    .filter((v): v is number => v != null)
    .map((v) => v * 100);
  const agF1s = perDoc
    .map((d) => (d as Record<string, Record<string, Record<string, number>>>).evaluation?.agentic_rag?.f1)
    .filter((v): v is number => v != null)
    .map((v) => v * 100);
  const stdSd = stddev(stdF1s);
  const agSd = stddev(agF1s);
  const agenticBetter = agF1s.filter((v, i) => v > (stdF1s[i] ?? 0)).length;
  const agenticBetterPct = stdF1s.length > 0 ? (agenticBetter / stdF1s.length) * 100 : 0;

  // ── Best system ──
  const best = data.best_system ?? {};
  const bestTotal = Object.values(best).reduce((s, v) => s + v, 0);
  const bestLabels: Record<string, string> = {
    standard_rag: "Standard RAG",
    agentic_rag: "Agentic RAG",
    ground_truth: "Ground Truth",
  };

  // ── Header / download ──
  const displayTitle = prefix ? `${prefix}. Key conclusions` : "Key conclusions";
  const slug = displayTitle.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");
  const ref = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(async () => {
    if (!ref.current) return;
    try {
      const dataUrl = await toPng(ref.current, { backgroundColor: "#ffffff", pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `${slug}.png`;
      link.href = dataUrl;
      link.click();
    } catch { /* ignore */ }
  }, [slug]);

  return (
    <div ref={ref} data-chart data-chart-title={slug}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>{displayTitle}</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8 print:hidden" onClick={handleDownload} title="Download PNG">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 1. Overall performance */}
          <section>
            <h3 className="text-sm font-semibold mb-2">1. Overall performance</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>
                Agentic RAG achieves <strong className="text-foreground">{agF1.toFixed(1)}% F1</strong> vs Standard RAG&apos;s{" "}
                <strong className="text-foreground">{stdF1.toFixed(1)}%</strong> — a{" "}
                <strong className="text-foreground">{f1Ratio.toFixed(1)}x improvement</strong>
              </li>
              <li>
                Precision: {agPrec.toFixed(1)}% vs {stdPrec.toFixed(1)}% — Recall: {agRecall.toFixed(1)}% vs {stdRecall.toFixed(1)}%
              </li>
              <li>
                After verification, adjusted F1 rises to {agAdjF1.toFixed(1)}% (Agentic) and {stdAdjF1.toFixed(1)}% (Standard)
              </li>
              <li>
                Agentic RAG scores higher in {agenticBetterPct.toFixed(0)}% of individual document sets ({agenticBetter} of {stdF1s.length})
              </li>
            </ul>
          </section>

          {/* 2. Risk identification */}
          <section>
            <h3 className="text-sm font-semibold mb-2">2. Risk identification</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>
                Standard RAG finds on average {stdRisks.toFixed(1)} risks per document, Agentic RAG finds {agRisks.toFixed(1)} ({riskRatio.toFixed(1)}x more), and Ground Truth {gtRisks.toFixed(1)}
              </li>
              <li>
                On average {avgShared.toFixed(1)} risks are shared between systems, with {uStd.toFixed(1)} unique to Standard and {uAg.toFixed(1)} unique to Agentic — the systems are complementary
              </li>
              <li>
                Total risks identified across all systems: {((std?.total_risks ?? 0) + (ag?.total_risks ?? 0) + (gt?.total_risks ?? 0)).toLocaleString("en")}
              </li>
            </ul>
          </section>

          {/* 3. Verification and GT limitations */}
          <section>
            <h3 className="text-sm font-semibold mb-2">3. Verification and Ground Truth limitations</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>
                {realRate.toFixed(1)}% of risks that did not match Ground Truth were verified as actually real ({data.verification.real} of {verifyTotal}) — only {data.verification.fake} were false alarms
              </li>
              <li>
                Ground Truth is not a perfect reference — it misses risks that both RAG systems correctly identify
              </li>
              <li>
                The adjusted F1 (accounting for verified real risks) gives a more accurate picture of true system performance
              </li>
            </ul>
          </section>

          {/* 4. Resource efficiency */}
          <section>
            <h3 className="text-sm font-semibold mb-2">4. Resource efficiency and cost</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>
                Agentic RAG uses {timeRatio.toFixed(1)}x more time ({agTime.toFixed(1)}s vs {stdTime.toFixed(1)}s) and {tokenRatio.toFixed(1)}x more tokens ({(agTokens / 1000).toFixed(0)}k vs {(stdTokens / 1000).toFixed(0)}k)
              </li>
              <li>
                Average cost per run (Claude Opus 4.6): Standard RAG ${stdCost.toFixed(3)}, Agentic RAG ${agCost.toFixed(3)}, Ground Truth ${gtCost.toFixed(3)} — Agentic costs {costRatio.toFixed(1)}x more
              </li>
              <li>
                Total experiment cost across all {(std?.count ?? 0) + (ag?.count ?? 0) + (gt?.count ?? 0)} runs: ${totalCost.toFixed(2)}
              </li>
            </ul>
          </section>

          {/* 5. Consistency */}
          <section>
            <h3 className="text-sm font-semibold mb-2">5. Consistency across documents</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>
                Standard RAG F1: {stdF1.toFixed(1)}% ± {stdSd.toFixed(1)}% — Agentic RAG F1: {agF1.toFixed(1)}% ± {agSd.toFixed(1)}%
              </li>
              <li>
                {agSd < stdSd
                  ? "Agentic RAG is more consistent (lower standard deviation), indicating more reliable results across different document types"
                  : "Standard RAG is slightly more consistent, but Agentic RAG compensates with significantly higher average performance"}
              </li>
            </ul>
          </section>

          {/* 6. Best system */}
          <section>
            <h3 className="text-sm font-semibold mb-2">6. Best system distribution</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              {Object.entries(best).filter(([, v]) => v > 0).map(([key, count]) => (
                <li key={key}>
                  {bestLabels[key] ?? key} was the best system in {count} of {bestTotal} evaluations ({bestTotal > 0 ? ((count / bestTotal) * 100).toFixed(0) : 0}%)
                </li>
              ))}
            </ul>
          </section>

          {/* 7. Practical implications */}
          <section>
            <h3 className="text-sm font-semibold mb-2">7. Practical implications</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
              <li>
                Standard RAG is cost-effective for basic risk screening at ${stdCost.toFixed(3)}/run, but misses significant risks
              </li>
              <li>
                Agentic RAG is recommended for thorough analysis where risk coverage is critical, despite the {costRatio.toFixed(1)}x cost increase
              </li>
              <li>
                The multi-step agentic approach (planning + retrieval + reflection) yields {f1Ratio.toFixed(1)}x better F1, justifying the additional resource usage for high-stakes document analysis
              </li>
              <li>
                Evaluated across {data.document_count} Norwegian real estate document sets (salgsoppgaver) with {(std?.count ?? 0) + (ag?.count ?? 0) + (gt?.count ?? 0)} total analysis runs
              </li>
            </ul>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
