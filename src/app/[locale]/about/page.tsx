import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, Target, Quote, Users, Wrench } from "lucide-react";
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
    title: `${dict.nav.about} | ${dict.meta.siteName}`,
    description: dict.intro.lead,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/about`,
      languages: {
        en: "https://www.nexora-tech.com/en/about",
        ar: "https://www.nexora-tech.com/ar/about",
      },
    },
  };
}

export default async function AboutPage({
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
      {/* Full-Bleed Minimal Hero — Retains Profile Positioning Line "Engineering Connected, Intelligent Systems" */}
      <SubpageEditorialHero
        locale={safeLocale}
        eyebrow={dict.intro.eyebrow}
        subtitle={dict.meta.tagline}
        title={dict.intro.title}
        lead={dict.intro.lead}
        imagePath={
          isAr
            ? "/assets/editorial/hero-sudan-about-ar.jpg"
            : "/assets/editorial/hero-sudan-about-en.jpg"
        }
        imageAlt={dict.hero.imageAlt}
      />

      {/* Story + General Manager Statement */}
      <section className="py-20 bg-[#F5F8F7] text-[#111817] border-b border-[#D6E2DF]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="nx-h1 text-[#111817]">
                {isAr
                  ? "تكامل برمجيات الأعمال والهندسة التقنية"
                  : "Integrated Business Software & Technology Engineering"}
              </h2>
              <p className="nx-body text-[#425250]">{dict.intro.body1}</p>
              <p className="nx-body text-[#425250]">{dict.intro.body2}</p>

              {/* Experience & Capabilities from Page 6 of Company Profile */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="p-6 rounded-2xl bg-white border border-[#D6E2DF] shadow-architectural space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D1111] text-[#00D1B4] flex items-center justify-center">
                    <Users className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111817]">
                    {isAr ? "فريق تنفيذ متعدد التخصصات" : "Multidisciplinary Delivery Team"}
                  </h3>
                  <p className="text-sm text-[#425250] leading-relaxed">
                    {isAr
                      ? "تُدعم قدراتنا بمطورين، واستشاريين وظيفيين، واستشاريين تقنيين يعملون معاً طوال دورة حياة المشروع لتقديم حلول متوافقة مع المتطلبات التشغيلية لكل عميل."
                      : "Supported by developers, functional consultants, and technical consultants who work together throughout the project lifecycle to deliver solutions aligned with each client’s operational requirements."}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-[#D6E2DF] shadow-architectural space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D1111] text-[#00D1B4] flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#111817]">
                    {isAr ? "الخبرة التقنية والهندسية" : "Technology & Engineering Scope"}
                  </h3>
                  <p className="text-sm text-[#425250] leading-relaxed">
                    {isAr
                      ? "توفر نكسورا التوريد والتركيب والاختبار والتشغيل التجريبي والصيانة لأنظمة التيار الخفيف للجهات الحكومية والمؤسسات والقطاع الخاص."
                      : "Nexora provides the supply, installation, testing, commissioning, and maintenance of low-current systems for government, enterprise, and private-sector clients."}
                  </p>
                </div>
              </div>
            </div>

            {/* General Manager Statement & Portrait Card (Page 2) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-[#0D1111] text-white border border-white/15 p-8 sm:p-10 shadow-architectural-dark space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00D1B4]">
                    {dict.intro.gmSectionTitle}
                  </span>
                  <Quote className="w-8 h-8 text-[#00D1B4]/30" />
                </div>

                <div className="flex items-center gap-4 pb-2">
                  <div className="w-20 h-24 rounded-2xl overflow-hidden border border-[#00D1B4]/40 bg-[#131919] shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/assets/profile/rami-suliman-gm.png"
                      alt={dict.intro.gmName}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-white">{dict.intro.gmName}</p>
                    <p className="text-xs text-[#00D1B4] font-medium mt-0.5">{dict.intro.gmRole}</p>
                  </div>
                </div>

                <blockquote className="text-sm sm:text-base text-[#D6E2DF] leading-relaxed italic border-s-2 border-[#00D1B4] ps-4">
                  “{dict.intro.gmQuote}”
                </blockquote>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D6E2DF] shadow-architectural space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1111] text-[#00D1B4] text-xs font-semibold">
                <Compass className="w-4 h-4" />
                <span>{dict.intro.visionTitle}</span>
              </div>
              <h3 className="nx-h2 text-[#111817]">{dict.intro.visionTitle}</h3>
              <p className="nx-body text-[#425250]">{dict.intro.visionBody}</p>
            </div>

            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#D6E2DF] shadow-architectural space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1111] text-[#00D1B4] text-xs font-semibold">
                <Target className="w-4 h-4" />
                <span>{dict.intro.missionTitle}</span>
              </div>
              <h3 className="nx-h2 text-[#111817]">{dict.intro.missionTitle}</h3>
              <p className="nx-body text-[#425250]">{dict.intro.missionBody}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Capabilities & Approval Gate Pillars */}
      <section className="py-20 bg-[#0D1111] text-white">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
          <div className="max-w-3xl space-y-3">
            <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#131919] text-[#00D1B4] border border-[#00D1B4]/35">
              {dict.whyNexora.eyebrow}
            </span>
            <h2 className="nx-h1 text-white">{dict.whyNexora.title}</h2>
            <p className="nx-lead text-[#D6E2DF]">{dict.whyNexora.lead}</p>
          </div>
          <EngineeringDisciplineTimeline dict={dict} />

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
