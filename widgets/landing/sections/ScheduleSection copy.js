"use client";

/* Utility: compute duration in minutes */
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
      "Opening remarks delivered by the University Rector, presenting the workshop objectives and strategic vision for distance learning.",
  },
  {
    index: "III",
    start: "09:30 AM",
    end: "10:15 AM",
    title: "Keynote I – Distance Learning and Pedagogical Innovation",
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
    title: "Closing Session – Conclusion and Perspectives",
    description:
      "Conclusion of the workshop with a call to action from the Distance Learning Commission and presentation of next steps for Blida 1 University.",
  },
];

export default function WorkshopSchedule() {
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
            institutional clarity, and the organizational discipline of computer
            engineering.
          </p>
        </div>

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

        {/* ================= MOBILE STACK ================= */}
        <div className="mt-12 sm:hidden space-y-8">
          {schedule.map((item, i) => (
            <div
              key={i}
              className="pb-6 border-b"
              style={{ borderColor: "var(--color-primary-200)" }}
            >
              <div
                className="text-sm font-semibold"
                style={{ color: "var(--color-blue-700)" }}
              >
                {item.start} → {item.end}
              </div>

              <h3
                className="mt-2 text-base font-semibold"
                style={{ color: "var(--color-primary-900)" }}
              >
                {item.title}
              </h3>

              <p
                className="mt-2 text-sm leading-relaxed"
                style={{ color: "var(--color-primary-600)" }}
              >
                {item.description}
              </p>

              <div
                className="mt-2 text-xs font-medium"
                style={{ color: "var(--color-primary-500)" }}
              >
                Duration: {duration(item.start, item.end)} minutes
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
