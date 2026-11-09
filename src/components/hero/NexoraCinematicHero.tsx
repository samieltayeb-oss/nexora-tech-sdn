"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Layers,
  Code2,
  CheckCircle2,
} from "lucide-react";
import type { SiteDictionary } from "@/content/siteContent";
import { localizePath } from "@/lib/i18n";

export interface NexoraCinematicHeroProps {
  dict: SiteDictionary;
}

export type WorkflowPathId = "odoo" | "custom";

export interface WorkflowStepItem {
  id: string;
  stepNumber: string;
  labelEn: string;
  labelAr: string;
  headlineEn: string;
  headlineAr: string;
  explanationEn: string;
  explanationAr: string;
  flowPillEn: string;
  flowPillAr: string;
  photoPinLabelEn: string;
  photoPinLabelAr: string;
  /** Pin position on the operations desk photograph (percentage x/y in LTR; mirrored in RTL) */
  pinX: number;
  pinY: number;
}

export interface WorkflowPathConfig {
  id: WorkflowPathId;
  nameEn: string;
  nameAr: string;
  destinationSlug: string;
  destinationLabelEn: string;
  destinationLabelAr: string;
  steps: WorkflowStepItem[];
}

const WORKFLOW_PATHS: WorkflowPathConfig[] = [
  {
    id: "odoo",
    nameEn: "Odoo ERP",
    nameAr: "Odoo ERP",
    destinationSlug: "enterprise-business",
    destinationLabelEn: "Enterprise Business Solutions",
    destinationLabelAr: "حلول الأعمال المؤسسية",
    steps: [
      {
        id: "order",
        stepNumber: "01",
        labelEn: "Order",
        labelAr: "الطلب",
        headlineEn: "Sales order captured once and shared across teams",
        headlineAr: "تسجيل أمر البيع مرة واحدة ومشاركته عبر الإدارات",
        explanationEn:
          "Customer items, pricing terms, and delivery priority are confirmed in Odoo Sales and immediately visible to finance and the warehouse desk.",
        explanationAr:
          "تأكيد الأصناف وشروط التسعير وأولوية التسليم في مبيعات Odoo لتظهر فوراً لدى الإدارة المالية ومكتب المستودع دون إعادة إدخال.",
        flowPillEn: "SO-2048 Confirmed → Reserves WH/Stock",
        flowPillAr: "تأكيد الطلب SO-2048 ← حجز الرصيد بالمستودع",
        photoPinLabelEn: "Order Screen · SO-2048 Queued",
        photoPinLabelAr: "شاشة الطلبات · أمر البيع SO-2048",
        pinX: 88,
        pinY: 44,
      },
      {
        id: "inventory",
        stepNumber: "02",
        labelEn: "Inventory",
        labelAr: "المخزون",
        headlineEn: "Real-time stock check and barcode verification",
        headlineAr: "فحص الرصيد الفوري والتحقق عبر ماسح الباركود",
        explanationEn:
          "The operations desk checks live warehouse balances by location and scans picked items at the counter to verify accuracy before packing.",
        explanationAr:
          "يتحقق مكتب العمليات من الرصيد الفعلي بالمستودع ويمسح الأصناف بالباركود لضمان مطابقتها الكاملة للطلب قبل التغليف.",
        flowPillEn: "24/24 Units Scanned → Stock Verified",
        flowPillAr: "مسح 24/24 وحدة ← مطابقة المخزون",
        photoPinLabelEn: "Barcode Scanner · Stock Verified",
        photoPinLabelAr: "ماسح الباركود · التحقق من المخزون",
        pinX: 67,
        pinY: 74,
      },
      {
        id: "dispatch",
        stepNumber: "03",
        labelEn: "Dispatch",
        labelAr: "التجهيز والإرسال",
        headlineEn: "Packed goods released with delivery slip and ledger update",
        headlineAr: "إرسال الطرود المجهزة مع إشعار التسليم وتحديث الحسابات",
        explanationEn:
          "Confirming shipment at the dispatch floor prints the delivery note, deducts inventory balances, and prepares the customer invoice in Odoo ERP.",
        explanationAr:
          "اعتماد الشحن عند صالة الإرسال يصدر إشعار التسليم، ويحدث أرصدة المخزون، ويجهز فاتورة العميل تلقائياً في Odoo ERP.",
        flowPillEn: "Delivery Note Issued → Ledger Updated",
        flowPillAr: "إصدار إشعار التسليم ← تحديث الحسابات",
        photoPinLabelEn: "Packed Goods · Ready for Dispatch",
        photoPinLabelAr: "الطرود المجهزة · جاهزة للإرسال",
        pinX: 86,
        pinY: 72,
      },
    ],
  },
  {
    id: "custom",
    nameEn: "Custom Software",
    nameAr: "برمجيات مخصّصة",
    destinationSlug: "digital-transformation",
    destinationLabelEn: "Digital Transformation",
    destinationLabelAr: "التحول الرقمي",
    steps: [
      {
        id: "request",
        stepNumber: "01",
        labelEn: "Request",
        labelAr: "الطلب",
        headlineEn: "Custom request form tailored to your operational rules",
        headlineAr: "نموذج طلب مخصّص يناسب قواعد التشغيل في مؤسستك",
        explanationEn:
          "Field, branch, or dispatch staff submit operational requests through a clean web or mobile interface built around your company’s specific workflow.",
        explanationAr:
          "يرسل موظفو الفروع أو التشغيل طلباتهم عبر واجهة ويب أو جوال مصممة خصيصاً لتطبيق قواعد العمل الخاصة بشركتك.",
        flowPillEn: "Branch Request → Validated Rules",
        flowPillAr: "طلب الفرع ← التحقق من الشروط",
        photoPinLabelEn: "Custom Portal · Operational Request",
        photoPinLabelAr: "بوابة مخصّصة · طلب تشغيلي",
        pinX: 76,
        pinY: 44,
      },
      {
        id: "approval",
        stepNumber: "02",
        labelEn: "Approval",
        labelAr: "الاعتماد",
        headlineEn: "Role-based approval routed to the right manager",
        headlineAr: "اعتماد بصلاحيات محددة وتوجيه تلقائي للمسؤول المختص",
        explanationEn:
          "Requests route automatically based on value, branch, or inventory class — recording manager sign-off and timestamps without paper bottlenecks.",
        explanationAr:
          "يُوجَّه الطلب تلقائياً حسب القيمة أو الفرع أو نوع المخزون مع توثيق اعتماد المدير والتوقيت دون معاملات ورقية.",
        flowPillEn: "Manager Sign-Off → Audit Logged",
        flowPillAr: "اعتماد المدير ← تسجيل في سجل التدقيق",
        photoPinLabelEn: "Role Sign-Off · Instant Approval",
        photoPinLabelAr: "اعتماد الصلاحيات · موافقة فورية",
        pinX: 64,
        pinY: 38,
      },
      {
        id: "system-update",
        stepNumber: "03",
        labelEn: "System update",
        labelAr: "تحديث النظام",
        headlineEn: "Core business systems updated automatically via API",
        headlineAr: "تحديث أنظمة الأعمال الأساسية تلقائياً دون إعادة إدخال",
        explanationEn:
          "Once approved, Nexora’s integration layer updates Odoo ERP, warehouse queues, and management dashboards in real time.",
        explanationAr:
          "فور الاعتماد، تقوم طبقة التكامل البرمجي بتحديث Odoo ERP وقوائم المستودع ولوحات المتابعة لحظياً.",
        flowPillEn: "API Sync → ERP & Dispatch Updated",
        flowPillAr: "مزامنة برمجية ← تحديث ERP والإرسال",
        photoPinLabelEn: "Connected Sync · Systems Updated",
        photoPinLabelAr: "ربط متكامل · تحديث الأنظمة",
        pinX: 83,
        pinY: 52,
      },
    ],
  },
];

export function NexoraCinematicHero({ dict }: NexoraCinematicHeroProps) {
  const isAr = dict.locale === "ar";
  const [selectedPathId, setSelectedPathId] = useState<WorkflowPathId>("odoo");
  const [selectedStepIdx, setSelectedStepIdx] = useState<number>(0);

  const activePath =
    WORKFLOW_PATHS.find((p) => p.id === selectedPathId) || WORKFLOW_PATHS[0];
  const activeStep = activePath.steps[selectedStepIdx] || activePath.steps[0];

  const handleSelectPath = (pathId: WorkflowPathId) => {
    setSelectedPathId(pathId);
    setSelectedStepIdx(0);
  };

  const handleStepKeyDown = (
    e: React.KeyboardEvent<HTMLButtonElement>,
    idx: number,
  ) => {
    const total = activePath.steps.length;
    if (e.key === "ArrowRight") {
      e.preventDefault();
      const next = isAr ? (idx - 1 + total) % total : (idx + 1) % total;
      setSelectedStepIdx(next);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prev = isAr ? (idx + 1) % total : (idx - 1 + total) % total;
      setSelectedStepIdx(prev);
    }
  };

  const pinLeftPercent = isAr ? 100 - activeStep.pinX : activeStep.pinX;

  return (
    <section
      aria-label={dict.hero.h1}
      className="relative w-full bg-[#0D1111] text-white border-b border-white/10 overflow-hidden"
    >
      {/* ── FULL-BLEED PHOTOGRAPHIC CANVAS (Mobile + Desktop) ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dict.hero.wideImagePath}
          alt={dict.hero.imageAlt}
          className={`w-full h-full object-cover ${
            isAr
              ? "object-[24%_center] lg:object-center"
              : "object-[76%_center] lg:object-center"
          }`}
        />

        {/* Subtle directional gradient: preserves the natural architectural gallery depth & center Nexora pillar while keeping the start-side copy crisp */}
        <div
          className="absolute inset-0"
          style={{
            background: isAr
              ? "linear-gradient(270deg, rgba(11,16,16,0.68) 0%, rgba(11,16,16,0.42) 36%, rgba(11,16,16,0.05) 62%, rgba(11,16,16,0.0) 100%), linear-gradient(180deg, rgba(11,16,16,0.12) 0%, rgba(11,16,16,0.05) 55%, rgba(11,16,16,0.72) 100%)"
              : "linear-gradient(90deg, rgba(11,16,16,0.64) 0%, rgba(11,16,16,0.35) 35%, rgba(11,16,16,0.04) 58%, rgba(11,16,16,0.0) 100%), linear-gradient(180deg, rgba(11,16,16,0.12) 0%, rgba(11,16,16,0.05) 55%, rgba(11,16,16,0.72) 100%)",
          }}
        />
      </div>

      {/* ── MAIN FOREGROUND STAGE (Spacious, Uncrowded Layout) ── */}
      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-10 sm:pt-24 lg:py-16 xl:py-20 min-h-[620px] lg:min-h-[730px] flex flex-col justify-between gap-10 lg:gap-14">
        {/* ── TOP EDITORIAL BLOCK: Headline, Supporting Copy & Primary/Secondary Actions ── */}
        <div className="max-w-md xl:max-w-[460px] space-y-4 lg:pt-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131919]/90 border border-white/15 text-xs font-mono uppercase tracking-wider text-[#00D1B4]">
            <span className="w-2 h-2 rounded-full bg-[#00D1B4]" />
            <span>{dict.hero.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl xl:text-[44px] font-bold tracking-tight text-white leading-[1.1]">
            {dict.hero.h1}
          </h1>

          <p className="text-sm sm:text-base text-[#D6E2DF] leading-relaxed">
            {dict.hero.intro}
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              href={localizePath(dict.locale, "/contact")}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#00D1B4] hover:bg-[#3FE3CB] text-[#0D1111] font-bold text-sm sm:text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D1B4]"
            >
              <span>{dict.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>

            <Link
              href="#solutions"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#131919]/85 hover:bg-white/10 text-white border border-white/20 font-semibold text-sm sm:text-base transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#00D1B4]"
            >
              <span>{dict.hero.secondaryCta}</span>
            </Link>
          </div>
        </div>

        {/* ── COMPACT, UNCROWDED "EXPLORE A WORKFLOW" BAR (Kept on the start side so the desk, Nexora pillar & manager stay 100% unobstructed) ── */}
        <div
          role="region"
          aria-label={isAr ? "استكشف مسار عمل" : "Explore a workflow"}
          className="w-full max-w-xl xl:max-w-[560px] rounded-2xl bg-[#0D1111]/90 backdrop-blur-xl border border-white/15 p-4 sm:p-5 shadow-[0_24px_60px_rgba(0,0,0,0.65)] space-y-4"
        >
          {/* Header Row: Title + Path Switcher (Odoo ERP | Custom Software) */}
          <div className="flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#00D1B4]">
                {isAr ? "استكشف مسار عمل" : "Explore a workflow"}
              </span>
              <span className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-[#9BB0AC]">
                {isAr ? "مثال توضيحي" : "Illustrative"}
              </span>
            </div>

            <div
              role="tablist"
              aria-label={isAr ? "مسارات البرمجيات" : "Software workflow paths"}
              className="inline-flex items-center gap-1 p-1 rounded-xl bg-[#131919] border border-white/10"
            >
              {WORKFLOW_PATHS.map((path) => {
                const isSelected = path.id === selectedPathId;
                const PathIcon = path.id === "odoo" ? Layers : Code2;
                return (
                  <button
                    key={path.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => handleSelectPath(path.id)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D1B4] ${
                      isSelected
                        ? "bg-[#00D1B4] text-[#0D1111] shadow-sm"
                        : "text-[#D6E2DF] hover:text-white"
                    }`}
                  >
                    <PathIcon className="w-3.5 h-3.5 shrink-0" />
                    <span>{isAr ? path.nameAr : path.nameEn}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Horizontal 3-Step Pipeline Bar (01 Order → 02 Inventory → 03 Dispatch) */}
          <div
            role="tablist"
            aria-label={
              isAr
                ? `خطوات مسار ${activePath.nameAr}`
                : `${activePath.nameEn} workflow steps`
            }
            className="grid grid-cols-3 gap-2 pb-3.5 border-b border-white/10"
          >
            {activePath.steps.map((step, idx) => {
              const isStepSelected = idx === selectedStepIdx;
              return (
                <button
                  key={step.id}
                  type="button"
                  role="tab"
                  aria-selected={isStepSelected}
                  onClick={() => setSelectedStepIdx(idx)}
                  onKeyDown={(e) => handleStepKeyDown(e, idx)}
                  className={`inline-flex items-center justify-center gap-1.5 px-2.5 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00D1B4] ${
                    isStepSelected
                      ? "bg-white text-[#0D1111] border-white shadow-sm"
                      : "bg-[#131919] text-[#D6E2DF] border-white/10 hover:border-[#00D1B4]/50 hover:text-white"
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] font-bold ${
                      isStepSelected ? "text-[#00796B]" : "text-[#00D1B4]"
                    }`}
                  >
                    {step.stepNumber}
                  </span>
                  <span className="truncate">
                    {isAr ? step.labelAr : step.labelEn}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Step Details + Status Pill + Action Link */}
          <div role="tabpanel" aria-live="polite" className="space-y-3">
            <div className="space-y-1.5">
              <h2 className="text-sm sm:text-base font-bold text-white leading-snug">
                {isAr ? activeStep.headlineAr : activeStep.headlineEn}
              </h2>
              <p className="text-xs sm:text-sm text-[#C8D6D3] leading-relaxed">
                {isAr ? activeStep.explanationAr : activeStep.explanationEn}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-2 border-t border-white/10">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#131919] border border-[#00D1B4]/30 text-[11px] font-mono text-[#00D1B4] whitespace-nowrap">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{isAr ? activeStep.flowPillAr : activeStep.flowPillEn}</span>
              </span>

              <Link
                href={localizePath(
                  dict.locale,
                  `/solutions/${activePath.destinationSlug}`,
                )}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 hover:bg-[#00D1B4] text-white hover:text-[#0D1111] border border-white/15 text-xs font-bold transition-colors whitespace-nowrap"
              >
                <span>
                  {isAr
                    ? activePath.destinationLabelAr
                    : activePath.destinationLabelEn}
                </span>
                <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
