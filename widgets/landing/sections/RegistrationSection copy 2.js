"use client";

import { useMemo, useRef, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────────────────────── */

const STEPS = [
  {
    id: 1,
    label: "Your Profile",
    short: "Profile",
    desc: "Basic information and background",
  },
  {
    id: 2,
    label: "Course Certification",
    short: "Certification",
    desc: "Moodle experience and certification readiness",
  },
  {
    id: 3,
    label: "Pedagogical AI",
    short: "AI Usage",
    desc: "AI knowledge, tools, and interests",
  },
  {
    id: 4,
    label: "Expectations",
    short: "Expectations",
    desc: "What would make this workshop most useful",
  },
];

const FACULTY_GROUPS = [
  {
    label: "Faculties",
    options: [
      "Faculty of Medicine",
      "Faculty of Technology",
      "Faculty of Sciences",
      "Faculty of Natural and Life Sciences",
    ],
  },
  {
    label: "Institutes",
    options: [
      "Institute of Veterinary Sciences",
      "Institute of Aeronautics and Space Studies",
      "Institute of Architecture and Urban Planning",
      "Institute of Applied Sciences and Techniques",
    ],
  },
];

const STATUS_OPTIONS = [
  "Lecturer (Faculty Member)",
  "Administrative Staff",
  "Department Head",
  "NTIC Staff",
  "Other",
];

const ATTENDANCE_OPTIONS = [
  "Yes, I will attend",
  "No, I cannot attend",
  "Not sure yet",
];

// ── Scale questions (rendered as horizontal scale UI) ──
const YEARS_HE_SCALE = [
  "< 2 years",
  "2–5 years",
  "6–10 years",
  "11–15 years",
  "16–20 years",
  "> 20 years",
];

const YEARS_ONLINE_SCALE = [
  "None",
  "< 1 year",
  "1–2 years",
  "3–5 years",
  "> 5 years",
];

const MOODLE_EXPERIENCE_SCALE = [
  "Never used",
  "Basic",
  "Intermediate",
  "Advanced",
  "Expert",
];

const ONLINE_COURSES_SCALE = [
  "None yet",
  "1 course",
  "2–3 courses",
  "4–5 courses",
  "5+ courses",
];

const CERTIFICATION_KNOWLEDGE_SCALE = [
  "Very low",
  "Low",
  "Moderate",
  "High",
  "Very high",
];

const PEDAGOGICAL_AI_KNOWLEDGE_SCALE = [
  "Never heard of it",
  "Aware, not used",
  "Some understanding",
  "Used in teaching",
  "Regularly integrate",
];

const MOODLE_FEATURES_OPTIONS = [
  "Quizzes and assessments",
  "Assignments and submissions",
  "Forums and discussions",
  "H5P interactive content",
  "SCORM packages",
  "Collaborative workspaces",
  "Video conferencing integration",
  "Surveys and polls",
  "None of the above",
  "Other",
];

const COURSE_STATUS_OPTIONS = [
  "I do not yet have online courses",
  "I have online courses but have not pursued certification",
  "I am preparing courses for certification",
  "I have submitted courses for certification",
  "I have already received certification for at least one course",
  "I do not plan to certify my courses",
];

const KNOWLEDGE_GAP_OPTIONS = [
  "Understanding regulatory requirements and process",
  "Designing courses per the pedagogical charter",
  "Creating interactive and engaging learning activities",
  "Implementing effective assessment strategies",
  "Preparing required documentation",
  "Using the Moodle platform effectively",
  "Technical aspects of course submission",
  "I feel confident in all areas",
  "Other",
];

const BARRIER_OPTIONS = [
  "Time constraints",
  "Technical skills with Moodle",
  "Uncertain about course design principles",
  "Unclear or confusing requirements",
  "Lack of institutional support",
  "Not convinced of the value of certification",
  "Other",
];

const SUCCESS_RESOURCES_OPTIONS = [
  "Clearer guidelines and documentation",
  "Ready-made templates and course examples",
  "Ongoing technical support",
  "Peer mentoring or collaboration",
  "Dedicated time allocation for redesign",
  "Additional training or workshops",
  "Access to AI tools and resources",
  "Other",
];

const CERTIFY_PLAN_OPTIONS = [
  "Yes — I have already identified courses to certify",
  "Probably — I need to plan the timeline",
  "Unlikely — I have other priorities",
  "No — I do not plan to certify courses",
  "Unsure",
];

const AI_TOOLS_USED_OPTIONS = [
  "ChatGPT or similar language models",
  "AI-powered tutoring systems",
  "Automated grading or feedback tools",
  "AI-driven learning analytics",
  "Adaptive learning platforms",
  "AI-powered content creation tools",
  "Other AI tools",
  "I have not used any AI tools in teaching",
];

const AI_INTERESTS_OPTIONS = [
  "Personalizing learning for students",
  "Automating routine tasks (grading, feedback)",
  "Enhancing student engagement",
  "Providing real-time student support",
  "Analyzing learning patterns",
  "Creating adaptive content",
  "Improving course design",
  "Other",
];

const WORKSHOP_VALUE_OPTIONS = [
  "Practical demos with real course examples",
  "Clear explanation of certification requirements",
  "Templates and tools I can use immediately",
  "Networking with educators and specialists",
  "Ongoing support after the workshop",
  "Certifying one of my own courses",
  "Understanding how to integrate AI into teaching",
  "Other",
];

const HEARD_ABOUT_OPTIONS = [
  "Email from my department or university",
  "Colleague or peer recommendation",
  "Posted flyer or announcement",
  "University website or portal",
  "Social media",
  "Other",
];

const REQUIRED_FIELDS = {
  0: [
    "fullName",
    "email",
    "faculty",
    "status",
    "attendance",
    "yearsHigherEducation",
    "yearsTeachingOnline",
  ],
  1: [
    "moodleExperience",
    "onlineCoursesCount",
    "moodleFeaturesUsed",
    "certificationKnowledge",
    "courseStatus",
    "knowledgeGaps",
    "primaryBarrier",
    "resourcesNeeded",
    "certifyPlan",
  ],
  2: ["pedagogicalAiKnowledge", "aiToolsUsed", "aiInterests"],
  3: ["workshopValue", "heardAboutWorkshop"],
};

const INITIAL = {
  fullName: "",
  email: "",
  faculty: "",
  status: "",
  statusOther: "",
  attendance: "",
  yearsHigherEducation: "",
  yearsTeachingOnline: "",
  moodleExperience: "",
  onlineCoursesCount: "",
  moodleFeaturesUsed: [],
  moodleFeaturesOther: "",
  certificationKnowledge: "",
  courseStatus: [],
  knowledgeGaps: [],
  knowledgeGapsOther: "",
  primaryBarrier: "",
  primaryBarrierOther: "",
  resourcesNeeded: [],
  resourcesNeededOther: "",
  certifyPlan: "",
  pedagogicalAiKnowledge: "",
  aiToolsUsed: [],
  aiToolsUsedOther: "",
  aiInterests: [],
  aiInterestsOther: "",
  workshopValue: [],
  workshopValueOther: "",
  heardAboutWorkshop: "",
  heardAboutWorkshopOther: "",
  additionalComments: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */

export default function RegistrationSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(INITIAL);
  const [touched, setTouched] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);
  const fieldRefs = useRef({});
  const topRef = useRef(null);

  const totalSteps = STEPS.length;

  function set(key, val) {
    setForm((p) => ({ ...p, [key]: val }));
  }
  function toggle(key, val) {
    setForm((p) => ({
      ...p,
      [key]: p[key].includes(val)
        ? p[key].filter((v) => v !== val)
        : [...p[key], val],
    }));
  }

  function isEmpty(v) {
    return Array.isArray(v) ? v.length === 0 : !v || !String(v).trim();
  }

  function validate(key) {
    const v = form[key];
    if (key === "email") return !!v && EMAIL_RE.test(v);
    if (key === "status")
      return (
        !isEmpty(form.status) &&
        (form.status !== "Other" || !isEmpty(form.statusOther))
      );
    if (key === "moodleFeaturesUsed")
      return (
        form.moodleFeaturesUsed.length > 0 &&
        (!form.moodleFeaturesUsed.includes("Other") ||
          !isEmpty(form.moodleFeaturesOther))
      );
    if (key === "knowledgeGaps")
      return (
        form.knowledgeGaps.length > 0 &&
        (!form.knowledgeGaps.includes("Other") ||
          !isEmpty(form.knowledgeGapsOther))
      );
    if (key === "primaryBarrier")
      return (
        !isEmpty(form.primaryBarrier) &&
        (form.primaryBarrier !== "Other" || !isEmpty(form.primaryBarrierOther))
      );
    if (key === "resourcesNeeded")
      return (
        form.resourcesNeeded.length > 0 &&
        (!form.resourcesNeeded.includes("Other") ||
          !isEmpty(form.resourcesNeededOther))
      );
    if (key === "aiToolsUsed")
      return (
        form.aiToolsUsed.length > 0 &&
        (!form.aiToolsUsed.includes("Other AI tools") ||
          !isEmpty(form.aiToolsUsedOther))
      );
    if (key === "aiInterests")
      return (
        form.aiInterests.length > 0 &&
        (!form.aiInterests.includes("Other") || !isEmpty(form.aiInterestsOther))
      );
    if (key === "workshopValue")
      return (
        form.workshopValue.length > 0 &&
        (!form.workshopValue.includes("Other") ||
          !isEmpty(form.workshopValueOther))
      );
    if (key === "heardAboutWorkshop")
      return (
        !isEmpty(form.heardAboutWorkshop) &&
        (form.heardAboutWorkshop !== "Other" ||
          !isEmpty(form.heardAboutWorkshopOther))
      );
    if (key === "courseStatus") return form.courseStatus.length > 0;
    return !isEmpty(v);
  }

  function isStepValid(s) {
    return (REQUIRED_FIELDS[s] || []).every(validate);
  }
  function countDone(s) {
    return (REQUIRED_FIELDS[s] || []).filter(validate).length;
  }

  const overallDone = useMemo(
    () => Object.keys(REQUIRED_FIELDS).reduce((a, k) => a + countDone(+k), 0),
    [form],
  );
  const overallTotal = useMemo(
    () => Object.values(REQUIRED_FIELDS).reduce((a, arr) => a + arr.length, 0),
    [],
  );
  const overallPct = Math.round((overallDone / overallTotal) * 100);
  const stepDone = countDone(step);
  const stepTotal = (REQUIRED_FIELDS[step] || []).length;

  function focusFirst(s) {
    const first = (REQUIRED_FIELDS[s] || []).find((k) => !validate(k));
    if (!first) return;
    requestAnimationFrame(() => {
      const el = fieldRefs.current[first];
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      if (el.focus) el.focus();
    });
  }

  function goNext() {
    const allKeys = REQUIRED_FIELDS[step] || [];
    const touched2 = {};
    allKeys.forEach((k) => (touched2[k] = true));
    setTouched((p) => ({ ...p, ...touched2 }));
    if (!isStepValid(step)) {
      focusFirst(step);
      return;
    }
    const next = step + 1;
    setStep(next);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goPrev() {
    setStep((p) => Math.max(p - 1, 0));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isStepValid(step)) {
      focusFirst(step);
      return;
    }
    setShowSuccess(true);
    setForm(INITIAL);
    setStep(0);
    setTouched({});
  }

  function fieldError(key) {
    return touched[key] && !validate(key);
  }

  /* ── Success screen ── */
  if (showSuccess) {
    return (
      <section
        id="registration"
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24"
      >
        <div className="max-w-lg mx-auto text-center">
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background: "#f0fdf4",
              border: "1px solid #bbf7d0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path
                d="M6 14l6 6 10-12"
                stroke="#16a34a"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "var(--color-primary-900)",
              marginBottom: 12,
            }}
          >
            Registration Submitted
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.7,
              color: "var(--color-primary-600)",
              marginBottom: 32,
            }}
          >
            Your responses have been recorded. The backend submission will be
            connected before the event.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            style={{
              padding: "10px 28px",
              borderRadius: 8,
              background: "var(--color-blue-600)",
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
              cursor: "pointer",
              border: "none",
            }}
          >
            Fill the form again
          </button>
        </div>
      </section>
    );
  }

  /* ── Main form ── */
  return (
    <section
      id="registration"
      ref={topRef}
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      {/* ── Section header ── */}
      <div style={{ maxWidth: 600, marginBottom: 40 }}>
        <p
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "var(--color-blue-600)",
            marginBottom: 10,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect
              x="1"
              y="1.5"
              width="10"
              height="9"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.3"
            />
            <path
              d="M4 1v2M8 1v2"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path d="M1 5h10" stroke="currentColor" strokeWidth="1.3" />
          </svg>
          Workshop Registration
        </p>
        <h2
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--color-primary-900)",
            lineHeight: 1.15,
            marginBottom: 12,
          }}
        >
          Register &amp; Baseline Assessment
        </h2>
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: "var(--color-primary-700)",
          }}
        >
          Complete this form to confirm your participation and help us tailor
          the workshop to your needs. It takes about 5–8 minutes.
        </p>
      </div>

      {/* ── Progress + Stepper block (vertical stack) ── */}
      <StepperBlock
        step={step}
        totalSteps={totalSteps}
        pct={overallPct}
        stepDone={stepDone}
        stepTotal={stepTotal}
      />

      {/* ── Form card ── */}
      <form onSubmit={handleSubmit} noValidate>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            border: "1px solid var(--color-primary-200, #e2e8f0)",
            boxShadow:
              "0 1px 3px rgba(0,0,0,0.04), 0 6px 20px rgba(0,0,0,0.04)",
            overflow: "hidden",
          }}
        >
          {/* Step header bar */}
          <div
            style={{
              padding: "18px 28px",
              borderBottom: "1px solid var(--color-primary-200, #e2e8f0)",
              background: "var(--color-primary-50, #f8fafc)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.6rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-blue-600)",
                }}
              >
                Step {step + 1} of {totalSteps}
              </p>
              <p
                style={{
                  margin: "3px 0 0",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "var(--color-primary-900)",
                }}
              >
                {STEPS[step].label}
              </p>
            </div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 600,
                color:
                  stepDone === stepTotal
                    ? "#166534"
                    : "var(--color-primary-600)",
                background:
                  stepDone === stepTotal
                    ? "#f0fdf4"
                    : "var(--color-primary-100, #f0f4ff)",
                border: `1px solid ${stepDone === stepTotal ? "#bbf7d0" : "var(--color-primary-200, #e2e8f0)"}`,
                borderRadius: 20,
                padding: "4px 12px",
              }}
            >
              {stepDone === stepTotal
                ? "✓ Step complete"
                : `${stepDone} / ${stepTotal} fields`}
            </div>
          </div>

          {/* Form body */}
          <div style={{ padding: "28px 28px 8px" }}>
            {/* ─── STEP 1 ─── */}
            {step === 0 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <QRow label="Full Name" required error={fieldError("fullName")}>
                  <TextInput
                    value={form.fullName}
                    placeholder="Your full professional name"
                    onChange={(v) => {
                      set("fullName", v);
                      setTouched((p) => ({ ...p, fullName: true }));
                    }}
                    inputRef={(el) => (fieldRefs.current.fullName = el)}
                    hasError={fieldError("fullName")}
                  />
                </QRow>

                <QRow
                  label="Email Address"
                  required
                  error={fieldError("email")}
                  help="Used for registration confirmation."
                >
                  <TextInput
                    type="email"
                    value={form.email}
                    placeholder="your@university.dz"
                    onChange={(v) => {
                      set("email", v);
                      setTouched((p) => ({ ...p, email: true }));
                    }}
                    inputRef={(el) => (fieldRefs.current.email = el)}
                    hasError={fieldError("email")}
                  />
                  {form.email && !EMAIL_RE.test(form.email) && (
                    <p
                      style={{
                        margin: "4px 0 0",
                        fontSize: "0.78rem",
                        color: "#dc2626",
                      }}
                    >
                      Please enter a valid email address.
                    </p>
                  )}
                </QRow>

                <QRow
                  label="Faculty / Institute"
                  required
                  error={fieldError("faculty")}
                >
                  <SelectInput
                    value={form.faculty}
                    onChange={(v) => {
                      set("faculty", v);
                      setTouched((p) => ({ ...p, faculty: true }));
                    }}
                    groups={FACULTY_GROUPS}
                    placeholder="— Select your faculty or institute —"
                    inputRef={(el) => (fieldRefs.current.faculty = el)}
                    hasError={fieldError("faculty")}
                  />
                </QRow>

                <QRow label="Your Role" required error={fieldError("status")}>
                  <ChipGroup
                    options={STATUS_OPTIONS}
                    value={form.status}
                    type="radio"
                    onChange={(v) => {
                      set("status", v);
                      setTouched((p) => ({ ...p, status: true }));
                    }}
                    inputRef={(el) => (fieldRefs.current.status = el)}
                  />
                  {form.status === "Other" && (
                    <TextInput
                      value={form.statusOther}
                      placeholder="Please specify your role"
                      onChange={(v) => set("statusOther", v)}
                      style={{ marginTop: 10 }}
                    />
                  )}
                </QRow>

                <QRow
                  label="Will you attend the workshop on April 15, 2026?"
                  required
                  error={fieldError("attendance")}
                >
                  <ChipGroup
                    options={ATTENDANCE_OPTIONS}
                    value={form.attendance}
                    type="radio"
                    onChange={(v) => {
                      set("attendance", v);
                      setTouched((p) => ({ ...p, attendance: true }));
                    }}
                    inputRef={(el) => (fieldRefs.current.attendance = el)}
                  />
                </QRow>

                <QRow
                  label="Years of experience in higher education"
                  required
                  error={fieldError("yearsHigherEducation")}
                >
                  <ScaleSelector
                    options={YEARS_HE_SCALE}
                    value={form.yearsHigherEducation}
                    onChange={(v) => {
                      set("yearsHigherEducation", v);
                      setTouched((p) => ({ ...p, yearsHigherEducation: true }));
                    }}
                    inputRef={(el) =>
                      (fieldRefs.current.yearsHigherEducation = el)
                    }
                  />
                </QRow>

                <QRow
                  label="Years of experience teaching online"
                  required
                  error={fieldError("yearsTeachingOnline")}
                >
                  <ScaleSelector
                    options={YEARS_ONLINE_SCALE}
                    value={form.yearsTeachingOnline}
                    onChange={(v) => {
                      set("yearsTeachingOnline", v);
                      setTouched((p) => ({ ...p, yearsTeachingOnline: true }));
                    }}
                    inputRef={(el) =>
                      (fieldRefs.current.yearsTeachingOnline = el)
                    }
                  />
                </QRow>
              </div>
            )}

            {/* ─── STEP 2 ─── */}
            {step === 1 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <QRow
                  label="Your experience level with Moodle"
                  required
                  error={fieldError("moodleExperience")}
                >
                  <ScaleSelector
                    options={MOODLE_EXPERIENCE_SCALE}
                    value={form.moodleExperience}
                    onChange={(v) => {
                      set("moodleExperience", v);
                      setTouched((p) => ({ ...p, moodleExperience: true }));
                    }}
                    inputRef={(el) => (fieldRefs.current.moodleExperience = el)}
                    accentColor="#2563eb"
                  />
                </QRow>

                <QRow
                  label="Number of online courses you have designed or taught"
                  required
                  error={fieldError("onlineCoursesCount")}
                >
                  <ScaleSelector
                    options={ONLINE_COURSES_SCALE}
                    value={form.onlineCoursesCount}
                    onChange={(v) => {
                      set("onlineCoursesCount", v);
                      setTouched((p) => ({ ...p, onlineCoursesCount: true }));
                    }}
                    inputRef={(el) =>
                      (fieldRefs.current.onlineCoursesCount = el)
                    }
                    accentColor="#2563eb"
                  />
                </QRow>

                <QRow
                  label="Which Moodle features have you used?"
                  required
                  help="Select all that apply."
                  error={fieldError("moodleFeaturesUsed")}
                >
                  <div
                    ref={(el) => (fieldRefs.current.moodleFeaturesUsed = el)}
                    tabIndex={-1}
                  >
                    <ChipGroup
                      options={MOODLE_FEATURES_OPTIONS}
                      values={form.moodleFeaturesUsed}
                      type="checkbox"
                      onToggle={(v) => {
                        toggle("moodleFeaturesUsed", v);
                        setTouched((p) => ({ ...p, moodleFeaturesUsed: true }));
                      }}
                    />
                  </div>
                  {form.moodleFeaturesUsed.includes("Other") && (
                    <TextInput
                      value={form.moodleFeaturesOther}
                      placeholder="Please specify"
                      onChange={(v) => set("moodleFeaturesOther", v)}
                      style={{ marginTop: 10 }}
                    />
                  )}
                </QRow>

                <QRow
                  label="Your knowledge of national certification requirements"
                  required
                  error={fieldError("certificationKnowledge")}
                >
                  <ScaleSelector
                    options={CERTIFICATION_KNOWLEDGE_SCALE}
                    value={form.certificationKnowledge}
                    onChange={(v) => {
                      set("certificationKnowledge", v);
                      setTouched((p) => ({
                        ...p,
                        certificationKnowledge: true,
                      }));
                    }}
                    inputRef={(el) =>
                      (fieldRefs.current.certificationKnowledge = el)
                    }
                    accentColor="#2563eb"
                  />
                </QRow>

                <QRow
                  label="Current status of your online courses"
                  required
                  help="Select all that apply."
                  error={fieldError("courseStatus")}
                >
                  <div
                    ref={(el) => (fieldRefs.current.courseStatus = el)}
                    tabIndex={-1}
                  >
                    <ChipGroup
                      options={COURSE_STATUS_OPTIONS}
                      values={form.courseStatus}
                      type="checkbox"
                      onToggle={(v) => {
                        toggle("courseStatus", v);
                        setTouched((p) => ({ ...p, courseStatus: true }));
                      }}
                    />
                  </div>
                </QRow>

                <QRow
                  label="Your primary knowledge gaps regarding certification"
                  required
                  help="Select the areas where support would be most useful."
                  error={fieldError("knowledgeGaps")}
                >
                  <div
                    ref={(el) => (fieldRefs.current.knowledgeGaps = el)}
                    tabIndex={-1}
                  >
                    <ChipGroup
                      options={KNOWLEDGE_GAP_OPTIONS}
                      values={form.knowledgeGaps}
                      type="checkbox"
                      onToggle={(v) => {
                        toggle("knowledgeGaps", v);
                        setTouched((p) => ({ ...p, knowledgeGaps: true }));
                      }}
                    />
                  </div>
                  {form.knowledgeGaps.includes("Other") && (
                    <TextInput
                      value={form.knowledgeGapsOther}
                      placeholder="Please specify"
                      onChange={(v) => set("knowledgeGapsOther", v)}
                      style={{ marginTop: 10 }}
                    />
                  )}
                </QRow>

                <QRow
                  label="Your primary barrier to course certification"
                  required
                  error={fieldError("primaryBarrier")}
                >
                  <ChipGroup
                    options={BARRIER_OPTIONS}
                    value={form.primaryBarrier}
                    type="radio"
                    onChange={(v) => {
                      set("primaryBarrier", v);
                      setTouched((p) => ({ ...p, primaryBarrier: true }));
                    }}
                    inputRef={(el) => (fieldRefs.current.primaryBarrier = el)}
                  />
                  {form.primaryBarrier === "Other" && (
                    <TextInput
                      value={form.primaryBarrierOther}
                      placeholder="Please specify"
                      onChange={(v) => set("primaryBarrierOther", v)}
                      style={{ marginTop: 10 }}
                    />
                  )}
                </QRow>

                <QRow
                  label="Resources that would most help you succeed"
                  required
                  help="Choose the support types that would make the biggest difference."
                  error={fieldError("resourcesNeeded")}
                >
                  <div
                    ref={(el) => (fieldRefs.current.resourcesNeeded = el)}
                    tabIndex={-1}
                  >
                    <ChipGroup
                      options={SUCCESS_RESOURCES_OPTIONS}
                      values={form.resourcesNeeded}
                      type="checkbox"
                      onToggle={(v) => {
                        toggle("resourcesNeeded", v);
                        setTouched((p) => ({ ...p, resourcesNeeded: true }));
                      }}
                    />
                  </div>
                  {form.resourcesNeeded.includes("Other") && (
                    <TextInput
                      value={form.resourcesNeededOther}
                      placeholder="Please specify"
                      onChange={(v) => set("resourcesNeededOther", v)}
                      style={{ marginTop: 10 }}
                    />
                  )}
                </QRow>

                <QRow
                  label="Do you plan to certify at least one course within 6 months after this workshop?"
                  required
                  error={fieldError("certifyPlan")}
                >
                  <ChipGroup
                    options={CERTIFY_PLAN_OPTIONS}
                    value={form.certifyPlan}
                    type="radio"
                    onChange={(v) => {
                      set("certifyPlan", v);
                      setTouched((p) => ({ ...p, certifyPlan: true }));
                    }}
                    inputRef={(el) => (fieldRefs.current.certifyPlan = el)}
                  />
                </QRow>
              </div>
            )}

            {/* ─── STEP 3 ─── */}
            {step === 2 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <QRow
                  label="Your knowledge of pedagogical AI applications"
                  required
                  error={fieldError("pedagogicalAiKnowledge")}
                >
                  <ScaleSelector
                    options={PEDAGOGICAL_AI_KNOWLEDGE_SCALE}
                    value={form.pedagogicalAiKnowledge}
                    onChange={(v) => {
                      set("pedagogicalAiKnowledge", v);
                      setTouched((p) => ({
                        ...p,
                        pedagogicalAiKnowledge: true,
                      }));
                    }}
                    inputRef={(el) =>
                      (fieldRefs.current.pedagogicalAiKnowledge = el)
                    }
                    accentColor="#7c3aed"
                  />
                </QRow>

                <QRow
                  label="AI tools you have used in your teaching"
                  required
                  help="Select all that apply."
                  error={fieldError("aiToolsUsed")}
                >
                  <div
                    ref={(el) => (fieldRefs.current.aiToolsUsed = el)}
                    tabIndex={-1}
                  >
                    <ChipGroup
                      options={AI_TOOLS_USED_OPTIONS}
                      values={form.aiToolsUsed}
                      type="checkbox"
                      onToggle={(v) => {
                        toggle("aiToolsUsed", v);
                        setTouched((p) => ({ ...p, aiToolsUsed: true }));
                      }}
                    />
                  </div>
                  {form.aiToolsUsed.includes("Other AI tools") && (
                    <TextInput
                      value={form.aiToolsUsedOther}
                      placeholder="Please specify"
                      onChange={(v) => set("aiToolsUsedOther", v)}
                      style={{ marginTop: 10 }}
                    />
                  )}
                </QRow>

                <QRow
                  label="What interests you most about pedagogical AI?"
                  required
                  help="Choose the directions most relevant to your teaching practice."
                  error={fieldError("aiInterests")}
                >
                  <div
                    ref={(el) => (fieldRefs.current.aiInterests = el)}
                    tabIndex={-1}
                  >
                    <ChipGroup
                      options={AI_INTERESTS_OPTIONS}
                      values={form.aiInterests}
                      type="checkbox"
                      onToggle={(v) => {
                        toggle("aiInterests", v);
                        setTouched((p) => ({ ...p, aiInterests: true }));
                      }}
                    />
                  </div>
                  {form.aiInterests.includes("Other") && (
                    <TextInput
                      value={form.aiInterestsOther}
                      placeholder="Please specify"
                      onChange={(v) => set("aiInterestsOther", v)}
                      style={{ marginTop: 10 }}
                    />
                  )}
                </QRow>
              </div>
            )}

            {/* ─── STEP 4 ─── */}
            {step === 3 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <QRow
                  label="What would make this workshop most valuable for you?"
                  required
                  help="Choose the outcomes that matter most."
                  error={fieldError("workshopValue")}
                >
                  <div
                    ref={(el) => (fieldRefs.current.workshopValue = el)}
                    tabIndex={-1}
                  >
                    <ChipGroup
                      options={WORKSHOP_VALUE_OPTIONS}
                      values={form.workshopValue}
                      type="checkbox"
                      onToggle={(v) => {
                        toggle("workshopValue", v);
                        setTouched((p) => ({ ...p, workshopValue: true }));
                      }}
                    />
                  </div>
                  {form.workshopValue.includes("Other") && (
                    <TextInput
                      value={form.workshopValueOther}
                      placeholder="Please specify"
                      onChange={(v) => set("workshopValueOther", v)}
                      style={{ marginTop: 10 }}
                    />
                  )}
                </QRow>

                <QRow
                  label="How did you hear about this workshop?"
                  required
                  error={fieldError("heardAboutWorkshop")}
                >
                  <ChipGroup
                    options={HEARD_ABOUT_OPTIONS}
                    value={form.heardAboutWorkshop}
                    type="radio"
                    onChange={(v) => {
                      set("heardAboutWorkshop", v);
                      setTouched((p) => ({ ...p, heardAboutWorkshop: true }));
                    }}
                    inputRef={(el) =>
                      (fieldRefs.current.heardAboutWorkshop = el)
                    }
                  />
                  {form.heardAboutWorkshop === "Other" && (
                    <TextInput
                      value={form.heardAboutWorkshopOther}
                      placeholder="Please specify"
                      onChange={(v) => set("heardAboutWorkshopOther", v)}
                      style={{ marginTop: 10 }}
                    />
                  )}
                </QRow>

                <QRow
                  label="Anything else you'd like us to know?"
                  help="Optional — your comments will help us prepare."
                >
                  <TextareaInput
                    value={form.additionalComments}
                    placeholder="Share any additional context, questions, or expectations…"
                    onChange={(v) => set("additionalComments", v)}
                    inputRef={(el) =>
                      (fieldRefs.current.additionalComments = el)
                    }
                  />
                </QRow>
              </div>
            )}
          </div>

          {/* ── Footer nav ── */}
          <div
            style={{
              padding: "20px 28px",
              borderTop: "1px solid var(--color-primary-200, #e2e8f0)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 12,
              background: "var(--color-primary-50, #f8fafc)",
              marginTop: 20,
            }}
          >
            <button
              type="button"
              onClick={goPrev}
              disabled={step === 0}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "9px 18px",
                borderRadius: 8,
                border: "1px solid var(--color-primary-300, #cbd5e1)",
                background: "#fff",
                cursor: step === 0 ? "not-allowed" : "pointer",
                fontSize: "0.85rem",
                fontWeight: 500,
                color: step === 0 ? "#94a3b8" : "var(--color-primary-700)",
                opacity: step === 0 ? 0.5 : 1,
                transition: "all 0.15s",
              }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 2L4 7l5 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Previous
            </button>

            <div
              style={{
                fontSize: "0.78rem",
                color: "var(--color-primary-500)",
                textAlign: "center",
              }}
            >
              {stepDone < stepTotal ? (
                <span>
                  Complete {stepTotal - stepDone} more required field
                  {stepTotal - stepDone > 1 ? "s" : ""} to continue
                </span>
              ) : (
                <span style={{ color: "#166534", fontWeight: 600 }}>
                  ✓ Ready to continue
                </span>
              )}
            </div>

            {step < totalSteps - 1 ? (
              <button
                type="button"
                onClick={goNext}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "9px 22px",
                  borderRadius: 8,
                  background: "var(--color-blue-600, #2563eb)",
                  color: "#fff",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  transition: "background 0.15s",
                }}
              >
                Next step
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 2l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            ) : (
              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "9px 22px",
                  borderRadius: 8,
                  background: "#16a34a",
                  color: "#fff",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  transition: "background 0.15s",
                }}
              >
                Submit Registration
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M2 7h10M8 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   STEPPER BLOCK — progress bar + step tabs stacked vertically
───────────────────────────────────────────────────────────── */

function StepperBlock({ step, totalSteps, pct, stepDone, stepTotal }) {
  return (
    <div
      style={{
        marginBottom: 24,
        borderRadius: 14,
        border: "1px solid var(--color-primary-200, #e2e8f0)",
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
      }}
    >
      {/* Row 1: Overall progress */}
      <div
        style={{
          padding: "14px 20px 12px",
          borderBottom: "1px solid var(--color-primary-200, #e2e8f0)",
          display: "flex",
          alignItems: "center",
          gap: 16,
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 6,
            }}
          >
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 600,
                color: "var(--color-primary-600)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
              }}
            >
              Overall Progress
            </span>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                color: "var(--color-primary-900)",
              }}
            >
              {pct}%
            </span>
          </div>
          <div
            style={{
              height: 6,
              borderRadius: 99,
              background: "var(--color-primary-100, #e0e7ff)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                borderRadius: 99,
                background: "var(--color-blue-600, #2563eb)",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* Row 2: Step tabs */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${totalSteps}, 1fr)`,
          gap: "1px",
          background: "var(--color-primary-200, #e2e8f0)",
        }}
      >
        {STEPS.map((s, i) => {
          const isActive = i === step;
          const isDone = i < step;
          return (
            <div
              key={s.id}
              style={{
                background: isActive ? "var(--color-blue-50, #eff6ff)" : "#fff",
                padding: "12px 14px",
                borderTop: isActive
                  ? "2px solid var(--color-blue-600, #2563eb)"
                  : "2px solid transparent",
                transition: "background 0.15s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 3,
                }}
              >
                {/* Step circle */}
                <div
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.65rem",
                    fontWeight: 700,
                    background: isDone
                      ? "#16a34a"
                      : isActive
                        ? "var(--color-blue-600, #2563eb)"
                        : "var(--color-primary-100, #e2e8f0)",
                    color:
                      isDone || isActive ? "#fff" : "var(--color-primary-500)",
                  }}
                >
                  {isDone ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path
                        d="M2 5l2.5 2.5L8 2.5"
                        stroke="#fff"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    s.id
                  )}
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive
                      ? "var(--color-blue-700, #1d4ed8)"
                      : isDone
                        ? "#166534"
                        : "var(--color-primary-500)",
                    lineHeight: 1.2,
                  }}
                >
                  {s.short}
                </span>
              </div>
              {/* Mini progress dots */}
              <p
                style={{
                  margin: 0,
                  fontSize: "0.6rem",
                  color: isActive ? "var(--color-primary-600)" : "#94a3b8",
                  lineHeight: 1.3,
                }}
              >
                {isDone
                  ? "Completed"
                  : isActive
                    ? `${STEPS[step].desc.slice(0, 30)}…`
                    : s.desc.slice(0, 28) + "…"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCALE SELECTOR — horizontal scale circles (low → high)
───────────────────────────────────────────────────────────── */

function ScaleSelector({
  options,
  value,
  onChange,
  inputRef,
  accentColor = "#2563eb",
}) {
  const selectedIdx = options.indexOf(value);
  return (
    <div ref={inputRef} tabIndex={-1} style={{ overflowX: "auto" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${options.length}, 1fr)`,
          gap: 6,
          minWidth: options.length > 4 ? 420 : "auto",
          padding: "2px 0",
        }}
      >
        {options.map((opt, i) => {
          const isSelected = value === opt;
          const isPast = selectedIdx > i;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 7,
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: "6px 4px",
              }}
            >
              {/* Circle */}
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.7rem",
                  fontWeight: 700,
                  border: `2px solid ${isSelected ? accentColor : isPast ? accentColor + "55" : "#e2e8f0"}`,
                  background: isSelected
                    ? accentColor
                    : isPast
                      ? accentColor + "18"
                      : "#f8fafc",
                  color: isSelected ? "#fff" : isPast ? accentColor : "#94a3b8",
                  transition: "all 0.15s",
                  boxShadow: isSelected ? `0 0 0 4px ${accentColor}20` : "none",
                }}
              >
                {i + 1}
              </div>
              {/* Label */}
              <span
                style={{
                  fontSize: "0.65rem",
                  fontWeight: isSelected ? 700 : 500,
                  color: isSelected ? accentColor : "#64748b",
                  textAlign: "center",
                  lineHeight: 1.3,
                  maxWidth: 64,
                  wordBreak: "break-word",
                }}
              >
                {opt}
              </span>
            </button>
          );
        })}
      </div>
      {/* Connector line behind circles */}
      <div
        style={{
          position: "relative",
          height: 0,
          marginTop: -56,
          marginBottom: 56,
          pointerEvents: "none",
          padding: "0 26px",
        }}
      >
        <div
          style={{
            height: 2,
            background: "#e2e8f0",
            borderRadius: 99,
            position: "relative",
            top: 20,
          }}
        >
          {selectedIdx >= 0 && (
            <div
              style={{
                height: "100%",
                width: `${(selectedIdx / (options.length - 1)) * 100}%`,
                background: accentColor,
                borderRadius: 99,
                transition: "width 0.3s ease",
                opacity: 0.35,
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CHIP GROUP — compact multi-select or radio chips
───────────────────────────────────────────────────────────── */

function ChipGroup({
  options,
  value,
  values = [],
  type = "radio",
  onChange,
  onToggle,
  inputRef,
}) {
  return (
    <div
      ref={inputRef}
      tabIndex={-1}
      style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}
    >
      {options.map((opt) => {
        const checked = type === "radio" ? value === opt : values.includes(opt);
        return (
          <button
            key={opt}
            type="button"
            onClick={() =>
              type === "radio" ? onChange?.(opt) : onToggle?.(opt)
            }
            style={{
              padding: "7px 14px",
              borderRadius: 8,
              fontSize: "0.825rem",
              fontWeight: checked ? 600 : 400,
              cursor: "pointer",
              border: `1.5px solid ${checked ? "var(--color-blue-600, #2563eb)" : "var(--color-primary-200, #e2e8f0)"}`,
              background: checked ? "var(--color-blue-50, #eff6ff)" : "#fff",
              color: checked
                ? "var(--color-blue-700, #1d4ed8)"
                : "var(--color-primary-700, #374151)",
              transition: "all 0.12s",
              display: "flex",
              alignItems: "center",
              gap: 6,
              lineHeight: 1.35,
              textAlign: "left",
            }}
          >
            {type === "checkbox" && (
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: 4,
                  flexShrink: 0,
                  border: `1.5px solid ${checked ? "var(--color-blue-600)" : "#cbd5e1"}`,
                  background: checked ? "var(--color-blue-600)" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {checked && (
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <path
                      d="M1.5 4L3.5 6L6.5 2"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </span>
            )}
            {type === "radio" && (
              <span
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  flexShrink: 0,
                  border: `1.5px solid ${checked ? "var(--color-blue-600)" : "#cbd5e1"}`,
                  background: checked ? "var(--color-blue-600)" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {checked && (
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      background: "#fff",
                    }}
                  />
                )}
              </span>
            )}
            {opt}
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   QUESTION ROW — label + optional help + error state + child
───────────────────────────────────────────────────────────── */

function QRow({ label, required, help, error, children }) {
  return (
    <div
      style={{
        borderRadius: 12,
        border: `1px solid ${error ? "#fca5a5" : "var(--color-primary-200, #e2e8f0)"}`,
        background: error ? "#fff5f5" : "#fff",
        padding: "18px 20px 20px",
        transition: "border-color 0.15s, background 0.15s",
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <p
          style={{
            margin: 0,
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "var(--color-primary-900)",
            lineHeight: 1.35,
          }}
        >
          {label}
          {required && (
            <span style={{ color: "#ef4444", marginLeft: 4 }}>*</span>
          )}
        </p>
        {help && (
          <p
            style={{
              margin: "5px 0 0",
              fontSize: "0.78rem",
              color: "var(--color-primary-500)",
              lineHeight: 1.5,
            }}
          >
            {help}
          </p>
        )}
        {error && (
          <p
            style={{
              margin: "5px 0 0",
              fontSize: "0.75rem",
              color: "#dc2626",
              fontWeight: 500,
            }}
          >
            This field is required.
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   BASE INPUTS
───────────────────────────────────────────────────────────── */

function TextInput({
  value,
  onChange,
  type = "text",
  placeholder,
  inputRef,
  hasError,
  style: extraStyle,
}) {
  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        height: 44,
        borderRadius: 8,
        border: `1.5px solid ${hasError ? "#fca5a5" : "var(--color-primary-300, #cbd5e1)"}`,
        padding: "0 14px",
        fontSize: "0.875rem",
        color: "var(--color-primary-900)",
        background: "#fff",
        outline: "none",
        boxSizing: "border-box",
        ...extraStyle,
      }}
    />
  );
}

function SelectInput({
  value,
  onChange,
  groups,
  placeholder,
  inputRef,
  hasError,
}) {
  return (
    <select
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        height: 44,
        borderRadius: 8,
        border: `1.5px solid ${hasError ? "#fca5a5" : "var(--color-primary-300, #cbd5e1)"}`,
        padding: "0 14px",
        fontSize: "0.875rem",
        color: value ? "var(--color-primary-900)" : "#94a3b8",
        background: "#fff",
        outline: "none",
        cursor: "pointer",
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {groups.map((g) => (
        <optgroup key={g.label} label={g.label}>
          {g.options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
}

function TextareaInput({ value, onChange, placeholder, inputRef }) {
  return (
    <textarea
      ref={inputRef}
      rows={4}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "100%",
        borderRadius: 8,
        border: "1.5px solid var(--color-primary-300, #cbd5e1)",
        padding: "10px 14px",
        fontSize: "0.875rem",
        color: "var(--color-primary-900)",
        background: "#fff",
        outline: "none",
        resize: "vertical",
        boxSizing: "border-box",
        lineHeight: 1.6,
      }}
    />
  );
}
