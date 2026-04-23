"use client";

import { useCallback, useEffect, useState } from "react";
import { toPng } from "html-to-image";
import { getF1PerCategory, saveChart, saveResultsReport } from "@/lib/api-client";
import {
  RapportTables,
  generateTablesReport,
} from "@/components/rapport-tables";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useAutoScreenshot } from "@/hooks/use-auto-screenshot";

export default function RapportPage() {
  const [saved, setSaved] = useState(false);
  useAutoScreenshot("Appendix_A8_Report.png", { ready: saved });

  // Auto-save all table PNGs on page load
  useEffect(() => {
    if (saved) return;
    const timer = setTimeout(async () => {
      const charts = document.querySelectorAll("[data-chart]");
      let count = 0;
      for (const chart of charts) {
        const name =
          chart.getAttribute("data-chart-title") || "table";
        try {
          const png = await toPng(chart as HTMLElement, {
            backgroundColor: "#ffffff",
            pixelRatio: 2,
          });
          const base64 = png.split(",")[1];
          await saveChart(name, base64);
          count++;
        } catch {
          /* skip */
        }
      }
      if (count > 0) {
        // Save the tables report markdown
        try {
          const f1Data = await getF1PerCategory().catch(() => undefined);
          const reportMd = generateTablesReport(f1Data);
          const resp = await fetch("/api/proxy/analysis/save-chart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              filename: "rapport_tables_report.md",
              base64_png: btoa(
                unescape(encodeURIComponent(reportMd)),
              ),
            }),
          });
          if (!resp.ok) {
            // Fallback: save via save-results-report-like endpoint
            // The .md will be saved as base64 decoded text
          }
        } catch {
          /* skip */
        }
        setSaved(true);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [saved]);

  const handleDownloadAll = useCallback(async () => {
    const charts = document.querySelectorAll("[data-chart]");
    if (charts.length === 0) return;
    const zip = new JSZip();
    for (const chart of charts) {
      const name =
        chart.getAttribute("data-chart-title") || "table";
      try {
        const png = await toPng(chart as HTMLElement, {
          backgroundColor: "#ffffff",
          pixelRatio: 2,
        });
        const base64 = png.split(",")[1];
        zip.file(`${name}.png`, base64, { base64: true });
      } catch {
        /* skip */
      }
    }
    const blob = await zip.generateAsync({ type: "blob" });
    saveAs(blob, "rapport-tables.zip");
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Report Tables</h1>
        <Button
          variant="outline"
          size="sm"
          onClick={handleDownloadAll}
          className="gap-2"
        >
          <Download className="h-4 w-4" />
          Download all (ZIP)
        </Button>
      </div>
      <RapportTables />
    </div>
  );
}
