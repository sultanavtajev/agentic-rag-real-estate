"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { CategoryStatus } from "@/lib/types";

interface Props {
  status: CategoryStatus | null;
  loading: boolean;
}

function StatCard({ title, value }: { title: string; value: string }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}

export function CategorizeOverview({ status, loading }: Props) {
  if (loading || !status) {
    return (
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="h-24" />
          ))}
        </div>
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-48" />
      </div>
    );
  }

  const pct =
    status.total_risks > 0
      ? Math.round((status.categorized_count / status.total_risks) * 100)
      : 0;

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Overview</h2>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard title="Total risks" value={String(status.total_risks)} />
        <StatCard
          title="Categorized"
          value={`${status.categorized_count} (${pct} %)`}
        />
        <StatCard
          title="Uncategorized"
          value={String(status.uncategorized_count)}
        />
      </div>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">
          Progress: {pct} % categorized
        </p>
        <Progress value={pct} className="h-2" />
      </div>

      {status.categories.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Categories</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Category</TableHead>
                  <TableHead className="text-right">Standard RAG</TableHead>
                  <TableHead className="text-right">Agentic RAG</TableHead>
                  <TableHead className="text-right">Ground Truth</TableHead>
                  <TableHead className="text-right">Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {status.categories.map((cat) => (
                  <TableRow key={cat.category}>
                    <TableCell className="font-medium">
                      {cat.category}
                    </TableCell>
                    <TableCell className="text-right">
                      {cat.standard_rag_count}
                    </TableCell>
                    <TableCell className="text-right">
                      {cat.agentic_rag_count}
                    </TableCell>
                    <TableCell className="text-right">
                      {cat.ground_truth_count}
                    </TableCell>
                    <TableCell className="text-right font-semibold">
                      {cat.total}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </section>
  );
}
