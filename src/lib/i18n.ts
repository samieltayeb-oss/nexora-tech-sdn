export const SUPPORTED_LOCALES = ["en", "ar"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export function isValidLocale(value: string): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale);
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "ar" ? "rtl" : "ltr";
}

export function localizePath(locale: Locale, subpath: string = ""): string {
  const clean = subpath.startsWith("/") ? subpath : `/${subpath}`;
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}
