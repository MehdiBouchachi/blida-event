"use client";

import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const heroStats = [
  { label: "Focus", value: "AI & Certification" },
  { label: "Audience", value: "Faculty · Doctoral Students · Leaders" },
  { label: "Format", value: "Academic Workshop" },
];

const metaItems = [
  { icon: FaCalendarAlt, label: "April 15, 2026" },
  { icon: FaMapMarkerAlt, label: "Blida 1 University" },
  { icon: HiAcademicCap, label: "Conference Room - Architecture Institute" },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[var(--color-primary-50)]"
    >
      {/* ── Background ── */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#eef4ff_0%,#f8fbff_48%,#edf3ff_100%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37,99,235,0.045) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37,99,235,0.045) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 85%)",
          }}
        />
        <div className="absolute left-1/2 -top-20 h-[440px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.13)_0%,transparent_70%)]" />
        <div className="absolute left-[6%] top-1/3 h-40 w-40 rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute right-[6%] bottom-1/4 h-44 w-44 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#edf3ff]/60 to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-center px-4 pb-12 pt-40 text-center sm:px-6 sm:pt-32 lg:px-8">
        {/* ── Eyebrow ── */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-blue-200/80 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm sm:px-5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-blue-600)]" />
            </span>
            <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-[var(--color-blue-700)]">
              University 4.0 Week
            </span>
            <span className="h-3.5 w-px bg-slate-200" />
            <span className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              April 2026
            </span>
          </div>
        </div>

        {/* ── Title ── */}
        <h1 className="mx-auto max-w-4xl text-balance text-[clamp(2.1rem,4.8vw,3.8rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--color-primary-900)]">
          Pedagogical AI &amp; Expertise in <br className="hidden sm:block" />
          Online Course{" "}
          <span className="relative inline-block">
            <span className="text-[var(--color-blue-600)]">
              Certification Day
            </span>
          </span>
        </h1>

        {/* ── Description ── */}
        <p className="mx-auto mt-6 max-w-2xl text-[clamp(0.9rem,1.7vw,1.02rem)] leading-[1.85] text-[var(--color-primary-600)]">
          A focused academic event for{" "}
          <span className="font-semibold text-[var(--color-primary-800)]">
            faculty members
          </span>
          ,{" "}
          <span className="font-semibold text-[var(--color-primary-800)]">
            doctoral students
          </span>
          , pedagogical leaders, and institutional stakeholders — exploring how
          AI can strengthen course design, improve learner engagement, and
          online course certification.
        </p>

        {/* ── CTAs ── */}
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

        {/* ── Meta pills ── */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
          {metaItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-medium text-[var(--color-primary-700)] shadow-sm backdrop-blur-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-white hover:shadow sm:text-[0.8rem]"
            >
              <Icon
                size={12}
                className="shrink-0 text-[var(--color-blue-600)]"
              />
              {label}
            </div>
          ))}
        </div>

        {/* ── Divider ── */}
        <div className="mt-10 flex w-full max-w-sm items-center gap-4 sm:max-w-xl">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <span className="shrink-0 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-slate-400">
            Event at a Glance
          </span>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>

        {/* ── Stat cards ── */}
        <div className="mt-4 grid w-full max-w-sm grid-cols-1 gap-3 sm:max-w-3xl sm:grid-cols-3">
          {heroStats.map(({ label, value }) => (
            <div
              key={label}
              className="rounded-2xl border border-[var(--color-primary-200)] bg-white/80 px-5 py-4 text-center shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-md"
            >
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--color-blue-600)]">
                {label}
              </p>
              <p className="text-[0.875rem] font-semibold leading-snug text-[var(--color-primary-900)] sm:text-[0.9rem]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
