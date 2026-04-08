
import {
  FaBrain,
  FaClipboardList,
  FaLayerGroup,
  FaIntercom,
  FaFlask,
} from "react-icons/fa";

const items = [
  {
    icon: <FaBrain size={16} />,
    title: "Pedagogical AI Integration",
    description:
      "Discover how agentic artificial intelligence can enhance language learning in specialized domains like medical education. Learn real-world implementation strategies from the University of Blida 1's successful Moodle case study.",
    meta: "Keynote · 09:00 – 10:00 · 40 min + 20 min Q&A",
  },
  {
    icon: <FaClipboardList size={16} />,
    title: "National Certification Framework",
    description:
      "Master the complete regulatory pathway for online course certification according to Ministry standards. Understand institutional structure, stakeholder roles, eligibility criteria, and the full workflow.",
    meta: "Module 1 · 10:30 – 11:00",
  },
  {
    icon: <FaLayerGroup size={16} />,
    title: "Course Design Excellence",
    description:
      "Learn the recommended course structure according to the national pedagogical charter. Master alignment between objectives, activities, and assessments.",
    meta: "Module 2 · 11:00 – 11:30",
  },
  {
    icon: <FaIntercom size={16} />,
    title: "Interactive Learning Strategies",
    description:
      "Transition from static content delivery to dynamic, interactive learning. Design evaluation strategies including formative, continuous, summative, and certificative assessments.",
    meta: "Module 3 · 11:30 – 12:00",
  },
  {
    icon: <FaFlask size={16} />,
    title: "Practical Case Study & Certification Process",
    description:
      "Examine a real certified online course and simulate the submission and evaluation process. Learn how courses are assessed and how to meet certification criteria.",
    meta: "Module 4 · 12:00 – 12:30",
  },
];

export default function WhatYouWillLearnSection() {
  return (
    <section
      id="learn"
      className="py-16 sm:py-20"
      style={{ background: "var(--color-primary-50)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2"
            style={{ color: "var(--color-blue-600)" }}
          >
            Program Overview
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-primary-900)", lineHeight: 1.2 }}
          >
            What You'll Learn
          </h2>
          <p
            className="mt-3 text-sm sm:text-[15px] leading-relaxed"
            style={{ color: "var(--color-primary-700)" }}
          >
            A structured academic program covering AI in pedagogy, national
            certification standards, and practical course design frameworks.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-2 gap-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border p-5 flex flex-col gap-3"
              style={{
                background: "rgba(255,255,255,0.75)",
                borderColor: "var(--color-primary-200)",
              }}
            >
              {/* Icon + title row */}
              <div className="flex items-start gap-3">
                <div
                  className="mt-0.5 shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "var(--color-blue-50,#eff6ff)",
                    color: "var(--color-blue-600)",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-lg sm:text-xl font-semibold leading-snug"
                  style={{ color: "var(--color-primary-900)" }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-sm sm:text-[15px] leading-relaxed"
                style={{ color: "var(--color-primary-700)" }}
              >
                {item.description}
              </p>

              {/* Meta */}
              <p
                className="text-xs font-medium mt-auto pt-1"
                style={{
                  color: "var(--color-blue-600)",
                  borderTop: "1px solid var(--color-primary-200)",
                  paddingTop: "10px",
                }}
              >
                {item.meta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
