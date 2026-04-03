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
    <section id="hero" className="relative overflow-hidden bg-[#f4f8ff]">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(160deg,#eef4ff_0%,#f6f9ff_48%,#edf3ff_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(37,99,235,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(37,99,235,0.035)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute left-1/2 top-[-140px] h-[420px] w-[760px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(37,99,235,0.10)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* 
          HEADER OFFSET:
          Header = h-20 = 80px
          pt-24 = 96px gives breathing room under the fixed header
          min-height subtracts header space
        */}
        <div className="flex min-h-[calc(100svh-80px)] flex-col items-center justify-center pt-24 pb-10 sm:min-h-[calc(100svh-80px)] sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16">
          {/* Eyebrow */}
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-3 py-1.5 shadow-sm sm:mb-5 sm:px-4">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-600" />
            <span className="truncate text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700 sm:text-[11px]">
              University 4.0 · April 2026
            </span>
          </div>

          {/* Title */}
          <h1 className="mx-auto max-w-[320px] text-center text-[1.95rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-slate-900 sm:max-w-3xl sm:text-5xl lg:text-6xl">
            The Distance Learning Committee of{" "}
            <span className="text-blue-600">Blida 1 University</span>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-[305px] text-center text-[0.95rem] leading-7 text-slate-600 sm:mt-5 sm:max-w-2xl sm:text-lg sm:leading-8">
            A focused academic event for educators and institutional leaders
            exploring how AI can improve course design, learner engagement, and
            certification-ready education.
          </p>

          {/* Theme badge */}
          <div className="mt-5 inline-flex max-w-full items-center gap-2 rounded-2xl border border-blue-200 bg-blue-50/80 px-3 py-2 shadow-sm sm:mt-6 sm:px-4">
            <HiAcademicCap className="shrink-0 text-blue-600" size={15} />
            <span className="truncate text-[0.74rem] font-semibold text-blue-700 sm:text-sm">
              Pedagogical AI · Certification · University 4.0
            </span>
          </div>

          {/* Metadata */}
          <div className="mt-5 flex flex-col items-center gap-2 text-[0.87rem] text-slate-600 sm:mt-6 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-5 sm:text-sm">
            <span className="flex items-center gap-2">
              <FaCalendarAlt className="text-blue-600" size={12} />
              April 15, 2026
            </span>

            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-600" size={12} />
              Blida 1 University
            </span>

            <span className="flex items-center gap-2">
              <HiAcademicCap className="text-blue-600" size={14} />
              Conference Room - Sports Complex
            </span>
          </div>

          {/* CTA */}
          <div className="mt-6 flex w-full max-w-[340px] flex-col gap-3 sm:mt-8 sm:max-w-none sm:flex-row sm:justify-center">
            <a
              href="#registration"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(37,99,235,0.22)] transition hover:scale-[1.01]"
            >
              Register Now
              <FaArrowRight size={11} />
            </a>

            <a
              href="#program"
              className="inline-flex h-12 w-full items-center justify-center rounded-2xl border border-slate-200 bg-white/80 px-6 text-sm font-semibold text-slate-800 shadow-sm transition hover:bg-white"
            >
              View Program
            </a>
          </div>

          {/* Stats */}
          <div className="mt-8 grid w-full max-w-[340px] grid-cols-1 gap-3 sm:mt-10 sm:max-w-3xl sm:grid-cols-3">
            {heroStats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200 bg-white/75 px-4 py-4 text-center shadow-sm backdrop-blur-sm"
              >
                <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-blue-600">
                  {item.label}
                </p>
                <p className="mt-1.5 text-[0.98rem] font-semibold leading-6 text-slate-900">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
