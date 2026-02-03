// app/components/hero/Wave.jsx
"use client";
import React, { useMemo } from "react";

export default function Wave({ className = "", tone = "moss" }) {
  const id = React.useId();

  const stops = useMemo(() => {
    const css =
      typeof window !== "undefined"
        ? getComputedStyle(document.documentElement)
        : null;
    const pick = (v, fb) => (css ? css.getPropertyValue(v).trim() || fb : fb);

    const map = {
      moss: {
        from: pick("--brand-300", "#9ED7BD"),
        to: pick("--brand-700", "#3C8B63"),
      },
      mint: {
        from: pick("--brand-200", "#CDEFE0"),
        to: pick("--brand-500", "#57A87A"),
      },
      sage: {
        from: pick("--brand-400", "#7FCFA7"),
        to: pick("--brand-600", "#4FA37D"),
      },
    };
    return map[tone] || map.moss;
  }, [tone]);

  const W = 800;
  const H = 160;

  const makePath = (A, cycles, phase, yOffset, steps = 180) => {
    const pts = [];
    for (let i = 0; i <= steps; i++) {
      const x = (i / steps) * W;
      const y = yOffset + A * Math.sin((2 * Math.PI * cycles * x) / W + phase);
      pts.push(`${x.toFixed(2)},${y.toFixed(2)}`);
    }
    return `M${pts[0]} L${pts.slice(1).join(" ")}`;
  };

  const d1 = makePath(12, 2, 0, H * 0.55);
  const d2 = makePath(16, 2, Math.PI / 3, H * 0.65);
  const d3 = makePath(10, 2, Math.PI * 0.66, H * 0.75);

  const Tile = () => (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className="w-1/2 h-full flex-none"
      aria-hidden="true"
    >
      <g
        fill="none"
        stroke={`url(#g-${id})`}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      >
        <path d={d1} strokeWidth="2" />
        <path d={d2} strokeWidth="3" />
        <path d={d3} strokeWidth="2.5" />
      </g>
    </svg>
  );

  return (
    <div
      className={`hero-wave pointer-events-none absolute w-full ${className}`}
      aria-hidden="true"
    >
      <svg width="0" height="0" aria-hidden="true">
        <defs>
          <linearGradient id={`g-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stops.from} stopOpacity="0.65" />
            <stop offset="100%" stopColor={stops.to} stopOpacity="0.25" />
          </linearGradient>
        </defs>
      </svg>

      <div className="hero-wave__strip flex w-[200%] h-full will-change-transform">
        <Tile />
        <Tile />
      </div>
    </div>
  );
}
