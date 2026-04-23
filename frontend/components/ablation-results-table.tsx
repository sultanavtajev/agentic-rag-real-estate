"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import type { AblationStudyResult } from "@/lib/types";

const CONFIG_LABELS = ["P+T+R", "T+R", "P+R", "P+T", "P", "T", "R", "NONE"] as const;

interface Props {
  results: AblationStudyResult[];
  averages: Record<string, { f1: number; precision: number; recall: number }>;
}

function fmt(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

export function AblationResultsTable({ results, averages }: Props) {
  const documentSetIds = [
    ...new Set(results.map((r) => r.document_set_id)),
  ].sort();

  const lookup = new Map<string, number>();
  for (const r of results) {
    lookup.set(`${r.document_set_id}:${r.config_label}`, r.f1);
  }

  const getRowValues = (docId: string) =>
    CONFIG_LABELS.map((c) => lookup.get(`${docId}:${c}`) ?? null);

  const avgValues = CONFIG_LABELS.map((c) => averages[c]?.f1 ?? null);

  const cellColor = (val: number | null, row: (number | null)[]) => {
    if (val === null) return "";
    const nums = row.filter((v): v is number => v !== null);
    if (nums.length < 2) return "";
    const max = Math.max(...nums);
    const min = Math.min(...nums);
    if (val === max) return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
    if (val === min) return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
    return "";
  };

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Results (F1 score)</h2>

      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Document set</TableHead>
              {CONFIG_LABELS.map((c) => (
                <TableHead key={c} className="text-center">
                  {c}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {documentSetIds.map((docId) => {
              const row = getRowValues(docId);
              return (
                <TableRow key={docId}>
                  <TableCell className="font-medium">{docId}</TableCell>
                  {row.map((val, i) => (
                    <TableCell
                      key={CONFIG_LABELS[i]}
                      className={cn("text-center", cellColor(val, row))}
                    >
                      {val !== null ? fmt(val) : "-"}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}

            <TableRow className="font-bold border-t-2">
              <TableCell>Average</TableCell>
              {avgValues.map((val, i) => (
                <TableCell
                  key={CONFIG_LABELS[i]}
                  className={cn("text-center", cellColor(val, avgValues))}
                >
                  {val !== null ? fmt(val) : "-"}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
