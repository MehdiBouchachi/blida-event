"use client";

import { useEffect } from "react";

export default function Modal({ open, onClose, children }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="
        fixed inset-0 z-50
        flex items-end sm:items-center justify-center
        bg-black/40
        px-4
      "
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay click */}
      <div
        className="absolute inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal panel */}
      <div
        className="
          relative
          w-full
          max-w-md
          bg-white
          rounded-t-2xl sm:rounded-2xl
          shadow-xl
          p-6 sm:p-8
          animate-in fade-in slide-in-from-bottom sm:slide-in-from-top
        "
      >
        {children}
      </div>
    </div>
  );
}
