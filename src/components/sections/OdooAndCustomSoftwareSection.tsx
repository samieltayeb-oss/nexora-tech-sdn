import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Code2,
  GitMerge,
  Database,
} from "lucide-react";
import type { SiteDictionary } from "@/content/siteContent";
import { localizePath } from "@/lib/i18n";

export interface OdooAndCustomSoftwareSectionProps {
  dict: SiteDictionary;
}

export function OdooAndCustomSoftwareSection({
  dict,
}: OdooAndCustomSoftwareSectionProps) {
  const isAr = dict.locale === "ar";

  const odooScopePoints = isAr
    ? [
        "تحليل المتطلبات ودراسة مسارات العمل الفعلية والفجوات التشغيلية قبل التهيئة",
        "ضبط وتخصيص وحدات المبيعات والمخزون والمشتريات والمحاسبة في Odoo ERP",
        "ترحيل البيانات الأساسية والأرصدة وتدريب فرق العمل والدعم المستمر",
      ]
    : [
        "Requirements gathering and workflow gap analysis before software configuration",
        "Configuring and customizing Sales, Inventory, Procurement, and Accounting in Odoo ERP",
        "Structured master-data migration, role-based staff training, and ongoing support",
      ];

  const customSoftwarePoints = isAr
    ? [
        "واجهات طلبات واعتمادات مخصّصة للعمليات التي لا تغطيها الأنظمة الجاهزة",
        "ربط وتكامل الأنظمة (APIs) بين الفروع، ونقاط البيع، والمستودعات، وOdoo ERP",
        "تطبيقات الويب والجوال، والتجارة الإلكترونية، والخدمات السحابية، وتحليلات البيانات",
      ]
    : [
        "Custom request, dispatch, and approval interfaces for workflows unique to your operation",
        "System integration connecting branch counters, warehouse desks, and Odoo ERP",
        "Web and mobile applications, e-commerce, cloud services, and operational analytics",
      ];

  return (
    <section
      id="odoo-and-custom-software"
      className="py-20 lg:py-28 bg-white text-[#111817] border-b border-[#D6E2DF]"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-20 lg:space-y-28">
        {/* Section Intro */}
        <div className="max-w-3xl space-y-4">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#0D1111] text-[#00D1B4]">
            <span>
              {isAr
                ? "البرمجيات في قلب العمليات"
                : "CORE SOFTWARE & WORKFLOW ENGINEERING"}
            </span>
          </span>
          <h2 className="nx-h1 text-[#111817]">
            {isAr
              ? "نظام Odoo ERP للعمليات الأساسية، وبرمجيات مخصّصة لما يميّز أعمالك"
              : "Odoo ERP for your core operations. Custom software for what makes your business different."}
          </h2>
          <p className="nx-lead text-[#425250]">
            {isAr
              ? "تبدأ نكسورا تك بفهم كيفية انتقال الطلبات والمخزون والاعتمادات داخل مؤسستك، لتحديد ما ينبغي إدارته عبر Odoo ERP وما يتطلب بناء برمجيات وتكاملات مخصّصة."
              : "We start with how orders, stock checks, and approvals actually move through your organization — implementing Odoo ERP where standard enterprise modules fit best, and engineering custom software where your operation follows its own rules."}
          </p>
        </div>

        {/* ── STORY 1: ODOO ERP IMPLEMENTATION (Large Editorial Feature) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-[#D6E2DF] bg-[#0D1111] shadow-architectural">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  isAr
                    ? "/assets/editorial/solution-enterprise-erp-ar.jpg"
                    : "/assets/editorial/solution-enterprise-erp.webp"
                }
                alt={
                  isAr
                    ? "محطة عمل للمخزون والشحن بالمستودع تضم شاشة نظام Odoo ERP وماسح باركود وطابعة ملصقات"
                    : "Warehouse receiving and dispatch workstation running Odoo ERP inventory and fulfillment workflows"
                }
                className="w-full h-72 sm:h-96 lg:h-[440px] object-cover"
              />
            </div>

            {/* Connected Module Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                {
                  step: "01",
                  en: "Sales & Quotations",
                  ar: "المبيعات وعروض الأسعار",
                },
                {
                  step: "02",
                  en: "Inventory & Barcodes",
                  ar: "المخزون والباركود",
                },
                {
                  step: "03",
                  en: "Purchase & Replenishment",
                  ar: "المشتريات والتوريد",
                },
                {
                  step: "04",
                  en: "Invoicing & Accounting",
                  ar: "الفوترة والمحاسبة",
                },
              ].map((mod) => (
                <div
                  key={mod.step}
                  className="p-3.5 rounded-2xl bg-[#F5F8F7] border border-[#D6E2DF] space-y-1"
                >
                  <span className="text-[11px] font-mono font-bold text-[#00796B]">
                    {mod.step}
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#111817]">
                    {isAr ? mod.ar : mod.en}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8F7] border border-[#D6E2DF] text-xs font-mono font-semibold text-[#00796B]">
              <Layers className="w-3.5 h-3.5" />
              <span>
                {isAr
                  ? "حلول الأعمال المؤسسية · Odoo ERP"
                  : "Enterprise Business Solutions · Odoo ERP"}
              </span>
            </div>

            <h3 className="nx-h2 text-[#111817]">
              {isAr
                ? "تطبيق Odoo ERP حول مسارات عملك الفعلية"
                : "Odoo ERP configured around how your teams actually operate"}
            </h3>

            <p className="nx-body text-[#425250]">
              {isAr
                ? "يعمل الاستشاريون الوظيفيون والتقنيون والمطورون لدى نكسورا تك معاً لضبط Odoo ERP بحيث تتدفق بيانات الطلبات والمخزون والمشتريات والحسابات في بيئة واحدة مترابطة."
                : "Our functional consultants, technical consultants, and developers work together to align Odoo ERP with your real operational procedures — connecting order entry, stock control, procurement, and finance without forcing teams into disconnected workarounds."}
            </p>

            <ul className="space-y-3 pt-1">
              {odooScopePoints.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2.5 text-sm text-[#111817]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00796B] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href={localizePath(dict.locale, "/solutions/enterprise-business")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D1111] hover:bg-[#00D1B4] text-white hover:text-[#0D1111] text-sm font-bold transition-colors"
              >
                <span>
                  {isAr
                    ? "استكشف حلول الأعمال المؤسسية (Odoo ERP)"
                    : "Explore Enterprise Business Solutions"}
                </span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── STORY 2: CUSTOM SOFTWARE & SYSTEM INTEGRATION (Large Editorial Feature, Reversed Columns) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center pt-6 border-t border-[#D6E2DF]">
          <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F8F7] border border-[#D6E2DF] text-xs font-mono font-semibold text-[#00796B]">
              <Code2 className="w-3.5 h-3.5" />
              <span>
                {isAr
                  ? "التحول الرقمي · البرمجيات المخصّصة والتكامل"
                  : "Digital Transformation · Custom Software & Integration"}
              </span>
            </div>

            <h3 className="nx-h2 text-[#111817]">
              {isAr
                ? "برمجيات مخصّصة وتكامل أنظمة للخطوات الخاصة بمؤسستك"
                : "Custom software that connects the steps unique to your business"}
            </h3>

            <p className="nx-body text-[#425250]">
              {isAr
                ? "لكل مؤسسة إجراءات خاصة في الطلبات الداخلية، أو صلاحيات الاعتماد، أو التشغيل الميداني، أو التقارير. نقوم بتصميم وتطوير البرمجيات المخصّصة وربطها مباشرة بأنظمة المؤسسة."
                : "Every operation has workflows that standard packages do not cover out of the box — from field requests and multi-tier approvals to dispatch scheduling and executive dashboards. We design, build, and integrate custom software that bridges those steps cleanly."}
            </p>

            <ul className="space-y-3 pt-1">
              {customSoftwarePoints.map((pt) => (
                <li
                  key={pt}
                  className="flex items-start gap-2.5 text-sm text-[#111817]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#00796B] shrink-0 mt-0.5" />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Link
                href={localizePath(dict.locale, "/solutions/digital-transformation")}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0D1111] hover:bg-[#00D1B4] text-white hover:text-[#0D1111] text-sm font-bold transition-colors"
              >
                <span>
                  {isAr
                    ? "استكشف التحول الرقمي والبرمجيات المخصّصة"
                    : "Explore Digital Transformation"}
                </span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
            <div className="rounded-3xl overflow-hidden border border-[#D6E2DF] bg-[#0D1111] shadow-architectural">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={
                  isAr
                    ? "/assets/editorial/story-custom-software-ops-ar.jpg"
                    : "/assets/editorial/story-custom-software-ops.jpg"
                }
                alt={
                  isAr
                    ? "فريق عمليات يراجع تطبيق مسار عمل مخصّص ولوحة متابعة على الحاسوب المحمول والجهاز اللوحي"
                    : "Operations specialists reviewing a custom workflow application and dispatch dashboard on laptop and tablet"
                }
                className="w-full h-72 sm:h-96 lg:h-[440px] object-cover"
              />
            </div>

            {/* Illustrative Custom Workflow Integration Strip */}
            <div className="p-4 rounded-2xl bg-[#0D1111] text-white border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 text-xs font-mono text-[#00D1B4]">
                <GitMerge className="w-4 h-4 shrink-0" />
                <span>
                  {isAr
                    ? "مثال تكامل: واجهة طلبات مخصّصة ← مسار اعتماد ← تحديث تلقائي لـ Odoo ERP"
                    : "Illustrative Integration: Custom Request UI → Role Approval → Automated Odoo ERP Sync"}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/10 text-[11px] font-mono text-[#D6E2DF] shrink-0">
                <Database className="w-3.5 h-3.5 text-[#00D1B4]" />
                <span>{isAr ? "سجل بيانات موحد" : "Single Source of Truth"}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
