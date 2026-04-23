"use client";

import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StyledSelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  icon?: React.ReactNode;
}

const StyledSelect = forwardRef<HTMLSelectElement, StyledSelectProps>(
  ({ className, icon, children, ...props }, ref) => {
    return (
      <div className="relative">
        {icon && (
          <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {icon}
          </div>
        )}
        <select
          ref={ref}
          className={cn(
            "flex h-10 w-full appearance-none rounded-md border border-input bg-background text-sm ring-offset-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            icon ? "pl-10 pr-10" : "pl-3 pr-10",
            "py-2",
            className,
          )}
          {...props}
        >
          {children}
        </select>
        <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>
    );
  },
);
StyledSelect.displayName = "StyledSelect";

export { StyledSelect };
export type { StyledSelectProps };
