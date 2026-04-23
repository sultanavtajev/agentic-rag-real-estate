"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getGroundTruthRisks } from "@/lib/api-client";
import type { GroundTruthRisk } from "@/lib/types";

interface GroundTruthRisksSectionProps {
  documentSetId: string;
}

export function GroundTruthRisksSection({ documentSetId }: GroundTruthRisksSectionProps) {
  const [risks, setRisks] = useState<GroundTruthRisk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getGroundTruthRisks(documentSetId)
      .then((data) => { if (!cancelled) setRisks(data); })
      .catch((err) => { if (!cancelled) setError(err instanceof Error ? err.message : String(err)); })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, [documentSetId]);

  if (loading) return null;
  if (error) return null;
  if (risks.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ground Truth-risikoer ({risks.length})</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Beskrivelse</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {risks.map((risk) => (
                <TableRow key={risk.risk_id}>
                  <TableCell className="max-w-md">{risk.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
