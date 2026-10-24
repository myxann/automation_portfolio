import { useEffect } from "react";

export function useSectionReveals() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const sections = document.querySelectorAll("[data-reveal]");
    const revealAll = () =>
      sections.forEach((section) => section.classList.add("is-revealed"));
    if (preference.matches) revealAll();
    else sections.forEach((section) => observer.observe(section));
    const onPreferenceChange = () => {
      if (preference.matches) revealAll();
    };
    preference.addEventListener("change", onPreferenceChange);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
    };
  }, []);
}
