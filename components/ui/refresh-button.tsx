"use client";

import { Button } from "@/components/ui/button";

type RefreshButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  label: string;
};

/**
 * Shared refresh button component for page headers.
 * Uses shadcn Button with ghost variant and primary text color.
 */
export function RefreshButton({ onClick, disabled, label }: RefreshButtonProps) {
  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      className="gap-1.5 text-primary hover:text-primary/80"
      onClick={onClick}
      disabled={disabled}
    >
      <span className="material-symbols-outlined text-[20px]">refresh</span>
      <span className="text-sm font-semibold">{label}</span>
    </Button>
  );
}
