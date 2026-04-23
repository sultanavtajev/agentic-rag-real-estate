"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SystemSelector, type SystemSelection } from "@/components/system-selector";
import { listDocuments } from "@/lib/api-client";
import type { DocumentSetInfo } from "@/lib/types";

interface AnalysisFormProps {
  loading: boolean;
  onAnalyze: (
    documentSetIds: string[],
    query: string,
    selection: SystemSelection,
  ) => void;
}

export function AnalysisForm({ loading, onAnalyze }: AnalysisFormProps) {
  const [documentSets, setDocumentSets] = useState<DocumentSetInfo[]>([]);
  const [selectedSetIds, setSelectedSetIds] = useState<string[]>([]);
  const query = "Identifiser risikoer i salgsoppgaven"; // Fixed Norwegian query used for all analysis runs
  const [selection, setSelection] = useState<SystemSelection>({
    standard: true,
    agentic: false,
    groundTruth: false,
    ablationConfig: {
      enable_planning: true,
      enable_tool_use: true,
      enable_reflection: true,
    },
  });

  useEffect(() => {
    listDocuments()
      .then((docs) => setDocumentSets([...docs].reverse()))
      .catch(() => {});
  }, []);

  const processedSets = documentSets.filter((d) => d.processed);

  const canSubmit =
    !loading &&
    selectedSetIds.length > 0 &&
    (selection.standard || selection.agentic || selection.groundTruth);

  const handleSubmit = () => {
    if (!canSubmit) return;
    onAnalyze(selectedSetIds, query, selection);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Run analysis</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Document sets</p>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  setSelectedSetIds(processedSets.map((d) => d.set_id))
                }
              >
                Select all
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setSelectedSetIds([])}
              >
                Clear all
              </Button>
            </div>
          </div>
          <div className="max-h-48 overflow-y-auto rounded-lg border p-2 space-y-1">
            {processedSets.map((d) => (
              <label
                key={d.set_id}
                className="flex items-center gap-2 rounded px-2 py-1.5 hover:bg-muted cursor-pointer text-sm"
              >
                <input
                  type="checkbox"
                  checked={selectedSetIds.includes(d.set_id)}
                  onChange={() => {
                    setSelectedSetIds((prev) =>
                      prev.includes(d.set_id)
                        ? prev.filter((id) => id !== d.set_id)
                        : [...prev, d.set_id],
                    );
                  }}
                />
                {d.set_id} — {d.file_count} files ({d.filenames.join(", ")})
              </label>
            ))}
          </div>
        </div>

        <Input
          value={query}
          disabled
          className="text-muted-foreground"
        />

        <SystemSelector onSelectionChange={setSelection} />

        <Button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className="w-full"
        >
          {loading
            ? "Analyzing..."
            : `Run analysis (${selectedSetIds.length} document sets)`}
        </Button>
      </CardContent>
    </Card>
  );
}
