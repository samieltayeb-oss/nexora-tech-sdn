import React from "react";
import type { Metadata } from "next";
import { getDictionary } from "@/content/siteContent";
import { isValidLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);
  return {
    title: `${dict.legal.privacyTitle} | ${dict.meta.siteName}`,
    description: dict.legal.privacyIntro,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/privacy`,
      languages: {
        en: "https://www.nexora-tech.com/en/privacy",
        ar: "https://www.nexora-tech.com/ar/privacy",
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);

  return (
    <div>
      <section className="py-16 bg-[#091713] text-white nx-grid-bg-dark border-b border-[#5EA885]/20">
        <div className="max-w-editorial mx-auto px-5 sm:px-10 space-y-3">
          <p className="text-xs font-mono text-[#0FC28E]">{dict.legal.privacyUpdated}</p>
          <h1 className="nx-display-lg text-white">{dict.legal.privacyTitle}</h1>
          <p className="nx-lead text-[#DCE7DE]/85">{dict.legal.privacyIntro}</p>
        </div>
      </section>

      <section className="py-16 bg-[#F6F6F0] text-[#172521]">
        <div className="max-w-editorial mx-auto px-5 sm:px-10 space-y-8">
          {dict.legal.privacySections.map((sec) => (
            <div
              key={sec.heading}
              className="p-7 rounded-2xl bg-white border border-[#DCE7DE] shadow-architectural space-y-2.5"
            >
              <h2 className="nx-h3 text-[#172521]">{sec.heading}</h2>
              <p className="nx-body text-[#3D524B]">{sec.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
