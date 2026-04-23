"use client";

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
import type { AblationDocumentSet } from "@/lib/types";

interface Props {
  documentSets: AblationDocumentSet[];
  selectedIds: Set<string>;
  onSelectionChange: (ids: Set<string>) => void;
  onStart: () => void;
  loading: boolean;
}

export function AblationDocumentSelector({
  documentSets,
  selectedIds,
  onSelectionChange,
  onStart,
  loading,
}: Props) {
  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    onSelectionChange(next);
  };

  const toggleAll = () => {
    if (selectedIds.size === documentSets.length && documentSets.length > 0) {
      onSelectionChange(new Set());
    } else {
      onSelectionChange(new Set(documentSets.map((d) => d.document_set_id)));
    }
  };

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Select document sets</h2>

      <div className="rounded-md border overflow-x-auto max-h-[440px] overflow-y-auto">
        <Table>
          <TableHeader className="sticky top-0 bg-background z-10">
            <TableRow>
              <TableHead className="w-10">
                <Checkbox
                  checked={
                    documentSets.length > 0 &&
                    selectedIds.size === documentSets.length
                  }
                  onCheckedChange={toggleAll}
                />
              </TableHead>
              <TableHead>Document set ID</TableHead>
              <TableHead>Ground Truth</TableHead>
              <TableHead>Full evaluation</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentSets.map((d) => (
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
                <TableCell>
                  <Badge variant={d.has_ground_truth ? "default" : "outline"}>
                    {d.has_ground_truth ? "Yes" : "No"}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={d.has_full_eval ? "default" : "outline"}>
                    {d.has_full_eval ? "Ja" : "Nei"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {documentSets.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="text-center text-muted-foreground py-6"
                >
                  No document sets found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <Button
        onClick={onStart}
        disabled={loading || selectedIds.size === 0}
      >
        {loading
          ? "Running..."
          : `Start ablation study (${selectedIds.size} selected)`}
      </Button>
    </section>
  );
}
