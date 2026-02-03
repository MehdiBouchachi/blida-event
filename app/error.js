"use client";

import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

export default function Error({ error, reset }) {
  const pathname = usePathname();
  const email = "mehdibch.dev@gmail.com";

  useEffect(() => {
    console.error(error);
  }, [error]);

  const mailto = useMemo(() => {
    const url =
      typeof window !== "undefined"
        ? window.location.href
        : `https://imalex.bio${pathname || ""}`;
    const ref = typeof document !== "undefined" ? document.referrer : "";
    const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";

    const subject = `Error on IMALEX — ${pathname || "/"}`;
    const body = [
      "Hi IMALEX team,",
      "",
      "I encountered an error while browsing.",
      "",
      `URL: ${url}`,
      `Referrer: ${ref || "n/a"}`,
      `User agent: ${ua}`,
      "",
      `Error: ${String(error?.message || "(no message)")}`,
      "",
      "Additional details:",
    ].join("");

    return `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }, [pathname, error, email]);

  return (
    <main aria-labelledby="err-title" className="px-4 py-16 sm:py-24">
      <section className="mx-auto max-w-3xl text-center">
        {/* Badge */}
        <span className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-700">
          Unexpected error
        </span>

        {/* Title */}
        <h1
          id="err-title"
          className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-slate-900"
        >
          Something went wrong.
        </h1>

        {/* Description */}
        <p className="mt-3 text-slate-600">
          You can try again, or send us an email with the error details.
        </p>

        {/* Actions */}
        <div className="mt-6 flex justify-center gap-3">
          {/* Primary action */}
          <button
            onClick={() => reset()}
            className="inline-flex min-w-[9rem] items-center justify-center
                       rounded-lg bg-blue-600 px-5 py-2.5
                       text-sm font-semibold text-white
                       transition hover:bg-blue-700"
          >
            Try again
          </button>

          {/* Secondary action */}
          <a
            href={mailto}
            prefetch="false"
            aria-label={`Email ${email} about this error`}
            className="inline-flex min-w-[9rem] items-center justify-center
                       rounded-lg border border-blue-600 px-5 py-2.5
                       text-sm font-semibold text-blue-600
                       transition hover:bg-blue-50"
          >
            Email us
          </a>
        </div>

        {/* Technical details */}
        <details className="mx-auto mt-6 max-w-xl rounded-lg border border-slate-200 bg-slate-50 p-4 text-left text-sm text-slate-700 open:shadow-sm">
          <summary className="cursor-pointer select-none font-semibold">
            Technical details
          </summary>
          <pre className="mt-3 overflow-auto whitespace-pre-wrap text-xs text-slate-600">
            {String(error?.message || "")}
          </pre>
        </details>
      </section>
    </main>
  );
}
