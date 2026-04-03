"use client";

import { FaBookOpen, FaLayerGroup, FaCheckSquare } from "react-icons/fa";

const deliverables = [
  {
    icon: FaBookOpen,
    label: "Reference Guide",
    title: "Practitioner's Guide",
    description:
      "Comprehensive reference document covering all aspects of online course design and certification according to national standards. Includes regulatory framework, design principles, practical guidance, templates, checklists, and supporting resources.",
    meta: "Guide · PDF",
    styles: {
      icon: "bg-blue-50 text-blue-600 ring-blue-100",
      label: "text-blue-700",
      meta: "text-blue-700",
      hover: "hover:border-blue-200 hover:shadow-blue-100/70",
    },
  },
  {
    icon: FaLayerGroup,
    label: "Ready-to-Use Template",
    title: "Moodle Course Template",
    description:
      "Ready-to-use Moodle course template pre-configured with the 12-section structure, example content blocks, activity templates, and compliance-oriented organization. Import it and adapt it to your own course context.",
    meta: "Template · Moodle",
    styles: {
      icon: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      label: "text-emerald-700",
      meta: "text-emerald-700",
      hover: "hover:border-emerald-200 hover:shadow-emerald-100/70",
    },
  },
  {
    icon: FaCheckSquare,
    label: "Verification Tool",
    title: "Compliance Checklist",
    description:
      "Practical step-by-step checklist covering core certification requirements, common errors to avoid, documentation expectations, and verification points to review before submission.",
    meta: "Checklist · Practical",
    styles: {
      icon: "bg-violet-50 text-violet-600 ring-violet-100",
      label: "text-violet-700",
      meta: "text-violet-700",
      hover: "hover:border-violet-200 hover:shadow-violet-100/70",
    },
  },
];

function DeliverableCard({ item }) {
  const Icon = item.icon;

  return (
    <div
      className={`group h-full flex flex-col rounded-2xl border border-slate-200 bg-white p-6 sm:p-7 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${item.styles.hover}`}
    >
      {/* Content wrapper */}
      <div className="flex flex-col flex-1">
        {/* Top row */}
        <div className="mb-5 flex items-start justify-between">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 ring-inset ${item.styles.icon}`}
          >
            <Icon size={18} />
          </div>

          <div className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 ring-1 ring-inset ring-slate-200">
            Included
          </div>
        </div>

        {/* Label */}
        <p
          className={`mb-2 text-[11px] font-bold uppercase tracking-[0.16em] ${item.styles.label}`}
        >
          {item.label}
        </p>

        {/* Title */}
        <h3 className="mb-4 text-lg sm:text-xl font-semibold leading-tight tracking-tight text-slate-900">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm sm:text-[15px] leading-7 text-slate-700">
          {item.description}
        </p>

        {/* Footer (LOCKED AT BOTTOM) */}
        <div className="mt-auto pt-6 border-t border-slate-200 flex items-center justify-between">
          <p
            className={`text-xs font-semibold whitespace-nowrap ${item.styles.meta}`}
          >
            {item.meta}
          </p>

          <span className="text-xs font-medium text-slate-400">Resource</span>
        </div>
      </div>
    </div>
  );
}

function HighlightCard({ title, description, color }) {
  return (
    <div
      className={`rounded-xl border px-5 py-4 shadow-sm ${color.bg} ${color.border}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${color.dot}`} />
        <p
          className={`text-[11px] font-bold uppercase tracking-[0.14em] ${color.text}`}
        >
          {title}
        </p>
      </div>

      <p className="text-sm text-slate-700 leading-relaxed">{description}</p>
    </div>
  );
}

export default function WorkshopDeliverablesSection() {
  return (
    <section
      id="deliverables"
      className="py-16 sm:py-20"
      style={{ background: "var(--color-primary-50, #f8fafc)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p
            className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest"
            style={{ color: "var(--color-blue-600)" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Participant Resources
          </p>

          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-primary-900)", lineHeight: 1.2 }}
          >
            Workshop Deliverables You&apos;ll Receive
          </h2>

          <p
            className="mt-3 text-sm sm:text-[15px] leading-relaxed mx-auto"
            style={{ color: "var(--color-primary-700)", maxWidth: "760px" }}
          >
            Registered participants will receive practical materials designed to
            support course development, certification readiness, and
            post-workshop implementation.
          </p>
        </div>

        {/* Top strip */}
        <div className="mb-6 sm:mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <HighlightCard
            title="Practical"
            description="Resources you can use directly after the workshop."
            color={{
              bg: "bg-blue-50",
              border: "border-blue-100",
              text: "text-blue-700",
              dot: "bg-blue-600",
            }}
          />

          <HighlightCard
            title="Structured"
            description="Aligned with the program flow and certification logic."
            color={{
              bg: "bg-emerald-50",
              border: "border-emerald-100",
              text: "text-emerald-700",
              dot: "bg-emerald-600",
            }}
          />

          <HighlightCard
            title="Post-Workshop Use"
            description="Designed to support preparation, review, and implementation beyond the event day."
            color={{
              bg: "bg-violet-50",
              border: "border-violet-100",
              text: "text-violet-700",
              dot: "bg-violet-600",
            }}
          />
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-3 items-stretch">
          {deliverables.map((item) => (
            <DeliverableCard key={item.title} item={item} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white px-6 py-5 text-center shadow-sm">
          <p className="text-sm sm:text-[15px] leading-relaxed text-slate-700">
            These deliverables extend the workshop from a single academic event
            into a practical working base for course preparation and
            certification readiness.
          </p>
        </div>
      </div>
    </section>
  );
}
