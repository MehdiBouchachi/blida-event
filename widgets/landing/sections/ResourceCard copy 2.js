"use client";

import {
  FaBookOpen,
  FaBullseye,
  FaCheckSquare,
  FaArrowRight,
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
  },
];

function ResourceRow({ item, isLast }) {
  const Icon = item.icon;

  return (
    <div
      className="group grid grid-cols-[48px_1fr_auto] sm:grid-cols-[56px_1fr_auto] items-start gap-4 sm:gap-6 py-6"
      style={{
        borderBottom: isLast ? "none" : "1px solid var(--color-primary-200)",
      }}
    >
      {/* Index + icon stack */}
      <div className="flex flex-col items-center gap-2 pt-0.5">
        <span
          className="text-[0.6rem] font-bold tabular-nums"
          style={{ color: "var(--color-blue-300)" }}
        >
          {item.index}
        </span>
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: "var(--color-blue-50,#eff6ff)",
            color: "var(--color-blue-600)",
          }}
        >
          <Icon size={16} />
        </div>
      </div>

      {/* Text */}
      <div className="min-w-0">
        <div className="flex items-center gap-3 flex-wrap">
          <h3
            className="text-lg sm:text-xl font-semibold tracking-tight"
            style={{ color: "var(--color-primary-900)" }}
          >
            {item.title}
          </h3>
          <span
            className="rounded-md px-2 py-0.5 text-xs font-medium"
            style={{
              background: "var(--color-blue-50,#eff6ff)",
              color: "var(--color-blue-700)",
              border: "1px solid var(--color-blue-200)",
            }}
          >
            {item.tag}
          </span>
        </div>
        <p
          className="mt-1.5 text-sm sm:text-[15px] leading-relaxed max-w-2xl"
          style={{ color: "var(--color-primary-700)" }}
        >
          {item.description}
        </p>
      </div>

      {/* CTA */}
      <div className="pt-1 shrink-0">
        <a
          href={item.href}
          className="inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-xs font-semibold text-white transition-all hover:-translate-y-px"
          style={{
            background:
              "linear-gradient(135deg, var(--color-blue-600), var(--color-blue-700))",
            boxShadow: "0 4px 14px rgba(37,99,235,0.18)",
            whiteSpace: "nowrap",
          }}
        >
          <FaDownload size={10} />
          <span className="hidden sm:inline">{item.cta}</span>
          <span className="sm:hidden">Get</span>
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
        {/* Two-column header split */}
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

        {/* Resource list */}
        <div
          className="rounded-2xl border overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.8)",
            borderColor: "var(--color-primary-200)",
          }}
        >
          {/* List header */}
          <div
            className="grid grid-cols-[48px_1fr_auto] sm:grid-cols-[56px_1fr_auto] gap-4 sm:gap-6 px-5 sm:px-7 py-3"
            style={{
              background: "var(--color-blue-50,#eff6ff)",
              borderBottom: "1px solid var(--color-primary-200)",
            }}
          >
            <span
              className="text-[0.6rem] font-bold uppercase tracking-widest"
              style={{ color: "var(--color-blue-600)" }}
            >
              #
            </span>
            <span
              className="text-[0.6rem] font-bold uppercase tracking-widest"
              style={{ color: "var(--color-blue-600)" }}
            >
              Resource
            </span>
            <span
              className="text-[0.6rem] font-bold uppercase tracking-widest"
              style={{ color: "var(--color-blue-600)" }}
            >
              Access
            </span>
          </div>

          {/* Rows */}
          <div className="px-5 sm:px-7">
            {resources.map((item, i) => (
              <ResourceRow
                key={item.title}
                item={item}
                isLast={i === resources.length - 1}
              />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <p
          className="mt-5 text-xs text-center"
          style={{ color: "var(--color-primary-600)" }}
        >
          All materials are distributed exclusively to registered participants.
        </p>
      </div>
    </section>
  );
}
