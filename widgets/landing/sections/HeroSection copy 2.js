"use client";

import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const heroStats = [
  { label: "Focus", value: "AI & Certification" },
  { label: "Audience", value: "Faculty & Leaders" },
  { label: "Format", value: "Academic Workshop" },
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
              "linear-gradient(160deg, #eef4ff 0%, #f6f9ff 48%, #edf3ff 100%)",
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37,99,235,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37,99,235,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "58px 58px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.56) 0%, rgba(0,0,0,0.08) 100%)",
          }}
        />

        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "-90px",
            width: "980px",
            height: "560px",
            background:
              "radial-gradient(ellipse at center top, rgba(37,99,235,0.12) 0%, transparent 70%)",
          }}
        />

        <div
          className="absolute -left-24 top-28 h-48 w-48 rounded-full blur-3xl"
          style={{ background: "rgba(59,130,246,0.08)" }}
        />
        <div
          className="absolute -right-20 bottom-20 h-56 w-56 rounded-full blur-3xl"
          style={{ background: "rgba(37,99,235,0.08)" }}
        />

        <div
          className="absolute inset-x-0 bottom-0 h-24"
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
            paddingTop: "clamp(4.5rem, 10vw, 7rem)",
            paddingBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
          {/* Eyebrow */}
          <div
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 sm:px-5"
            style={{
              background: "rgba(255,255,255,0.84)",
              borderColor: "var(--color-blue-200)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 2px 10px rgba(37,99,235,0.07)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--color-blue-600)" }}
            />
            <span
              className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--color-blue-700)" }}
            >
              University 4.0 Week · April 2026
            </span>
          </div>

          {/* Support line */}
          <p
            className="mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em]"
            style={{ color: "var(--color-blue-600)" }}
          >
            Blida 1 University Academic Event
          </p>

          {/* Main title */}
          <h1
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(1.85rem, 5vw, 3.75rem)",
              lineHeight: 1.08,
              color: "var(--color-primary-900)",
              maxWidth: "980px",
              letterSpacing: "-0.03em",
            }}
          >
            Pedagogical AI &amp; Online Course Certification for{" "}
            <span style={{ color: "var(--color-blue-600)" }}>
              Blida 1 University
            </span>
          </h1>

          {/* Secondary heading */}
          <p
            className="mt-5 leading-relaxed"
            style={{
              color: "var(--color-primary-700)",
              maxWidth: "820px",
              fontSize: "clamp(0.98rem, 1.65vw, 1.125rem)",
            }}
          >
            A focused academic event for educators, pedagogical leaders, and
            institutional stakeholders exploring how AI can strengthen course
            design, improve learner engagement, and support certification-ready
            online education.
          </p>

          {/* Theme badge */}
          <div
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2.5"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(29,78,216,0.12))",
              border: "1px solid rgba(191,219,254,0.9)",
            }}
          >
            <HiAcademicCap
              size={15}
              style={{ color: "var(--color-blue-600)" }}
            />
            <span
              className="text-sm font-semibold"
              style={{ color: "var(--color-blue-700)" }}
            >
              University 4.0 · Pedagogical AI · Certification Readiness
            </span>
          </div>

          {/* Metadata */}
          <div
            className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-medium"
            style={{ color: "var(--color-primary-700)" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 border border-slate-200">
              <FaCalendarAlt
                size={12}
                style={{ color: "var(--color-blue-600)" }}
              />
              April 15, 2026
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 border border-slate-200">
              <FaMapMarkerAlt
                size={12}
                style={{ color: "var(--color-blue-600)" }}
              />
              Blida 1 University
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 border border-slate-200">
              <HiAcademicCap
                size={14}
                style={{ color: "var(--color-blue-600)" }}
              />
              Conference Venue
            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:w-auto sm:flex-row sm:justify-center">
            <a
              href="#registration"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3.5 text-white font-semibold text-sm transition-all hover:-translate-y-px"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-blue-600), var(--color-blue-700))",
                boxShadow:
                  "0 8px 24px rgba(37,99,235,0.22), 0 1px 3px rgba(37,99,235,0.14)",
              }}
            >
              Register Now
              <FaArrowRight size={11} />
            </a>

            <a
              href="#program"
              className="inline-flex items-center justify-center rounded-xl px-7 py-3.5 font-semibold text-sm border transition-all hover:border-[var(--color-blue-300)] hover:bg-white/85"
              style={{
                color: "var(--color-primary-800)",
                borderColor: "var(--color-primary-200)",
                background: "rgba(255,255,255,0.6)",
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

          {/* Info strip */}
          <div
            className="mt-10 grid w-full gap-3 sm:grid-cols-3"
            style={{ maxWidth: "620px" }}
          >
            {heroStats.map((c) => (
              <div
                key={c.label}
                className="rounded-2xl border px-4 py-4"
                style={{
                  background: "rgba(255,255,255,0.68)",
                  borderColor: "var(--color-primary-200)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 1px 2px rgba(15,23,42,0.03)",
                }}
              >
                <p
                  className="text-[0.62rem] font-bold uppercase tracking-[0.16em]"
                  style={{ color: "var(--color-blue-600)" }}
                >
                  {c.label}
                </p>
                <p
                  className="mt-1.5 text-sm sm:text-[0.92rem] font-semibold leading-snug"
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
