export default function Card({ title, subtitle, children, className = "" }) {
  return (
    <section
      className={`rounded-2xl border p-4 md:p-5 bg-[var(--surface-0)] ${className}`}
      style={{
        borderColor: "var(--tile-border)",
        boxShadow: "0 8px 28px -16px rgba(0,0,0,0.35)",
      }}
    >
      {(title || subtitle) && (
        <header className="mb-3">
          {title && <h2 className="text-base font-semibold">{title}</h2>}
          {subtitle && (
            <p className="text-sm text-[var(--text-secondary)]">{subtitle}</p>
          )}
        </header>
      )}
      {children}
    </section>
  );
}
