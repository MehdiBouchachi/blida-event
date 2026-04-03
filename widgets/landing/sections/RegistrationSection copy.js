"use client";

import { useMemo, useRef, useState } from "react";

/* ─── Google Fonts injection ─── */
if (typeof document !== "undefined") {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href =
    "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300;12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap";
  document.head.appendChild(link);
}

/* ─────────────────────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────────────────────── */

const STEPS = [
  { id: 1, label: "Your Profile", icon: "👤", desc: "Basic info" },
  { id: 2, label: "Certification", icon: "📋", desc: "Moodle & courses" },
  { id: 3, label: "AI in Teaching", icon: "🤖", desc: "Tools & interests" },
  { id: 4, label: "Expectations", icon: "🎯", desc: "Workshop goals" },
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
  "Lecturer",
  "Administrative Staff",
  "Department Head",
  "NTIC Staff",
  "Other",
];
const ATTENDANCE_OPTIONS = [
  "Yes, I'll attend",
  "No, I can't attend",
  "Not sure yet",
];

const YEARS_HE_SCALE = [
  "< 2 yrs",
  "2–5 yrs",
  "6–10 yrs",
  "11–15 yrs",
  "16–20 yrs",
  "> 20 yrs",
];
const YEARS_ONLINE_SCALE = ["None", "< 1 yr", "1–2 yrs", "3–5 yrs", "> 5 yrs"];
const MOODLE_EXPERIENCE_SCALE = [
  "Never used",
  "Basic",
  "Intermediate",
  "Advanced",
  "Expert",
];
const ONLINE_COURSES_SCALE = ["None", "1", "2–3", "4–5", "5+"];
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
  "Quizzes & assessments",
  "Assignments & submissions",
  "Forums & discussions",
  "H5P interactive content",
  "SCORM packages",
  "Collaborative workspaces",
  "Video conferencing",
  "Surveys & polls",
  "None of the above",
  "Other",
];

const COURSE_STATUS_OPTIONS = [
  "No online courses yet",
  "Have courses, no certification pursued",
  "Preparing for certification",
  "Submitted for certification",
  "Already certified ≥ 1 course",
  "Don't plan to certify",
];

const KNOWLEDGE_GAP_OPTIONS = [
  "Understanding requirements & process",
  "Designing per pedagogical charter",
  "Creating interactive activities",
  "Effective assessment strategies",
  "Preparing documentation",
  "Using Moodle effectively",
  "Technical course submission",
  "Confident in all areas",
  "Other",
];

const BARRIER_OPTIONS = [
  "Time constraints",
  "Technical Moodle skills",
  "Uncertain course design principles",
  "Unclear requirements",
  "Lack of institutional support",
  "Not convinced of value",
  "Other",
];

const SUCCESS_RESOURCES_OPTIONS = [
  "Clearer guidelines & docs",
  "Templates & course examples",
  "Ongoing technical support",
  "Peer mentoring",
  "Dedicated time allocation",
  "Additional training",
  "AI tools & resources",
  "Other",
];

const CERTIFY_PLAN_OPTIONS = [
  "Yes — courses identified",
  "Probably — need to plan",
  "Unlikely — other priorities",
  "No — not planning",
  "Unsure",
];

const AI_TOOLS_USED_OPTIONS = [
  "ChatGPT / language models",
  "AI-powered tutoring",
  "Automated grading tools",
  "Learning analytics",
  "Adaptive learning platforms",
  "AI content creation",
  "Other AI tools",
  "Haven't used any",
];

const AI_INTERESTS_OPTIONS = [
  "Personalizing learning",
  "Automating routine tasks",
  "Enhancing engagement",
  "Real-time student support",
  "Analyzing learning patterns",
  "Creating adaptive content",
  "Improving course design",
  "Other",
];

const WORKSHOP_VALUE_OPTIONS = [
  "Practical demos & examples",
  "Certification requirements explained",
  "Templates I can use immediately",
  "Networking with educators",
  "Ongoing post-workshop support",
  "Certifying one of my courses",
  "Integrating AI into teaching",
  "Other",
];

const HEARD_ABOUT_OPTIONS = [
  "Email from department",
  "Colleague recommendation",
  "Flyer / announcement",
  "University website",
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
   STYLES
───────────────────────────────────────────────────────────── */

const S = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#F7F6F3",
    minHeight: "100vh",
    padding: "0",
  },
  hero: {
    background:
      "linear-gradient(135deg, #0F172A 0%, #1E293B 60%, #0F2A4A 100%)",
    padding: "clamp(32px,6vw,64px) clamp(16px,5vw,48px) clamp(24px,4vw,40px)",
    position: "relative",
    overflow: "hidden",
  },
  heroAccent: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "clamp(200px,40vw,400px)",
    height: "clamp(200px,40vw,400px)",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)",
    transform: "translate(30%, -30%)",
    pointerEvents: "none",
  },
  heroTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 12px",
    borderRadius: 99,
    background: "rgba(99,102,241,0.2)",
    border: "1px solid rgba(99,102,241,0.4)",
    color: "#A5B4FC",
    fontSize: "0.72rem",
    fontWeight: 600,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: 14,
  },
  heroTitle: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: "clamp(1.75rem,5vw,2.75rem)",
    fontWeight: 800,
    color: "#F8FAFC",
    lineHeight: 1.1,
    letterSpacing: "-0.02em",
    marginBottom: 10,
  },
  heroSub: {
    fontSize: "clamp(0.875rem,2vw,1rem)",
    color: "#94A3B8",
    lineHeight: 1.7,
    maxWidth: 540,
    fontWeight: 300,
  },
  body: {
    maxWidth: 720,
    margin: "0 auto",
    padding: "clamp(16px,4vw,32px) clamp(12px,4vw,24px)",
  },
  card: {
    background: "#FFFFFF",
    borderRadius: 20,
    border: "1px solid #E8E6E1",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.02)",
    overflow: "hidden",
    marginBottom: 16,
  },
  cardHeader: {
    padding: "20px 24px 16px",
    borderBottom: "1px solid #F0EDE8",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 12,
  },
  cardBody: { padding: "20px 20px 8px" },
  cardFooter: {
    padding: "16px 20px",
    borderTop: "1px solid #F0EDE8",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    background: "#FAFAF9",
  },
  label: {
    fontFamily: "'Bricolage Grotesque', sans-serif",
    fontSize: "clamp(0.875rem,2vw,0.9375rem)",
    fontWeight: 700,
    color: "#1C1917",
    lineHeight: 1.35,
    margin: 0,
  },
  help: {
    fontSize: "0.8rem",
    color: "#78716C",
    lineHeight: 1.5,
    margin: "4px 0 0",
  },
  error: {
    fontSize: "0.77rem",
    color: "#DC2626",
    fontWeight: 500,
    margin: "4px 0 0",
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "11px 24px",
    borderRadius: 12,
    background: "#0F172A",
    color: "#F8FAFC",
    fontSize: "0.875rem",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    transition: "transform 0.12s, box-shadow 0.12s",
    boxShadow: "0 2px 8px rgba(15,23,42,0.25)",
  },
  btnSuccess: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "11px 24px",
    borderRadius: 12,
    background: "#059669",
    color: "#fff",
    fontSize: "0.875rem",
    fontWeight: 600,
    border: "none",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(5,150,105,0.3)",
  },
  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "10px 18px",
    borderRadius: 12,
    background: "transparent",
    color: "#78716C",
    fontSize: "0.875rem",
    fontWeight: 500,
    border: "1.5px solid #E8E6E1",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    height: 46,
    borderRadius: 10,
    border: "1.5px solid #E8E6E1",
    padding: "0 14px",
    fontSize: "0.9rem",
    color: "#1C1917",
    background: "#FAFAF9",
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "'DM Sans', sans-serif",
    transition: "border-color 0.15s",
  },
  textarea: {
    width: "100%",
    borderRadius: 10,
    border: "1.5px solid #E8E6E1",
    padding: "12px 14px",
    fontSize: "0.9rem",
    color: "#1C1917",
    background: "#FAFAF9",
    outline: "none",
    resize: "vertical",
    boxSizing: "border-box",
    lineHeight: 1.65,
    fontFamily: "'DM Sans', sans-serif",
  },
  select: {
    width: "100%",
    height: 46,
    borderRadius: 10,
    border: "1.5px solid #E8E6E1",
    padding: "0 14px",
    fontSize: "0.9rem",
    background: "#FAFAF9",
    outline: "none",
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2378716C' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
    paddingRight: 40,
  },
};

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

  function touch(key) {
    setTouched((p) => ({ ...p, [key]: true }));
  }
  function touchAll(s) {
    const t = {};
    (REQUIRED_FIELDS[s] || []).forEach((k) => (t[k] = true));
    setTouched((p) => ({ ...p, ...t }));
  }

  function focusFirst(s) {
    const first = (REQUIRED_FIELDS[s] || []).find((k) => !validate(k));
    if (!first) return;
    requestAnimationFrame(() => {
      const el = fieldRefs.current[first];
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      el.focus?.();
    });
  }

  function goNext() {
    touchAll(step);
    if (!isStepValid(step)) {
      focusFirst(step);
      return;
    }
    setStep((p) => p + 1);
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function goPrev() {
    setStep((p) => Math.max(p - 1, 0));
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function handleSubmit(e) {
    e.preventDefault();
    touchAll(step);
    if (!isStepValid(step)) {
      focusFirst(step);
      return;
    }
    setShowSuccess(true);
    setForm(INITIAL);
    setStep(0);
    setTouched({});
  }

  function err(key) {
    return touched[key] && !validate(key);
  }

  /* ── Success ── */
  if (showSuccess) {
    return (
      <div style={S.page}>
        <div style={{ ...S.hero, textAlign: "center", padding: "80px 24px" }}>
          <div style={S.heroAccent} />
          <div style={{ fontSize: "3.5rem", marginBottom: 20 }}>🎉</div>
          <h2 style={{ ...S.heroTitle, fontSize: "1.75rem", marginBottom: 12 }}>
            Registration Submitted!
          </h2>
          <p
            style={{ ...S.heroSub, margin: "0 auto 32px", textAlign: "center" }}
          >
            Your responses have been recorded. We'll be in touch before the
            event on April 15, 2026.
          </p>
          <button onClick={() => setShowSuccess(false)} style={S.btnPrimary}>
            Submit another response
          </button>
        </div>
      </div>
    );
  }

  /* ── Main ── */
  return (
    <div style={S.page} ref={topRef}>
      {/* Hero header */}
      <div style={S.hero}>
        <div style={S.heroAccent} />
        <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
          <div style={S.heroTag}>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <rect
                x="0.5"
                y="1"
                width="9"
                height="8"
                rx="1.5"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M3 1v1.5M7 1v1.5M0.5 4.5h9"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </svg>
            Workshop Registration · April 15, 2026
          </div>
          <h1 style={S.heroTitle}>Register &amp; Baseline Assessment</h1>
          <p style={S.heroSub}>
            Complete this form to confirm your participation and help us tailor
            the workshop to your needs. Takes about 5–8 minutes.
          </p>
        </div>
      </div>

      <div style={S.body}>
        {/* Step indicator */}
        <StepBar step={step} totalSteps={totalSteps} pct={overallPct} />

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          {/* Step header */}
          <div style={{ ...S.card }}>
            <div style={S.cardHeader}>
              <div>
                <div style={{ fontSize: "1.5rem", marginBottom: 6 }}>
                  {STEPS[step].icon}
                </div>
                <p style={{ ...S.label, fontSize: "clamp(1rem,3vw,1.125rem)" }}>
                  {STEPS[step].label}
                </p>
                <p style={S.help}>
                  Step {step + 1} of {totalSteps} · {STEPS[step].desc}
                </p>
              </div>
              <div
                style={{
                  padding: "5px 12px",
                  borderRadius: 99,
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  background: stepDone === stepTotal ? "#ECFDF5" : "#F5F3EF",
                  color: stepDone === stepTotal ? "#059669" : "#78716C",
                  border: `1px solid ${stepDone === stepTotal ? "#A7F3D0" : "#E8E6E1"}`,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {stepDone === stepTotal
                  ? "✓ Complete"
                  : `${stepDone}/${stepTotal}`}
              </div>
            </div>

            <div style={S.cardBody}>
              {step === 0 && (
                <Step1
                  form={form}
                  set={set}
                  touch={touch}
                  err={err}
                  fieldRefs={fieldRefs}
                />
              )}
              {step === 1 && (
                <Step2
                  form={form}
                  set={set}
                  toggle={toggle}
                  touch={touch}
                  err={err}
                  fieldRefs={fieldRefs}
                />
              )}
              {step === 2 && (
                <Step3
                  form={form}
                  set={set}
                  toggle={toggle}
                  touch={touch}
                  err={err}
                  fieldRefs={fieldRefs}
                />
              )}
              {step === 3 && (
                <Step4
                  form={form}
                  set={set}
                  toggle={toggle}
                  touch={touch}
                  err={err}
                  fieldRefs={fieldRefs}
                />
              )}
            </div>

            <div style={S.cardFooter}>
              <button
                type="button"
                onClick={goPrev}
                disabled={step === 0}
                style={{
                  ...S.btnSecondary,
                  opacity: step === 0 ? 0.35 : 1,
                  cursor: step === 0 ? "not-allowed" : "pointer",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M9 2L4 7l5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back
              </button>

              <span
                style={{
                  fontSize: "0.78rem",
                  color: stepDone < stepTotal ? "#9CA3AF" : "#059669",
                  fontWeight: stepDone === stepTotal ? 600 : 400,
                }}
              >
                {stepDone < stepTotal
                  ? `${stepTotal - stepDone} field${stepTotal - stepDone > 1 ? "s" : ""} remaining`
                  : "✓ Ready to continue"}
              </span>

              {step < totalSteps - 1 ? (
                <button type="button" onClick={goNext} style={S.btnPrimary}>
                  Continue
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M5 2l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <button type="submit" style={S.btnSuccess}>
                  Submit
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M2 7h10M8 3l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STEP BAR
───────────────────────────────────────────────────────────── */

function StepBar({ step, totalSteps, pct }) {
  return (
    <div style={{ marginBottom: 16, padding: "16px 0 4px" }}>
      {/* Steps dots */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          marginBottom: 14,
        }}
      >
        {STEPS.map((s, i) => {
          const isActive = i === step;
          const isDone = i < step;
          return (
            <div
              key={s.id}
              style={{
                display: "flex",
                alignItems: "center",
                flex: i < STEPS.length - 1 ? 1 : "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: isDone ? "0.75rem" : "0.8rem",
                    fontWeight: 700,
                    flexShrink: 0,
                    background: isDone
                      ? "#059669"
                      : isActive
                        ? "#0F172A"
                        : "#E8E6E1",
                    color: isDone || isActive ? "#fff" : "#A8A29E",
                    border: isActive
                      ? "3px solid #0F172A"
                      : isDone
                        ? "none"
                        : "none",
                    boxShadow: isActive
                      ? "0 0 0 4px rgba(15,23,42,0.12)"
                      : "none",
                    transition: "all 0.2s",
                  }}
                >
                  {isDone ? "✓" : s.icon}
                </div>
                <span
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive
                      ? "#0F172A"
                      : isDone
                        ? "#059669"
                        : "#A8A29E",
                    textAlign: "center",
                    lineHeight: 1.2,
                    display: "block",
                    maxWidth: 64,
                  }}
                >
                  {s.label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  style={{
                    flex: 1,
                    height: 2,
                    margin: "0 4px",
                    marginBottom: 22,
                    background: i < step ? "#059669" : "#E8E6E1",
                    transition: "background 0.3s",
                    borderRadius: 99,
                  }}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Overall bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            flex: 1,
            height: 5,
            borderRadius: 99,
            background: "#E8E6E1",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              background: "linear-gradient(90deg, #6366F1, #0F172A)",
              borderRadius: 99,
              transition: "width 0.4s ease",
            }}
          />
        </div>
        <span
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            color: "#0F172A",
            minWidth: 32,
          }}
        >
          {pct}%
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STEPS
───────────────────────────────────────────────────────────── */

function Step1({ form, set, touch, err, fieldRefs }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Row label="Full Name" required error={err("fullName")}>
        <Input
          value={form.fullName}
          placeholder="Your full professional name"
          onChange={(v) => {
            set("fullName", v);
            touch("fullName");
          }}
          inputRef={(el) => (fieldRefs.current.fullName = el)}
          hasError={err("fullName")}
        />
      </Row>

      <Row
        label="Email Address"
        required
        error={err("email")}
        help="Used for registration confirmation."
      >
        <Input
          type="email"
          value={form.email}
          placeholder="your@university.dz"
          onChange={(v) => {
            set("email", v);
            touch("email");
          }}
          inputRef={(el) => (fieldRefs.current.email = el)}
          hasError={err("email")}
        />
        {form.email && !EMAIL_RE.test(form.email) && (
          <p style={S.error}>Please enter a valid email address.</p>
        )}
      </Row>

      <Row label="Faculty / Institute" required error={err("faculty")}>
        <select
          ref={(el) => (fieldRefs.current.faculty = el)}
          value={form.faculty}
          onChange={(e) => {
            set("faculty", e.target.value);
            touch("faculty");
          }}
          style={{
            ...S.select,
            borderColor: err("faculty") ? "#FCA5A5" : "#E8E6E1",
            color: form.faculty ? "#1C1917" : "#9CA3AF",
          }}
        >
          <option value="" disabled>
            — Select your faculty or institute —
          </option>
          {FACULTY_GROUPS.map((g) => (
            <optgroup key={g.label} label={g.label}>
              {g.options.map((o) => (
                <option key={o} value={o}>
                  {o}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      </Row>

      <Row label="Your Role" required error={err("status")}>
        <Chips
          options={STATUS_OPTIONS}
          value={form.status}
          type="radio"
          onChange={(v) => {
            set("status", v);
            touch("status");
          }}
          inputRef={(el) => (fieldRefs.current.status = el)}
        />
        {form.status === "Other" && (
          <Input
            value={form.statusOther}
            placeholder="Please specify your role"
            onChange={(v) => set("statusOther", v)}
            style={{ marginTop: 10 }}
          />
        )}
      </Row>

      <Row
        label="Will you attend the workshop on April 15, 2026?"
        required
        error={err("attendance")}
      >
        <Chips
          options={ATTENDANCE_OPTIONS}
          value={form.attendance}
          type="radio"
          onChange={(v) => {
            set("attendance", v);
            touch("attendance");
          }}
          inputRef={(el) => (fieldRefs.current.attendance = el)}
        />
      </Row>

      <Row
        label="Years of experience in higher education"
        required
        error={err("yearsHigherEducation")}
      >
        <Scale
          options={YEARS_HE_SCALE}
          value={form.yearsHigherEducation}
          onChange={(v) => {
            set("yearsHigherEducation", v);
            touch("yearsHigherEducation");
          }}
          inputRef={(el) => (fieldRefs.current.yearsHigherEducation = el)}
        />
      </Row>

      <Row
        label="Years of experience teaching online"
        required
        error={err("yearsTeachingOnline")}
      >
        <Scale
          options={YEARS_ONLINE_SCALE}
          value={form.yearsTeachingOnline}
          onChange={(v) => {
            set("yearsTeachingOnline", v);
            touch("yearsTeachingOnline");
          }}
          inputRef={(el) => (fieldRefs.current.yearsTeachingOnline = el)}
        />
      </Row>
    </div>
  );
}

function Step2({ form, set, toggle, touch, err, fieldRefs }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Row
        label="Your Moodle experience level"
        required
        error={err("moodleExperience")}
      >
        <Scale
          options={MOODLE_EXPERIENCE_SCALE}
          value={form.moodleExperience}
          onChange={(v) => {
            set("moodleExperience", v);
            touch("moodleExperience");
          }}
          inputRef={(el) => (fieldRefs.current.moodleExperience = el)}
          accent="#6366F1"
        />
      </Row>

      <Row
        label="Number of online courses designed or taught"
        required
        error={err("onlineCoursesCount")}
      >
        <Scale
          options={ONLINE_COURSES_SCALE}
          value={form.onlineCoursesCount}
          onChange={(v) => {
            set("onlineCoursesCount", v);
            touch("onlineCoursesCount");
          }}
          inputRef={(el) => (fieldRefs.current.onlineCoursesCount = el)}
          accent="#6366F1"
        />
      </Row>

      <Row
        label="Moodle features you have used"
        required
        help="Select all that apply."
        error={err("moodleFeaturesUsed")}
      >
        <div
          ref={(el) => (fieldRefs.current.moodleFeaturesUsed = el)}
          tabIndex={-1}
        >
          <Chips
            options={MOODLE_FEATURES_OPTIONS}
            values={form.moodleFeaturesUsed}
            type="checkbox"
            onToggle={(v) => {
              toggle("moodleFeaturesUsed", v);
              touch("moodleFeaturesUsed");
            }}
          />
        </div>
        {form.moodleFeaturesUsed.includes("Other") && (
          <Input
            value={form.moodleFeaturesOther}
            placeholder="Please specify"
            onChange={(v) => set("moodleFeaturesOther", v)}
            style={{ marginTop: 10 }}
          />
        )}
      </Row>

      <Row
        label="Your knowledge of national certification requirements"
        required
        error={err("certificationKnowledge")}
      >
        <Scale
          options={CERTIFICATION_KNOWLEDGE_SCALE}
          value={form.certificationKnowledge}
          onChange={(v) => {
            set("certificationKnowledge", v);
            touch("certificationKnowledge");
          }}
          inputRef={(el) => (fieldRefs.current.certificationKnowledge = el)}
          accent="#6366F1"
        />
      </Row>

      <Row
        label="Current status of your online courses"
        required
        help="Select all that apply."
        error={err("courseStatus")}
      >
        <div ref={(el) => (fieldRefs.current.courseStatus = el)} tabIndex={-1}>
          <Chips
            options={COURSE_STATUS_OPTIONS}
            values={form.courseStatus}
            type="checkbox"
            onToggle={(v) => {
              toggle("courseStatus", v);
              touch("courseStatus");
            }}
          />
        </div>
      </Row>

      <Row
        label="Primary knowledge gaps for certification"
        required
        help="Select areas where support would be most useful."
        error={err("knowledgeGaps")}
      >
        <div ref={(el) => (fieldRefs.current.knowledgeGaps = el)} tabIndex={-1}>
          <Chips
            options={KNOWLEDGE_GAP_OPTIONS}
            values={form.knowledgeGaps}
            type="checkbox"
            onToggle={(v) => {
              toggle("knowledgeGaps", v);
              touch("knowledgeGaps");
            }}
          />
        </div>
        {form.knowledgeGaps.includes("Other") && (
          <Input
            value={form.knowledgeGapsOther}
            placeholder="Please specify"
            onChange={(v) => set("knowledgeGapsOther", v)}
            style={{ marginTop: 10 }}
          />
        )}
      </Row>

      <Row
        label="Your primary barrier to course certification"
        required
        error={err("primaryBarrier")}
      >
        <Chips
          options={BARRIER_OPTIONS}
          value={form.primaryBarrier}
          type="radio"
          onChange={(v) => {
            set("primaryBarrier", v);
            touch("primaryBarrier");
          }}
          inputRef={(el) => (fieldRefs.current.primaryBarrier = el)}
        />
        {form.primaryBarrier === "Other" && (
          <Input
            value={form.primaryBarrierOther}
            placeholder="Please specify"
            onChange={(v) => set("primaryBarrierOther", v)}
            style={{ marginTop: 10 }}
          />
        )}
      </Row>

      <Row
        label="Resources that would help you succeed"
        required
        help="Choose support types that would make the biggest difference."
        error={err("resourcesNeeded")}
      >
        <div
          ref={(el) => (fieldRefs.current.resourcesNeeded = el)}
          tabIndex={-1}
        >
          <Chips
            options={SUCCESS_RESOURCES_OPTIONS}
            values={form.resourcesNeeded}
            type="checkbox"
            onToggle={(v) => {
              toggle("resourcesNeeded", v);
              touch("resourcesNeeded");
            }}
          />
        </div>
        {form.resourcesNeeded.includes("Other") && (
          <Input
            value={form.resourcesNeededOther}
            placeholder="Please specify"
            onChange={(v) => set("resourcesNeededOther", v)}
            style={{ marginTop: 10 }}
          />
        )}
      </Row>

      <Row
        label="Plan to certify at least one course within 6 months after the workshop?"
        required
        error={err("certifyPlan")}
      >
        <Chips
          options={CERTIFY_PLAN_OPTIONS}
          value={form.certifyPlan}
          type="radio"
          onChange={(v) => {
            set("certifyPlan", v);
            touch("certifyPlan");
          }}
          inputRef={(el) => (fieldRefs.current.certifyPlan = el)}
        />
      </Row>
    </div>
  );
}

function Step3({ form, set, toggle, touch, err, fieldRefs }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Row
        label="Your knowledge of pedagogical AI applications"
        required
        error={err("pedagogicalAiKnowledge")}
      >
        <Scale
          options={PEDAGOGICAL_AI_KNOWLEDGE_SCALE}
          value={form.pedagogicalAiKnowledge}
          onChange={(v) => {
            set("pedagogicalAiKnowledge", v);
            touch("pedagogicalAiKnowledge");
          }}
          inputRef={(el) => (fieldRefs.current.pedagogicalAiKnowledge = el)}
          accent="#7C3AED"
        />
      </Row>

      <Row
        label="AI tools used in your teaching"
        required
        help="Select all that apply."
        error={err("aiToolsUsed")}
      >
        <div ref={(el) => (fieldRefs.current.aiToolsUsed = el)} tabIndex={-1}>
          <Chips
            options={AI_TOOLS_USED_OPTIONS}
            values={form.aiToolsUsed}
            type="checkbox"
            onToggle={(v) => {
              toggle("aiToolsUsed", v);
              touch("aiToolsUsed");
            }}
          />
        </div>
        {form.aiToolsUsed.includes("Other AI tools") && (
          <Input
            value={form.aiToolsUsedOther}
            placeholder="Please specify"
            onChange={(v) => set("aiToolsUsedOther", v)}
            style={{ marginTop: 10 }}
          />
        )}
      </Row>

      <Row
        label="What interests you most about pedagogical AI?"
        required
        help="Choose directions most relevant to your practice."
        error={err("aiInterests")}
      >
        <div ref={(el) => (fieldRefs.current.aiInterests = el)} tabIndex={-1}>
          <Chips
            options={AI_INTERESTS_OPTIONS}
            values={form.aiInterests}
            type="checkbox"
            onToggle={(v) => {
              toggle("aiInterests", v);
              touch("aiInterests");
            }}
          />
        </div>
        {form.aiInterests.includes("Other") && (
          <Input
            value={form.aiInterestsOther}
            placeholder="Please specify"
            onChange={(v) => set("aiInterestsOther", v)}
            style={{ marginTop: 10 }}
          />
        )}
      </Row>
    </div>
  );
}

function Step4({ form, set, toggle, touch, err, fieldRefs }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Row
        label="What would make this workshop most valuable?"
        required
        help="Choose the outcomes that matter most."
        error={err("workshopValue")}
      >
        <div ref={(el) => (fieldRefs.current.workshopValue = el)} tabIndex={-1}>
          <Chips
            options={WORKSHOP_VALUE_OPTIONS}
            values={form.workshopValue}
            type="checkbox"
            onToggle={(v) => {
              toggle("workshopValue", v);
              touch("workshopValue");
            }}
          />
        </div>
        {form.workshopValue.includes("Other") && (
          <Input
            value={form.workshopValueOther}
            placeholder="Please specify"
            onChange={(v) => set("workshopValueOther", v)}
            style={{ marginTop: 10 }}
          />
        )}
      </Row>

      <Row
        label="How did you hear about this workshop?"
        required
        error={err("heardAboutWorkshop")}
      >
        <Chips
          options={HEARD_ABOUT_OPTIONS}
          value={form.heardAboutWorkshop}
          type="radio"
          onChange={(v) => {
            set("heardAboutWorkshop", v);
            touch("heardAboutWorkshop");
          }}
          inputRef={(el) => (fieldRefs.current.heardAboutWorkshop = el)}
        />
        {form.heardAboutWorkshop === "Other" && (
          <Input
            value={form.heardAboutWorkshopOther}
            placeholder="Please specify"
            onChange={(v) => set("heardAboutWorkshopOther", v)}
            style={{ marginTop: 10 }}
          />
        )}
      </Row>

      <Row
        label="Anything else you'd like us to know?"
        help="Optional — your comments help us prepare."
      >
        <textarea
          rows={4}
          value={form.additionalComments}
          placeholder="Share any additional context, questions, or expectations…"
          onChange={(e) => set("additionalComments", e.target.value)}
          style={S.textarea}
        />
      </Row>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   REUSABLE FIELD COMPONENTS
───────────────────────────────────────────────────────────── */

function Row({ label, required, help, error, children }) {
  return (
    <div
      style={{
        borderRadius: 14,
        padding: "16px 16px 18px",
        border: `1.5px solid ${error ? "#FECACA" : "#F0EDE8"}`,
        background: error ? "#FFF5F5" : "#FAFAF9",
        transition: "border-color 0.15s, background 0.15s",
      }}
    >
      <div style={{ marginBottom: 12 }}>
        <p style={S.label}>
          {label}
          {required && (
            <span style={{ color: "#EF4444", marginLeft: 4 }}>*</span>
          )}
        </p>
        {help && <p style={S.help}>{help}</p>}
        {error && <p style={S.error}>This field is required.</p>}
      </div>
      {children}
    </div>
  );
}

function Input({
  value,
  onChange,
  type = "text",
  placeholder,
  inputRef,
  hasError,
  style: extra,
}) {
  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      style={{
        ...S.input,
        borderColor: hasError ? "#FCA5A5" : "#E8E6E1",
        ...extra,
      }}
    />
  );
}

/* ── Scale selector — pill buttons in a responsive wrap ── */
function Scale({ options, value, onChange, inputRef, accent = "#0F172A" }) {
  return (
    <div
      ref={inputRef}
      tabIndex={-1}
      style={{ overflowX: "auto", paddingBottom: 2 }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "nowrap",
          minWidth: "max-content",
        }}
      >
        {options.map((opt, i) => {
          const selected = value === opt;
          const past = options.indexOf(value) > i;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
                cursor: "pointer",
                background: "none",
                border: "none",
                padding: "4px 2px",
              }}
            >
              <div
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  border: `2px solid ${selected ? accent : past ? accent + "44" : "#E8E6E1"}`,
                  background: selected ? accent : past ? accent + "12" : "#fff",
                  color: selected ? "#fff" : past ? accent : "#A8A29E",
                  transition: "all 0.15s",
                  boxShadow: selected ? `0 0 0 3px ${accent}22` : "none",
                }}
              >
                {i + 1}
              </div>
              <span
                style={{
                  fontSize: "0.67rem",
                  fontWeight: selected ? 700 : 400,
                  color: selected ? accent : "#9CA3AF",
                  textAlign: "center",
                  lineHeight: 1.25,
                  maxWidth: 58,
                  wordBreak: "break-word",
                }}
              >
                {opt}
              </span>
            </button>
          );
        })}
      </div>
      {/* connector */}
      <div
        style={{
          position: "relative",
          height: 0,
          marginTop: -54,
          marginBottom: 54,
          padding: "0 21px",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            height: 2,
            background: "#E8E6E1",
            borderRadius: 99,
            position: "relative",
            top: 19,
          }}
        >
          {value && (
            <div
              style={{
                height: "100%",
                width: `${(options.indexOf(value) / (options.length - 1)) * 100}%`,
                background: accent,
                borderRadius: 99,
                opacity: 0.3,
                transition: "width 0.3s ease",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Chip group ── */
function Chips({
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
      style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}
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
              padding: "8px 14px",
              borderRadius: 10,
              fontSize: "clamp(0.8rem,1.8vw,0.875rem)",
              fontWeight: checked ? 600 : 400,
              fontFamily: "'DM Sans', sans-serif",
              cursor: "pointer",
              border: `1.5px solid ${checked ? "#0F172A" : "#E8E6E1"}`,
              background: checked ? "#0F172A" : "#fff",
              color: checked ? "#F8FAFC" : "#44403C",
              transition: "all 0.12s",
              display: "flex",
              alignItems: "center",
              gap: 7,
              lineHeight: 1.35,
              textAlign: "left",
              boxShadow: checked ? "0 2px 6px rgba(15,23,42,0.18)" : "none",
            }}
          >
            {type === "checkbox" && (
              <span
                style={{
                  width: 16,
                  height: 16,
                  borderRadius: 5,
                  flexShrink: 0,
                  border: `1.5px solid ${checked ? "#fff" : "#D6D3D1"}`,
                  background: checked ? "rgba(255,255,255,0.25)" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {checked && (
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M1.5 4.5L3.5 6.5L7.5 2"
                      stroke="white"
                      strokeWidth="1.5"
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
                  width: 16,
                  height: 16,
                  borderRadius: "50%",
                  flexShrink: 0,
                  border: `1.5px solid ${checked ? "#fff" : "#D6D3D1"}`,
                  background: checked ? "rgba(255,255,255,0.25)" : "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {checked && (
                  <span
                    style={{
                      width: 6,
                      height: 6,
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
