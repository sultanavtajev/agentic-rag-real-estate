"use client";

import { ChartCard, Note } from "../chart-helpers";
import type { CategoryStats } from "@/lib/types";

interface Props {
  data: CategoryStats[];
  prefix?: string;
}

const COLUMNS: { key: keyof CategoryStats; label: string }[] = [
  { key: "standard_rag_count", label: "Standard RAG" },
  { key: "agentic_rag_count", label: "Agentic RAG" },
  { key: "ground_truth_count", label: "Ground Truth" },
];

function cellColor(value: number, max: number): string {
  if (max === 0) return "#f8fafc";
  const t = value / max;
  const r = Math.round(255 * (1 - t) + 37 * t);
  const g = Math.round(255 * (1 - t) + 99 * t);
  const b = Math.round(255 * (1 - t) + 235 * t);
  return `rgb(${r},${g},${b})`;
}

function textColor(value: number, max: number): string {
  return max > 0 && value / max > 0.55 ? "#fff" : "#111";
}

export function CategoryHeatmapChart({ data, prefix }: Props) {
  const sorted = [...data].sort((a, b) => b.total - a.total);
  const maxVal = Math.max(
    ...sorted.flatMap((d) => COLUMNS.map((c) => d[c.key] as number)),
    1
  );

  const topCategory = sorted[0]?.category ?? "N/A";
  const densest = sorted.length > 0
    ? COLUMNS.reduce((best, col) => {
        const sum = sorted.reduce((s, d) => s + (d[col.key] as number), 0);
        return sum > best.sum ? { label: col.label, sum } : best;
      }, { label: "", sum: -1 })
    : null;

  return (
    <ChartCard title="Risk category count heatmap" prefix={prefix}>
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", width: "100%", fontSize: 12 }}>
          <thead>
            <tr>
              <th style={{ padding: "6px 8px", textAlign: "left", borderBottom: "2px solid #e2e8f0" }}>
                Category
              </th>
              {COLUMNS.map((c) => (
                <th key={c.key} style={{ padding: "6px 8px", textAlign: "center", borderBottom: "2px solid #e2e8f0", minWidth: 90 }}>
                  {c.label}
                </th>
              ))}
              <th style={{ padding: "6px 8px", textAlign: "center", borderBottom: "2px solid #e2e8f0", minWidth: 56 }}>
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr key={row.category}>
                <td style={{ padding: "4px 8px", fontSize: 11, whiteSpace: "nowrap", borderBottom: "1px solid #f1f5f9" }}>
                  {row.category}
                </td>
                {COLUMNS.map((col) => {
                  const val = row[col.key] as number;
                  return (
                    <td
                      key={col.key}
                      style={{
                        padding: "4px 6px",
                        textAlign: "center",
                        backgroundColor: cellColor(val, maxVal),
                        color: textColor(val, maxVal),
                        fontWeight: 600,
                        fontSize: 11,
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      {val}
                    </td>
                  );
                })}
                <td style={{ padding: "4px 6px", textAlign: "center", fontWeight: 700, fontSize: 11, borderBottom: "1px solid #f1f5f9" }}>
                  {row.total}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Note>
        <p>
          Dense overview of risk counts across all systems and ground truth.
          Color intensity scales from white (0) to blue ({maxVal}).
          Largest category: {topCategory}.
          {densest && ` Highest total column: ${densest.label} (${densest.sum}).`}
        </p>
      </Note>
    </ChartCard>
  );
}
