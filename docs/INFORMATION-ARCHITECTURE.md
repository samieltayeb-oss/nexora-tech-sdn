# NEXORA TECH (SUDAN) — MULTIPAGE INFORMATION ARCHITECTURE & SITEMAP

**Document ID:** `NEXORA-SD-IA-005`  
**Routing Architecture:** Next.js App Router with Locale Prefix (`/en/...` and `/ar/...`)  
**Default Locale Redirect:** `/` → `/en` (with automatic language switcher preserving exact sub-route)

---

## 1. Complete Bilingual Route Map

Every route below is backed by verified facts from the Company Profile and built as a complete, responsive, server-rendered page in both English (`LTR`) and Arabic (`RTL`).

| Route (English) | Route (Arabic) | Page Title (EN) | Primary Commercial & Editorial Purpose | Profile Source Basis |
|---|---|---|---|---|
| `/en` | `/ar` | Home — Engineering Connected, Intelligent Systems | ThreeUI `SylvaHero` (`living-green`) centerpiece, executive positioning, 4 service pillars, featured solutions, industries, 4 differentiators, 9 selected clients, 3-stage process, and inquiry CTA. | PDF pp. 1–11 |
| `/en/about` | `/ar/about` | About Nexora Tech | 12+ year operational history, General Manager's Statement (Rami Abdelrhman Suliman), Vision & Mission, in-house team structure, and Khartoum/Port Sudan presence. | PDF pp. 2, 4, 5, 6, 10, 11 |
| `/en/services` | `/ar/services` | Our Services | Comprehensive index of Nexora Tech's 4 verified service lines, manufacturer platforms, and end-to-end delivery lifecycle. | PDF pp. 6, 7, 8, 10 |
| `/en/services/enterprise-business-solutions` | `/ar/services/enterprise-business-solutions` | Enterprise Business Solutions (Odoo ERP) | Dedicated deep-dive into Odoo ERP implementation, optimization, consultancy, requirements/gap analysis, customization, migration, training, and ongoing support. | PDF pp. 2, 6, 7, 8 |
| `/en/services/pos-and-retail-solutions` | `/ar/services/pos-and-retail-solutions` | POS & Retail Solutions (Nexora POS & SambaPOS) | Dedicated deep-dive into retail, hospitality, and food-service POS systems featuring Nexora POS and SambaPOS. | PDF p. 7 |
| `/en/services/digital-transformation-and-ai` | `/ar/services/digital-transformation-and-ai` | Digital Transformation & AI | Dedicated deep-dive into custom software, system integration, cloud services, data analytics, e-commerce, and mobile solutions. | PDF pp. 2, 7 |
| `/en/services/infrastructure-and-low-current-systems` | `/ar/services/infrastructure-and-low-current-systems` | Infrastructure & Low-Current Systems | Dedicated deep-dive into structured cabling, fiber optics, CCTV, access control, fire alarm systems, and data-center engineering across Cisco, Hikvision, Honeywell, and Ubiquiti. | PDF pp. 2, 6, 7, 10 |
| `/en/solutions` | `/ar/solutions` | Integrated Solutions & Platforms | Productized & integrated offerings: Odoo ERP + POS convergence, Smart Building & Low-Current Turnkey Stack, and Data-Driven Enterprise Automation. | PDF pp. 1, 2, 6, 7, 10 |
| `/en/industries` | `/ar/industries` | Industries & Sectors We Serve | Sector-specific operational architectures for Oil & Gas, Manufacturing, Retail, Hospitality & Food-Service, Construction, Real Estate, Logistics & Fleet Operations, and Government/Enterprise. | PDF pp. 6, 7, 9 |
| `/en/projects` | `/ar/projects` | Selected Clients, Work & Engineering Evidence | Showcases the 9 profile-listed client organizations, multi-sector execution scope, auditable testing/commissioning deliverables, and representative delivery blueprints. | PDF pp. 6, 8, 9, 10 |
| `/en/insights` | `/ar/insights` | Technical Insights & Engineering Perspectives | Practical engineering articles covering ERP gap analysis, low-current link certification & as-built handover standards, and resilient POS operations. | PDF pp. 6, 7, 8, 10 |
| `/en/contact` | `/ar/contact` | Contact & Project Consultation | Validated project inquiry form, direct click-to-call (`+249 120 4040 45`), click-to-email (`r.suliman@nexora-tech.com`), Khartoum HQ address, and Port Sudan/Khartoum field dispatch details. | PDF pp. 10, 11 & Business Card |
| `/en/privacy` | `/ar/privacy` | Privacy Policy | Transparent disclosure on how business inquiry data is validated, transmitted, and protected. | Section 7 & 12 Directive |
| `/en/terms` | `/ar/terms` | Terms of Use | Corporate website terms, intellectual property notices, and engineering scope disclaimers. | Section 7 Directive |
| `/en/design-system` | `/ar/design-system` | Design System & ThreeUI Verification Showcase | Interactive living specification of colors, typography, components, states, and ThreeUI SHA-256 verification status. | Section 4.5 & 5 Directive |

---

## 2. Navigation Hierarchy

### 2.1 Global Header Navigation (7 Primary Items + Language Switcher + CTA)
1. **Home** (`/en` | `/ar`)
2. **About** (`/en/about` | `/ar/about`)
3. **Services** (`/en/services` | `/ar/services`) — *Includes dropdown/quick-links to the 4 dedicated service detail pages*
4. **Solutions** (`/en/solutions` | `/ar/solutions`)
5. **Industries** (`/en/industries` | `/ar/industries`)
6. **Clients & Work** (`/en/projects` | `/ar/projects`)
7. **Insights** (`/en/insights` | `/ar/insights`)
- **Utility Controls:** Bilingual Switcher (`العربية` / `EN`) + Primary CTA Button (`Talk to Our Team` → `/[locale]/contact`)

### 2.2 Global Footer Navigation
- **Column 1 — Brand & Executive Identity:** Official Nexora Tech logo, verified tagline, 12+ years badge, and Khartoum & Port Sudan coverage badge.
- **Column 2 — Verified Services:** Direct links to all 4 service detail pages + Integrated Solutions.
- **Column 3 — Company & Evidence:** About Nexora, Industries Served, Selected Clients & Work, Technical Insights, Design System Showcase.
- **Column 4 — Verified Contact & Headquarters:**
  - Address: `Al Manshiya, Block 29, Property No. 32, Khartoum, Sudan`
  - Field Hubs: `Khartoum & Port Sudan (SLA Support)`
  - Phone: `+249 120 4040 45`
  - Email: `r.suliman@nexora-tech.com`
- **Bottom Legal Bar:** Copyright notice, Privacy Policy (`/privacy`), Terms of Use (`/terms`), and ThreeUI Source Verification Status badge.

---

## 3. SEO & Crawlability Architecture

- **XML Sitemap (`/sitemap.xml`):** Dynamically generated via `src/app/sitemap.ts` listing all English and Arabic canonical URLs with `alternates.languages` (`en`, `ar`).
- **Robots Configuration (`/robots.txt`):** Generated via `src/app/robots.ts` allowing full indexing of `/en/*` and `/ar/*` while excluding `/api/*`.
- **Structured Data (`JSON-LD`):** `Organization` and `ProfessionalService` schema injected into the locale layout containing strictly verified facts (`Nexora Tech`, `https://www.nexora-tech.com`, `+249 120 4040 45`, `r.suliman@nexora-tech.com`, `Al Manshiya, Block 29, Property No. 32, Khartoum, Sudan`).
