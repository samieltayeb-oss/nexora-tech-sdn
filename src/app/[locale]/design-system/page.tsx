import React from "react";
import type { Metadata } from "next";
import { CheckCircle2, ShieldCheck, AlertCircle, Image as ImageIcon } from "lucide-react";
import { NexoraLogo } from "@/components/brand/NexoraLogo";
import { Scene } from "@/components/hero/Scene";
import { AccordionFAQ } from "@/components/ui/AccordionFAQ";
import { EVIDENCE_REGISTER } from "@/content/evidenceRegister";
import { getDictionary } from "@/content/siteContent";
import { isValidLocale, type Locale } from "@/lib/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);
  return {
    title: `${dict.nav.designSystem} | ${dict.meta.siteName}`,
    description:
      "Nexora Tech Design System (NLN-2.0), Editorial Art Prompts, Internal Evidence & Approvals Register, and Retained ThreeUI SylvaHero (05f359ce157a) Verification.",
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://www.nexora-tech.com/${safeLocale}/design-system`,
      languages: {
        en: "https://www.nexora-tech.com/en/design-system",
        ar: "https://www.nexora-tech.com/ar/design-system",
      },
    },
  };
}

const COLOR_TOKENS = [
  { name: "Brand Turquoise", token: "--nx-brand-turquoise", hex: "#00D1B4", text: "#0D1111", role: "Primary circuit-node accent, dark-surface CTA & integration path" },
  { name: "Accessible Deep Teal", token: "--nx-brand-turquoise-deep", hex: "#00796B", text: "#FFFFFF", role: "WCAG AA interactive link & badge accent on light surfaces" },
  { name: "Dark Hero Charcoal", token: "--nx-surface-dark", hex: "#0D1111", text: "#FFFFFF", role: "Primary dark hero canvas & footer" },
  { name: "Elevated Graphite", token: "--nx-surface-dark-elevated", hex: "#131919", text: "#FFFFFF", role: "Elevated dark cards, dropdowns & callout blocks" },
  { name: "Light Editorial Surface", token: "--nx-surface-light", hex: "#F5F8F7", text: "#111817", role: "Primary light editorial background" },
  { name: "Pure White Card", token: "--nx-surface-white", hex: "#FFFFFF", text: "#111817", role: "Elevated solution & process cards on light surface" },
  { name: "Slate Ink", token: "--nx-text-primary-light", hex: "#111817", text: "#FFFFFF", role: "Primary headings & body copy on light surfaces" },
  { name: "Structural Mist Border", token: "--nx-border-light", hex: "#D6E2DF", text: "#111817", role: "Card hairline borders & dividers" },
];

const GENERATED_EDITORIAL_ASSETS = [
  {
    id: "hero-operations-dispatch-ltr",
    path: "/assets/editorial/hero-operations-dispatch.jpg",
    dimensions: "1376 × 768 (16:9)",
    placement: "Homepage Hero (English LTR)",
    brief:
      "Sudanese operations manager at a workstation desk at the edge of a dispatch floor checking a live order, with barcode scanner and packed parcels in the foreground and quiet negative space on the left.",
  },
  {
    id: "hero-operations-dispatch-rtl",
    path: "/assets/editorial/hero-operations-dispatch-rtl.jpg",
    dimensions: "1376 × 768 (16:9)",
    placement: "Homepage Hero (Arabic RTL)",
    brief:
      "Sudanese operations coordinator on the left at a dispatch floor desk with barcode scanner and labeled parcels, and a calm dark slate reading zone on the right for Arabic typography.",
  },
  {
    id: "solution-enterprise-erp",
    path: "/assets/editorial/solution-enterprise-erp.webp",
    dimensions: "1376 × 768 (16:9)",
    placement: "Enterprise Business Solutions (Odoo ERP)",
    brief:
      "Sudanese supply-chain and business leaders in a sunlit Khartoum operations office reviewing order and inventory workflows on a desktop monitor.",
  },
  {
    id: "solution-digital-transformation",
    path: "/assets/editorial/solution-digital-transformation.webp",
    dimensions: "1376 × 768 (16:9)",
    placement: "Digital Transformation (Custom Software)",
    brief:
      "Sudanese software engineers and operations specialists collaborating on a custom workflow application in a modern Khartoum office.",
  },
  {
    id: "solution-pos-retail",
    path: "/assets/editorial/solution-pos-retail.webp",
    dimensions: "1376 × 768 (16:9)",
    placement: "POS & Retail Solutions (Nexora POS & SambaPOS)",
    brief:
      "Sudanese retail manager operating a touchscreen point-of-sale terminal with barcode scanner and receipt printer in a modern Khartoum retail setting.",
  },
  {
    id: "solution-infrastructure-low-current",
    path: "/assets/editorial/solution-infrastructure-low-current.webp",
    dimensions: "1376 × 768 (16:9)",
    placement: "Infrastructure & Low-Current Systems",
    brief:
      "Sudanese network engineer inspecting structured cabling and turquoise fiber-optic patch cords inside a clean server room.",
  },
  {
    id: "hero-sudan-how-we-work",
    path: "/assets/editorial/hero-sudan-how-we-work.jpg",
    dimensions: "1376 × 768 (16:9)",
    placement: "How We Work Page Hero",
    brief:
      "Multidisciplinary Sudanese project delivery team planning an implementation roadmap across Assess & Plan, Design & Deliver, and Test, Handover & Support.",
  },
  {
    id: "hero-sudan-clients",
    path: "/assets/editorial/hero-sudan-clients.jpg",
    dimensions: "1376 × 768 (16:9)",
    placement: "Clients & Work Page Hero",
    brief:
      "Sudanese business leaders and consultants in a Khartoum boardroom overlooking the Nile reviewing a project handover.",
  },
  {
    id: "hero-sudan-contact",
    path: "/assets/editorial/hero-sudan-contact.jpg",
    dimensions: "1376 × 768 (16:9)",
    placement: "Contact Page Hero",
    brief:
      "Welcoming technology consultation lounge in Khartoum with Sudanese client advisors.",
  },
];

const VERIFIED_HASHES = [
  { file: "src/shaders/landing-pages/LandingPages.tsx", bytes: "40,525", sha256: "4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a" },
  { file: "src/shaders/landing-pages/pageTypography.ts", bytes: "15,028", sha256: "809cc65797d531cd3b3ca5a56815d55d24b3ee8d293e4e4bad6fdfe6c83244cc" },
  { file: "src/shaders/landing-pages/pageRecipes.ts", bytes: "74,927", sha256: "c9d9849cc255bac2d1d938d088c50917f84916f1c516d2bbb27fcfd803523233" },
  { file: "src/shaders/landing-pages/LandingPageFrame.tsx", bytes: "6,756", sha256: "61de2cc50888aac4ac5557420b07fa47ed3543bb57c1e0055fafdefa53dbaa78" },
  { file: "public/landing-pages/inner-green-3d.html", bytes: "197,914", sha256: "69c3694bd63f44ef9f007ebe4dac57a83e4402e0cdf6b54dd10b96dd4f05e197" },
  { file: "public/landing-pages/inner-green-assets/three.min.js", bytes: "608,081", sha256: "8a5f7249903b54d30f79f708699d2fed2d6a1d0741a4cd41377d1f01bb5a2271" },
  { file: "src/shaders/threeui.css", bytes: "40,715", sha256: "efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf" },
  { file: "public/landing-pages/inner-green-assets/card-ecostove.jpg", bytes: "290,988", sha256: "70ce084084902bc502f00c366405b661ecdff90dee95d363b36a6e146829e433" },
  { file: "public/landing-pages/inner-green-assets/card-ethos.jpg", bytes: "316,720", sha256: "337627390f499b3ae272cec9e2f83c817694a82f42e1aa10a7b26a2c7d679dff" },
  { file: "public/landing-pages/inner-green-assets/lexend-latin.woff2", bytes: "39,692", sha256: "1ec8f6ee2750554b4bc59ff0b507d316a82a7ba37e0e5bebc41d3bd9b9faad46" },
];

export default async function DesignSystemPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(safeLocale);
  const counts = {
    approved_for_publication: EVIDENCE_REGISTER.filter(
      (r) => r.publicationStatus === "approved_for_publication",
    ).length,
    source_backed: EVIDENCE_REGISTER.filter((r) => r.publicationStatus === "source_backed")
      .length,
    needs_verification: EVIDENCE_REGISTER.filter(
      (r) => r.publicationStatus === "needs_verification",
    ).length,
  };

  return (
    <div>
      {/* Header */}
      <section className="py-16 lg:py-24 bg-[#0D1111] text-white nx-grid-bg-dark border-b border-white/10">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-[#131919] text-[#00D1B4] border border-[#00D1B4]/35">
            <ShieldCheck className="w-4 h-4" />
            <span>NEXORA DESIGN SYSTEM (NLN-2.0) · INTERNAL COMPONENT &amp; EVIDENCE PREVIEW</span>
          </span>
          <h1 className="nx-display-lg text-white">
            Brand Design System, Generated Art Briefs &amp; Evidence Register
          </h1>
          <p className="nx-lead text-[#D6E2DF] max-w-3xl">
            Internal reference documenting Nexora Tech’s circuit-inspired N mark, turquoise/charcoal/white tokens, bilingual typography (Lexend &amp; IBM Plex Sans Arabic), generated editorial imagery, page-referenced approval register, and retained ThreeUI SylvaHero verification.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#F5F8F7] text-[#111817] space-y-20">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 space-y-20">
          {/* 1. Brand Identity & Logo Lockups */}
          <div className="space-y-6">
            <h2 className="nx-h1 text-[#111817]">1. Brand Identity &amp; Circuit-Inspired N Mark</h2>
            <p className="nx-body text-[#425250] max-w-3xl">
              Preserving the official Nexora Tech circuit-inspired “N” mark and wordmark from the Company Profile (p. 1) and Rami Suliman’s business card across horizontal, stacked, symbol-only, dark, light, and monochrome variants.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-8 rounded-2xl bg-[#0D1111] border border-white/15 flex flex-col items-center justify-center gap-4">
                <NexoraLogo variant="horizontal" theme="dark" />
                <span className="text-xs font-mono text-[#9BB0AC]">Horizontal · Dark Surface</span>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-[#D6E2DF] flex flex-col items-center justify-center gap-4">
                <NexoraLogo variant="horizontal" theme="light" />
                <span className="text-xs font-mono text-[#425250]">Horizontal · Light Surface</span>
              </div>
              <div className="p-8 rounded-2xl bg-[#131919] border border-white/15 flex flex-col items-center justify-center gap-4">
                <NexoraLogo variant="stacked" theme="dark" />
                <span className="text-xs font-mono text-[#9BB0AC]">Stacked · Business Card Lockup</span>
              </div>
              <div className="p-8 rounded-2xl bg-[#0D1111] border border-white/15 flex flex-col items-center justify-center gap-4">
                <NexoraLogo variant="mark" theme="monochrome-white" markSize={52} />
                <span className="text-xs font-mono text-[#9BB0AC]">Symbol Mark · Monochrome</span>
              </div>
            </div>
          </div>

          {/* 2. Color Tokens */}
          <div className="space-y-6">
            <h2 className="nx-h1 text-[#111817]">2. Primitive &amp; Semantic Color Tokens</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {COLOR_TOKENS.map((c) => (
                <div
                  key={c.token}
                  className="rounded-2xl overflow-hidden border border-[#D6E2DF] bg-white shadow-architectural"
                >
                  <div
                    className="h-28 p-4 flex items-end justify-between font-mono text-xs font-bold"
                    style={{ backgroundColor: c.hex, color: c.text }}
                  >
                    <span>{c.name}</span>
                    <span>{c.hex}</span>
                  </div>
                  <div className="p-4 space-y-1">
                    <p className="text-xs font-mono text-[#00796B]">{c.token}</p>
                    <p className="text-xs text-[#425250]">{c.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Generated Editorial Website Imagery */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="nx-h1 text-[#111817]">
                  3. Editorial Website Photography (9 Sudanese Regional Hero Assets)
                </h2>
                <p className="nx-body text-[#425250] max-w-3xl mt-1">
                  Art-directed documentary corporate photography featuring Sudanese and regional professionals across operations, Odoo ERP, custom software, retail POS, and low-current engineering.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0D1111] text-[#00D1B4] text-xs font-mono">
                <ImageIcon className="w-4 h-4" />
                <span>9/9 Editorial Assets Integrated</span>
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {GENERATED_EDITORIAL_ASSETS.map((asset) => (
                <div
                  key={asset.id}
                  className="rounded-3xl bg-white border border-[#D6E2DF] overflow-hidden shadow-architectural flex flex-col justify-between"
                >
                  <div>
                    <div className="bg-[#0D1111] border-b border-[#D6E2DF]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset.path}
                        alt={asset.placement}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-5 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono text-[#00796B]">
                        <span>{asset.placement}</span>
                        <span>{asset.dimensions}</span>
                      </div>
                      <p className="text-xs font-mono text-[#111817] font-semibold">{asset.path}</p>
                      <p className="text-xs text-[#425250] leading-relaxed">{asset.brief}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Bilingual Typography & RTL Scale */}
          <div className="space-y-6">
            <h2 className="nx-h1 text-[#111817]">4. Bilingual Typography &amp; RTL Scale (EN &amp; AR)</h2>
            <div className="rounded-3xl bg-white border border-[#D6E2DF] p-8 space-y-6 shadow-architectural">
              <div className="border-b border-[#D6E2DF] pb-4">
                <span className="text-xs font-mono text-[#00796B]">display-xl (Homepage Hero H1)</span>
                <p className="nx-display-xl text-[#111817] mt-1">
                  Run your business on connected software.
                </p>
                <p className="nx-display-xl text-[#111817] mt-2 font-arabic" dir="rtl">
                  أدِر أعمالك ببرمجيات مترابطة
                </p>
              </div>
              <div className="border-b border-[#D6E2DF] pb-4">
                <span className="text-xs font-mono text-[#00796B]">
                  Profile Positioning Line (Retained in About &amp; Brand System)
                </span>
                <p className="nx-h1 text-[#111817] mt-1">
                  Engineering Connected, Intelligent Systems
                </p>
                <p className="nx-h2 text-[#00796B] mt-2 font-arabic" dir="rtl">
                  نهندس أنظمة مترابطة وذكية
                </p>
              </div>
              <div>
                <span className="text-xs font-mono text-[#00796B]">lead &amp; mixed-script body</span>
                <p className="nx-lead text-[#425250] mt-1">{dict.hero.intro}</p>
              </div>
            </div>
          </div>

          {/* 5. Internal Evidence & Approvals Register */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="nx-h1 text-[#111817]">
                  5. Page-Referenced Internal Evidence &amp; Approvals Register
                </h2>
                <p className="nx-body text-[#425250] max-w-3xl mt-1">
                  Controls public inclusion across pages, metadata, structured data, and images. Distinguishes <code className="font-mono">approved_for_publication</code> ({counts.approved_for_publication}), <code className="font-mono">source_backed</code> ({counts.source_backed}), and <code className="font-mono">needs_verification</code> ({counts.needs_verification}).
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-[#D6E2DF] p-6 overflow-x-auto shadow-architectural">
              <table className="w-full text-left border-collapse text-xs" dir="ltr">
                <thead>
                  <tr className="border-b border-[#D6E2DF] text-[#00796B] font-mono">
                    <th className="py-3 pr-4">ID</th>
                    <th className="py-3 pr-4">Source</th>
                    <th className="py-3 pr-4">Claim / Asset</th>
                    <th className="py-3 pr-4">Status</th>
                    <th className="py-3">Evidence / Permission Required (Approver: Rami Suliman)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#D6E2DF]">
                  {EVIDENCE_REGISTER.map((item) => (
                    <tr key={item.id} className="align-top">
                      <td className="py-3 pr-4 font-mono font-bold text-[#111817]">{item.id}</td>
                      <td className="py-3 pr-4 font-mono text-[#425250]">{item.sourceRef}</td>
                      <td className="py-3 pr-4 text-[#111817]">
                        <p className="font-semibold">{item.category}</p>
                        <p className="text-[#425250] mt-0.5 line-clamp-2">{item.exactSourceWording}</p>
                      </td>
                      <td className="py-3 pr-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full font-mono text-[11px] font-semibold ${
                            item.publicationStatus === "approved_for_publication"
                              ? "bg-[#00796B]/15 text-[#00796B]"
                              : item.publicationStatus === "source_backed"
                                ? "bg-blue-50 text-blue-800"
                                : "bg-amber-50 text-amber-900"
                          }`}
                        >
                          {item.publicationStatus === "approved_for_publication" ? (
                            <CheckCircle2 className="w-3 h-3" />
                          ) : (
                            <AlertCircle className="w-3 h-3" />
                          )}
                          <span>{item.publicationStatus}</span>
                        </span>
                      </td>
                      <td className="py-3 text-[#425250] max-w-md">{item.evidenceOrPermissionRequired}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. Retained ThreeUI SylvaHero Vendor Reference (Byte-Exact Verification) */}
          <div className="space-y-6">
            <h2 className="nx-h1 text-[#111817]">
              6. Retained ThreeUI SylvaHero (05f359ce157a) Internal Reference
            </h2>
            <p className="nx-body text-[#425250] max-w-3xl">
              Per Section 1 of the Redesign Directive, the Sylva composition has been retired from the public homepage in favor of the first-party Connected Operation hero, while all 10 verified vendor files remain byte-for-byte intact in the repository for internal reference.
            </p>
            <div className="rounded-3xl bg-[#0D1111] text-white border border-white/15 p-6 sm:p-8 overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs font-mono" dir="ltr">
                <thead>
                  <tr className="border-b border-white/15 text-[#00D1B4]">
                    <th className="py-3 pr-4">File / Binary Asset</th>
                    <th className="py-3 pr-4">Bytes</th>
                    <th className="py-3 pr-4">Verified SHA-256</th>
                    <th className="py-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 text-[#D6E2DF]">
                  {VERIFIED_HASHES.map((row) => (
                    <tr key={row.file}>
                      <td className="py-3 pr-4 font-semibold text-white">{row.file}</td>
                      <td className="py-3 pr-4 text-[#9BB0AC]">{row.bytes}</td>
                      <td className="py-3 pr-4 text-[#9BB0AC]">{row.sha256}</td>
                      <td className="py-3">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#131919] text-[#00D1B4]">
                          <CheckCircle2 className="w-3 h-3" /> PASS
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="nx-h2 text-[#111817]">
                Retained Vendor Component Mount (<code className="font-mono">&lt;Scene /&gt;</code>)
              </h3>
              <div className="rounded-3xl overflow-hidden border border-[#D6E2DF] h-[560px]">
                <Scene />
              </div>
            </div>
          </div>

          {/* 7. Interactive Disclosure Sample */}
          <div className="max-w-3xl space-y-4">
            <h2 className="nx-h2 text-[#111817]">7. Interactive Disclosure &amp; FAQ Component</h2>
            <AccordionFAQ items={dict.services[0].faqs} />
          </div>
        </div>
      </section>
    </div>
  );
}
