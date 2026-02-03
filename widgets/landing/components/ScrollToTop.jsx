"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaClipboardList } from "react-icons/fa";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);
  const [inRegistration, setInRegistration] = useState(false);

  /* Show actions after scroll */
  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Detect registration section */
  useEffect(() => {
    const section = document.getElementById("registration");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInRegistration(entry.isIntersecting);
      },
      {
        threshold: 0.4, // section reasonably in view
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

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
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      {/* REGISTER */}
      <button
        onClick={scrollToRegister}
        aria-label="Go to registration"
        className={`
          flex items-center justify-center
          w-11 h-11 rounded-full
          bg-blue-600 text-white
          shadow-lg
          transition-all duration-300 ease-out
          hover:bg-blue-700
          hover:-translate-y-0.5
          focus:outline-none

          ${
            inRegistration
              ? "scale-150 opacity-0 pointer-events-none"
              : "scale-100 opacity-100"
          }
        `}
      >
        <FaClipboardList className="text-sm" />
      </button>

      {/* SCROLL TO TOP */}
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
