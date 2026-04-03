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
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5"
            style={{
              background: "rgba(255,255,255,0.84)",
              borderColor: "var(--color-blue-200)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--color-blue-600)" }}
            />
            <span
              className="text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: "var(--color-blue-700)" }}
            >
              University 4.0 Week · April 2026
            </span>
          </div>

          {/* H1 (NEW TITLE) */}
          <h1
            className="font-bold tracking-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              lineHeight: 1.05,
              color: "var(--color-primary-900)",
              maxWidth: "900px",
              letterSpacing: "-0.02em",
            }}
          >
            The Distance Learning Committee of{" "}
            <span style={{ color: "var(--color-blue-600)" }}>
              Blida 1 University
            </span>
          </h1>

          {/* Description */}
          <p
            className="mt-5 leading-relaxed"
            style={{
              color: "var(--color-primary-700)",
              maxWidth: "820px",
              fontSize: "clamp(0.98rem, 1.6vw, 1.1rem)",
            }}
          >
            A focused academic event for educators, pedagogical leaders, and
            institutional stakeholders exploring how AI can strengthen course
            design, improve learner engagement, and support certification-ready
            online education.
          </p>

          {/* Theme badge */}
          <div
            className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2"
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
              Pedagogical AI · Course Certification · University 4.0
            </span>
          </div>

          {/* Metadata */}
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm">
            <span className="flex items-center gap-2">
              <FaCalendarAlt
                size={12}
                style={{ color: "var(--color-blue-600)" }}
              />
              April 15, 2026
            </span>

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt
                size={12}
                style={{ color: "var(--color-blue-600)" }}
              />
              Blida 1 University
            </span>

            <span className="flex items-center gap-2">
              <HiAcademicCap
                size={14}
                style={{ color: "var(--color-blue-600)" }}
              />
               Conference Room - Sports Complex",

            </span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#registration"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-7 py-3 text-white font-semibold text-sm"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-blue-600), var(--color-blue-700))",
              }}
            >
              Register Now
              <FaArrowRight size={11} />
            </a>

            <a
              href="#program"
              className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-semibold text-sm border"
              style={{
                color: "var(--color-primary-800)",
                borderColor: "var(--color-primary-200)",
                background: "rgba(255,255,255,0.6)",
              }}
            >
              View Program
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid w-full max-w-md sm:max-w-2xl sm:grid-cols-3 gap-3">
            {heroStats.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border px-4 py-3 text-center"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  borderColor: "var(--color-primary-200)",
                }}
              >
                <p className="text-[10px] font-bold uppercase text-blue-600">
                  {c.label}
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-1">
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
