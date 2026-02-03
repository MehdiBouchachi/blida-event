"use client";

import { FaLightbulb, FaShieldAlt, FaUniversity } from "react-icons/fa";

export default function StrategicSection() {
  return (
    <section
      id="strategy"
      className="relative py-20 sm:py-24 lg:py-32"
      style={{ backgroundColor: "var(--color-primary-50)" }}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= SECTION HEADER ================= */}
        <div className="max-w-3xl mx-auto text-center">
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
            University 4.0: A Strategic Transition
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
            The shift toward distance learning is no longer a technical or
            peripheral initiative. It represents a systemic transformation of
            pedagogical practices, assessment frameworks, and institutional
            governance within higher education.
          </p>
        </div>

        {/* ================= PILLARS ================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div
            className="rounded-2xl p-6 sm:p-8 border"
            style={{
              backgroundColor: "var(--color-primary-50)",
              borderColor: "var(--color-primary-200)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: "var(--color-blue-50)",
                color: "var(--color-blue-600)",
              }}
            >
              <FaLightbulb size={20} />
            </div>

            <h3
              className="mt-5 text-base sm:text-lg font-semibold"
              style={{ color: "var(--color-primary-900)" }}
            >
              Pedagogical Transformation
            </h3>

            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--color-primary-600)" }}
            >
              Reframing teaching and learning models through hybrid formats,
              learner-centered approaches, and digitally supported pedagogy,
              while preserving academic rigor and disciplinary coherence.
            </p>
          </div>

          {/* Card 2 */}
          <div
            className="rounded-2xl p-6 sm:p-8 border"
            style={{
              backgroundColor: "var(--color-primary-50)",
              borderColor: "var(--color-primary-200)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: "var(--color-emerald-50)",
                color: "var(--color-emerald-600)",
              }}
            >
              <FaShieldAlt size={20} />
            </div>

            <h3
              className="mt-5 text-base sm:text-lg font-semibold"
              style={{ color: "var(--color-primary-900)" }}
            >
              Assessment & Academic Integrity
            </h3>

            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--color-primary-600)" }}
            >
              Examining the challenges of online assessment, certification, and
              evaluation by exploring secure, equitable, and competency-based
              assessment frameworks adapted to digital learning environments.
            </p>
          </div>

          {/* Card 3 */}
          <div
            className="rounded-2xl p-6 sm:p-8 border"
            style={{
              backgroundColor: "var(--color-primary-50)",
              borderColor: "var(--color-primary-200)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: "var(--color-primary-100)",
                color: "var(--color-primary-700)",
              }}
            >
              <FaUniversity size={20} />
            </div>

            <h3
              className="mt-5 text-base sm:text-lg font-semibold"
              style={{ color: "var(--color-primary-900)" }}
            >
              Institutional Governance
            </h3>

            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: "var(--color-primary-600)" }}
            >
              Aligning institutional distance learning strategies with national
              digital policies (SDN) and the University 4.0 vision, ensuring
              coherence between objectives, regulation, and implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
