"use client";

import {
  FaBookOpen,
  FaBullseye,
  FaCheckSquare,
  FaDownload,
} from "react-icons/fa";

const resources = [
  {
    icon: FaBookOpen,
    index: "01",
    title: "Practitioner's Guide",
    description:
      "Comprehensive guide covering the complete certification process, regulatory requirements, and best practices for online course design.",
    cta: "Download PDF",
    href: "#",
    tag: "PDF · 2.4 MB",
    color: {
      accent: "#1d4ed8", // blue-700
      accentLight: "#dbeafe", // blue-100
      accentMid: "#93c5fd", // blue-300
      iconBg: "#eff6ff", // blue-50
      iconColor: "#1d4ed8",
      tagBg: "#dbeafe",
      tagColor: "#1e40af",
      barFrom: "#3b82f6",
      barTo: "#1d4ed8",
      ctaBg: "linear-gradient(135deg,#2563eb,#1d4ed8)",
      ctaShadow: "rgba(37,99,235,0.22)",
      topBorder: "#2563eb",
    },
  },
  {
    icon: FaBullseye,
    index: "02",
    title: "Moodle Course Template",
    description:
      "Ready-to-use Moodle course template with the 12-section structure aligned with national pedagogical charter standards.",
    cta: "Download Template",
    href: "#",
    tag: "ZIP · 1.1 MB",
    color: {
      accent: "#0f766e",
      accentLight: "#ccfbf1",
      accentMid: "#5eead4",
      iconBg: "#f0fdfa",
      iconColor: "#0f766e",
      tagBg: "#ccfbf1",
      tagColor: "#0f766e",
      barFrom: "#14b8a6",
      barTo: "#0f766e",
      ctaBg: "linear-gradient(135deg,#0d9488,#0f766e)",
      ctaShadow: "rgba(15,118,110,0.22)",
      topBorder: "#0d9488",
    },
  },
  {
    icon: FaCheckSquare,
    index: "03",
    title: "Compliance Checklist",
    description:
      "Step-by-step checklist to ensure your online course meets all national certification requirements and quality standards.",
    cta: "Download Checklist",
    href: "#",
    tag: "PDF · 340 KB",
    color: {
      accent: "#9333ea",
      accentLight: "#f3e8ff",
      accentMid: "#d8b4fe",
      iconBg: "#faf5ff",
      iconColor: "#9333ea",
      tagBg: "#f3e8ff",
      tagColor: "#7e22ce",
      barFrom: "#a855f7",
      barTo: "#9333ea",
      ctaBg: "linear-gradient(135deg,#a855f7,#9333ea)",
      ctaShadow: "rgba(147,51,234,0.22)",
      topBorder: "#a855f7",
    },
  },
];

function ResourceCard({ item }) {
  const Icon = item.icon;
  const c = item.color;

  return (
    <article
      className="relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-0.5"
      style={{
        background: "#ffffff",
        borderColor: c.accentMid,
        boxShadow: `0 2px 12px ${c.ctaShadow}`,
      }}
    >
      {/* Top color bar */}
      <div
        className="h-1 w-full shrink-0"
        style={{
          background: `linear-gradient(90deg, ${c.barFrom}, ${c.barTo})`,
        }}
      />

      <div className="flex flex-col flex-1 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Icon */}
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: c.iconBg, color: c.iconColor }}
          >
            <Icon size={18} />
          </div>

          {/* Index + tag stacked */}
          <div className="flex flex-col items-end gap-1.5">
            <span
              className="text-[0.6rem] font-bold tabular-nums"
              style={{ color: c.accentMid }}
            >
              {item.index}
            </span>
            <span
              className="rounded-md px-2.5 py-0.5 text-[0.68rem] font-semibold"
              style={{ background: c.tagBg, color: c.tagColor }}
            >
              {item.tag}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-lg sm:text-xl font-bold tracking-tight leading-snug"
          style={{ color: "var(--color-primary-900)" }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className="mt-2.5 text-sm sm:text-[15px] leading-relaxed flex-1"
          style={{ color: "var(--color-primary-700)" }}
        >
          {item.description}
        </p>

        {/* Divider */}
        <div className="my-5 h-px" style={{ background: c.accentLight }} />

        {/* CTA */}
        <a
          href={item.href}
          className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-semibold text-white transition-all hover:opacity-90"
          style={{
            background: c.ctaBg,
            boxShadow: `0 4px 16px ${c.ctaShadow}`,
          }}
        >
          <FaDownload size={11} />
          {item.cta}
        </a>
      </div>
    </article>
  );
}

export default function DayResourcesSection() {
  return (
    <section
      id="resources"
      className="py-16 sm:py-20"
      style={{ background: "var(--color-primary-50)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className="grid lg:grid-cols-[1fr_auto] items-end gap-6 mb-10 pb-6"
          style={{ borderBottom: "2px solid var(--color-blue-600)" }}
        >
          <div>
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2"
              style={{ color: "var(--color-blue-600)" }}
            >
              Workshop Downloads
            </p>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
              style={{ color: "var(--color-primary-900)", lineHeight: 1.2 }}
            >
              Day Resources &amp; Materials
            </h2>
          </div>
          <p
            className="text-sm sm:text-[15px] leading-relaxed lg:max-w-sm lg:text-right"
            style={{ color: "var(--color-primary-700)" }}
          >
            Core materials to support preparation, implementation, and
            certification readiness beyond the event.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {resources.map((item) => (
            <ResourceCard key={item.title} item={item} />
          ))}
        </div>

        {/* Footer note */}
        <p
          className="mt-6 text-xs text-center"
          style={{ color: "var(--color-primary-600)" }}
        >
          All materials are distributed exclusively to registered participants.
        </p>
      </div>
    </section>
  );
}
