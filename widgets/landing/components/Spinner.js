import React from "react";

export default function Spinner({ label = "Loading…", size = "md" }) {
  const sizes = {
    sm: {
      spinner: "w-4 h-4 border-2",
      text: "text-xs",
    },
    md: {
      spinner: "w-6 h-6 border-[3px]",
      text: "text-sm",
    },
    lg: {
      spinner: "w-10 h-10 border-4",
      text: "text-base",
    },
  };

  const { spinner, text } = sizes[size] || sizes.md;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="inline-flex items-center gap-3"
    >
      {/* Spinner */}
      <div
        className={`
          ${spinner}
          rounded-full
          border-slate-200
          border-t-blue-600
          animate-spin
        `}
      />

      {/* Label */}
      {label && (
        <span className={`font-medium text-slate-600 ${text}`}>{label}</span>
      )}
    </div>
  );
}
