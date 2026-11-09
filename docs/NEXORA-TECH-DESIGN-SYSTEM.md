# NEXORA TECH (SUDAN) — PROPRIETARY DESIGN SYSTEM SPECIFICATION

**Document ID:** `NEXORA-SD-DS-004`  
**Design System Name:** **Nexora Living Network UI (`NLN-1.0`)**  
**Live Interactive Showcase Route:** `/en/design-system` & `/ar/design-system`  
**Primary Token Implementation:** `src/styles/globals.css` & `tailwind.config.ts`

---

## 1. Brand Identity & Logo System

### 1.1 Official Logo Analysis (Verified from Company Profile pp. 1, 5, 7, 9, 11 & Business Card)
Nexora Tech possesses an established, distinctive brand mark featured consistently throughout the attached Company Profile and General Manager Business Card:
- **Symbol (The Circuit-Root Monogram "N"):** A bold geometric **"N"** formed by a continuous fluid ribbon whose left stem branches outward into three circular circuit/network terminal nodes (`●`). This symbol natively embodies *"Engineering Connected, Intelligent Systems"*.
- **Wordmark:** `Nexora` set in a clean, authoritative geometric sans-serif (`font-weight: 700`), paired with the secondary descriptor `T E C H` in wide-tracked uppercase letters (`letter-spacing: 0.32em`) aligned beneath the right side (`ra`) of the primary wordmark.

### 1.2 Authorized Web Variants Implemented (`src/components/brand/NexoraLogo.tsx` & `public/brand/`)
1. **Primary Horizontal (`variant="horizontal"`):** Circuit-Root "N" mark + `Nexora` + `TECH` lockup (for desktop header, footer, and official documents).
2. **Stacked Lockup (`variant="stacked"`):** Centered Circuit-Root "N" symbol above `Nexora` / `TECH` (matches the General Manager Business Card right-hand lockup).
3. **Symbol Mark Only (`variant="mark"`):** Standalone Circuit-Root "N" icon (used on mobile compact headers, favicons, app icons, and watermarks, matching Profile pages 2, 3, 4, 8).
4. **Color Modes:**
   - `theme="dark"` (for dark surfaces `#091713` / `#12382B`): Emerald-Teal symbol (`#0FC28E` / `#5EA885`), pure white `Nexora` (`#FFFFFF`), and Botanical/Teal `TECH` (`#5EA885`).
   - `theme="light"` (for light surfaces `#F6F6F0` / `#FFFFFF`): Emerald-Teal symbol (`#00B884` / `#12382B`), Slate Ink `Nexora` (`#172521`), and Deep Emerald `TECH` (`#0D7A5F`).
   - `theme="monochrome-white"` & `theme="monochrome-dark"`: Single-ink variants for engineering stamps and high-contrast contexts.

### 1.3 Clear-Space & Minimum-Size Rules
- **Clear Space:** Minimum clear zone around the logo equals `0.5 × H` (where `H` is the height of the "N" monogram).
- **Minimum Sizes:**
  - Horizontal lockup: minimum height `28px` (`112px` width) on digital screens.
  - Symbol-only mark: minimum `20px × 20px` (favicon / compact badge).
- **Integrity Rules:** Never stretch, skew, add drop shadows to the monogram, or substitute with the unrelated Canadian NEXORA logo.

---

## 2. Color Architecture

The color architecture harmonizes the **Living Network** cinematic forest palette with the **Company Profile's verified emerald-teal engineering identity**, while leaving the ThreeUI `SylvaHero` internal WebGL shaders 100% untouched.

### 2.1 Core Brand & Surface Tokens

| CSS Custom Property | Token Name | Hex Value | Role & Usage | Contrast Check |
|---|---|---|---|---|
| `--nx-forest-black` | `forest-black` | `#091713` | Primary dark canvas, footer, deep architectural sections | `18.1:1` vs `#FFFFFF` (AAA) |
| `--nx-deep-evergreen` | `deep-evergreen` | `#12382B` | Elevated dark brand surfaces, capability bento cards, executive callouts | `12.4:1` vs `#FFFFFF` (AAA) |
| `--nx-living-emerald` | `living-emerald` | `#5EA885` | Primary active accent on dark backgrounds, interactive borders, badges | `6.8:1` vs `#091713` (AA) |
| `--nx-profile-teal` | `profile-teal` | `#0FC28E` | Official logo circuit-node highlight & high-energy telemetry pulse | `8.9:1` vs `#091713` (AAA) |
| `--nx-botanical-green` | `botanical-green` | `#9BC9A9` | Soft dark-mode highlights, secondary dark-mode labels, metric accents | `10.5:1` vs `#091713` (AAA) |
| `--nx-warm-ivory` | `warm-ivory` | `#F6F6F0` | Primary editorial light background | `14.6:1` vs `#172521` (AAA) |
| `--nx-pure-white` | `pure-white` | `#FFFFFF` | Hero typography & elevated light surface cards | `15.9:1` vs `#172521` (AAA) |
| `--nx-slate-ink` | `slate-ink` | `#172521` | Primary body copy & headings on light backgrounds | `14.6:1` vs `#F6F6F0` (AAA) |
| `--nx-muted-ink` | `muted-ink` | `#3D524B` | Secondary body copy & captions on light backgrounds | `7.4:1` vs `#F6F6F0` (AAA) |
| `--nx-emerald-ink` | `emerald-ink` | `#0E6B50` | Accessible green text & links on light `#F6F6F0` / `#FFFFFF` surfaces | `6.4:1` vs `#F6F6F0` (AA) |
| `--nx-soft-mist` | `soft-mist` | `#DCE7DE` | Crisp architectural grid hairlines, card borders, layered surfaces | Structural border |

### 2.2 Semantic Status & Interactive Tokens
- **Focus Ring (`--nx-focus-ring`):** `2px solid #0FC28E` with `2px` offset (high visibility on both dark `#091713` and light `#F6F6F0` surfaces).
- **Success (`--nx-success`):** `#0D7A5F` (light surface) / `#34D399` (dark surface).
- **Warning (`--nx-warning`):** `#B45309` (light surface) / `#FBBF24` (dark surface).
- **Danger / Error (`--nx-danger`):** `#B91C1C` (light surface) / `#F87171` (dark surface).

---

## 3. Typography System (Bilingual EN / AR)

### 3.1 Font Families
1. **ThreeUI Hero Component (`SylvaHero`):** Strictly preserves `Lexend` (`lexend-latin.woff2`, weight `300`, size `63` / `16.5`, letter-spacing `-0.006`) as configured.
2. **English Display & UI (`--font-lexend`):** `Lexend` (weights `300`, `400`, `500`, `600`, `700`) for architectural display headings, numeric telemetry, and primary UI navigation.
3. **Arabic Display & UI (`--font-arabic`):** `IBM Plex Sans Arabic` (weights `300`, `400`, `500`, `600`, `700`) — selected for its technical clarity, balanced loop geometry, and superior legibility in both executive prose and engineering terminology.
4. **Monospace / Technical Codes (`--font-mono`):** `JetBrains Mono` / system monospace for SLA codes, phone numbers (`+249 120 4040 45`), SHA-256 verification badges, and architecture specs.

### 3.2 Fluid Typographic Scale

| Token | CSS Class / Role | Fluid Size (`clamp()`) | Line Height (EN / AR) | Letter Spacing (EN / AR) |
|---|---|---|---|---|
| `display-xl` | Hero / Editorial Statement | `clamp(2.5rem, 4.5vw + 1rem, 4.25rem)` | `1.06` / `1.22` | `-0.025em` / `0em` |
| `display-lg` | Page Hero Title | `clamp(2.125rem, 3.5vw + 0.85rem, 3.35rem)` | `1.10` / `1.25` | `-0.02em` / `0em` |
| `h1` | Primary Section Heading | `clamp(1.85rem, 2.6vw + 0.75rem, 2.75rem)` | `1.15` / `1.30` | `-0.018em` / `0em` |
| `h2` | Subsection / Capability Title | `clamp(1.5rem, 2vw + 0.6rem, 2.15rem)` | `1.20` / `1.35` | `-0.015em` / `0em` |
| `h3` | Feature Block Heading | `clamp(1.25rem, 1.2vw + 0.6rem, 1.5rem)` | `1.28` / `1.42` | `-0.01em` / `0em` |
| `h4` | Card / Module Title | `clamp(1.1rem, 0.8vw + 0.6rem, 1.25rem)` | `1.35` / `1.48` | `-0.005em` / `0em` |
| `lead` | Executive Lead Paragraph | `clamp(1.125rem, 0.6vw + 0.9rem, 1.325rem)` | `1.65` / `1.82` | `0em` / `0em` |
| `body` | Standard Body Copy | `clamp(1rem, 0.25vw + 0.92rem, 1.0625rem)` | `1.68` / `1.85` | `0em` / `0em` |
| `caption` | Technical Metadata / Footnote | `0.875rem` (`14px`) | `1.50` / `1.65` | `0.01em` / `0em` |
| `eyebrow` | Section Classification Label | `0.75rem` (`12px`) | `1.40` / `1.55` | `0.14em` (EN) / `0.02em` (AR) |
| `stat-num` | Numeric Evidence Counter | `clamp(2.25rem, 3.2vw + 1rem, 3.5rem)` | `1.0` | `-0.03em` (`tabular-nums`) |

> **Arabic Typographic Rule:** When `dir="rtl"` (`locale === "ar"`), negative letter-spacing and uppercase transformations are automatically reset (`letter-spacing: 0`, `text-transform: none`) and line-height increases by `+12%` to prevent Arabic diacritic and ascender/descender clipping.

---

## 4. Layout, Grid & Spacing Architecture

- **Container Max Widths:**
  - `--container-max`: `1360px` with responsive horizontal padding (`1.25rem` mobile, `2.5rem` tablet, `4rem` desktop).
  - `--container-editorial`: `840px` for focused executive statements and technical reading.
- **Grid Foundations:**
  - 12-column desktop architectural grid (`gap: 1.5rem` to `2.5rem`), collapsing to 6 columns on tablet (`768px–1023px`) and 1–2 columns on mobile (`<768px`).
  - **Editorial Rhythm Rule:** Never stack three identical 3-column card grids consecutively. Alternate between:
    1. Asymmetric 5/7 split executive narratives
    2. 4-pillar interactive architectural matrix (Services)
    3. Layered technical blueprint diagrams (Featured Solutions)
    4. Auditable timeline / S-curve engineering progression (Why Nexora / How We Work, honoring Page 8 and Page 10 of the Profile).
- **Border Radius Scale:**
  - `sm`: `6px` (tags, technical badges)
  - `md`: `12px` (buttons, inputs)
  - `lg`: `20px` (architectural cards)
  - `xl`: `28px` (featured immersion panels)
  - `pill`: `9999px` (navigation dock, status pills)

---

## 5. Component Library Inventory

All reusable components are implemented in `src/components/` and demonstrated live at `/[locale]/design-system`:

1. `NexoraLogo` (`src/components/brand/NexoraLogo.tsx`): Horizontal, stacked, and symbol variants across dark, light, and monochrome themes.
2. `Header` & `MobileNav` (`src/components/layout/Header.tsx`): Accessible sticky architectural header, service mega-preview, active route indicator, keyboard-trap-safe mobile drawer.
3. `LanguageSwitcher` (`src/components/layout/LanguageSwitcher.tsx`): Preserves current route path and query parameters when switching between `/en/...` and `/ar/...` with `hreflang` awareness.
4. `NexoraSylvaHero` & `Scene` (`src/components/hero/NexoraSylvaHero.tsx`, `src/components/hero/Scene.tsx`): Verified ThreeUI `SylvaHero` (`living-green`) integration with runtime brand adaptation, WebGL capability check, reduced-motion fallback, and source verification drawer.
5. `SectionHeader` (`src/components/ui/SectionHeader.tsx`): Eyebrow badge, fluid title, lead description, and optional action link.
6. `ServiceArchitectureGrid` (`src/components/sections/ServiceArchitectureGrid.tsx`): Differentiated 4-pillar showcase mapping customer problem → Nexora offering → practical outcome → deep link.
7. `SolutionBlueprintTabs` (`src/components/sections/SolutionBlueprintTabs.tsx`): Interactive tabbed technical architecture diagrams for Odoo ERP + POS Integration and End-to-End Low-Current Infrastructure.
8. `EngineeringDisciplineTimeline` (`src/components/sections/EngineeringDisciplineTimeline.tsx`): Honors Page 10's signature S-curve engineering audit trail (*One Partner End-to-End → Certified Engineering Team → Documented Testing → Nationwide Support*).
9. `ClientSectorShowcase` (`src/components/sections/ClientSectorShowcase.tsx`): Displays verified sectors and the 9 profile-referenced client organizations with transparent governance labeling.
10. `AccordionFAQ` (`src/components/ui/AccordionFAQ.tsx`): Accessible WAI-ARIA disclosure group for technical procurement and SLA questions.
11. `ContactLeadForm` (`src/components/forms/ContactLeadForm.tsx`): Full client + server validated inquiry system with service scope selector, honeypot + rate-limit anti-spam, honest delivery status feedback, and direct verified click-to-call/email/WhatsApp channels.
12. `Footer` (`src/components/layout/Footer.tsx`): Verified Khartoum address, Port Sudan & Khartoum field coverage, direct contact channels, sitemap links, and zero fabricated social links.
