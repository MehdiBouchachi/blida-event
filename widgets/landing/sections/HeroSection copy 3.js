"use client";

import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const heroStats = [
  { label: "Focus", value: "AI & Certification" },
  { label: "Audience", value: "Faculty & Leaders" },
  { label: "Format", value: "Academic Workshop" },
];

const metaItems = [
  {
    icon: FaCalendarAlt,
    label: "April 15, 2026",
  },
  {
    icon: FaMapMarkerAlt,
    label: "Blida 1 University",
  },
  {
    icon: HiAcademicCap,
    label: "Conference Room - Sports Complex",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "var(--color-primary-50)" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #eef4ff 0%, #f8fbff 45%, #edf3ff 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37,99,235,0.045) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37,99,235,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.08) 100%)",
          }}
        />

        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "-100px",
            width: "1080px",
            height: "620px",
            background:
              "radial-gradient(ellipse at center top, rgba(37,99,235,0.14) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute left-[10%] top-24 h-44 w-44 rounded-full blur-3xl"
          style={{ background: "rgba(37,99,235,0.10)" }}
        />

        <div
          className="absolute right-[8%] bottom-24 h-56 w-56 rounded-full blur-3xl"
          style={{ background: "rgba(59,130,246,0.08)" }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-28"
          style={{
            background:
              "linear-gradient(to top, rgba(37,99,235,0.05), transparent)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center text-center"
          style={{
            minHeight: "calc(100svh - 76px)",
            justifyContent: "center",
            paddingTop: "clamp(4.75rem, 10vw, 7.5rem)",
            paddingBottom: "clamp(3rem, 6vw, 5.25rem)",
          }}
        >
          {/* Eyebrow */}
          <div
            className="mb-6 sm:mb-7 inline-flex items-center gap-3 rounded-full border px-4 py-2 sm:px-5"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.92), rgba(255,255,255,0.82))",
              borderColor: "rgba(147,197,253,0.65)",
              boxShadow:
                "0 10px 30px rgba(37,99,235,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{
                  background: "rgba(37,99,235,0.28)",
                  animation: "ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite",
                }}
              />
              <span
                className="relative inline-flex h-2.5 w-2.5 rounded-full"
                style={{ background: "var(--color-blue-600)" }}
              />
            </span>

            <span
              className="text-[10.5px] sm:text-[11px] font-bold uppercase tracking-[0.22em]"
              style={{ color: "var(--color-blue-700)" }}
            >
              University 4.0 Week · April 2026
            </span>

            <span
              className="hidden sm:block h-4 w-px"
              style={{ background: "rgba(148,163,184,0.32)" }}
            />

            <span
              className="hidden sm:inline text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--color-primary-500)" }}
            >
              Academic Event
            </span>
          </div>

          {/* Small top label */}
          <p
            className="mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: "var(--color-blue-600)" }}
          >
            Blida 1 University
          </p>

          {/* Title */}
          <h1
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(2.1rem, 5vw, 4.25rem)",
              lineHeight: 1.02,
              color: "var(--color-primary-900)",
              maxWidth: "980px",
              letterSpacing: "-0.035em",
            }}
          >
            The Distance Learning Committee of{" "}
            <span style={{ color: "var(--color-blue-600)" }}>
              Blida 1 University
            </span>
          </h1>

          {/* Decorative line */}
          <div
            className="mt-6 h-1 rounded-full"
            style={{
              width: "72px",
              background:
                "linear-gradient(90deg, var(--color-blue-600), #93c5fd)",
              boxShadow: "0 4px 14px rgba(37,99,235,0.18)",
            }}
          />

          {/* Description */}
          <p
            className="mt-6 leading-relaxed"
            style={{
              color: "var(--color-primary-700)",
              maxWidth: "830px",
              fontSize: "clamp(1rem, 1.6vw, 1.12rem)",
            }}
          >
            A focused academic event for educators, pedagogical leaders, and
            institutional stakeholders exploring how AI can strengthen course
            design, improve learner engagement, and support certification-ready
            online education.
          </p>

          {/* Theme badge */}
          <div
            className="mt-6 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-2xl px-4 py-2.5 sm:px-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(29,78,216,0.12))",
              border: "1px solid rgba(191,219,254,0.92)",
              boxShadow: "0 8px 24px rgba(37,99,235,0.06)",
            }}
          >
            <HiAcademicCap
              size={16}
              style={{ color: "var(--color-blue-600)" }}
            />
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--color-blue-700)" }}
            >
              Pedagogical AI · Course Certification · University 4.0
            </span>
          </div>

          {/* Meta pills */}
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {metaItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm font-medium"
                  style={{
                    background: "rgba(255,255,255,0.76)",
                    border: "1px solid var(--color-primary-200)",
                    color: "var(--color-primary-700)",
                    boxShadow: "0 1px 2px rgba(15,23,42,0.03)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <Icon size={13} style={{ color: "var(--color-blue-600)" }} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:justify-center">
            <a
              href="#registration"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-7 py-3.5 text-white font-semibold text-sm transition-all hover:-translate-y-px"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-blue-600), var(--color-blue-700))",
                boxShadow:
                  "0 10px 28px rgba(37,99,235,0.22), 0 1px 3px rgba(37,99,235,0.16)",
              }}
            >
              Register Now
              <FaArrowRight size={11} />
            </a>

            <a
              href="#program"
              className="inline-flex items-center justify-center rounded-2xl px-7 py-3.5 font-semibold text-sm border transition-all hover:border-[var(--color-blue-300)] hover:bg-white/85"
              style={{
                color: "var(--color-primary-800)",
                borderColor: "var(--color-primary-200)",
                background: "rgba(255,255,255,0.68)",
                backdropFilter: "blur(8px)",
              }}
            >
              View Program
            </a>
          </div>

          {/* Support note */}
          <p
            className="mt-4 text-xs sm:text-sm"
            style={{ color: "var(--color-primary-500)" }}
          >
            Registration includes access to workshop resources and deliverables.
          </p>

          {/* Stats */}
          <div
            className="mt-10 grid w-full gap-3 sm:grid-cols-3"
            style={{ maxWidth: "680px" }}
          >
            {heroStats.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border px-4 py-4 text-center"
                style={{
                  background: "rgba(255,255,255,0.72)",
                  borderColor: "var(--color-primary-200)",
                  boxShadow: "0 1px 2px rgba(15,23,42,0.03)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p
                  className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-[0.18em]"
                  style={{ color: "var(--color-blue-600)" }}
                >
                  {c.label}
                </p>
                <p
                  className="mt-1.5 text-sm sm:text-[0.95rem] font-semibold leading-snug"
                  style={{ color: "var(--color-primary-900)" }}
                >
                  {c.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
