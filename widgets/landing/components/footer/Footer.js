"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-24">
        {/* ================= GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          {/* ================= LEFT ================= */}
          <div className="space-y-6 max-w-sm">
            <div className="flex items-center gap-3">
              <Image
                src={logo}
                width={44}
                height={44}
                alt="Blida 1 University"
                className="rounded-full"
              />
              <span className="text-lg font-semibold text-slate-900">
                Blida 1 University
              </span>
            </div>

            <p className="text-sm leading-relaxed text-slate-600">
              An academic initiative led by the EAD Commission to support the
              transition toward sustainable distance learning, digital pedagogy,
              and institutional innovation at Blida 1 University.
            </p>
          </div>

          {/* ================= CENTER ================= */}
          <div className="space-y-6 max-w-sm">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Sections
            </h4>

            <ul className="space-y-3 text-sm">
              {[
                { label: "Workshop Objectives", href: "#objectives" },
                { label: "Strategic Vision", href: "#strategy" },
                { label: "University 4.0", href: "#university-4" },
                { label: "Schedule", href: "#schedule" },
                { label: "Registration", href: "#registration" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex text-slate-600 hover:text-blue-600 transition-colors"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="space-y-6 max-w-sm">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
              Contact
            </h4>

            <p className="text-sm text-slate-600">
              For academic or organizational inquiries:
            </p>

            <a
              href="mailto:ead_univblida1@univ-blida.dz"
              className="group inline-flex text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
            >
              <span className="relative">
                ead_univblida1@univ-blida.dz
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="mt-24 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <span>
            © {new Date().getFullYear()} Blida 1 University — Distance Learning
          </span>

          <span className="text-slate-400">
            Faculty of Sciences & Technologies
          </span>
        </div>
      </div>
    </footer>
  );
}
