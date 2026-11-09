import type { Metadata } from "next";
import { Lexend, Cairo } from "next/font/google";
import "@/styles/globals.css";

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-lexend",
  display: "swap",
});

const cairoArabic = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nexora-tech.com"),
  title: {
    default: "Nexora Tech | Engineering Connected, Intelligent Systems — Sudan",
    template: "%s | Nexora Tech",
  },
  description:
    "Business automation, enterprise software (Odoo ERP, Nexora POS, SambaPOS), and certified low-current technology infrastructure solutions across Khartoum, Port Sudan, and the MENA region.",
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/icon-192.png",
  },
  openGraph: {
    type: "website",
    siteName: "Nexora Tech — Sudan",
    images: [
      {
        url: "/brand/og-nexora.jpg",
        width: 1200,
        height: 630,
        alt: "Nexora Tech — Engineering Connected, Intelligent Systems",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${lexend.variable} ${cairoArabic.variable}`}
    >
      <body className="min-h-screen flex flex-col bg-[#F6F6F0] text-[#172521] antialiased">
        {children}
      </body>
    </html>
  );
}
