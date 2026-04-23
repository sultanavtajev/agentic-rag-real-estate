import { Upload, Loader2, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type UploadPhase = "idle" | "uploading" | "processing" | "done";

interface UploadStepsProps {
  phase: UploadPhase;
}

const steps = [
  { key: "upload", label: "Last opp", icon: Upload },
  { key: "processing", label: "Prosessering", icon: Loader2 },
  { key: "done", label: "Klar for analyse", icon: CheckCircle2 },
] as const;

function phaseIndex(phase: UploadPhase): number {
  if (phase === "uploading") return 0;
  if (phase === "processing") return 1;
  if (phase === "done") return 2;
  return -1;
}

export function UploadSteps({ phase }: UploadStepsProps) {
  const active = phaseIndex(phase);

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {steps.map((step, i) => {
        const isActive = i === active;
        const isCompleted = i < active;
        const Icon = step.icon;

        return (
          <div key={step.key} className="flex items-center gap-2 sm:gap-3">
            <div
              className={cn(
                "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
                isCompleted && "bg-green-100 text-green-700",
                isActive && "bg-primary/10 text-primary",
                !isActive && !isCompleted && "bg-muted text-muted-foreground",
              )}
            >
              <Icon
                className={cn(
                  "h-3.5 w-3.5",
                  isActive && step.key === "processing" && "animate-spin",
                )}
              />
              <span className="hidden sm:inline">{step.label}</span>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight
                className={cn(
                  "h-3.5 w-3.5",
                  isCompleted ? "text-green-500" : "text-muted-foreground/40",
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
