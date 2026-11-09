import type { MetadataRoute } from "next";

const BASE_URL = "https://www.nexora-tech.com";

const STATIC_PATHS = [
  "",
  "/solutions",
  "/solutions/enterprise-business",
  "/solutions/pos-retail",
  "/solutions/digital-transformation-ai",
  "/solutions/infrastructure-low-current",
  "/about",
  "/how-we-work",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const route of STATIC_PATHS) {
    for (const locale of ["en", "ar"] as const) {
      entries.push({
        url: `${BASE_URL}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route.startsWith("/solutions") ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${BASE_URL}/en${route}`,
            ar: `${BASE_URL}/ar${route}`,
          },
        },
      });
    }
  }

  return entries;
}
