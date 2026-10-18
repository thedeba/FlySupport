"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Faq } from "@/lib/faq-type";

export default function FAQAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={faq.question}>
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-navy-900 transition-colors hover:bg-navy-50 sm:px-6"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-navy-500 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="px-5 pb-5 sm:px-6"
            >
              <p className="text-sm leading-relaxed text-navy-600">
                {faq.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
