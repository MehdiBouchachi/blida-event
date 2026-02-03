"use client";

import { useEffect, useRef } from "react";
import { FaCertificate } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MovingNoteSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    // Accessibility
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const items = track.children;
    const totalWidth = track.scrollWidth / 2;

    // 🔹 Seamless marquee using modifiers
    const marquee = gsap.to(track, {
      x: `-=${totalWidth}`,
      duration: 30,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => `${parseFloat(x) % totalWidth}px`,
      },
      paused: true,
    });

    // 🔹 Reveal + lifecycle control
    ScrollTrigger.create({
      trigger: section,
      start: "top 85%",
      end: "bottom 15%",
      onEnter: () => marquee.play(),
      onEnterBack: () => marquee.play(),
      onLeave: () => marquee.pause(),
      onLeaveBack: () => marquee.pause(),
    });

    // 🔹 Pause on hover (reading intent)
    section.addEventListener("mouseenter", () => marquee.pause());
    section.addEventListener("mouseleave", () => marquee.play());

    return () => {
      marquee.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-label="Important institutional notice"
      className="
        relative
        overflow-hidden
        bg-gradient-to-r
        from-[var(--color-primary-100)]
        via-[var(--color-primary-50)]
        to-[var(--color-primary-100)]
        border-y border-[var(--color-primary-300)]
      "
    >
      {/* SUBTLE SIGNAL GLOW */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,
          color-mix(in_srgb,var(--color-blue-400)_10%,transparent),
          transparent_70%)]
        "
      />

      <div className="relative h-16 flex items-center">
        <div
          ref={trackRef}
          className="flex items-center gap-20 whitespace-nowrap will-change-transform"
        >
          <Notice />
          <Notice />
        </div>
      </div>
    </section>
  );
}

/* ================= NOTICE ================= */

function Notice() {
  return (
    <div
      className="
        flex items-center gap-4
        text-sm sm:text-base
        text-[var(--color-primary-800)]
      "
    >
      <span
        className="
          inline-flex items-center justify-center
          w-9 h-9
          rounded-full
          bg-[var(--color-blue-600)]
          text-white
          shadow-sm
          flex-shrink-0
        "
      >
        <FaCertificate />
      </span>

      <span className="leading-relaxed">
        <strong>Certificate of attendance:</strong>{" "}
        a named certificate will be issued to all registered participants upon
        completion of the workshop.
      </span>
    </div>
  );
}
