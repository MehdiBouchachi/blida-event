"use client";

import { useMemo } from "react";
import { usePathname } from "next/navigation";

/**
 * IMALEX — Simple 404 (keeps header & footer)
 * - Minimal copy
 * - Two CTAs (Home + Email)
 * - Uses static Tailwind brand colors (blue / slate)
 * - No Button component dependency
 */
export default function NotFound() {
  const pathname = usePathname();
  const email = "mehdibch.dev@gmail.com";

  const mailto = useMemo(() => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : `https://vercel.bio${pathname || ""}`;
    const ref = typeof document !== "undefined" ? document.referrer : "";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    const subject = `404 on Distance learning — ${pathname || "/"}`;
    const body = [
      "Hi Blida 1 univ team,",
      "",
      "I landed on a missing page.",
      "",
      `URL: ${url}`,
      `Referrer: ${ref || "n/a"}`,
      `User agent: ${ua}`,
      "",
      "Additional details:",
    ].join("");

    return `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [pathname, email]);

  return (
    <main className="px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl text-center">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700">
          404 — Not found
        </span>

        {/* Title */}
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-slate-900">
          We couldn’t find that page
        </h1>

        {/* Description */}
        <p className="mt-3 text-base text-slate-600">
          The link may be broken or the page moved.
        </p>

        {/* Actions */}
        <div className="mt-8 flex justify-center gap-3">
          {/* Primary button */}
          <a
            href="/"
            className="inline-flex min-w-[9rem] items-center justify-center
                       rounded-lg bg-blue-600 px-5 py-2.5
                       text-sm font-semibold text-white
                       transition hover:bg-blue-700"
          >
            Back to home
          </a>

          {/* Secondary / outline button */}
          <a
            href={mailto}
            prefetch="false"
            aria-label={`Email ${email} about this 404`}
            className="inline-flex min-w-[9rem] items-center justify-center
                       rounded-lg border border-blue-600 px-5 py-2.5
                       text-sm font-semibold text-blue-600
                       transition hover:bg-blue-50"
          >
            Email us
          </a>
        </div>

        {/* Helper text */}
        <p className="mt-4 text-xs text-slate-500">
          We’ll receive the broken URL automatically in your email draft.
        </p>
      </div>
    </main>
  );
}
