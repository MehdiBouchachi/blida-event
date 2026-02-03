"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaClipboardList } from "react-icons/fa";

export default function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);
  const [inRegistrationFlow, setInRegistrationFlow] = useState(false);

  /* Detect scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Detect ANY PART of the registration form */
  useEffect(() => {
    const registration = document.getElementById("registration");
    if (!registration) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInRegistrationFlow(entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0.05, // even a tiny intersection hides actions
      },
    );

    observer.observe(registration);
    return () => observer.disconnect();
  }, []);

  const shouldShow = scrolled && !inRegistrationFlow;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToRegister = () => {
    const el = document.getElementById("registration");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        flex flex-col gap-3
        transition-all duration-300 ease-out
        ${
          shouldShow
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      {/* REGISTER */}
      <button
        onClick={scrollToRegister}
        aria-label="Go to registration"
        className="
          flex items-center justify-center
          w-11 h-11 rounded-full
          bg-blue-600 text-white
          shadow-lg
          transition
          hover:bg-blue-700
          hover:-translate-y-0.5
          focus:outline-none
        "
      >
        <FaClipboardList className="text-sm" />
      </button>

      {/* GO UP */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          flex items-center justify-center
          w-11 h-11 rounded-full
          bg-slate-700 text-slate-100
          shadow-md
          transition
          hover:bg-slate-800
          hover:-translate-y-0.5
          focus:outline-none
        "
      >
        <FaArrowUp className="text-sm" />
      </button>
    </div>
  );
}
