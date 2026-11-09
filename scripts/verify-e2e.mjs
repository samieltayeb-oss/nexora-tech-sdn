const BASE = "http://localhost:3040";

const routes = [
  "/en",
  "/en/solutions",
  "/en/solutions/enterprise-business",
  "/en/solutions/pos-retail",
  "/en/solutions/digital-transformation-ai",
  "/en/solutions/infrastructure-low-current",
  "/en/about",
  "/en/how-we-work",
  "/en/contact",
  "/en/services",
  "/en/services/enterprise-business-solutions",
  "/en/services/pos-and-retail-solutions",
  "/en/services/digital-transformation-and-ai",
  "/en/services/infrastructure-and-low-current-systems",
  "/en/privacy",
  "/en/terms",
  "/en/design-system",
  "/ar",
  "/ar/solutions",
  "/ar/solutions/enterprise-business",
  "/ar/solutions/pos-retail",
  "/ar/solutions/digital-transformation-ai",
  "/ar/solutions/infrastructure-low-current",
  "/ar/about",
  "/ar/how-we-work",
  "/ar/contact",
  "/ar/services",
  "/ar/services/enterprise-business-solutions",
  "/ar/services/pos-and-retail-solutions",
  "/ar/services/digital-transformation-and-ai",
  "/ar/services/infrastructure-and-low-current-systems",
  "/ar/privacy",
  "/ar/terms",
  "/ar/design-system",
  "/assets/editorial/hero-connected-operation-wide.webp",
  "/assets/editorial/hero-connected-operation-mobile.webp",
  "/assets/editorial/solution-enterprise-erp.webp",
  "/assets/editorial/solution-pos-retail.webp",
  "/assets/editorial/solution-digital-transformation.webp",
  "/assets/editorial/solution-infrastructure-low-current.webp",
  "/brand/Nexora-Tech-Logo-Transparent.png",
  "/brand/Nexora-Tech-Logo-Dark-Surface.png",
  "/brand/nexora-mark-teal.png",
  "/brand/nexora-mark-white.png",
  "/landing-pages/inner-green-3d.html",
  "/landing-pages/inner-green-assets/three.min.js",
  "/landing-pages/inner-green-assets/card-ecostove.jpg",
  "/landing-pages/inner-green-assets/card-ethos.jpg",
  "/landing-pages/inner-green-assets/lexend-latin.woff2",
  "/robots.txt",
  "/sitemap.xml",
];

let passed = 0;
for (const r of routes) {
  const res = await fetch(BASE + r);
  const body = await res.arrayBuffer();
  if (res.status === 200 && body.byteLength > 0) {
    passed++;
  } else {
    console.error("[FAIL]", r, res.status, body.byteLength);
  }
}
console.log(`[PASS] Routes & Assets verified: ${passed}/${routes.length} returned HTTP 200 OK`);

// Verify Security Headers & English Hero Copy
const homeRes = await fetch(BASE + "/en");
const enHtml = await homeRes.text();
console.log("[HEADERS] X-Content-Type-Options:", homeRes.headers.get("x-content-type-options"));
console.log("[HEADERS] X-Frame-Options:", homeRes.headers.get("x-frame-options"));
console.log("[HEADERS] Referrer-Policy:", homeRes.headers.get("referrer-policy"));
console.log(
  "[EN HERO CHECK] Plain-language H1 present:",
  enHtml.includes("Business software and infrastructure, built to work together."),
);
console.log(
  "[EN HERO CHECK] Supporting copy present:",
  enHtml.includes("We implement Odoo ERP and point-of-sale systems"),
);
console.log(
  "[EN HERO CHECK] Sylva retired from public homepage:",
  !enHtml.includes("inner-green-3d.html"),
);

// Verify Arabic RTL and Hero Copy on /ar
const arHtml = await (await fetch(BASE + "/ar")).text();
const hasRtl = arHtml.includes('dir="rtl"');
const hasArHeroH1 = arHtml.includes("برمجيات أعمال وبنية تحتية تقنية تعمل معًا");
const hasOdoo = arHtml.includes("Odoo ERP");
console.log(
  `[AR CHECK] dir="rtl": ${hasRtl}, AR Hero H1: ${hasArHeroH1}, Odoo ERP: ${hasOdoo}`,
);

// Test Contact API Validation (Invalid payload)
const invalidRes = await fetch(BASE + "/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ fullName: "A", email: "bad", phone: "12", consent: false }),
});
const invalidJson = await invalidRes.json();
console.log("[API] Invalid Payload Test:", invalidRes.status, invalidJson.errorCode);

// Test Contact API Honeypot Spam Rejection
const spamRes = await fetch(BASE + "/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ fullName: "Spam Bot", websiteHoneypot: "http://spam.com" }),
});
const spamJson = await spamRes.json();
console.log("[API] Honeypot Spam Test:", spamRes.status, spamJson.errorCode);

// Test Contact API Valid Inquiry (with optional phone omitted)
const validRes = await fetch(BASE + "/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    fullName: "Eng. Tariq Osman",
    organization: "Khartoum Trading Group",
    email: "t.osman@khtrading.sd",
    phone: "",
    serviceInterest: "enterprise-business",
    locationCity: "Khartoum, Sudan",
    projectSummary:
      "We would like to scope an Odoo ERP and Nexora POS deployment connected to our site network.",
    consent: true,
    locale: "en",
  }),
});
const validJson = await validRes.json();
console.log("[API] Valid Inquiry Test:", validRes.status, validJson.deliveryStatus, validJson.referenceId);
