import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, CheckCircle2, ArrowRight } from "lucide-react";
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
    title: `${dict.nav.insights} | ${dict.meta.siteName}`,
    description: dict.insightsSection.lead,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/insights`,
      languages: {
        en: "https://www.nexora-tech.com/en/insights",
        ar: "https://www.nexora-tech.com/ar/insights",
      },
    },
  };
}

export default async function InsightsPage({
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
            {dict.insightsSection.eyebrow}
          </span>
          <h1 className="nx-display-lg text-white max-w-4xl">{dict.insightsSection.title}</h1>
          <p className="nx-lead text-[#DCE7DE]/90 max-w-3xl">{dict.insightsSection.lead}</p>
        </div>
      </section>

      <section className="py-20 bg-[#F6F6F0] text-[#172521]">
        <div className="max-w-container mx-auto px-5 sm:px-10 space-y-12">
          {dict.insightsSection.articles.map((article) => (
            <article
              key={article.slug}
              id={article.slug}
              className="rounded-3xl bg-white border border-[#DCE7DE] p-8 sm:p-12 shadow-architectural space-y-8"
            >
              <div className="space-y-4 border-b border-[#DCE7DE] pb-6">
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-[#12382B] text-[#0FC28E] font-semibold">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[#3D524B]">
                    <BookOpen className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>
                <h2 className="nx-h1 text-[#172521]">{article.title}</h2>
                <p className="nx-lead text-[#3D524B]">{article.summary}</p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-6">
                  {article.sections.map((sec) => (
                    <div key={sec.heading} className="space-y-2">
                      <h3 className="text-lg font-bold text-[#172521]">{sec.heading}</h3>
                      <p className="nx-body text-[#3D524B]">{sec.body}</p>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-4 rounded-2xl bg-[#091713] text-white p-6 space-y-4">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#0FC28E]">
                    {dict.insightsSection.keyTakeawaysLabel}
                  </p>
                  <ul className="space-y-3">
                    {article.keyTakeaways.map((kt) => (
                      <li key={kt} className="flex items-start gap-2.5 text-xs text-[#DCE7DE] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#0FC28E] shrink-0 mt-0.5" />
                        <span>{kt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-[#5EA885]/20">
                    <Link
                      href={localizePath(safeLocale, "/contact")}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0FC28E] hover:text-white"
                    >
                      <span>{dict.nav.talkToTeam}</span>
                      <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
