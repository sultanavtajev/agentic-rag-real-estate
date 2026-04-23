import type { OverallMetrics } from "@/lib/types";
import { formatPercent } from "@/lib/utils";

interface MetricsTableProps {
  overallMetrics: OverallMetrics;
  adjustedMetrics?: OverallMetrics | null;
}

export function MetricsTable({ overallMetrics, adjustedMetrics }: MetricsTableProps) {
  const items = [
    { label: "Precision", value: formatPercent(overallMetrics.precision) },
    { label: "Recall", value: formatPercent(overallMetrics.recall) },
    { label: "F1", value: formatPercent(overallMetrics.f1) },
    { label: "Support", value: String(overallMetrics.total_support) },
  ];

  const adjustedItems = adjustedMetrics
    ? [
        { label: "Precision", value: formatPercent(adjustedMetrics.precision) },
        { label: "Recall", value: formatPercent(adjustedMetrics.recall) },
        { label: "F1", value: formatPercent(adjustedMetrics.f1) },
        { label: "Support", value: String(adjustedMetrics.total_support) },
      ]
    : null;

  return (
    <div>
      {adjustedMetrics && (
        <p className="text-xs text-muted-foreground mb-1">Ujustert</p>
      )}
      <div className="grid grid-cols-4 gap-2">
        {items.map((item) => (
          <div key={item.label} className="text-center rounded-lg border p-2 min-w-0">
            <p className="text-xs text-muted-foreground">{item.label}</p>
            <p className="text-base font-bold">{item.value}</p>
          </div>
        ))}
      </div>
      {adjustedItems && (
        <>
          <p className="text-xs text-muted-foreground mt-3 mb-1">Justert (etter verifisering)</p>
          <div className="grid grid-cols-4 gap-2">
            {adjustedItems.map((item) => (
              <div key={item.label} className="text-center rounded-lg border p-2 min-w-0">
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-base font-bold">{item.value}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
