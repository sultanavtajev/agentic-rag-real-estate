"use client";

import { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const COLORS = {
  primary: "#2563eb",
  secondary: "#94a3b8",
  accent: "#8b5cf6",
};

export const PIE_COLORS = ["#22c55e", "#ef4444"];

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-lg bg-muted/50 p-3 text-sm text-muted-foreground space-y-1">
      {children}
    </div>
  );
}

export function ChartCard({
  title,
  prefix,
  children,
}: {
  title: string;
  prefix?: string;
  children: React.ReactNode;
}) {
  const chartRef = useRef<HTMLDivElement>(null);

  const displayTitle = prefix ? `${prefix}. ${title}` : title;

  const handleDownload = useCallback(async () => {
    if (!chartRef.current) return;
    try {
      const dataUrl = await toPng(chartRef.current, { backgroundColor: "#ffffff", pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `${displayTitle.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_")}.png`;
      link.href = dataUrl;
      link.click();
    } catch {
      /* ignore */
    }
  }, [displayTitle]);

  const slug = displayTitle.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "_");

  return (
    <div ref={chartRef} data-chart data-chart-title={slug}>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle>{displayTitle}</CardTitle>
          <Button variant="ghost" size="icon" className="h-8 w-8 print:hidden" onClick={handleDownload} title="Download PNG">
            <Download className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </Card>
    </div>
  );
}
