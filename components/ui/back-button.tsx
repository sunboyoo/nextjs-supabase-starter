"use client";

import Link from "next/link";

type BackButtonProps = {
  /** The URL to navigate to when clicked (uses Next.js Link) */
  href?: string;
  /** Click handler for button mode (when href is not provided) */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** The label text to display */
  label: string;
};

/**
 * Shared back button component for sub-page headers.
 * iOS-style design with chevron_left icon and blue text.
 * 
 * Supports two modes:
 * - Link mode: provide `href` for static navigation
 * - Button mode: provide `onClick` for dynamic navigation
 */
export function BackButton({ href, onClick, disabled, label }: BackButtonProps) {
  const className =
    "flex items-center text-[#007aff] dark:text-[#0a84ff] hover:opacity-70 transition-opacity z-10 -ml-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const content = (
    <>
      <span className="material-symbols-outlined text-[28px]">chevron_left</span>
      <span className="text-[17px] font-normal leading-none pb-0.5">{label}</span>
    </>
  );

  if (href && !onClick) {
    return (
      <Link
        href={href}
        className={className}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}
