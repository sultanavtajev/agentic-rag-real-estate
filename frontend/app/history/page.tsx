"use client";

import { useEffect, useMemo, useState } from "react";
import { HistoryInfoSteps } from "@/components/history-info-steps";
import { HistoryList } from "@/components/history-list";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  listEvaluationHistory,
  listDocuments,
  deleteEvaluationRecord,
} from "@/lib/api-client";
import { Skeleton } from "@/components/ui/skeleton";
import type { EvaluationHistoryItem } from "@/lib/types";
import type { FilterType, FilterGt } from "@/components/history-filters";
import { useAutoScreenshot } from "@/hooks/use-auto-screenshot";

function matchesSearch(item: EvaluationHistoryItem, search: string): boolean {
  if (!search.trim()) return true;
  return item.query.toLowerCase().includes(search.toLowerCase());
}

function matchesType(item: EvaluationHistoryItem, filter: FilterType): boolean {
  if (filter === "all") return true;
  return item.record_type === filter;
}

function matchesGt(item: EvaluationHistoryItem, filter: FilterGt): boolean {
  if (filter === "all") return true;
  if (filter === "with_gt") return item.has_ground_truth === true;
  return !item.has_ground_truth;
}

export default function HistoryPage() {
  const [items, setItems] = useState<EvaluationHistoryItem[]>([]);
  const [uploadedSets, setUploadedSets] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<FilterType>("all");
  const [filterGt, setFilterGt] = useState<FilterGt>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  useAutoScreenshot("Appendix_A4_Evaluation.png", { ready: !loading });

  useEffect(() => {
    let cancelled = false;
    Promise.all([listEvaluationHistory(), listDocuments()])
      .then(([evalData, docs]) => {
        if (!cancelled) {
          setItems(evalData);
          setUploadedSets(docs.filter((d) => d.processed).map((d) => d.set_id));
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Kunne ikke hente data");
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  const handleExpand = (recordId: string) => {
    setExpandedId((prev) => (prev === recordId ? null : recordId));
  };

  const handleDelete = (recordId: string) => {
    deleteEvaluationRecord(recordId)
      .then(() => {
        setItems((prev) => prev.filter((i) => i.record_id !== recordId));
        if (expandedId === recordId) setExpandedId(null);
      })
      .catch((err: unknown) => {
        setError(err instanceof Error ? err.message : "Deletion failed");
      });
  };

  const filtered = items
    .filter((i) => matchesSearch(i, searchQuery))
    .filter((i) => matchesType(i, filterType))
    .filter((i) => matchesGt(i, filterGt))
    .sort((a, b) => {
      const aId = a.document_set_id ?? "";
      const bId = b.document_set_id ?? "";
      const cmp = aId.localeCompare(bId, undefined, { numeric: true });
      return sortOrder === "asc" ? cmp : -cmp;
    });

  // Duplikatsjekk: dokumentsett med mer enn 1 evaluering
  const duplicates = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of items) {
      const id = item.document_set_id ?? "";
      if (id) counts.set(id, (counts.get(id) ?? 0) + 1);
    }
    return [...counts.entries()].filter(([, c]) => c > 1).sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }));
  }, [items]);

  // Manglende: opplastede dokumentsett uten evaluering
  const missing = useMemo(() => {
    const evalSets = new Set(items.map((i) => i.document_set_id).filter(Boolean));
    return uploadedSets.filter((id) => !evalSets.has(id)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  }, [items, uploadedSets]);

  if (loading) {
    return (
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold">Evaluation history</h1>
        <div className="space-y-3">
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-48 w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">Evaluation history</h1>
        <HistoryInfoSteps />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {(duplicates.length > 0 || missing.length > 0) && (
        <div className="grid gap-4 sm:grid-cols-2">
          {duplicates.length > 0 && (
            <Card className="border-orange-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-orange-700">
                  Duplikater ({duplicates.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {duplicates.map(([id, count]) => (
                    <Badge key={id} variant="outline" className="text-xs border-orange-200">
                      {id} ({count}x)
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
          {missing.length > 0 && (
            <Card className="border-red-200">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm text-red-700">
                  Mangler evaluering ({missing.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1">
                  {missing.map((id) => (
                    <Badge key={id} variant="outline" className="text-xs border-red-200">
                      {id}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      )}

      <HistoryList
        items={filtered}
        expandedId={expandedId}
        onExpand={handleExpand}
        onDelete={handleDelete}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        filterType={filterType}
        onFilterChange={setFilterType}
        filterGt={filterGt}
        onFilterGtChange={setFilterGt}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />
    </div>
  );
}
