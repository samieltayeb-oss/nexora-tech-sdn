# NEXORA TECH — SUDAN
## Design System Specification (`docs/DESIGN-SYSTEM.md`)

**Version:** `NLN-2.0` (Connected Business Operation Edition)  
**Interactive Preview Route:** `/en/design-system` and `/ar/design-system`

---

## 1. Brand Identity & Core Visual Direction

- **Circuit-Inspired `N` Mark:** Preserved from Company Profile p. 1 and General Manager Rami Suliman's business card (`src/components/brand/NexoraLogo.tsx`).
- **Positioning Line:** `"Engineering Connected, Intelligent Systems"` (Profile p. 1) is retained in the About page, footer, and brand system, while the homepage hero leads with plain-language clarity: `"Business software and infrastructure, built to work together."` / `"برمجيات أعمال وبنية تحتية تقنية تعمل معًا"`.

---

## 2. Color Tokens (Primitive, Semantic & Component)

| Token | Hex | Contrast / Role |
|---|---|---|
| `--nx-brand-turquoise` | `#00D1B4` | Primary circuit-node accent, primary CTA surface on dark (`11.3:1` vs `#0D1111`), SVG integration path, and focus ring. |
| `--nx-brand-turquoise-deep` | `#00796B` | Accessible deep teal for interactive links, badges, and accents on `#FFFFFF` and `#F5F8F7` light surfaces (`5.4:1` WCAG AA). |
| `--nx-surface-dark` | `#0D1111` | Primary dark hero surface and footer canvas. |
| `--nx-surface-dark-elevated` | `#131919` | Elevated dark cards, navigation dropdowns, and annotation containers. |
| `--nx-surface-light` | `#F5F8F7` | Primary light editorial background surface. |
| `--nx-surface-white` | `#FFFFFF` | Pure white card surface on light sections. |
| `--nx-text-primary-light` | `#111817` | High-contrast slate ink for headings and body copy on light (`16.8:1`). |
| `--nx-text-secondary-light` | `#425250` | Secondary copy and metadata on light (`7.6:1`). |
| `--nx-border-light` | `#D6E2DF` | Structural hairline borders on light surfaces. |

---

## 3. Typography & Bilingual RTL Architecture

- **English Sans (`lang="en" dir="ltr"`):** Self-hosted `Lexend` (`public/fonts/lexend-latin.woff2`) paired with `JetBrains Mono` for technical codes.
- **Arabic Native Sans (`lang="ar" dir="rtl"`):** Self-hosted `IBM Plex Sans Arabic` (`public/fonts/ibm-plex-sans-arabic-{400,600,700}.woff2`) with dedicated line-height (`1.22` headings, `1.8` body) and zero negative letter-spacing.
- **Logical CSS Layout:** Built with logical properties (`ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`, `end-*`, `border-s`, `border-e`) and `.ltr-inline` isolation for phone numbers (`+249 120 4040 45`), emails (`r.suliman@nexora-tech.com`), and URLs (`www.nexora-tech.com`) inside Arabic paragraphs.
- **Responsive Grid:** `1280px` max container (`max-w-container`) with 4-column mobile (`16px` gutter), 8-column tablet (`24px` gutter), and 12-column desktop (`40px` gutter).

---

## 4. Component Library

1. **Single Navigation Header (`src/components/layout/Header.tsx`):** Consolidated single navigation bar (`Home`, `Solutions` with 4-family dropdown, `About`, `How We Work`, `Contact`, Language Switcher, and one primary CTA `Discuss your project`).
2. **Connected Operation Hero (`src/components/hero/ConnectedOperationHero.tsx`):** Two-column desktop / stacked mobile charcoal hero (`#0D1111`) placing headline, supporting paragraph, and CTAs at the reading start and the editorial Connected Operation artwork + 3 bilingual HTML/SVG layer callouts (`Business Workflow`, `Integration`, `Infrastructure`) at the reading end.
3. **Solution Architecture Grid (`src/components/sections/ServiceArchitectureGrid.tsx`):** Displays the 4 solution families with their generated 4:3 editorial visuals, Problem → Supported Scope → Practical Outcome cards, and dedicated product entries for **Nexora POS** and **SambaPOS**.
4. **Validated Inquiry Form (`src/components/forms/ContactLeadForm.tsx`):** Carries over `?solution=` query parameter, captures name, organization, email, optional phone, solution interest, and project brief with localized validation and honest test-destination/pre-launch status reporting.
