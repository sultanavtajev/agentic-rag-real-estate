"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartCard } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

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

function fmtPct(v: number): string {
  return `${(v * 100).toFixed(1)}%`;
}

const ORDERED_CONFIGS = ["P+T+R", "T+R", "P+R", "P+T", "P", "T", "R", "NONE"];

export function AblationOverviewChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const activeConfigs = ORDERED_CONFIGS.filter((c) => data.averages[c]);
  const avg = data.averages;

  const totalRuns = data.results.length;
  const totalTokens = data.results.reduce((s, r) => s + r.input_tokens + r.output_tokens, 0);
  const totalDuration = data.results.reduce((s, r) => s + r.duration_s, 0);

  const bestConfig = activeConfigs.reduce((a, b) => (avg[a].f1 > avg[b].f1 ? a : b), activeConfigs[0]);
  const worstConfig = activeConfigs.reduce((a, b) => (avg[a].f1 < avg[b].f1 ? a : b), activeConfigs[0]);

  // Component deltas
  const full = avg["P+T+R"];
  const deltas = full
    ? [
        { name: "Planning", delta: full.f1 - (avg["T+R"]?.f1 ?? 0) },
        { name: "Tool Use", delta: full.f1 - (avg["P+R"]?.f1 ?? 0) },
        { name: "Reflection", delta: full.f1 - (avg["P+T"]?.f1 ?? 0) },
      ].sort((a, b) => b.delta - a.delta)
    : [];

  // Per-config token/time breakdown
  const configBreakdown = activeConfigs
    .map((c) => {
      const rows = data.results.filter((r) => r.config_label === c);
      const tokens = rows.reduce((s, r) => s + r.input_tokens + r.output_tokens, 0);
      return `${c}: ${fmtM(tokens)}`;
    })
    .join(" | ");

  const configTimeBreakdown = activeConfigs
    .map((c) => {
      const rows = data.results.filter((r) => r.config_label === c);
      const time = rows.reduce((s, r) => s + r.duration_s, 0);
      return `${c}: ${fmtTime(time)}`;
    })
    .join(" | ");

  const cards = [
    {
      title: "Document sets analyzed",
      value: fmt(data.document_set_ids.length),
      description: "Total number of document sets",
    },
    {
      title: "Configurations",
      value: fmt(activeConfigs.length),
      description: activeConfigs.join(", "),
    },
    {
      title: "Total runs",
      value: fmt(totalRuns),
      description: `${activeConfigs.length} configs × ${data.document_set_ids.length} docs`,
    },
    {
      title: "Best configuration",
      value: bestConfig,
      description: `F1: ${fmtPct(avg[bestConfig].f1)} | P: ${fmtPct(avg[bestConfig].precision)} | R: ${fmtPct(avg[bestConfig].recall)}`,
    },
    {
      title: "Worst configuration",
      value: worstConfig,
      description: `F1: ${fmtPct(avg[worstConfig].f1)} | P: ${fmtPct(avg[worstConfig].precision)} | R: ${fmtPct(avg[worstConfig].recall)}`,
    },
    {
      title: "Most impactful component",
      value: deltas[0]?.name ?? "—",
      description: deltas[0]
        ? `+${(deltas[0].delta * 100).toFixed(1)} pp F1 contribution`
        : "No data",
    },
    {
      title: "Total token usage",
      value: fmtM(totalTokens),
      description: configBreakdown,
    },
    {
      title: "Total time spent",
      value: fmtTime(totalDuration),
      description: configTimeBreakdown,
    },
  ];

  return (
    <ChartCard title="Ablation study:Overview" prefix={prefix}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">{card.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </ChartCard>
  );
}
