"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

/* ================= UTILITY ================= */
function duration(start, end) {
  const toMinutes = (t) => {
    const [time, period] = t.split(" ");
    let [h, m] = time.split(":").map(Number);
    if (period === "PM" && h !== 12) h += 12;
    if (period === "AM" && h === 12) h = 0;
    return h * 60 + m;
  };
  return toMinutes(end) - toMinutes(start);
}

/* ================= DATA ================= */
const schedule = [
  {
    index: "I",
    start: "09:00 AM",
    end: "09:15 AM",
    title: "Registration",
    description:
      "Participants complete registration by scanning their QR code at the welcome desk.",
  },
  {
    index: "II",
    start: "09:15 AM",
    end: "09:30 AM",
    title: "Inaugural Session – Opening Remarks",
    description:
      "Opening remarks delivered by The Rector of Blida 1 University.",
  },
  {
    index: "III",
    start: "09:30 AM",
    end: "10:15 AM",
    title: "Keynote I – Distance Learning and Pedagogical Innovation",
    presenter: "Dr. L. OUAHRANI",
    description:
      "Presentation of innovative approaches, tools, and best practices for online and blended teaching.",
  },
  {
    index: "IV",
    start: "10:15 AM",
    end: "10:45 AM",
    title: "Forum I – Q&A and Interactive Discussion",
    description:
      "Interactive discussion session focused on identifying challenges and opportunities in implementing distance learning at Blida 1 University.",
  },
  {
    index: "V",
    start: "10:45 AM",
    end: "11:15 AM",
    title: "Coffee Break – Networking",
    description:
      "Networking break allowing informal discussions among lecturers, students, and invited speakers.",
  },
  {
    index: "VI",
    start: "11:15 AM",
    end: "12:00 PM",
    title: "Keynote II – Online Exams: Challenges and Perspectives",
    presenter: "Pr. D. BENNOUAR",
    description:
      "Discussion on assessment design, academic integrity, technical solutions, and institutional frameworks for online examinations.",
  },
  {
    index: "VII",
    start: "12:00 PM",
    end: "12:30 PM",
    title: "Forum II – Q&A and Deep Dive",
    description:
      "In-depth discussion on technical solutions and pedagogical validity of online assessments, supported by real case studies.",
  },
  {
    index: "VIII",
    start: "12:30 PM",
    end: "12:45 PM",
    title: "Closing Session – Conclusion and Recommendation",
    description:
      "Conclusion of the workshop with a call to action and presentation of next steps.",
  },
];

/* ================= COMPONENT ================= */
export default function WorkshopSchedule() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);
  const iconRefs = useRef([]);

  useEffect(() => {
    contentRefs.current.forEach((el, i) => {
      if (!el) return;

      if (openIndex === i) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });

        gsap.to(iconRefs.current[i], {
          rotate: 180,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });

        gsap.to(iconRefs.current[i], {
          rotate: 0,
          duration: 0.3,
          ease: "power2.inOut",
        });
      }
    });
  }, [openIndex]);

  return (
    <section
      id="schedule"
      className="py-20 sm:py-24 lg:py-32"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-primary-50), var(--color-primary-0))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
            style={{ color: "var(--color-primary-900)" }}
          >
            Workshop Schedule
          </h2>

          <p
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed"
            style={{ color: "var(--color-primary-600)" }}
          >
            A structured academic program reflecting methodological rigor,
            institutional clarity, and organizational discipline.
          </p>
        </div>

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        {/* … DESKTOP CODE LEFT EXACTLY AS YOU HAD IT … */}
        {/* ================= DESKTOP / TABLET TABLE ================= */}
        <div className="mt-12 sm:mt-16 lg:mt-20 hidden sm:block">
          {/* Header row */}
          <div
            className="grid grid-cols-[60px_260px_1fr_90px] gap-8 pb-4 border-b text-xs font-semibold uppercase tracking-wide"
            style={{
              borderColor: "var(--color-primary-200)",
              color: "var(--color-primary-500)",
            }}
          >
            <div>#</div>
            <div>Time</div>
            <div>Session</div>
            <div>Duration</div>
          </div>

          {/* Rows */}
          <div
            className="divide-y"
            style={{ borderColor: "var(--color-primary-200)" }}
          >
            {schedule.map((item, i) => (
              <div
                key={i}
                className="grid grid-cols-[60px_260px_1fr_90px] gap-8 py-8 transition-colors"
                style={{
                  backgroundColor:
                    i % 2 === 0
                      ? "var(--color-primary-0)"
                      : "var(--color-primary-50)",
                }}
              >
                {" "}
                <div className="relative z-10 contents">
                  <div
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-primary-400)" }}
                  >
                    {item.index}
                  </div>

                  <div
                    className="text-sm font-semibold leading-tight"
                    style={{ color: "var(--color-blue-700)" }}
                  >
                    <div>{item.start}</div>
                    <div
                      className="font-medium"
                      style={{ color: "var(--color-primary-400)" }}
                    >
                      → {item.end}
                    </div>
                  </div>

                  <div>
                    <h3
                      className="text-base sm:text-lg font-semibold tracking-tight"
                      style={{ color: "var(--color-primary-900)" }}
                    >
                      {item.title}
                    </h3>

                    {item.presenter && (
                      <p
                        className="mt-1 text-sm font-medium"
                        style={{ color: "var(--color-blue-700)" }}
                      >
                        Presenter: {item.presenter}
                      </p>
                    )}
                    <p
                      className="mt-3 text-sm leading-relaxed max-w-4xl"
                      style={{ color: "var(--color-primary-600)" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--color-primary-500)" }}
                  >
                    {duration(item.start, item.end)} min
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE (GSAP SMOOTH) ================= */}
        <div className="mt-12 sm:hidden space-y-4">
          {schedule.map((item, i) => {
            const isOpen = openIndex === i;

            return (
              <button
                key={i}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full text-left rounded-xl border px-4 py-4"
                style={{
                  borderColor: "var(--color-primary-200)",
                  background: "var(--color-primary-0)",
                }}
              >
                {/* HEADER */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <div
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-blue-700)" }}
                    >
                      {item.start} → {item.end}
                    </div>

                    <h3
                      className="mt-1 text-base font-semibold leading-snug"
                      style={{ color: "var(--color-primary-900)" }}
                    >
                      {item.title}
                    </h3>

                    {item.presenter && (
                      <div
                        className="mt-1 text-xs font-semibold"
                        style={{ color: "var(--color-emerald-600)" }}
                      >
                        Presenter: {item.presenter}
                      </div>
                    )}

                    <div
                      className="mt-1 text-xs font-medium"
                      style={{ color: "var(--color-primary-500)" }}
                    >
                      {duration(item.start, item.end)} min
                    </div>
                  </div>

                  <span
                    ref={(el) => (iconRefs.current[i] = el)}
                    className="text-xl leading-none"
                    style={{ color: "var(--color-primary-400)" }}
                  >
                    +
                  </span>
                </div>

                {/* BODY (animated) */}
                <div
                  ref={(el) => (contentRefs.current[i] = el)}
                  style={{ height: 0, opacity: 0, overflow: "hidden" }}
                >
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "var(--color-primary-600)" }}
                  >
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
