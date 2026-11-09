import React from "react";
import { Award, CheckCircle2 } from "lucide-react";

export interface OdooPartnerBadgeProps {
  locale?: "en" | "ar";
  variant?: "header" | "footer";
  className?: string;
}

/**
 * Clean, high-contrast vector Odoo Partner & Odoo Certified badge
 * for the global Header and Footer.
 */
export function OdooPartnerBadge({
  locale = "en",
  variant = "header",
  className = "",
}: OdooPartnerBadgeProps) {
  const isAr = locale === "ar";

  if (variant === "header") {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#141C1B] border border-white/15 shadow-2xs select-none ${className}`}
        title={
          isAr
            ? "شريك Odoo ومعتمد في التنفيذ — Odoo Partner & Certified"
            : "Odoo Partner & Certified Implementation Specialist"
        }
      >
        {/* Iconic rounded 'odoo' wordmark vector */}
        <span
          dir="ltr"
          className="inline-flex items-center font-sans font-extrabold tracking-tight text-sm leading-none"
          aria-label="Odoo"
        >
          <span className="text-[#A36996]">o</span>
          <span className="text-white">doo</span>
        </span>

        <span className="h-3.5 w-px bg-white/15" aria-hidden="true" />

        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-semibold text-[#00D1B4] leading-none">
          <CheckCircle2 className="w-3 h-3 text-[#00D1B4] shrink-0" />
          <span>{isAr ? "شريك معتمد" : "Certified Partner"}</span>
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {/* Badge 1: Odoo Official Partner */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#141C1B] border border-white/15">
        <span
          dir="ltr"
          className="inline-flex items-center font-sans font-extrabold tracking-tight text-base leading-none"
        >
          <span className="text-[#A36996]">o</span>
          <span className="text-white">doo</span>
        </span>
        <span className="h-4 w-px bg-white/15" aria-hidden="true" />
        <div className="flex flex-col">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-white leading-tight">
            {isAr ? "شريك أعمال" : "Partner"}
          </span>
          <span className="text-[10px] text-[#9BB0AC] leading-tight">
            {isAr ? "تنفيذ وتكامل الأنظمة" : "ERP Implementation"}
          </span>
        </div>
      </div>

      {/* Badge 2: Odoo Certified */}
      <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#141C1B] border border-[#00D1B4]/30">
        <div className="w-6 h-6 rounded-lg bg-[#00D1B4]/15 border border-[#00D1B4]/40 flex items-center justify-center shrink-0">
          <Award className="w-3.5 h-3.5 text-[#00D1B4]" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span
              dir="ltr"
              className="font-sans font-extrabold tracking-tight text-xs leading-none"
            >
              <span className="text-[#A36996]">o</span>
              <span className="text-white">doo</span>
            </span>
            <span className="text-[11px] font-mono font-bold text-[#00D1B4] leading-none">
              {isAr ? "معتمد" : "Certified"}
            </span>
          </div>
          <span className="text-[10px] text-[#9BB0AC] leading-tight mt-0.5">
            {isAr ? "استشاريون ومطورون معتمدون" : "Certified Functional & Tech"}
          </span>
        </div>
      </div>
    </div>
  );
}
