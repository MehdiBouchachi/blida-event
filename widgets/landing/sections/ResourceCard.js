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
      iconBg: "#dbeafe",
      iconColor: "#1d4ed8",
      tagBg: "#dbeafe",
      tagColor: "#1e40af",
      tagBorder: "#93c5fd",
      ctaFrom: "#2563eb",
      ctaTo: "#1d4ed8",
      ctaShadow: "rgba(37,99,235,0.22)",
      dot: "#3b82f6",
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
      iconBg: "#d1fae5",
      iconColor: "#065f46",
      tagBg: "#d1fae5",
      tagColor: "#065f46",
      tagBorder: "#6ee7b7",
      ctaFrom: "#059669",
      ctaTo: "#047857",
      ctaShadow: "rgba(5,150,105,0.22)",
      dot: "#10b981",
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
      iconBg: "#ede9fe",
      iconColor: "#6d28d9",
      tagBg: "#ede9fe",
      tagColor: "#5b21b6",
      tagBorder: "#c4b5fd",
      ctaFrom: "#7c3aed",
      ctaTo: "#6d28d9",
      ctaShadow: "rgba(109,40,217,0.22)",
      dot: "#8b5cf6",
    },
  },
];

function ResourceMobileCard({ item, isLast }) {
  const Icon = item.icon;
  const c = item.color;

  return (
    <div className={`${!isLast ? "border-b border-slate-200" : ""} py-5`}>
      <div className="flex flex-col">
        {/* Top icon block */}
        <div className="mb-4 flex flex-col items-center text-center">
          <span
            className="mb-1 text-[10px] font-bold tabular-nums"
            style={{ color: c.dot, opacity: 0.72 }}
          >
            {item.index}
          </span>

          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl"
            style={{
              background: c.iconBg,
              color: c.iconColor,
              boxShadow: `0 0 0 1px ${c.tagBorder}`,
            }}
          >
            <Icon size={18} />
          </div>
        </div>

        {/* Title */}
        <h3
          className="text-center text-[1.2rem] font-semibold leading-snug tracking-tight"
          style={{ color: "var(--color-primary-900)" }}
        >
          {item.title}
        </h3>

        {/* Tag */}
        <div className="mt-3 flex justify-center">
          <span
            className="rounded-full px-2.5 py-1 text-[11px] font-semibold"
            style={{
              background: c.tagBg,
              color: c.tagColor,
              border: `1px solid ${c.tagBorder}`,
            }}
          >
            {item.tag}
          </span>
        </div>

        {/* Description */}
        <p
          className="mt-4 text-center text-sm leading-7"
          style={{ color: "var(--color-primary-700)" }}
        >
          {item.description}
        </p>

        {/* CTA */}
        <div className="mt-5">
          <a
            href={item.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition-all"
            style={{
              background: `linear-gradient(135deg, ${c.ctaFrom}, ${c.ctaTo})`,
              boxShadow: `0 4px 14px ${c.ctaShadow}`,
            }}
          >
            <FaDownload size={11} />
            {item.cta}
          </a>
        </div>
      </div>
    </div>
  );
}

function ResourceDesktopRow({ item, isLast }) {
  const Icon = item.icon;
  const c = item.color;

  return (
    <div
      className="group grid grid-cols-[52px_1fr_auto] sm:grid-cols-[60px_1fr_auto] items-center gap-4 sm:gap-6 py-5"
      style={{
        borderBottom: isLast ? "none" : "1px solid var(--color-primary-200)",
      }}
    >
      <div className="flex flex-col items-center gap-1.5">
        <span
          className="text-[0.58rem] font-bold tabular-nums"
          style={{ color: c.dot, opacity: 0.6 }}
        >
          {item.index}
        </span>
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center"
          style={{
            background: c.iconBg,
            color: c.iconColor,
            boxShadow: `0 0 0 1px ${c.tagBorder}`,
          }}
        >
          <Icon size={17} />
        </div>
      </div>

      <div className="min-w-0">
        <div className="flex items-center gap-2.5 flex-wrap mb-1">
          <h3
            className="text-lg sm:text-xl font-semibold tracking-tight"
            style={{ color: "var(--color-primary-900)" }}
          >
            {item.title}
          </h3>
          <span
            className="rounded-full px-2.5 py-0.5 text-[0.68rem] font-semibold"
            style={{
              background: c.tagBg,
              color: c.tagColor,
              border: `1px solid ${c.tagBorder}`,
            }}
          >
            {item.tag}
          </span>
        </div>
        <p
          className="text-sm sm:text-[15px] leading-relaxed"
          style={{ color: "var(--color-primary-700)", maxWidth: "560px" }}
        >
          {item.description}
        </p>
      </div>

      <div className="shrink-0">
        <a
          href={item.href}
          className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold text-white transition-all hover:-translate-y-px"
          style={{
            background: `linear-gradient(135deg, ${c.ctaFrom}, ${c.ctaTo})`,
            boxShadow: `0 4px 14px ${c.ctaShadow}`,
            whiteSpace: "nowrap",
          }}
        >
          <FaDownload size={10} />
          <span>{item.cta}</span>
        </a>
      </div>
    </div>
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
          className="max-w-2xl mx-auto text-center mb-8 sm:mb-10 pb-5 sm:pb-6"
          style={{ borderBottom: "2px solid var(--color-blue-600)" }}
        >
          <p
            className="text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 flex items-center justify-center gap-2"
            style={{ color: "var(--color-blue-600)" }}
          >
            Workshop Downloads
          </p>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3"
            style={{ color: "var(--color-primary-900)", lineHeight: 1.2 }}
          >
            Day Resources & Materials
          </h2>

          <p
            className="text-sm sm:text-[15px] leading-7 sm:leading-relaxed px-1"
            style={{ color: "var(--color-primary-700)" }}
          >
            Core materials to support preparation, implementation, and
            certification readiness beyond the event.
          </p>
        </div>

        {/* Mobile */}
        <div
          className="block md:hidden rounded-2xl border overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.92)",
            borderColor: "var(--color-primary-200)",
          }}
        >
          <div className="px-4">
            {resources.map((item, i) => (
              <ResourceMobileCard
                key={item.title}
                item={item}
                isLast={i === resources.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div
          className="hidden md:block rounded-2xl border overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.85)",
            borderColor: "var(--color-primary-200)",
          }}
        >
          <div
            className="grid grid-cols-[52px_1fr_auto] sm:grid-cols-[60px_1fr_auto] gap-4 sm:gap-6 px-5 sm:px-7 py-2.5"
            style={{
              background: "var(--color-blue-50,#eff6ff)",
              borderBottom: "1px solid var(--color-primary-200)",
            }}
          >
            <span
              className="text-[0.58rem] font-bold uppercase tracking-widest"
              style={{ color: "var(--color-blue-600)" }}
            >
              #
            </span>
            <span
              className="text-[0.58rem] font-bold uppercase tracking-widest"
              style={{ color: "var(--color-blue-600)" }}
            >
              Resource
            </span>
            <span
              className="text-[0.58rem] font-bold uppercase tracking-widest"
              style={{ color: "var(--color-blue-600)" }}
            >
              Access
            </span>
          </div>

          <div className="px-5 sm:px-7">
            {resources.map((item, i) => (
              <ResourceDesktopRow
                key={item.title}
                item={item}
                isLast={i === resources.length - 1}
              />
            ))}
          </div>
        </div>

        <p
          className="mt-5 text-xs text-center px-4"
          style={{ color: "var(--color-primary-600)" }}
        >
          All materials are distributed exclusively to registered participants.
        </p>
      </div>
    </section>
  );
}
