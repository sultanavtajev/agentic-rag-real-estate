"use client";

import { useCallback, useEffect, useState } from "react";
import { toPng } from "html-to-image";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { getAggregateResults, saveChart, saveResultsReport } from "@/lib/api-client";
import { ResultsOverview } from "@/components/results-overview";
import { ResultsCharts } from "@/components/results-charts";
import { ResultsConclusions } from "@/components/results-conclusions";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Download } from "lucide-react";
import type { AggregateResults } from "@/lib/types";
import { useAutoScreenshot } from "@/hooks/use-auto-screenshot";

function LoadingSkeleton() {
  return (
    <div className="space-y-8">
      <Skeleton className="h-8 w-48" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-28" />
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-80" />
        ))}
      </div>
    </div>
  );
}

export default function ResultsPage() {
  const [data, setData] = useState<AggregateResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useAutoScreenshot("Appendix_A5_Results.png", {
    ready: !loading && data !== null,
  });

  useEffect(() => {
    getAggregateResults()
      .then(setData)
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleDownloadAll = useCallback(async () => {
    const charts = document.querySelectorAll("[data-chart]");
    if (charts.length === 0) return;
    const zip = new JSZip();
    for (const chart of charts) {
      const name = chart.getAttribute("data-chart-title") || "chart";
      try {
        const png = await toPng(chart as HTMLElement, { backgroundColor: "#ffffff", pixelRatio: 2 });
        const base64 = png.split(",")[1];
        zip.file(`${name}.png`, base64, { base64: true });
      } catch {
        /* skip failed charts */
      }
    }
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "results-charts.zip");
  }, []);

  const [saved, setSaved] = useState(false);

  // Auto-save all charts as PNG when page loads
  useEffect(() => {
    if (loading || !data || saved) return;
    const timer = setTimeout(async () => {
      const charts = document.querySelectorAll("[data-chart]");
      let count = 0;
      for (const chart of charts) {
        const name = chart.getAttribute("data-chart-title") || "chart";
        try {
          const png = await toPng(chart as HTMLElement, { backgroundColor: "#ffffff", pixelRatio: 2 });
          const base64 = png.split(",")[1];
          await saveChart(name, base64);
          count++;
        } catch { /* skip */ }
      }
      if (count > 0) {
        // Also save the structured .md report
        try { await saveResultsReport(); } catch { /* skip */ }
        setSaved(true);
      }
    }, 1500); // Wait for charts to render
    return () => clearTimeout(timer);
  }, [loading, data, saved]);

  if (loading) return <LoadingSkeleton />;

  if (error || !data) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-20">
        <p className="text-lg font-medium text-destructive">Could not load results</p>
        <p className="text-sm text-muted-foreground">{error ?? "No data available."}</p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Results</h1>
        <Button variant="outline" size="sm" onClick={handleDownloadAll} className="gap-2">
          <Download className="h-4 w-4" />
          Download all (ZIP)
        </Button>
      </div>
      <ResultsOverview data={data} />
      <ResultsCharts data={data} />
      <ResultsConclusions data={data} prefix="Fig 22" />
    </div>
  );
}
