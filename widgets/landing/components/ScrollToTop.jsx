"use client";

import { useEffect, useState } from "react";
import { FaArrowUp, FaClipboardList } from "react-icons/fa";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToRegister = () => {
    const el = document.getElementById("registration");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
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
      {/* Register */}
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

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="
          flex items-center justify-center
          w-11 h-11 rounded-full
         border border-slate-300
          bg-white text-slate-600
          shadow-sm
          transition
          hover:bg-slate-50
          hover:text-slate-800
          hover:-translate-y-0.5
          focus:outline-none
        "
      >
        <FaArrowUp className="text-sm" />
      </button>
    </div>
  );
}
