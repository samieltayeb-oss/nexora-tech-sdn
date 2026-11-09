"use client";

import { useEffect } from "react";

export interface LocaleDocumentSyncProps {
  locale: string;
  dir: "ltr" | "rtl";
  jsonLd?: Record<string, unknown>;
}

export function LocaleDocumentSync({
  locale,
  dir,
  jsonLd,
}: LocaleDocumentSyncProps) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;

    if (jsonLd) {
      const scriptId = "nexora-org-jsonld";
      let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!scriptEl) {
        scriptEl = document.createElement("script");
        scriptEl.id = scriptId;
        scriptEl.type = "application/ld+json";
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(jsonLd);
    }
  }, [locale, dir, jsonLd]);

  return null;
}
