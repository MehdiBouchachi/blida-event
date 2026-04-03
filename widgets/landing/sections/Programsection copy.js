"use client";

import { useState } from "react";
import { FaChevronDown, FaClock, FaUserTie } from "react-icons/fa";
import { HiCalendar } from "react-icons/hi";

// ── Badge config ──────────────────────────────────────────────
const BADGE = {
  Opening:    { bg: "#f1f5f9", color: "#475569", border: "#cbd5e1" },
  Keynote:    { bg: "#f5f3ff", color: "#6d28d9", border: "#ddd6fe" },
  Break:      { bg: "#fffbeb", color: "#b45309", border: "#fde68a" },
  Module:     { bg: "#eff6ff", color: "#1d4ed8", border: "#bfdbfe" },
  "Final Q&A":{ bg: "#f0fdf4", color: "#15803d", border: "#bbf7d0" },
  Closing:    { bg: "#f8fafc", color: "#334155", border: "#e2e8f0" },
};

// ── All sessions ──────────────────────────────────────────────
const SESSIONS = [
  {
    time: "08:30 – 09:00",
    category: "Opening",
    title: "Welcome & Opening Remarks",
    speaker: "Distance Learning Commission",
    overview: "The Distance Learning Commission will formally open the day, welcome participants, and establish the strategic context for the workshop. This opening session positions the event within the broader University 4.0 initiative and clarifies how online course certification contributes to institutional transformation.",
    objectives: [
      "Understand the strategic importance of the University 4.0 initiative within national higher education policy",
      "Recognize how online course certification aligns with institutional and national educational goals",
      "Identify the key outcomes expected from day participation",
      "Understand the day structure, logistics, and participant responsibilities",
    ],
    outcomes: [
      "Clear understanding of the day's role in the University 4.0 Week",
      "Knowledge of how online course certification supports institutional excellence",
      "Clarity on day expectations, schedule, and logistical details",
      "Motivation and context for the intensive training ahead",
    ],
    competencies: [
      "Strategic awareness of institutional e-learning initiatives",
      "Understanding of national policy context for online education",
      "Preparedness for intensive day participation",
    ],
    takeaways: [
      "Workshop schedule and logistics overview",
      "Key contacts and support resources",
      "Expectations for participant engagement and participation",
    ],
    topics: ["University 4.0 vision", "Distance learning strategy", "Event orientation"],
  },
  {
    time: "09:00 – 09:40",
    category: "Keynote",
    title: "Keynote: Pedagogical AI in Medical Education",
    speaker: "Prof. Nasser Drareni, Blida 1 University",
    overview: "This keynote showcases a real-world case study demonstrating how agentic artificial intelligence can fundamentally transform teaching and learning in specialized domains — specifically medical and clinical English. The speaker presents concrete examples from Blida 1's Moodle platform, illustrating how AI-powered tools create interactive, responsive learning environments that adapt to individual student needs in real time.",
    objectives: [
      "Understand how agentic AI can enhance language learning in specialized domains like medical education",
      "Identify practical applications of AI systems that improve student engagement and learning outcomes",
      "Recognize real-world implementation strategies for integrating AI within institutional LMS",
      "Discover best practices for balancing AI innovation with institutional compliance and quality standards",
      "Understand how pedagogical AI supports rather than replaces instructor–student relationships",
    ],
    outcomes: [
      "Concrete understanding of how AI can enhance teaching and learning in your own courses",
      "Knowledge of specific AI tools and strategies that work within Moodle",
      "Inspiration and confidence to explore AI-enhanced pedagogical approaches",
      "Understanding of how AI integration aligns with national certification standards",
      "Practical ideas for your own course design and delivery",
    ],
    competencies: [
      "Pedagogical AI Literacy: how AI can enhance learning experiences",
      "Technology Integration: knowledge of AI tools within institutional systems",
      "Innovation Mindset: confidence to experiment with new pedagogical approaches",
      "Compliance Awareness: understanding how innovation aligns with quality standards",
    ],
    takeaways: [
      "Specific AI tools and platforms that integrate with Moodle",
      "Strategies for designing AI-enhanced learning activities",
      "Examples of successful AI implementation in medical education",
      "Resources for further learning about pedagogical AI",
      "Approaches to obtaining institutional support for AI initiatives",
    ],
    topics: ["AI as a pedagogical tool for enhancing student engagement and personalization", "Practical strategies for implementing AI-driven interactivity in specialized domains", "Moodle integration", "Specialized language learning", "Student engagement"],
  },
  {
    time: "10:00 – 10:15",
    category: "Break",
    title: "Coffee Break",
    speaker: "—",
    overview: "A short networking and refreshment break between the keynote and the technical training modules.",
    objectives: ["Allow participants to pause and reflect", "Encourage informal networking"],
    outcomes: ["Improved attention and readiness for the next session"],
    competencies: ["Professional exchange"],
    takeaways: ["Informal connections"],
    topics: ["Networking"],
  },
  {
    time: "10:15 – 10:45",
    category: "Module",
    title: "Module 1: National Expertise Framework & Workflow",
    speaker: "Dr. Brahimi, Blida 1 University",
    overview: "This foundational module provides a comprehensive overview of the national regulatory framework for online course certification, based on the Ministry of Higher Education's official guidelines. Participants develop a thorough understanding of the institutional structure, the roles of various stakeholders, and the complete expertise workflow from initial course submission through final certification decision.",
    objectives: [
      "Understand the institutional framework governing online course certification at the national level",
      "Identify key stakeholders and their specific roles in the expertise process",
      "Master the step-by-step workflow from course submission through certification decision",
      "Recognize eligibility criteria and ensure courses meet minimum requirements",
      "Identify common compliance issues and strategies to avoid them",
      "Understand appeal procedures and recourse mechanisms if certification is denied",
      "Navigate the OCE platform and submission process with confidence",
    ],
    outcomes: [
      "Clear mental model of the national certification framework",
      "Understanding of what national experts look for during evaluation",
      "Knowledge of how to prepare courses for submission",
      "Awareness of common pitfalls and how to avoid them",
      "Confidence in understanding the regulatory environment",
      "Practical knowledge of documentation requirements",
      "Understanding of timelines and decision-making processes",
    ],
    competencies: [
      "Regulatory Literacy: understanding national certification requirements and processes",
      "Stakeholder Awareness: knowledge of roles and responsibilities in the certification process",
      "Compliance Planning: ability to ensure courses meet all regulatory requirements",
      "Documentation Skills: ability to prepare comprehensive submission materials",
      "Process Navigation: confidence in using the OCE platform and submission procedures",
    ],
    takeaways: [
      "Complete overview of the certification workflow",
      "Checklist of eligibility requirements for course certification",
      "Documentation requirements and submission procedures",
      "Timeline for certification process and decision-making",
      "Common errors to avoid during course design",
      "Contact information for institutional support and national experts",
      "Understanding of appeal procedures if certification is denied",
      "Resources for staying updated on regulatory changes",
    ],
    topics: [
      "Institutional context and legal framework for distance learning",
      "Eligibility conditions for course certification",
      "The expertise process: submission, validation, technical verification, expert review, final decision",
      "Criteria for evaluation and common reasons for course rejection",
      "Appeal procedures and recourse mechanisms",
      "Documentation requirements and pre-submission checklist",
      "Stakeholder roles and responsibilities",
      "OCE platform navigation and submission process",
      "Timelines and decision-making processes",
    ],
  },
  {
    time: "11:00 – 11:30",
    category: "Module",
    title: "Module 2: Course Structuring & Pedagogical Charter",
    speaker: "Dr. Abdelli, Blida 1 University",
    overview: "This session explains how to structure an online course according to the national pedagogical charter, including the recommended 12-section model and alignment between objectives, activities, and assessments.",
    objectives: [
      "Understand the 12-section course structure",
      "Align learning objectives with activities and evaluations",
      "Improve pedagogical consistency in Moodle",
    ],
    outcomes: [
      "Better course organization",
      "Improved pedagogical coherence",
      "Readiness to structure certifiable online courses",
    ],
    competencies: ["Course design", "Instructional alignment", "Pedagogical structuring"],
    takeaways: ["Recommended course structure", "Alignment principles", "Moodle organization logic"],
    topics: ["Course architecture", "Learning objectives", "Activities and assessments"],
  },
  {
    time: "13:00 – 13:30",
    category: "Module",
    title: "Module 3: Interactivity & Student Engagement on Moodle",
    speaker: "Dr. Toumi, Blida 1 University",
    overview: "This practical module emphasizes the critical transition from passive, static content delivery to dynamic, interactive learning experiences that genuinely engage students and promote deeper learning. Participants will master the full range of pedagogical activities available on Moodle and learn to design comprehensive evaluation strategies that support different types of learning outcomes.",
    objectives: [
      "Transition from static content delivery to interactive learning experiences",
      "Master the range of pedagogical activities available on Moodle",
      "Design evaluation strategies that support different types of learning outcomes",
      "Implement formative, continuous, summative, and certificative assessment",
      "Create courses that genuinely engage students and support deep learning",
      "Use assessment data to improve course design and student support",
    ],
    outcomes: [
      "Comprehensive understanding of Moodle's interactive capabilities",
      "Practical skills in designing engaging learning activities",
      "Knowledge of assessment strategies that support different learning outcomes",
      "Understanding of how to use assessment data for course improvement",
      "Confidence in creating interactive, engaging online courses",
      "Practical examples and templates for interactive activities",
    ],
    competencies: [
      "Interactive Course Design: ability to create engaging learning experiences",
      "Assessment Literacy: understanding of different assessment types and their purposes",
      "Moodle Proficiency: skill in using Moodle's interactive tools",
      "Student Engagement: ability to create courses that engage and motivate students",
      "Data-Informed Teaching: use of assessment data to improve teaching and learning",
    ],
    takeaways: [
      "Comprehensive guide to Moodle's interactive tools and their pedagogical purposes",
      "Templates and examples for different types of interactive activities",
      "Assessment strategy framework for different learning outcomes",
      "Guidelines for providing effective feedback",
      "Strategies for promoting student engagement and motivation",
      "Tools for analyzing student engagement and learning data",
      "Resources for ongoing professional development in interactive course design",
    ],
    topics: [
      "Pedagogical activities on Moodle: assignments, quizzes, forums, wikis, collaborative activities",
      "H5P interactive elements for enhanced engagement",
      "Formative, continuous, summative, and certificative assessment",
      "Feedback mechanisms and their effectiveness",
      "Student engagement strategies",
      "Accessibility in interactive activities",
      "Data analytics for course improvement",
    ],
  },
  {
    time: "13:45 – 14:15",
    category: "Module",
    title: "Module 4: Case Study & Certification Process",
    speaker: "Dr. Allaoui & Dr. Amirouche, Blida 1 University",
    overview: "This practical module examines a real, successfully certified online course and walks participants through the complete submission and expertise evaluation process. The expert facilitators demonstrate how a course is structured according to national standards, what makes a course certification-ready, and how it is evaluated against national criteria.",
    objectives: [
      "Visualize a complete, compliant course model on Moodle",
      "Understand the practical steps in the submission and expertise process",
      "Learn from a real example of a successfully certified course",
      "Simulate the expertise evaluation process using national criteria",
      "Identify what makes a course certification-ready",
      "Recognize common errors and strategies to avoid them",
      "Prepare your own courses for successful certification",
    ],
    outcomes: [
      "Concrete understanding of what certification-ready courses look like",
      "Knowledge of the practical steps in the certification process",
      "Understanding of what national experts evaluate and how they make decisions",
      "Awareness of common errors and how to avoid them",
      "Confidence in preparing your own courses for certification",
      "Practical examples to reference during your own course development",
      "Understanding of timeline and next steps after submission",
    ],
    competencies: [
      "Certification Readiness: ability to assess whether courses are ready for certification",
      "Quality Assurance: understanding of national quality standards and how to meet them",
      "Practical Application: ability to apply learning from case study to own courses",
      "Problem-Solving: ability to identify and resolve compliance issues",
      "Strategic Planning: ability to plan course development with certification in mind",
    ],
    takeaways: [
      "Real example of a successfully certified course to reference",
      "Detailed walkthrough of the certification process",
      "Evaluation criteria used by national experts",
      "Common errors and specific strategies to avoid them",
      "Checklist for certification readiness",
      "Timeline for certification process",
      "Contact information for support and questions",
      "Resources for ongoing support after certification",
    ],
    topics: [
      "Real-world example of a successfully certified course",
      "Practical steps in the submission and expertise process",
      "What national experts look for during evaluation",
      "Criteria for certification decisions",
      "Common errors and reasons for rejection",
      "Success factors for first-submission certification",
      "Documentation and submission procedures",
      "Timeline and decision-making processes",
      "Post-certification support and maintenance",
    ],
  },
  {
    time: "14:15 – 14:30",
    category: "Final Q&A",
    title: "Final Q&A and Open Discussion",
    speaker: "All Speakers",
    overview: "A single concluding question-and-answer session bringing together the full day's themes. Participants can raise questions related to AI integration, pedagogical design, certification standards, and implementation challenges.",
    objectives: [
      "Clarify remaining questions",
      "Connect themes across all sessions",
      "Enable direct exchange with speakers",
    ],
    outcomes: [
      "Consolidated understanding of the full workshop",
      "Better clarity on implementation and certification",
      "Stronger participant engagement",
    ],
    competencies: ["Critical reflection", "Cross-session synthesis", "Professional dialogue"],
    takeaways: ["Answers to participant questions", "Integrated understanding of workshop themes"],
    topics: ["AI", "Certification", "Course design", "Implementation"],
  },
  {
    time: "14:30 – 15:00",
    category: "Closing",
    title: "Synthesis, Deliverables Distribution & Closing",
    speaker: "Distance Learning Commission",
    overview: "The Distance Learning Commission will synthesize the day's key learnings, distribute comprehensive day materials and resources, and provide closing remarks. Participants will receive three essential deliverables that provide concrete tools and resources to implement what they've learned.",
    objectives: [
      "Synthesize learning from all day sessions into a coherent framework",
      "Understand how to use day deliverables to support course development",
      "Identify next steps in your certification journey",
      "Connect with ongoing support and resources",
    ],
    outcomes: [
      "Clear understanding of how day content integrates",
      "Concrete resources to support course development and certification",
      "Knowledge of next steps and support available",
      "Confidence in your ability to develop certification-ready courses",
      "Connections with colleagues and ongoing learning community",
    ],
    competencies: [
      "Integration: ability to synthesize learning into coherent framework",
      "Resource Utilization: ability to effectively use day deliverables",
      "Planning: ability to plan next steps in certification journey",
      "Community Connection: connection to ongoing support and learning community",
    ],
    takeaways: [
      "Comprehensive Practitioner's Guide for reference",
      "Moodle course template to accelerate course development",
      "Compliance checklist for certification readiness",
      "Contact information for ongoing support",
      "Information about follow-up day resources and support",
      "Connections with colleagues for ongoing collaboration",
      "Timeline for next steps in certification journey",
    ],
    topics: ["Summary", "Deliverables", "Closure", "Next steps", "Support resources"],
  },
];

const OVERVIEW_STATS = [
  { label: "Format", value: "Full Day Workshop" },
  { label: "Hours", value: "08:30 – 15:00" },
  { label: "Duration", value: "Approx. 6.5 hours" },
  { label: "Structure", value: "Opening · Keynote · 4 Modules · Final Q&A · Closing" },
];

// ── Sub-components ────────────────────────────────────────────

function CategoryBadge({ category }) {
  const s = BADGE[category] || BADGE["Closing"];
  return (
    <span
      className="inline-block rounded-full px-2.5 py-0.5 text-[0.65rem] font-semibold tracking-wide whitespace-nowrap"
      style={{ background: s.bg, color: s.color, border: `1px solid ${s.border}` }}
    >
      {category}
    </span>
  );
}

function ListBlock({ title, items, color }) {
  if (!items || items.length === 0) return null;
  return (
    <div>
      <p
        className="text-xs font-bold uppercase tracking-widest mb-2"
        style={{ color: color || "var(--color-blue-600)" }}
      >
        {title}
      </p>
      <ul className="space-y-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2 text-sm leading-snug" style={{ color: "var(--color-primary-700)" }}>
            <span className="mt-[5px] shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: color || "var(--color-blue-600)", opacity: 0.6 }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TopicsRow({ topics }) {
  if (!topics || topics.length === 0) return null;
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: "var(--color-primary-600)" }}>
        Key Topics
      </p>
      <div className="flex flex-wrap gap-2">
        {topics.map((t, i) => (
          <span
            key={i}
            className="rounded-lg px-2.5 py-1 text-xs font-medium"
            style={{
              background: "var(--color-primary-50)",
              color: "var(--color-primary-700)",
              border: "1px solid var(--color-primary-200)",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExpandedContent({ session }) {
  const isBreak = session.category === "Break";
  if (isBreak) {
    return (
      <div className="pt-4 pb-5 px-5 sm:px-6 border-t" style={{ borderColor: "var(--color-primary-200)" }}>
        <p className="text-sm leading-relaxed" style={{ color: "var(--color-primary-700)" }}>{session.overview}</p>
      </div>
    );
  }
  return (
    <div
      className="border-t px-5 sm:px-6 pt-5 pb-6 space-y-5"
      style={{ borderColor: "var(--color-primary-200)" }}
    >
      {/* Overview */}
      <p className="text-sm sm:text-[15px] leading-relaxed" style={{ color: "var(--color-primary-700)" }}>
        {session.overview}
      </p>

      {/* 2-col grid: objectives + outcomes | competencies + takeaways */}
      <div className="grid sm:grid-cols-2 gap-5">
        <div className="space-y-5">
          <ListBlock title="Learning Objectives" items={session.objectives} color="var(--color-blue-600)" />
          <ListBlock title="Expected Outcomes" items={session.outcomes} color="#0d9488" />
        </div>
        <div className="space-y-5">
          <ListBlock title="Key Competencies" items={session.competencies} color="#7c3aed" />
          <ListBlock title="Practical Takeaways" items={session.takeaways} color="#b45309" />
        </div>
      </div>

      {/* Topics full-width */}
      <TopicsRow topics={session.topics} />
    </div>
  );
}

function SessionCard({ session, index, isOpen, onToggle }) {
  const badge = BADGE[session.category] || BADGE["Closing"];
  const isBreak = session.category === "Break";

  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all duration-200"
      style={{
        borderColor: isOpen ? badge.border : "var(--color-primary-200)",
        background: isOpen ? "#fff" : "rgba(255,255,255,0.7)",
        boxShadow: isOpen
          ? `0 4px 20px ${badge.bg === "#fffbeb" ? "rgba(180,83,9,0.08)" : "rgba(37,99,235,0.08)"}`
          : "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      {/* Header row */}
      <button
        onClick={onToggle}
        className="w-full text-left flex items-start gap-4 px-5 sm:px-6 py-4 sm:py-5"
        aria-expanded={isOpen}
      >
        {/* Time block */}
        <div className="shrink-0 w-[90px] pt-0.5">
          <span
            className="flex items-center gap-1.5 text-xs font-semibold tabular-nums"
            style={{ color: "var(--color-primary-600)" }}
          >
            <FaClock size={10} style={{ color: "var(--color-blue-600)", opacity: 0.7 }} />
            {session.time}
          </span>
        </div>

        {/* Main content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <CategoryBadge category={session.category} />
          </div>
          <h3
            className="text-base sm:text-lg font-semibold tracking-tight leading-snug"
            style={{ color: "var(--color-primary-900)" }}
          >
            {session.title}
          </h3>
          {session.speaker !== "—" && (
            <p
              className="mt-1 text-xs sm:text-sm flex items-center gap-1.5"
              style={{ color: "var(--color-primary-600)" }}
            >
              <FaUserTie size={10} style={{ opacity: 0.5 }} />
              {session.speaker}
            </p>
          )}
        </div>

        {/* Chevron */}
        {!isBreak && (
          <div className="shrink-0 pt-1">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-200"
              style={{
                background: isOpen ? badge.bg : "var(--color-primary-50)",
                border: `1px solid ${isOpen ? badge.border : "var(--color-primary-200)"}`,
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              }}
            >
              <FaChevronDown size={10} style={{ color: isOpen ? badge.color : "var(--color-primary-600)" }} />
            </div>
          </div>
        )}
      </button>

      {/* Expanded body */}
      {isOpen && !isBreak && <ExpandedContent session={session} />}
    </div>
  );
}

// ── Main component ────────────────────────────────────────────
export default function ProgramSection() {
  const [openIndex, setOpenIndex] = useState(1); // Keynote open by default

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="program"
      className="py-16 sm:py-20"
      style={{ background: "var(--color-primary-50)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="max-w-3xl mb-10">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-2 flex items-center gap-2"
            style={{ color: "var(--color-blue-600)" }}
          >
            <HiCalendar size={14} />
            Academic Program
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight"
            style={{ color: "var(--color-primary-900)", lineHeight: 1.15 }}
          >
            Workshop Program
          </h2>
          <p
            className="mt-3 text-sm sm:text-[15px] leading-relaxed"
            style={{ color: "var(--color-primary-700)" }}
          >
            A structured full-day academic program combining a keynote on pedagogical AI, four technical
            modules on online course certification, and a final open Q&amp;A session.
          </p>
        </div>

        {/* ── Overview stats ── */}
        <div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10 rounded-2xl border p-4 sm:p-5"
          style={{
            background: "rgba(255,255,255,0.85)",
            borderColor: "var(--color-primary-200)",
          }}
        >
          {OVERVIEW_STATS.map((s) => (
            <div key={s.label}>
              <p
                className="text-[0.6rem] font-bold uppercase tracking-widest mb-1"
                style={{ color: "var(--color-blue-600)" }}
              >
                {s.label}
              </p>
              <p
                className="text-sm sm:text-base font-semibold leading-snug"
                style={{ color: "var(--color-primary-900)" }}
              >
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* ── Session list ── */}
        <div className="space-y-3">
          {SESSIONS.map((session, i) => (
            <SessionCard
              key={i}
              session={session}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}