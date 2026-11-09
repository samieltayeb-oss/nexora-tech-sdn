"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import type { Locale } from "@/lib/i18n";

export interface LanguageSwitcherProps {
  currentLocale: Locale;
  label: string;
  className?: string;
}

export function LanguageSwitcher({ currentLocale, label, className = "" }: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${currentLocale}`;
  const targetLocale: Locale = currentLocale === "en" ? "ar" : "en";

  const targetPath = pathname.startsWith(`/${currentLocale}`)
    ? pathname.replace(new RegExp(`^/${currentLocale}(/|$)`), `/${targetLocale}$1`)
    : `/${targetLocale}`;

  return (
    <Link
      href={targetPath}
      hrefLang={targetLocale}
      aria-label={`Switch language to ${targetLocale === "ar" ? "Arabic" : "English"}`}
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold border border-[#5EA885]/35 bg-[#12382B]/70 text-white hover:bg-[#12382B] hover:border-[#0FC28E] transition-colors ${className}`}
    >
      <Globe className="w-3.5 h-3.5 text-[#0FC28E]" />
      <span>{label}</span>
    </Link>
  );
}
