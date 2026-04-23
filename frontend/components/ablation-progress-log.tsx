"use client";

import { useEffect, useRef } from "react";
import { Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import type { AblationRunProgress } from "@/lib/types";

interface Props {
  events: AblationRunProgress[];
  totalSteps: number;
  completedSteps: number;
}

function formatEvent(e: AblationRunProgress): string {
  if (e.status === "completed" && e.f1 !== undefined) {
    return `${e.document_set_id}: ${e.config_label} → F1=${(e.f1 * 100).toFixed(1)}%`;
  }
  if (e.status === "error") {
    return `${e.document_set_id}: ${e.config_label} → Feil: ${e.message}`;
  }
  if (e.status === "done") {
    return e.message || "Ferdig";
  }
  return `${e.document_set_id}: ${e.config_label} → ${e.message}`;
}

export function AblationProgressLog({
  events,
  totalSteps,
  completedSteps,
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressPct =
    totalSteps > 0 ? Math.round((completedSteps / totalSteps) * 100) : 0;

  const isRunning = events.some((e) => e.status === "running");

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [events.length]);

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Fremdrift</h2>
        {isRunning && <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />}
      </div>

      <div className="space-y-1">
        <p className="text-xs text-muted-foreground">
          {completedSteps}/{totalSteps} steg fullfort ({progressPct}%)
        </p>
        <Progress value={progressPct} className="h-2" />
      </div>

      <div
        ref={scrollRef}
        className="max-h-64 overflow-y-auto rounded-md border bg-muted/50 p-3 text-sm font-mono space-y-1"
      >
        {events.length === 0 && (
          <p className="text-muted-foreground">Venter pa events...</p>
        )}
        {events.map((e, i) => (
          <div
            key={i}
            className={
              e.status === "error"
                ? "text-red-600"
                : e.status === "completed"
                  ? "text-green-700 dark:text-green-400"
                  : "text-foreground"
            }
          >
            {formatEvent(e)}
          </div>
        ))}
      </div>
    </section>
  );
}
