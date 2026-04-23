"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  categorizeAblation,
  getAblationCategorizationStatus,
} from "@/lib/api-client";
import type { AblationCategorizeStatus } from "@/lib/types";

interface Props {
  documentSetIds: string[];
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

export function AblationCategorization({ documentSetIds }: Props) {
  const [status, setStatus] = useState<AblationCategorizeStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState({ done: 0, total: 0 });
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const s = await getAblationCategorizationStatus();
      setStatus(s);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Kunne ikke hente status");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  const handleCategorize = useCallback(async () => {
    if (documentSetIds.length === 0) return;
    setRunning(true);
    setProgress({ done: 0, total: documentSetIds.length });
    setError(null);

    const allConfigs = ["P+T+R", "T+R", "P+R", "P+T", "P", "T", "R", "NONE"];

    for (let i = 0; i < documentSetIds.length; i++) {
      try {
        await categorizeAblation(documentSetIds[i], allConfigs);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : `Feil ved ${documentSetIds[i]}`);
      }
      setProgress({ done: i + 1, total: documentSetIds.length });
    }

    setRunning(false);
    await fetchStatus();
  }, [documentSetIds, fetchStatus]);

  if (documentSetIds.length === 0) return null;

  const pct = status && status.total_risks > 0
    ? Math.round((status.categorized_count / status.total_risks) * 100)
    : 0;

  const progressPct = progress.total > 0
    ? Math.round((progress.done / progress.total) * 100)
    : 0;

  return (
    <section className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Categorization</h2>
        <Button onClick={handleCategorize} disabled={running || loading} size="sm">
          {running ? "Categorizing..." : "Categorize all"}
        </Button>
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      {running && (
        <div className="space-y-1">
          <p className="text-xs text-muted-foreground">
            Categorizing {progress.done}/{progress.total} document sets...
          </p>
          <Progress value={progressPct} className="h-2" />
        </div>
      )}

      {status && !loading && (
        <>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard title="Total risks" value={String(status.total_risks)} />
            <StatCard title="Categorized" value={`${status.categorized_count} (${pct} %)`} />
            <StatCard title="Uncategorized" value={String(status.uncategorized_count)} />
          </div>

          {status.per_config.length > 0 && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Per configuration</CardTitle>
              </CardHeader>
              <CardContent className="p-0 max-h-[280px] overflow-y-auto">
                <Table>
                  <TableHeader className="sticky top-0 bg-background z-10">
                    <TableRow>
                      <TableHead>Configuration</TableHead>
                      <TableHead className="text-right">Total</TableHead>
                      <TableHead className="text-right">Categorized</TableHead>
                      <TableHead className="text-right">Uncategorized</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {status.per_config.map((cfg) => (
                      <TableRow key={`${cfg.document_set_id}_${cfg.config_label}`}>
                        <TableCell className="font-medium">{cfg.config_label}</TableCell>
                        <TableCell className="text-right">{cfg.total}</TableCell>
                        <TableCell className="text-right">{cfg.categorized}</TableCell>
                        <TableCell className="text-right">{cfg.uncategorized}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          )}
        </>
      )}
    </section>
  );
}
