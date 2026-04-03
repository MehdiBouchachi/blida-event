"use client";

import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: "var(--color-primary-50)" }}
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #eef4ff 0%, #f5f9ff 50%, #eaf1ff 100%)",
          }}
        />
        {/* Academic grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37,99,235,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37,99,235,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.08) 100%)",
          }}
        />
        {/* Top center glow */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{
            top: "-60px",
            width: "900px",
            height: "500px",
            background:
              "radial-gradient(ellipse at center top, rgba(37,99,235,0.10) 0%, transparent 68%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(to top, rgba(37,99,235,0.05), transparent)",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex flex-col items-center text-center"
          style={{
            minHeight: "calc(100svh - 76px)",
            justifyContent: "center",
            paddingTop: "clamp(3rem, 8vw, 5.5rem)",
            paddingBottom: "clamp(2.5rem, 6vw, 4.5rem)",
          }}
        >
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5 mb-6"
            style={{
              background: "rgba(255,255,255,0.85)",
              borderColor: "var(--color-blue-200)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 1px 8px rgba(37,99,235,0.07)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--color-blue-600)" }}
            />
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-blue-700)" }}
            >
              University 4.0 Week · April 2026
            </span>
          </div>

          {/* ── Official H1 ── */}
          <h1
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(1.25rem, 2.6vw, 2rem)",
              lineHeight: 1.35,
              color: "var(--color-primary-900)",
              maxWidth: "860px",
              letterSpacing: "-0.01em",
            }}
          >
            The Local Committee for Distance Education and the Development of
            Information and Communication Technologies in the Pedagogical and
            Research Environment of the{" "}
            <span style={{ color: "var(--color-blue-600)" }}>
              Blida 1 University
            </span>
            .
          </h1>

          {/* Thin rule */}
          <div
            className="mt-6 mb-6 rounded-full"
            style={{
              width: "48px",
              height: "3px",
              background:
                "linear-gradient(90deg, var(--color-blue-600), var(--color-blue-300))",
            }}
          />

          {/* Event theme label */}
          <div
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 mb-5"
            style={{
              background:
                "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(29,78,216,0.12))",
              border: "1px solid rgba(191,219,254,0.8)",
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
              Pedagogical AI &amp; Online Course Certification
            </span>
          </div>

          {/* Description */}
          <p
            className="leading-relaxed"
            style={{
              color: "var(--color-primary-700)",
              maxWidth: "640px",
              fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
            }}
          >
            A focused academic event for university educators, pedagogical
            leaders, and institutional stakeholders exploring how AI can support
            course design, improve learner engagement, and align online programs
            with certification requirements.
          </p>

          {/* Metadata */}
          <div
            className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium"
            style={{ color: "var(--color-primary-700)" }}
          >
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt
                size={12}
                style={{ color: "var(--color-blue-600)" }}
              />
              April 15, 2026
            </span>
            <span
              className="hidden sm:inline self-center text-xs"
              style={{ color: "var(--color-blue-300)" }}
            >
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt
                size={12}
                style={{ color: "var(--color-blue-600)" }}
              />
              Blida 1 University
            </span>
            <span
              className="hidden sm:inline self-center text-xs"
              style={{ color: "var(--color-blue-300)" }}
            >
              ·
            </span>
            <span className="flex items-center gap-1.5">
              <HiAcademicCap
                size={14}
                style={{ color: "var(--color-blue-600)" }}
              />
              Conference venue
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="#registration"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-white font-semibold text-sm transition-all hover:-translate-y-px"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-blue-600), var(--color-blue-700))",
                boxShadow:
                  "0 6px 22px rgba(37,99,235,0.22), 0 1px 3px rgba(37,99,235,0.14)",
              }}
            >
              Register Now
              <FaArrowRight size={11} />
            </a>
            <a
              href="#schedule"
              className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold text-sm border transition-all hover:border-[var(--color-blue-300)] hover:bg-white/80"
              style={{
                color: "var(--color-primary-800)",
                borderColor: "var(--color-primary-200)",
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(8px)",
              }}
            >
              View Program
            </a>
          </div>

          {/* Info strip */}
          <div
            className="mt-9 grid grid-cols-3 gap-3 w-full"
            style={{ maxWidth: "520px" }}
          >
            {[
              { label: "Focus", value: "AI & Certification" },
              { label: "Audience", value: "Faculty & Leaders" },
              { label: "Format", value: "Academic Workshop" },
            ].map((c) => (
              <div
                key={c.label}
                className="rounded-xl border py-3 px-3"
                style={{
                  background: "rgba(255,255,255,0.65)",
                  borderColor: "var(--color-primary-200)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p
                  className="text-[0.6rem] font-bold uppercase tracking-widest"
                  style={{ color: "var(--color-blue-600)" }}
                >
                  {c.label}
                </p>
                <p
                  className="mt-1 text-[0.78rem] font-semibold leading-tight"
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
