"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DocumentSetForCategorization } from "@/lib/types";

type StatusFilter = "all" | "categorized" | "uncategorized";

interface Props {
  documentSets: DocumentSetForCategorization[];
  selectedIds: Set<string>;
  onSelectionChange: (ids: Set<string>) => void;
  onCategorize: (ids: string[]) => void;
  loading: boolean;
}

function statusOf(d: DocumentSetForCategorization): StatusFilter {
  if (d.categorized_count >= d.total_risks && d.total_risks > 0) return "categorized";
  return "uncategorized";
}

export function CategorizeDocumentList({
  documentSets,
  selectedIds,
  onSelectionChange,
  onCategorize,
  loading,
}: Props) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const filtered = useMemo(
    () =>
      documentSets.filter(
        (d) => statusFilter === "all" || statusOf(d) === statusFilter,
      ),
    [documentSets, statusFilter],
  );

  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onSelectionChange(next);
  };

  const toggleAll = () => {
    if (selectedIds.size === filtered.length) {
      onSelectionChange(new Set());
    } else {
      onSelectionChange(new Set(filtered.map((d) => d.document_set_id)));
    }
  };

  const uncategorizedIds = documentSets
    .filter((d) => statusOf(d) === "uncategorized")
    .map((d) => d.document_set_id);

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Document Sets</h2>

      <div className="flex flex-wrap items-center gap-2">
        {(["all", "uncategorized", "categorized"] as const).map((f) => (
          <Badge
            key={f}
            variant={statusFilter === f ? "default" : "outline"}
            className="cursor-pointer"
            onClick={() => setStatusFilter(f)}
          >
            {f === "all" ? "All" : f === "uncategorized" ? "Uncategorized" : "Categorized"}
          </Badge>
        ))}
      </div>

      <div className="rounded-md border overflow-x-auto max-h-[420px] overflow-y-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-background z-10">
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  checked={filtered.length > 0 && selectedIds.size === filtered.length}
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>Document Set</TableHead>
              <TableHead className="text-right">Std RAG</TableHead>
              <TableHead className="text-right">Agentic</TableHead>
              <TableHead className="text-right">GT</TableHead>
              <TableHead className="text-right">Total</TableHead>
              <TableHead className="text-right">Categorized</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((d) => (
              <TableRow key={d.document_set_id}>
                <TableCell>
                  <Checkbox
                    checked={selectedIds.has(d.document_set_id)}
                    onCheckedChange={() => toggleOne(d.document_set_id)}
                  />
                </TableCell>
                <TableCell className="font-medium">
                  {d.document_set_id}
                </TableCell>
                <TableCell className="text-right">
                  {d.standard_rag_risks}
                </TableCell>
                <TableCell className="text-right">
                  {d.agentic_rag_risks}
                </TableCell>
                <TableCell className="text-right">
                  {d.ground_truth_risks}
                </TableCell>
                <TableCell className="text-right font-semibold">
                  {d.total_risks}
                </TableCell>
                <TableCell className="text-right">
                  {d.categorized_count}/{d.total_risks}
                </TableCell>
              </TableRow>
            ))}
            {filtered.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-muted-foreground py-6">
                  No document sets found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => onCategorize([...selectedIds])}
          disabled={loading || selectedIds.size === 0}
        >
          Categorize selected ({selectedIds.size})
        </Button>
        <Button
          variant="outline"
          onClick={() => onCategorize(uncategorizedIds)}
          disabled={loading || uncategorizedIds.length === 0}
        >
          Categorize all uncategorized ({uncategorizedIds.length})
        </Button>
      </div>
    </section>
  );
}
