"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { NexoraLogo } from "@/components/brand/NexoraLogo";
import { OdooPartnerBadge } from "@/components/brand/OdooPartnerBadge";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { SiteDictionary } from "@/content/siteContent";
import { localizePath } from "@/lib/i18n";

export interface HeaderProps {
  dict: SiteDictionary;
}

export function Header({ dict }: HeaderProps) {
  const pathname = usePathname() || "";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  const navItems = [
    { label: dict.nav.home, href: localizePath(dict.locale, "/") },
    {
      label: dict.nav.solutions,
      href: localizePath(dict.locale, "/solutions"),
      hasDropdown: true,
    },
    { label: dict.nav.about, href: localizePath(dict.locale, "/about") },
    { label: dict.nav.projects, href: localizePath(dict.locale, "/clients-and-work") },
    { label: dict.nav.howWeWork, href: localizePath(dict.locale, "/how-we-work") },
    { label: dict.nav.contact, href: localizePath(dict.locale, "/contact") },
  ];

  const isActive = (href: string) => {
    if (href === `/${dict.locale}`) {
      return pathname === `/${dict.locale}` || pathname === `/${dict.locale}/`;
    }
    if (href.endsWith("/solutions")) {
      return (
        pathname.startsWith(`/${dict.locale}/solutions`) ||
        pathname.startsWith(`/${dict.locale}/services`)
      );
    }
    if (href.endsWith("/clients-and-work")) {
      return (
        pathname.startsWith(`/${dict.locale}/clients-and-work`) ||
        pathname.startsWith(`/${dict.locale}/projects`)
      );
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0D1111]/95 backdrop-blur-md border-b border-white/10 text-white">
      {/* Single Main Navigation Bar */}
      <div className="max-w-container mx-auto px-3 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-2 lg:gap-3 min-w-0">
        <div className="flex items-center gap-2.5 shrink-0 min-w-0">
          <Link
            href={localizePath(dict.locale, "/")}
            aria-label={dict.contactInfo.companyName}
            className="shrink-0 focus-visible:rounded-lg"
          >
            <NexoraLogo variant="horizontal" theme="dark" markSize={32} />
          </Link>
          <OdooPartnerBadge
            locale={dict.locale}
            variant="header"
            className="hidden xl:inline-flex shrink-0"
          />
        </div>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 shrink-0">
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
              >
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    className={`px-2.5 xl:px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors inline-flex items-center gap-1 ${
                      isActive(item.href)
                        ? "text-[#00D1B4] bg-white/5"
                        : "text-[#D6E2DF] hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                  </Link>
                  <button
                    type="button"
                    aria-expanded={solutionsOpen}
                    aria-label={dict.nav.solutions}
                    onClick={() => setSolutionsOpen((prev) => !prev)}
                    className="p-1 text-[#9BB0AC] hover:text-white rounded-md"
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                </div>

                {solutionsOpen && (
                  <div className="absolute top-full start-0 pt-2 w-[390px] z-50">
                    <div className="rounded-2xl bg-[#131919] border border-white/15 shadow-architectural-dark p-3 space-y-1">
                      {dict.services.map((srv) => (
                        <Link
                          key={srv.slug}
                          href={localizePath(dict.locale, `/solutions/${srv.slug}`)}
                          onClick={() => setSolutionsOpen(false)}
                          className="block p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-mono text-[#00D1B4]">{srv.code}</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#9BB0AC] group-hover:text-white rtl:rotate-180" />
                          </div>
                          <p className="text-sm font-semibold text-white mt-0.5">{srv.title}</p>
                          <p className="text-xs text-[#9BB0AC] line-clamp-1 mt-0.5">
                            {srv.shortTitle}
                          </p>
                        </Link>
                      ))}
                      <div className="pt-2 mt-1 border-t border-white/10">
                        <Link
                          href={localizePath(dict.locale, "/solutions")}
                          onClick={() => setSolutionsOpen(false)}
                          className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-[#00D1B4] hover:text-white"
                        >
                          <span>{dict.nav.exploreSolutions}</span>
                          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-2.5 xl:px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive(item.href)
                    ? "text-[#00D1B4] bg-white/5"
                    : "text-[#D6E2DF] hover:text-white hover:bg-white/5"
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Actions: Language Switcher + Single Primary CTA */}
        <div className="hidden sm:flex items-center gap-2.5 shrink-0">
          <LanguageSwitcher
            currentLocale={dict.locale}
            label={dict.nav.switchLanguageLabel}
          />
          <Link
            href={localizePath(dict.locale, "/contact")}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#00D1B4] text-[#0D1111] text-sm font-semibold whitespace-nowrap hover:bg-[#5CE6D0] transition-colors shrink-0"
          >
            <span>{dict.nav.talkToTeam}</span>
            <ArrowRight className="w-4 h-4 rtl:rotate-180 shrink-0" />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher
            currentLocale={dict.locale}
            label={dict.nav.switchLanguageLabel}
            className="sm:hidden"
          />
          <button
            type="button"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2.5 rounded-xl bg-[#131919] text-white border border-white/15"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0D1111] border-t border-white/10 px-5 py-6 space-y-5 max-h-[85vh] overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="space-y-1">
            {navItems.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium ${
                    isActive(item.href)
                      ? "bg-[#131919] text-[#00D1B4]"
                      : "text-[#D6E2DF] hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </Link>
                {item.hasDropdown && (
                  <div className="ms-4 mt-1 ps-3 border-s border-[#00D1B4]/30 space-y-1">
                    {dict.services.map((srv) => (
                      <Link
                        key={srv.slug}
                        href={localizePath(dict.locale, `/solutions/${srv.slug}`)}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-2 px-3 text-sm text-[#9BB0AC] hover:text-white"
                      >
                        {srv.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <OdooPartnerBadge locale={dict.locale} variant="footer" />
            <Link
              href={localizePath(dict.locale, "/contact")}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#00D1B4] text-[#0D1111] font-semibold"
            >
              <span>{dict.nav.talkToTeam}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
