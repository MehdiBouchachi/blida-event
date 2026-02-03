// ui/ModeSwitch.jsx
import React from "react";

export default function ModeSwitch({ value, onChange, tabs, className = "" }) {
  const handle = (id) => (e) => {
    e.preventDefault();
    onChange?.(id);
  };

  return (
    <div
      role="tablist"
      aria-label="Services view"
      className={[
        // mobile: full width, large touch target; desktop: auto width
        "relative inline-grid grid-cols-2 w-full sm:w-auto",
        "rounded-xl border p-1 shadow-sm pointer-events-auto touch-manipulation select-none",
        "border-[var(--tile-border)] bg-[var(--surface-0)]",
        className,
      ].join(" ")}
    >
      {tabs.map(({ id, label }) => {
        const active = value === id;
        return (
          <button
            key={id}
            type="button"
            role="tab"
            id={`tab-${id}`}
            aria-controls={`panel-${id}`}
            aria-selected={active}
            onClick={handle(id)}
            onPointerUp={handle(id)} /* improves iOS tap */
            className={[
              "px-3 py-2 text-sm font-semibold rounded-lg transition",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]",
              active
                ? "bg-[color:var(--cta-700)] text-[var(--cta-50)]"
                : "text-[var(--text-secondary)] hover:bg-[var(--surface-1)]",
            ].join(" ")}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
