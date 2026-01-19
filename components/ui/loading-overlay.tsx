"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type LoadingOverlayProps = {
  open: boolean;
  label?: string;
  className?: string;
};

export function LoadingOverlay({
  open,
  label = "Loading...",
  className,
}: LoadingOverlayProps) {
  if (!open) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[60] flex items-center justify-center bg-black/15 backdrop-blur-sm cursor-wait dark:bg-black/55",
        className,
      )}
      role="status"
      aria-live="polite"
      aria-busy="true"
    >
      <Card className="flex items-center gap-3 border-white/40 bg-white/85 px-5 py-3 shadow-xl dark:border-white/10 dark:bg-black/70">
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="absolute h-5 w-5 rounded-full border-2 border-primary/25 border-t-primary motion-safe:animate-spin" />
        </span>
        <span className="text-xs font-medium text-foreground/80">{label}</span>
      </Card>
    </div>
  );
}
