import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Info } from "lucide-react";
import { SubpageEditorialHero } from "@/components/hero/SubpageEditorialHero";
import { EngineeringDisciplineTimeline } from "@/components/sections/EngineeringDisciplineTimeline";
import { getDictionary } from "@/content/siteContent";
import { isValidLocale, localizePath, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);
  return {
    title: `${dict.nav.howWeWork} | ${dict.meta.siteName}`,
    description: dict.processSection.lead,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/how-we-work`,
      languages: {
        en: "https://www.nexora-tech.com/en/how-we-work",
        ar: "https://www.nexora-tech.com/ar/how-we-work",
      },
    },
  };
}

export default async function HowWeWorkPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);
  const isAr = safeLocale === "ar";

  return (
    <div>
      {/* Full-Bleed Minimal Hero with Dedicated Sudanese Project Delivery Photography */}
      <SubpageEditorialHero
        locale={safeLocale}
        eyebrow={dict.processSection.eyebrow}
        title={dict.processSection.title}
        subtitle={dict.processSection.stepsSummary}
        lead={dict.processSection.lead}
        imagePath={
          isAr
            ? "/assets/editorial/hero-sudan-how-we-work-ar.jpg"
            : "/assets/editorial/hero-sudan-how-we-work.jpg"
        }
        imageAlt={
          isAr
            ? "فريق تنفيذ مشاريع متعدد التخصصات يخطط خارطة طريق التنفيذ"
            : "Multidisciplinary Sudanese project delivery team planning an implementation roadmap"
        }
      />

      {/* Three Delivery Stages (Profile p. 8) */}
      <section className="py-20 bg-[#F5F8F7] text-[#111817] border-b border-[#D6E2DF]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dict.processSection.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-white border border-[#D6E2DF] p-8 shadow-architectural flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0D1111] text-[#00D1B4] font-mono text-xl font-bold">
                    {step.number}
                  </span>
                  <h2 className="nx-h2 text-[#111817]">{step.title}</h2>
                  <p className="text-sm text-[#425250] leading-relaxed">{step.description}</p>
                </div>

                <div className="pt-5 border-t border-[#D6E2DF] space-y-2.5">
                  {step.deliverables.map((deliv) => (
                    <div key={deliv} className="flex items-start gap-2.5 text-xs text-[#111817]">
                      <CheckCircle2 className="w-4 h-4 text-[#00796B] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Nexora Capabilities (Profile p. 10) */}
      <section className="py-20 bg-white text-[#111817] border-b border-[#D6E2DF]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#0D1111] text-[#00D1B4]">
              {dict.whyNexora.eyebrow}
            </span>
            <h2 className="nx-h1 text-[#111817]">{dict.whyNexora.title}</h2>
            <p className="nx-lead text-[#425250]">{dict.whyNexora.lead}</p>
          </div>
          <EngineeringDisciplineTimeline dict={dict} />
        </div>
      </section>

      {/* Connected Operation Scope Illustration */}
      <section className="py-20 bg-[#0D1111] text-white nx-grid-bg-dark">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#131919] text-[#00D1B4] border border-[#00D1B4]/35">
                {dict.connectedScopeExample.eyebrow}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/10 text-[#D6E2DF]">
                {dict.connectedScopeExample.badge}
              </span>
            </div>
            <h2 className="nx-h1 text-white">{dict.connectedScopeExample.title}</h2>
            <p className="nx-lead text-[#D6E2DF]">{dict.connectedScopeExample.lead}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dict.connectedScopeExample.nodes.map((node) => (
              <div
                key={node.step}
                className="rounded-3xl bg-[#131919] border border-white/15 p-7 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#00D1B4]">
                      STEP {node.step}
                    </span>
                    <span className="text-[11px] font-mono text-[#9BB0AC]">{node.layer}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{node.title}</h3>
                  <p className="text-xs text-[#D6E2DF] leading-relaxed">{node.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link
                    href={localizePath(safeLocale, `/solutions/${node.solutionSlug}`)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D1B4] hover:text-white"
                  >
                    <span>{node.solutionLabel}</span>
                    <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-[#131919] border border-white/10 flex items-start gap-3 text-xs text-[#9BB0AC]">
            <Info className="w-4 h-4 text-[#00D1B4] shrink-0 mt-0.5" />
            <p>{dict.connectedScopeExample.disclaimer}</p>
          </div>

          <div>
            <Link
              href={localizePath(safeLocale, "/contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#00D1B4] text-[#0D1111] font-semibold text-sm hover:bg-[#5CE6D0] transition-colors"
            >
              <span>{dict.nav.talkToTeam}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
