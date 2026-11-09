import React from "react";
import { ShieldCheck, Award, FileCheck2, MapPin } from "lucide-react";
import type { SiteDictionary } from "@/content/siteContent";

export interface EngineeringDisciplineTimelineProps {
  dict: SiteDictionary;
}

const PILLAR_ICONS = [ShieldCheck, Award, FileCheck2, MapPin];

export function EngineeringDisciplineTimeline({ dict }: EngineeringDisciplineTimelineProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {dict.whyNexora.pillars.map((pillar, idx) => {
        const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
        return (
          <div
            key={pillar.number}
            className="rounded-3xl bg-[#091713] border border-[#5EA885]/30 p-7 flex flex-col justify-between text-white relative overflow-hidden group hover:border-[#0FC28E] transition-colors"
          >
            {/* Top Ribbon Accent honoring Page 10 of Company Profile */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0FC28E] to-[#5EA885]" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-bold text-[#0FC28E]">{pillar.number}</span>
                <div className="w-10 h-10 rounded-xl bg-[#12382B] flex items-center justify-center text-[#0FC28E]">
                  <Icon className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-white">{pillar.title}</h3>
              <p className="text-sm text-[#DCE7DE]/85 leading-relaxed">{pillar.description}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#5EA885]/20">
              <p className="text-xs font-mono text-[#9BC9A9]">{pillar.proofPoint}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
