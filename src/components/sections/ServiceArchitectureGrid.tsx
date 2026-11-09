import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Layers, Cpu, Network, ShoppingBag } from "lucide-react";
import type { SiteDictionary } from "@/content/siteContent";
import { localizePath } from "@/lib/i18n";

export interface ServiceArchitectureGridProps {
  dict: SiteDictionary;
  variant?: "compact-index" | "detailed";
}

const SERVICE_ICONS = [Layers, ShoppingBag, Cpu, Network];

export function ServiceArchitectureGrid({
  dict,
  variant = "detailed",
}: ServiceArchitectureGridProps) {
  if (variant === "compact-index") {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dict.services.map((service, idx) => {
          const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
          return (
            <article
              key={service.slug}
              className="rounded-2xl bg-white border border-[#D6E2DF] p-6 flex flex-col justify-between shadow-architectural hover:border-[#00796B] transition-colors group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#F5F8F7] border border-[#D6E2DF] text-[11px] font-mono font-semibold text-[#00796B]">
                    {service.code}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-[#0D1111] text-[#00D1B4] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="rounded-xl overflow-hidden border border-[#D6E2DF] bg-[#0D1111] h-36">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={service.imagePath}
                    alt={service.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-[#111817] leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#425250] leading-relaxed line-clamp-3">
                    {service.summary}
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#D6E2DF] space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.platforms.slice(0, 2).map((platform) => (
                    <span
                      key={platform}
                      className="px-2 py-0.5 rounded bg-[#F5F8F7] text-[11px] font-medium text-[#425250]"
                    >
                      {platform}
                    </span>
                  ))}
                </div>

                <Link
                  href={localizePath(dict.locale, `/solutions/${service.slug}`)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00796B] group-hover:text-[#0D1111] transition-colors"
                >
                  <span>{dict.capabilitiesSection.learnMoreLabel}</span>
                  <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {dict.services.map((service, idx) => {
        const Icon = SERVICE_ICONS[idx % SERVICE_ICONS.length];
        const isEven = idx % 2 === 0;

        return (
          <article
            key={service.slug}
            className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
              isEven
                ? "bg-white border-[#D6E2DF] text-[#111817] shadow-architectural"
                : "bg-[#0D1111] border-white/15 text-white shadow-architectural-dark"
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Column: Editorial Visual + Identity & Platforms */}
              <div
                className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-e ${
                  isEven ? "border-[#D6E2DF] bg-[#F5F8F7]/70" : "border-white/10 bg-[#131919]"
                }`}
              >
                <div className="space-y-5">
                  <div className="rounded-2xl overflow-hidden border border-black/10 bg-[#0D1111]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.imagePath}
                      alt={service.imageAlt}
                      width={1200}
                      height={896}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto aspect-[4/3] object-cover"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                        isEven
                          ? "bg-[#0D1111] text-[#00D1B4]"
                          : "bg-[#0D1111] text-[#00D1B4] border border-[#00D1B4]/35"
                      }`}
                    >
                      {service.code} · {service.eyebrow}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isEven ? "bg-[#0D1111] text-[#00D1B4]" : "bg-[#00D1B4]/15 text-[#00D1B4]"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="nx-h2">{service.title}</h3>
                  <p className={isEven ? "text-[#425250] nx-body" : "text-[#D6E2DF] nx-body"}>
                    {service.summary}
                  </p>
                </div>

                <div className="pt-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {service.platforms.map((platform) => (
                      <span
                        key={platform}
                        className={`px-3 py-1 rounded-lg text-xs font-medium ${
                          isEven
                            ? "bg-white border border-[#D6E2DF] text-[#111817]"
                            : "bg-[#0D1111] border border-white/15 text-[#9BB0AC]"
                        }`}
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href={localizePath(dict.locale, `/solutions/${service.slug}`)}
                      className={`inline-flex items-center gap-2 text-sm font-semibold group ${
                        isEven
                          ? "text-[#00796B] hover:text-[#0D1111]"
                          : "text-[#00D1B4] hover:text-white"
                      }`}
                    >
                      <span>{dict.capabilitiesSection.learnMoreLabel}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
                    </Link>

                    <Link
                      href={`${localizePath(dict.locale, "/contact")}?solution=${service.slug}`}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-lg border transition-colors ${
                        isEven
                          ? "border-[#00796B]/30 text-[#00796B] hover:bg-[#00796B] hover:text-white"
                          : "border-[#00D1B4]/35 text-[#00D1B4] hover:bg-[#00D1B4] hover:text-[#0D1111]"
                      }`}
                    >
                      <span>{service.ctaLabel}</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column: Problem -> Supported Scope -> Practical Outcome + Sub-Entries (Nexora POS / SambaPOS) */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div
                    className={`p-5 rounded-2xl border ${
                      isEven
                        ? "bg-[#F5F8F7] border-[#D6E2DF]"
                        : "bg-[#131919] border-white/10"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                        isEven ? "text-[#425250]" : "text-[#9BB0AC]"
                      }`}
                    >
                      01 · {dict.capabilitiesSection.problemLabel}
                    </p>
                    <p className={`text-sm leading-relaxed ${isEven ? "text-[#111817]" : "text-[#D6E2DF]"}`}>
                      {service.problemStatement}
                    </p>
                  </div>

                  <div
                    className={`p-5 rounded-2xl border ${
                      isEven
                        ? "bg-[#F5F8F7] border-[#D6E2DF]"
                        : "bg-[#131919] border-white/10"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                        isEven ? "text-[#00796B]" : "text-[#00D1B4]"
                      }`}
                    >
                      02 · {dict.capabilitiesSection.offeringLabel}
                    </p>
                    <p className={`text-sm leading-relaxed ${isEven ? "text-[#111817]" : "text-[#D6E2DF]"}`}>
                      {service.nexoraOffering}
                    </p>
                  </div>

                  <div
                    className={`p-5 rounded-2xl border ${
                      isEven
                        ? "bg-[#00796B]/5 border-[#00796B]/30"
                        : "bg-[#00D1B4]/10 border-[#00D1B4]/30"
                    }`}
                  >
                    <p
                      className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                        isEven ? "text-[#00796B]" : "text-[#00D1B4]"
                      }`}
                    >
                      03 · {dict.capabilitiesSection.outcomeLabel}
                    </p>
                    <p className={`text-sm leading-relaxed font-medium ${isEven ? "text-[#111817]" : "text-white"}`}>
                      {service.practicalOutcome}
                    </p>
                  </div>
                </div>

                {/* Separate Product Sub-Entries when present (Nexora POS & SambaPOS) */}
                {service.subEntries && service.subEntries.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.subEntries.map((sub) => (
                      <div
                        key={sub.name}
                        className={`p-5 rounded-2xl border space-y-2 ${
                          isEven
                            ? "bg-white border-[#D6E2DF]"
                            : "bg-[#131919] border-[#00D1B4]/30"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-base font-bold">{sub.name}</h4>
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#00D1B4]/15 text-[#00D1B4]">
                            {sub.badge}
                          </span>
                        </div>
                        <p className={`text-xs leading-relaxed ${isEven ? "text-[#425250]" : "text-[#D6E2DF]"}`}>
                          {sub.description}
                        </p>
                        <p className={`text-[11px] font-mono ${isEven ? "text-[#00796B]" : "text-[#9BB0AC]"}`}>
                          {sub.statusNote}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Key Sub-Capabilities */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {service.capabilities.map((cap) => (
                    <div key={cap.title} className="flex items-start gap-2.5">
                      <CheckCircle2
                        className={`w-4 h-4 shrink-0 mt-1 ${
                          isEven ? "text-[#00796B]" : "text-[#00D1B4]"
                        }`}
                      />
                      <div>
                        <p className="text-sm font-semibold">{cap.title}</p>
                        <p
                          className={`text-xs mt-0.5 line-clamp-2 ${
                            isEven ? "text-[#425250]" : "text-[#9BB0AC]"
                          }`}
                        >
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
