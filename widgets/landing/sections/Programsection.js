"use client";

import { useState } from "react";

// ─── Data ──────────────────────────────────────────────────────────────────────

const SESSIONS = [
  {
    time: "08:30 – 09:00",
    category: "Opening",
    title: "Welcome & Opening Remarks",
    speaker: "Distance Learning Commission",
    duration: "30 min",
    overview:
      "The Distance Learning Commission will formally open the day, welcome participants, and establish the strategic context for the workshop. This opening session positions the event within the broader University 4.0 initiative and clarifies how online course certification contributes to institutional transformation.",
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
    topics: [
      "University 4.0 vision",
      "Distance learning strategy",
      "Event orientation",
    ],
  },
  {
    time: "09:00 – 10:00",
    category: "Keynote",
    title:
      "Learning and Teaching Medical and Clinical English Using Innovative Strategies Through Agentic AI: Case Study of the Moodle Platform at Blida 1 University",
    speaker: "Prof. Nasser Drareni, Blida 1 University",
    duration: "40 min + 20 min",
    overview:
      "This keynote presentation showcases a compelling real-world case study demonstrating how agentic artificial intelligence can fundamentally transform the teaching and learning experience in specialized domains, specifically medical and clinical English. The speaker will present concrete, practical examples from the University of Blida 1's Moodle platform, illustrating how AI-powered tools create interactive, responsive learning environments that adapt to individual student needs in real time.",
    objectives: [
      "Understand how agentic AI can enhance language learning in specialized domains like medical education",
      "Identify practical applications of AI systems that improve student engagement and learning outcomes",
      "Recognize real-world implementation strategies for integrating AI within institutional learning management systems",
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
      "Pedagogical AI Literacy: understanding how AI can enhance learning experiences",
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
    topics: [
      "AI as a pedagogical tool for engagement and personalization",
      "Practical strategies for AI-driven interactivity in specialized domains",
      "Moodle integration",
      "Specialized language learning",
      "Student engagement",
    ],
  },
  {
    time: "10:00 – 10:20",
    category: "Break",
    title: "Coffee Break",
    speaker: "—",
    duration: "20 min",
    overview:
      "A short networking and refreshment break between the keynote and the technical training modules.",
    objectives: [
      "Allow participants to pause and reflect",
      "Encourage informal networking",
    ],
    outcomes: ["Improved attention and readiness for the next session"],
    competencies: ["Professional exchange"],
    takeaways: ["Informal connections"],
    topics: ["Networking"],
  },
  {
    time: "10:30 – 11:00",
    category: "Module",
    title: "Module 1: National Expertise Framework & Workflow",
    speaker: "Dr. Brahimi, Blida 1 University",
    duration: "30 min",
    overview:
      "This foundational module provides a comprehensive overview of the national regulatory framework for online course certification, based on the Ministry of Higher Education's official guidelines. Participants will develop a thorough understanding of the institutional structure, the roles of various stakeholders, and the complete expertise workflow from initial course submission through final certification decision.",
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
      "The expertise process: submission → validation → expert review → final decision",
      "Evaluation criteria and common reasons for course rejection",
      "Appeal procedures and recourse mechanisms",
      "Documentation requirements and pre-submission checklist",
      "OCE platform navigation and submission process",
      "Stakeholder roles and responsibilities",
      "Timelines and decision-making processes",
    ],
  },
  {
    time: "11:00 – 11:30",
    category: "Module",
    title: "Module 2: Course Structuring & Pedagogical Charter",
    speaker: "Dr. Abdelli, Blida 1 University",
    duration: "30 min",
    overview:
      "This session explains how to structure an online course according to the national pedagogical charter, including the recommended model and alignment between objectives, activities, and assessments.",
    objectives: [
      "Understand the course structure",
      "Align learning objectives with activities and evaluations",
      "Improve pedagogical consistency in Moodle",
    ],
    outcomes: [
      "Better course organization",
      "Improved pedagogical coherence",
      "Readiness to structure certifiable online courses",
    ],
    competencies: [
      "Course design",
      "Instructional alignment",
      "Pedagogical structuring",
    ],
    takeaways: [
      "Recommended course structure",
      "Alignment principles",
      "Moodle organization logic",
    ],
    topics: [
      "Course architecture",
      "Learning objectives",
      "Activities and assessments",
    ],
  },
  {
    time: "11:30 – 12:00",
    category: "Module",
    title: "Module 3: Interactivity & Student Engagement on Moodle",
    speaker: "Dr. Toumi, Blida 1 University",
    duration: "30 min",
    overview:
      "This practical module emphasizes the critical transition from passive, static content delivery to dynamic, interactive learning experiences that genuinely engage students and promote deeper learning. Participants will master the full range of pedagogical activities available on Moodle and learn to design comprehensive evaluation strategies that support different types of learning outcomes.",
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
      "Formative assessment strategies and tools",
      "Continuous assessment approaches",
      "Summative assessment design",
      "Certificative assessment for distance learning",
      "Feedback mechanisms and their effectiveness",
      "Student engagement strategies",
      "Accessibility in interactive activities",
      "Data analytics for course improvement",
    ],
  },
  {
    time: "12:00 – 12:30",
    category: "Module",
    title: "Module 4: Case Study & Certification Process",
    speaker: "Dr. Allaoui & Dr. Amirouche, Blida 1 University",
    duration: "30 min",
    overview:
      "This practical module examines a real, successfully certified online course and walks participants through the complete submission and expertise evaluation process. The expert facilitators will demonstrate how a course is structured according to national standards, what makes a course certification-ready, and how it is evaluated against national criteria.",
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
    time: "12:30 – 13:30",
    category: "Final Q&A",
    title: "Final Q&A and Open Discussion",
    speaker: "All Speakers",
    duration: "15 min",
    overview:
      "A single concluding question-and-answer session bringing together the full day's themes. Participants can raise questions related to AI integration, pedagogical design, certification standards, and implementation challenges.",
    objectives: [
      "Clarify remaining questions across all sessions",
      "Connect themes from the full day program",
      "Enable direct exchange with all speakers",
    ],
    outcomes: [
      "Consolidated understanding of the full workshop",
      "Better clarity on implementation and certification",
      "Stronger participant engagement and confidence",
    ],
    competencies: [
      "Critical reflection",
      "Cross-session synthesis",
      "Professional dialogue",
    ],
    takeaways: [
      "Answers to participant questions",
      "Integrated understanding of workshop themes",
    ],
    topics: [
      "AI integration",
      "Certification",
      "Course design",
      "Implementation",
    ],
  },
  {
    time: "13:30 – 14:00",
    category: "Closing",
    title: "Synthesis, Deliverables Distribution & Closing",
    speaker: "Distance Learning Commission",
    duration: "30 min",
    overview:
      "The Distance Learning Commission will synthesize the day's key learnings, distribute comprehensive day materials and resources, and provide closing remarks. Participants will receive three essential deliverables that provide concrete tools and resources to implement what they've learned.",
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
      "Information about follow-up resources and support",
      "Connections with colleagues for ongoing collaboration",
      "Timeline for next steps in certification journey",
    ],
    topics: [
      "Summary",
      "Deliverables",
      "Closure",
      "Next steps",
      "Support resources",
    ],
  },
];

// ─── Badge config ─────────────────────────────────────────────────────────────

const BADGE = {
  Opening: {
    bg: "#f1f5f9",
    color: "#475569",
    border: "#cbd5e1",
    accent: "#64748b",
  },
  Keynote: {
    bg: "#f5f3ff",
    color: "#6d28d9",
    border: "#ddd6fe",
    accent: "#7c3aed",
  },
  Break: {
    bg: "#fffbeb",
    color: "#92400e",
    border: "#fde68a",
    accent: "#d97706",
  },
  Module: {
    bg: "#eff6ff",
    color: "#1d4ed8",
    border: "#bfdbfe",
    accent: "#2563eb",
  },
  "Final Q&A": {
    bg: "#f0fdf4",
    color: "#166534",
    border: "#bbf7d0",
    accent: "#16a34a",
  },
  Closing: {
    bg: "#f8fafc",
    color: "#334155",
    border: "#e2e8f0",
    accent: "#475569",
  },
};

// ─── Shared sub-components ────────────────────────────────────────────────────

function CategoryBadge({ category }) {
  const c = BADGE[category] || BADGE.Closing;
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        padding: "2px 9px",
        borderRadius: "4px",
        background: c.bg,
        color: c.color,
        border: `1px solid ${c.border}`,
        lineHeight: 1.7,
        whiteSpace: "nowrap",
      }}
    >
      {category}
    </span>
  );
}

function SectionLabel({ children }) {
  return (
    <p
      style={{
        margin: "0 0 8px",
        fontSize: "0.65rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: "var(--color-blue-600, #2563eb)",
      }}
    >
      {children}
    </p>
  );
}

function BulletList({ items }) {
  return (
    <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
      {items.map((item, i) => (
        <li
          key={i}
          style={{
            display: "flex",
            gap: "7px",
            alignItems: "flex-start",
            fontSize: "0.875rem",
            lineHeight: 1.65,
            color: "var(--color-primary-700, #374151)",
            marginBottom: "4px",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              width: 4,
              height: 4,
              borderRadius: "50%",
              background: "var(--color-blue-600, #2563eb)",
              opacity: 0.4,
              marginTop: "8px",
            }}
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

function TopicPills({ topics }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
      {topics.map((t, i) => (
        <span
          key={i}
          style={{
            fontSize: "0.775rem",
            fontWeight: 500,
            padding: "3px 11px",
            borderRadius: "20px",
            background: "var(--color-primary-50, #f0f4ff)",
            color: "var(--color-primary-700, #334155)",
            border: "1px solid var(--color-primary-200, #c7d2fe)",
          }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

// ─── Desktop: left nav item ───────────────────────────────────────────────────

function NavItem({ session, isActive, onClick, isLast }) {
  const c = BADGE[session.category] || BADGE.Closing;
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex",
        width: "100%",
        textAlign: "left",
        alignItems: "flex-start",
        gap: "10px",
        padding: "13px 14px",
        cursor: "pointer",
        background: isActive ? "#ffffff" : "transparent",
        borderLeft: `3px solid ${isActive ? c.accent : "transparent"}`,
        borderBottom: isLast
          ? "none"
          : "1px solid var(--color-primary-200, #e2e8f0)",
        transition: "background 0.14s, border-color 0.14s",
      }}
    >
      {/* Time */}
      <div style={{ flexShrink: 0, width: 54 }}>
        <span
          style={{
            display: "block",
            fontSize: "0.7rem",
            fontWeight: 700,
            color: isActive ? c.accent : "var(--color-primary-500, #64748b)",
            fontVariantNumeric: "tabular-nums",
            lineHeight: 1.3,
          }}
        >
          {session.time.split(" – ")[0]}
        </span>
        <span
          style={{
            display: "block",
            fontSize: "0.635rem",
            color: "#94a3b8",
            marginTop: 1,
          }}
        >
          {session.duration}
        </span>
      </div>

      {/* Content */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ marginBottom: 4 }}>
          <CategoryBadge category={session.category} />
        </div>
        <p
          style={{
            margin: "0 0 2px",
            fontSize: "0.84rem",
            fontWeight: isActive ? 700 : 600,
            lineHeight: 1.35,
            color: isActive ? c.color : "var(--color-primary-900, #0f172a)",
            /* Clamp to 2 lines to keep nav tight */
            overflow: "hidden",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {session.title}
        </p>
        {session.speaker !== "—" && (
          <p
            style={{
              margin: 0,
              fontSize: "0.72rem",
              color: "var(--color-primary-500, #6b7280)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {session.speaker}
          </p>
        )}
      </div>

      {isActive && (
        <svg
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
          style={{ flexShrink: 0, marginTop: 3 }}
        >
          <path
            d="M4.5 2.5l4 4-4 4"
            stroke={c.accent}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

// ─── Desktop: detail panel ────────────────────────────────────────────────────

function DetailPanel({ session }) {
  const c = BADGE[session.category] || BADGE.Closing;
  const isBreak = session.category === "Break";

  return (
    /* CRITICAL: overflow-hidden on container + overflow-y-auto on inner scroll div */
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
      }}
    >
      {/* Sticky header */}
      <div
        style={{
          flexShrink: 0,
          background: "#fff",
          borderBottom: "1px solid var(--color-primary-200, #e2e8f0)",
          borderTop: `3px solid ${c.accent}`,
          padding: "20px 26px 16px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: 9,
          }}
        >
          <CategoryBadge category={session.category} />
          <span
            style={{
              fontSize: "0.8rem",
              color: "var(--color-primary-500, #64748b)",
              fontWeight: 500,
            }}
          >
            {session.time}
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              color: "#94a3b8",
              background: "#f8fafc",
              border: "1px solid #e2e8f0",
              borderRadius: "4px",
              padding: "1px 7px",
            }}
          >
            {session.duration}
          </span>
        </div>
        <h3
          style={{
            margin: "0 0 5px",
            fontSize: "1.125rem",
            fontWeight: 700,
            letterSpacing: "-0.015em",
            color: "var(--color-primary-900, #0f172a)",
            lineHeight: 1.28,
          }}
        >
          {session.title}
        </h3>
        {session.speaker !== "—" && (
          <p
            style={{
              margin: 0,
              fontSize: "0.85rem",
              color: "var(--color-primary-600, #4b5563)",
            }}
          >
            {session.speaker}
          </p>
        )}
      </div>

      {/* Scrollable body */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "20px 26px 28px",
          minWidth: 0,
        }}
      >
        {/* Overview — always full width */}
        <p
          style={{
            margin: "0 0 20px",
            fontSize: "0.9rem",
            lineHeight: 1.78,
            color: "var(--color-primary-700, #374151)",
          }}
        >
          {session.overview}
        </p>

        {isBreak ? (
          <TopicPills topics={session.topics} />
        ) : (
          <div
            style={{ display: "flex", flexDirection: "column", gap: "18px" }}
          >
            {/* Objectives + Outcomes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px",
                paddingBottom: "18px",
                borderBottom: "1px solid var(--color-primary-200, #e2e8f0)",
                /* Prevent overflow */
                minWidth: 0,
              }}
            >
              <div style={{ minWidth: 0 }}>
                <SectionLabel>Learning Objectives</SectionLabel>
                <BulletList items={session.objectives} />
              </div>
              <div style={{ minWidth: 0 }}>
                <SectionLabel>Expected Outcomes</SectionLabel>
                <BulletList items={session.outcomes} />
              </div>
            </div>

            {/* Competencies + Takeaways */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "18px",
                paddingBottom: "18px",
                borderBottom: "1px solid var(--color-primary-200, #e2e8f0)",
                minWidth: 0,
              }}
            >
              <div style={{ minWidth: 0 }}>
                <SectionLabel>Key Competencies</SectionLabel>
                <BulletList items={session.competencies} />
              </div>
              <div style={{ minWidth: 0 }}>
                <SectionLabel>Practical Takeaways</SectionLabel>
                <BulletList items={session.takeaways} />
              </div>
            </div>

            {/* Key Topics */}
            <div>
              <SectionLabel>Key Topics</SectionLabel>
              <TopicPills topics={session.topics} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Desktop split-view ───────────────────────────────────────────────────────

function ProgramDesktopView({ sessions }) {
  const [active, setActive] = useState(1);

  return (
    <div
      style={{
        display: "grid",
        /* Left nav fixed at 272px; right detail takes all remaining space */
        gridTemplateColumns: "272px minmax(0, 1fr)",
        height: "100%",
        width: "100%",
        border: "1px solid var(--color-primary-200, #e2e8f0)",
        overflow: "hidden",
      }}
    >
      {/* LEFT */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid var(--color-primary-200, #e2e8f0)",
          background: "var(--color-primary-50, #f8fafc)",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <div
          style={{
            flexShrink: 0,
            padding: "12px 14px",
            borderBottom: "1px solid var(--color-primary-200, #e2e8f0)",
            background: "#fff",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "0.65rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-blue-600, #2563eb)",
            }}
          >
            Schedule · {sessions.length} Sessions
          </p>
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {sessions.map((s, i) => (
            <NavItem
              key={i}
              session={s}
              isActive={active === i}
              onClick={() => setActive(i)}
              isLast={i === sessions.length - 1}
            />
          ))}
        </div>
      </div>

      {/* RIGHT — minWidth 0 is critical to prevent grid blowout */}
      <div style={{ minWidth: 0, overflow: "hidden", background: "#fff" }}>
        <DetailPanel session={sessions[active]} />
      </div>
    </div>
  );
}

// ─── Mobile card ──────────────────────────────────────────────────────────────

function MobileCard({ session, isOpen, onToggle }) {
  const c = BADGE[session.category] || BADGE.Closing;
  const isBreak = session.category === "Break";

  return (
    <div
      style={{
        borderRadius: "8px",
        border: `1px solid ${isOpen ? c.border : "var(--color-primary-200, #e2e8f0)"}`,
        background: "#fff",
        overflow: "hidden",
        transition: "border-color 0.18s",
      }}
    >
      <button
        onClick={onToggle}
        style={{
          display: "flex",
          width: "100%",
          textAlign: "left",
          alignItems: "flex-start",
          gap: "12px",
          padding: "14px 16px",
          background: isOpen ? c.bg : "#fff",
          borderLeft: `3px solid ${isOpen ? c.accent : "transparent"}`,
          cursor: "pointer",
          transition: "background 0.15s, border-color 0.15s",
        }}
      >
        <div style={{ flexShrink: 0, width: 50 }}>
          <span
            style={{
              display: "block",
              fontSize: "0.63rem",
              fontWeight: 700,
              color: "var(--color-primary-600, #4b5563)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {session.time.split(" – ")[0]}
          </span>
          <span
            style={{
              display: "block",
              fontSize: "0.565rem",
              color: "#94a3b8",
              marginTop: 1,
            }}
          >
            {session.duration}
          </span>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: 5 }}>
            <CategoryBadge category={session.category} />
          </div>
          <p
            style={{
              margin: "0 0 2px",
              fontSize: "0.875rem",
              fontWeight: 600,
              lineHeight: 1.35,
              color: isOpen ? c.color : "var(--color-primary-900, #0f172a)",
            }}
          >
            {session.title}
          </p>
          {session.speaker !== "—" && (
            <p
              style={{
                margin: 0,
                fontSize: "0.715rem",
                color: "var(--color-primary-500, #6b7280)",
              }}
            >
              {session.speaker}
            </p>
          )}
        </div>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          style={{
            flexShrink: 0,
            marginTop: 3,
            transform: isOpen ? "rotate(180deg)" : "none",
            transition: "transform 0.18s",
          }}
        >
          <path
            d="M3.5 5.5l4 4 4-4"
            stroke={isOpen ? c.accent : "#94a3b8"}
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          style={{
            padding: "16px 16px 20px",
            borderTop: `1px solid ${c.border}`,
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              fontSize: "0.8125rem",
              lineHeight: 1.72,
              color: "var(--color-primary-700, #374151)",
            }}
          >
            {session.overview}
          </p>
          {isBreak ? (
            <TopicPills topics={session.topics} />
          ) : (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "13px" }}
            >
              <div>
                <SectionLabel>Learning Objectives</SectionLabel>
                <BulletList items={session.objectives} />
              </div>
              <div>
                <SectionLabel>Expected Outcomes</SectionLabel>
                <BulletList items={session.outcomes} />
              </div>
              <div>
                <SectionLabel>Key Competencies</SectionLabel>
                <BulletList items={session.competencies} />
              </div>
              <div>
                <SectionLabel>Practical Takeaways</SectionLabel>
                <BulletList items={session.takeaways} />
              </div>
              <div>
                <SectionLabel>Key Topics</SectionLabel>
                <TopicPills topics={session.topics} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ProgramMobileView({ sessions }) {
  const [open, setOpen] = useState(null);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      {sessions.map((s, i) => (
        <MobileCard
          key={i}
          session={s}
          isOpen={open === i}
          onToggle={() => setOpen(open === i ? null : i)}
        />
      ))}
    </div>
  );
}

// ─── Overview bar ─────────────────────────────────────────────────────────────

function OverviewBar() {
  const stats = [
    { label: "Format", value: "Full Day Workshop" },
    { label: "Time", value: "08:30 – 14:00" },
    { label: "Duration", value: "Approx. 5.30 hours" },
    {
      label: "Structure",
      value: "Opening · Keynote · 4 Modules · Q&A · Closing",
    },
  ];
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden mb-8"
      style={{
        border: "1px solid var(--color-primary-200, #e2e8f0)",
        gap: "1px",
        background: "var(--color-primary-200, #e2e8f0)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
      }}
    >
      {stats.map((s) => (
        <div key={s.label} style={{ background: "#fff", padding: "13px 18px" }}>
          <p
            style={{
              margin: "0 0 3px",
              fontSize: "0.65rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: "var(--color-blue-600, #2563eb)",
            }}
          >
            {s.label}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-primary-900, #0f172a)",
              lineHeight: 1.4,
            }}
          >
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Root component ───────────────────────────────────────────────────────────

export default function ProgramSection() {
  return (
    <section
      id="program"
      className="py-16 sm:py-20"
      style={{ background: "var(--color-primary-50, #f8fafc)" }}
    >
      {/* Always max-w-7xl */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p
            className="flex items-center justify-center gap-1.5 mb-3"
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "var(--color-blue-600, #2563eb)",
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <rect
                x="1"
                y="2"
                width="10"
                height="9"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path d="M1 5h10" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M4 1v2M8 1v2"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            Workshop Program
          </p>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight mb-3"
            style={{
              color: "var(--color-primary-900, #0f172a)",
              lineHeight: 1.15,
            }}
          >
            Full Day Academic Program
          </h2>
          <p
            className="text-sm sm:text-[15px] leading-relaxed"
            style={{ color: "var(--color-primary-700, #374151)" }}
          >
            A structured full-day program combining an expert keynote on
            pedagogical AI, four technical training modules on online course
            certification, and a concluding open Q&A session. Select any session
            to explore its full objectives and outcomes.
          </p>
        </div>

        {/* Stats bar */}
        <OverviewBar />

        {/* Desktop view — lg and above */}
        <div className="hidden lg:block">
          <ProgramDesktopView sessions={SESSIONS} />
        </div>

        {/* Mobile view — below lg */}
        <div className="lg:hidden">
          <ProgramMobileView sessions={SESSIONS} />
        </div>
      </div>
    </section>
  );
}
