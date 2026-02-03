"use client";

import { FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden bg-[var(--color-primary-50)]"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(
                to right,
                color-mix(in srgb, var(--color-blue-600) 6%, transparent) 1px,
                transparent 1px
              ),
              linear-gradient(
                to bottom,
                color-mix(in srgb, var(--color-blue-600) 6%, transparent) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "64px 64px",
          }}
        />

        {/* Glows */}
        <div
          className="absolute -top-1/3 left-1/2 -translate-x-1/2
                     w-[420px] h-[420px]
                     sm:w-[700px] sm:h-[700px]
                     lg:w-[900px] lg:h-[900px]
                     rounded-full blur-[var(--hero-glow-blur-lg)]"
          style={{ background: "var(--hero-glow-blue)" }}
        />

        <div
          className="absolute top-1/4 -right-1/4
                     w-[360px] h-[360px]
                     sm:w-[600px] sm:h-[600px]
                     lg:w-[700px] lg:h-[700px]
                     rounded-full blur-[var(--hero-glow-blur-lg)]"
          style={{
            background:
              "color-mix(in srgb, var(--color-cyan-500) 20%, transparent)",
          }}
        />

        {/* Horizon */}
        <div
          className="absolute bottom-1/3 left-0 w-full h-px
                     bg-gradient-to-r
                     from-transparent
                     via-[var(--color-blue-200)]
                     to-transparent"
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100svh-72px)] flex items-center justify-center pt-16 sm:pt-20">
          <div className="max-w-4xl text-center">
            {/* TITLE */}
            <h1
              className="
                mt-8 font-extrabold tracking-tight
                text-[var(--color-primary-800)]
                text-[2.2rem] leading-tight
                sm:text-4xl md:text-5xl lg:text-6xl
              "
            >
              Distance Learning
              <span className="block mt-3 sm:mt-4 text-[var(--color-blue-600)]">
                @Blida 1 University
              </span>
              <span
                className="
                  block mt-1 font-semibold tracking-tight
                  text-[1.3rem] sm:text-xl md:text-2xl
                  text-[var(--color-primary-700)]
                "
              >
                Transformation in the 4.0 Era
              </span>
            </h1>

            {/* DESCRIPTION – MOBILE */}
            <p
              className="
                mt-4 text-sm leading-[1.5]
                text-[var(--color-primary-600)]
                max-w-[32ch] mx-auto sm:hidden
              "
            >
              An academic workshop at Blida 1 University addressing distance
              learning within the University 4.0 vision.
            </p>

            {/* DESCRIPTION – DESKTOP */}
            <p
              className="
                mt-10 hidden sm:block
                text-lg leading-relaxed
                text-[var(--color-primary-600)]
                max-w-3xl mx-auto
              "
            >
              An inaugural academic workshop addressing the strategic,
              pedagogical, and institutional challenges of distance learning in
              higher education. The event focuses on digital pedagogy, secure
              online assessment, and governance models aligned with the
              University 4.0 vision.
            </p>

            {/* META */}
            <div
              className="
                mt-10 sm:mt-12
                flex flex-col sm:flex-row flex-wrap
                justify-center items-center
                gap-y-3 gap-x-8
                text-sm
                text-[var(--color-primary-700)]
              "
            >
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="text-[var(--color-blue-600)]" />
                <span>12 February 2026</span>
              </div>

              <span className="hidden sm:inline-block h-4 w-px bg-[var(--color-primary-300)]" />

              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-[var(--color-blue-600)]" />
                <span>Aeronautics Institute · Conference Room</span>
              </div>

              <span className="hidden sm:inline-block h-4 w-px bg-[var(--color-primary-300)]" />

              <div className="flex items-center gap-2">
                <FaUniversity className="text-[var(--color-blue-600)]" />
                <span>Blida 1 University</span>
              </div>
            </div>

            {/* CTAs */}
            <div
              className="mt-12 sm:mt-16
                         flex flex-col sm:flex-row
                         justify-center items-center gap-4"
            >
              <a
                href="#registration"
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center
                  px-8 sm:px-10 py-4 rounded-xl
                  bg-[var(--color-blue-600)]
                  text-white
                  text-sm md:text-base font-semibold
                  shadow-lg
                  hover:bg-[var(--color-blue-700)]
                  transition
                "
              >
                Pre-Register & Complete Survey
              </a>

              <a
                href="#schedule"
                className="
                  w-full sm:w-auto
                  inline-flex items-center justify-center
                  px-8 sm:px-10 py-4 rounded-xl
                  border border-[var(--color-primary-300)]
                  text-[var(--color-primary-800)]
                  text-sm md:text-base font-medium
                  hover:border-[var(--color-blue-400)]
                  hover:text-[var(--color-blue-600)]
                  transition
                "
              >
                View Workshop Schedule
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
