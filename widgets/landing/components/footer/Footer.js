"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "../../../../public/logo.png";
import Logo from "../../../ui/Logo";
const NAV_LINKS = [
  { label: "Overview", href: "#learn" },
  /* { label: "Resources", href: "#resources" }, */
  { label: "Program", href: "#program" },
  { label: "Deliverables", href: "#deliverables" },
  { label: "Registration", href: "#registration" },
];

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--color-primary-200)",
        background:
          "linear-gradient(to top, var(--color-primary-100), var(--color-primary-50))",
      }}
    >
      {/* ================= MAIN ================= */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          {/* ================= LEFT / BRAND ================= */}
          <div className="max-w-sm space-y-7">
            <Logo />

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-primary-600)" }}
            >
              Academic initiative led by the EAD Commission to support the
              University 4.0 transition through sustainable distance learning,
              digital pedagogy, and institutional innovation.
            </p>
          </div>

          {/* ================= CENTER / NAVIGATION ================= */}
          <div className="min-w-[220px] space-y-8 text-left">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-primary-800)" }}
            >
              Navigation
            </h4>

            <ul className="space-y-4 text-sm">
              {NAV_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors"
                    style={{ color: "var(--color-primary-700)" }}
                  >
                    <span className="transition-colors duration-200 group-hover:text-[var(--color-blue-600)]">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= RIGHT / CONTACT ================= */}
          <div className="max-w-sm space-y-7 text-left">
            <h4
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-primary-800)" }}
            >
              Contact
            </h4>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--color-primary-600)" }}
            >
              Academic & organizational inquiries
            </p>

            <a
              href="mailto:ead_univblida1@univ-blida.dz"
              className="text-sm font-medium"
              style={{ color: "var(--color-blue-600)" }}
            >
              ead_univblida1@univ-blida.dz
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div
        className="border-t"
        style={{ borderColor: "var(--color-primary-200)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-4 text-xs">
          <span style={{ color: "var(--color-primary-500)" }}>
            © {new Date().getFullYear()} Blida 1 University — Distance Learning
          </span>
          <span style={{ color: "var(--color-primary-500)" }}>
            Faculty of Sciences & Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
