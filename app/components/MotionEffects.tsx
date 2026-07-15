"use client";

import { useEffect } from "react";

const revealSelector = [
  ".quote-section blockquote",
  ".section-head",
  ".center-head",
  ".flow-grid article",
  ".outcome-card",
  ".personal-grid article",
  ".architecture-grid article",
  ".proof-heading",
  ".proof-stage",
  ".safeguard-grid article",
  ".roadmap-lead",
  ".roadmap-grid article",
  ".faq-intro",
  ".faq-list",
  ".final-cta .cta-copy",
  ".footer-grid > div",
].join(",");

export function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    elements.forEach((element, index) => {
      element.dataset.reveal = "";
      element.style.setProperty("--reveal-delay", `${(index % 4) * 70}ms`);
    });

    root.classList.add("motion-ready");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => root.classList.remove("motion-ready");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -7% 0px" },
    );

    elements.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
