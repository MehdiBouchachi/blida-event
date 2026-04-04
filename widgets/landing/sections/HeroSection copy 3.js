"use client";

import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const heroStats = [
  { label: "Focus", value: "AI & Certification" },
  { label: "Audience", value: "Faculty · Doctoral Students · Leaders" },
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
    label: "Conference Venue",
  },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--color-primary-50)]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#eef4ff_0%,#f8fbff_48%,#edf3ff_100%)]" />

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37,99,235,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37,99,235,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.58) 0%, rgba(0,0,0,0.08) 100%)",
          }}
        />

        <div className="absolute left-1/2 top-[-90px] h-[320px] w-[640px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.14)_0%,transparent_72%)] sm:h-[380px] sm:w-[760px] lg:h-[440px] lg:w-[920px]" />

        <div className="absolute left-[10%] top-24 h-28 w-28 rounded-full bg-blue-400/10 blur-3xl sm:h-36 sm:w-36" />
        <div className="absolute right-[8%] bottom-16 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl sm:h-40 sm:w-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-4 pt-24 pb-8 sm:px-6 sm:pt-28 sm:pb-10 lg:px-8">
        <div className="mx-auto w-full max-w-4xl text-center">
          {/* Eyebrow */}
          <div className="mb-5 flex justify-center">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200/80 bg-white/85 px-3 py-1.5 shadow-sm backdrop-blur sm:px-4">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500/30 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-blue-600)]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-blue-700)] sm:text-[11px]">
                University 4.0 Week
              </span>

              <span className="h-3.5 w-px bg-slate-300" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-[11px]">
                April 2026
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="mx-auto  text-[clamp(2rem,4.6vw,3.7rem)] font-bold leading-[1.02] tracking-[-0.04em] text-[var(--color-primary-900)] text-balance">
            Pedagogical AI &amp; Expertise in Online Course Certification{" "}
            <span className="text-[var(--color-blue-600)]">Day</span>
          </h1>

          {/* Accent line */}

          {/* Description */}
          <p className="mx-auto mt-5 max-w-5xl  text-[0.98rem] leading-7 text-[var(--color-primary-700)] sm:text-[1.03rem] sm:leading-8">
            A focused academic event for faculty members, doctoral students,
            pedagogical leaders, and institutional stakeholders exploring how AI
            can strengthen course design, improve learner engagement, and
            support certification-ready online education.
          </p>

          {/* CTA */}
          <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#registration"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--color-blue-600)] to-[var(--color-blue-700)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition-all hover:-translate-y-0.5"
            >
              Register Now
              <FaArrowRight size={11} />
            </a>

            <a
              href="#program"
              className="inline-flex min-h-[48px] items-center justify-center rounded-2xl border border-[var(--color-primary-200)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--color-primary-800)] backdrop-blur transition-all hover:border-[var(--color-blue-300)] hover:bg-white"
            >
              View Program
            </a>
          </div>

          {/* Meta */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {metaItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-medium text-[var(--color-primary-700)] shadow-sm backdrop-blur sm:px-4 sm:text-sm"
                >
                  <Icon size={13} className="text-[var(--color-blue-600)]" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>

          {/* Stats */}
          <div className="mx-auto mt-7 grid max-w-sm gap-3 sm:mt-8 sm:max-w-3xl sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-[var(--color-primary-200)] bg-white/80 px-4 py-3.5 text-center shadow-sm backdrop-blur"
              >
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-blue-600)]">
                  {stat.label}
                </p>
                <p className="mt-1 text-sm font-semibold leading-snug text-[var(--color-primary-900)] sm:text-[0.95rem]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
