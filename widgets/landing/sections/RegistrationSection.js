"use client";

import { useState, useRef } from "react";
import { useRegister } from "../../../app/_hooks/useRegister";
import RegistrationSuccess from "../components/RegistrationSuccess";
import RegistrationError from "../components/RegistrationError";

/* ---------------- CONFIG ---------------- */
const STEPS = [
  { id: 1, label: "Participant Information" },
  { id: 2, label: "Status & Attendance" },
  { id: 3, label: "ICT Usage Survey" },
  { id: 4, label: "Feedback" },
];

const MOODLE_LABELS = [
  "Not familiar",
  "Slightly familiar",
  "Moderately familiar",
  "Very familiar",
  "Expert level",
];

const EASE_LABELS = [
  "Very difficult",
  "Difficult",
  "Acceptable",
  "Easy",
  "Very easy",
];

const REQUIRED_FIELDS = {
  0: ["fullName", "email", "faculty"],
  1: ["status", "attendance"],
  2: [
    "devices",
    "internetReliability",
    "usageFrequency",
    "purposes",
    "moodleLevel",
    "easeOfUse",
  ],
  3: ["difficulties", "improvements"],
};

const INITIAL_FORM_STATE = {
  fullName: "",
  email: "",
  faculty: "",
  status: "",
  attendance: "",
  devices: [],
  moodleLevel: 3,
  usageFrequency: "",
  purposes: [],
  easeOfUse: 3,
  internetReliability: "",
  difficulties: "",
  improvements: "",
};
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
/* ---------------- MAIN ---------------- */
export default function RegistrationSection() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(INITIAL_FORM_STATE);
  const fieldRefs = useRef({});

  const { register, isLoading, error } = useRegister();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  function isStepValid(step) {
    return (REQUIRED_FIELDS[step] || []).every((key) => {
      const value = form[key];

      if (Array.isArray(value)) {
        return value.length > 0;
      }

      if (!value || value.toString().trim() === "") {
        return false;
      }

      if (key === "email") {
        return EMAIL_REGEX.test(value);
      }

      return true;
    });
  }

  function focusFirstInvalidField(step) {
    const required = REQUIRED_FIELDS[step] || [];

    for (const key of required) {
      const value = form[key];
      const invalid = Array.isArray(value)
        ? value.length === 0
        : !value ||
          value.toString().trim() === "" ||
          (key === "email" && !EMAIL_REGEX.test(value));

      if (invalid) {
        requestAnimationFrame(() => {
          const el = fieldRefs.current[key];
          if (!el) return;
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          if (typeof el.focus === "function") el.focus();
        });
        break;
      }
    }
  }
  function scrollToFirstField(step) {
    const fields = REQUIRED_FIELDS[step] || [];
    const firstKey = fields[0];
    if (!firstKey) return;

    requestAnimationFrame(() => {
      const el = fieldRefs.current[firstKey];
      if (!el) return;

      el.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });

      if (typeof el.focus === "function") {
        el.focus();
      }
    });
  }

  async function handleSubmit() {
    if (!isStepValid(step)) {
      focusFirstInvalidField(step);
      return;
    }

    const payload = {
      ...form,
      moodleLevel: MOODLE_LABELS[form.moodleLevel - 1],
      easeOfUse: EASE_LABELS[form.easeOfUse - 1],
    };

    const result = await register(payload);

    if (result?.success) {
      setShowSuccess(true);
      setForm(INITIAL_FORM_STATE);
      setStep(0);
    } else {
      setShowError(true);
    }
  }

  const toggle = (key, value) => {
    setForm((prev) => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter((v) => v !== value)
        : [...prev[key], value],
    }));
  };

  return (
    <section
      id="registration"
      className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32"
    >
      {/* ================= HEADER ================= */}
      <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
          Workshop Pre-Registration
        </h2>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg leading-relaxed text-slate-600">
          This form collects structured academic data to support institutional
          evaluation, digital transformation planning, and evidence-based
          decision-making in the distance learning blida 1 strategy.
        </p>
      </div>

      <Stepper step={step} />

      {/* ================= FORM CARD ================= */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm px-5 sm:px-8 md:px-12 py-8 sm:py-10 md:py-12 space-y-12 sm:space-y-14">
        {step === 0 && (
          <Section title="Participant Information">
            <Field label="Full Name" required>
              <Input
                value={form.fullName}
                onChange={(v) => setForm({ ...form, fullName: v })}
                inputRef={(el) => (fieldRefs.current.fullName = el)}
              />
            </Field>

            <Field label="Email Address" required>
              <Input
                type="email"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                inputRef={(el) => (fieldRefs.current.email = el)}
              />
            </Field>

            <Field label="Faculty / Department" required>
              <Input
                value={form.faculty}
                onChange={(v) => setForm({ ...form, faculty: v })}
                inputRef={(el) => (fieldRefs.current.faculty = el)}
              />
            </Field>
          </Section>
        )}

        {step === 1 && (
          <Section title="Status & Attendance">
            <Field label="Academic or Professional Status" required>
              <Select
                value={form.status}
                onChange={(v) => setForm({ ...form, status: v })}
                options={[
                  "Lecturer (Faculty Member)",
                  "Student",
                  "Administrative Staff",
                  "Other",
                ]}
                inputRef={(el) => (fieldRefs.current.status = el)}
              />
            </Field>

            <Field label="Workshop Attendance Confirmation" required>
              <Select
                value={form.attendance}
                onChange={(v) => setForm({ ...form, attendance: v })}
                options={[
                  "Yes, I will attend",
                  "No, I cannot attend",
                  "Not sure yet",
                ]}
                inputRef={(el) => (fieldRefs.current.attendance = el)}
              />
            </Field>
          </Section>
        )}

        {step === 2 && (
          <Section title="ICT Usage Survey">
            <SubSection title="3.1 Access & Equipment">
              <Field
                label="Devices used for online learning / teaching"
                required
              >
                <div
                  ref={(el) => (fieldRefs.current.devices = el)}
                  tabIndex={-1}
                >
                  <CheckboxGroup
                    values={form.devices}
                    onToggle={(v) => toggle("devices", v)}
                    options={[
                      "Desktop computer",
                      "Laptop",
                      "Tablet",
                      "Smartphone",
                      "Other",
                    ]}
                  />
                </div>
              </Field>

              <Field label="Internet connection reliability" required>
                <Select
                  value={form.internetReliability}
                  onChange={(v) => setForm({ ...form, internetReliability: v })}
                  options={[
                    "Very reliable",
                    "Mostly reliable",
                    "Sometimes unreliable",
                    "Often unreliable",
                    "No regular internet access",
                  ]}
                  inputRef={(el) =>
                    (fieldRefs.current.internetReliability = el)
                  }
                />
              </Field>
            </SubSection>

            <SubSection title="3.2 Platform Usage Patterns">
              <Field label="Frequency of platform usage" required>
                <Select
                  value={form.usageFrequency}
                  onChange={(v) => setForm({ ...form, usageFrequency: v })}
                  options={[
                    "Every day",
                    "Several times a week",
                    "Several times a month",
                    "Rarely",
                    "Never",
                  ]}
                  inputRef={(el) => (fieldRefs.current.usageFrequency = el)}
                />
              </Field>

              <Field label="Main purposes of use" required>
                <div
                  ref={(el) => (fieldRefs.current.purposes = el)}
                  tabIndex={-1}
                >
                  <CheckboxGroup
                    values={form.purposes}
                    onToggle={(v) => toggle("purposes", v)}
                    options={[
                      "Access course materials",
                      "Submit assignments / quizzes",
                      "Forums / discussions",
                      "Communication",
                      "Online exams",
                      "I do not use the platform",
                    ]}
                  />
                </div>
              </Field>
            </SubSection>

            <SubSection title="3.3 Platform Perception">
              <Field label="Familiarity with Moodle LMS" required>
                <div
                  ref={(el) => (fieldRefs.current.moodleLevel = el)}
                  tabIndex={-1}
                >
                  <DotScale
                    value={form.moodleLevel}
                    onChange={(v) => setForm({ ...form, moodleLevel: v })}
                    labels={MOODLE_LABELS}
                  />
                </div>
              </Field>

              <Field label="Ease of use of the platform" required>
                <div
                  ref={(el) => (fieldRefs.current.easeOfUse = el)}
                  tabIndex={-1}
                >
                  <DotScale
                    value={form.easeOfUse}
                    onChange={(v) => setForm({ ...form, easeOfUse: v })}
                    labels={EASE_LABELS}
                  />
                </div>
              </Field>
            </SubSection>
          </Section>
        )}

        {step === 3 && (
          <Section title="Feedback & Suggestions">
            <Field label="Main difficulties encountered" required>
              <Textarea
                value={form.difficulties}
                onChange={(v) => setForm({ ...form, difficulties: v })}
                inputRef={(el) => (fieldRefs.current.difficulties = el)}
              />
            </Field>

            <Field label="Suggested improvements" required>
              <Textarea
                value={form.improvements}
                onChange={(v) => setForm({ ...form, improvements: v })}
                inputRef={(el) => (fieldRefs.current.improvements = el)}
              />
            </Field>
          </Section>
        )}

        {/* ================= NAV ================= */}
        <div className="flex justify-between pt-8 sm:pt-10 border-t">
          <button
            disabled={step === 0}
            onClick={() => setStep(step - 1)}
            className="text-sm font-medium text-slate-500 hover:text-slate-800 disabled:opacity-40"
          >
            Back
          </button>

          {step < 3 ? (
            <button
              onClick={() => {
                if (!isStepValid(step)) {
                  focusFirstInvalidField(step);
                  return;
                }

                const nextStep = step + 1;
                setStep(nextStep);
                scrollToFirstField(nextStep);
              }}
              className="px-6 sm:px-8 py-2.5 rounded-lg bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition"
            >
              Continue
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="px-6 sm:px-8 py-2.5 rounded-lg bg-green-600 text-white text-sm font-semibold hover:bg-green-700 disabled:opacity-50"
            >
              {isLoading ? "Submitting..." : "Submit Registration"}
            </button>
          )}
        </div>
      </div>

      <RegistrationSuccess
        open={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
      <RegistrationError
        open={showError}
        message={error}
        onClose={() => setShowError(false)}
      />
    </section>
  );
}

/* ---------------- UI COMPONENTS ---------------- */

function Stepper({ step }) {
  return (
    <div className="relative mb-12 sm:mb-16">
      <div className="absolute top-4 left-0 right-0 h-px bg-slate-200" />
      <div className="flex justify-between relative">
        {STEPS.map((s, i) => (
          <div key={s.id} className="flex flex-col items-center flex-1">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold
                ${
                  i <= step
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-slate-300 text-slate-400"
                }`}
            >
              {s.id}
            </div>
            <span
              className={`mt-4 text-xs sm:text-sm text-center ${
                i === step ? "font-medium text-slate-900" : "text-slate-500"
              }`}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
/* ================= SECTION ================= */
function Section({ title, children }) {
  return (
    <div className="space-y-8 sm:space-y-10">
      <h3
        className="
          text-base
          sm:text-lg
          font-semibold
          text-slate-900
          border-b
          pb-3
        "
      >
        {title}
      </h3>
      {children}
    </div>
  );
}

/* ================= SUB SECTION ================= */
function SubSection({ title, children }) {
  return (
    <div
      className="
        rounded-xl
        border border-slate-200
        bg-slate-50/40
        px-4 sm:px-6
        py-6 sm:py-8
        space-y-6 sm:space-y-8
      "
    >
      <h4 className="text-sm sm:text-base font-semibold text-slate-900">
        {title}
      </h4>
      {children}
    </div>
  );
}

/* ================= FIELD ================= */
function Field({ label, required, children }) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <label className="block text-sm sm:text-base font-semibold text-slate-900">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

/* ================= INPUT ================= */
function Input({ value, onChange, type = "text", inputRef }) {
  return (
    <input
      ref={inputRef}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        h-11 sm:h-12
        rounded-lg
        border border-slate-300
        px-4
        text-sm sm:text-base
        focus:ring-2 focus:ring-blue-500
        outline-none
      "
    />
  );
}

/* ================= SELECT ================= */
function Select({ value, onChange, options, inputRef }) {
  return (
    <select
      ref={inputRef}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        h-11 sm:h-12
        rounded-lg
        border border-slate-300
        px-4
        text-sm sm:text-base
        bg-white
        focus:ring-2 focus:ring-blue-500
        outline-none
      "
    >
      <option value="">Select an option</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  );
}

/* ================= CHECKBOX GROUP ================= */
function CheckboxGroup({ options, values, onToggle }) {
  return (
    <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
      {options.map((o) => (
        <label
          key={o}
          className="
            flex items-start
            gap-3
            p-3
            rounded-lg
            border border-slate-200
            text-sm sm:text-base
            font-medium
            text-slate-800
            cursor-pointer
            active:bg-slate-100
          "
        >
          <input
            type="checkbox"
            checked={values.includes(o)}
            onChange={() => onToggle(o)}
            className="mt-1 w-4 h-4 accent-blue-600"
          />
          <span className="leading-snug">{o}</span>
        </label>
      ))}
    </div>
  );
}

/* ================= DOT SCALE ================= */
function DotScale({ value, onChange, labels }) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-5">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`Level ${n}`}
            onClick={() => onChange(n)}
            className={`
              w-5 h-5
              rounded-full
              transition
              ${
                n <= value
                  ? "bg-blue-600 scale-110"
                  : "bg-slate-300 active:bg-slate-400"
              }
            `}
          />
        ))}
      </div>

      <span className="block text-sm font-medium text-slate-700">
        {labels[value - 1]}
      </span>
    </div>
  );
}

/* ================= TEXTAREA ================= */
function Textarea({ value, onChange, inputRef }) {
  return (
    <textarea
      ref={inputRef}
      rows={4}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="
        w-full
        rounded-lg
        border border-slate-300
        px-4 py-3
        text-sm sm:text-base
        focus:ring-2 focus:ring-blue-500
        outline-none
        resize-none
      "
    />
  );
}
