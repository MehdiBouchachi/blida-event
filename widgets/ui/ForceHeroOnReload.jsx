"use client";
import { useEffect } from "react";

export default function ForceHeroOnReload({ heroSelector = "#hero" }) {
  // Stop the browser from restoring scroll on reload/back
  useEffect(() => {
    if ("scrollRestoration" in history) {
      const prev = history.scrollRestoration;
      history.scrollRestoration = "manual";
      return () => (history.scrollRestoration = prev);
    }
  }, []);

  // If this page load is a reload, jump to #hero and fix the hash
  useEffect(() => {
    const nav = performance.getEntriesByType?.("navigation")?.[0];
    const isReload =
      nav?.type === "reload" ||
      (performance.navigation && performance.navigation.type === 1);

    if (!isReload) return;

    const hero = document.querySelector(heroSelector);
    if (!hero) return;

    // Temporarily disable smooth-scrolling so it’s instant
    const html = document.documentElement;
    const prev = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    // Run after any default hash jump
    setTimeout(() => {
      hero.scrollIntoView({ block: "start", behavior: "auto" });

      // Normalize the URL hash without adding a history entry
      const url = new URL(window.location.href);
      if (url.hash !== "#hero") {
        url.hash = "hero";
        history.replaceState(null, "", url);
      }
      html.style.scrollBehavior = prev || "";
    }, 0);
  }, [heroSelector]);

  return null;
}
