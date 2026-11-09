# NEXORA TECH (SUDAN) — TECHNICAL ARCHITECTURE SPECIFICATION

**Document ID:** `NEXORA-SD-ARC-009`  
**Framework:** Next.js 16.4.5 (App Router, Static & Server-Rendered Bilingual Routes)  
**Runtime Language:** TypeScript 5.8 (Strict Mode) + React 19  
**Styling Engine:** Tailwind CSS 3.4 + CSS Custom Property Design Tokens (`NLN-1.0`)  
**3D / WebGL Engine:** ThreeUI `SylvaHero` (`living-green`, rev `05f359ce157a`) + Local Three.js Runtime (`three.min.js`)

---

## 1. Architectural Principles

1. **Zero Unnecessary Complexity:** No external database or fragile headless CMS dependency is introduced for corporate brochure/lead-generation pages. All bilingual content is strongly typed, version-controlled, and statically pre-rendered (`SSG`) for instantaneous edge/CDN delivery.
2. **Strict Separation of Vendor Code & Application Code:**
   - All 7 verified ThreeUI source files (`src/shaders/...` and `public/landing-pages/...`) and 3 binary assets (`public/landing-pages/inner-green-assets/...`) are stored 100% unmodified and verified via `npm run verify:threeui`.
   - Application-level brand adaptation lives exclusively in `src/components/hero/NexoraSylvaHero.tsx`, utilizing `SylvaHero`'s supported `applyScene` prop.
3. **Bilingual First-Class Routing (`/en` & `/ar`):**
   - Every route under `src/app/[locale]/...` is statically generated at build time for both `en` (`LTR`) and `ar` (`RTL`) via `generateStaticParams()`.

---

## 2. Directory & Ownership Structure

```text
nexora-tech/
├── docs/                                   # Complete 14-document agency & engineering deliverable suite
├── public/
│   ├── assets/
│   │   ├── clients/                        # 9 client marks extracted from Profile PDF Page 9
│   │   └── profile/                        # Official GM portrait & architectural renders from Profile PDF
│   ├── brand/                              # Extracted official PNG logos, app icons & Open Graph preview
│   └── landing-pages/
│       ├── inner-green-3d.html             # Verified ThreeUI canonical HTML (sha256: 69c3694b...)
│       └── inner-green-assets/             # Verified three.min.js, card-ecostove.jpg, card-ethos.jpg, lexend-latin.woff2
├── scripts/
│   └── verify-threeui.mjs                  # Automated SHA-256 & byte-length integrity verifier
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts            # Validated server-side inquiry API endpoint
│   │   ├── [locale]/                       # Bilingual App Router pages (/en/* & /ar/*)
│   │   │   ├── about/page.tsx
│   │   │   ├── contact/page.tsx
│   │   │   ├── design-system/page.tsx
│   │   │   ├── industries/page.tsx
│   │   │   ├── insights/page.tsx
│   │   │   ├── privacy/page.tsx
│   │   │   ├── projects/page.tsx
│   │   │   ├── services/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [slug]/page.tsx
│   │   │   ├── solutions/page.tsx
│   │   │   ├── terms/page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── brand/NexoraLogo.tsx
│   │   ├── forms/ContactLeadForm.tsx
│   │   ├── hero/
│   │   │   ├── NexoraSylvaHero.tsx
│   │   │   └── Scene.tsx                   # Exact configured SylvaHero reference component
│   │   ├── layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── sections/
│   │   │   ├── ClientSectorShowcase.tsx
│   │   │   ├── EngineeringDisciplineTimeline.tsx
│   │   │   ├── ServiceArchitectureGrid.tsx
│   │   │   └── SolutionBlueprintTabs.tsx
│   │   └── ui/AccordionFAQ.tsx
│   ├── content/siteContent.ts              # Complete verified EN/AR corporate dictionary
│   ├── lib/i18n.ts                         # Locale routing & direction helpers
│   ├── shaders/                            # Verified ThreeUI source files & public build-guard seams
│   └── styles/globals.css                  # Design tokens, fluid typography & RTL rules
```

---

## 3. Security & Server-Side Validation Architecture

- **HTTP Security Headers (`next.config.mjs`):**
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN` (permits the same-origin `/landing-pages/inner-green-3d.html` ThreeUI frame while blocking external clickjacking)
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
  - `poweredByHeader: false`
- **API Route (`/api/contact`):**
  - Server-side input sanitization (`sanitize()`), RFC email check, length validation, honeypot spam trap (`websiteHoneypot`), and IP-based rate limiting.
  - Zero private keys or credentials exposed to client bundles.

---

## 4. Optional Future CMS Recommendation (If Needed Later)

Because Nexora Tech's core service portfolio (Odoo ERP, POS, Digital Transformation, Low-Current Infrastructure) is highly structured, the current TypeScript dictionary (`src/content/siteContent.ts`) provides maximum speed, zero database attack surface, and zero monthly hosting overhead. If non-technical marketing staff later require frequent publishing of new Insights articles, we recommend **Keystatic** (Git-backed Markdown/JSON editing with zero external database cost) or **Payload CMS / Sanity** with webhook-triggered static revalidation.
