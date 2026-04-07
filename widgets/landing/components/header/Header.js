"use client";

import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { gsap } from "gsap";

import Logo from "../../../ui/Logo";


/* ================= CONFIG ================= */
const NAV_LINKS = [
  { label: "Overview", href: "#learn" },
  { label: "Resources", href: "#resources" },
  { label: "Program", href: "#program" },
  { label: "Deliverables", href: "#deliverables" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const [heroVisible, setHeroVisible] = useState(true);

  const lastScrollY = useRef(0);
  const panelRef = useRef(null);
  const backdropRef = useRef(null);

  /* ===== SCROLL BEHAVIOR ===== */
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (currentY > lastScrollY.current && currentY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ===== GSAP OPEN ANIMATION ===== */
  useEffect(() => {
    if (!menuOpen) return;

    gsap.set(backdropRef.current, { opacity: 0 });
    gsap.set(panelRef.current, { x: "100%" });

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.to(backdropRef.current, {
      opacity: 1,
      duration: 0.35,
    }).to(
      panelRef.current,
      {
        x: "0%",
        duration: 0.55, // slow, smooth
      },
      "-=0.15",
    );

    return () => tl.kill();
  }, [menuOpen]);
  useEffect(() => {
    const sections = NAV_LINKS.map((link) =>
      document.querySelector(link.href),
    ).filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !heroVisible) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [heroVisible]);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.6, // hero must be mostly visible
      },
    );

    heroObserver.observe(hero);

    return () => heroObserver.disconnect();
  }, []);
  useEffect(() => {
    if (heroVisible) {
      setActiveSection(null);
    }
  }, [heroVisible]);

  /* ===== GSAP CLOSE ===== */
  const closeMenu = () => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.in" },
      onComplete: () => setMenuOpen(false),
    });

    tl.to(panelRef.current, {
      x: "100%",
      duration: 0.45,
    }).to(
      backdropRef.current,
      {
        opacity: 0,
        duration: 0.25,
      },
      "-=0.2",
    );
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300
    ${hidden ? "-translate-y-full" : "translate-y-0"}
    ${
      scrolled
        ? "bg-[rgba(255,255,255,0.9)] backdrop-blur border-b border-[var(--color-primary-200)]"
        : "bg-transparent"
    }`}
      >
        <div
          className="max-w-7xl mx-auto px-6 h-20
 flex items-center justify-between"
        >
          {/* LEFT */}
          <a href="#hero" className="flex items-center gap-3">
            <Logo />
          </a>

          {/* CENTER – DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`
    relative
    text-[16.5px]
    font-semibold
    tracking-tight
    transition-colors

    ${
      activeSection === item.href
        ? "text-[var(--color-blue-600)]"
        : "text-[var(--color-primary-800)] hover:text-[var(--color-blue-600)]"
    }

    after:absolute
    after:left-0
    after:-bottom-1.5
    after:h-[2px]
    after:bg-[var(--color-blue-600)]
    after:transition-all

    ${
      activeSection === item.href
        ? "after:w-full"
        : "after:w-0 hover:after:w-full"
    }
  `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="#registration"
              className="hidden md:inline-flex px-4 py-2 rounded-lg
             bg-[var(--color-blue-600)] text-white
             text-sm font-semibold
             hover:bg-[var(--color-blue-700)] transition"
            >
              Registration
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden p-2
             text-[var(--color-primary-700)]
             hover:text-[var(--color-blue-600)] transition"
              aria-label="Open menu"
            >
              <FiMenu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* BACKDROP */}
          <div
            ref={backdropRef}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeMenu}
          />

          {/* PANEL */}
          <div
            ref={panelRef}
            className="absolute top-0 right-0 h-full w-full max-w-sm
             bg-[var(--color-primary-50)] shadow-2xl
             flex flex-col"
          >
            {/* TOP BAR */}
            <div
              className="h-16 px-6 flex items-center justify-between
                border-b border-[var(--color-primary-200)]"
            >
              <Logo />

              <button
                onClick={closeMenu}
                className="p-2 text-slate-700 hover:text-blue-600 transition"
                aria-label="Close menu"
              >
                <FiX size={26} />
              </button>
            </div>

            {/* NAV */}
            <nav className="flex-1 px-8 py-10">
              <ul className="space-y-7">
                {NAV_LINKS.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="block text-[17px] font-medium
             text-[var(--color-primary-800)]
             hover:text-[var(--color-blue-600)] transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA */}
            <div className="px-6 pb-8 border-t border-slate-200">
              <a
                href="#registration"
                onClick={closeMenu}
                className="block w-full text-center
             py-3 rounded-xl
             bg-[var(--color-blue-600)] text-white
             text-sm font-semibold
             hover:bg-[var(--color-blue-700)] transition"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
