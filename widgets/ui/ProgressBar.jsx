function ProgressBar({ total, index }) {
  const pct = ((index + 1) / total) * 100;
  const stepVar = `calc(100% / ${total})`;

  return (
    <div
      className="relative mx-auto mt-3 h-2 w-[68%] overflow-visible rounded-full"
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={index + 1}
      aria-label="Slide progress"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: "1px solid var(--tile-border)",
          background:
            "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,0))",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background: `repeating-linear-gradient(90deg,
            rgba(255,255,255,.22) 0 1px,
            transparent 1px ${stepVar})`,
          opacity: 0.35,
          maskImage: "linear-gradient(0deg, #000, #000)",
          WebkitMaskImage: "linear-gradient(0deg, #000, #000)",
        }}
      />
      <div
        className="absolute left-0 top-0 h-full rounded-full"
        style={{
          width: `${pct}%`,
          background:
            "linear-gradient(90deg, var(--brand-500), var(--brand-600))",
          boxShadow:
            "0 0 10px 0 color-mix(in srgb, var(--brand-600) 35%, transparent)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(255,255,255,.28) 0 12%, rgba(255,255,255,0) 30%)",
          backgroundSize: "200% 100%",
          animation: "ms_sweep 2.6s ease-in-out infinite",
          maskImage: `linear-gradient(90deg, #000 0 calc(${pct}% - 1.5px), transparent calc(${pct}% - 1.5px))`,
          WebkitMaskImage: `linear-gradient(90deg, #000 0 calc(${pct}% - 1.5px), transparent calc(${pct}% - 1.5px))`,
        }}
      />
      <style jsx>{`
        @keyframes ms_sweep {
          0% {
            background-position: -100% 0;
          }
          60% {
            background-position: 120% 0;
          }
          100% {
            background-position: 120% 0;
          }
        }
      `}</style>
    </div>
  );
}

export default ProgressBar;
