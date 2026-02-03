"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * SectionReveal
 *  - Wrap any section with this.
 *  - Inside, add data-animate to elements you want to reveal.
 *
 * Props:
 *  - once: play only once (default true)
 *  - y: initial translateY in px (default 24)
 *  - duration: seconds per item (default 0.7)
 *  - stagger: seconds between items (default 0.06)
 *  - rootMargin: ScrollTrigger start offset (default "top 85%")
 */
export default function SectionReveal({
  children,
  className = "",
  once = true,
  y = 24,
  duration = 0.7,
  stagger = 0.6,
  rootMargin = "top 85%",
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    // Respect reduced motion
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const el = ref.current;
    if (!el) return;

    // Only animate the marked items
    const items = el.querySelectorAll("[data-animate]");
    if (!items.length) return;

    // Set initial state
    gsap.set(items, { autoAlpha: 0, y });

    // Timeline with ScrollTrigger
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: rootMargin, // when top of section hits 85% of viewport
        end: "bottom 20%",
        once,
        toggleActions: once ? "play none none none" : "play none none reverse",
        // markers: true, // uncomment to debug
      },
      defaults: { ease: "power2.out", duration },
    });

    tl.to(items, { autoAlpha: 1, y: 0, stagger });

    // Cleanup (gsap.context not required here because we scope to ref)
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [once, y, duration, stagger, rootMargin]);

  return (
    <div ref={ref} className={className} data-reveal>
      {children}
    </div>
  );
}
