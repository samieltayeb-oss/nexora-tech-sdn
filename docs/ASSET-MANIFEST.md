# NEXORA TECH — SUDAN
## Asset Manifest, Generated Editorial Art & Licensing Governance (`docs/ASSET-MANIFEST.md`)

**Entity:** Nexora Tech — Khartoum, Sudan  
**Image Generation Engine:** Workspace `image-generator` (Nano Banana)  
**Shared Art Direction:**
> Premium enterprise technology editorial imagery for Nexora Tech Sudan. Graphite and off-white materials, precise turquoise (`#00D1B4`) connection accents, controlled studio lighting, realistic physical scale, clean composition, and restrained depth. Make the subject recognizable without labels. Keep typography, logos, and product branding out of the image. Use plausible generic equipment and interface abstractions. Avoid nature motifs, generic AI imagery, humanoid robots, and decorative neon.

---

## 1. Generated Editorial Website Imagery (`public/assets/editorial/`)

All 6 generated images are strictly separated from project evidence, contain zero third-party logos or fabricated product UI claims, and are delivered in responsive WebP and JPEG formats with reserved dimensions and localized `alt` text (`en` / `ar`).

| Asset ID | Local WebP Path | Dimensions | Placement | Selected Generation Prompt |
|---|---|---|---|---|
| `hero-connected-operation-wide` | `public/assets/editorial/hero-connected-operation-wide.webp` | `1376 × 768` (16:9) | Homepage Hero (Desktop) | Three-quarter editorial studio composition of a compact modern POS checkout terminal on the left, an elevated abstract order-and-inventory enterprise application glass/slate surface in the center-top, and a restrained dark-graphite rack network switch with neatly routed fiber optic patch cords on the lower right. A single precise glowing turquoise (`#00D1B4`) line cleanly connects the POS terminal to the order-and-inventory surface and down into the network switch on a deep charcoal-graphite (`#0D1111`) background. |
| `hero-connected-operation-mobile` | `public/assets/editorial/hero-connected-operation-mobile.webp` | `896 × 1200` (3:4) | Homepage Hero (Mobile Portrait) | Vertical three-quarter editorial composition stacking a compact POS terminal, an abstract order-and-inventory enterprise application surface, and a dark-graphite network switch with neatly routed fiber connected vertically by a single precise turquoise (`#00D1B4`) line on a charcoal (`#0D1111`) background. |
| `solution-enterprise-erp` | `public/assets/editorial/solution-enterprise-erp.webp` | `1200 × 896` (4:3) | Enterprise Business Solutions (`/[locale]/solutions/enterprise-business`) & Homepage | Order moving through receiving, inventory, and fulfillment using an abstract geometric business application layer and a restrained warehouse workstation detail (barcode scanner, clean modular parcels on an off-white and graphite surface, and structured turquoise workflow blocks). |
| `solution-pos-retail` | `public/assets/editorial/solution-pos-retail.webp` | `1200 × 896` (4:3) | POS & Retail Solutions (`/[locale]/solutions/pos-retail`) & Homepage | Credible modern checkout counter with a sleek matte-graphite touchscreen POS terminal, handheld barcode scanner on stand, and compact thermal receipt printer in a clean architectural retail/hospitality setting with subtle turquoise (`#00D1B4`) status accent. |
| `solution-digital-transformation` | `public/assets/editorial/solution-digital-transformation.webp` | `1200 × 896` (4:3) | Digital Transformation & AI (`/[locale]/solutions/digital-transformation-ai`) & Homepage | Separate modular business systems (translucent off-white and matte-graphite blocks) converging into one clear unified data workflow with structured application layers, precise turquoise (`#00D1B4`) data paths, and a clean abstract analytics surface. |
| `solution-infrastructure-low-current` | `public/assets/editorial/solution-infrastructure-low-current.webp` | `1200 × 896` (4:3) | Infrastructure & Low-Current Systems (`/[locale]/solutions/infrastructure-low-current`) & Homepage | Realistic studio close-up of a structured cabling patch panel, matte-black managed network switch, and neatly routed turquoise (`#00D1B4`) and off-white fiber optic patch cables in a server rack with zero manufacturer branding. |

---

## 2. Official Brand Identity Marks (`public/brand/`)

| Asset Path | Source | Purpose | Publication Status |
|---|---|---|---|
| `public/brand/Nexora-Tech-Logo-Transparent.png` | Official Client Brand File (`307×78` transparent PNG) | Master horizontal logo lockup (light surface) | `approved_for_publication` |
| `public/brand/Nexora-Tech-Logo-Dark-Surface.png` | Derived from `Nexora-Tech-Logo-Transparent.png` | Master horizontal logo lockup (dark `#0D1111` surface with white wordmark & turquoise mark/TECH) | `approved_for_publication` |
| `public/brand/nexora-mark-teal.png` | Extracted from `Nexora-Tech-Logo-Transparent.png` | Circuit-inspired `N` mark in brand turquoise | `approved_for_publication` |
| `public/brand/nexora-mark-white.png` | Extracted from `Nexora-Tech-Logo-Transparent.png` | Monochrome white `N` mark | `approved_for_publication` |

---

## 3. Source-Backed Profile & Client Assets (Gated via `src/content/evidenceRegister.ts`)

| Asset Path | Source | Governance Status |
|---|---|---|
| `public/assets/profile/rami-suliman-gm.png` | Profile p. 2 | Held in Evidence Register (`EV-03` — `needs_verification`) pending explicit portrait release sign-off. |
| `public/assets/clients/*.png` (9 logos) | Profile p. 9 | Held in Evidence Register (`EV-10` — `needs_verification`) behind client permission toggle until written client authorization is confirmed. |

---

## 4. Retained ThreeUI Vendor Reference Assets (`05f359ce157a`)

Retained byte-for-byte in `public/landing-pages/` and `src/shaders/` for internal reference (`/[locale]/design-system`), verified via `npm run verify:threeui` (10/10 SHA-256 matches).
