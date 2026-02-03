"use client";

import { useEffect, useRef } from "react";
import Modal from "./Modal";
import { FaExclamationTriangle } from "react-icons/fa";
import { gsap } from "gsap";

export default function RegistrationError({ open, onClose, message }) {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!open) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      // Container: firm entrance (slightly sharper than success)
      tl.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.95, y: 28 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4 },
      )

        // Icon: alert emphasis (no cartoon shake)
        .fromTo(
          iconRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.3 },
          "-=0.15",
        )

        // Text + button: clear sequential reveal
        .fromTo(
          itemsRef.current,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 0.28,
            stagger: 0.1,
          },
          "-=0.1",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <div ref={containerRef} className="text-center space-y-6">
        {/* Icon */}
        <FaExclamationTriangle
          ref={iconRef}
          className="mx-auto text-5xl  text-[var(--color-red-600)]"
        />

        {/* Title */}
        <h3
          ref={(el) => (itemsRef.current[0] = el)}
          className="text-lg sm:text-xl font-semibold text-[var(--color-primary-900)]"
        >
          Submission Failed
        </h3>

        {/* Message */}
        <p
          ref={(el) => (itemsRef.current[1] = el)}
          className="text-sm sm:text-base text-[var(--color-primary-600)] leading-relaxed"
        >
          {message ||
            "An unexpected error occurred while submitting the form. Please try again later."}
        </p>

        {/* Button */}
        <button
          ref={(el) => (itemsRef.current[2] = el)}
          onClick={onClose}
          className="
            w-full
            mt-4
            px-6 py-3
            rounded-lg
            bg-red-600
            text-white
            text-sm sm:text-base
            font-semibold
            transition
            hover:bg-red-700
            hover:shadow-lg
            active:scale-[0.98]
          "
        >
          Close
        </button>
      </div>
    </Modal>
  );
}
