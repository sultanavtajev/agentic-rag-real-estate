"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HistoryFilters } from "@/components/history-filters";
import { HistoryTableRow } from "@/components/history-table-row";
import { DeleteConfirmDialog } from "@/components/delete-confirm-dialog";
import { ClipboardList } from "lucide-react";
import type { FilterType, FilterGt } from "@/components/history-filters";
import type { EvaluationHistoryItem } from "@/lib/types";

const PAGE_SIZE = 10;

interface HistoryListProps {
  items: EvaluationHistoryItem[];
  expandedId: string | null;
  onExpand: (recordId: string) => void;
  onDelete: (recordId: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filterType: FilterType;
  onFilterChange: (value: FilterType) => void;
  filterGt: FilterGt;
  onFilterGtChange: (value: FilterGt) => void;
  sortOrder: "asc" | "desc";
  onSortChange: (value: "asc" | "desc") => void;
}

export function HistoryList({
  items,
  expandedId,
  onExpand,
  onDelete,
  searchQuery,
  onSearchChange,
  filterType,
  onFilterChange,
  filterGt,
  onFilterGtChange,
  sortOrder,
  onSortChange,
}: HistoryListProps) {
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [items.length, searchQuery, filterType, filterGt, sortOrder]);

  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount],
  );
  const remaining = items.length - visibleCount;

  return (
    <>
      <Card>
        <CardContent className="space-y-4 pt-6">
          <HistoryFilters
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            filterType={filterType}
            onFilterChange={onFilterChange}
            filterGt={filterGt}
            onFilterGtChange={onFilterGtChange}
            sortOrder={sortOrder}
            onSortChange={onSortChange}
          />
        </CardContent>
      </Card>

      {items.length === 0 ? (
        <div className="flex flex-col items-center gap-3 py-12 text-center">
          <ClipboardList className="h-10 w-10 text-muted-foreground/60" />
          <p className="text-sm font-medium text-muted-foreground">
            No evaluations yet.
          </p>
          <p className="text-sm text-muted-foreground/80">
            Run an analysis to see results here.
          </p>
          <Link href="/analyze">
            <Button size="sm" variant="outline" className="mt-1">
              Go to analysis
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-end text-sm text-muted-foreground">
            Showing {Math.min(visibleCount, items.length)} of {items.length}
          </div>
          <div className="space-y-3">
            {visibleItems.map((item, idx) => (
              <HistoryTableRow
                key={item.record_id}
                item={item}
                isExpanded={expandedId === item.record_id}
                isEven={idx % 2 === 0}
                onExpand={onExpand}
                onDeleteClick={setDeleteTarget}
              />
            ))}
          </div>
          {remaining > 0 && (
            <div className="flex justify-center pt-2">
              <Button
                variant="outline"
                onClick={() =>
                  setVisibleCount((prev) =>
                    Math.min(prev + PAGE_SIZE, items.length),
                  )
                }
              >
                Show more ({Math.min(PAGE_SIZE, remaining)})
              </Button>
            </div>
          )}
        </>
      )}

      <DeleteConfirmDialog
        open={deleteTarget !== null}
        onOpenChange={(open) => { if (!open) setDeleteTarget(null); }}
        onConfirm={() => { if (deleteTarget) onDelete(deleteTarget); }}
      />
    </>
  );
}
