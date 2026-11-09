import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { NexoraCinematicHero } from "@/components/hero/NexoraCinematicHero";
import { OdooAndCustomSoftwareSection } from "@/components/sections/OdooAndCustomSoftwareSection";
import { OdooDashboardShowcase } from "@/components/sections/OdooDashboardShowcase";
import { ServiceArchitectureGrid } from "@/components/sections/ServiceArchitectureGrid";
import { ClientSectorShowcase } from "@/components/sections/ClientSectorShowcase";
import { EngineeringDisciplineTimeline } from "@/components/sections/EngineeringDisciplineTimeline";
import { ContactLeadForm } from "@/components/forms/ContactLeadForm";
import { getDictionary } from "@/content/siteContent";
import { isValidLocale, localizePath, type Locale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);

  return (
    <div>
      {/* SECTION 1 — INTERACTIVE PHOTOGRAPHIC HERO (OPERATIONS DESK + WORKFLOW EXPLORER) */}
      <NexoraCinematicHero dict={dict} />

      {/* SECTION 2 — ODOO ERP AND CUSTOM SOFTWARE (DEEP EDITORIAL STORIES) */}
      <OdooAndCustomSoftwareSection dict={dict} />

      {/* SECTION 2B — INTERACTIVE ODOO ERP LIVE OPERATIONS DASHBOARD PREVIEW */}
      <OdooDashboardShowcase locale={safeLocale} />

      {/* SECTION 3 — FOUR SOLUTIONS (QUIETER, COMPACT FOUR-FAMILY INDEX) */}
      <section
        id="solutions"
        className="py-20 lg:py-24 bg-[#F5F8F7] text-[#111817] border-b border-[#D6E2DF]"
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#0D1111] text-[#00D1B4]">
                {dict.capabilitiesSection.eyebrow}
              </span>
              <h2 className="nx-h1 text-[#111817]">{dict.capabilitiesSection.title}</h2>
              <p className="nx-lead text-[#425250]">{dict.capabilitiesSection.lead}</p>
            </div>
            <Link
              href={localizePath(dict.locale, "/solutions")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D1111] text-white text-sm font-semibold hover:bg-[#131919] transition-colors shrink-0"
            >
              <span>{dict.nav.exploreSolutions}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <ServiceArchitectureGrid dict={dict} variant="compact-index" />
        </div>
      </section>

      {/* SECTION 4 — SELECTED CLIENTS & INDUSTRIES SERVED */}
      <section
        id="selected-clients"
        className="py-20 lg:py-28 bg-white text-[#111817] nx-grid-bg-light border-b border-[#D6E2DF]"
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#0D1111] text-[#00D1B4]">
                {dict.clientsSection.eyebrow}
              </span>
              <h2 className="nx-h1 text-[#111817]">{dict.clientsSection.title}</h2>
              <p className="nx-lead text-[#425250]">{dict.clientsSection.lead}</p>
            </div>
            <Link
              href={localizePath(dict.locale, "/clients-and-work")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D1111] text-white text-sm font-semibold hover:bg-[#131919] transition-colors shrink-0"
            >
              <span>{dict.nav.projects}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <ClientSectorShowcase dict={dict} showBlueprints={false} showIndustries={true} />
        </div>
      </section>

      {/* SECTION 5 — HOW WE WORK (ASSESS & PLAN -> DESIGN & DELIVER -> TEST, HANDOVER & SUPPORT) */}
      <section
        id="process"
        className="py-20 lg:py-28 bg-[#0D1111] text-white nx-grid-bg-dark border-b border-white/10"
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-3">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#131919] text-[#00D1B4] border border-[#00D1B4]/35">
                {dict.processSection.eyebrow}
              </span>
              <h2 className="nx-h1 text-white">{dict.processSection.title}</h2>
              <p className="text-sm font-mono text-[#00D1B4]">
                {dict.processSection.stepsSummary}
              </p>
              <p className="nx-lead text-[#D6E2DF]">{dict.processSection.lead}</p>
            </div>
            <Link
              href={localizePath(dict.locale, "/how-we-work")}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D1B4] hover:text-white shrink-0"
            >
              <span>{dict.nav.howWeWork}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dict.processSection.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-[#131919] border border-white/15 p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#00D1B4] text-[#0D1111] font-mono text-xl font-bold">
                    {step.number}
                  </span>
                  <h3 className="nx-h2 text-white">{step.title}</h3>
                  <p className="text-sm text-[#D6E2DF] leading-relaxed">{step.description}</p>
                </div>

                <div className="pt-5 border-t border-white/10 space-y-2">
                  {step.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-start gap-2 text-xs text-[#9BB0AC]">
                      <CheckCircle2 className="w-4 h-4 text-[#00D1B4] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Why Nexora Capabilities Strip */}
          <div className="pt-8 border-t border-white/10 space-y-8">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00D1B4]">
                {dict.whyNexora.eyebrow}
              </span>
              <h3 className="nx-h2 text-white">{dict.whyNexora.title}</h3>
              <p className="text-sm text-[#D6E2DF]">{dict.whyNexora.lead}</p>
            </div>
            <EngineeringDisciplineTimeline dict={dict} />
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROJECT INQUIRY */}
      <section
        id="contact-cta"
        className="py-20 lg:py-28 bg-[#F5F8F7] text-[#111817]"
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#0D1111] text-[#00D1B4]">
              {dict.contactSection.eyebrow}
            </span>
            <h2 className="nx-h1 text-[#111817]">{dict.contactSection.title}</h2>
            <p className="nx-lead text-[#425250]">{dict.contactSection.lead}</p>
          </div>

          <ContactLeadForm dict={dict} />
        </div>
      </section>
    </div>
  );
}
