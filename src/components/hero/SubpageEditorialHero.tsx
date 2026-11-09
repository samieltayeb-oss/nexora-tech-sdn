import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface HeroActionItem {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

export interface SubpageEditorialHeroProps {
  locale: "en" | "ar";
  eyebrow: string;
  title: string;
  subtitle?: string;
  lead: string;
  secondaryLead?: string;
  imagePath: string;
  imageAlt: string;
  imageObjectPosition?: string;
  breadcrumbs?: BreadcrumbItem[];
  badges?: string[];
  actions?: HeroActionItem[];
}

export function SubpageEditorialHero({
  locale,
  eyebrow,
  title,
  subtitle,
  lead,
  secondaryLead,
  imagePath,
  imageAlt,
  imageObjectPosition = "object-[center_28%]",
  breadcrumbs,
  badges,
  actions,
}: SubpageEditorialHeroProps) {
  const isAr = locale === "ar";

  return (
    <section
      aria-label={title}
      className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[580px] bg-[#0D1111] text-white border-b border-white/10 overflow-hidden flex items-end"
    >
      {/* Full-Bleed Photographic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imagePath}
          alt={imageAlt}
          className={`w-full h-full object-cover ${imageObjectPosition}`}
        />

        {/* Minimal Bottom-Anchored Gradient Scrim — Keeps the upper 50% of the photograph (including wall signage & people) bright & natural while giving the bottom headline & breadcrumbs crisp contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: isAr
              ? "radial-gradient(ellipse 80% 75% at 85% 95%, rgba(11,16,16,0.92) 0%, rgba(11,16,16,0.55) 52%, transparent 80%), linear-gradient(180deg, rgba(11,16,16,0.05) 0%, rgba(11,16,16,0.18) 44%, rgba(11,16,16,0.86) 80%, rgba(11,16,16,0.95) 100%)"
              : "radial-gradient(ellipse 80% 75% at 15% 95%, rgba(11,16,16,0.92) 0%, rgba(11,16,16,0.55) 52%, transparent 80%), linear-gradient(180deg, rgba(11,16,16,0.05) 0%, rgba(11,16,16,0.18) 44%, rgba(11,16,16,0.86) 80%, rgba(11,16,16,0.95) 100%)",
          }}
        />
      </div>

      {/* Minimal Foreground Headline & Copy Block (Anchored at bottom-start so the full scene breathes) */}
      <div className="relative z-10 w-full max-w-container mx-auto px-4 sm:px-6 lg:px-10 pt-36 sm:pt-44 lg:pt-48 pb-10 sm:pb-14 lg:pb-16">
        <div className="max-w-2xl space-y-4">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav
              aria-label="Breadcrumb"
              className="inline-flex flex-wrap items-center gap-2 px-3 py-1 rounded-full bg-[#0D1111]/75 backdrop-blur-md border border-white/10 text-xs text-[#D6E2DF]"
            >
              {breadcrumbs.map((crumb, index) => (
                <React.Fragment key={`${crumb.label}-${index}`}>
                  {crumb.href ? (
                    <Link
                      href={crumb.href}
                      className="hover:text-white transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-[#00D1B4] font-medium">
                      {crumb.label}
                    </span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-white/40">/</span>
                  )}
                </React.Fragment>
              ))}
            </nav>
          )}

          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0D1111]/80 backdrop-blur-md border border-white/15 text-xs font-mono uppercase tracking-wider text-[#00D1B4]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D1B4]" />
            <span>{eyebrow}</span>
          </div>

          {subtitle && (
            <p className="text-xs sm:text-sm font-mono text-[#00D1B4]">
              {subtitle}
            </p>
          )}

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-[1.12]">
            {title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-[#E6F0EE] leading-relaxed max-w-xl">
            {lead}
          </p>

          {secondaryLead && (
            <p className="text-xs sm:text-sm text-[#C8D6D3] leading-relaxed max-w-xl">
              {secondaryLead}
            </p>
          )}

          {badges && badges.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-1">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1 rounded-lg bg-[#0D1111]/75 backdrop-blur-md border border-white/15 text-xs font-medium text-white"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}

          {actions && actions.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-3">
              {actions.map((action) =>
                action.variant === "secondary" ? (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 sm:py-3 rounded-xl bg-[#0D1111]/80 backdrop-blur-md text-white border border-white/20 font-semibold text-xs sm:text-sm hover:border-[#00D1B4] transition-colors"
                  >
                    <span>{action.label}</span>
                  </Link>
                ) : (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#00D1B4] text-[#0D1111] font-bold text-xs sm:text-sm hover:bg-[#5CE6D0] transition-colors"
                  >
                    <span>{action.label}</span>
                    <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                  </Link>
                ),
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
