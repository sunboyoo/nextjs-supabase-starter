"use client";

type SaveButtonProps = {
  /** Click handler for the save action */
  onClick: () => void;
  /** Whether the button is disabled */
  disabled?: boolean;
  /** Whether to show loading/saving state */
  isSaving?: boolean;
  /** Whether the button is hidden (maintains space but invisible) */
  hidden?: boolean;
  /** Label text when not saving (default: "Save") */
  label?: string;
  /** Label text when saving (default: "Saving...") */
  savingLabel?: string;
};

/**
 * Shared save button component for sub-page headers.
 * iOS-style design with check icon and blue text.
 */
export function SaveButton({
  onClick,
  disabled,
  isSaving = false,
  hidden = false,
  label = "Save",
  savingLabel = "Saving...",
}: SaveButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || isSaving}
      className={`flex items-center gap-0.5 text-[#007aff] dark:text-[#0a84ff] hover:opacity-70 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed ${
        hidden ? "opacity-0 pointer-events-none" : ""
      }`}
      aria-hidden={hidden}
      tabIndex={hidden ? -1 : 0}
    >
      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
        check
      </span>
      <span className="text-base font-bold">{isSaving ? savingLabel : label}</span>
    </button>
  );
}
