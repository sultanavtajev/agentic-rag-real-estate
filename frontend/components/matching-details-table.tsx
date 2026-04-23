"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EvaluationResult } from "@/lib/types";

interface MatchingDetailsTableProps {
  evaluation: EvaluationResult;
}

export function MatchingDetailsTable({ evaluation }: MatchingDetailsTableProps) {
  const pairs = evaluation.matched_pair_details ?? [];
  const unmatchedPred = evaluation.unmatched_predicted_risks ?? [];
  const unmatchedGt = evaluation.unmatched_ground_truth_risks ?? [];

  const verifiedMap = evaluation.verified_unmatched?.length
    ? new Map(evaluation.verified_unmatched.map(v => [v.risk.risk_id, v]))
    : null;

  const verifiedRealCount = verifiedMap
    ? [...verifiedMap.values()].filter(v => v.is_real_risk).length
    : 0;

  if (pairs.length === 0 && unmatchedPred.length === 0 && unmatchedGt.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Matching-detaljer</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {pairs.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-green-700">
              Treff — funnet av baade systemet og fasit ({pairs.length})
            </h4>
            <div className="space-y-3">
              {pairs.map((pair, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-green-200 bg-green-50/50 p-4 space-y-3"
                >
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-green-700">GT-risiko</p>
                    <p className="text-sm" style={{ overflowWrap: "anywhere" }}>
                      {pair.ground_truth_risk.description}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-medium text-green-700">System-risiko</p>
                    <p className="text-sm" style={{ overflowWrap: "anywhere" }}>
                      {pair.system_risk.description}
                    </p>
                  </div>
                  <Badge className="bg-green-100 text-green-800 border-green-200">
                    Match
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}

        {unmatchedPred.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-orange-700">
              Systemet fant, men ikke i fasit ({unmatchedPred.length})
            </h4>
            <p className="text-xs text-muted-foreground">
              Risikoer som systemet identifiserte, men som ikke finnes i Ground Truth. Kan vaere falske alarmer, eller risikoer som fasiten mangler.
            </p>
            {verifiedMap && (
              <p className="text-xs font-medium text-muted-foreground">
                {verifiedRealCount} av {unmatchedPred.length} bekreftet som ekte risikoer
              </p>
            )}
            <div className="space-y-2">
              {verifiedMap ? (
                unmatchedPred.map((risk, idx) => {
                  const verified = verifiedMap.get(risk.risk_id);
                  const isReal = verified?.is_real_risk ?? true;
                  return (
                    <div
                      key={idx}
                      className={`rounded-lg border p-4 ${isReal ? "border-green-200 bg-green-50/30" : "border-red-200 bg-red-50/30"}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-sm flex-1" style={{ overflowWrap: "anywhere" }}>{risk.description}</p>
                        <Badge className={isReal ? "bg-green-100 text-green-800 border-green-200 shrink-0" : "bg-red-100 text-red-800 border-red-200 shrink-0"}>
                          {isReal ? "Bekreftet" : "Falsk alarm"}
                        </Badge>
                      </div>
                      {verified?.reasoning && (
                        <p className="text-xs text-muted-foreground mt-2">{verified.reasoning}</p>
                      )}
                    </div>
                  );
                })
              ) : (
                unmatchedPred.map((risk, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg border border-orange-200 bg-orange-50/50 p-4 flex items-start justify-between gap-3"
                  >
                    <p className="text-sm flex-1" style={{ overflowWrap: "anywhere" }}>{risk.description}</p>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200 shrink-0">
                      FP
                    </Badge>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {unmatchedGt.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-red-700">
              I fasit, men ikke funnet av systemet ({unmatchedGt.length})
            </h4>
            <p className="text-xs text-muted-foreground">
              Risikoer som finnes i Ground Truth, men som systemet ikke klarte aa identifisere.
            </p>
            <div className="space-y-2">
              {unmatchedGt.map((risk, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-red-200 bg-red-50/50 p-4 flex items-start justify-between gap-3"
                >
                  <p className="text-sm flex-1" style={{ overflowWrap: "anywhere" }}>{risk.description}</p>
                  <Badge className="bg-red-100 text-red-800 border-red-200 shrink-0">
                    Miss
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
