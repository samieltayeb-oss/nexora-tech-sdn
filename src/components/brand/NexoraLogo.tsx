import React from "react";

export interface NexoraLogoProps {
  variant?: "horizontal" | "stacked" | "mark";
  theme?: "dark" | "light" | "monochrome-white" | "monochrome-dark";
  className?: string;
  markSize?: number;
}

/**
 * Official Nexora Tech (Sudan) Brand Identity Component
 * Uses the client-approved master logo `/brand/Nexora-Tech-Logo-Transparent.png`
 * and its derived dark-surface & symbol-mark variants.
 */
export function NexoraLogo({
  variant = "horizontal",
  theme = "dark",
  className = "",
  markSize = 40,
}: NexoraLogoProps) {
  if (variant === "mark") {
    const markSrc =
      theme === "monochrome-white"
        ? "/brand/nexora-mark-white.png"
        : "/brand/nexora-mark-teal.png";
    return (
      <span
        className={`inline-flex items-center shrink-0 select-none ${className}`}
        dir="ltr"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={markSrc}
          alt="Nexora Tech"
          width={markSize}
          height={Math.round(markSize * 0.8)}
          style={{ height: `${markSize}px`, width: "auto" }}
          className="object-contain"
        />
      </span>
    );
  }

  if (variant === "stacked") {
    const wordmarkColor =
      theme === "dark" || theme === "monochrome-white" ? "#FFFFFF" : "#111817";
    return (
      <span
        className={`inline-flex flex-col items-center gap-1.5 select-none ${className}`}
        dir="ltr"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/brand/nexora-mark-teal.png"
          alt="Nexora Tech"
          width={markSize + 8}
          height={markSize}
          style={{ height: `${markSize + 4}px`, width: "auto" }}
          className="object-contain"
        />
        <span className="flex flex-col items-end leading-none">
          <span
            className="text-xl font-bold tracking-tight"
            style={{ color: wordmarkColor, fontFamily: "var(--font-lexend), sans-serif" }}
          >
            Nexora
          </span>
          <span
            className="text-[9px] font-semibold tracking-[0.34em] uppercase mt-0.5 text-[#00D1B4]"
          >
            TECH
          </span>
        </span>
      </span>
    );
  }

  // Horizontal Master Lockup using the official Nexora-Tech-Logo-Transparent.png
  const horizontalSrc =
    theme === "dark" || theme === "monochrome-white"
      ? "/brand/Nexora-Tech-Logo-Dark-Surface.png"
      : "/brand/Nexora-Tech-Logo-Transparent.png";

  const calculatedWidth = Math.round(markSize * (307 / 78));

  return (
    <span
      className={`inline-flex items-center shrink-0 select-none ${className}`}
      dir="ltr"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={horizontalSrc}
        alt="Nexora Tech"
        width={calculatedWidth}
        height={markSize}
        style={{ height: `${markSize}px`, width: "auto" }}
        className="object-contain"
      />
    </span>
  );
}
