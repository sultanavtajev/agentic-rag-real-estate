"use client";

import { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import type { AggregateResults } from "@/lib/types";

interface Props {
  data: AggregateResults;
}

function fmt(n: number): string {
  return n.toLocaleString("en-GB");
}

function fmtM(n: number): string {
  return `${(n / 1e6).toFixed(1)}M`;
}

function fmtTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m}m ${Math.round(seconds % 60)}s`;
}

export function ResultsOverview({ data }: Props) {
  const std = data.systems.standard_rag;
  const ag = data.systems.agentic_rag;
  const gt = data.systems.ground_truth;

  const totalRisks = Object.values(data.systems).reduce((s, v) => s + v.total_risks, 0);
  const totalTokens = Object.values(data.systems).reduce((s, v) => s + v.total_tokens, 0);
  const totalTime = Object.values(data.systems).reduce((s, v) => s + v.avg_duration * v.count, 0);

  const agenticF1 = data.evaluation.agentic_rag?.avg_f1;
  const verifyTotal = data.verification.real + data.verification.fake;

  const stdVerify = (data.verification as Record<string, unknown>).standard_rag as { real: number; fake: number } | undefined;
  const agVerify = (data.verification as Record<string, unknown>).agentic_rag as { real: number; fake: number } | undefined;
  const stdVTotal = (stdVerify?.real ?? 0) + (stdVerify?.fake ?? 0);
  const agVTotal = (agVerify?.real ?? 0) + (agVerify?.fake ?? 0);

  const cards = [
    {
      title: "Document sets analyzed",
      value: fmt(data.document_count),
      description: "Total number of document sets",
    },
    {
      title: "Total risks identified",
      value: fmt(totalRisks),
      description: "All systems combined",
    },
    {
      title: "Standard RAG F1",
      value: data.evaluation.standard_rag?.avg_f1 != null ? `${(data.evaluation.standard_rag.avg_f1 * 100).toFixed(1)}%` : "N/A",
      description: "Average F1 score",
    },
    {
      title: "Agentic RAG F1",
      value: agenticF1 != null ? `${(agenticF1 * 100).toFixed(1)}%` : "N/A",
      description: "Average F1 score",
    },
    {
      title: "Verified real rate (Std RAG)",
      value: stdVTotal > 0 ? `${((stdVerify?.real ?? 0) / stdVTotal * 100).toFixed(1)}%` : "N/A",
      description: `${fmt(stdVerify?.real ?? 0)} real / ${fmt(stdVTotal)} total`,
    },
    {
      title: "Verified real rate (Agentic RAG)",
      value: agVTotal > 0 ? `${((agVerify?.real ?? 0) / agVTotal * 100).toFixed(1)}%` : "N/A",
      description: `${fmt(agVerify?.real ?? 0)} real / ${fmt(agVTotal)} total`,
    },
    {
      title: "Total tokens used",
      value: fmtM(totalTokens),
      description: `Std: ${fmtM(std?.total_tokens ?? 0)} | Ag: ${fmtM(ag?.total_tokens ?? 0)} | GT: ${fmtM(gt?.total_tokens ?? 0)}`,
    },
    {
      title: "Total time spent",
      value: fmtTime(totalTime),
      description: `Std: ${fmtTime((std?.avg_duration ?? 0) * (std?.count ?? 0))} | Ag: ${fmtTime((ag?.avg_duration ?? 0) * (ag?.count ?? 0))} | GT: ${fmtTime((gt?.avg_duration ?? 0) * (gt?.count ?? 0))}`,
    },
    {
      title: "Total analyses run",
      value: fmt((std?.count ?? 0) + (ag?.count ?? 0) + (gt?.count ?? 0)),
      description: `Std: ${fmt(std?.count ?? 0)} | Ag: ${fmt(ag?.count ?? 0)} | GT: ${fmt(gt?.count ?? 0)}`,
    },
    {
      title: "LLM calls (Standard RAG)",
      value: fmt(std?.count ?? 0),
      description: "1 call per document set",
    },
    {
      title: "LLM calls (Agentic RAG)",
      value: `~${fmt((ag?.count ?? 0) * 4)}`,
      description: `${fmt(ag?.count ?? 0)} runs x ~4 calls (plan + analyze + reflect + re-analyze)`,
    },
    {
      title: "LLM calls (Ground Truth)",
      value: fmt(gt?.count ?? 0),
      description: "1 call per document set (full text)",
    },
  ];

  const overviewRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(async () => {
    if (!overviewRef.current) return;
    try {
      const dataUrl = await toPng(overviewRef.current, { backgroundColor: "#ffffff", pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = "Fig_1_Overview.png";
      link.href = dataUrl;
      link.click();
    } catch { /* ignore */ }
  }, []);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-medium">Fig 1. Overview</h2>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleDownload} title="Download PNG">
          <Download className="h-4 w-4" />
        </Button>
      </div>
      <div ref={overviewRef} data-chart data-chart-title="Fig_1_Overview" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{card.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
