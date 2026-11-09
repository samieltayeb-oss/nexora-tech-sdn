import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
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
    title: `${dict.nav.industries} | ${dict.meta.siteName}`,
    description: dict.industriesSection.lead,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/industries`,
      languages: {
        en: "https://www.nexora-tech.com/en/industries",
        ar: "https://www.nexora-tech.com/ar/industries",
      },
    },
  };
}

export default async function IndustriesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);

  return (
    <div>
      <section className="py-16 lg:py-24 bg-[#091713] text-white nx-grid-bg-dark border-b border-[#5EA885]/20">
        <div className="max-w-container mx-auto px-5 sm:px-10 space-y-5">
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#12382B] text-[#0FC28E] border border-[#5EA885]/35">
            {dict.industriesSection.eyebrow}
          </span>
          <h1 className="nx-display-lg text-white max-w-4xl">{dict.industriesSection.title}</h1>
          <p className="nx-lead text-[#DCE7DE]/90 max-w-3xl">{dict.industriesSection.lead}</p>
        </div>
      </section>

      <section className="py-20 bg-[#F6F6F0] text-[#172521]">
        <div className="max-w-container mx-auto px-5 sm:px-10 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dict.industriesSection.items.map((ind) => (
              <article
                key={ind.id}
                className="rounded-3xl bg-white border border-[#DCE7DE] p-8 shadow-architectural flex flex-col justify-between space-y-6"
              >
                <div className="space-y-3">
                  <h2 className="nx-h2 text-[#172521]">{ind.name}</h2>
                  <p className="text-sm text-[#3D524B] leading-relaxed">{ind.summary}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4 border-t border-[#DCE7DE]">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#3D524B] flex items-center gap-1.5">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      <span>{dict.industriesSection.challengesLabel}</span>
                    </p>
                    <ul className="space-y-1.5">
                      {ind.challengesAddressed.map((ch) => (
                        <li key={ch} className="text-xs text-[#3D524B] leading-relaxed">
                          • {ch}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#0E6B50]">
                      {dict.industriesSection.systemsLabel}
                    </p>
                    <ul className="space-y-1.5">
                      {ind.nexoraSystems.map((sys) => (
                        <li key={sys} className="flex items-start gap-2 text-xs text-[#172521] font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0E6B50] shrink-0 mt-0.5" />
                          <span>{sys}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-[#091713] text-white border border-[#5EA885]/35 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h3 className="nx-h2 text-white">{dict.contactSection.title}</h3>
              <p className="text-sm text-[#DCE7DE]/85">{dict.contactSection.lead}</p>
            </div>
            <Link
              href={localizePath(safeLocale, "/contact")}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0FC28E] text-[#091713] font-semibold text-sm hover:bg-[#5EA885] transition-colors shrink-0"
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
