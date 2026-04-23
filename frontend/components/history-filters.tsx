"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpDown, Search } from "lucide-react";

export type FilterType = "all" | "comparison" | "single";
export type FilterGt = "all" | "with_gt" | "without_gt";

interface HistoryFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  filterType: FilterType;
  onFilterChange: (value: FilterType) => void;
  filterGt: FilterGt;
  onFilterGtChange: (value: FilterGt) => void;
  sortOrder: "asc" | "desc";
  onSortChange: (value: "asc" | "desc") => void;
}

const typeFilters: { value: FilterType; label: string }[] = [
  { value: "all", label: "All" },
  { value: "comparison", label: "Comparison" },
  { value: "single", label: "Single" },
];

const gtFilters: { value: FilterGt; label: string }[] = [
  { value: "all", label: "All" },
  { value: "with_gt", label: "With GT" },
  { value: "without_gt", label: "Without GT" },
];

export function HistoryFilters({
  searchQuery,
  onSearchChange,
  filterType,
  onFilterChange,
  filterGt,
  onFilterGtChange,
  sortOrder,
  onSortChange,
}: HistoryFiltersProps) {
  return (
    <div className="space-y-3">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search queries..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9"
        />
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {typeFilters.map((f) => (
          <Button
            key={f.value}
            size="sm"
            variant={filterType === f.value ? "default" : "outline"}
            onClick={() => onFilterChange(f.value)}
          >
            {f.label}
          </Button>
        ))}
        <span className="mx-1" />
        {gtFilters.map((f) => (
          <Button
            key={f.value}
            size="sm"
            variant={filterGt === f.value ? "default" : "outline"}
            onClick={() => onFilterGtChange(f.value)}
          >
            {f.label}
          </Button>
        ))}
        <span className="mx-1" />
        <Button
          size="sm"
          variant="outline"
          className="gap-1"
          onClick={() => onSortChange(sortOrder === "asc" ? "desc" : "asc")}
        >
          <ArrowUpDown className="h-3 w-3" />
          {sortOrder === "asc" ? "d001 → d203" : "d203 → d001"}
        </Button>
      </div>
    </div>
  );
}
