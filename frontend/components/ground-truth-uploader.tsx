"use client";

import { useCallback, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getGroundTruthStatus, uploadGroundTruth } from "@/lib/api-client";
import type { GroundTruthStatus } from "@/lib/types";

interface GroundTruthUploaderProps {
  documentSetId: string;
  onStatusChange: (status: GroundTruthStatus) => void;
}

export function GroundTruthUploader({
  documentSetId,
  onStatusChange,
}: GroundTruthUploaderProps) {
  const [status, setStatus] = useState<GroundTruthStatus | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const refreshStatus = useCallback(async () => {
    if (!documentSetId) {
      setStatus(null);
      return;
    }
    try {
      const s = await getGroundTruthStatus(documentSetId);
      setStatus(s);
      onStatusChange(s);
    } catch {
      setStatus({ available: false, risk_count: 0 });
      onStatusChange({ available: false, risk_count: 0 });
    }
  }, [documentSetId, onStatusChange]);

  useEffect(() => {
    refreshStatus();
  }, [refreshStatus]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !documentSetId) return;

    setUploading(true);
    setError("");
    try {
      await uploadGroundTruth(file, documentSetId);
      await refreshStatus();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Opplasting feilet");
    } finally {
      setUploading(false);
      e.target.value = "";
    }
  };

  if (!documentSetId) return null;

  return (
    <Card>
      <CardContent className="flex flex-wrap items-center gap-3 pt-6">
        <span className="text-sm font-medium">Fasit (ground truth):</span>

        {status?.available ? (
          <Badge className="bg-green-100 text-green-800 border-green-200">
            Fasit tilgjengelig ({status.risk_count} risikoer)
          </Badge>
        ) : (
          <Badge variant="secondary">Ingen fasit</Badge>
        )}

        <label className="ml-auto flex items-center gap-2">
          <input
            type="file"
            accept=".json"
            onChange={handleUpload}
            className="hidden"
            id="gt-file-input"
          />
          <Button
            size="sm"
            variant="outline"
            disabled={uploading}
            onClick={() => document.getElementById("gt-file-input")?.click()}
          >
            {uploading ? "Laster opp..." : "Last opp fasit"}
          </Button>
        </label>

        {error && <p className="w-full text-sm text-red-600">{error}</p>}
      </CardContent>
    </Card>
  );
}
