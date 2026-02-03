"use client";

import { useEffect, useRef } from "react";
import Modal from "./Modal";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";

export default function RegistrationSuccess({ open, onClose }) {
  const containerRef = useRef(null);
  const iconRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    if (!open) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.94, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 0.45 },
      )
        .fromTo(
          iconRef.current,
          { scale: 0.85, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35 },
          "-=0.2",
        )
        .fromTo(
          itemsRef.current,
          { opacity: 0, y: 12 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.1,
          },
          "-=0.1",
        );
    }, containerRef);

    return () => ctx.revert();
  }, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <div
        ref={containerRef}
        className="
          text-center
          space-y-6
        "
      >
        {/* Icon */}
        <FaCheckCircle
          ref={iconRef}
          className="mx-auto text-5xl text-green-600"
        />

        {/* Title */}
        <h3
          ref={(el) => (itemsRef.current[0] = el)}
          className="text-lg sm:text-xl font-semibold text-[var(--color-primary-900)]"
        >
          Registration Successful
        </h3>

        {/* Message */}
        <p
          ref={(el) => (itemsRef.current[1] = el)}
          className="text-sm sm:text-base text-[var(--color-primary-600)] leading-relaxed"
        >
          Thank you for your participation. Your responses have been
          successfully recorded and will contribute to institutional analysis
          and academic planning.
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
            bg-green-600
            text-white
            text-sm sm:text-base
            font-semibold
            transition
            hover:bg-green-700
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
