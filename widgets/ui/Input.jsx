import React from "react";

export function Label({ children, htmlFor, disabled }) {
  return (
    <label
      htmlFor={htmlFor}
      className={[
        "text-sm font-medium",
        disabled
          ? "text-[var(--text-secondary)] opacity-70 cursor-not-allowed"
          : "text-[var(--contact-ghost-text)]",
      ].join(" ")}
    >
      {children}
    </label>
  );
}

export function Err({ id, children }) {
  return (
    <div id={id} className="mt-1 text-xs text-[var(--contact-danger)]">
      {children}
    </div>
  );
}

export function Input({
  id,
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  error,
  disabled,
}) {
  const inputId = id || name;
  return (
    <div>
      <Label htmlFor={inputId} disabled={disabled}>
        {label}
      </Label>
      <input
        id={inputId}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={[
          "mt-1 w-full rounded-lg border px-3 py-2 outline-none transition",
          "bg-[var(--contact-input-bg)] border-[var(--contact-input-border)]",
          "text-[var(--contact-input-text)] focus:ring-4 focus:ring-[var(--contact-input-focus)]",

          "disabled:bg-[var(--surface-1)] disabled:text-[var(--text-secondary)] disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none",
          error
            ? "border-[var(--contact-danger)] focus:ring-[var(--contact-danger)]/30"
            : "",
        ].join(" ")}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-err` : undefined}
      />
      {error ? <Err id={`${inputId}-err`}>{error}</Err> : null}
    </div>
  );
}

export function TextArea({
  id,
  label,
  name,
  rows = 5,
  placeholder = "",
  value,
  onChange,
  error,
  disabled,
}) {
  const areaId = id || name;
  return (
    <div>
      <Label htmlFor={areaId} disabled={disabled}>
        {label}
      </Label>
      <textarea
        id={areaId}
        name={name}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={[
          "mt-1 w-full rounded-lg px-3 py-2 outline-none transition",
          "bg-[var(--contact-input-bg)] border border-[var(--contact-input-border)]",
          "text-[var(--contact-input-text)] focus:ring-4 focus:ring-[var(--contact-input-focus)]",

          "disabled:bg-[var(--surface-1)] disabled:text-[var(--text-secondary)] disabled:cursor-not-allowed disabled:opacity-70 disabled:shadow-none",
          error
            ? "border-[var(--contact-danger)] focus:ring-[var(--contact-danger)]/30"
            : "",
        ].join(" ")}
        aria-invalid={!!error}
        aria-describedby={error ? `${areaId}-err` : undefined}
      />
      {error ? <Err id={`${areaId}-err`}>{error}</Err> : null}
    </div>
  );
}
