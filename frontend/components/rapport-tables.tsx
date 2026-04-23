"use client";

import type { ReactElement } from "react";
import { RQMappingTable } from "@/components/tables/rq-mapping-table";
import { ArchitectureFigure } from "@/components/figures/architecture-figure";
import { F1PerCategoryFigure } from "@/components/figures/f1-per-category-figure";
import type { CategoryF1Stats } from "@/lib/types";

interface TableDef {
  fig: number;
  render: (prefix: string) => ReactElement;
}

// Fig 47 is reserved for the User Interface screenshot in section 5.5.
const TABLES: TableDef[] = [
  { fig: 45, render: (p) => <RQMappingTable key={p} prefix={p} /> },
  { fig: 46, render: (p) => <ArchitectureFigure key={p} prefix={p} /> },
  { fig: 48, render: (p) => <F1PerCategoryFigure key={p} prefix={p} /> },
];

export const FIRST_TABLE_FIG = 45;

export function RapportTables() {
  return (
    <div className="grid gap-6">
      {TABLES.map((table) => {
        const prefix = `Fig ${table.fig}`;
        return table.render(prefix);
      })}
    </div>
  );
}

const CHARTS_PATH =
  "docs/0.6_prosjekt_rapport/4.dokumentasjon/resultater/visualiseringer";

function figImg(filename: string, label: string): string {
  return [
    `![${label}](${filename})`,
    "",
    `> Path: \`${CHARTS_PATH}/${filename}\``,
    "",
  ].join("\n");
}

export function generateTablesReport(f1Data?: CategoryF1Stats[]): string {
  const lines: string[] = [
    "# Report Tables",
    "",
    "Generated tables for the thesis report.",
    "",
  ];

  lines.push("## Fig 45. Table 3.1: RQ to methodology mapping");
  lines.push("");
  lines.push(
    figImg(
      "Fig_45_Table_31_RQ_to_methodology_mapping.png",
      "Fig 45",
    ),
  );
  lines.push(
    "| RQ | Research Question | Method | Data Source | Metrics |",
  );
  lines.push("|----|--------------------|--------|-------------|---------|");
  lines.push(
    "| RQ | To what extent does agentic RAG improve risk identification vs. standard RAG? | Comparison of two systems on identical document sets | 204 Norwegian sales prospectuses, auto-generated GT | Precision, Recall, F1, Adjusted F1 |",
  );
  lines.push(
    "| RQ1a | Which agentic components contribute most to improved performance? | Ablation study, 2^3 factorial design (8 configurations) | Same 204 document sets, all configs evaluated against GT | Delta-F1 per component, pair interactions |",
  );
  lines.push(
    "| RQ1b | For which risk categories is the improvement greatest? | LLM-based risk categorization | 29 categories, all identified risks from both systems | F1 per risk category per system |",
  );
  lines.push("");

  lines.push("## Fig 46. Overall system architecture");
  lines.push("");
  lines.push(figImg("Fig_46_Overall_system_architecture.png", "Fig 46"));
  lines.push(
    "Three-layer architecture (frontend, backend, data) with API proxy and SSE streaming.",
  );
  lines.push("");
  lines.push(
    "| Layer | Components |",
  );
  lines.push("|-------|------------|");
  lines.push(
    "| Frontend (Next.js 16) | 8 pages, api-client.ts, SSE listeners |",
  );
  lines.push(
    "| API Proxy | `/api/proxy/[...path]/route.ts` (HTTP REST + SSE, maxDuration=300s) |",
  );
  lines.push(
    "| Backend (FastAPI) | 5 routers: documents, analysis, experiments, ablation, categorization |",
  );
  lines.push(
    "| Business Logic (src/) | document_processing, retrieval, standard_rag, agentic_rag (Plan/Tool/Reflect), evaluation, ground_truth, tracing |",
  );
  lines.push(
    "| Data Layer | Filesystem (data/) + ChromaDB (1 collection per document set) |",
  );
  lines.push(
    "| External APIs | Anthropic Claude (LLM) + Voyage AI (embeddings) |",
  );
  lines.push("");
  lines.push(
    "See `architecture_overview.md` in the same folder for the full description.",
  );
  lines.push("");

  lines.push("## Fig 48. F1 score per risk category");
  lines.push("");
  lines.push(figImg("Fig_48_F1_per_category.png", "Fig 48"));
  lines.push(
    "Precision, recall and F1 computed per category for Standard RAG and Agentic RAG across 204 document evaluations. Matched pairs count as TP for the ground-truth category, unmatched predictions as FP, unmatched GT risks as FN. Support denotes the number of ground-truth risks in the category (TP + FN); categories with support below 10 are excluded from the chart to avoid statistical noise from rare categories.",
  );
  lines.push("");

  if (f1Data && f1Data.length) {
    const sorted = [...f1Data].sort((a, b) => b.support - a.support);
    lines.push(
      "| Category | Support | Std F1 | Std P | Std R | Agentic F1 | Agentic P | Agentic R |",
    );
    lines.push(
      "|----------|--------:|-------:|------:|------:|-----------:|----------:|----------:|",
    );
    for (const d of sorted) {
      const pct = (v: number) => `${(v * 100).toFixed(1)}%`;
      lines.push(
        `| ${d.category} | ${d.support} | ${pct(d.standard_f1)} | ${pct(d.standard_precision)} | ${pct(d.standard_recall)} | ${pct(d.agentic_f1)} | ${pct(d.agentic_precision)} | ${pct(d.agentic_recall)} |`,
      );
    }
    lines.push("");

    const eligible = sorted.filter((d) => d.support >= 10);
    const stdMacro =
      eligible.reduce((s, d) => s + d.standard_f1, 0) / (eligible.length || 1);
    const agMacro =
      eligible.reduce((s, d) => s + d.agentic_f1, 0) / (eligible.length || 1);
    const byAg = [...eligible].sort((a, b) => b.agentic_f1 - a.agentic_f1);
    const top = byAg.slice(0, 3);
    const bottom = byAg.slice(-3).reverse();
    const fmt = (d: CategoryF1Stats) =>
      `${d.category} (${(d.agentic_f1 * 100).toFixed(1)}%)`;

    const largestGap = [...eligible]
      .map((d) => ({ d, gap: d.agentic_f1 - d.standard_f1 }))
      .sort((a, b) => b.gap - a.gap)[0];

    lines.push(
      `Macro-F1 across ${eligible.length} categories (support \u2265 10): Standard RAG ${(stdMacro * 100).toFixed(1)}%, Agentic RAG ${(agMacro * 100).toFixed(1)}%.`,
    );
    lines.push("");
    lines.push(`Top 3 agentic F1: ${top.map(fmt).join(", ")}.`);
    lines.push(`Bottom 3 agentic F1: ${bottom.map(fmt).join(", ")}.`);
    if (largestGap) {
      lines.push(
        `Largest improvement Standard \u2192 Agentic: ${largestGap.d.category} (+${(largestGap.gap * 100).toFixed(1)} percentage points).`,
      );
    }
    lines.push("");
  }

  return lines.join("\n");
}
