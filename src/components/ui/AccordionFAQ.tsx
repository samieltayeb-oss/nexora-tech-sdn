"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface AccordionFAQProps {
  items: FAQItem[];
  dark?: boolean;
}

export function AccordionFAQ({ items, dark = false }: AccordionFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={item.question}
            className={`rounded-2xl border transition-colors ${
              dark
                ? "bg-[#12382B]/45 border-[#5EA885]/30 text-white"
                : "bg-white border-[#DCE7DE] text-[#172521]"
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-start font-semibold text-base"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 transition-transform ${
                    isOpen ? "rotate-180 text-[#0FC28E]" : "opacity-70"
                  }`}
                />
              </button>
            </h3>
            {isOpen && (
              <div
                className={`px-5 sm:px-6 pb-6 text-sm leading-relaxed border-t pt-4 ${
                  dark
                    ? "border-[#5EA885]/20 text-[#DCE7DE]"
                    : "border-[#DCE7DE] text-[#3D524B]"
                }`}
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
