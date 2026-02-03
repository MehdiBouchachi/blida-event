"use client";

import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";
import trans from "../../../public/transformation.png";

export default function UniversityTransitionSection() {
  return (
    <section
      id="university-4"
      className="relative py-20 sm:py-24 lg:py-32 bg-[var(--color-primary-50)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          {/* ================= LEFT : TEXT ================= */}
          <div>
            <h2
              className="
                text-xl
                sm:text-2xl
                md:text-3xl
                lg:text-4xl
                font-bold
                text-[var(--color-primary-900)]
              "
            >
              University 4.0: The Future Is Now
            </h2>

            <p
              className="
                mt-4 sm:mt-6
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                text-[var(--color-primary-600)]
              "
            >
              The transition to a digital-first academic environment is no
              longer a peripheral objective — it is a central strategic
              imperative. Distance learning now reshapes how universities teach,
              assess, govern, and align with national transformation agendas.
            </p>

            <p
              className="
                mt-4
                text-sm
                sm:text-base
                leading-relaxed
                text-[var(--color-primary-600)]
              "
            >
              This workshop bridges the gap between national digital policy and
              institutional implementation, fostering a culture of innovation
              among faculty, academic leaders, and decision-makers.
            </p>

            {/* Strategic commitments */}
            <ul className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3 text-sm sm:text-base">
                <FaCheckCircle className="mt-0.5 text-[var(--color-blue-600)] shrink-0" />
                <span className="text-[var(--color-primary-700)]">
                  Alignment with the National Digital Roadmap.
                </span>
              </li>

              <li className="flex items-start gap-3 text-sm sm:text-base">
                <FaCheckCircle className="mt-0.5 text-[var(--color-blue-600)] shrink-0" />
                <span className="text-[var(--color-primary-700)]">
                  Deployment of sustainable hybrid and distance learning models.
                </span>
              </li>

              <li className="flex items-start gap-3 text-sm sm:text-base">
                <FaCheckCircle className="mt-0.5 text-[var(--color-blue-600)] shrink-0" />
                <span className="text-[var(--color-primary-700)]">
                  Integration of digital tools and AI-assisted feedback.
                </span>
              </li>

              <li className="flex items-start gap-3 text-sm sm:text-base">
                <FaCheckCircle className="mt-0.5 text-[var(--color-blue-600)] shrink-0" />
                <span className="text-[var(--color-primary-700)]">
                  Commitment to equity, access, and academic quality.
                </span>
              </li>
            </ul>
          </div>

          {/* ================= RIGHT : VISUAL ================= */}
          <div className="relative">
            <div
              className="
                rounded-2xl sm:rounded-3xl
                overflow-hidden
                shadow-xl
                border border-[var(--color-primary-200)]
                bg-[var(--color-primary-50)]
              "
            >
              <Image
                src={trans}
                alt="University 4.0 Digital Transformation"
                className="w-full h-full object-cover"
                priority
              />
            </div>

            {/* Subtle accent */}
            <div
              className="
                absolute -bottom-6 -left-6
                w-28 h-28 sm:w-32 sm:h-32
                rounded-full
                bg-[var(--color-blue-100)]
                blur-2xl
                opacity-60
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
