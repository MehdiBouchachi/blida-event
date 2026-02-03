// components/ui/TileCheck.jsx
"use client";

import { useId } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

/**
 * Card-style checkbox (native input + label)
 * Props: checked, onChange(next), children, disabled=false, className=""
 */
export default function TileCheck({
  checked,
  onChange,
  children,
  disabled = false,
  className = "",
}) {
  const id = useId();

  return (
    <div className={className}>
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />

      <label
        htmlFor={id}
        className={[
          // layout
          "block rounded-2xl border p-3 sm:p-4",
          "transition shadow-[0_0_0_0_rgba(0,0,0,0)]",
          "focus:outline-none peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--brand-600)]",
          // states
          "hover:bg-[var(--surface-1)]",
          "peer-checked:bg-[color:color-mix(in_srgb,var(--brand-600)_8%,transparent)]",
          "peer-checked:shadow-[0_6px_20px_-8px_color-mix(in_srgb,var(--brand-600)_35%,transparent)]",
        ].join(" ")}
        style={{
          borderColor: checked ? "var(--brand-600)" : "var(--tile-border)",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.6 : 1,
          background: checked
            ? "color-mix(in srgb, var(--brand-600) 8%, transparent)"
            : "var(--surface-0)",
        }}
      >
        <span className="flex items-center gap-3">
          {/* indicator */}
          <span
            aria-hidden
            className="grid h-5 w-5 place-items-center rounded-md border transition"
            style={{
              borderColor: checked ? "var(--brand-600)" : "var(--tile-border)",
              background: checked ? "var(--brand-600)" : "var(--surface-0)",
            }}
          >
            {checked ? <CheckIcon className="h-3.5 w-3.5 text-white" /> : null}
          </span>

          {/* label text (no truncation) */}
          <span className="text-sm font-semibold leading-5 text-[var(--text-primary)]">
            {children}
          </span>
        </span>
      </label>
    </div>
  );
}
