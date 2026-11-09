import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Globe, ShieldCheck, ArrowUpRight } from "lucide-react";
import { NexoraLogo } from "@/components/brand/NexoraLogo";
import { OdooPartnerBadge } from "@/components/brand/OdooPartnerBadge";
import type { SiteDictionary } from "@/content/siteContent";
import { localizePath } from "@/lib/i18n";

export interface FooterProps {
  dict: SiteDictionary;
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="bg-[#0D1111] text-[#D6E2DF] border-t border-white/10">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          {/* Column 1: Brand & Verified Positioning + Odoo Partner / Certified Badges */}
          <div className="lg:col-span-4 space-y-5">
            <Link href={localizePath(dict.locale, "/")} className="inline-block">
              <NexoraLogo variant="horizontal" theme="dark" markSize={42} />
            </Link>
            <p className="text-sm text-[#9BB0AC] leading-relaxed">{dict.footer.aboutBlurb}</p>
            <OdooPartnerBadge locale={dict.locale} variant="footer" />
            <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#131919] border border-white/10 text-xs text-[#00D1B4] font-medium">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>{dict.footer.sudanFocusBadge}</span>
            </div>
          </div>

          {/* Column 2: Four Solution Families */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#00D1B4]">
              {dict.footer.servicesHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              {dict.services.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={localizePath(dict.locale, `/solutions/${srv.slug}`)}
                    className="text-[#D6E2DF] hover:text-[#00D1B4] transition-colors"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={localizePath(dict.locale, "/solutions")}
                  className="text-[#9BB0AC] hover:text-white transition-colors font-medium"
                >
                  {dict.nav.exploreSolutions}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Primary Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#00D1B4]">
              {dict.footer.companyHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href={localizePath(dict.locale, "/")}
                  className="text-[#D6E2DF] hover:text-[#00D1B4] transition-colors"
                >
                  {dict.nav.home}
                </Link>
              </li>
              <li>
                <Link
                  href={localizePath(dict.locale, "/solutions")}
                  className="text-[#D6E2DF] hover:text-[#00D1B4] transition-colors"
                >
                  {dict.nav.solutions}
                </Link>
              </li>
              <li>
                <Link
                  href={localizePath(dict.locale, "/about")}
                  className="text-[#D6E2DF] hover:text-[#00D1B4] transition-colors"
                >
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link
                  href={localizePath(dict.locale, "/clients-and-work")}
                  className="text-[#D6E2DF] hover:text-[#00D1B4] transition-colors"
                >
                  {dict.nav.projects}
                </Link>
              </li>
              <li>
                <Link
                  href={localizePath(dict.locale, "/how-we-work")}
                  className="text-[#D6E2DF] hover:text-[#00D1B4] transition-colors"
                >
                  {dict.nav.howWeWork}
                </Link>
              </li>
              <li>
                <Link
                  href={localizePath(dict.locale, "/contact")}
                  className="text-[#D6E2DF] hover:text-[#00D1B4] transition-colors"
                >
                  {dict.nav.contact}
                </Link>
              </li>
              <li>
                <Link
                  href={localizePath(dict.locale, "/design-system")}
                  className="text-[#9BB0AC] hover:text-white transition-colors inline-flex items-center gap-1"
                >
                  <span>{dict.nav.designSystem}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Profile Contact Record */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-[#00D1B4]">
              {dict.footer.contactHeading}
            </h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#00D1B4] shrink-0 mt-1" />
                <div>
                  <p className="text-white font-medium">{dict.contactInfo.address}</p>
                  <p className="text-xs text-[#9BB0AC] mt-0.5">{dict.contactInfo.slaStatement}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#00D1B4] shrink-0" />
                <a
                  href={`tel:${dict.contactInfo.phoneClean}`}
                  className="ltr-inline text-white hover:text-[#00D1B4] transition-colors font-medium"
                >
                  {dict.contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#00D1B4] shrink-0" />
                <a
                  href={`mailto:${dict.contactInfo.email}`}
                  className="ltr-inline text-white hover:text-[#00D1B4] transition-colors"
                >
                  {dict.contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#00D1B4] shrink-0" />
                <span className="ltr-inline text-[#9BB0AC]">{dict.contactInfo.website}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs text-[#9BB0AC]">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-start">
            <p>
              © {new Date().getFullYear()} {dict.footer.rightsReserved}
            </p>
            <span className="hidden sm:inline text-white/20" aria-hidden="true">
              ·
            </span>
            <p className="text-[#D6E2DF]">
              {dict.locale === "ar" ? (
                <>
                  تم التطوير بواسطة شريكنا الكندي{" "}
                  <a
                    href="https://nexorayyc.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#00D1B4] hover:text-white underline underline-offset-4 transition-colors"
                  >
                    NEXORA
                  </a>
                </>
              ) : (
                <>
                  Built by our Canadian Partner{" "}
                  <a
                    href="https://nexorayyc.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#00D1B4] hover:text-white underline underline-offset-4 transition-colors"
                  >
                    NEXORA
                  </a>
                </>
              )}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={localizePath(dict.locale, "/privacy")}
              className="hover:text-white transition-colors"
            >
              {dict.footer.privacyLink}
            </Link>
            <Link
              href={localizePath(dict.locale, "/terms")}
              className="hover:text-white transition-colors"
            >
              {dict.footer.termsLink}
            </Link>
            <Link
              href={localizePath(dict.locale, "/design-system")}
              className="hover:text-white transition-colors"
            >
              {dict.footer.designSystemLink}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
