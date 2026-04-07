"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRegister } from "../../../app/_hooks/useRegister"; // adjust path as needed

/* ─────────────────────────────────────────────────────────────
   CONFIG
───────────────────────────────────────────────────────────── */

const STEPS = [
  {
    id: 1,
    label: "Your Profile",
    short: "Profile",
    icon: "👤",
    desc: "Basic info",
  },
  {
    id: 2,
    label: "Certification",
    short: "Certification",
    icon: "📋",
    desc: "Moodle & courses",
  },
  {
    id: 3,
    label: "AI in Teaching",
    short: "AI Usage",
    icon: "🤖",
    desc: "Tools & interests",
  },
  {
    id: 4,
    label: "Expectations",
    short: "Expectations",
    icon: "🎯",
    desc: "Workshop goals",
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

function useResponsiveFlag(bp = 640) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth < bp);
    fn();
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, [bp]);
  return isMobile;
}

/* ─────────────────────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────────────────────── */

export default function RegistrationSection() {
  const isMobile = useResponsiveFlag(640);
  const { register, isLoading, error: submitError } = useRegister();
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(INITIAL);
  const [touched, setTouched] = useState({});
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
    if (key === "email") return !!form.email && EMAIL_RE.test(form.email);
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
    return !isEmpty(form[key]);
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

  function touchAll(s) {
    const t = {};
    (REQUIRED_FIELDS[s] || []).forEach((k) => (t[k] = true));
    setTouched((p) => ({ ...p, ...t }));
  }
  function handleFormKeyDown(e) {
    const tag = e.target.tagName;
    if (e.key === "Enter" && tag !== "TEXTAREA") {
      e.preventDefault();
    }
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
    requestAnimationFrame(() =>
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  }

  function goPrev() {
    setStep((p) => Math.max(p - 1, 0));
    requestAnimationFrame(() =>
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }),
    );
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // ✅ Hard guard: never submit unless we're on the last step
    if (step !== totalSteps - 1) return;

    touchAll(step);
    if (!isStepValid(step)) {
      focusFirst(step);
      return;
    }

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
    };

    const emailSnapshot = form.email;
    const result = await register(payload);

    if (result.success) {
      setSubmittedEmail(emailSnapshot);
      setShowSuccess(true);
      setForm(INITIAL);
      setStep(0);
      setTouched({});
      topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  function fieldError(key) {
    return touched[key] && !validate(key);
  }

  /* ── Success screen ── */
  if (showSuccess) {
    return (
      <section
        id="registration"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
      >
        <div
          style={{
            maxWidth: 560,
            margin: "0 auto",
            textAlign: "center",
            padding: isMobile ? "32px 20px" : "52px 44px",
            background: "#fff",
            borderRadius: 20,
            border: "1px solid var(--color-primary-200, #e2e8f0)",
            boxShadow: "0 8px 40px rgba(15,23,42,0.07)",
          }}
        >
          {/* Check circle */}
          <div
            style={{
              width: 72,
              height: 72,
              margin: "0 auto 24px",
              borderRadius: "50%",
              background: "#f0fdf4",
              border: "2px solid #bbf7d0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <path
                d="M7 17l7.5 7.5L27 11"
                stroke="#16a34a"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h2
            style={{
              fontSize: isMobile ? "1.4rem" : "1.8rem",
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "var(--color-primary-900)",
              marginBottom: 10,
            }}
          >
            You're Registered! 🎉
          </h2>

          <p
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.75,
              color: "var(--color-primary-600)",
              marginBottom: 8,
            }}
          >
            Your registration has been successfully submitted and saved to our
            records.
          </p>

          <div
            style={{
              display: "flex",
              gap: 10,
              justifyContent: "center",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <a
              href="#program"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "11px 24px",
                borderRadius: 10,
                border: "1.5px solid var(--color-primary-200)",
                background: "#fff",
                color: "var(--color-primary-700)",
                fontSize: "0.875rem",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              View Program
            </a>
            <button
              type="button"
              onClick={() => {
                setShowSuccess(false);
                setSubmittedEmail("");
                setForm(INITIAL);
                setStep(0);
                setTouched({});
                topRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "11px 24px",
                borderRadius: 10,
                background: "var(--color-blue-600, #2563eb)",
                color: "#fff",
                fontSize: "0.875rem",
                fontWeight: 600,
                cursor: "pointer",
                border: "none",
              }}
            >
              Register Another Person
            </button>
          </div>
        </div>
      </section>
    );
  }

  /* ── Main form ── */
  return (
    <section
      id="registration"
      ref={topRef}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20"
    >
      {/* Section header */}
      <div
        style={{ maxWidth: 720, margin: "0 auto 32px", textAlign: "center" }}
      >
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
            justifyContent: "center",
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
            fontSize: isMobile ? "0.88rem" : "0.9375rem",
            lineHeight: 1.75,
            color: "var(--color-primary-700)",
            maxWidth: 640,
            margin: "0 auto",
          }}
        >
          Complete this form to confirm your participation and help us tailor
          the workshop to your needs.
        </p>
      </div>

      <StepperBlock
        step={step}
        totalSteps={totalSteps}
        pct={overallPct}
        stepDone={stepDone}
        stepTotal={stepTotal}
        isMobile={isMobile}
      />

      <form onSubmit={handleSubmit} onKeyDown={handleFormKeyDown} noValidate>
        <div
          style={{
            background: "#fff",
            borderRadius: 16,
            border: "1px solid var(--color-primary-200, #e2e8f0)",
            boxShadow: "0 8px 28px rgba(15,23,42,0.05)",
            overflow: "hidden",
          }}
        >
          {/* Step header */}
          <div
            style={{
              padding: isMobile ? "16px" : "18px 28px",
              borderBottom: "1px solid var(--color-primary-200, #e2e8f0)",
              background: "var(--color-primary-50, #f8fafc)",
              display: "flex",
              alignItems: isMobile ? "flex-start" : "center",
              justifyContent: "space-between",
              flexDirection: isMobile ? "column" : "row",
              gap: 10,
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.62rem",
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
                  margin: "4px 0 0",
                  fontSize: isMobile ? "1rem" : "1.05rem",
                  fontWeight: 700,
                  color: "var(--color-primary-900)",
                }}
              >
                {STEPS[step].label}
              </p>
            </div>
            <div
              style={{
                fontSize: "0.76rem",
                fontWeight: 600,
                color:
                  stepDone === stepTotal
                    ? "#166534"
                    : "var(--color-primary-600)",
                background:
                  stepDone === stepTotal
                    ? "#f0fdf4"
                    : "var(--color-primary-50)",
                border: `1px solid ${stepDone === stepTotal ? "#bbf7d0" : "var(--color-primary-200)"}`,
                borderRadius: 999,
                padding: "6px 12px",
              }}
            >
              {stepDone === stepTotal
                ? "✓ Step complete"
                : `${stepDone}/${stepTotal} required`}
            </div>
          </div>

          {/* Form body */}
          <div
            style={{ padding: isMobile ? "16px 16px 6px" : "28px 28px 8px" }}
          >
            {/* ── STEP 1 ── */}
            {step === 0 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <QRow
                  label="Full Name"
                  required
                  error={fieldError("fullName")}
                  isMobile={isMobile}
                >
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
                  isMobile={isMobile}
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
                        margin: "6px 0 0",
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
                  isMobile={isMobile}
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

                <QRow
                  label="Your Role"
                  required
                  error={fieldError("status")}
                  isMobile={isMobile}
                >
                  <ChipGroup
                    options={STATUS_OPTIONS}
                    value={form.status}
                    type="radio"
                    onChange={(v) => {
                      set("status", v);
                      setTouched((p) => ({ ...p, status: true }));
                    }}
                    inputRef={(el) => (fieldRefs.current.status = el)}
                    isMobile={isMobile}
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
                  isMobile={isMobile}
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
                    isMobile={isMobile}
                  />
                </QRow>

                <QRow
                  label="Years of experience in higher education"
                  required
                  error={fieldError("yearsHigherEducation")}
                  isMobile={isMobile}
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
                    isMobile={isMobile}
                  />
                </QRow>

                <QRow
                  label="Years of experience teaching online"
                  required
                  error={fieldError("yearsTeachingOnline")}
                  isMobile={isMobile}
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
                    isMobile={isMobile}
                  />
                </QRow>
              </div>
            )}

            {/* ── STEP 2 ── */}
            {step === 1 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <QRow
                  label="Your experience level with Moodle"
                  required
                  error={fieldError("moodleExperience")}
                  isMobile={isMobile}
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
                    isMobile={isMobile}
                  />
                </QRow>

                <QRow
                  label="Number of online courses you have designed or taught"
                  required
                  error={fieldError("onlineCoursesCount")}
                  isMobile={isMobile}
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
                    isMobile={isMobile}
                  />
                </QRow>

                <QRow
                  label="Which Moodle features have you used?"
                  required
                  help="Select all that apply."
                  error={fieldError("moodleFeaturesUsed")}
                  isMobile={isMobile}
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
                      isMobile={isMobile}
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
                  isMobile={isMobile}
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
                    isMobile={isMobile}
                  />
                </QRow>

                <QRow
                  label="Current status of your online courses"
                  required
                  help="Select all that apply."
                  error={fieldError("courseStatus")}
                  isMobile={isMobile}
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
                      isMobile={isMobile}
                    />
                  </div>
                </QRow>

                <QRow
                  label="Your primary knowledge gaps regarding certification"
                  required
                  help="Select the areas where support would be most useful."
                  error={fieldError("knowledgeGaps")}
                  isMobile={isMobile}
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
                      isMobile={isMobile}
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
                  isMobile={isMobile}
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
                    isMobile={isMobile}
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
                  isMobile={isMobile}
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
                      isMobile={isMobile}
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
                  isMobile={isMobile}
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
                    isMobile={isMobile}
                  />
                </QRow>
              </div>
            )}

            {/* ── STEP 3 ── */}
            {step === 2 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <QRow
                  label="Your knowledge of pedagogical AI applications"
                  required
                  error={fieldError("pedagogicalAiKnowledge")}
                  isMobile={isMobile}
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
                    isMobile={isMobile}
                  />
                </QRow>

                <QRow
                  label="AI tools you have used in your teaching"
                  required
                  help="Select all that apply."
                  error={fieldError("aiToolsUsed")}
                  isMobile={isMobile}
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
                      isMobile={isMobile}
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
                  isMobile={isMobile}
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
                      isMobile={isMobile}
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

            {/* ── STEP 4 ── */}
            {step === 3 && (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <QRow
                  label="What would make this workshop most valuable for you?"
                  required
                  help="Choose the outcomes that matter most."
                  error={fieldError("workshopValue")}
                  isMobile={isMobile}
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
                      isMobile={isMobile}
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
                  isMobile={isMobile}
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
                    isMobile={isMobile}
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
                  isMobile={isMobile}
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

          {/* ── Error banner ── */}
          {submitError && (
            <div
              style={{
                margin: isMobile ? "12px 16px 0" : "12px 28px 0",
                padding: "12px 16px",
                borderRadius: 10,
                background: "#fef2f2",
                border: "1px solid #fecaca",
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                style={{ flexShrink: 0, marginTop: 2 }}
              >
                <circle
                  cx="8"
                  cy="8"
                  r="7"
                  stroke="#dc2626"
                  strokeWidth="1.5"
                />
                <path
                  d="M8 5v3.5M8 11h.01"
                  stroke="#dc2626"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.82rem",
                    fontWeight: 700,
                    color: "#b91c1c",
                  }}
                >
                  Submission failed
                </p>
                <p
                  style={{
                    margin: "3px 0 0",
                    fontSize: "0.78rem",
                    color: "#dc2626",
                    lineHeight: 1.5,
                  }}
                >
                  {submitError}. Please check your connection and try again.
                </p>
              </div>
            </div>
          )}

          {/* ── Footer nav ── */}
          <div
            style={{
              padding: isMobile ? "14px 16px" : "20px 28px",
              borderTop: "1px solid var(--color-primary-200, #e2e8f0)",
              background: "var(--color-primary-50, #f8fafc)",
              marginTop: 20,
            }}
          >
            {isMobile ? (
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <div
                  style={{
                    fontSize: "0.8rem",
                    color: "var(--color-primary-600)",
                    textAlign: "center",
                    lineHeight: 1.5,
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
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 10,
                  }}
                >
                  <button
                    type="button"
                    onClick={goPrev}
                    disabled={step === 0 || isLoading}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 6,
                      padding: "11px 14px",
                      borderRadius: 10,
                      border: "1px solid var(--color-primary-300)",
                      background: "#fff",
                      cursor: step === 0 ? "not-allowed" : "pointer",
                      fontSize: "0.84rem",
                      fontWeight: 600,
                      color:
                        step === 0 ? "#94a3b8" : "var(--color-primary-700)",
                      opacity: step === 0 ? 0.5 : 1,
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
                    Back
                  </button>

                  {step < totalSteps - 1 ? (
                    <button
                      key="nav-next"
                      type="button"
                      onClick={goNext}
                      disabled={isLoading}
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
                      }}
                    >
                      Next step
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
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
                      key="nav-submit"
                      type="submit"
                      disabled={isLoading}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "9px 22px",
                        borderRadius: 8,
                        minWidth: 168,
                        background: isLoading ? "#86efac" : "#16a34a",
                        color: "#fff",
                        fontSize: "0.875rem",
                        fontWeight: 600,
                        cursor: isLoading ? "not-allowed" : "pointer",
                        border: "none",
                        transition: "background 0.15s",
                      }}
                    >
                      {isLoading ? (
                        <>
                          <Spinner /> Submitting…
                        </>
                      ) : (
                        <>
                          Submit Registration
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                          >
                            <path
                              d="M2 7h10M8 3l4 4-4 4"
                              stroke="currentColor"
                              strokeWidth="1.6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <button
                  type="button"
                  onClick={goPrev}
                  disabled={step === 0 || isLoading}
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
                    key="next-btn"
                    type="button"
                    onClick={goNext}
                    disabled={isLoading}
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
                    key="submit-btn"
                    type="submit"
                    disabled={isLoading}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "9px 22px",
                      borderRadius: 8,
                      minWidth: 168,
                      background: isLoading ? "#86efac" : "#16a34a",
                      color: "#fff",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      cursor: isLoading ? "not-allowed" : "pointer",
                      border: "none",
                      transition: "background 0.15s",
                    }}
                  >
                    {isLoading ? (
                      <>
                        <Spinner /> Submitting…
                      </>
                    ) : (
                      <>
                        Submit Registration
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                        >
                          <path
                            d="M2 7h10M8 3l4 4-4 4"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SPINNER
───────────────────────────────────────────────────────────── */
function Spinner() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      style={{ animation: "spin 0.7s linear infinite", flexShrink: 0 }}
    >
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      <circle
        cx="8"
        cy="8"
        r="6"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
      />
      <path
        d="M8 2a6 6 0 0 1 6 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   STEPPER BLOCK
───────────────────────────────────────────────────────────── */
function StepperBlock({
  step,
  totalSteps,
  pct,
  stepDone,
  stepTotal,
  isMobile,
}) {
  return (
    <div
      style={{
        marginBottom: 24,
        borderRadius: 16,
        border: "1px solid var(--color-primary-200, #e2e8f0)",
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 1px 3px rgba(0,0,0,0.03)",
      }}
    >
      {/* Progress row */}
      <div
        style={{
          padding: isMobile ? "14px" : "16px 20px 14px",
          borderBottom: "1px solid var(--color-primary-200)",
          display: "flex",
          alignItems: isMobile ? "stretch" : "center",
          justifyContent: "space-between",
          gap: 14,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <div>
          <p
            style={{
              margin: 0,
              fontSize: "0.68rem",
              fontWeight: 700,
              color: "var(--color-primary-500)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
            }}
          >
            Progress
          </p>
          <p
            style={{
              margin: "6px 0 0",
              fontSize: "0.95rem",
              fontWeight: 700,
              color: "var(--color-primary-900)",
            }}
          >
            Step {step + 1} of {totalSteps}
          </p>
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "var(--color-primary-600)",
              }}
            >
              Overall completion
            </span>
            <span
              style={{
                fontSize: "0.8rem",
                fontWeight: 700,
                color: "var(--color-primary-900)",
              }}
            >
              {pct}%
            </span>
          </div>
          <div
            style={{
              height: 8,
              borderRadius: 999,
              background: "var(--color-primary-100, #e2e8f0)",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${pct}%`,
                borderRadius: 999,
                background:
                  "linear-gradient(90deg, var(--color-blue-500, #3b82f6), var(--color-blue-600, #2563eb))",
                transition: "width 0.35s ease",
              }}
            />
          </div>
        </div>
        <div
          style={{
            alignSelf: isMobile ? "flex-start" : "auto",
            fontSize: "0.78rem",
            fontWeight: 600,
            color:
              stepDone === stepTotal ? "#166534" : "var(--color-primary-600)",
            background:
              stepDone === stepTotal ? "#f0fdf4" : "var(--color-primary-50)",
            border: `1px solid ${stepDone === stepTotal ? "#bbf7d0" : "var(--color-primary-200)"}`,
            borderRadius: 999,
            padding: "6px 12px",
            whiteSpace: "nowrap",
          }}
        >
          {stepDone === stepTotal
            ? "✓ Step complete"
            : `${stepDone}/${stepTotal} required`}
        </div>
      </div>

      {/* Step tabs — mobile: 2×2 grid / desktop: horizontal */}
      {isMobile ? (
        <div
          style={{
            padding: "12px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 8,
          }}
        >
          {STEPS.map((s, i) => {
            const isActive = i === step,
              isDone = i < step;
            return (
              <div
                key={s.id}
                style={{
                  border: "1px solid var(--color-primary-200)",
                  borderRadius: 12,
                  padding: "10px",
                  background: isActive
                    ? "var(--color-blue-50, #eff6ff)"
                    : "#fff",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      flexShrink: 0,
                      background: isDone
                        ? "#16a34a"
                        : isActive
                          ? "var(--color-blue-600)"
                          : "var(--color-primary-100)",
                      color:
                        isDone || isActive
                          ? "#fff"
                          : "var(--color-primary-500)",
                    }}
                  >
                    {isDone ? "✓" : s.id}
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      color: isActive
                        ? "var(--color-blue-700)"
                        : "var(--color-primary-800)",
                    }}
                  >
                    {s.short}
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.7rem",
                    color: "var(--color-primary-500)",
                    lineHeight: 1.4,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${totalSteps}, minmax(0, 1fr))`,
          }}
        >
          {STEPS.map((s, i) => {
            const isActive = i === step,
              isDone = i < step;
            return (
              <div
                key={s.id}
                style={{
                  padding: "14px",
                  background: isActive
                    ? "var(--color-blue-50, #eff6ff)"
                    : "#fff",
                  borderRight:
                    i !== totalSteps - 1
                      ? "1px solid var(--color-primary-200)"
                      : "none",
                  borderTop: isActive
                    ? "2px solid var(--color-blue-600)"
                    : "2px solid transparent",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 5,
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      background: isDone
                        ? "#16a34a"
                        : isActive
                          ? "var(--color-blue-600)"
                          : "var(--color-primary-100)",
                      color:
                        isDone || isActive
                          ? "#fff"
                          : "var(--color-primary-500)",
                    }}
                  >
                    {isDone ? "✓" : s.id}
                  </div>
                  <span
                    style={{
                      fontSize: "0.76rem",
                      fontWeight: isActive ? 700 : 600,
                      color: isActive
                        ? "var(--color-blue-700)"
                        : "var(--color-primary-700)",
                    }}
                  >
                    {s.short}
                  </span>
                </div>
                <p
                  style={{
                    margin: 0,
                    fontSize: "0.68rem",
                    color: "var(--color-primary-500)",
                    lineHeight: 1.35,
                  }}
                >
                  {s.desc}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCALE SELECTOR
───────────────────────────────────────────────────────────── */
function ScaleSelector({
  options,
  value,
  onChange,
  inputRef,
  accentColor = "#2563eb",
  isMobile = false,
}) {
  const selectedIdx = options.indexOf(value);
  const count = options.length;

  if (isMobile) {
    return (
      <div ref={inputRef} tabIndex={-1}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
          {options.map((opt, i) => {
            const isSelected = value === opt;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => onChange(opt)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "34px 1fr",
                  alignItems: "center",
                  gap: 12,
                  width: "100%",
                  borderRadius: 12,
                  border: `1.5px solid ${isSelected ? accentColor : "var(--color-primary-200)"}`,
                  background: isSelected ? `${accentColor}10` : "#fff",
                  padding: "10px 12px",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    border: `2px solid ${isSelected ? accentColor : "#dbe5f1"}`,
                    background: isSelected ? accentColor : "#fff",
                    color: isSelected ? "#fff" : "#94a3b8",
                  }}
                >
                  {i + 1}
                </div>
                <span
                  style={{
                    fontSize: "0.86rem",
                    fontWeight: isSelected ? 700 : 600,
                    color: isSelected ? accentColor : "#334155",
                    lineHeight: 1.35,
                  }}
                >
                  {opt}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={inputRef}
      tabIndex={-1}
      style={{ overflowX: "auto", paddingTop: 4 }}
    >
      <div
        style={{
          minWidth: count > 5 ? 560 : 460,
          position: "relative",
          padding: "18px 10px 6px",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 34,
            right: 34,
            top: 37,
            height: 2,
            background: "#dbe5f1",
            borderRadius: 999,
          }}
        >
          {selectedIdx >= 0 && (
            <div
              style={{
                height: "100%",
                width:
                  count === 1 ? "0%" : `${(selectedIdx / (count - 1)) * 100}%`,
                background: accentColor,
                borderRadius: 999,
                opacity: 0.42,
                transition: "width 0.25s ease",
              }}
            />
          )}
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
            gap: 8,
            position: "relative",
            zIndex: 1,
          }}
        >
          {options.map((opt, i) => {
            const isSelected = value === opt,
              isPast = selectedIdx > i;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => onChange(opt)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.76rem",
                    fontWeight: 700,
                    border: `2px solid ${isSelected ? accentColor : isPast ? `${accentColor}66` : "#dbe5f1"}`,
                    background: isSelected
                      ? accentColor
                      : isPast
                        ? `${accentColor}12`
                        : "#fff",
                    color: isSelected
                      ? "#fff"
                      : isPast
                        ? accentColor
                        : "#94a3b8",
                    boxShadow: isSelected
                      ? `0 0 0 4px ${accentColor}18`
                      : "none",
                  }}
                >
                  {i + 1}
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: isSelected ? 700 : 600,
                    color: isSelected ? accentColor : "#475569",
                    textAlign: "center",
                    lineHeight: 1.35,
                    maxWidth: 84,
                  }}
                >
                  {opt}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CHIP GROUP
───────────────────────────────────────────────────────────── */
function ChipGroup({
  options,
  value,
  values = [],
  type = "radio",
  onChange,
  onToggle,
  inputRef,
  isMobile = false,
}) {
  return (
    <div
      ref={inputRef}
      tabIndex={-1}
      style={{ display: "flex", flexWrap: "wrap", gap: isMobile ? 8 : 10 }}
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
              width: isMobile ? "100%" : "auto",
              padding: isMobile ? "10px 12px" : "9px 15px",
              borderRadius: 10,
              fontSize: isMobile ? "0.84rem" : "0.86rem",
              fontWeight: checked ? 600 : 500,
              cursor: "pointer",
              border: `1.5px solid ${checked ? "var(--color-blue-600, #2563eb)" : "var(--color-primary-200)"}`,
              background: checked ? "var(--color-blue-50, #eff6ff)" : "#fff",
              color: checked
                ? "var(--color-blue-700, #1d4ed8)"
                : "var(--color-primary-700)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              lineHeight: 1.4,
              textAlign: "left",
              minHeight: 42,
            }}
          >
            {type === "checkbox" && (
              <span
                style={{
                  width: 15,
                  height: 15,
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
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M1.5 4.5L3.5 6.5L7.5 2.5"
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
                  width: 15,
                  height: 15,
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
            <span style={{ flex: 1 }}>{opt}</span>
          </button>
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   QUESTION ROW
───────────────────────────────────────────────────────────── */
function QRow({ label, required, help, error, children, isMobile = false }) {
  return (
    <div
      style={{
        borderRadius: 14,
        padding: isMobile ? "16px 14px" : "18px 20px 20px",
        border: `1px solid ${error ? "#fca5a5" : "var(--color-primary-200)"}`,
        background: error ? "#fff5f5" : "#fff",
      }}
    >
      <div style={{ marginBottom: 14 }}>
        <p
          style={{
            margin: 0,
            fontSize: "0.95rem",
            fontWeight: 700,
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
              margin: "6px 0 0",
              fontSize: "0.8rem",
              color: "var(--color-primary-500)",
              lineHeight: 1.55,
            }}
          >
            {help}
          </p>
        )}
        {error && (
          <p
            style={{
              margin: "6px 0 0",
              fontSize: "0.76rem",
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
   INPUTS
───────────────────────────────────────────────────────────── */
function TextInput({
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
        width: "100%",
        height: 44,
        borderRadius: 10,
        border: `1.5px solid ${hasError ? "#fca5a5" : "var(--color-primary-300, #cbd5e1)"}`,
        padding: "0 14px",
        fontSize: "0.875rem",
        color: "var(--color-primary-900)",
        background: "#fff",
        outline: "none",
        boxSizing: "border-box",
        ...extra,
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
        borderRadius: 10,
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
        borderRadius: 10,
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
