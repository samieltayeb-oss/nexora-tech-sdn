# NEXORA TECH (SUDAN) — ACCESSIBILITY REPORT (WCAG 2.2 AA)

**Document ID:** `NEXORA-SD-A11Y-010`  
**Target Standard:** WCAG 2.2 Level AA  
**Scope:** All English (`/en/*`) and Arabic (`/ar/*`) application routes, navigation, forms, and ThreeUI wrapper integration.

---

## 1. Accessibility Architecture Summary

| WCAG 2.2 Criterion | Implementation Detail | Status |
|---|---|---|
| **1.1.1 Non-text Content** | Meaningful `alt` attributes on General Manager portrait, client logos, and architectural visuals; decorative SVGs marked `aria-hidden="true"`. | **PASS** |
| **1.3.1 Info & Relationships** | Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main id="main-content">`, `<section>`, `<article>`, `<footer>`) and proper heading hierarchy (`h1` → `h2` → `h3`). | **PASS** |
| **1.3.2 Meaningful Sequence & RTL** | Native `<html lang="en" dir="ltr">` and `<html lang="ar" dir="rtl">` switching; phone numbers, emails, and URLs isolated with `dir="ltr"` (`unicode-bidi: isolate`). | **PASS** |
| **1.4.3 Contrast (Minimum)** | Dark surfaces (`#091713` / `#12382B` with `#FFFFFF` / `#DCE7DE` / `#0FC28E`) and light surfaces (`#F6F6F0` / `#FFFFFF` with `#172521` / `#3D524B` / `#0E6B50`) exceed `4.5:1` for normal text and `3:1` for UI controls. | **PASS** |
| **2.1.1 Keyboard Navigation** | All header links, dropdown buttons, tabs (`role="tablist"` / `role="tab"`), accordions (`aria-expanded`), hero mode controls, and form inputs are 100% keyboard operable. | **PASS** |
| **2.4.1 Bypass Blocks** | Dedicated "Skip to main content" / "تخطي إلى المحتوى الرئيسي" link appears at top-start on initial `Tab` press. | **PASS** |
| **2.4.7 Focus Visible** | High-contrast `2px solid #0FC28E` focus ring (`outline-offset: 2px`) applied globally to `:focus-visible`. | **PASS** |
| **2.3.3 Animation from Interactions** | `@media (prefers-reduced-motion: reduce)` disables CSS transitions/animations and automatically switches `NexoraSylvaHero` into static High-Speed Lite Mode. | **PASS** |
| **3.1.1 / 3.1.2 Language of Page & Parts** | `lang="en"` and `lang="ar"` updated on root document and route wrapper; `hrefLang` attributes on language switcher. | **PASS** |
| **3.3.1 / 3.3.2 Error Identification & Labels** | Every form control in `ContactLeadForm.tsx` has an explicit `<label htmlFor="...">`, `aria-invalid` state, and accessible `role="alert"` / `role="status"` feedback. | **PASS** |

---

## 2. Documented Third-Party ThreeUI Limitations & Mitigations

Per Section 15 of the Master Build Directive (*"Target WCAG 2.2 AA for applicable interface content and controls, documenting any limitations introduced by the third-party ThreeUI implementation"*):

1. **Vendor Iframe Sandbox & Internal WebGL Canvas (`inner-green-3d.html`):**
   - The byte-exact `public/landing-pages/inner-green-3d.html` renders an interactive Three.js `<canvas id="scene">` and custom liquid-metal WebGL button effects inside an `<iframe>`.
   - **Mitigation Implemented:** Immediately beneath/integrated with the ThreeUI stage in `NexoraSylvaHero.tsx`, we provide a permanent, semantic HTML Executive Summary & CTA Bar containing the full positioning statement, verified capability pills, primary CTA (`Explore Our Solutions`), secondary CTA (`Talk to Our Team`), and a one-click **High-Speed Lite Mode** toggle that replaces the WebGL iframe with a pure semantic HTML/CSS hero layout.
2. **Reduced Motion & No-WebGL Users:**
   - Users with `prefers-reduced-motion: reduce` enabled at the OS/browser level—or devices without WebGL support—automatically bypass the WebGL shader compilation and receive the accessible semantic HTML hero immediately.
