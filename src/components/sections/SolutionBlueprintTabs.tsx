"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers } from "lucide-react";
import type { SiteDictionary } from "@/content/siteContent";
import { localizePath } from "@/lib/i18n";

export interface SolutionBlueprintTabsProps {
  dict: SiteDictionary;
}

export function SolutionBlueprintTabs({ dict }: SolutionBlueprintTabsProps) {
  const items = dict.solutionsSection.items;
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");
  const activeItem = items.find((i) => i.id === activeId) ?? items[0];

  if (!activeItem) return null;

  return (
    <div className="space-y-8">
      {/* Accessible Tab List */}
      <div
        role="tablist"
        aria-label={dict.solutionsSection.title}
        className="grid grid-cols-1 md:grid-cols-3 gap-3"
      >
        {items.map((item) => {
          const selected = item.id === activeItem.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActiveId(item.id)}
              className={`text-start p-5 rounded-2xl border transition-all ${
                selected
                  ? "bg-[#12382B] border-[#0FC28E] text-white shadow-glow"
                  : "bg-[#091713]/70 border-[#5EA885]/25 text-[#DCE7DE] hover:border-[#5EA885]/60"
              }`}
            >
              <p className="text-xs font-mono text-[#0FC28E] mb-1">{item.badge}</p>
              <p className="text-base font-semibold leading-snug">{item.title}</p>
            </button>
          );
        })}
      </div>

      {/* Active Blueprint Panel */}
      <div
        role="tabpanel"
        className="rounded-3xl bg-[#12382B]/55 border border-[#5EA885]/35 p-8 sm:p-12 text-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Narrative & Outcomes */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-[#091713] text-[#0FC28E] border border-[#5EA885]/30">
              {activeItem.badge}
            </span>
            <h3 className="nx-h1 text-white">{activeItem.title}</h3>
            <p className="text-lg text-[#9BC9A9] font-medium">{activeItem.subtitle}</p>
            <p className="nx-body text-[#DCE7DE]/90">{activeItem.description}</p>

            <div className="space-y-3 pt-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#0FC28E]">
                {dict.solutionsSection.outcomesLabel}
              </p>
              {activeItem.outcomes.map((outcome) => (
                <div key={outcome} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0FC28E] shrink-0 mt-1" />
                  <span className="text-sm text-[#DCE7DE]">{outcome}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={localizePath(dict.locale, `/services/${activeItem.serviceSlug}`)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0FC28E] text-[#091713] text-sm font-semibold hover:bg-[#5EA885] transition-colors"
              >
                <span>{dict.capabilitiesSection.learnMoreLabel}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
              <Link
                href={localizePath(dict.locale, "/contact")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#091713] text-white text-sm font-semibold border border-[#5EA885]/35 hover:border-[#0FC28E] transition-colors"
              >
                <span>{dict.nav.talkToTeam}</span>
              </Link>
            </div>
          </div>

          {/* Right Layered Technical Diagram */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-[#091713]/90 border border-[#5EA885]/30 space-y-5">
              <div className="flex items-center justify-between border-b border-[#5EA885]/20 pb-4">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Layers className="w-4 h-4 text-[#0FC28E]" />
                  <span>{dict.solutionsSection.layersLabel}</span>
                </div>
                <span className="text-xs font-mono text-[#9BC9A9]">NEXORA-ARCH-v1</span>
              </div>

              <div className="space-y-3">
                {activeItem.architectureLayers.map((layer, index) => (
                  <div
                    key={layer.layer}
                    className="p-4 rounded-xl bg-[#12382B]/60 border border-[#5EA885]/25 relative"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-mono uppercase text-[#0FC28E]">
                        L{index + 1} · {layer.layer}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#0FC28E]" />
                    </div>
                    <p className="text-sm text-[#DCE7DE]">{layer.detail}</p>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-[#5EA885]/20">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#9BC9A9] mb-2.5">
                  {dict.solutionsSection.platformsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeItem.platforms.map((p) => (
                    <span
                      key={p}
                      className="px-3 py-1 rounded-lg bg-[#12382B] border border-[#5EA885]/40 text-xs font-medium text-white"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
