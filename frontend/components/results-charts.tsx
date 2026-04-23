"use client";

import type { ReactElement } from "react";
import { RisksPerSystemChart } from "@/components/charts/risks-per-system-chart";
import { MetricsComparisonChart } from "@/components/charts/metrics-comparison-chart";
import { ResourceUsageChart } from "@/components/charts/resource-usage-chart";
import { VerificationChart } from "@/components/charts/verification-chart";
import { AdjustedF1Chart } from "@/components/charts/adjusted-f1-chart";
import { OverlapChart } from "@/components/charts/overlap-chart";
import { TokenCostChart } from "@/components/charts/token-cost-chart";
import { F1DistributionChart } from "@/components/charts/f1-distribution-chart";
import { F1PerDocumentChart } from "@/components/charts/f1-per-document-chart";
import { ChunkVsRisksChart } from "@/components/charts/chunk-vs-risks-chart";
import { StackedMatchChart } from "@/components/charts/stacked-overlap-chart";
import { ConfidenceIntervalChart } from "@/components/charts/confidence-interval-chart";
import { AblationResultsChart } from "@/components/charts/ablation-results-chart";
import { CostPerformanceChart } from "@/components/charts/cost-performance-chart";
import { F1VsTokensChart } from "@/components/charts/f1-vs-tokens-chart";
import { F1VsCostChart } from "@/components/charts/f1-vs-cost-chart";
import { DocumentSizeDistributionChart } from "@/components/charts/document-size-distribution-chart";
import { CaseStudyChart } from "@/components/charts/case-study-chart";
import { BestSystemChart } from "@/components/charts/best-system-chart";
import { RisksRangeChart } from "@/components/charts/risks-range-chart";
import type { AggregateResults } from "@/lib/types";

interface Props {
  data: AggregateResults;
}

interface ChartDef {
  render: (data: AggregateResults, prefix: string) => ReactElement;
  wide?: boolean;
}

// Master list — order here determines numbering everywhere
const CHARTS: ChartDef[] = [
  { render: (d, p) => <RisksPerSystemChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <RisksRangeChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <MetricsComparisonChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <ResourceUsageChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <VerificationChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <AdjustedF1Chart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <OverlapChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <TokenCostChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <F1DistributionChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <StackedMatchChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <F1PerDocumentChart key={p} data={d} prefix={p} />, wide: true },
  { render: (d, p) => <ChunkVsRisksChart key={p} data={d} prefix={p} />, wide: true },
  { render: (d, p) => <ConfidenceIntervalChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <CostPerformanceChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <F1VsTokensChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <F1VsCostChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <BestSystemChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <AblationResultsChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <CaseStudyChart key={p} data={d} prefix={p} /> },
  { render: (d, p) => <DocumentSizeDistributionChart key={p} data={d} prefix={p} />, wide: true },
];

export function ResultsCharts({ data }: Props) {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {CHARTS.map((chart, i) => {
        const prefix = `Fig ${i + 2}`;
        const el = chart.render(data, prefix);
        return chart.wide ? <div key={i} className="lg:col-span-2">{el}</div> : el;
      })}
    </div>
  );
}
