// lib/landing-tracking/interactions.js
import { setMetric } from "./store";

export const initInteractionTracking = () => {
  // Click tracking
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-track]");
    if (!el) return;

    setMetric(el.getAttribute("data-track"), true);
  });

  // Section view tracking
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        const key = entry.target.getAttribute("data-view");
        setMetric(`viewed_${key}`, true);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.4 }
  );

  document
    .querySelectorAll("[data-view]")
    .forEach(el => observer.observe(el));
};
