"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Circle, Loader2 } from "lucide-react";

export interface ProcessStep {
  name: string;
  label: string;
  status: "pending" | "running" | "done";
  elapsed_s: number;
}

interface ProcessingProgressProps {
  steps: ProcessStep[];
  visible: boolean;
}

export function ProcessingProgress({ steps, visible }: ProcessingProgressProps) {
  if (!visible) return null;

  return (
    <Card className="w-full max-w-md">
      <CardContent className="py-4 px-5 space-y-2">
        {steps.map((step) => (
          <div key={step.name} className="flex items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2">
              {step.status === "done" ? (
                <CheckCircle2 className="h-4 w-4 text-green-600 shrink-0" />
              ) : step.status === "running" ? (
                <Loader2 className="h-4 w-4 animate-spin text-primary shrink-0" />
              ) : (
                <Circle className="h-4 w-4 text-muted-foreground shrink-0" />
              )}
              <span className={step.status === "pending" ? "text-muted-foreground" : ""}>
                {step.label}
              </span>
            </div>
            <span className="tabular-nums text-xs text-muted-foreground">
              {step.status === "done"
                ? `${step.elapsed_s.toFixed(1)}s`
                : step.status === "running"
                  ? "..."
                  : "\u2014"}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
