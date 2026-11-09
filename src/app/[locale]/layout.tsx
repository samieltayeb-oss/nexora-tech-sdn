import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocaleDocumentSync } from "@/components/layout/LocaleDocumentSync";
import { getDictionary } from "@/content/siteContent";
import { SUPPORTED_LOCALES, getDirection, isValidLocale, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);

  return {
    title: dict.meta.defaultTitle,
    description: dict.meta.defaultDescription,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}`,
      languages: {
        en: "https://www.nexora-tech.com/en",
        ar: "https://www.nexora-tech.com/ar",
      },
    },
    openGraph: {
      title: dict.meta.defaultTitle,
      description: dict.meta.defaultDescription,
      locale: safeLocale === "ar" ? "ar_SD" : "en_US",
      url: `https://www.nexora-tech.com/${safeLocale}`,
      siteName: dict.meta.siteName,
      images: [
        {
          url: "/brand/og-nexora.jpg",
          width: 1200,
          height: 630,
          alt: dict.meta.defaultTitle,
        },
      ],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = getDictionary(locale);
  const dir = getDirection(locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Nexora Tech",
    url: "https://www.nexora-tech.com",
    logo: "https://www.nexora-tech.com/brand/nexora-logo-horizontal-light.png",
    description: dict.meta.defaultDescription,
    slogan: dict.meta.tagline,
    founder: {
      "@type": "Person",
      name: "Rami Abdelrhman Suliman",
      jobTitle: "General Manager",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Manshiya, Block 29, Property No. 32",
      addressLocality: "Khartoum",
      addressCountry: "SD",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+249-120-4040-45",
        email: "r.suliman@nexora-tech.com",
        contactType: "customer service",
        areaServed: ["SD", "MENA", "Africa"],
        availableLanguage: ["English", "Arabic"],
      },
    ],
  };

  return (
    <div
      lang={locale}
      dir={dir}
      className={`min-h-screen flex flex-col overflow-x-hidden ${
        locale === "ar" ? "font-arabic" : "font-sans"
      }`}
    >
      <LocaleDocumentSync locale={locale} dir={dir} jsonLd={organizationJsonLd} />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:start-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-[#0FC28E] focus:text-[#091713] focus:font-semibold"
      >
        {locale === "ar" ? "تخطي إلى المحتوى الرئيسي" : "Skip to main content"}
      </a>
      <Header dict={dict} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer dict={dict} />
    </div>
  );
}
