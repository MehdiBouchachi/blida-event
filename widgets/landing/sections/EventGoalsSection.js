"use client";

import {
  FaChalkboardTeacher,
  FaBalanceScale,
  FaNetworkWired,
} from "react-icons/fa";

export default function EventGoalsSection() {
  return (
    <section
      id="objectives"
      className="relative py-20 sm:py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-primary-50), #ffffff)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="
              text-xl
              sm:text-2xl
              md:text-3xl
              lg:text-4xl
              font-bold
            "
            style={{ color: "var(--color-primary-900)" }}
          >
            Event Objectives
          </h2>

          <p
            className="
              mt-4 sm:mt-6
              text-sm
              sm:text-base
              md:text-lg
              leading-relaxed
            "
            style={{ color: "var(--color-primary-600)" }}
          >
            This event supports the digital transformation of higher education
            by bringing together academic leaders, faculty members, and
            institutional stakeholders around a shared strategic agenda.
          </p>
        </div>

        {/* ================= OBJECTIVES ================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20 space-y-10 sm:space-y-14 max-w-5xl mx-auto">
          {/* Objective 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-[64px_1fr] md:grid-cols-[80px_1fr] gap-6 sm:gap-8 items-start">
            <div
              className="mx-auto sm:mx-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl"
              style={{
                backgroundColor: "var(--color-blue-50)",
                color: "var(--color-blue-600)",
              }}
            >
              <FaChalkboardTeacher size={22} />
            </div>

            <div>
              <h3
                className="text-base sm:text-lg font-semibold"
                style={{ color: "var(--color-primary-900)" }}
              >
                Modernize Teaching Practices
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--color-primary-600)" }}
              >
                Promote the evolution of teaching and learning models through
                hybrid education, digital platforms, and innovative pedagogical
                approaches that enhance engagement, flexibility, and academic
                effectiveness.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-primary-200), transparent)",
            }}
          />

          {/* Objective 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-[64px_1fr] md:grid-cols-[80px_1fr] gap-6 sm:gap-8 items-start">
            <div
              className="mx-auto sm:mx-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl"
              style={{
                backgroundColor: "var(--color-emerald-50)",
                color: "var(--color-emerald-600)",
              }}
            >
              <FaBalanceScale size={22} />
            </div>

            <div>
              <h3
                className="text-base sm:text-lg font-semibold"
                style={{ color: "var(--color-primary-900)" }}
              >
                Strengthen Online Assessment
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--color-primary-600)" }}
              >
                Address the critical challenges of online assessment by focusing
                on academic integrity, equity, and competency-based evaluation,
                while ensuring credibility, fairness, and pedagogical validity
                in digital examination environments.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(to right, transparent, var(--color-primary-200), transparent)",
            }}
          />

          {/* Objective 3 */}
          <div className="grid grid-cols-1 sm:grid-cols-[64px_1fr] md:grid-cols-[80px_1fr] gap-6 sm:gap-8 items-start">
            <div
              className="mx-auto sm:mx-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-xl"
              style={{
                backgroundColor: "var(--color-indigo-50)",
                color: "var(--color-indigo-600)",
              }}
            >
              <FaNetworkWired size={22} />
            </div>

            <div>
              <h3
                className="text-base sm:text-lg font-semibold"
                style={{ color: "var(--color-primary-900)" }}
              >
                Align Institutions with National Strategy
              </h3>

              <p
                className="mt-3 text-sm leading-relaxed"
                style={{ color: "var(--color-primary-600)" }}
              >
                Contribute to institutional alignment with the Algerian National
                Digital Roadmap and the University 4.0 vision by fostering
                coherence between policy, governance, and operational
                implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
