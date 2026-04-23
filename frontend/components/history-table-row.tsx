"use client";

import { Fragment } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { HistoryDetail } from "@/components/history-detail";
import { Trash2, ChevronRight, ChevronDown } from "lucide-react";
import type { EvaluationHistoryItem } from "@/lib/types";

const SYS_LABELS: Record<string, string> = {
  standard_rag: "Standard RAG",
  ground_truth: "Ground Truth",
};

function sysLabel(t: string): string {
  return SYS_LABELS[t] ?? t.replace(/_/g, " ");
}

interface HistoryTableRowProps {
  item: EvaluationHistoryItem;
  isExpanded: boolean;
  isEven: boolean;
  onExpand: (recordId: string) => void;
  onDeleteClick: (recordId: string) => void;
}

function formatDate(timestamp: string): string {
  const d = new Date(timestamp);
  return d.toLocaleDateString("en-GB", { day: "2-digit", month: "2-digit", year: "numeric" })
    + " " + d.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

function riskCount(item: EvaluationHistoryItem): string {
  if (item.risk_summaries) {
    return item.risk_summaries
      .map((s) => `${sysLabel(s.system_type)}: ${s.total_risks}`)
      .join(" | ");
  }
  if (item.matched_risks != null) return `${item.matched_risks} matches`;
  return "-";
}

function f1Display(item: EvaluationHistoryItem): string {
  if (item.f1_scores) {
    return Object.entries(item.f1_scores)
      .map(([sys, score]) => `${sysLabel(sys)}: ${(score * 100).toFixed(0)}%`)
      .join(" | ");
  }
  if (item.overall_f1 != null) return `${(item.overall_f1 * 100).toFixed(0)}%`;
  return "-";
}

export function HistoryTableRow({
  item,
  isExpanded,
  onExpand,
  onDeleteClick,
}: HistoryTableRowProps) {
  const Chevron = isExpanded ? ChevronDown : ChevronRight;
  const systems = item.system_types?.map(sysLabel).join(", ") ?? sysLabel(item.system_type ?? "");

  return (
    <Fragment>
      <div
        className="cursor-pointer rounded-lg border bg-card p-4 transition-colors hover:bg-muted/30"
        onClick={() => onExpand(item.record_id)}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-2 min-w-0 flex-1">
            <Chevron className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground" />
            <div className="min-w-0 flex-1 space-y-2">
              {/* Rad 1: dokumentsett + dato + systemer + GT badge */}
              <div className="flex flex-wrap items-center gap-2">
                {item.document_set_id && (
                  <Badge variant="outline" className="text-xs font-mono">{item.document_set_id}</Badge>
                )}
                <span className="text-xs text-muted-foreground">{formatDate(item.timestamp)}</span>
                <span className="text-sm font-medium">{systems}</span>
                {item.has_ground_truth && (
                  <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">GT</Badge>
                )}
              </div>

              {/* Rad 2: risikoer + F1 */}
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                <span>Risks: {riskCount(item)}</span>
                {f1Display(item) !== "-" && <span>F1: {f1Display(item)}</span>}
              </div>
            </div>
          </div>

          <Button
            size="sm"
            variant="ghost"
            className="h-8 w-8 p-0 shrink-0 text-muted-foreground hover:text-red-600"
            onClick={(e) => {
              e.stopPropagation();
              onDeleteClick(item.record_id);
            }}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {isExpanded && (
        <div className="rounded-lg border bg-muted/5 p-4" style={{ overflowWrap: "anywhere" }}>
          <HistoryDetail
            recordId={item.record_id}
            onClose={() => onExpand(item.record_id)}
          />
        </div>
      )}
    </Fragment>
  );
}
