"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ShoppingCart,
  PackageCheck,
  Receipt,
  Store,
  CheckCircle2,
  Activity,
  Building2,
  LayoutGrid,
  Search,
  Filter,
  ChevronLeft,
  ChevronRight,
  List,
  BarChart3,
  Clock,
  MessageSquare,
  Bell,
  Plus,
  Download,
  TrendingUp,
} from "lucide-react";
import { OdooPartnerBadge } from "@/components/brand/OdooPartnerBadge";
import type { Locale } from "@/lib/i18n";
import { localizePath } from "@/lib/i18n";

export interface OdooDashboardShowcaseProps {
  locale: Locale;
}

type ModuleKey = "sales" | "inventory" | "accounting" | "pos";

interface DashboardMetric {
  labelEn: string;
  labelAr: string;
  valueEn: string;
  valueAr: string;
  deltaEn: string;
  deltaAr: string;
  sparkHeights: number[];
}

interface ChartBar {
  labelEn: string;
  labelAr: string;
  primaryPct: number;
  secondaryPct: number;
  valueLabel: string;
}

interface OdooTableRow {
  ref: string;
  dateEn: string;
  dateAr: string;
  partnerEn: string;
  partnerAr: string;
  branchEn: string;
  branchAr: string;
  repInitials: string;
  repNameEn: string;
  repNameAr: string;
  activityEn: string;
  activityAr: string;
  amount: string;
  statusEn: string;
  statusAr: string;
  badgeStyle: "purple" | "emerald" | "amber" | "sky";
}

interface ModuleConfig {
  key: ModuleKey;
  appShortEn: string;
  appShortAr: string;
  appTitleEn: string;
  appTitleAr: string;
  breadcrumbEn: string;
  breadcrumbAr: string;
  newButtonEn: string;
  newButtonAr: string;
  filterChip1En: string;
  filterChip1Ar: string;
  filterChip2En: string;
  filterChip2Ar: string;
  chartTitleEn: string;
  chartTitleAr: string;
  chartSubtitleEn: string;
  chartSubtitleAr: string;
  chartPrimaryLegendEn: string;
  chartPrimaryLegendAr: string;
  chartSecondaryLegendEn: string;
  chartSecondaryLegendAr: string;
  chartBars: ChartBar[];
  branchSplitTitleEn: string;
  branchSplitTitleAr: string;
  branchSplits: {
    nameEn: string;
    nameAr: string;
    pct: number;
    amount: string;
    color: string;
  }[];
  metrics: DashboardMetric[];
  colRefEn: string;
  colRefAr: string;
  colPartnerEn: string;
  colPartnerAr: string;
  colBranchEn: string;
  colBranchAr: string;
  colActivityEn: string;
  colActivityAr: string;
  colTotalEn: string;
  colTotalAr: string;
  colStatusEn: string;
  colStatusAr: string;
  rows: OdooTableRow[];
}

const ODOO_MODULES: ModuleConfig[] = [
  {
    key: "sales",
    appShortEn: "Sales",
    appShortAr: "المبيعات",
    appTitleEn: "Odoo Sales & Dispatch",
    appTitleAr: "المبيعات والتجهيز · Odoo Sales",
    breadcrumbEn: "Dashboards / Sales & Fulfillment Overview",
    breadcrumbAr: "لوحات البيانات / نظرة عامة على المبيعات والتجهيز",
    newButtonEn: "New Quotation",
    newButtonAr: "عرض سعر جديد",
    filterChip1En: "My Pipeline",
    filterChip1Ar: "مبيعاتي",
    filterChip2En: "Khartoum & Port Sudan",
    filterChip2Ar: "الخرطوم وبورتسودان",
    chartTitleEn: "Monthly Sales Orders & Invoiced Revenue",
    chartTitleAr: "أوامر البيع الشهرية والإيرادات المفوترة",
    chartSubtitleEn: "Odoo Spreadsheet BI · Synced across 3 Sudan branches",
    chartSubtitleAr: "تحليلات Odoo الفورية · متزامنة عبر 3 فروع في السودان",
    chartPrimaryLegendEn: "Confirmed Sales Orders",
    chartPrimaryLegendAr: "أوامر البيع المعتمدة",
    chartSecondaryLegendEn: "Invoiced & Dispatched",
    chartSecondaryLegendAr: "تمت الفوترة والشحن",
    chartBars: [
      { labelEn: "May", labelAr: "مايو", primaryPct: 58, secondaryPct: 52, valueLabel: "$64k" },
      { labelEn: "Jun", labelAr: "يونيو", primaryPct: 66, secondaryPct: 60, valueLabel: "$72k" },
      { labelEn: "Jul", labelAr: "يوليو", primaryPct: 62, secondaryPct: 58, valueLabel: "$69k" },
      { labelEn: "Aug", labelAr: "أغسطس", primaryPct: 78, secondaryPct: 73, valueLabel: "$86k" },
      { labelEn: "Sep", labelAr: "سبتمبر", primaryPct: 85, secondaryPct: 80, valueLabel: "$94k" },
      { labelEn: "Oct", labelAr: "أكتوبر", primaryPct: 96, secondaryPct: 91, valueLabel: "$112k" },
    ],
    branchSplitTitleEn: "Revenue by Operating Hub",
    branchSplitTitleAr: "توزيع الإيرادات حسب المركز التشغيلي",
    branchSplits: [
      { nameEn: "Khartoum HQ & Main WH", nameAr: "المقر الرئيسي ومستودع الخرطوم", pct: 52, amount: "$58,240", color: "#00D1B4" },
      { nameEn: "Port Sudan Logistics Hub", nameAr: "مركز بورتسودان اللوجستي", pct: 31, amount: "$34,720", color: "#9C678F" },
      { nameEn: "Omdurman Commercial Branch", nameAr: "فرع أم درمان التجاري", pct: 17, amount: "$19,040", color: "#38BDF8" },
    ],
    metrics: [
      {
        labelEn: "Confirmed Orders (MTD)",
        labelAr: "أوامر البيع المعتمدة (الشهر)",
        valueEn: "$112,000",
        valueAr: "$112,000",
        deltaEn: "+18.4% vs last month · 148 SOs",
        deltaAr: "+18.4% عن الشهر السابق · 148 أمر بيع",
        sparkHeights: [38, 52, 46, 68, 74, 88, 100],
      },
      {
        labelEn: "Warehouse Dispatch Queue",
        labelAr: "قائمة التجهيز والشحن الفوري",
        valueEn: "14 Ready",
        valueAr: "14 جاهز للشحن",
        deltaEn: "100% barcode verified at counter",
        deltaAr: "تم التحقق بالباركود بنسبة 100%",
        sparkHeights: [45, 60, 58, 72, 65, 84, 92],
      },
      {
        labelEn: "Avg. Order-to-Invoice",
        labelAr: "متوسط زمن إصدار الفاتورة",
        valueEn: "1m 45s",
        valueAr: "1 د و45 ث",
        deltaEn: "Auto-posted from delivery slip",
        deltaAr: "ترحيل تلقائي فور إشعار التسليم",
        sparkHeights: [80, 72, 64, 58, 49, 42, 35],
      },
      {
        labelEn: "Credit Approval Rate",
        labelAr: "نسبة الاعتماد الائتماني الآلي",
        valueEn: "98.2%",
        valueAr: "98.2%",
        deltaEn: "Role-based customer limit rules",
        deltaAr: "وفق سقوف ائتمان العملاء المعتمدة",
        sparkHeights: [70, 75, 78, 82, 88, 92, 96],
      },
    ],
    colRefEn: "Order Ref",
    colRefAr: "رقم الأمر",
    colPartnerEn: "Customer / Partner",
    colPartnerAr: "العميل / المؤسسة",
    colBranchEn: "Operating Warehouse",
    colBranchAr: "المستودع التشغيلي",
    colActivityEn: "Next Activity",
    colActivityAr: "الإجراء التالي",
    colTotalEn: "Total",
    colTotalAr: "الإجمالي",
    colStatusEn: "Odoo Status",
    colStatusAr: "حالة النظام",
    rows: [
      {
        ref: "SO-2048",
        dateEn: "Today, 10:42",
        dateAr: "اليوم، 10:42",
        partnerEn: "Al Manshiya Distribution Co.",
        partnerAr: "شركة المنشية للتوزيع والتجارة",
        branchEn: "Khartoum Main WH → Bay 01",
        branchAr: "مستودع الخرطوم الرئيسي ← بوابة 01",
        repInitials: "MA",
        repNameEn: "M. Ahmed",
        repNameAr: "م. أحمد",
        activityEn: "Barcode Picking Verified",
        activityAr: "تم فحص الأصناف بالباركود",
        amount: "$14,850.00",
        statusEn: "Sales Order · Reserved",
        statusAr: "أمر بيع · تم حجز المخزون",
        badgeStyle: "emerald",
      },
      {
        ref: "SO-2049",
        dateEn: "Today, 09:55",
        dateAr: "اليوم، 09:55",
        partnerEn: "Red Sea Logistics & Supply",
        partnerAr: "البحر الأحمر للإمداد واللوجستيات",
        branchEn: "Port Sudan Hub → Waybill #884",
        branchAr: "مركز بورتسودان ← بوليصة #884",
        repInitials: "ST",
        repNameEn: "S. Taha",
        repNameAr: "س. طه",
        activityEn: "Delivery Slip Printed",
        activityAr: "تمت طباعة إشعار التسليم",
        amount: "$28,400.00",
        statusEn: "Dispatched · Invoiced",
        statusAr: "تم الشحن · مفوتر",
        badgeStyle: "purple",
      },
      {
        ref: "SO-2050",
        dateEn: "Today, 09:18",
        dateAr: "اليوم، 09:18",
        partnerEn: "Omdurman Medical & Retail Group",
        partnerAr: "مجموعة أم درمان الطبية والتجارية",
        branchEn: "Omdurman Branch → Cold Chain",
        branchAr: "فرع أم درمان ← مخزن التبريد",
        repInitials: "RK",
        repNameEn: "R. Khalid",
        repNameAr: "ر. خالد",
        activityEn: "Auto-Post to Ledger",
        activityAr: "ترحيل آلي لدفتر الأستاذ",
        amount: "$9,620.00",
        statusEn: "To Invoice",
        statusAr: "جاهز للفوترة",
        badgeStyle: "sky",
      },
      {
        ref: "SO-2051",
        dateEn: "Yesterday",
        dateAr: "أمس",
        partnerEn: "Nile Valley Industrial Engineering",
        partnerAr: "وادي النيل للهندسة الصناعية",
        branchEn: "Khartoum Main WH → Project Stock",
        branchAr: "مستودع الخرطوم ← مخزون المشاريع",
        repInitials: "MA",
        repNameEn: "M. Ahmed",
        repNameAr: "م. أحمد",
        activityEn: "Manager Limit Sign-Off",
        activityAr: "اعتماد سقف الائتمان",
        amount: "$32,100.00",
        statusEn: "Quotation Sent",
        statusAr: "تم إرسال العرض",
        badgeStyle: "amber",
      },
    ],
  },
  {
    key: "inventory",
    appShortEn: "Inventory",
    appShortAr: "المخزون",
    appTitleEn: "Odoo Inventory & Warehouse",
    appTitleAr: "المخزون والمستودعات · Odoo Inventory",
    breadcrumbEn: "Inventory / Multi-Warehouse Operations",
    breadcrumbAr: "المخزون / إدارة المستودعات المتعددة",
    newButtonEn: "New Transfer",
    newButtonAr: "تحويل مخزني جديد",
    filterChip1En: "Internal & Receipts",
    filterChip1Ar: "الاستلام والتحويلات",
    filterChip2En: "Barcode Handhelds Active",
    filterChip2Ar: "أجهزة الباركود نشطة",
    chartTitleEn: "Weekly Stock Movements & Barcode Scans",
    chartTitleAr: "حركات المخزون الأسبوعية وعمليات مسح الباركود",
    chartSubtitleEn: "Real-time bin & lot tracking across Khartoum, Omdurman & Port Sudan",
    chartSubtitleAr: "تتبع فوري للمواقع وأرقام التشغيلات عبر الخرطوم وأم درمان وبورتسودان",
    chartPrimaryLegendEn: "Inbound Receipts & Transfers",
    chartPrimaryLegendAr: "أذونات الاستلام والتحويل",
    chartSecondaryLegendEn: "Verified Outbound Picks",
    chartSecondaryLegendAr: "أوامر الصرف المفحوصة بالباركود",
    chartBars: [
      { labelEn: "W1", labelAr: "أسبوع 1", primaryPct: 64, secondaryPct: 60, valueLabel: "410" },
      { labelEn: "W2", labelAr: "أسبوع 2", primaryPct: 72, secondaryPct: 68, valueLabel: "465" },
      { labelEn: "W3", labelAr: "أسبوع 3", primaryPct: 69, secondaryPct: 66, valueLabel: "440" },
      { labelEn: "W4", labelAr: "أسبوع 4", primaryPct: 84, secondaryPct: 81, valueLabel: "530" },
      { labelEn: "W5", labelAr: "أسبوع 5", primaryPct: 90, secondaryPct: 87, valueLabel: "590" },
      { labelEn: "W6", labelAr: "أسبوع 6", primaryPct: 97, secondaryPct: 95, valueLabel: "642" },
    ],
    branchSplitTitleEn: "Stock Valuation by Warehouse",
    branchSplitTitleAr: "قيمة المخزون حسب المستودع",
    branchSplits: [
      { nameEn: "Khartoum Central Depot", nameAr: "المستودع المركزي — الخرطوم", pct: 48, amount: "1,180 SKUs", color: "#00D1B4" },
      { nameEn: "Port Sudan Bonded & Port WH", nameAr: "مستودع الميناء — بورتسودان", pct: 35, amount: "860 SKUs", color: "#9C678F" },
      { nameEn: "Omdurman Distribution Store", nameAr: "مستودع توزيع أم درمان", pct: 17, amount: "410 SKUs", color: "#38BDF8" },
    ],
    metrics: [
      {
        labelEn: "Active Tracked SKUs",
        labelAr: "الأصناف المسجلة عبر الفروع",
        valueEn: "2,450 SKUs",
        valueAr: "2,450 صنفاً",
        deltaEn: "Lot, serial & expiry controlled",
        deltaAr: "تتبع أرقام التشغيلات والصلاحية",
        sparkHeights: [60, 64, 68, 74, 80, 88, 95],
      },
      {
        labelEn: "Handheld Barcode Scans",
        labelAr: "عمليات مسح الباركود اليوم",
        valueEn: "386 Scans",
        valueAr: "386 عملية مسح",
        deltaEn: "Zero picking mismatches today",
        deltaAr: "صفر أخطاء في تجهيز الطلبات",
        sparkHeights: [42, 56, 61, 70, 78, 86, 98],
      },
      {
        labelEn: "Inter-Branch Transfers",
        labelAr: "التحويلات المخزنية بين الفروع",
        valueEn: "9 In Transit",
        valueAr: "9 قيد النقل",
        deltaEn: "Port Sudan → Khartoum & Omdurman",
        deltaAr: "بورتسودان ← الخرطوم وأم درمان",
        sparkHeights: [50, 55, 62, 58, 74, 82, 90],
      },
      {
        labelEn: "Auto-Replenishment Rules",
        labelAr: "تنبيهات إعادة الطلب الآلية",
        valueEn: "4 RFQs",
        valueAr: "4 طلبات شراء",
        deltaEn: "Triggered by min-stock thresholds",
        deltaAr: "توليد تلقائي عند الحد الأدنى",
        sparkHeights: [35, 45, 50, 62, 68, 75, 84],
      },
    ],
    colRefEn: "Transfer Ref",
    colRefAr: "مرجع الحركة",
    colPartnerEn: "Operation / Source",
    colPartnerAr: "نوع العملية / المصدر",
    colBranchEn: "Source → Destination",
    colBranchAr: "من موقع ← إلى موقع",
    colActivityEn: "Scanner Verification",
    colActivityAr: "التحقق بالباركود",
    colTotalEn: "Units",
    colTotalAr: "الوحدات",
    colStatusEn: "Odoo Status",
    colStatusAr: "حالة النظام",
    rows: [
      {
        ref: "WH/OUT/0412",
        dateEn: "Today, 11:05",
        dateAr: "اليوم، 11:05",
        partnerEn: "Delivery Order · SO-2048",
        partnerAr: "إذن صرف بضاعة · SO-2048",
        branchEn: "KRT/Stock/Bin-A4 → Dispatch Bay",
        branchAr: "مخزن الخرطوم A4 ← صالة الشحن",
        repInitials: "AH",
        repNameEn: "A. Hassan",
        repNameAr: "ع. حسن",
        activityEn: "24/24 Scanned via Zebra PDA",
        activityAr: "تم مسح 24/24 عبر قارئ الباركود",
        amount: "24 Units",
        statusEn: "Done · Released",
        statusAr: "مكتمل · تم الإخراج",
        badgeStyle: "emerald",
      },
      {
        ref: "WH/INT/0109",
        dateEn: "Today, 08:30",
        dateAr: "اليوم، 08:30",
        partnerEn: "Inter-Branch Stock Replenishment",
        partnerAr: "تغذية مخزنية بين الفروع",
        branchEn: "PZU/Port Depot → KRT/Main WH",
        branchAr: "مستودع بورتسودان ← المقر الرئيسي",
        repInitials: "OM",
        repNameEn: "O. Musa",
        repNameAr: "ع. موسى",
        activityEn: "Waybill & Seal Logged",
        activityAr: "توثيق البوليصة والختم",
        amount: "180 Units",
        statusEn: "In Transit",
        statusAr: "قيد النقل",
        badgeStyle: "purple",
      },
      {
        ref: "WH/IN/0294",
        dateEn: "Yesterday",
        dateAr: "أمس",
        partnerEn: "Supplier Shipment Receipt (PO-0881)",
        partnerAr: "استلام شحنة مورد (PO-0881)",
        branchEn: "Vendor Dock → PZU/Bonded Zone",
        branchAr: "رصيف الموردين ← مخزن بورتسودان",
        repInitials: "AH",
        repNameEn: "A. Hassan",
        repNameAr: "ع. حسن",
        activityEn: "Lot & Serial Tags Printed",
        activityAr: "طباعة ملصقات الباركود والتشغيلات",
        amount: "450 Units",
        statusEn: "Validated",
        statusAr: "تمت المطابقة والاستلام",
        badgeStyle: "sky",
      },
      {
        ref: "OP/MIN/0042",
        dateEn: "Auto-Rule",
        dateAr: "قاعدة آلية",
        partnerEn: "Minimum Stock Trigger · Omdurman",
        partnerAr: "تنبيه الحد الأدنى للمخزون · أم درمان",
        branchEn: "OMD/Retail Store → Procurement",
        branchAr: "فرع أم درمان ← إدارة المشتريات",
        repInitials: "SYS",
        repNameEn: "Odoo Bot",
        repNameAr: "نظام Odoo",
        activityEn: "Draft PO Generated",
        activityAr: "تم إنشاء مسودة أمر شراء",
        amount: "60 Units",
        statusEn: "RFQ Queued",
        statusAr: "بانتظار اعتماد الشراء",
        badgeStyle: "amber",
      },
    ],
  },
  {
    key: "accounting",
    appShortEn: "Accounting",
    appShortAr: "المحاسبة",
    appTitleEn: "Odoo Accounting & Finance",
    appTitleAr: "المحاسبة والمالية · Odoo Accounting",
    breadcrumbEn: "Accounting / Journals, Reconciliation & Cost Centers",
    breadcrumbAr: "المحاسبة / اليوميات والمطابقة البنكية ومراكز التكلفة",
    newButtonEn: "New Journal Entry",
    newButtonAr: "قيد يومية جديد",
    filterChip1En: "Posted Entries",
    filterChip1Ar: "القيود المرحّلة",
    filterChip2En: "Multi-Currency (SDG / USD)",
    filterChip2Ar: "متعدد العملات (ج.س / دولار)",
    chartTitleEn: "Receivables, Payables & Reconciled Cash Flow",
    chartTitleAr: "المقبوضات والمدفوعات والتدفقات النقدية المطابقة",
    chartSubtitleEn: "Automated journal posting from Odoo Sales, POS & Inventory moves",
    chartSubtitleAr: "ترحيل قيود تلقائي من حركات المبيعات ونقاط البيع والمستودعات",
    chartPrimaryLegendEn: "Collected & Reconciled",
    chartPrimaryLegendAr: "المحصّل والمطابق بنكياً",
    chartSecondaryLegendEn: "3-Way Matched Payables",
    chartSecondaryLegendAr: "فواتير الموردين المطابقة",
    chartBars: [
      { labelEn: "May", labelAr: "مايو", primaryPct: 62, secondaryPct: 48, valueLabel: "$54k" },
      { labelEn: "Jun", labelAr: "يونيو", primaryPct: 70, secondaryPct: 52, valueLabel: "$63k" },
      { labelEn: "Jul", labelAr: "يوليو", primaryPct: 68, secondaryPct: 50, valueLabel: "$61k" },
      { labelEn: "Aug", labelAr: "أغسطس", primaryPct: 82, secondaryPct: 59, valueLabel: "$78k" },
      { labelEn: "Sep", labelAr: "سبتمبر", primaryPct: 88, secondaryPct: 63, valueLabel: "$85k" },
      { labelEn: "Oct", labelAr: "أكتوبر", primaryPct: 95, secondaryPct: 68, valueLabel: "$98k" },
    ],
    branchSplitTitleEn: "Cost Center & Journal Status",
    branchSplitTitleAr: "حالة مراكز التكلفة واليوميات",
    branchSplits: [
      { nameEn: "Customer Invoices (AR)", nameAr: "فواتير العملاء والذمم المدينة", pct: 56, amount: "97.2% Reconciled", color: "#00D1B4" },
      { nameEn: "Bank & Treasury Journals", nameAr: "يوميات البنوك والخزينة", pct: 28, amount: "Synced Daily", color: "#9C678F" },
      { nameEn: "Vendor 3-Way Match (AP)", nameAr: "المطابقة الثلاثية للموردين", pct: 16, amount: "100% Verified", color: "#38BDF8" },
    ],
    metrics: [
      {
        labelEn: "Invoices Posted Today",
        labelAr: "الفواتير المرحّلة اليوم",
        valueEn: "39 Posted",
        valueAr: "39 فاتورة",
        deltaEn: "Auto-generated from dispatch",
        deltaAr: "توليد تلقائي من أذونات التسليم",
        sparkHeights: [48, 55, 63, 71, 79, 88, 96],
      },
      {
        labelEn: "Bank Reconciliation",
        labelAr: "مطابقة البنوك والخزينة",
        valueEn: "97.2%",
        valueAr: "97.2%",
        deltaEn: "Automated statement matching",
        deltaAr: "مطابقة آلية لكشوفات الحساب",
        sparkHeights: [72, 78, 82, 85, 90, 94, 97],
      },
      {
        labelEn: "3-Way Bill Matching",
        labelAr: "المطابقة الثلاثية للمشتريات",
        valueEn: "100%",
        valueAr: "100%",
        deltaEn: "PO ↔ Receipt ↔ Vendor Bill",
        deltaAr: "أمر الشراء ↔ الاستلام ↔ الفاتورة",
        sparkHeights: [85, 88, 90, 92, 95, 98, 100],
      },
      {
        labelEn: "Branch P&L Reporting",
        labelAr: "تقارير الأرباح ومراكز التكلفة",
        valueEn: "Real-Time",
        valueAr: "فوري ولحظي",
        deltaEn: "Analytic accounting by branch",
        deltaAr: "محاسبة تحليلية لكل فرع",
        sparkHeights: [60, 68, 74, 80, 86, 92, 99],
      },
    ],
    colRefEn: "Journal Entry",
    colRefAr: "رقم القيد / الفاتورة",
    colPartnerEn: "Partner / Account",
    colPartnerAr: "العميل / الحساب المالي",
    colBranchEn: "Journal & Cost Center",
    colBranchAr: "اليومية ومركز التكلفة",
    colActivityEn: "Audit & Match",
    colActivityAr: "التدقيق والمطابقة",
    colTotalEn: "Amount",
    colTotalAr: "المبلغ",
    colStatusEn: "Odoo Status",
    colStatusAr: "حالة النظام",
    rows: [
      {
        ref: "INV/2026/0891",
        dateEn: "Today, 10:44",
        dateAr: "اليوم، 10:44",
        partnerEn: "Al Manshiya Distribution Co.",
        partnerAr: "شركة المنشية للتوزيع والتجارة",
        branchEn: "Customer Invoices · Khartoum HQ",
        branchAr: "فواتير العملاء · المقر الرئيسي",
        repInitials: "FA",
        repNameEn: "F. Amin",
        repNameAr: "ف. أمين",
        activityEn: "Linked to SO-2048 & WH/OUT",
        activityAr: "مرتبطة بـ SO-2048 وإذن الصرف",
        amount: "$14,850.00",
        statusEn: "Posted to Ledger",
        statusAr: "مرحّل في دفتر الأستاذ",
        badgeStyle: "emerald",
      },
      {
        ref: "BNK1/2026/0314",
        dateEn: "Today, 10:15",
        dateAr: "اليوم، 10:15",
        partnerEn: "Corporate Bank Settlement #992",
        partnerAr: "تسوية تحصيل بنكي مؤسسي #992",
        branchEn: "Bank & Cash · Treasury KRT",
        branchAr: "البنوك والخزينة · الخرطوم",
        repInitials: "FA",
        repNameEn: "F. Amin",
        repNameAr: "ف. أمين",
        activityEn: "Auto-Matched to 3 Invoices",
        activityAr: "مطابقة آلية مع 3 فواتير",
        amount: "$28,400.00",
        statusEn: "Reconciled",
        statusAr: "تمت المطابقة البنكية",
        badgeStyle: "purple",
      },
      {
        ref: "BILL/2026/0194",
        dateEn: "Yesterday",
        dateAr: "أمس",
        partnerEn: "Port Sudan Freight & Customs Co.",
        partnerAr: "شركة بورتسودان للشحن والتخليص",
        branchEn: "Vendor Bills · Port Sudan Hub",
        branchAr: "فواتير الموردين · مركز بورتسودان",
        repInitials: "NK",
        repNameEn: "N. Kamal",
        repNameAr: "ن. كمال",
        activityEn: "3-Way Match Verified",
        activityAr: "مطابقة ثلاثية معتمدة",
        amount: "$6,420.00",
        statusEn: "Paid & Posted",
        statusAr: "مدفوعة ومرحّلة",
        badgeStyle: "sky",
      },
      {
        ref: "POS/2026/1108",
        dateEn: "Yesterday",
        dateAr: "أمس",
        partnerEn: "Consolidated Retail Z-Report Closing",
        partnerAr: "إغلاق الوردية الموحد لنقاط البيع",
        branchEn: "POS Journal · Omdurman & KRT",
        branchAr: "يومية نقاط البيع · أم درمان والخرطوم",
        repInitials: "SYS",
        repNameEn: "Odoo POS",
        repNameAr: "نقطة بيع Odoo",
        activityEn: "Cash & Card Balanced",
        activityAr: "مطابقة النقدية والشبكة",
        amount: "$8,910.00",
        statusEn: "Posted",
        statusAr: "تم الترحيل",
        badgeStyle: "emerald",
      },
    ],
  },
  {
    key: "pos",
    appShortEn: "Point of Sale",
    appShortAr: "نقاط البيع",
    appTitleEn: "Odoo POS & Branch Counters",
    appTitleAr: "نقاط البيع والفروع · Odoo POS",
    breadcrumbEn: "Point of Sale / Active Store & Hospitality Sessions",
    breadcrumbAr: "نقاط البيع / جلسات البيع النشطة في المتاجر والمطاعم",
    newButtonEn: "Open POS Session",
    newButtonAr: "فتح جلسة بيع",
    filterChip1En: "18 Active Terminals",
    filterChip1Ar: "18 نقطة بيع نشطة",
    filterChip2En: "Offline-Safe Sync Enabled",
    filterChip2Ar: "مزامنة تعمل مع انقطاع الإنترنت",
    chartTitleEn: "Hourly Counter Checkout Volume & Sync Rate",
    chartTitleAr: "حجم مبيعات الكاشير بالساعة ومعدل المزامنة المخزنية",
    chartSubtitleEn: "Nexora POS & SambaPOS terminals connected to central Odoo Inventory",
    chartSubtitleAr: "محطات Nexora POS وSambaPOS المتصلة بالمخزون المركزي في Odoo",
    chartPrimaryLegendEn: "POS Receipts Completed",
    chartPrimaryLegendAr: "إيصالات البيع المكتملة",
    chartSecondaryLegendEn: "Instant Stock Deductions",
    chartSecondaryLegendAr: "خصم المخزون الفوري",
    chartBars: [
      { labelEn: "10am", labelAr: "10ص", primaryPct: 48, secondaryPct: 48, valueLabel: "78" },
      { labelEn: "12pm", labelAr: "12م", primaryPct: 74, secondaryPct: 74, valueLabel: "118" },
      { labelEn: "2pm", labelAr: "2م", primaryPct: 86, secondaryPct: 86, valueLabel: "142" },
      { labelEn: "4pm", labelAr: "4م", primaryPct: 79, secondaryPct: 79, valueLabel: "126" },
      { labelEn: "6pm", labelAr: "6م", primaryPct: 94, secondaryPct: 94, valueLabel: "164" },
      { labelEn: "8pm", labelAr: "8م", primaryPct: 98, secondaryPct: 98, valueLabel: "182" },
    ],
    branchSplitTitleEn: "Terminal Performance by Location",
    branchSplitTitleAr: "أداء محطات البيع حسب الفرع",
    branchSplits: [
      { nameEn: "Khartoum Flagship Showroom (8 POS)", nameAr: "معرض الخرطوم الرئيسي (8 محطات)", pct: 49, amount: "314 Receipts", color: "#00D1B4" },
      { nameEn: "Omdurman Retail Counters (6 POS)", nameAr: "فروع أم درمان للتجزئة (6 محطات)", pct: 33, amount: "212 Receipts", color: "#9C678F" },
      { nameEn: "Hospitality & Restaurant Floor (4 POS)", nameAr: "قطاع الضيافة والمطاعم (4 محطات)", pct: 18, amount: "114 Orders", color: "#38BDF8" },
    ],
    metrics: [
      {
        labelEn: "Active POS Terminals",
        labelAr: "محطات البيع النشطة",
        valueEn: "18 Online",
        valueAr: "18 متصلة",
        deltaEn: "Offline-resilient local cache",
        deltaAr: "تعمل بكفاءة حتى عند انقطاع الشبكة",
        sparkHeights: [80, 85, 88, 90, 94, 98, 100],
      },
      {
        labelEn: "Receipts Issued Today",
        labelAr: "إيصالات البيع اليوم",
        valueEn: "640 Sales",
        valueAr: "640 إيصالاً",
        deltaEn: "Barcode scan + thermal print",
        deltaAr: "مسح باركود وطباعة حرارية فورية",
        sparkHeights: [44, 58, 66, 74, 82, 91, 98],
      },
      {
        labelEn: "Avg. Checkout Speed",
        labelAr: "متوسط سرعة خدمة العميل",
        valueEn: "18 sec",
        valueAr: "18 ثانية",
        deltaEn: "Touchscreen + handheld scanner",
        deltaAr: "شاشات لمس مع قارئ باركود سريع",
        sparkHeights: [75, 70, 64, 58, 52, 46, 40],
      },
      {
        labelEn: "Shift Z-Report Balance",
        labelAr: "مطابقة إغلاق الوردية (Z-Report)",
        valueEn: "100%",
        valueAr: "100%",
        deltaEn: "Auto-posts to Odoo Accounting",
        deltaAr: "ترحيل آلي ليومية المحاسبة",
        sparkHeights: [90, 92, 94, 96, 98, 100, 100],
      },
    ],
    colRefEn: "Session ID",
    colRefAr: "رقم الجلسة",
    colPartnerEn: "POS Counter / Branch",
    colPartnerAr: "نقطة البيع / الفرع",
    colBranchEn: "Hardware & Peripherals",
    colBranchAr: "الأجهزة الطرفية المتصلة",
    colActivityEn: "Inventory Sync",
    colActivityAr: "مزامنة المخزون",
    colTotalEn: "Shift Sales",
    colTotalAr: "مبيعات الوردية",
    colStatusEn: "Session Status",
    colStatusAr: "حالة الجلسة",
    rows: [
      {
        ref: "POS/KRT/01",
        dateEn: "Open · 08:00",
        dateAr: "مفتوحة · 08:00",
        partnerEn: "Khartoum Flagship Showroom — Counter 1",
        partnerAr: "معرض الخرطوم الرئيسي — كاشير 1",
        branchEn: "Touch Terminal · Barcode · Thermal Printer",
        branchAr: "شاشة لمس · قارئ باركود · طابعة فواتير",
        repInitials: "YS",
        repNameEn: "Y. Salih",
        repNameAr: "ي. صالح",
        activityEn: "Real-Time Stock Deduction",
        activityAr: "خصم فوري من رصيد المعرض",
        amount: "$4,280.00",
        statusEn: "In Progress · Synced",
        statusAr: "الجلسة نشطة · متزامنة",
        badgeStyle: "emerald",
      },
      {
        ref: "POS/OMD/02",
        dateEn: "Open · 08:30",
        dateAr: "مفتوحة · 08:30",
        partnerEn: "Omdurman Commercial Counter — POS 2",
        partnerAr: "فرع أم درمان التجاري — نقطة بيع 2",
        branchEn: "Dual-Screen POS · Cash Drawer · Scanner",
        branchAr: "نقطة بيع بشاشتين · درج نقدية · باركود",
        repInitials: "HM",
        repNameEn: "H. Mahmoud",
        repNameAr: "هـ. محمود",
        activityEn: "Customer Loyalty & Promo Applied",
        activityAr: "تطبيق العروض ونقاط الولاء",
        amount: "$3,150.00",
        statusEn: "Online · Balanced",
        statusAr: "متصل · الرصيد مطابق",
        badgeStyle: "purple",
      },
      {
        ref: "POS/HSP/03",
        dateEn: "Open · 11:00",
        dateAr: "مفتوحة · 11:00",
        partnerEn: "Hospitality & Dining Floor (SambaPOS)",
        partnerAr: "صالة الضيافة والمطاعم (SambaPOS)",
        branchEn: "Table Map · Kitchen Display (KDS)",
        branchAr: "خريطة الطاولات · شاشة المطبخ الذكية",
        repInitials: "KT",
        repNameEn: "K. Tariq",
        repNameAr: "خ. طارق",
        activityEn: "Recipe Ingredients Deducted",
        activityAr: "خصم تلقائي لمكونات الوجبات",
        amount: "$1,940.00",
        statusEn: "Active Service",
        statusAr: "الخدمة نشطة",
        badgeStyle: "sky",
      },
      {
        ref: "POS/PZU/04",
        dateEn: "Closed · Z-089",
        dateAr: "مغلقة · Z-089",
        partnerEn: "Port Sudan Wholesale Counter",
        partnerAr: "نقطة مبيعات الجملة — بورتسودان",
        branchEn: "Barcode Handheld · Waybill Printer",
        branchAr: "قارئ باركود لاسلكي · طابعة بوالص",
        repInitials: "AB",
        repNameEn: "A. Bakri",
        repNameAr: "أ. بكري",
        activityEn: "Posted to Odoo Accounting",
        activityAr: "تم الترحيل لمحاسبة Odoo",
        amount: "$5,620.00",
        statusEn: "Closed & Posted",
        statusAr: "مغلقة ومرحّلة",
        badgeStyle: "emerald",
      },
    ],
  },
];

export function OdooDashboardShowcase({ locale }: OdooDashboardShowcaseProps) {
  const isAr = locale === "ar";
  const [activeKey, setActiveKey] = useState<ModuleKey>("sales");
  const [selectedRowRef, setSelectedRowRef] = useState<string | null>(null);

  const activeModule =
    ODOO_MODULES.find((m) => m.key === activeKey) || ODOO_MODULES[0];

  const getModuleIcon = (key: ModuleKey) => {
    switch (key) {
      case "sales":
        return ShoppingCart;
      case "inventory":
        return PackageCheck;
      case "accounting":
        return Receipt;
      case "pos":
        return Store;
    }
  };

  const getBadgeClasses = (style: OdooTableRow["badgeStyle"]) => {
    switch (style) {
      case "emerald":
        return "bg-[#00D1B4]/15 text-[#00D1B4] border-[#00D1B4]/35";
      case "purple":
        return "bg-[#9C678F]/25 text-[#E5B8D9] border-[#9C678F]/50";
      case "sky":
        return "bg-sky-500/15 text-sky-300 border-sky-400/35";
      case "amber":
        return "bg-amber-500/15 text-amber-300 border-amber-400/35";
    }
  };

  return (
    <section
      id="odoo-dashboard-preview"
      aria-label={
        isAr
          ? "معاينة لوحة تحكم Odoo ERP المخصصة لشركة نكسورا تك"
          : "Interactive Odoo ERP Dashboard Tailored by Nexora Tech"
      }
      className="py-16 sm:py-20 lg:py-24 bg-[#0D1111] text-white border-b border-white/10"
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        {/* Top Section Header + Odoo Certified Partner Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141C1B] border border-[#00D1B4]/35 text-xs font-mono uppercase tracking-wider text-[#00D1B4]">
                <Activity className="w-3.5 h-3.5" />
                <span>
                  {isAr
                    ? "واجهة Odoo Enterprise الحقيقية · بتكوين نكسورا تك"
                    : "AUTHENTIC ODOO ENTERPRISE UI · TAILORED BY NEXORA TECH"}
                </span>
              </span>
              <OdooPartnerBadge locale={locale} variant="header" />
            </div>

            <h2 className="nx-h1 text-white">
              {isAr
                ? "لوحة تحكم Odoo ERP الحقيقية — مخصّصة لفروعك ومستودعاتك وعملياتك في السودان"
                : "Inside Your Odoo ERP Workspace — Tailored by Nexora Tech for Multi-Branch Operations"}
            </h2>

            <p className="nx-lead text-[#C8D6D3]">
              {isAr
                ? "استكشف كيف تعمل واجهة Odoo Enterprise (المبيعات، المخزون، المحاسبة، ونقاط البيع) بعد تهيئتها بواسطة مهندسي نكسورا تك لربط المقر الرئيسي بالخرطوم وبورتسودان وأم درمان في شاشة واحدة."
                : "Explore how Odoo’s native Enterprise interface looks and works when configured by Nexora Tech — connecting sales orders, barcode warehouse transfers, accounting journals, and POS counters across Khartoum, Port Sudan, and Omdurman."}
            </p>
          </div>

          <Link
            href={`${localizePath(locale, "/contact")}?solution=enterprise-business`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#00D1B4] text-[#0D1111] font-bold text-sm hover:bg-[#5CE6D0] transition-colors shrink-0 self-start lg:self-end"
          >
            <span>
              {isAr ? "اطلب عرضاً حياً لنظام Odoo" : "Request a Live Odoo Demo"}
            </span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180" />
          </Link>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════
            AUTHENTIC ODOO 17/18 ENTERPRISE WEB CLIENT SHELL (TAILORED TO NEXORA)
           ═══════════════════════════════════════════════════════════════════════ */}
        <div className="rounded-3xl bg-[#111717] border border-white/15 shadow-[0_32px_90px_rgba(0,0,0,0.75)] overflow-hidden">
          {/* ── 1. NATIVE ODOO ENTERPRISE TOP SYSTRAY NAVBAR (Odoo Aubergine + Nexora Teal) ── */}
          <div className="bg-gradient-to-r from-[#2A1826] via-[#211520] to-[#161F1E] border-b border-white/10 px-3 sm:px-5 py-2.5 flex items-center justify-between gap-3">
            {/* Left/Start: App Matrix Icon + Odoo Wordmark + Module Navigation Tabs */}
            <div className="flex items-center gap-2 sm:gap-4 min-w-0 overflow-x-auto no-scrollbar">
              {/* App Switcher 9-dot icon + Odoo logo */}
              <div className="flex items-center gap-2.5 shrink-0 pe-2 border-e border-white/15">
                <span
                  className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 inline-flex items-center justify-center text-[#E5B8D9]"
                  title="Odoo App Switcher"
                >
                  <LayoutGrid className="w-4 h-4" />
                </span>
                <span
                  dir="ltr"
                  className="font-sans font-extrabold tracking-tight text-lg leading-none select-none"
                >
                  <span className="text-[#C785B8]">o</span>
                  <span className="text-white">doo</span>
                </span>
              </div>

              {/* Odoo Top Menu Bar Module Tabs */}
              <div
                role="tablist"
                aria-label={isAr ? "تطبيقات نظام Odoo" : "Odoo Enterprise Apps"}
                className="flex items-center gap-1 sm:gap-1.5 shrink-0"
              >
                {ODOO_MODULES.map((mod) => {
                  const Icon = getModuleIcon(mod.key);
                  const isSelected = mod.key === activeKey;
                  return (
                    <button
                      key={mod.key}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => {
                        setActiveKey(mod.key);
                        setSelectedRowRef(null);
                      }}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                        isSelected
                          ? "bg-[#00D1B4] text-[#0D1111] shadow-sm"
                          : "text-[#E6DCE4] hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{isAr ? mod.appShortAr : mod.appShortEn}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right/End: Odoo Systray (Chatter, Activities, Multi-Company Switcher, Nexora User) */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              {/* Systray Icons */}
              <div className="flex items-center gap-2 text-[#D6E2DF]/80">
                <span className="relative p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span className="absolute -top-1 -end-1 w-3.5 h-3.5 rounded-full bg-[#00D1B4] text-[#0D1111] text-[9px] font-bold flex items-center justify-center">
                    3
                  </span>
                </span>
                <span className="relative p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="absolute -top-1 -end-1 w-3.5 h-3.5 rounded-full bg-[#9C678F] text-white text-[9px] font-bold flex items-center justify-center">
                    5
                  </span>
                </span>
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/10">
                  <Bell className="w-3.5 h-3.5" />
                </span>
              </div>

              <span className="h-4 w-px bg-white/15" aria-hidden="true" />

              {/* Multi-Company Selector Pill (Classic Odoo Enterprise Systray Element) */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#0D1111]/70 border border-white/15 text-[11px] text-[#E6F0EE]">
                <Building2 className="w-3.5 h-3.5 text-[#00D1B4] shrink-0" />
                <span className="font-semibold">
                  {isAr
                    ? "نكسورا تك السودان (الخرطوم · بورتسودان · أم درمان)"
                    : "Nexora Tech Sudan (KRT · PZU · OMD)"}
                </span>
              </div>

              {/* User Avatar Badge */}
              <div className="inline-flex items-center gap-2 ps-1 pe-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs">
                <span className="w-5 h-5 rounded-full bg-[#00D1B4] text-[#0D1111] font-mono font-bold text-[10px] inline-flex items-center justify-center">
                  NX
                </span>
                <span className="text-[11px] font-medium text-white">
                  {isAr ? "مدير العمليات" : "Ops Admin"}
                </span>
              </div>
            </div>
          </div>

          {/* ── 2. ODOO CONTROL PANEL (Action Buttons, Breadcrumbs, Search/Filter Facets, View Switcher) ── */}
          <div className="bg-[#151D1C] border-b border-white/10 px-4 sm:px-6 py-3 flex flex-col lg:flex-row lg:items-center justify-between gap-3">
            {/* Left/Start: "New" Button + Export + Odoo Breadcrumb Path */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#9C678F] text-white text-xs font-bold shadow-sm">
                <Plus className="w-3.5 h-3.5" />
                <span>
                  {isAr ? activeModule.newButtonAr : activeModule.newButtonEn}
                </span>
              </span>

              <span className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-[#0D1111] border border-white/15 text-xs text-[#C8D6D3]">
                <Download className="w-3.5 h-3.5 text-[#00D1B4]" />
                <span className="hidden sm:inline">
                  {isAr ? "تصدير XLSX" : "Export XLSX"}
                </span>
              </span>

              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-bold text-white ps-1">
                <span className="text-[#C8D6D3] font-normal">
                  {isAr ? activeModule.breadcrumbAr : activeModule.breadcrumbEn}
                </span>
              </div>
            </div>

            {/* Right/End: Odoo Search Bar with Facet Chips + Pager + View Switcher Icons */}
            <div className="flex flex-wrap items-center gap-2 justify-between lg:justify-end">
              {/* Odoo Search Bar with Facets */}
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#0D1111] border border-white/15 text-xs min-w-[240px] sm:min-w-[300px]">
                <Search className="w-3.5 h-3.5 text-[#9BB0AC] shrink-0" />
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#9C678F]/30 border border-[#9C678F]/50 text-[11px] text-[#F3D9EC] whitespace-nowrap">
                  <Filter className="w-2.5 h-2.5" />
                  <span>
                    {isAr
                      ? activeModule.filterChip1Ar
                      : activeModule.filterChip1En}
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#00D1B4]/15 border border-[#00D1B4]/35 text-[11px] text-[#00D1B4] whitespace-nowrap">
                  <span>
                    {isAr
                      ? activeModule.filterChip2Ar
                      : activeModule.filterChip2En}
                  </span>
                </span>
              </div>

              {/* Odoo Pager + View Switcher (Dashboard / List / Kanban / Graph) */}
              <div className="hidden sm:flex items-center gap-2">
                <span
                  dir="ltr"
                  className="text-[11px] font-mono text-[#9BB0AC] px-1.5"
                >
                  1-4 / 148
                </span>
                <div className="inline-flex items-center rounded-lg bg-[#0D1111] border border-white/15 p-0.5">
                  <span className="p-1 text-[#9BB0AC]">
                    <ChevronLeft className="w-3.5 h-3.5 rtl:rotate-180" />
                  </span>
                  <span className="p-1 text-[#9BB0AC]">
                    <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                  </span>
                </div>
                <div
                  className="inline-flex items-center rounded-lg bg-[#0D1111] border border-white/15 p-0.5"
                  aria-label="Odoo View Type"
                >
                  <span
                    className="p-1.5 rounded-md bg-[#00D1B4]/20 text-[#00D1B4]"
                    title="Spreadsheet Dashboard View"
                  >
                    <BarChart3 className="w-3.5 h-3.5" />
                  </span>
                  <span
                    className="p-1.5 rounded-md text-[#9BB0AC]"
                    title="List View"
                  >
                    <List className="w-3.5 h-3.5" />
                  </span>
                  <span
                    className="p-1.5 rounded-md text-[#9BB0AC]"
                    title="Kanban View"
                  >
                    <LayoutGrid className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── 3. ODOO SPREADSHEET BI & OPERATIONS WORKSPACE BODY ── */}
          <div className="p-4 sm:p-6 lg:p-7 space-y-6 bg-[#0F1515]">
            {/* Row A: 4 Native Odoo KPI Scorecards with Mini Sparklines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3.5">
              {activeModule.metrics.map((metric) => (
                <div
                  key={metric.labelEn}
                  className="rounded-2xl bg-[#151D1C] border border-white/10 p-4 flex flex-col justify-between gap-3 hover:border-[#00D1B4]/35 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[11px] font-mono uppercase tracking-wider text-[#9BB0AC]">
                        {isAr ? metric.labelAr : metric.labelEn}
                      </p>
                      <p className="text-2xl sm:text-[26px] font-bold text-white tracking-tight mt-1">
                        {isAr ? metric.valueAr : metric.valueEn}
                      </p>
                    </div>

                    {/* Mini Odoo KPI Bar Sparkline */}
                    <div
                      className="flex items-end gap-1 h-9 pt-1 shrink-0"
                      aria-hidden="true"
                    >
                      {metric.sparkHeights.map((h, i) => (
                        <span
                          key={i}
                          style={{ height: `${h}%` }}
                          className={`w-1.5 rounded-t ${
                            i === metric.sparkHeights.length - 1
                              ? "bg-[#00D1B4]"
                              : i >= metric.sparkHeights.length - 3
                                ? "bg-[#00D1B4]/60"
                                : "bg-white/15"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#00D1B4] font-medium border-t border-white/5 pt-2">
                    <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                    <span className="truncate">
                      {isAr ? metric.deltaAr : metric.deltaEn}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Row B: Odoo Analytical Bar Chart + Sudan Multi-Branch Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Left 7 Cols: Native Odoo Bar/Line Chart Widget */}
              <div className="lg:col-span-7 rounded-2xl bg-[#151D1C] border border-white/10 p-4 sm:p-5 flex flex-col justify-between gap-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {isAr
                        ? activeModule.chartTitleAr
                        : activeModule.chartTitleEn}
                    </h3>
                    <p className="text-xs text-[#9BB0AC] mt-0.5">
                      {isAr
                        ? activeModule.chartSubtitleAr
                        : activeModule.chartSubtitleEn}
                    </p>
                  </div>

                  {/* Chart Legend */}
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-[#C8D6D3]">
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#00D1B4]" />
                      <span>
                        {isAr
                          ? activeModule.chartPrimaryLegendAr
                          : activeModule.chartPrimaryLegendEn}
                      </span>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-sm bg-[#9C678F]" />
                      <span>
                        {isAr
                          ? activeModule.chartSecondaryLegendAr
                          : activeModule.chartSecondaryLegendEn}
                      </span>
                    </span>
                  </div>
                </div>

                {/* Bar Chart Canvas */}
                <div className="grid grid-cols-6 gap-2 sm:gap-4 items-end h-36 pt-4 px-2 border-b border-white/10">
                  {activeModule.chartBars.map((bar) => (
                    <div
                      key={bar.labelEn}
                      className="flex flex-col items-center gap-1.5 h-full justify-end group"
                    >
                      <span
                        dir="ltr"
                        className="text-[10px] font-mono text-[#C8D6D3] opacity-85 group-hover:text-[#00D1B4] transition-colors"
                      >
                        {bar.valueLabel}
                      </span>
                      <div className="w-full max-w-[44px] flex items-end justify-center gap-1 h-24">
                        <div
                          style={{ height: `${bar.primaryPct}%` }}
                          className="w-1/2 rounded-t-md bg-gradient-to-t from-[#00D1B4]/70 to-[#00D1B4] transition-all duration-300"
                        />
                        <div
                          style={{ height: `${bar.secondaryPct}%` }}
                          className="w-1/2 rounded-t-md bg-gradient-to-t from-[#9C678F]/70 to-[#C785B8] transition-all duration-300"
                        />
                      </div>
                      <span className="text-[11px] font-mono text-[#9BB0AC] pb-1">
                        {isAr ? bar.labelAr : bar.labelEn}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right 5 Cols: Multi-Branch Sudan Hub Performance & Nexora Customizations */}
              <div className="lg:col-span-5 rounded-2xl bg-[#151D1C] border border-white/10 p-4 sm:p-5 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      {isAr
                        ? activeModule.branchSplitTitleAr
                        : activeModule.branchSplitTitleEn}
                    </h3>
                    <span className="px-2 py-0.5 rounded bg-[#00D1B4]/15 border border-[#00D1B4]/30 text-[10px] font-mono text-[#00D1B4]">
                      {isAr ? "متصل لحظياً" : "Live Multi-Branch"}
                    </span>
                  </div>
                  <p className="text-xs text-[#9BB0AC] mt-0.5">
                    {isAr
                      ? "توزيع العمليات حسب الفروع والمستودعات المربوطة عبر نكسورا تك"
                      : "Configured analytic tags across Sudan operating branches"}
                  </p>
                </div>

                <div className="space-y-3.5 my-auto">
                  {activeModule.branchSplits.map((hub) => (
                    <div key={hub.nameEn} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-white">
                          {isAr ? hub.nameAr : hub.nameEn}
                        </span>
                        <span
                          dir="ltr"
                          className="font-mono text-[#C8D6D3] font-bold"
                        >
                          {hub.amount}{" "}
                          <span className="text-[#9BB0AC] font-normal">
                            ({hub.pct}%)
                          </span>
                        </span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-[#0D1111] overflow-hidden border border-white/5">
                        <div
                          style={{
                            width: `${hub.pct}%`,
                            backgroundColor: hub.color,
                          }}
                          className="h-full rounded-full transition-all duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Nexora Tailored Integration Note */}
                <div className="rounded-xl bg-[#0D1111] border border-white/10 px-3 py-2.5 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2 text-[#C8D6D3]">
                    <CheckCircle2 className="w-4 h-4 text-[#00D1B4] shrink-0" />
                    <span>
                      {isAr
                        ? "مربوط مع قارئات الباركود وطابعات الفواتير"
                        : "Synced with barcode handhelds & receipt printers"}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-[#00D1B4] uppercase shrink-0">
                    Nexora Sync
                  </span>
                </div>
              </div>
            </div>

            {/* Row C: Authentic Odoo Enterprise List View (`o_list_table`) */}
            <div className="rounded-2xl bg-[#151D1C] border border-white/10 overflow-hidden">
              <div className="px-4 py-3 bg-[#192221] border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00D1B4]" />
                  <h3 className="text-xs font-mono uppercase tracking-wider text-[#00D1B4] font-bold">
                    {isAr
                      ? `سجلات ${activeModule.appTitleAr} الحية (واجهة قائمة Odoo)`
                      : `LIVE ${activeModule.appTitleEn.toUpperCase()} RECORDS (ODOO LIST VIEW)`}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#9BB0AC]">
                  {isAr
                    ? "انقر على أي سجل لمعاينة الترابط"
                    : "Click any record row to inspect workflow sync"}
                </span>
              </div>

              {/* Desktop / Tablet Odoo List Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-start border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 bg-[#111717] text-[11px] font-mono uppercase text-[#9BB0AC]">
                      <th className="py-2.5 ps-4 pe-2 w-8">
                        <span className="w-3.5 h-3.5 rounded border border-white/25 inline-block align-middle" />
                      </th>
                      <th className="py-2.5 px-3 text-start">
                        {isAr ? activeModule.colRefAr : activeModule.colRefEn}
                      </th>
                      <th className="py-2.5 px-3 text-start">
                        {isAr
                          ? activeModule.colPartnerAr
                          : activeModule.colPartnerEn}
                      </th>
                      <th className="py-2.5 px-3 text-start hidden md:table-cell">
                        {isAr
                          ? activeModule.colBranchAr
                          : activeModule.colBranchEn}
                      </th>
                      <th className="py-2.5 px-3 text-start hidden lg:table-cell">
                        {isAr
                          ? activeModule.colActivityAr
                          : activeModule.colActivityEn}
                      </th>
                      <th className="py-2.5 px-3 text-end">
                        {isAr
                          ? activeModule.colTotalAr
                          : activeModule.colTotalEn}
                      </th>
                      <th className="py-2.5 ps-3 pe-4 text-end">
                        {isAr
                          ? activeModule.colStatusAr
                          : activeModule.colStatusEn}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                    {activeModule.rows.map((row) => {
                      const isRowSelected = selectedRowRef === row.ref;
                      return (
                        <tr
                          key={row.ref}
                          onClick={() =>
                            setSelectedRowRef(
                              isRowSelected ? null : row.ref,
                            )
                          }
                          className={`cursor-pointer transition-colors ${
                            isRowSelected
                              ? "bg-[#00D1B4]/10"
                              : "hover:bg-white/[0.03]"
                          }`}
                        >
                          <td className="py-3 ps-4 pe-2">
                            <span
                              className={`w-3.5 h-3.5 rounded border inline-flex items-center justify-center ${
                                isRowSelected
                                  ? "bg-[#00D1B4] border-[#00D1B4] text-[#0D1111]"
                                  : "border-white/25"
                              }`}
                            >
                              {isRowSelected && (
                                <CheckCircle2 className="w-2.5 h-2.5" />
                              )}
                            </span>
                          </td>

                          {/* Reference + Timestamp */}
                          <td className="py-3 px-3 whitespace-nowrap">
                            <div
                              dir="ltr"
                              className="font-mono font-bold text-[#00D1B4] text-xs inline-block"
                            >
                              {row.ref}
                            </div>
                            <div className="text-[11px] text-[#9BB0AC]">
                              {isAr ? row.dateAr : row.dateEn}
                            </div>
                          </td>

                          {/* Partner + Representative Avatar */}
                          <td className="py-3 px-3">
                            <div className="font-bold text-white">
                              {isAr ? row.partnerAr : row.partnerEn}
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-[#9BB0AC] mt-0.5">
                              <span className="w-4 h-4 rounded-full bg-[#9C678F]/40 border border-[#9C678F] text-[9px] font-mono font-bold text-white inline-flex items-center justify-center">
                                {row.repInitials}
                              </span>
                              <span>
                                {isAr ? row.repNameAr : row.repNameEn}
                              </span>
                            </div>
                          </td>

                          {/* Operating Branch / Warehouse */}
                          <td className="py-3 px-3 text-xs text-[#C8D6D3] hidden md:table-cell">
                            {isAr ? row.branchAr : row.branchEn}
                          </td>

                          {/* Odoo Next Activity Pill */}
                          <td className="py-3 px-3 hidden lg:table-cell">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0D1111] border border-white/10 text-xs text-[#D6E2DF]">
                              <Clock className="w-3 h-3 text-[#00D1B4] shrink-0" />
                              <span>
                                {isAr ? row.activityAr : row.activityEn}
                              </span>
                            </span>
                          </td>

                          {/* Monetary / Unit Total */}
                          <td
                            dir="ltr"
                            className="py-3 px-3 text-end font-mono font-bold text-white whitespace-nowrap"
                          >
                            {row.amount}
                          </td>

                          {/* Odoo Status Badge */}
                          <td className="py-3 ps-3 pe-4 text-end whitespace-nowrap">
                            <span
                              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-semibold border ${getBadgeClasses(
                                row.badgeStyle,
                              )}`}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-current" />
                              <span>{isAr ? row.statusAr : row.statusEn}</span>
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
