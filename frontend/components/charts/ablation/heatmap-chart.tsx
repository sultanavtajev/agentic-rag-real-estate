"use client";

import { ChartCard, Note } from "../chart-helpers";
import type { AblationStudySummary } from "@/lib/types";

const CONFIG_ORDER = ["P+T+R", "T+R", "P+R", "P+T", "P", "T", "R", "NONE"];

function f1Color(f1: number): string {
  const pct = Math.max(0, Math.min(1, f1));
  const r = Math.round(239 * (1 - pct) + 34 * pct);
  const g = Math.round(68 * (1 - pct) + 197 * pct);
  const b = Math.round(68 * (1 - pct) + 94 * pct);
  return `rgb(${r},${g},${b})`;
}

function textColor(f1: number): string {
  return f1 > 0.5 ? "#fff" : "#111";
}

export function HeatmapChart({ data, prefix }: { data: AblationStudySummary; prefix?: string }) {
  const docIds = [...data.document_set_ids].sort();
  const lookup = new Map<string, number>();
  for (const r of data.results) {
    lookup.set(`${r.document_set_id}|${r.config_label}`, r.f1);
  }

  return (
    <ChartCard title="F1 heatmap per document set and configuration" prefix={prefix}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12 }}>
          <thead>
            <tr>
              <th style={{ padding: "6px 8px", textAlign: "left", borderBottom: "2px solid #e2e8f0" }}>
                Document
              </th>
              {CONFIG_ORDER.map((c) => (
                <th key={c} style={{ padding: "6px 8px", textAlign: "center", borderBottom: "2px solid #e2e8f0", minWidth: 56 }}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {docIds.map((docId) => (
              <tr key={docId}>
                <td style={{ padding: "4px 8px", fontFamily: "monospace", fontSize: 11, whiteSpace: "nowrap", borderBottom: "1px solid #f1f5f9" }}>
                  {docId}
                </td>
                {CONFIG_ORDER.map((cfg) => {
                  const f1 = lookup.get(`${docId}|${cfg}`);
                  const val = f1 ?? 0;
                  return (
                    <td
                      key={cfg}
                      style={{
                        padding: "4px 6px",
                        textAlign: "center",
                        backgroundColor: f1 != null ? f1Color(val) : "#f1f5f9",
                        color: f1 != null ? textColor(val) : "#94a3b8",
                        fontWeight: 600,
                        fontSize: 11,
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      {f1 != null ? `${(val * 100).toFixed(0)}%` : "—"}
                    </td>
                  );
                })}
              </tr>
            ))}
            <tr style={{ fontWeight: 700, borderTop: "2px solid #e2e8f0" }}>
              <td style={{ padding: "6px 8px" }}>Avg</td>
              {CONFIG_ORDER.map((cfg) => {
                const avg = data.averages[cfg]?.f1 ?? 0;
                return (
                  <td
                    key={cfg}
                    style={{
                      padding: "4px 6px",
                      textAlign: "center",
                      backgroundColor: f1Color(avg),
                      color: textColor(avg),
                      fontSize: 11,
                    }}
                  >
                    {(avg * 100).toFixed(1)}%
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>
      <Note>
        <p>
          Green = high F1, red = low F1. {(() => {
            const avg = data.averages;
            const cfgs = Object.keys(avg);
            const best = cfgs.reduce((a, b) => (avg[a].f1 > avg[b].f1 ? a : b));
            const worst = cfgs.reduce((a, b) => (avg[a].f1 < avg[b].f1 ? a : b));
            // Find hardest document
            const docScores = docIds.map((d) => {
              const vals = data.results.filter((r) => r.document_set_id === d).map((r) => r.f1);
              return { d, avg: vals.length ? vals.reduce((s, v) => s + v, 0) / vals.length : 0 };
            });
            const hardest = docScores.reduce((a, b) => (a.avg < b.avg ? a : b));
            return `Best column: ${best} (avg ${(avg[best].f1 * 100).toFixed(1)}%). Worst: ${worst} (${(avg[worst].f1 * 100).toFixed(1)}%). Hardest document: ${hardest.d} (avg ${(hardest.avg * 100).toFixed(1)}%).`;
          })()}
        </p>
      </Note>
    </ChartCard>
  );
}
