"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  CheckCircle2,
  Circle,
  Loader2,
  XCircle,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

type StepStatus = "pending" | "running" | "done" | "error";

export interface SubStep {
  id?: string;
  label: string;
  /** Estimated duration in ms — used to auto-advance while parent is running */
  estimatedMs?: number;
  /** Explicit status set by SSE — overrides timer-based estimation */
  status?: StepStatus;
  /** Detail text from SSE (e.g. "Iterasjon 2/2") */
  detail?: string;
}

export interface Step {
  label: string;
  status: StepStatus;
  error?: string;
  substeps?: SubStep[];
}

// ---------------------------------------------------------------------------
// Hooks
// ---------------------------------------------------------------------------

function useElapsed(running: boolean) {
  const [elapsed, setElapsed] = useState(0);
  const startRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    startRef.current = Date.now();
    const id = setInterval(() => {
      setElapsed(Date.now() - startRef.current);
    }, 1000);
    return () => {
      clearInterval(id);
      setElapsed(0);
    };
  }, [running]);

  return elapsed;
}

/**
 * Derives sub-step statuses from the parent step status and elapsed time.
 * If substeps have explicit status (from SSE), those are used directly.
 * Otherwise falls back to timer-based auto-advance.
 */
function useSubStepStatuses(
  parentStatus: StepStatus,
  substeps: SubStep[] | undefined,
): StepStatus[] {
  const [activeIdx, setActiveIdx] = useState(-1);
  const startRef = useRef(0);

  // Check if any substep has explicit SSE status
  const hasExplicitStatus = substeps?.some((s) => s.status !== undefined);

  // Compute cumulative thresholds once (for timer-based fallback)
  const thresholds = useRef<number[]>([]);
  useEffect(() => {
    if (!substeps || hasExplicitStatus) return;
    let acc = 0;
    thresholds.current = substeps.map((s) => {
      acc += s.estimatedMs ?? 3000;
      return acc;
    });
  }, [substeps, hasExplicitStatus]);

  // Advance timer while running (only if no explicit SSE status)
  useEffect(() => {
    if (parentStatus !== "running" || !substeps?.length || hasExplicitStatus) {
      return;
    }
    startRef.current = Date.now();

    const advance = () => {
      const elapsed = Date.now() - startRef.current;
      const t = thresholds.current;
      let idx = 0;
      while (idx < t.length - 1 && elapsed >= t[idx]) {
        idx++;
      }
      setActiveIdx(idx);
    };

    const rafId = requestAnimationFrame(advance);
    const id = setInterval(advance, 500);

    return () => {
      cancelAnimationFrame(rafId);
      clearInterval(id);
      setActiveIdx(-1);
    };
  }, [parentStatus, substeps, hasExplicitStatus]);

  if (!substeps?.length) return [];

  // If substeps have explicit SSE-driven status, use those directly
  if (hasExplicitStatus) {
    return substeps.map((s) => {
      if (s.status) return s.status;
      // Infer from parent
      if (parentStatus === "done") return "done" as StepStatus;
      return "pending" as StepStatus;
    });
  }

  if (parentStatus === "done") {
    return substeps.map(() => "done" as StepStatus);
  }

  if (parentStatus === "error") {
    return substeps.map((_, i) => {
      if (i < activeIdx) return "done" as StepStatus;
      if (i === activeIdx) return "error" as StepStatus;
      return "pending" as StepStatus;
    });
  }

  if (parentStatus === "running") {
    return substeps.map((_, i) => {
      if (i < activeIdx) return "done" as StepStatus;
      if (i === activeIdx) return "running" as StepStatus;
      return "pending" as StepStatus;
    });
  }

  // pending
  return substeps.map(() => "pending" as StepStatus);
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatElapsed(ms: number): string {
  const s = Math.floor(ms / 1000);
  if (s < 60) return `${s}s`;
  return `${Math.floor(s / 60)}m ${s % 60}s`;
}

const ICON_SIZE_MAIN = "h-5 w-5";
const ICON_SIZE_SUB = "h-3.5 w-3.5";

function StatusIcon({ status, small }: { status: StepStatus; small?: boolean }) {
  const sz = small ? ICON_SIZE_SUB : ICON_SIZE_MAIN;
  switch (status) {
    case "done":
      return <CheckCircle2 className={cn(sz, "text-green-600")} />;
    case "running":
      return <Loader2 className={cn(sz, "animate-spin text-blue-600")} />;
    case "error":
      return <XCircle className={cn(sz, "text-red-600")} />;
    default:
      return <Circle className={cn(sz, "text-muted-foreground/40")} />;
  }
}

// ---------------------------------------------------------------------------
// Sub-step row
// ---------------------------------------------------------------------------

function SubStepRow({
  label,
  status,
  detail,
}: {
  label: string;
  status: StepStatus;
  detail?: string;
}) {
  return (
    <div className="flex items-center gap-2 py-0.5">
      <ChevronRight className="h-3 w-3 text-muted-foreground/50 shrink-0" />
      <StatusIcon status={status} small />
      <span
        className={cn(
          "text-xs",
          status === "running" && "font-medium text-blue-700",
          status === "pending" && "text-muted-foreground/60",
          status === "done" && "text-muted-foreground",
          status === "error" && "text-red-600",
        )}
      >
        {label}
      </span>
      {detail && status === "running" && (
        <span className="text-xs text-blue-500/80">{detail}</span>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main step row (with optional sub-steps)
// ---------------------------------------------------------------------------

function StepRow({
  step,
  isLast,
  elapsed,
}: {
  step: Step;
  isLast: boolean;
  elapsed: number;
}) {
  const subStatuses = useSubStepStatuses(step.status, step.substeps);
  const showSubs =
    step.substeps &&
    step.substeps.length > 0 &&
    step.status !== "pending";

  return (
    <div className="relative flex gap-3 pb-4 last:pb-0">
      {/* Vertical connector line */}
      {!isLast && (
        <div
          className={cn(
            "absolute left-[9px] top-6 w-0.5",
            step.status === "done" ? "bg-green-300" : "bg-muted-foreground/20",
            showSubs
              ? "h-[calc(100%-8px)]"
              : "h-[calc(100%-8px)]",
          )}
        />
      )}

      {/* Icon */}
      <div className="relative z-10 shrink-0">
        <StatusIcon status={step.status} />
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* Main label row */}
        <div className="flex items-baseline gap-2">
          <span
            className={cn(
              "text-sm",
              step.status === "running" && "font-medium text-blue-700",
              step.status === "pending" && "text-muted-foreground",
              step.status === "done" && "text-foreground",
              step.status === "error" && "text-red-700 font-medium",
            )}
          >
            {step.label}
          </span>
          {step.status === "running" && elapsed > 0 && (
            <span className="whitespace-nowrap rounded-full bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700">
              {formatElapsed(elapsed)}
            </span>
          )}
          {step.error && (
            <span className="text-xs text-red-600">{step.error}</span>
          )}
        </div>

        {/* Sub-steps */}
        {showSubs && (
          <div className="ml-1 mt-1 space-y-0">
            {step.substeps!.map((sub, j) => (
              <SubStepRow
                key={sub.id ?? j}
                label={sub.label}
                status={subStatuses[j] ?? "pending"}
                detail={sub.detail}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

interface ProgressStepsProps {
  steps: Step[];
}

export function ProgressSteps({ steps }: ProgressStepsProps) {
  const isRunning = steps.some((s) => s.status === "running");
  const elapsed = useElapsed(isRunning);

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="relative space-y-0">
          {steps.map((step, i) => (
            <StepRow
              key={i}
              step={step}
              isLast={i === steps.length - 1}
              elapsed={step.status === "running" ? elapsed : 0}
            />
          ))}
        </div>
        {isRunning && (
          <p className="mt-3 animate-pulse text-xs text-muted-foreground">
            The analysis may take 30-120 seconds depending on document size...
          </p>
        )}
      </CardContent>
    </Card>
  );
}
