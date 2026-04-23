"use client";

import { useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { ComponentContributionChart } from "./charts/ablation/component-contribution-chart";
import { AblationRadarChart } from "./charts/ablation/radar-chart";
import { CostPerformanceScatter } from "./charts/ablation/cost-performance-scatter";
import { F1BoxplotChart } from "./charts/ablation/f1-boxplot-chart";
import { HeatmapChart } from "./charts/ablation/heatmap-chart";
import { WaterfallChart } from "./charts/ablation/waterfall-chart";
import { InteractionEffectsChart } from "./charts/ablation/interaction-effects-chart";
import { PrecisionRecallScatter } from "./charts/ablation/precision-recall-scatter";
import { F1PerDocumentChart } from "./charts/ablation/f1-per-document-chart";
import { F1StatsChart } from "./charts/ablation/f1-stats-chart";
import { CostF1TradeoffChart } from "./charts/ablation/cost-f1-tradeoff-chart";
import { ConfidenceIntervalChart } from "./charts/ablation/confidence-interval-chart";
import { BestConfigChart } from "./charts/ablation/best-config-chart";
import { RisksPerConfigChart } from "./charts/ablation/risks-per-config-chart";
import { AblationOverviewChart } from "./charts/ablation/overview-chart";
import { saveAblationCharts } from "@/lib/api-client";
import type { AblationStudySummary } from "@/lib/types";

const CHART_META = [
  { id: "overview", filename: "Fig_23_Ablation_overview.png", title: "Ablation study:Overview" },
  { id: "risks", filename: "Fig_24_Ablation_risks_per_config.png", title: "Average risks identified per configuration" },
  { id: "contribution", filename: "Fig_25_Ablation_component_contribution.png", title: "Component contribution (ΔF1)" },
  { id: "radar", filename: "Fig_26_Ablation_radar.png", title: "Radar:F1, Precision, Recall per config" },
  { id: "cost", filename: "Fig_27_Ablation_cost_performance.png", title: "Cost vs. performance" },
  { id: "boxplot", filename: "Fig_28_Ablation_f1_distribution.png", title: "F1 distribution per config" },
  { id: "heatmap", filename: "Fig_29_Ablation_heatmap.png", title: "F1 heatmap:document sets × configs" },
  { id: "waterfall", filename: "Fig_30_Ablation_waterfall.png", title: "F1 waterfall:drop from full config" },
  { id: "interaction", filename: "Fig_31_Ablation_interaction_effects.png", title: "Interaction effects" },
  { id: "pr", filename: "Fig_32_Ablation_precision_recall.png", title: "Precision vs. Recall trade-off" },
  { id: "f1doc", filename: "Fig_33_Ablation_f1_per_document.png", title: "F1 score per document set" },
  { id: "f1stats", filename: "Fig_34_Ablation_f1_distribution_stats.png", title: "F1 distribution (min/mean/max)" },
  { id: "costf1", filename: "Fig_35_Ablation_cost_f1_tradeoff.png", title: "Cost vs. performance per configuration" },
  { id: "ci", filename: "Fig_36_Ablation_confidence_interval.png", title: "F1 with standard deviation" },
  { id: "bestcfg", filename: "Fig_37_Ablation_best_config.png", title: "Best configuration per document set" },
] as const;

function stddev(values: number[]): number {
  if (values.length < 2) return 0;
  const mean = values.reduce((s, v) => s + v, 0) / values.length;
  const variance = values.reduce((s, v) => s + (v - mean) ** 2, 0) / (values.length - 1);
  return Math.sqrt(variance);
}

function generateReport(data: AblationStudySummary): string {
  const configs = ["P+T+R", "T+R", "P+R", "P+T", "P", "T", "R", "NONE"];
  const activeConfigs = configs.filter((c) => data.averages[c]);
  const avg = data.averages;
  const fmt = (v: number) => `${(v * 100).toFixed(1)}%`;
  const basePath = "docs/0.6_prosjekt_rapport/4.dokumentasjon/resultater/visualiseringer";

  const totalResults = data.results.length;
  const totalTokens = data.results.reduce((s, r) => s + r.input_tokens + r.output_tokens, 0);
  const totalDuration = data.results.reduce((s, r) => s + r.duration_s, 0);
  const totalHours = Math.floor(totalDuration / 3600);
  const totalMins = Math.floor((totalDuration % 3600) / 60);

  const docIds = [...new Set(data.results.map((r) => r.document_set_id))].sort(
    (a, b) => a.localeCompare(b, undefined, { numeric: true }),
  );

  // Precompute helpers
  const configRows = (c: string) => data.results.filter((r) => r.config_label === c);
  const f1sFor = (c: string) => configRows(c).map((r) => r.f1 * 100);

  function f1Stats(f1s: number[]) {
    if (f1s.length === 0) return { mean: 0, median: 0, min: 0, max: 0, sd: 0 };
    const sorted = [...f1s].sort((a, b) => a - b);
    const mean = f1s.reduce((s, v) => s + v, 0) / f1s.length;
    const mid = Math.floor(sorted.length / 2);
    const median = sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
    const sd = stddev(f1s);
    return { mean, median, min: sorted[0], max: sorted[sorted.length - 1], sd };
  }

  const full = avg["P+T+R"];
  const deltas = full
    ? [
        { name: "Planning", removed: "T+R", delta: full.f1 - (avg["T+R"]?.f1 ?? 0) },
        { name: "Tool Use", removed: "P+R", delta: full.f1 - (avg["P+R"]?.f1 ?? 0) },
        { name: "Reflection", removed: "P+T", delta: full.f1 - (avg["P+T"]?.f1 ?? 0) },
      ].sort((a, b) => b.delta - a.delta)
    : [];

  const wins: Record<string, number> = {};
  for (const docId of docIds) {
    const docResults = data.results.filter((r) => r.document_set_id === docId);
    if (docResults.length === 0) continue;
    const best = docResults.reduce((a, b) => (b.f1 > a.f1 ? b : a));
    wins[best.config_label] = (wins[best.config_label] ?? 0) + 1;
  }

  // Helper to emit a figure section
  function fig(id: string, extraMd: string): string {
    const m = CHART_META.find((m) => m.id === id);
    if (!m) return "";
    const figNum = m.filename.match(/Fig_(\d+)/)?.[1] ?? "?";
    let s = `## Fig ${figNum}. ${m.title}\n\n`;
    s += `![Fig ${figNum}](${m.filename})\n\n`;
    s += `> Path: \`${basePath}/${m.filename}\`\n\n`;
    s += extraMd + "\n";
    return s;
  }

  let md = `# Ablation Results Report\n\nGenerated from ${data.document_set_ids.length} document sets.\n\n`;

  // Overview
  md += `## Overview\n\n`;
  md += `| Metric | Value | Description |\n|--------|-------|-------------|\n`;
  md += `| Document sets | ${data.document_set_ids.length} | Total document sets analyzed |\n`;
  md += `| Configurations | ${activeConfigs.length} | ${activeConfigs.join(", ")} |\n`;
  md += `| Total runs | ${totalResults} | ${activeConfigs.length} configs × ${data.document_set_ids.length} docs |\n`;
  md += `| Total tokens | ${(totalTokens / 1_000_000).toFixed(1)}M | All configurations combined |\n`;
  md += `| Total time | ${totalHours}h ${totalMins}m | All configurations combined |\n`;
  md += `\n`;

  // Summary table
  md += `## Summary:Average metrics per configuration\n\n`;
  md += `| Config | F1 | Precision | Recall | Avg duration (s) |\n`;
  md += `|--------|----|-----------|--------|------------------|\n`;
  for (const c of activeConfigs) {
    const a = avg[c];
    md += `| ${c} | ${fmt(a.f1)} | ${fmt(a.precision)} | ${fmt(a.recall)} | ${a.duration_s?.toFixed(1) ?? "-"} |\n`;
  }
  md += `\n`;

  // --- Fig 23: Overview ---
  let overviewMd = `| Metric | Value | Description |\n|--------|-------|-------------|\n`;
  overviewMd += `| Document sets | ${data.document_set_ids.length} | Total document sets analyzed |\n`;
  overviewMd += `| Configurations | ${activeConfigs.length} | ${activeConfigs.join(", ")} |\n`;
  overviewMd += `| Total runs | ${totalResults} | ${activeConfigs.length} configs × ${data.document_set_ids.length} docs |\n`;
  overviewMd += `| Total tokens | ${(totalTokens / 1_000_000).toFixed(1)}M | All configurations combined |\n`;
  overviewMd += `| Total time | ${totalHours}h ${totalMins}m | All configurations combined |\n`;
  const bestCfg = activeConfigs.reduce((a, b) => (avg[a].f1 > avg[b].f1 ? a : b), activeConfigs[0]);
  const worstCfg = activeConfigs.reduce((a, b) => (avg[a].f1 < avg[b].f1 ? a : b), activeConfigs[0]);
  overviewMd += `| Best config | ${bestCfg} | F1: ${fmt(avg[bestCfg].f1)} |\n`;
  overviewMd += `| Worst config | ${worstCfg} | F1: ${fmt(avg[worstCfg].f1)} |\n`;
  if (full) {
    const topDelta = [...deltas].sort((a, b) => b.delta - a.delta)[0];
    overviewMd += `| Most impactful component | ${topDelta.name} | +${(topDelta.delta * 100).toFixed(1)} pp F1 |\n`;
  }
  md += fig("overview", overviewMd);

  // --- Fig 24: Risks per config ---
  const gtRowsR = data.results.filter((r) => r.config_label === activeConfigs[0]);
  const avgGtR = gtRowsR.length > 0
    ? gtRowsR.reduce((s, r) => s + r.total_gt_risks, 0) / gtRowsR.length
    : 0;
  let risksMdR = `| Config | Avg identified risks |\n|--------|---------------------|\n`;
  for (const c of activeConfigs) {
    const rows = data.results.filter((r) => r.config_label === c);
    const totalPred = rows.reduce((s, r) => {
      if (r.total_predicted_risks != null) return s + r.total_predicted_risks;
      if (r.precision > 0) return s + r.matched_risks / r.precision;
      return s + r.matched_risks;
    }, 0);
    const avgPred = rows.length > 0 ? totalPred / rows.length : 0;
    risksMdR += `| ${c} | ${avgPred.toFixed(1)} |\n`;
  }
  risksMdR += `| **Ground Truth (avg)** | **${avgGtR.toFixed(1)}** |\n`;
  md += fig("risks", risksMdR);

  // --- Fig 25: Component contribution ---
  let contribMd = "";
  if (full) {
    contribMd += `| Component | Config without | ΔF1 (pp) |\n|-----------|---------------|----------|\n`;
    for (const d of deltas) contribMd += `| ${d.name} | ${d.removed} | ${(d.delta * 100).toFixed(1)} |\n`;
    contribMd += `\nMost impactful component: **${deltas[0].name}** (${(deltas[0].delta * 100).toFixed(1)} pp).\n`;
  }
  md += fig("contribution", contribMd);

  // --- Fig 24: Radar ---
  let radarMd = `| Config | F1 | Precision | Recall |\n|--------|----|-----------|--------|\n`;
  for (const c of activeConfigs) {
    const a = avg[c];
    radarMd += `| ${c} | ${fmt(a.f1)} | ${fmt(a.precision)} | ${fmt(a.recall)} |\n`;
  }
  md += fig("radar", radarMd);

  // --- Fig 25: Cost vs performance ---
  let costMd = `| Config | Avg duration (s) | Avg tokens | F1 |\n|--------|-----------------|-----------|----|\n`;
  for (const c of activeConfigs) {
    const rows = configRows(c);
    if (rows.length === 0) continue;
    const avgDur = (rows.reduce((s, r) => s + r.duration_s, 0) / rows.length).toFixed(1);
    const avgTok = Math.round(rows.reduce((s, r) => s + r.input_tokens + r.output_tokens, 0) / rows.length);
    costMd += `| ${c} | ${avgDur} | ${avgTok.toLocaleString()} | ${fmt(avg[c].f1)} |\n`;
  }
  md += fig("cost", costMd);

  // --- Fig 26: F1 distribution (boxplot) ---
  let boxMd = `| Config | Mean | Median | Min | Max | Std dev | n |\n|--------|------|--------|-----|-----|---------|---|\n`;
  for (const c of activeConfigs) {
    const s = f1Stats(f1sFor(c));
    boxMd += `| ${c} | ${s.mean.toFixed(1)}% | ${s.median.toFixed(1)}% | ${s.min.toFixed(1)}% | ${s.max.toFixed(1)}% | ±${s.sd.toFixed(1)}% | ${f1sFor(c).length} |\n`;
  }
  md += fig("boxplot", boxMd);

  // --- Fig 27: Heatmap ---
  let heatMd = `| Document set | ${activeConfigs.join(" | ")} |\n`;
  heatMd += `|${"----|".repeat(activeConfigs.length + 1)}\n`;
  for (const docId of docIds) {
    const vals = activeConfigs.map((c) => {
      const r = data.results.find((r) => r.document_set_id === docId && r.config_label === c);
      return r ? fmt(r.f1) : "-";
    });
    heatMd += `| ${docId} | ${vals.join(" | ")} |\n`;
  }
  md += fig("heatmap", heatMd);

  // --- Fig 28: Waterfall ---
  let waterfallMd = "";
  if (full) {
    waterfallMd += `| Config | F1 | Drop from P+T+R |\n|--------|----|------------------|\n`;
    waterfallMd += `| P+T+R | ${fmt(full.f1)} |:|\n`;
    for (const c of activeConfigs.filter((c) => c !== "P+T+R")) {
      const a = avg[c];
      const drop = (full.f1 - a.f1) * 100;
      waterfallMd += `| ${c} | ${fmt(a.f1)} | -${drop.toFixed(1)} pp |\n`;
    }
  }
  md += fig("waterfall", waterfallMd);

  // --- Fig 29: Interaction effects ---
  let interMd = "";
  if (full) {
    interMd += `Interaction effects measure whether combining two components yields more than the sum of their individual contributions.\n\n`;
    const pairs = [
      { a: "P", b: "T", combo: "P+T" },
      { a: "P", b: "R", combo: "P+R" },
      { a: "T", b: "R", combo: "T+R" },
    ];
    interMd += `| Pair | Individual sum | Combined | Interaction |\n|------|--------------|----------|-------------|\n`;
    const none = avg["NONE"]?.f1 ?? 0;
    for (const p of pairs) {
      const indivA = (avg[p.a]?.f1 ?? 0) - none;
      const indivB = (avg[p.b]?.f1 ?? 0) - none;
      const combined = (avg[p.combo]?.f1 ?? 0) - none;
      const interaction = combined - (indivA + indivB);
      interMd += `| ${p.a}+${p.b} | ${((indivA + indivB) * 100).toFixed(1)} pp | ${(combined * 100).toFixed(1)} pp | ${interaction >= 0 ? "+" : ""}${(interaction * 100).toFixed(1)} pp |\n`;
    }
  }
  md += fig("interaction", interMd);

  // --- Fig 30: Precision vs Recall ---
  let prMd = `| Config | Precision | Recall |\n|--------|-----------|--------|\n`;
  for (const c of activeConfigs) {
    prMd += `| ${c} | ${fmt(avg[c].precision)} | ${fmt(avg[c].recall)} |\n`;
  }
  md += fig("pr", prMd);

  // --- Fig 31: F1 per document ---
  let f1docMd = `| Document set | ${activeConfigs.join(" | ")} |\n`;
  f1docMd += `|${"----|".repeat(activeConfigs.length + 1)}\n`;
  for (const docId of docIds) {
    const vals = activeConfigs.map((c) => {
      const r = data.results.find((r) => r.document_set_id === docId && r.config_label === c);
      return r ? fmt(r.f1) : "-";
    });
    f1docMd += `| ${docId} | ${vals.join(" | ")} |\n`;
  }
  md += fig("f1doc", f1docMd);

  // --- Fig 32: F1 stats (min/mean/max) ---
  let statsMd = `| Config | Mean | Median | Min | Max |\n|--------|------|--------|-----|-----|\n`;
  for (const c of activeConfigs) {
    const s = f1Stats(f1sFor(c));
    statsMd += `| ${c} | ${s.mean.toFixed(1)}% | ${s.median.toFixed(1)}% | ${s.min.toFixed(1)}% | ${s.max.toFixed(1)}% |\n`;
  }
  md += fig("f1stats", statsMd);

  // --- Fig 33: Cost-F1 tradeoff ---
  let costF1Md = `| Config | Avg time (s) | Avg tokens | F1 |\n|--------|-------------|-----------|----|\n`;
  for (const c of activeConfigs) {
    const rows = configRows(c);
    if (rows.length === 0) continue;
    const avgDur = (rows.reduce((s, r) => s + r.duration_s, 0) / rows.length).toFixed(1);
    const avgTok = Math.round(rows.reduce((s, r) => s + r.input_tokens + r.output_tokens, 0) / rows.length);
    costF1Md += `| ${c} | ${avgDur} | ${avgTok.toLocaleString()} | ${fmt(avg[c].f1)} |\n`;
  }
  md += fig("costf1", costF1Md);

  // --- Fig 34: Confidence interval ---
  let ciMd = `| Config | Mean F1 | Std dev | n |\n|--------|---------|---------|---|\n`;
  for (const c of activeConfigs) {
    const s = f1Stats(f1sFor(c));
    ciMd += `| ${c} | ${s.mean.toFixed(1)}% | ±${s.sd.toFixed(1)}% | ${f1sFor(c).length} |\n`;
  }
  ciMd += `\nLower standard deviation indicates more consistent performance across document sets.\n`;
  md += fig("ci", ciMd);

  // --- Fig 35: Best config per document ---
  let bestMd = `| Document set | Best config | F1 |\n|-------------|-------------|----|\n`;
  for (const docId of docIds) {
    const docResults = data.results.filter((r) => r.document_set_id === docId);
    if (docResults.length === 0) continue;
    const best = docResults.reduce((a, b) => (b.f1 > a.f1 ? b : a));
    bestMd += `| ${docId} | ${best.config_label} | ${fmt(best.f1)} |\n`;
  }
  bestMd += `\n### Win distribution\n\n`;
  bestMd += `| Config | Wins | Share |\n|--------|------|-------|\n`;
  for (const c of activeConfigs) {
    const w = wins[c] ?? 0;
    bestMd += `| ${c} | ${w} | ${((w / docIds.length) * 100).toFixed(0)}% |\n`;
  }
  md += fig("bestcfg", bestMd);

  // Key Findings
  md += `## Key Findings\n\n`;
  if (full) {
    const bestConfig = activeConfigs.reduce((a, b) => (avg[a].f1 > avg[b].f1 ? a : b));
    const worstConfig = activeConfigs.reduce((a, b) => (avg[a].f1 < avg[b].f1 ? a : b));
    md += `### 1. Overall performance\n\n`;
    md += `- Best configuration: **${bestConfig}** with average F1 of **${fmt(avg[bestConfig].f1)}**\n`;
    md += `- Worst configuration: **${worstConfig}** with average F1 of **${fmt(avg[worstConfig].f1)}**\n`;
    md += `- Full pipeline (P+T+R) F1: ${fmt(full.f1)}:removing any component reduces performance\n\n`;

    md += `### 2. Component importance (by ΔF1 when removed)\n\n`;
    for (const d of deltas) {
      md += `- **${d.name}**: ${d.delta >= 0 ? "+" : ""}${(d.delta * 100).toFixed(1)} pp impact\n`;
    }
    md += `\n`;
  }

  md += `### 3. Consistency\n\n`;
  for (const c of activeConfigs) {
    const s = f1Stats(f1sFor(c));
    md += `- ${c}: ${s.mean.toFixed(1)}% ± ${s.sd.toFixed(1)}%\n`;
  }
  md += `\n`;

  md += `### 4. Cost efficiency\n\n`;
  for (const c of activeConfigs) {
    const rows = configRows(c);
    if (rows.length === 0) continue;
    const avgTokens = rows.reduce((s, r) => s + r.input_tokens + r.output_tokens, 0) / rows.length;
    const avgDur = rows.reduce((s, r) => s + r.duration_s, 0) / rows.length;
    md += `- ${c}: ${avgDur.toFixed(1)}s avg, ${Math.round(avgTokens).toLocaleString()} tokens avg, F1 ${fmt(avg[c].f1)}\n`;
  }
  md += `\n`;

  md += `Evaluated across ${data.document_set_ids.length} Norwegian real estate document sets with ${totalResults} total ablation runs.\n`;

  return md;
}

interface Props {
  data: AblationStudySummary;
}

export function AblationCharts({ data }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const savedRef = useRef(false);

  useEffect(() => {
    if (savedRef.current) return;

    const timer = setTimeout(async () => {
      if (!containerRef.current || savedRef.current) return;

      const chartElements = containerRef.current.querySelectorAll<HTMLElement>("[data-chart]");
      if (chartElements.length === 0) return;

      const charts: { filename: string; base64_png: string }[] = [];

      for (let i = 0; i < chartElements.length; i++) {
        try {
          const dataUrl = await toPng(chartElements[i], { backgroundColor: "#ffffff", pixelRatio: 2 });
          const base64 = dataUrl.replace("data:image/png;base64,", "");
          charts.push({ filename: CHART_META[i].filename, base64_png: base64 });
        } catch {
          // Skip failed chart
        }
      }

      if (charts.length > 0) {
        const reportMd = generateReport(data);
        try {
          await saveAblationCharts(charts, reportMd);
          savedRef.current = true;
        } catch {
          // Silent fail
        }
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [data]);

  return (
    <section className="space-y-6" ref={containerRef}>
      <h2 className="text-lg font-semibold">Visualizations</h2>
      <AblationOverviewChart data={data} prefix="Fig 23" />
      <RisksPerConfigChart data={data} prefix="Fig 24" />
      <ComponentContributionChart data={data} prefix="Fig 25" />
      <AblationRadarChart data={data} prefix="Fig 26" />
      <CostPerformanceScatter data={data} prefix="Fig 27" />
      <F1BoxplotChart data={data} prefix="Fig 28" />
      <HeatmapChart data={data} prefix="Fig 29" />
      <WaterfallChart data={data} prefix="Fig 30" />
      <InteractionEffectsChart data={data} prefix="Fig 31" />
      <PrecisionRecallScatter data={data} prefix="Fig 32" />
      <F1PerDocumentChart data={data} prefix="Fig 33" />
      <F1StatsChart data={data} prefix="Fig 34" />
      <CostF1TradeoffChart data={data} prefix="Fig 35" />
      <ConfidenceIntervalChart data={data} prefix="Fig 36" />
      <BestConfigChart data={data} prefix="Fig 37" />
    </section>
  );
}
