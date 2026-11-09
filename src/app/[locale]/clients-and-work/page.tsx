import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SubpageEditorialHero } from "@/components/hero/SubpageEditorialHero";
import { ClientSectorShowcase } from "@/components/sections/ClientSectorShowcase";
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
    title: `${dict.nav.projects} | ${dict.meta.siteName}`,
    description: dict.clientsSection.lead,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/clients-and-work`,
      languages: {
        en: "https://www.nexora-tech.com/en/clients-and-work",
        ar: "https://www.nexora-tech.com/ar/clients-and-work",
      },
    },
  };
}

export default async function ClientsAndWorkPage({
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
      {/* Full-Bleed Minimal Hero with Dedicated Sudanese Executive Partnership Photography */}
      <SubpageEditorialHero
        locale={safeLocale}
        eyebrow={dict.clientsSection.eyebrow}
        title={dict.clientsSection.title}
        lead={dict.clientsSection.lead}
        imagePath={
          isAr
            ? "/assets/editorial/hero-sudan-clients-ar.jpg"
            : "/assets/editorial/hero-sudan-clients.jpg"
        }
        imageAlt={
          isAr
            ? "اجتماع عمل وتسليم مشروع بين قادة أعمال واستشاريين في الخرطوم"
            : "Sudanese business leaders and Nexora consultants reviewing a completed project handover in Khartoum"
        }
      />

      {/* Main Client Showcase Grid + Industries Served + Scope Blueprints */}
      <section className="py-20 bg-[#F5F8F7] text-[#111817] border-b border-[#D6E2DF]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
          <ClientSectorShowcase dict={dict} showBlueprints={true} showIndustries={true} />
        </div>
      </section>

      {/* Project Consultation CTA */}
      <section className="py-20 bg-[#0D1111] text-white border-b border-white/10">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="max-w-2xl space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#131919] text-[#00D1B4] border border-[#00D1B4]/35">
              {dict.contactSection.eyebrow}
            </span>
            <h2 className="nx-h1 text-white">
              {isAr
                ? "هل تخطط لمشروع Odoo ERP أو برمجيات مخصّصة أو بنية تحتية؟"
                : "Planning an Odoo ERP, Custom Software, or Infrastructure Project?"}
            </h2>
            <p className="nx-body text-[#D6E2DF]">
              {dict.contactSection.lead}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4 shrink-0">
            <Link
              href={localizePath(dict.locale, "/contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00D1B4] hover:bg-[#5CE6D0] text-[#0D1111] font-bold text-sm transition-colors"
            >
              <span>{dict.nav.talkToTeam}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
            <Link
              href={localizePath(dict.locale, "/solutions")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#131919] hover:bg-white/10 text-white border border-white/15 font-semibold text-sm transition-colors"
            >
              <span>{dict.nav.exploreSolutions}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
