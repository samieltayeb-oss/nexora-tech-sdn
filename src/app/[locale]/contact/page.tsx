import React from "react";
import type { Metadata } from "next";
import { SubpageEditorialHero } from "@/components/hero/SubpageEditorialHero";
import { ContactLeadForm } from "@/components/forms/ContactLeadForm";
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
    title: `${dict.nav.contact} | ${dict.meta.siteName}`,
    description: dict.contactSection.lead,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/contact`,
      languages: {
        en: "https://www.nexora-tech.com/en/contact",
        ar: "https://www.nexora-tech.com/ar/contact",
      },
    },
  };
}

export default async function ContactPage({
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
      {/* Full-Bleed Minimal Hero with Dedicated Sudanese Office Consultation Photography */}
      <SubpageEditorialHero
        locale={safeLocale}
        eyebrow={dict.contactSection.eyebrow}
        title={dict.contactSection.title}
        lead={dict.contactSection.lead}
        imagePath={
          isAr
            ? "/assets/editorial/hero-sudan-contact-ar.jpg"
            : "/assets/editorial/hero-sudan-contact.jpg"
        }
        imageAlt={
          isAr
            ? "مكتب استشارات تقنية واستقبال عملاء في الخرطوم"
            : "Contemporary technology consultation office and reception in Khartoum, Sudan"
        }
      />

      <section className="py-20 bg-[#F5F8F7] text-[#111817]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
          <ContactLeadForm dict={dict} />
        </div>
      </section>
    </div>
  );
}
