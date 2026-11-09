"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  Layers,
} from "lucide-react";
import type { SiteDictionary } from "@/content/siteContent";
import { localizePath } from "@/lib/i18n";

export interface ClientSectorShowcaseProps {
  dict: SiteDictionary;
  showBlueprints?: boolean;
  showIndustries?: boolean;
  compactHeader?: boolean;
}

export function ClientSectorShowcase({
  dict,
  showBlueprints = false,
  showIndustries = true,
}: ClientSectorShowcaseProps) {
  const isAr = dict.locale === "ar";
  const visibleClients = dict.clientsSection.clients;

  const documentedSectors = [
    {
      en: "Oil & Gas",
      ar: "النفط والغاز",
      scopeEn: "ERP, procurement, and site low-current infrastructure",
      scopeAr: "أنظمة ERP والمشتريات والبنية التحتية للمواقع",
    },
    {
      en: "Manufacturing",
      ar: "التصنيع",
      scopeEn: "Production, inventory, structured cabling, and CCTV",
      scopeAr: "الإنتاج والمخزون والتمديدات الهيكلية وكاميرات المراقبة",
    },
    {
      en: "Retail & Hospitality",
      ar: "التجزئة والضيافة",
      scopeEn: "Nexora POS, SambaPOS, Odoo ERP, and store networks",
      scopeAr: "Nexora POS وSambaPOS وOdoo ERP وشبكات الفروع",
    },
    {
      en: "Construction",
      ar: "الإنشاءات",
      scopeEn: "Project ERP and building low-current systems",
      scopeAr: "إدارة المشاريع وأنظمة التيار الخفيف للمباني",
    },
    {
      en: "Real Estate",
      ar: "العقارات",
      scopeEn: "Facility surveillance, access control, fire alarm & fiber",
      scopeAr: "المراقبة والتحكم في الدخول وإنذار الحريق والألياف الضوئية",
    },
    {
      en: "Logistics",
      ar: "اللوجستيات",
      scopeEn: "Warehouse workflows, dispatch software, and depot security",
      scopeAr: "إدارة المستودعات وبرمجيات التوزيع وأمن المرافق",
    },
    {
      en: "Fleet Operations",
      ar: "إدارة الأساطيل",
      scopeEn: "Operational tracking, custom integration, and analytics",
      scopeAr: "متابعة التشغيل وتكامل الأنظمة وتحليلات البيانات",
    },
  ];

  return (
    <div className="space-y-16">
      {/* ── Executive Client Logo Wall (Original Proportions & Contrast-Matched Surfaces) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleClients.map((client) => (
          <article
            key={client.slug}
            className="rounded-3xl bg-white border border-[#D6E2DF] p-6 flex flex-col justify-between shadow-architectural hover:border-[#00796B] transition-all group"
          >
            <div className="space-y-4">
              {/* Top Sector Tag */}
              <div className="flex items-center justify-between gap-2">
                <span className="px-3 py-1 rounded-full bg-[#F5F8F7] text-[#00796B] text-[11px] font-mono font-semibold border border-[#D6E2DF]">
                  {client.sector}
                </span>
              </div>

              {/* Logo Display Frame — Contrast-matched surface so every mark reads clearly */}
              <div
                className={`h-36 w-full rounded-2xl flex items-center justify-center p-6 border transition-transform duration-300 group-hover:scale-[1.01] ${
                  client.surfaceTone === "dark"
                    ? "bg-[#0D1111] border-[#1F2928]"
                    : "bg-[#FBFDFC] border-[#E3ECEA]"
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={client.logoPath}
                  alt={isAr ? client.nameAr : client.name}
                  className="max-h-24 max-w-[220px] w-auto h-auto object-contain"
                  loading="lazy"
                />
              </div>

              {/* Client Name & Domain Focus */}
              <div className="pt-1 space-y-1">
                <h3 className="text-lg font-bold text-[#111817]">
                  {isAr ? client.nameAr : client.name}
                </h3>
                <p className="text-xs text-[#425250] leading-relaxed">
                  {isAr ? client.reviewRegisterNoteAr : client.reviewRegisterNote}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* ── Industries Served Section ── */}
      {showIndustries && (
        <div className="rounded-3xl bg-white border border-[#D6E2DF] p-8 sm:p-10 shadow-architectural space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
            <div className="space-y-2 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0D1111] text-[#00D1B4] text-xs font-mono font-semibold">
                <Layers className="w-3.5 h-3.5" />
                <span>
                  {isAr ? "القطاعات التي نخدمها" : "INDUSTRIES SERVED"}
                </span>
              </span>
              <h3 className="nx-h2 text-[#111817]">
                {isAr
                  ? "خبرة المشاريع عبر سبعة قطاعات تشغيلية"
                  : "Industries Served Across Enterprise Systems & Infrastructure"}
              </h3>
              <p className="text-sm text-[#425250] leading-relaxed">
                {isAr
                  ? "نقدم حلول البرمجيات المؤسسية وأنظمة نقاط البيع والتحول الرقمي والبنية التحتية للتيار الخفيف عبر سبعة قطاعات حيوية."
                  : "Nexora Tech delivers enterprise business software, POS systems, digital transformation, and low-current engineering across these seven core sectors."}
              </p>
            </div>

            <Link
              href={localizePath(dict.locale, "/contact")}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F5F8F7] hover:bg-[#0D1111] text-[#111817] hover:text-white border border-[#D6E2DF] text-xs font-semibold transition-colors shrink-0"
            >
              <span>{dict.nav.talkToTeam}</span>
              <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {documentedSectors.map((sec) => (
              <div
                key={sec.en}
                className="p-4 rounded-2xl bg-[#F5F8F7] border border-[#D6E2DF] space-y-1.5"
              >
                <p className="text-sm font-bold text-[#111817]">
                  {isAr ? sec.ar : sec.en}
                </p>
                <p className="text-xs text-[#425250] leading-relaxed">
                  {isAr ? sec.scopeAr : sec.scopeEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── Representative Delivery Scope Blueprints ── */}
      {showBlueprints && (
        <div className="pt-4 space-y-8">
          <div className="max-w-3xl space-y-2">
            <h3 className="nx-h2 text-[#111817]">{dict.clientsSection.blueprintsTitle}</h3>
            <p className="nx-body text-[#425250]">{dict.clientsSection.blueprintsLead}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {dict.clientsSection.blueprints.map((bp) => (
              <div
                key={bp.code}
                className="rounded-3xl bg-[#0D1111] text-white border border-white/15 p-7 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#131919] text-[#00D1B4] border border-[#00D1B4]/30">
                      {bp.code}
                    </span>
                    <Building2 className="w-4 h-4 text-[#00D1B4]" />
                  </div>
                  <h4 className="text-lg font-bold text-white">{bp.title}</h4>
                  <p className="text-xs font-mono text-[#00D1B4]">{bp.sector}</p>
                  <p className="text-sm text-[#D6E2DF] leading-relaxed">{bp.scope}</p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#9BB0AC] mb-2">
                      {isAr ? "المعايير الهندسية" : "Delivery Approach"}
                    </p>
                    <ul className="space-y-1.5">
                      {bp.engineeringStandards.map((std) => (
                        <li key={std} className="flex items-start gap-2 text-xs text-[#D6E2DF]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D1B4] shrink-0 mt-0.5" />
                          <span>{std}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#00D1B4] mb-2">
                      {isAr ? "مخرجات التسليم المتوقعة" : "Expected Deliverables"}
                    </p>
                    <ul className="space-y-1.5">
                      {bp.handoverArtifacts.map((art) => (
                        <li key={art} className="flex items-start gap-2 text-xs text-[#9BB0AC]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00D1B4] shrink-0 mt-1.5" />
                          <span>{art}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
