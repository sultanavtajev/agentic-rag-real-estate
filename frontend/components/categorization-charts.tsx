"use client";

import { useEffect, useRef } from "react";
import { toPng } from "html-to-image";
import { CategoryPrevalenceChart } from "./charts/category/category-prevalence-chart";
import { CategorySystemComparisonChart } from "./charts/category/category-system-comparison-chart";
import { CategoryRadarChart } from "./charts/category/category-radar-chart";
import { CategoryConfidenceChart } from "./charts/category/category-confidence-chart";
import { CategoryDetectionGapChart } from "./charts/category/category-detection-gap-chart";
import { CategoryParetoChart } from "./charts/category/category-pareto-chart";
import { CategoryHeatmapChart } from "./charts/category/category-heatmap-chart";
import { saveAblationCharts } from "@/lib/api-client";
import type { CategoryConfidenceStats, CategoryStats } from "@/lib/types";

const CHART_META = [
  { id: "prevalence", filename: "Fig_38_Category_prevalence.png", title: "Risk category prevalence" },
  { id: "comparison", filename: "Fig_39_Category_system_comparison.png", title: "System comparison per category" },
  { id: "radar", filename: "Fig_40_Category_radar.png", title: "System detection profile (radar)" },
  { id: "confidence", filename: "Fig_41_Category_confidence.png", title: "Categorization confidence" },
  { id: "gap", filename: "Fig_42_Category_detection_gap.png", title: "Detection gap vs. ground truth" },
  { id: "pareto", filename: "Fig_43_Category_pareto.png", title: "Pareto distribution" },
  { id: "heatmap", filename: "Fig_44_Category_heatmap.png", title: "System × category heatmap" },
] as const;

function fmt(v: number): string {
  return `${(v * 100).toFixed(1)}%`;
}

function figHeader(m: typeof CHART_META[number], basePath: string): string {
  const n = m.filename.match(/Fig_(\d+)/)?.[1] ?? "?";
  return `\n## Fig ${n}. ${m.title}\n\n![Fig ${n}](${m.filename})\n\n> Path: \`${basePath}/${m.filename}\`\n\n`;
}

function generateReport(categories: CategoryStats[], confidence: CategoryConfidenceStats[]): string {
  const bp = "docs/0.6_prosjekt_rapport/4.dokumentasjon/resultater/visualiseringer";
  const totalRisks = categories.reduce((s, c) => s + c.total, 0);
  const totalStd = categories.reduce((s, c) => s + c.standard_rag_count, 0);
  const totalAg = categories.reduce((s, c) => s + c.agentic_rag_count, 0);
  const totalGt = categories.reduce((s, c) => s + c.ground_truth_count, 0);
  const sorted = [...categories].sort((a, b) => b.total - a.total);

  let md = `# Category Results Report\n\nGenerated from ${categories.length} categories, ${totalRisks.toLocaleString()} total categorized risks.\n\n`;

  // --- Fig 38: Prevalence ---
  md += figHeader(CHART_META[0], bp);
  md += `| Category | Standard RAG | Agentic RAG | Ground Truth | Total |\n|----------|-------------|-------------|-------------|-------|\n`;
  for (const c of sorted) {
    md += `| ${c.category} | ${c.standard_rag_count} | ${c.agentic_rag_count} | ${c.ground_truth_count} | ${c.total} |\n`;
  }
  const top3 = sorted.slice(0, 3);
  const top3pct = ((top3.reduce((s, c) => s + c.total, 0) / totalRisks) * 100).toFixed(1);
  md += `\nThe top 3 categories — ${top3.map((c) => c.category).join(", ")} — account for ${top3pct}% of all categorized risks. Total risks per system: Standard RAG ${totalStd}, Agentic RAG ${totalAg}, Ground Truth ${totalGt}.\n`;

  // --- Fig 39: System comparison ---
  md += figHeader(CHART_META[1], bp);
  const top15 = sorted.slice(0, 15);
  md += `| Category | Standard RAG | Agentic RAG | Ground Truth | Max diff |\n|----------|-------------|-------------|-------------|----------|\n`;
  for (const c of top15) {
    const vals = [c.standard_rag_count, c.agentic_rag_count, c.ground_truth_count];
    const diff = Math.max(...vals) - Math.min(...vals);
    md += `| ${c.category} | ${c.standard_rag_count} | ${c.agentic_rag_count} | ${c.ground_truth_count} | ${diff} |\n`;
  }
  const maxDiffCat = top15.reduce((best, c) => {
    const d = Math.max(c.standard_rag_count, c.agentic_rag_count, c.ground_truth_count) - Math.min(c.standard_rag_count, c.agentic_rag_count, c.ground_truth_count);
    return d > best.d ? { cat: c.category, d } : best;
  }, { cat: "", d: 0 });
  md += `\nThe category with the largest inter-system difference is **${maxDiffCat.cat}** (${maxDiffCat.d} risk difference between highest and lowest system).\n`;

  // --- Fig 40: Radar ---
  md += figHeader(CHART_META[2], bp);
  const top10 = sorted.slice(0, 10);
  md += `| Category | Std RAG % | Agentic % | GT % |\n|----------|-----------|-----------|------|\n`;
  for (const c of top10) {
    md += `| ${c.category} | ${totalStd ? fmt(c.standard_rag_count / totalStd) : "-"} | ${totalAg ? fmt(c.agentic_rag_count / totalAg) : "-"} | ${totalGt ? fmt(c.ground_truth_count / totalGt) : "-"} |\n`;
  }
  md += `\nNormalized proportions show each system's relative emphasis per category. Differences in polygon shape indicate systematic detection biases.\n`;

  // --- Fig 41: Confidence ---
  md += figHeader(CHART_META[3], bp);
  if (confidence.length > 0) {
    const confSorted = [...confidence].sort((a, b) => b.mean_confidence - a.mean_confidence);
    md += `| Category | Mean | Min | Max | Count |\n|----------|------|-----|-----|-------|\n`;
    for (const c of confSorted) {
      md += `| ${c.category} | ${fmt(c.mean_confidence)} | ${fmt(c.min_confidence)} | ${fmt(c.max_confidence)} | ${c.count} |\n`;
    }
    const avgConf = confidence.reduce((s, c) => s + c.mean_confidence, 0) / confidence.length;
    const lowest = confSorted[confSorted.length - 1];
    const highest = confSorted[0];
    md += `\nOverall average confidence: ${fmt(avgConf)}. Highest: **${highest.category}** (${fmt(highest.mean_confidence)}). Lowest: **${lowest.category}** (${fmt(lowest.mean_confidence)}). Low confidence may indicate ambiguous or overlapping category definitions.\n`;
  } else {
    md += `No confidence data available.\n`;
  }

  // --- Fig 42: Detection gap ---
  md += figHeader(CHART_META[4], bp);
  md += `| Category | Std RAG Δ | Agentic Δ |\n|----------|-----------|----------|\n`;
  const gapData = sorted.map((c) => ({
    cat: c.category,
    stdDelta: c.standard_rag_count - c.ground_truth_count,
    agDelta: c.agentic_rag_count - c.ground_truth_count,
  })).sort((a, b) => Math.max(Math.abs(b.stdDelta), Math.abs(b.agDelta)) - Math.max(Math.abs(a.stdDelta), Math.abs(a.agDelta)));
  for (const g of gapData) {
    md += `| ${g.cat} | ${g.stdDelta > 0 ? "+" : ""}${g.stdDelta} | ${g.agDelta > 0 ? "+" : ""}${g.agDelta} |\n`;
  }
  const worstOver = gapData.reduce((best, g) => Math.max(g.stdDelta, g.agDelta) > best.v ? { cat: g.cat, v: Math.max(g.stdDelta, g.agDelta) } : best, { cat: "", v: 0 });
  const worstUnder = gapData.reduce((best, g) => Math.min(g.stdDelta, g.agDelta) < best.v ? { cat: g.cat, v: Math.min(g.stdDelta, g.agDelta) } : best, { cat: "", v: 0 });
  md += `\nPositive Δ = over-detection (more than GT), negative = under-detection (fewer than GT). Most over-detected: **${worstOver.cat}** (+${worstOver.v}). Most under-detected: **${worstUnder.cat}** (${worstUnder.v}).\n`;

  // --- Fig 43: Pareto ---
  md += figHeader(CHART_META[5], bp);
  let cum = 0;
  md += `| # | Category | Count | Cumulative % |\n|---|----------|-------|-------------|\n`;
  for (let i = 0; i < sorted.length; i++) {
    cum += sorted[i].total;
    const pct = totalRisks > 0 ? ((cum / totalRisks) * 100).toFixed(1) : "0";
    md += `| ${i + 1} | ${sorted[i].category} | ${sorted[i].total} | ${pct}% |\n`;
  }
  cum = 0;
  let thresh80 = sorted.length;
  for (let i = 0; i < sorted.length; i++) {
    cum += sorted[i].total;
    if (cum / totalRisks >= 0.8) { thresh80 = i + 1; break; }
  }
  md += `\nThe top ${thresh80} categories (of ${sorted.length}) account for 80%+ of all risks, showing a concentrated distribution.\n`;

  // --- Fig 44: Heatmap ---
  md += figHeader(CHART_META[6], bp);
  md += `| Category | Standard RAG | Agentic RAG | Ground Truth |\n|----------|-------------|-------------|-------------|\n`;
  for (const c of sorted) {
    md += `| ${c.category} | ${c.standard_rag_count} | ${c.agentic_rag_count} | ${c.ground_truth_count} |\n`;
  }
  md += `\nDark cells indicate high risk concentrations. The heatmap provides a dense overview for identifying system-specific patterns across all ${categories.length} categories.\n`;

  return md;
}

interface Props {
  categories: CategoryStats[];
  confidence: CategoryConfidenceStats[];
}

export function CategorizationCharts({ categories, confidence }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const savedRef = useRef(false);

  useEffect(() => {
    if (savedRef.current || categories.length === 0) return;

    const timer = setTimeout(async () => {
      if (!containerRef.current || savedRef.current) return;

      const chartElements = containerRef.current.querySelectorAll<HTMLElement>("[data-chart]");
      if (chartElements.length === 0) return;

      const charts: { filename: string; base64_png: string }[] = [];
      for (let i = 0; i < chartElements.length; i++) {
        try {
          const dataUrl = await toPng(chartElements[i], { backgroundColor: "#ffffff", pixelRatio: 2 });
          charts.push({
            filename: CHART_META[i].filename,
            base64_png: dataUrl.replace("data:image/png;base64,", ""),
          });
        } catch {
          // Skip failed chart
        }
      }

      if (charts.length > 0) {
        try {
          const reportMd = generateReport(categories, confidence);
          await saveAblationCharts(charts, reportMd, "category_results_report.md");
          savedRef.current = true;
        } catch {
          // Silent fail
        }
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [categories, confidence]);

  if (categories.length === 0) return null;

  return (
    <section className="space-y-6" ref={containerRef}>
      <h2 className="text-lg font-semibold">Visualizations</h2>
      <CategoryPrevalenceChart data={categories} prefix="Fig 38" />
      <CategorySystemComparisonChart data={categories} prefix="Fig 39" />
      <CategoryRadarChart data={categories} prefix="Fig 40" />
      {confidence.length > 0 && <CategoryConfidenceChart data={confidence} prefix="Fig 41" />}
      <CategoryDetectionGapChart data={categories} prefix="Fig 42" />
      <CategoryParetoChart data={categories} prefix="Fig 43" />
      <CategoryHeatmapChart data={categories} prefix="Fig 44" />
    </section>
  );
}
