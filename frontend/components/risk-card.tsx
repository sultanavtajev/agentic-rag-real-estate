"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IdentifiedRisk } from "@/lib/types";
import { formatPercent } from "@/lib/utils";

interface RiskCardProps {
  risk: IdentifiedRisk;
}

export function RiskCard({ risk }: RiskCardProps) {
  const [showEvidence, setShowEvidence] = useState(false);

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-start justify-between gap-2 space-y-0 px-4 pb-1.5 pt-3">
        <CardTitle className="text-base">{risk.description}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2 px-4 pb-3">
        {risk.evidence.length > 0 && (
          <div>
            <button
              type="button"
              onClick={() => setShowEvidence((prev) => !prev)}
              className="text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {showEvidence ? "Skjul evidens" : "Vis evidens"}
            </button>
            {showEvidence && (
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                {risk.evidence.map((item, i) => (
                  <li key={i} className="rounded bg-muted p-2">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <p className="text-xs text-muted-foreground">
          Kilde: {risk.source_documents.join(", ")}
          {risk.source_pages.length > 0 && (
            <> &middot; Side {risk.source_pages.join(", ")}</>
          )}
        </p>

        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span>Konfidens</span>
            <span>{formatPercent(risk.confidence)}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${risk.confidence * 100}%` }}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
