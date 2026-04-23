"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import type { AblationConfig } from "@/lib/types";
import { cn } from "@/lib/utils";

export interface SystemSelection {
  standard: boolean;
  agentic: boolean;
  groundTruth: boolean;
  ablationConfig: AblationConfig;
}

interface SystemSelectorProps {
  documentSetId?: string;
  onSelectionChange: (selection: SystemSelection) => void;
}

export function SystemSelector({
  onSelectionChange,
}: SystemSelectorProps) {
  const [standard, setStandard] = useState(true);
  const [agentic, setAgentic] = useState(false);
  const [groundTruth, setGroundTruth] = useState(false);
  const [ablation, setAblation] = useState<AblationConfig>({
    enable_planning: true,
    enable_tool_use: true,
    enable_reflection: true,
  });

  // Notify parent on any change
  useEffect(() => {
    onSelectionChange({
      standard,
      agentic,
      groundTruth,
      ablationConfig: ablation,
    });
  }, [standard, agentic, groundTruth, ablation, onSelectionChange]);

  const options = [
    {
      key: "standard" as const,
      label: "Standard RAG",
      desc: "Simple retrieval-augmented generation",
      checked: standard,
      onChange: setStandard,
    },
    {
      key: "agentic" as const,
      label: "Agentic RAG",
      desc: "Planning, tool use, and reflection",
      checked: agentic,
      onChange: setAgentic,
    },
    {
      key: "groundTruth" as const,
      label: "Ground Truth",
      desc: "Auto-generated reference via AI",
      checked: groundTruth,
      onChange: setGroundTruth,
    },
  ];

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Select system</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          {options.map((opt) => (
            <button
              key={opt.key}
              type="button"
              onClick={() => opt.onChange(!opt.checked)}
              className={cn(
                "rounded-lg border-2 p-4 text-left transition-colors",
                opt.checked
                  ? "border-primary bg-primary/5"
                  : "border-muted hover:border-muted-foreground/50",
              )}
            >
              <div className="flex items-center justify-between">
                <p className="font-medium">{opt.label}</p>
                <div
                  className={cn(
                    "flex h-5 w-5 items-center justify-center rounded border-2 transition-colors",
                    opt.checked
                      ? "border-primary bg-primary"
                      : "border-muted-foreground/40",
                  )}
                >
                  {opt.checked && (
                    <svg
                      className="h-3 w-3 text-primary-foreground"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{opt.desc}</p>
            </button>
          ))}
        </div>

        {agentic && (
          <div className="space-y-3 rounded-lg border p-4">
            <p className="text-sm font-medium">Ablation configuration</p>
            {(
              [
                ["enable_planning", "Planning"],
                ["enable_tool_use", "Specialized retrieval"],
                ["enable_reflection", "Reflection"],
              ] as const
            ).map(([key, label]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="text-sm">{label}</span>
                <Switch
                  checked={ablation[key]}
                  onCheckedChange={() =>
                    setAblation((prev) => ({ ...prev, [key]: !prev[key] }))
                  }
                />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
