"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaClipboardList } from "react-icons/fa";

export default function FloatingActions() {
  const [scrolled, setScrolled] = useState(false);
  const [inregistrationFlow, setInregistrationFlow] = useState(false);

  /* Detect scroll */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Detect registration section */
  useEffect(() => {
    const registration = document.getElementById("registration");
    if (!registration) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInregistrationFlow(entry.isIntersecting);
      },
      { threshold: 0.05 },
    );

    observer.observe(registration);
    return () => observer.disconnect();
  }, []);

  const shouldShow = scrolled && !inregistrationFlow;

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
      {/* ================= REGISTER ================= */}
      <div className="group relative flex items-center justify-end">
        {/* Label */}
        <span
          className="
            absolute right-full mr-3
            whitespace-nowrap
            rounded-lg
            bg-blue-600 text-white
            
            px-3 py-1.5
            text-xs font-medium
            opacity-0 translate-x-2
            transition-all duration-200
            group-hover:opacity-100 group-hover:translate-x-0
            group-focus-within:opacity-100 group-focus-within:translate-x-0
          "
        >
          Go to registration
        </span>

        <button
          onClick={scrollToRegister}
          aria-label="Go to registration section"
          className="
            flex items-center justify-center
            w-11 h-11 rounded-full
            bg-blue-600 text-white
            shadow-lg
            transition
            hover:bg-blue-700
            hover:-translate-y-0.5
            focus:outline-none
            focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
          "
        >
          <FaClipboardList className="text-sm" />
        </button>
      </div>

      {/* ================= GO UP ================= */}
      <div className="group relative flex items-center justify-end">
        {/* Label */}
        <span
          className="
            absolute right-full mr-3
            whitespace-nowrap
            rounded-lg
            bg-slate-900 text-white
            px-3 py-1.5
            text-xs font-medium
            opacity-0 translate-x-2
            transition-all duration-200
            group-hover:opacity-100 group-hover:translate-x-0
            group-focus-within:opacity-100 group-focus-within:translate-x-0
          "
        >
          Back to top
        </span>

        <button
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="
            flex items-center justify-center
            w-11 h-11 rounded-full
            bg-slate-700 text-slate-100
            shadow-md
            transition
            hover:bg-slate-800
            hover:-translate-y-0.5
            focus:outline-none
            focus:ring-2 focus:ring-slate-400 focus:ring-offset-2
          "
        >
          <FaArrowUp className="text-sm" />
        </button>
      </div>
    </div>
  );
}
