import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  Layers,
  Code2,
  Network,
  ShoppingBag,
} from "lucide-react";
import { AccordionFAQ } from "@/components/ui/AccordionFAQ";
import { SubpageEditorialHero } from "@/components/hero/SubpageEditorialHero";
import { OdooDashboardShowcase } from "@/components/sections/OdooDashboardShowcase";
import { SITE_CONTENT, findServiceBySlug, getDictionary } from "@/content/siteContent";
import { SUPPORTED_LOCALES, isValidLocale, localizePath, type Locale } from "@/lib/i18n";

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of SUPPORTED_LOCALES) {
    for (const service of SITE_CONTENT.en.services) {
      params.push({ locale, slug: service.slug });
      if (service.legacySlug && service.legacySlug !== service.slug) {
        params.push({ locale, slug: service.legacySlug });
      }
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);
  const service = findServiceBySlug(dict, slug);
  if (!service) return {};

  return {
    title: `${service.title} | ${dict.meta.siteName}`,
    description: service.summary,
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/solutions/${service.slug}`,
      languages: {
        en: `https://www.nexora-tech.com/en/solutions/${service.slug}`,
        ar: `https://www.nexora-tech.com/ar/solutions/${service.slug}`,
      },
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);
  const service = findServiceBySlug(dict, slug);

  if (!service) {
    notFound();
  }

  const isAr = safeLocale === "ar";

  return (
    <div>
      {/* Full-Bleed Minimal Solution Detail Hero with Photography */}
      <SubpageEditorialHero
        locale={safeLocale}
        eyebrow={`${service.code} · ${service.eyebrow}`}
        title={service.title}
        lead={service.summary}
        imagePath={service.imagePath}
        imageAlt={service.imageAlt}
        breadcrumbs={[
          { label: dict.nav.home, href: localizePath(safeLocale, "/") },
          { label: dict.nav.solutions, href: localizePath(safeLocale, "/solutions") },
          { label: service.title },
        ]}
        badges={service.platforms}
        actions={[
          {
            label: service.ctaLabel,
            href: `${localizePath(safeLocale, "/contact")}?solution=${service.slug}`,
            variant: "primary",
          },
          {
            label: dict.nav.howWeWork,
            href: localizePath(safeLocale, "/how-we-work"),
            variant: "secondary",
          },
        ]}
      />

      {/* Interactive Odoo ERP Dashboard Showcase on the Enterprise Business / Odoo Page */}
      {service.slug === "enterprise-business" && (
        <OdooDashboardShowcase locale={safeLocale} />
      )}

      {/* Domain-Specific Workflow Showcase (Distinct per Solution Page) */}
      <section className="py-16 lg:py-20 bg-white text-[#111817] border-b border-[#D6E2DF]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10">
          {service.slug === "enterprise-business" && (
            <div className="rounded-3xl bg-[#F5F8F7] border border-[#D6E2DF] p-7 sm:p-10 space-y-8">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div className="space-y-2 max-w-3xl">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1111] text-[#00D1B4] text-xs font-mono font-semibold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>
                      {isAr
                        ? "مثال توضيحي لمسار عمل Odoo ERP"
                        : "ILLUSTRATIVE ODOO ERP WORKFLOW"}
                    </span>
                  </span>
                  <h2 className="nx-h2 text-[#111817]">
                    {isAr
                      ? "كيف ينتقل الطلب عبر المبيعات والمخزون والتجهيز والحسابات"
                      : "How an Order Moves Through Sales, Inventory, Dispatch & Accounting"}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {[
                  {
                    step: "01",
                    titleEn: "Order Entry & Terms",
                    titleAr: "إدخال الطلب والشروط",
                    bodyEn:
                      "Customer order, pricing rules, and credit terms are confirmed once in Odoo Sales.",
                    bodyAr:
                      "تأكيد طلب العميل وقواعد التسعير وشروط الائتمان مرة واحدة في وحدة المبيعات.",
                  },
                  {
                    step: "02",
                    titleEn: "Stock Check & Reservation",
                    titleAr: "فحص وحجز المخزون",
                    bodyEn:
                      "Odoo Inventory checks warehouse balances, reserves stock, and queues barcode picking.",
                    bodyAr:
                      "فحص أرصدة المستودع وحجز الأصناف وتوليد أمر التجهيز عبر الباركود تلقائياً.",
                  },
                  {
                    step: "03",
                    titleEn: "Dispatch & Waybill",
                    titleAr: "التجهيز والإرسال",
                    bodyEn:
                      "Goods are verified at the dispatch desk, releasing delivery notes and updating stock.",
                    bodyAr:
                      "التحقق من الطرود بمكتب الإرسال وإصدار إشعار التسليم وتحديث الرصيد الفعلي.",
                  },
                  {
                    step: "04",
                    titleEn: "Invoicing & Ledger",
                    titleAr: "الفوترة والقيود المحاسبية",
                    bodyEn:
                      "Fulfillment posts stock moves and prepares customer invoices in Odoo Accounting.",
                    bodyAr:
                      "ترحيل حركات المخزون وإعداد فواتير العملاء والقيود المالية في محاسبة Odoo.",
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-5 rounded-2xl bg-white border border-[#D6E2DF] space-y-2.5 shadow-2xs"
                  >
                    <span className="inline-block px-2.5 py-0.5 rounded bg-[#0D1111] text-[#00D1B4] text-xs font-mono font-bold">
                      {item.step}
                    </span>
                    <h3 className="text-base font-bold text-[#111817]">
                      {isAr ? item.titleAr : item.titleEn}
                    </h3>
                    <p className="text-xs text-[#425250] leading-relaxed">
                      {isAr ? item.bodyAr : item.bodyEn}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.slug === "digital-transformation" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-3xl bg-[#F5F8F7] border border-[#D6E2DF] p-7 sm:p-10">
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1111] text-[#00D1B4] text-xs font-mono font-semibold">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>
                    {isAr
                      ? "البرمجيات المخصّصة وتكامل الأنظمة"
                      : "CUSTOM SOFTWARE & SYSTEM INTEGRATION"}
                  </span>
                </span>
                <h2 className="nx-h2 text-[#111817]">
                  {isAr
                    ? "بناء البرمجيات التي تناسب طريقة عملك وربطها بأنظمتك القائمة"
                    : "Custom Software Built for Your Rules, Connected to Your Core Systems"}
                </h2>
                <p className="text-sm text-[#425250] leading-relaxed">
                  {isAr
                    ? "سواء كنت بحاجة إلى بوابة طلبات داخلية، أو مسار اعتمادات متعدد المستويات، أو ربط برمجي مع Odoo ERP، أو لوحات تحليلات، أو تطبيقات جوال وتجارة إلكترونية — يصمم فريقنا الحل حول متطلباتك التشغيلية."
                    : "Whether your operation needs a custom field request portal, multi-step approval routing, API integration with Odoo ERP, cloud hosting, operational analytics, or e-commerce and mobile apps — we build software around your exact workflow."}
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {[
                    {
                      step: "01",
                      en: "Custom Request",
                      ar: "الطلب المخصّص",
                    },
                    {
                      step: "02",
                      en: "Role Approval",
                      ar: "الاعتماد الصلاحي",
                    },
                    {
                      step: "03",
                      en: "System Update",
                      ar: "تحديث النظام",
                    },
                  ].map((s) => (
                    <div
                      key={s.step}
                      className="p-3 rounded-xl bg-white border border-[#D6E2DF] text-center"
                    >
                      <span className="text-[11px] font-mono font-bold text-[#00796B] block">
                        {s.step}
                      </span>
                      <span className="text-xs font-bold text-[#111817]">
                        {isAr ? s.ar : s.en}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl bg-[#0D1111] text-white border border-white/15 p-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-mono font-bold text-[#00D1B4]">
                      {isAr
                        ? "مخطط توضيحي: الطلب ← الاعتماد ← تحديث النظام"
                        : "ILLUSTRATIVE ARCHITECTURE: REQUEST → APPROVAL → SYSTEM UPDATE"}
                    </span>
                  </div>
                  <div className="space-y-3">
                    {[
                      {
                        step: "01",
                        titleEn: "Custom Operational Request UI",
                        titleAr: "واجهة طلبات تشغيلية مخصّصة",
                        descEn:
                          "Web or mobile form capturing branch, field, or dispatch requests with custom validation rules.",
                        descAr:
                          "نموذج ويب أو جوال يلتقط طلبات الفروع أو التشغيل مع قواعد تحقق مخصّصة.",
                      },
                      {
                        step: "02",
                        titleEn: "Role-Based Approval Routing",
                        titleAr: "محرك الاعتمادات والصلاحيات",
                        descEn:
                          "Automated routing to supervisors or department leads with timestamps and audit logging.",
                        descAr:
                          "توجيه تلقائي للمشرفين ومديري الإدارات مع البصمة الزمنية وسجل التدقيق.",
                      },
                      {
                        step: "03",
                        titleEn: "Automated API & ERP Synchronization",
                        titleAr: "المزامنة البرمجية التلقائية مع Odoo ERP",
                        descEn:
                          "Approved records update Odoo ERP, inventory queues, and management analytics without manual re-entry.",
                        descAr:
                          "تحديث السجلات المعتمدة في Odoo ERP والمخزون ولوحات التحليلات دون إعادة إدخال يدوي.",
                      },
                    ].map((row) => (
                      <div
                        key={row.step}
                        className="p-3.5 rounded-xl bg-[#131919] border border-white/10 flex items-start gap-3"
                      >
                        <span className="px-2 py-0.5 rounded bg-[#00D1B4] text-[#0D1111] font-mono text-xs font-bold shrink-0">
                          {row.step}
                        </span>
                        <div className="space-y-0.5">
                          <p className="text-sm font-bold text-white">
                            {isAr ? row.titleAr : row.titleEn}
                          </p>
                          <p className="text-xs text-[#9BB0AC]">
                            {isAr ? row.descAr : row.descEn}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {service.slug === "pos-retail" && service.subEntries && (
            <div className="space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1111] text-[#00D1B4] text-xs font-mono font-semibold">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>
                    {isAr
                      ? "منصتا نقاط البيع للتجزئة والضيافة"
                      : "RETAIL & HOSPITALITY POS PLATFORMS"}
                  </span>
                </span>
                <h2 className="nx-h2 text-[#111817]">
                  {isAr
                    ? "خياران متخصصان: Nexora POS للتجزئة وSambaPOS للضيافة والمطاعم"
                    : "Two Dedicated POS Paths: Nexora POS for Retail & SambaPOS for Hospitality"}
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {service.subEntries.map((sub) => (
                  <div
                    key={sub.name}
                    className="rounded-3xl bg-[#F5F8F7] border border-[#D6E2DF] p-7 shadow-architectural space-y-4 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-xl font-bold text-[#111817]">{sub.name}</h3>
                        <span className="px-3 py-1 rounded-full text-xs font-mono bg-[#0D1111] text-[#00D1B4]">
                          {sub.badge}
                        </span>
                      </div>
                      <p className="text-sm text-[#425250] leading-relaxed">{sub.description}</p>
                    </div>
                    <div className="pt-4 border-t border-[#D6E2DF] flex items-center justify-between gap-4">
                      <span className="text-xs text-[#00796B] font-medium">{sub.statusNote}</span>
                      <Link
                        href={`${localizePath(safeLocale, "/contact")}?solution=${service.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0D1111] hover:text-[#00796B] shrink-0"
                      >
                        <span>{service.ctaLabel}</span>
                        <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {service.slug === "infrastructure-low-current" && (
            <div className="rounded-3xl bg-[#F5F8F7] border border-[#D6E2DF] p-7 sm:p-10 space-y-6">
              <div className="max-w-3xl space-y-2">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D1111] text-[#00D1B4] text-xs font-mono font-semibold">
                  <Network className="w-3.5 h-3.5" />
                  <span>
                    {isAr
                      ? "البنية التحتية الداعمة لأنظمة المؤسسة"
                      : "PHYSICAL INFRASTRUCTURE SUPPORTING BUSINESS SOFTWARE"}
                  </span>
                </span>
                <h2 className="nx-h2 text-[#111817]">
                  {isAr
                    ? "شبكات، ألياف ضوئية، وأنظمة تيار خفيف من المعاينة إلى التشغيل التجريبي"
                    : "Engineered Cabling, Fiber, Security & Data-Center Infrastructure"}
                </h2>
                <p className="text-sm text-[#425250] leading-relaxed">
                  {isAr
                    ? "تعتمد برمجيات ERP ونقاط البيع والأنظمة المخصّصة على شبكات ومرافق موثوقة. ينفذ مهندسو نكسورا تك التمديدات الهيكلية والألياف الضوئية وكاميرات المراقبة والتحكم في الدخول وإنذار الحريق ومراكز البيانات."
                    : "Reliable ERP, POS, and custom software depend on dependable site networks. Nexora Tech’s engineering team designs, installs, tests, commissions, and maintains the physical infrastructure your software runs on."}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Problem -> Supported Scope -> Practical Outcome Breakdown */}
      <section className="py-16 lg:py-20 bg-[#F5F8F7] text-[#111817] border-b border-[#D6E2DF]">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-3xl bg-white border border-[#D6E2DF] shadow-architectural space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-[#425250]">
                01 · {dict.capabilitiesSection.problemLabel}
              </p>
              <p className="text-base text-[#111817] leading-relaxed">{service.problemStatement}</p>
            </div>

            <div className="p-7 rounded-3xl bg-white border border-[#D6E2DF] shadow-architectural space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-[#00796B]">
                02 · {dict.capabilitiesSection.offeringLabel}
              </p>
              <p className="text-base text-[#111817] leading-relaxed">{service.nexoraOffering}</p>
            </div>

            <div className="p-7 rounded-3xl bg-[#0D1111] text-white border border-white/15 shadow-architectural-dark space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-[#00D1B4]">
                03 · {dict.capabilitiesSection.outcomeLabel}
              </p>
              <p className="text-base text-white leading-relaxed font-medium">
                {service.practicalOutcome}
              </p>
            </div>
          </div>

          {/* Detailed Capability Modules & Deliverables */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="nx-h2 text-[#111817]">
                {isAr ? "النطاق المدعوم ومنهجية التنفيذ" : "Supported Scope & Delivery Approach"}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {service.capabilities.map((cap) => (
                  <div
                    key={cap.title}
                    className="p-6 rounded-2xl bg-white border border-[#D6E2DF] shadow-architectural space-y-2.5"
                  >
                    <div className="flex items-center gap-2 text-[#00796B]">
                      <Layers className="w-4 h-4 shrink-0" />
                      <h3 className="text-base font-bold text-[#111817]">{cap.title}</h3>
                    </div>
                    <p className="text-sm text-[#425250] leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl bg-[#0D1111] text-white border border-white/15 p-8 space-y-6">
                <div className="flex items-center gap-2.5">
                  <FileCheck2 className="w-5 h-5 text-[#00D1B4]" />
                  <h3 className="text-lg font-semibold">
                    {isAr
                      ? "مراحل التسليم ومخرجات المشروع"
                      : "Delivery Sequence & Expected Outputs"}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.deliverables.map((deliv) => (
                    <li key={deliv} className="flex items-start gap-2.5 text-sm text-[#D6E2DF]">
                      <CheckCircle2 className="w-4 h-4 text-[#00D1B4] shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-xs font-mono uppercase tracking-wider text-[#9BB0AC] mb-2.5">
                    {isAr ? "القطاعات المخدومة" : "Sectors Served"}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.sectors.map((sec) => (
                      <span
                        key={sec}
                        className="px-2.5 py-1 rounded-lg bg-[#131919] border border-white/10 text-xs text-[#D6E2DF]"
                      >
                        {sec}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`${localizePath(safeLocale, "/contact")}?solution=${service.slug}`}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#00D1B4] text-[#0D1111] font-semibold text-sm hover:bg-[#5CE6D0] transition-colors"
                >
                  <span>{service.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>

          {/* FAQs */}
          {service.faqs.length > 0 && (
            <div className="max-w-3xl space-y-4 pt-4">
              <h2 className="nx-h2 text-[#111817]">
                {isAr ? "أسئلة شائعة حول النطاق والتنفيذ" : "Scoping & Delivery FAQ"}
              </h2>
              <AccordionFAQ items={service.faqs} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
