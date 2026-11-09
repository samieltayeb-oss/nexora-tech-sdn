import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SubpageEditorialHero } from "@/components/hero/SubpageEditorialHero";
import { ServiceArchitectureGrid } from "@/components/sections/ServiceArchitectureGrid";
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
    title: `${dict.nav.solutions} | ${dict.meta.siteName}`,
    description: dict.capabilitiesSection.lead,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/solutions`,
      languages: {
        en: "https://www.nexora-tech.com/en/solutions",
        ar: "https://www.nexora-tech.com/ar/solutions",
      },
    },
  };
}

export default async function SolutionsPage({
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
      {/* Full-Bleed Minimal Solutions Hero with Authentic Sudanese Operations Photography */}
      <SubpageEditorialHero
        locale={safeLocale}
        eyebrow={dict.capabilitiesSection.eyebrow}
        title={dict.capabilitiesSection.title}
        lead={dict.capabilitiesSection.lead}
        imagePath={
          isAr
            ? "/assets/editorial/hero-sudan-solutions-ar.jpg"
            : "/assets/editorial/hero-sudan-solutions-en.jpg"
        }
        imageAlt={
          isAr
            ? "فريق عمليات وإدارة أعمال في الخرطوم يراجع نظام Odoo ERP وتدفق الطلبات"
            : "Sudanese operations and business leaders in Khartoum reviewing Odoo ERP and supply-chain workflows"
        }
        actions={[
          {
            label: dict.nav.talkToTeam,
            href: localizePath(dict.locale, "/contact"),
            variant: "primary",
          },
        ]}
      />

      {/* Four Solution Families with Editorial Photography */}
      <section className="py-20 bg-[#F5F8F7] text-[#111817] border-b border-[#D6E2DF]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
          <ServiceArchitectureGrid dict={dict} variant="detailed" />
        </div>
      </section>

      {/* Three-Stage Delivery Sequence */}
      <section className="py-20 bg-[#0D1111] text-white nx-grid-bg-dark">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#131919] text-[#00D1B4] border border-[#00D1B4]/35">
              {dict.processSection.eyebrow}
            </span>
            <h2 className="nx-h1 text-white">{dict.processSection.title}</h2>
            <p className="nx-lead text-[#D6E2DF]">{dict.processSection.lead}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dict.processSection.steps.map((step) => (
              <div
                key={step.number}
                className="rounded-3xl bg-[#131919] border border-white/15 p-8 space-y-5"
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#00D1B4] text-[#0D1111] font-mono text-xl font-bold">
                  {step.number}
                </span>
                <h3 className="nx-h2 text-white">{step.title}</h3>
                <p className="text-sm text-[#D6E2DF] leading-relaxed">{step.description}</p>
                <div className="pt-4 border-t border-white/10 space-y-2">
                  {step.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-2 text-xs text-[#9BB0AC]">
                      <CheckCircle2 className="w-4 h-4 text-[#00D1B4] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <Link
              href={localizePath(dict.locale, "/contact")}
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
