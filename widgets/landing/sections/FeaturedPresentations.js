"use client";

import { FaUserTie, FaClock, FaBullseye } from "react-icons/fa";

export default function FeaturedPresentations() {
  return (
    <section
      id="presentations"
      className="relative py-20 sm:py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-primary-50), var(--color-primary-0))",
      }}
    >
      {/* Subtle divider */}
      <div
        className="absolute top-0 left-0 w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--color-primary-300), transparent)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: "var(--color-primary-900)" }}
          >
            Featured Presentations
          </h2>

          <p
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: "var(--color-primary-600)" }}
          >
            Two expert-led sessions examining the strategic and operational
            dimensions of digital transformation in higher education.
          </p>
        </div>

        {/* ================= CARDS ================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-6 sm:gap-10 md:grid-cols-2">
          {/* ================= PRESENTATION I ================= */}
          <article
            className="relative rounded-2xl border overflow-hidden"
            style={{
              backgroundColor: "var(--color-primary-0)",
              borderColor: "var(--color-primary-200)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {/* Top accent */}
            <div
              className="h-1"
              style={{
                background:
                  "linear-gradient(to right, var(--color-blue-700), var(--color-cyan-500))",
              }}
            />

            <div className="p-6 sm:p-8 md:p-10">
              <span
                className="inline-block mb-4 sm:mb-6 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                style={{
                  backgroundColor: "var(--color-blue-50)",
                  color: "var(--color-blue-700)",
                }}
              >
                Presentation I
              </span>

              <h3
                className="text-base sm:text-lg md:text-xl font-semibold"
                style={{ color: "var(--color-primary-900)" }}
              >
                Distance Learning and Pedagogical Innovation
              </h3>

              <p
                className="mt-3 sm:mt-5 text-sm leading-relaxed"
                style={{ color: "var(--color-primary-600)" }}
              >
                Explore how distance learning can serve as a catalyst for
                pedagogical innovation and support Algeria’s transition toward
                University 4.0. This session outlines the institutional context,
                key challenges, and a practical roadmap for implementation.
              </p>

              {/* Meta */}
              <div
                className="mt-6 sm:mt-8 space-y-3 text-sm"
                style={{ color: "var(--color-primary-700)" }}
              >
                <div className="flex items-center gap-3">
                  <FaUserTie
                    className="shrink-0"
                    style={{ color: "var(--color-blue-600)" }}
                  />
                  <span>
                    <strong>Speaker:</strong> Dr. L. OUAHRANI — President of the
                    EAD Commission, Blida 1 University
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaClock
                    className="shrink-0"
                    style={{ color: "var(--color-blue-600)" }}
                  />
                  <span>
                    <strong>Duration:</strong> 45 minutes + Q&amp;A
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaBullseye
                    className="shrink-0"
                    style={{ color: "var(--color-blue-600)" }}
                  />
                  <span>
                    <strong>Focus:</strong> Strategy to Classroom Implementation
                  </span>
                </div>
              </div>
            </div>
          </article>

          {/* ================= PRESENTATION II ================= */}
          <article
            className="relative rounded-2xl border overflow-hidden"
            style={{
              backgroundColor: "var(--color-primary-0)",
              borderColor: "var(--color-primary-200)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            {/* Top accent */}
            <div
              className="h-1"
              style={{
                background:
                  "linear-gradient(to right, var(--color-emerald-600), var(--color-blue-600))",
              }}
            />

            <div className="p-6 sm:p-8 md:p-10">
              <span
                className="inline-block mb-4 sm:mb-6 px-3 py-1 rounded-full text-xs font-semibold tracking-wide"
                style={{
                  backgroundColor: "var(--color-emerald-50)",
                  color: "var(--color-emerald-700)",
                }}
              >
                Presentation II
              </span>

              <h3
                className="text-base sm:text-lg md:text-xl font-semibold"
                style={{ color: "var(--color-primary-900)" }}
              >
                Online Exams: Challenges and Perspectives
              </h3>

              <p
                className="mt-3 sm:mt-5 text-sm leading-relaxed"
                style={{ color: "var(--color-primary-600)" }}
              >
                Address critical challenges in online assessment, including
                academic integrity, equity, and pedagogical validity. This
                session explores innovative, competency-based alternatives
                adapted to digital learning environments.
              </p>

              {/* Meta */}
              <div
                className="mt-6 sm:mt-8 space-y-3 text-sm"
                style={{ color: "var(--color-primary-700)" }}
              >
                <div className="flex items-center gap-3">
                  <FaUserTie
                    className="shrink-0"
                    style={{ color: "var(--color-emerald-600)" }}
                  />
                  <span>
                    <strong>Speaker:</strong> Pr. D. BENNOUAR — Bouira
                    University
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaClock
                    className="shrink-0"
                    style={{ color: "var(--color-emerald-600)" }}
                  />
                  <span>
                    <strong>Duration:</strong> 45 minutes + Q&amp;A
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaBullseye
                    className="shrink-0"
                    style={{ color: "var(--color-emerald-600)" }}
                  />
                  <span>
                    <strong>Focus:</strong> Secure Competency-Based Evaluation
                  </span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
