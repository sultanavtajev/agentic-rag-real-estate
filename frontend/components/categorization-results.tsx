"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { RiskCategoryResult } from "@/lib/types";

interface Props {
  results: Map<string, RiskCategoryResult[]>;
}

const BADGE_COLORS: Record<string, string> = {
  legal: "bg-blue-100 text-blue-800",
  structural: "bg-amber-100 text-amber-800",
  financial: "bg-green-100 text-green-800",
  regulatory: "bg-purple-100 text-purple-800",
  moisture: "bg-cyan-100 text-cyan-800",
  electrical: "bg-orange-100 text-orange-800",
  safety: "bg-red-100 text-red-800",
};

function badgeClass(category: string): string {
  const key = category.toLowerCase();
  for (const [k, v] of Object.entries(BADGE_COLORS)) {
    if (key.includes(k)) return v;
  }
  return "bg-gray-100 text-gray-800";
}

function confidenceLabel(c: number): string {
  if (c >= 0.8) return "High";
  if (c >= 0.5) return "Medium";
  return "Low";
}

export function CategorizeResults({ results }: Props) {
  const entries = [...results.entries()];

  if (entries.length === 0) {
    return (
      <section className="space-y-2">
        <h2 className="text-lg font-semibold">Results</h2>
        <p className="text-sm text-muted-foreground">
          No categorization results yet. Select document sets and click
          &quot;Categorize&quot;.
        </p>
      </section>
    );
  }

  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold">Results</h2>

      <Accordion type="multiple" className="w-full max-h-[420px] overflow-y-auto">
        {entries.map(([recordId, risks]) => (
          <AccordionItem key={recordId} value={recordId}>
            <AccordionTrigger>
              {recordId}{" "}
              <Badge variant="secondary" className="ml-2">
                {risks.length} risks
              </Badge>
            </AccordionTrigger>
            <AccordionContent>
              <div className="rounded-md border overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Risk ID</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead className="text-right">Confidence</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {risks.map((r) => (
                      <TableRow key={r.risk_id}>
                        <TableCell className="font-mono text-xs">
                          {r.risk_id}
                        </TableCell>
                        <TableCell>
                          <Badge className={badgeClass(r.category)}>
                            {r.category}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          {(r.confidence * 100).toFixed(0)} %{" "}
                          <span className="text-xs text-muted-foreground">
                            ({confidenceLabel(r.confidence)})
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
