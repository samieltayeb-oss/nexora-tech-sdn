import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NexoraLogo } from "@/components/brand/NexoraLogo";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#091713] text-white flex items-center justify-center px-6 py-20 nx-grid-bg-dark">
      <div className="max-w-xl w-full rounded-3xl bg-[#12382B]/70 border border-[#5EA885]/35 p-10 text-center space-y-6">
        <div className="flex justify-center">
          <NexoraLogo variant="horizontal" theme="dark" />
        </div>
        <p className="text-xs font-mono uppercase tracking-widest text-[#0FC28E]">
          HTTP 404 · ROUTE NOT FOUND
        </p>
        <h1 className="nx-h1 text-white">Page Not Found / الصفحة غير موجودة</h1>
        <p className="text-sm text-[#DCE7DE]/85 leading-relaxed">
          The requested page does not exist or has been moved. Choose your preferred language below to explore Nexora Tech’s verified services and engineering solutions.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/en"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0FC28E] text-[#091713] font-semibold text-sm hover:bg-[#5EA885] transition-colors"
          >
            <span>English Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/ar"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#091713] text-white border border-[#5EA885]/40 font-semibold text-sm hover:border-[#0FC28E] transition-colors"
          >
            <span>الرئيسية (العربية)</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
