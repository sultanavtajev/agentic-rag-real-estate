"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DashboardSkeleton } from "@/components/dashboard-skeleton";
import { listDocuments, listResults } from "@/lib/api-client";
import type { DocumentSetInfo, AnalysisResultSummary } from "@/lib/types";
import { FolderOpen, BarChart3, Clock } from "lucide-react";
import { useAutoScreenshot } from "@/hooks/use-auto-screenshot";

function formatTimestamp(ts: string): string {
  const d = new Date(ts);
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function riskBadgeVariant(count: number) {
  if (count === 0) return "secondary" as const;
  if (count <= 3) return "outline" as const;
  return "destructive" as const;
}

const PAGE_SIZE = 10;

export default function DashboardPage() {
  const [documents, setDocuments] = useState<DocumentSetInfo[]>([]);
  const [results, setResults] = useState<AnalysisResultSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  useAutoScreenshot("Appendix_A1_Dashboard.png", { ready: !loading });

  useEffect(() => {
    async function fetchData() {
      try {
        const [docs, res] = await Promise.all([
          listDocuments(),
          listResults(),
        ]);
        setDocuments(docs);
        setResults(res);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Could not fetch data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <DashboardSkeleton />;

  if (error) {
    return (
      <div className="flex flex-col items-center gap-4 py-20">
        <p className="text-sm text-red-600">{error}</p>
        <Button onClick={() => window.location.reload()}>Try again</Button>
      </div>
    );
  }

  const isEmpty = documents.length === 0 && results.length === 0;

  if (isEmpty) {
    return (
      <div className="flex flex-col items-center gap-6 py-20">
        <FolderOpen className="h-12 w-12 text-muted-foreground" />
        <h1 className="text-2xl font-semibold">No data yet</h1>
        <p className="text-muted-foreground text-center max-w-sm">
          Upload documents to get started with risk analysis.
        </p>
        <Button asChild>
          <Link href="/upload">Upload documents</Link>
        </Button>
      </div>
    );
  }

  const latestResults = results.slice(0, 5);
  const lastRun = results.length > 0 ? formatTimestamp(results[0].timestamp) : "None yet";

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>

      {/* Stats cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <FolderOpen className="h-4 w-4" />
              Document sets
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{documents.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <BarChart3 className="h-4 w-4" />
              Analyses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{results.length}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock className="h-4 w-4" />
              Last run
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">{lastRun}</p>
          </CardContent>
        </Card>
      </div>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-medium">Document sets</h2>
          <p className="text-sm text-muted-foreground">
            Showing {Math.min(visibleCount, documents.length)} of {documents.length}
          </p>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px]">Set ID</TableHead>
                <TableHead className="w-[100px]">Files</TableHead>
                <TableHead>Original filename</TableHead>
                <TableHead className="w-[160px]">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {documents.slice(0, visibleCount).map((doc) => (
                <TableRow key={doc.set_id}>
                  <TableCell className="font-medium">{doc.set_id}</TableCell>
                  <TableCell>{doc.file_count}</TableCell>
                  <TableCell className="max-w-[400px] truncate text-sm text-muted-foreground">
                    {doc.original_filename || doc.filenames[0] || "—"}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={doc.processed ? "default" : "secondary"}
                      className={
                        doc.processed
                          ? "bg-green-100 text-green-800 border-green-200"
                          : ""
                      }
                    >
                      {doc.processed ? "Processed" : "Not processed"}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        {visibleCount < documents.length && (
          <div className="mt-4 flex justify-center">
            <Button
              variant="outline"
              onClick={() =>
                setVisibleCount((prev) =>
                  Math.min(prev + PAGE_SIZE, documents.length),
                )
              }
            >
              Show more ({Math.min(PAGE_SIZE, documents.length - visibleCount)})
            </Button>
          </div>
        )}
      </section>

      {latestResults.length > 0 && (
        <section>
          <h2 className="mb-4 text-lg font-medium">Recent analyses</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {latestResults.map((r) => (
              <Card key={r.run_id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{r.document_set_id}</CardTitle>
                    <Badge
                      variant={r.system_type === "agentic" ? "secondary" : "default"}
                    >
                      {r.system_type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Risks</span>
                    <Badge variant={riskBadgeVariant(r.risk_count)}>
                      {r.risk_count}
                    </Badge>
                  </div>
                  <p className="text-xs">{formatTimestamp(r.timestamp)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
