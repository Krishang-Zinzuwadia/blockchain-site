"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqAccordionProps = {
  items: readonly (readonly [string, string])[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <div className="faq-list" data-reveal>
      {items.map(([question, answer], index) => {
        const isActive = activeIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <article className={`faq-item${isActive ? " is-active" : ""}`} key={question}>
            <button
              className="faq-trigger"
              type="button"
              aria-expanded={isActive}
              aria-controls={answerId}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <span className="faq-number">0{index + 1}</span>
              <span>{question}</span>
              <ChevronDown aria-hidden="true" />
            </button>
            <div className="faq-answer" id={answerId} aria-hidden={!isActive}>
              <div><p>{answer}</p></div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
