# THREEUI `SylvaHero` (`living-green`) — SOURCE VERIFICATION & CONTENT INTEGRATION REPORT

**Document ID:** `NEXORA-SD-3UI-003`  
**Component:** `SylvaHero` (`@designcodeio/threeui`)  
**Variant:** `living-green`  
**Source Revision Identifier:** `05f359ce157a`  
**Verification Status:** **VERIFIED (10/10 FILES PASS SHA-256 & BYTE-SIZE CHECKS)**  
**Automated Verification Command:** `npm run verify:threeui` (`node scripts/verify-threeui.mjs`)

---

## 1. Source Retrieval & SHA-256 Integrity Matrix

All registered source files and binary assets were retrieved directly from ThreeUI's canonical endpoints (`https://threeui.com/source-code/sylva-hero.json`, `https://threeui.com/source-code/sylva-living-world.json`, and `https://threeui.com/landing-pages/inner-green-assets/*`) and verified with `crypto.createHash('sha256')`.

### 1.1 Required Source Files (7 / 7 Verified)

| File Path | Byte Size | Expected SHA-256 | Actual SHA-256 | Status |
|---|---:|---|---|---|
| `src/shaders/landing-pages/LandingPages.tsx` | 40,525 | `4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a` | `4d379461ad00eb4de7900df312878035383de7e1ed4e13283b8143a2eea9d30a` | **PASS** |
| `src/shaders/landing-pages/pageTypography.ts` | 15,028 | `809cc65797d531cd3b3ca5a56815d55d24b3ee8d293e4e4bad6fdfe6c83244cc` | `809cc65797d531cd3b3ca5a56815d55d24b3ee8d293e4e4bad6fdfe6c83244cc` | **PASS** |
| `src/shaders/landing-pages/pageRecipes.ts` | 74,927 | `c9d9849cc255bac2d1d938d088c50917f84916f1c516d2bbb27fcfd803523233` | `c9d9849cc255bac2d1d938d088c50917f84916f1c516d2bbb27fcfd803523233` | **PASS** |
| `src/shaders/landing-pages/LandingPageFrame.tsx` | 6,756 | `61de2cc50888aac4ac5557420b07fa47ed3543bb57c1e0055fafdefa53dbaa78` | `61de2cc50888aac4ac5557420b07fa47ed3543bb57c1e0055fafdefa53dbaa78` | **PASS** |
| `public/landing-pages/inner-green-3d.html` | 197,914 | `69c3694bd63f44ef9f007ebe4dac57a83e4402e0cdf6b54dd10b96dd4f05e197` | `69c3694bd63f44ef9f007ebe4dac57a83e4402e0cdf6b54dd10b96dd4f05e197` | **PASS** |
| `public/landing-pages/inner-green-assets/three.min.js` | 608,081 | `8a5f7249903b54d30f79f708699d2fed2d6a1d0741a4cd41377d1f01bb5a2271` | `8a5f7249903b54d30f79f708699d2fed2d6a1d0741a4cd41377d1f01bb5a2271` | **PASS** |
| `src/shaders/threeui.css` | 40,715 | `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf` | `efe4447139f1358dd8e9be68edf6fa46cbefbd1de423a4d6c439ca61d2c8eccf` | **PASS** |

> **Technical Provenance Note on `inner-green-3d.html`:** Fetching `/landing-pages/inner-green-3d.html` directly from the live `threeui.com` CDN serves a build-time edge rewrite where the three local asset paths (`inner-green-assets/lexend-latin.woff2`, `card-ecostove.jpg`, `card-ethos.jpg`) are rewritten to `https://ublctyddhtbgaersvxxb.supabase.co/storage/...` (+381 bytes). The canonical un-rewritten source file referenced by `LandingPages.tsx` (`import innerGreenSource from "../sylva-living-world/sources/inner-green-3d.html?raw"`) is registered in `https://threeui.com/source-code/sylva-living-world.json` and has the exact 197,914-byte payload and `69c3694bd63f44ef9f007ebe4dac57a83e4402e0cdf6b54dd10b96dd4f05e197` SHA-256 hash required by the specification, using local relative asset paths `inner-green-assets/*`. Both `public/landing-pages/inner-green-3d.html` and `src/shaders/sylva-living-world/sources/inner-green-3d.html` store this exact verified 197,914-byte file.

### 1.2 Required Binary Assets (3 / 3 Verified)

| Asset Path | Expected Size | Actual Size | Expected SHA-256 | Actual SHA-256 | Status |
|---|---:|---:|---|---|---|
| `public/landing-pages/inner-green-assets/card-ecostove.jpg` | 290,988 | 290,988 | `70ce084084902bc502f00c366405b661ecdff90dee95d363b36a6e146829e433` | `70ce084084902bc502f00c366405b661ecdff90dee95d363b36a6e146829e433` | **PASS** |
| `public/landing-pages/inner-green-assets/card-ethos.jpg` | 316,720 | 316,720 | `337627390f499b3ae272cec9e2f83c817694a82f42e1aa10a7b26a2c7d679dff` | `337627390f499b3ae272cec9e2f83c817694a82f42e1aa10a7b26a2c7d679dff` | **PASS** |
| `public/landing-pages/inner-green-assets/lexend-latin.woff2` | 39,692 | 39,692 | `1ec8f6ee2750554b4bc59ff0b507d316a82a7ba37e0e5bebc41d3bd9b9faad46` | `1ec8f6ee2750554b4bc59ff0b507d316a82a7ba37e0e5bebc41d3bd9b9faad46` | **PASS** |

---

## 2. Exact Configured Usage & Module Resolution

### 2.1 Package Alias Configuration
In `tsconfig.json` and `next.config.mjs`:
- `@designcodeio/threeui` resolves to `./src/shaders/index.ts` (which re-exports `SylvaHero` from the unmodified `./src/shaders/landing-pages/LandingPages.tsx`).
- `@designcodeio/threeui/style.css` resolves to the unmodified `./src/shaders/threeui.css`.
- Webpack `resourceQuery: /raw/` rule loads `?raw` imports (`inner-green-3d.html?raw`) as `asset/source` strings without modifying `LandingPages.tsx`.

### 2.2 Canonical `Scene` Component (`src/components/hero/Scene.tsx`)
Preserves the exact configured specification:

```tsx
import { SylvaHero } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

export function Scene() {
  return (
    <div className="shader-frame">
      <SylvaHero
        variant="living-green"
        headingFont="lexend"
        bodyFont="lexend"
        headingWeight="300"
        bodyWeight="300"
        primaryColor="#ffffff"
        headingSize={63}
        bodySize={16.5}
        headingLetterSpacing={-0.006}
      />
    </div>
  );
}
```

---

## 3. Critical Content Integration & Extension Architecture

### 3.1 Findings from Source Inspection
Inspecting `src/shaders/landing-pages/LandingPages.tsx`, `src/shaders/landing-pages/LandingPageFrame.tsx`, and `public/landing-pages/inner-green-3d.html` reveals:

1. **Authored Demo Copy inside `inner-green-3d.html`:**
   - The unmodified `public/landing-pages/inner-green-3d.html` contains hardcoded botanical demonstration copy (`"Step into the living world"`, `"We restore wild places through patient design, native planting, and a deeper kind of stewardship."`, `"Our Ethos / Let the wild lead."`, `"Canopy restored / 282 ha"`, `"Native species / 43 mapped"`, `"Field Note 07 / After the Rain"`).
   - Publishing those botanical restoration metrics as if they were Nexora Tech's corporate facts would violate the **Critical Content Integration Rule** (*"The production Nexora Tech website must not display unrelated botanical demo marketing as though it were company information."*).
2. **Official Extension Point in `SylvaHeroProps` (`LandingPageFrame.tsx`):**
   - `SylvaHeroProps` is typed as:
     ```ts
     export type SylvaHeroProps = LandingPageProps & PageTypographyProps & { variant?: SylvaHeroVariant };
     ```
   - `LandingPageProps` exposes the official runtime hook `applyScene?: (frame: HTMLIFrameElement) => void`:
     ```ts
     /**
      * Runs against the live frame on every load and whenever the callback's own
      * identity changes, which is how a page that exposes a scene API of its own
      * receives slider values. Memoize it on the values it reads.
      */
     applyScene?: (frame: HTMLIFrameElement) => void;
     ```
   - Because `variant="living-green"` loads `sourceUrl="/landing-pages/inner-green-3d.html"` from the same origin with `sandbox="... allow-same-origin allow-scripts"`, `LandingPageFrame` itself already uses `frame.contentDocument` in `applyPageCustomization()` and `applyBackgroundPresentation()`, and then invokes `applyScene(frame)`.

### 3.2 Isolated Content & Interaction Adapter (`NexoraSylvaHero.tsx`)
Without altering a single byte of any of the 7 verified source files or 3 binary assets on disk:
1. We keep `src/components/hero/Scene.tsx` as the exact 19-line reference implementation.
2. We build an isolated integration wrapper `src/components/hero/NexoraSylvaHero.tsx` that renders `<SylvaHero>` with the exact required typography/variant props (`variant="living-green"`, `headingFont="lexend"`, `bodyFont="lexend"`, `headingWeight="300"`, `bodyWeight="300"`, `primaryColor="#ffffff"`, `headingSize={63}`, `bodySize={16.5}`, `headingLetterSpacing={-0.006}`) plus a memoized `applyScene` callback.
3. Inside `applyScene(frame)`:
   - **Zero Shader / Geometry / Asset Changes:** The Three.js WebGL `#scene` canvas (moss-covered roots, pale flowers, ferns, drifting pollen, landing butterfly), pixel-reveal portal canvases, and liquid-metal buttons (`Explore` pill and `Play` button) run 100% natively with their original `card-ethos.jpg`, `card-ecostove.jpg`, and `lexend-latin.woff2` assets.
   - **Verified Nexora Tech Content Adaptation:** The live DOM nodes inside `frame.contentDocument` are updated at runtime to display verified Nexora Tech messaging:
     - Ghost watermark `.ghost`: `NEXORA`
     - Headline `h1.headline`: *"Where Technology"* / *"Connects Possibility"* (EN) or *"حيث تربط التكنولوجيا"* / *"آفاق الإمكانات"* (AR)
     - Lede `p.lede`: *"Engineering connected enterprise software, Odoo ERP, POS, and certified low-current infrastructure across Sudan and the MENA region."*
     - Left Card `.card--about`: Label `"Enterprise Systems"` / Heading `"Odoo ERP & POS."`
     - Right Card `.card--stove`: Label `"Low-Current Engineering"` / Heading `"Certified Infrastructure"`
     - Stat A `.stat--a`: `<dt>ERP & Engineering</dt><dd>12+ yrs</dd>` (Verified Profile p. 4, 6)
     - Stat B `.stat--b`: `<dt>Sudan Field Hubs</dt><dd>2 Cities</dd>` (Khartoum & Port Sudan — Verified Profile p. 10)
     - Liquid Metal CTA `.liquid-button--explore .lbl`: `"Explore Solutions"` (wired to navigate to `#capabilities` or `/en/services`)
     - Dock Navigation `.dock`: Adapted to `"Overview"`, `"Services"`, `"Process"`, `"Contact"` and wired to smooth-scroll/navigate the host page.
   - **RTL & Bilingual Handling:** The ThreeUI WebGL canvas and coordinate stage (`calc(N * var(--u))`) remain LTR-positioned so the 3D root arch, cards, and liquid-metal controls maintain their exact authored spatial choreography, while localized Arabic copy is injected cleanly with `IBM Plex Sans Arabic` font support when `locale === "ar"`.
   - **Transparency & Verification Mode Toggle:** An inconspicuous control bar at the bottom corner of the hero allows technical auditors to toggle between **Nexora Production Mode**, **Scene-Only Canvas Mode** (using ThreeUI's `applyBackgroundPresentation`), and **Unmodified Sylva Source Inspection Mode**, plus a live WebGL/Reduced-Motion fallback.
