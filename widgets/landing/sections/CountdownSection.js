"use client";

import { useEffect, useMemo, useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const EVENT_START = new Date("2026-04-15T08:30:00+01:00").getTime();
const EVENT_END = new Date("2026-04-15T14:00:00+01:00").getTime();

function getEventState() {
  const now = Date.now();

  if (now < EVENT_START) {
    const diff = EVENT_START - now;
    return {
      phase: "before",
      label: "Event Countdown",
      title: "Countdown to Certification Day",
      subtitle: "April 15, 2026 · 08:30 AM · Blida 1 University",
      timeLeft: {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      },
    };
  }

  if (now >= EVENT_START && now < EVENT_END) {
    const diff = EVENT_END - now;
    return {
      phase: "during",
      label: "Event In Progress",
      title: "Certification Day Is Live",
      subtitle: "The workshop is currently taking place at Blida 1 University.",
      timeLeft: {
        days: 0,
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      },
    };
  }

  return {
    phase: "after",
    label: "Event Closed",
    title: "Certification Day Has Ended",
    subtitle: "The academic event concluded on April 15, 2026 at 02:00 PM.",
    timeLeft: {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    },
  };
}

function InfoPill({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-primary-200)] bg-white/80 px-4 py-2 text-xs font-medium text-[var(--color-primary-700)] shadow-sm backdrop-blur-sm">
      <Icon size={12} className="text-[var(--color-blue-600)]" />
      <span>{children}</span>
    </div>
  );
}

function TimerCard({ value, label, phase }) {
  const isDuring = phase === "during";

  return (
    <div
      className={`relative rounded-2xl border bg-white/90 px-4 py-5 text-center shadow-sm backdrop-blur-sm sm:px-5 sm:py-6 ${
        isDuring ? "border-emerald-200" : "border-[var(--color-primary-200)]"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
      <div
        className={`text-[clamp(1.9rem,4vw,2.9rem)] font-bold leading-none tracking-[-0.05em] ${
          isDuring ? "text-emerald-700" : "text-[var(--color-primary-900)]"
        }`}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        className={`mt-2 text-[10px] font-bold uppercase tracking-[0.18em] sm:text-[11px] ${
          isDuring ? "text-emerald-600" : "text-[var(--color-blue-600)]"
        }`}
      >
        {label}
      </div>
    </div>
  );
}

function StatusBadge({ phase, text }) {
  const styles = {
    before: "border-blue-200/80 bg-white/85 text-[var(--color-blue-700)]",
    during: "border-emerald-200 bg-emerald-50 text-emerald-700",
    after: "border-slate-200 bg-white/85 text-slate-600",
  };

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm backdrop-blur-sm ${styles[phase]}`}
    >
      <span
        className={`h-2 w-2 rounded-full ${
          phase === "before"
            ? "bg-[var(--color-blue-600)]"
            : phase === "during"
              ? "bg-emerald-500"
              : "bg-slate-400"
        }`}
      />
      <span className="text-[10.5px] font-bold uppercase tracking-[0.18em]">
        {text}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const [eventState, setEventState] = useState(getEventState());

  useEffect(() => {
    const interval = setInterval(() => {
      setEventState(getEventState());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timerUnits = useMemo(() => {
    if (eventState.phase === "during") {
      return [
        { label: "Hours Left", value: eventState.timeLeft.hours },
        { label: "Minutes", value: eventState.timeLeft.minutes },
        { label: "Seconds", value: eventState.timeLeft.seconds },
      ];
    }

    if (eventState.phase === "before") {
      return [
        { label: "Days", value: eventState.timeLeft.days },
        { label: "Hours", value: eventState.timeLeft.hours },
        { label: "Minutes", value: eventState.timeLeft.minutes },
        { label: "Seconds", value: eventState.timeLeft.seconds },
      ];
    }

    return [];
  }, [eventState]);

  return (
    <section
      id="countdown"
      className="relative overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{ background: "var(--color-primary-50)" }}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#f7faff_0%,#f3f7ff_100%)]" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(37,99,235,0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(37,99,235,0.035) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 88%)",
          }}
        />
        <div className="absolute left-1/2 top-0 h-[280px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08)_0%,transparent_72%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <StatusBadge phase={eventState.phase} text={eventState.label} />

        <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2rem,4vw,3.15rem)] font-bold leading-[1.08] tracking-[-0.045em] text-[var(--color-primary-900)]">
          {eventState.title}
        </h2>

     
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          <InfoPill icon={FaCalendarAlt}>April 15, 2026</InfoPill>
          <InfoPill icon={FaClock}>08:30 AM → 02:00 PM</InfoPill>
          <InfoPill icon={FaMapMarkerAlt}>
            Blida 1 University · Architecture Institute
          </InfoPill>
        </div>

        {eventState.phase !== "after" ? (
          <>
            <div
              className={`mx-auto mt-8 grid gap-3 sm:gap-4 ${
                eventState.phase === "during"
                  ? "max-w-3xl grid-cols-1 sm:grid-cols-3"
                  : "max-w-4xl grid-cols-2 sm:grid-cols-4"
              }`}
            >
              {timerUnits.map((unit) => (
                <TimerCard
                  key={unit.label}
                  value={unit.value}
                  label={unit.label}
                  phase={eventState.phase}
                />
              ))}
            </div>

            <div
              className={`mx-auto mt-6 max-w-3xl rounded-2xl border px-5 py-4 text-sm leading-7 shadow-sm backdrop-blur-sm ${
                eventState.phase === "during"
                  ? "border-emerald-200 bg-emerald-50/80 text-emerald-800"
                  : "border-[var(--color-primary-200)] bg-white/75 text-[var(--color-primary-600)]"
              }`}
            >
              {eventState.phase === "before"
                ? "A focused academic event on pedagogical AI, online course quality, and certification readiness."
                : "The event is currently in progress. Participants are now attending the academic workshop sessions."}
            </div>

            {eventState.phase === "before" && (
              <div className="mt-7">
                <a
                  href="#registration"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-gradient-to-r from-[var(--color-blue-600)] to-[var(--color-blue-700)] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.22)] transition-all hover:-translate-y-0.5"
                >
                  Register Now
                </a>
              </div>
            )}
          </>
        ) : (
          <div className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-white/90 px-6 py-8 shadow-sm backdrop-blur-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-500">
              Event Summary
            </p>
            <h3 className="mt-3 text-[1.65rem] font-bold tracking-tight text-[var(--color-primary-900)]">
              Thank You for Your Participation
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--color-primary-600)]">
              The workshop has officially ended. We hope participants found the
              sessions valuable for pedagogical AI integration, course design,
              and certification preparation.
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#program"
                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl border border-[var(--color-primary-200)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--color-primary-800)] transition-all hover:border-[var(--color-blue-300)]"
              >
                View Program
              </a>

              <a
                href="#resources"
                className="inline-flex min-h-[46px] items-center justify-center rounded-2xl bg-[var(--color-blue-600)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.18)] transition-all hover:-translate-y-0.5"
              >
                Access Resources
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
