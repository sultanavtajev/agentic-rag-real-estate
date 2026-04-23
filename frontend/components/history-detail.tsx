"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ComparisonSection } from "@/components/comparison-section";
import { SingleEvaluationSection } from "@/components/single-evaluation-section";
import { getEvaluationRecord } from "@/lib/api-client";
import type { EnrichedComparisonReport, SingleEvaluationRecord } from "@/lib/types";

interface HistoryDetailProps {
  recordId: string;
  onClose: () => void;
}

function isComparison(
  record: EnrichedComparisonReport | SingleEvaluationRecord,
): record is EnrichedComparisonReport {
  return "system_results" in record;
}

export function HistoryDetail({ recordId, onClose }: HistoryDetailProps) {
  const [record, setRecord] = useState<
    EnrichedComparisonReport | SingleEvaluationRecord | null
  >(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;
    getEvaluationRecord(recordId)
      .then((data) => {
        if (!cancelled) {
          setRecord(data);
          setLoading(false);
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Could not fetch details");
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, [recordId]);

  if (loading) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-sm text-muted-foreground">
          Loading details...
        </CardContent>
      </Card>
    );
  }

  if (error || !record) {
    return (
      <Card>
        <CardContent className="py-8 text-center text-sm text-red-600">
          {error || "No data found"}
        </CardContent>
      </Card>
    );
  }

  const query = isComparison(record) ? record.query : record.query;
  const docSetId = isComparison(record) ? record.document_set_id : record.document_set_id;
  const timestamp = isComparison(record) ? record.timestamp : record.timestamp;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Details</h3>
        <Button size="sm" variant="outline" onClick={onClose}>
          Close
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 text-sm">
        {query && <Badge variant="outline">Query: {query}</Badge>}
        {docSetId && <Badge variant="secondary">Document set: {docSetId}</Badge>}
        {timestamp && (
          <Badge variant="outline">
            {new Date(timestamp).toLocaleString("en-GB")}
          </Badge>
        )}
      </div>

      {isComparison(record) ? (
        <ComparisonSection report={record} />
      ) : (
        <SingleEvaluationSection evaluation={record.evaluation} />
      )}
    </div>
  );
}
