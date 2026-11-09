# NEXORA TECH (SUDAN) — BUILD & DEPLOYMENT GUIDE

**Document ID:** `NEXORA-SD-DPL-012`  
**Target Domain:** `https://www.nexora-tech.com`  
**Framework:** Next.js 16.4.5 (`npm run build` / `npm run start`)

---

## 1. Prerequisites & Environment Requirements

- **Node.js:** `>= 20.9.0` (Verified on Node `v24.16.0`)
- **Package Manager:** `npm >= 10.0.0`

---

## 2. Local Verification & Build Commands

```bash
# 1. Install dependencies
npm install

# 2. Verify 100% SHA-256 & byte-length integrity of all 10 ThreeUI files
npm run verify:threeui

# 3. Run production build
npm run build

# 4. Start production server locally (default port 3000)
npm run start
```

---

## 3. Environment Variables (`.env.local` / Production Hosting)

No secrets are required to build or render the website. To enable live automated email/webhook forwarding on the `/api/contact` endpoint in production, configure:

```env
# Optional: Webhook URL (e.g., Make, Zapier, Resend webhook, or internal ERP intake endpoint)
# When set, POST /api/contact forwards validated inquiries directly to this URL and returns deliveryStatus: "delivered"
NEXORA_CONTACT_WEBHOOK_URL=https://your-production-webhook-endpoint.example.com
```

> **Security Note:** Never prefix private webhook URLs or SMTP credentials with `NEXT_PUBLIC_`. Keep all delivery credentials strictly server-side.

---

## 4. Recommended Hosting & DNS Configuration (`www.nexora-tech.com`)

1. **Recommended Platforms:**
   - **Vercel** (Zero-configuration Next.js App Router, global Edge CDN with PoPs serving MENA/Africa, automatic TLS).
   - **Cloudflare Pages / Workers** or **Self-Hosted Docker / Node.js VPS** behind Cloudflare CDN (recommended for Sudan traffic optimization and DDoS/WAF protection).
2. **DNS Records for `nexora-tech.com`:**
   - `A` record `@` → Hosting IP (or ALIAS/ANAME)
   - `CNAME` record `www` → Hosting target (`cname.vercel-dns.com` or server hostname)
   - Ensure apex `nexora-tech.com` redirects (`308 Permanent Redirect`) to `https://www.nexora-tech.com`.
3. **Pre-Deployment Checklist:**
   - Run `npm run verify:threeui` (must exit `0`).
   - Run `npm audit` (must report `0 vulnerabilities`).
   - Run `npm run build` (must compile all `/en` and `/ar` routes cleanly).
