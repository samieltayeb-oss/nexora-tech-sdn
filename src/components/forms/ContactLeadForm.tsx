"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Send,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import type { SiteDictionary } from "@/content/siteContent";
import { localizePath } from "@/lib/i18n";

export interface ContactLeadFormProps {
  dict: SiteDictionary;
  initialSolution?: string;
}

interface ServerResponse {
  ok: boolean;
  validated?: boolean;
  deliveryStatus?: "delivered" | "pending_smtp_configuration";
  referenceId?: string;
  recipient?: string;
  message?: string;
  fieldErrors?: Record<string, string>;
}

export function ContactLeadForm({ dict, initialSolution }: ContactLeadFormProps) {
  const [fullName, setFullName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceInterest, setServiceInterest] = useState(
    initialSolution &&
      dict.contactSection.serviceOptions.some((o) => o.value === initialSolution)
      ? initialSolution
      : dict.contactSection.serviceOptions[0]?.value ?? "enterprise-business",
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const sol = params.get("solution") || params.get("service");
      if (sol) {
        const matched = dict.contactSection.serviceOptions.find(
          (o) => o.value === sol || sol.includes(o.value),
        );
        if (matched) {
          setServiceInterest(matched.value);
        }
      }
    }
  }, [dict.contactSection.serviceOptions]);
  const [locationCity, setLocationCity] = useState("");
  const [projectSummary, setProjectSummary] = useState("");
  const [consent, setConsent] = useState(false);
  const [websiteHoneypot, setWebsiteHoneypot] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState<ServerResponse | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setResponse(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          organization,
          email,
          phone,
          serviceInterest,
          locationCity,
          projectSummary,
          consent,
          websiteHoneypot,
          locale: dict.locale,
        }),
      });
      const data = (await res.json()) as ServerResponse;
      setResponse(data);
    } catch {
      setResponse({
        ok: false,
        message:
          dict.locale === "ar"
            ? "تعذر الاتصال بالخادم حالياً. يرجى التواصل مباشرة عبر الهاتف أو البريد الإلكتروني."
            : "Network error while submitting. Please use the direct phone or email channels below.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const mailtoHref = `mailto:${dict.contactInfo.email}?subject=${encodeURIComponent(
    `[Nexora Inquiry] ${serviceInterest} — ${organization || fullName}`,
  )}&body=${encodeURIComponent(
    `Name: ${fullName}\nOrganization: ${organization}\nPhone: ${phone}\nLocation: ${locationCity}\nService: ${serviceInterest}\n\nProject Scope:\n${projectSummary}`,
  )}`;

  const whatsappHref = `https://wa.me/249120404045?text=${encodeURIComponent(
    `Hello Nexora Tech (${dict.contactInfo.gmName}), I would like to discuss a project:\nName: ${fullName}\nOrganization: ${organization}\nService: ${serviceInterest}\nScope: ${projectSummary}`,
  )}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      {/* Left Column: Validated Inquiry Form */}
      <div className="lg:col-span-7 rounded-3xl bg-white border border-[#DCE7DE] p-7 sm:p-10 shadow-architectural text-[#172521]">
        <div className="space-y-2 pb-6 border-b border-[#DCE7DE]">
          <h2 className="nx-h2 text-[#172521]">{dict.contactSection.formTitle}</h2>
          <p className="text-sm text-[#3D524B]">{dict.contactSection.formSubtitle}</p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
          {/* Anti-spam Honeypot (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="websiteHoneypot">Website</label>
            <input
              id="websiteHoneypot"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={websiteHoneypot}
              onChange={(e) => setWebsiteHoneypot(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-[#172521] mb-1.5">
                {dict.contactSection.fields.fullName} <span className="text-red-600">*</span>
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={dict.contactSection.fields.fullNamePlaceholder}
                aria-invalid={Boolean(response?.fieldErrors?.fullName)}
                className="w-full rounded-xl border border-[#DCE7DE] bg-[#F6F6F0]/60 px-4 py-3 text-sm text-[#172521] focus:bg-white focus:border-[#0E6B50]"
              />
              {response?.fieldErrors?.fullName && (
                <p className="text-xs text-red-700 mt-1">{response.fieldErrors.fullName}</p>
              )}
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-semibold text-[#172521] mb-1.5">
                {dict.contactSection.fields.organization}
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                placeholder={dict.contactSection.fields.organizationPlaceholder}
                className="w-full rounded-xl border border-[#DCE7DE] bg-[#F6F6F0]/60 px-4 py-3 text-sm text-[#172521] focus:bg-white focus:border-[#0E6B50]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#172521] mb-1.5">
                {dict.contactSection.fields.email} <span className="text-red-600">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                dir="ltr"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={dict.contactSection.fields.emailPlaceholder}
                aria-invalid={Boolean(response?.fieldErrors?.email)}
                className="w-full rounded-xl border border-[#DCE7DE] bg-[#F6F6F0]/60 px-4 py-3 text-sm text-[#172521] focus:bg-white focus:border-[#0E6B50]"
              />
              {response?.fieldErrors?.email && (
                <p className="text-xs text-red-700 mt-1">{response.fieldErrors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#172521] mb-1.5">
                {dict.contactSection.fields.phone}
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                dir="ltr"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={dict.contactSection.fields.phonePlaceholder}
                aria-invalid={Boolean(response?.fieldErrors?.phone)}
                className="w-full rounded-xl border border-[#DCE7DE] bg-[#F6F6F0]/60 px-4 py-3 text-sm text-[#172521] focus:bg-white focus:border-[#0E6B50]"
              />
              {response?.fieldErrors?.phone && (
                <p className="text-xs text-red-700 mt-1">{response.fieldErrors.phone}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="serviceInterest" className="block text-sm font-semibold text-[#172521] mb-1.5">
                {dict.contactSection.fields.serviceInterest} <span className="text-red-600">*</span>
              </label>
              <select
                id="serviceInterest"
                name="serviceInterest"
                value={serviceInterest}
                onChange={(e) => setServiceInterest(e.target.value)}
                className="w-full rounded-xl border border-[#DCE7DE] bg-[#F6F6F0]/60 px-4 py-3 text-sm text-[#172521] focus:bg-white focus:border-[#0E6B50]"
              >
                {dict.contactSection.serviceOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="locationCity" className="block text-sm font-semibold text-[#172521] mb-1.5">
                {dict.contactSection.fields.locationCity}
              </label>
              <input
                id="locationCity"
                name="locationCity"
                type="text"
                value={locationCity}
                onChange={(e) => setLocationCity(e.target.value)}
                placeholder={dict.contactSection.fields.locationPlaceholder}
                className="w-full rounded-xl border border-[#DCE7DE] bg-[#F6F6F0]/60 px-4 py-3 text-sm text-[#172521] focus:bg-white focus:border-[#0E6B50]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="projectSummary" className="block text-sm font-semibold text-[#172521] mb-1.5">
              {dict.contactSection.fields.projectSummary} <span className="text-red-600">*</span>
            </label>
            <textarea
              id="projectSummary"
              name="projectSummary"
              rows={4}
              required
              value={projectSummary}
              onChange={(e) => setProjectSummary(e.target.value)}
              placeholder={dict.contactSection.fields.projectPlaceholder}
              aria-invalid={Boolean(response?.fieldErrors?.projectSummary)}
              className="w-full rounded-xl border border-[#DCE7DE] bg-[#F6F6F0]/60 px-4 py-3 text-sm text-[#172521] focus:bg-white focus:border-[#0E6B50]"
            />
            {response?.fieldErrors?.projectSummary && (
              <p className="text-xs text-red-700 mt-1">{response.fieldErrors.projectSummary}</p>
            )}
          </div>

          <div className="flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-[#DCE7DE] text-[#0E6B50]"
            />
            <label htmlFor="consent" className="text-xs text-[#3D524B] leading-relaxed">
              {dict.contactSection.fields.consentText}{" "}
              <Link
                href={localizePath(dict.locale, "/privacy")}
                className="underline font-semibold text-[#0E6B50]"
              >
                ({dict.footer.privacyLink})
              </Link>
            </label>
          </div>
          {response?.fieldErrors?.consent && (
            <p className="text-xs text-red-700">{response.fieldErrors.consent}</p>
          )}

          {/* Error Feedback */}
          {response && !response.ok && (
            <div
              role="alert"
              className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-900 flex items-start gap-3 text-sm"
            >
              <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">{response.message}</p>
              </div>
            </div>
          )}

          {/* Honest Server Validation & Delivery Status Feedback */}
          {response && response.ok && (
            <div
              role="status"
              aria-live="polite"
              className="p-6 rounded-2xl bg-[#091713] text-white border border-[#0FC28E] space-y-4"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-[#0FC28E] shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-base">
                    {dict.locale === "ar"
                      ? `تم التحقق من طلبك بنجاح (رقم المرجع: ${response.referenceId})`
                      : `Inquiry Validated by Server Contract (Ref: ${response.referenceId})`}
                  </p>
                  {response.deliveryStatus === "delivered" ? (
                    <p className="text-xs text-[#DCE7DE]">
                      {dict.locale === "ar"
                        ? "تم إرسال تفاصيل مشروعك إلى البريد الرسمي r.suliman@nexora-tech.com."
                        : "Your inquiry has been dispatched to r.suliman@nexora-tech.com."}
                    </p>
                  ) : (
                    <p className="text-xs text-[#9BC9A9] leading-relaxed">
                      {dict.locale === "ar"
                        ? "ملاحظة شفافية النظام: تم التحقق البرمجي الكامل من طلبك على الخادم، بينما بوابة البريد الصادر (SMTP/Webhook) بانتظار ربط بيانات الاعتماد الإنتاجية الخاصة بالعميل. يمكنك إرسال النسخة المجهزة مباشرة بنقرة واحدة عبر البريد الرسمي أو واتساب أدناه:"
                        : "System Transparency Note: Your payload passed full server-side validation. Live automated SMTP relay is marked pending production mail-server credentials. Click below to dispatch your formatted brief directly via Email or WhatsApp to General Manager Rami Suliman:"}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={mailtoHref}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0FC28E] text-[#091713] text-xs font-semibold hover:bg-[#5EA885] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>
                    {dict.locale === "ar"
                      ? "إرسال عبر البريد إلى r.suliman@nexora-tech.com"
                      : "Dispatch via Email (r.suliman@nexora-tech.com)"}
                  </span>
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#12382B] text-white border border-[#5EA885]/40 text-xs font-semibold hover:bg-[#12382B]/80 transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-[#0FC28E]" />
                  <span>
                    {dict.locale === "ar"
                      ? "إرسال مباشر عبر واتساب (+249 120 4040 45)"
                      : "Send via WhatsApp (+249 120 4040 45)"}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#091713] text-white font-semibold text-sm hover:bg-[#12382B] disabled:opacity-60 transition-colors"
          >
            <Send className="w-4 h-4 text-[#0FC28E]" />
            <span>
              {submitting
                ? dict.contactSection.fields.submittingButton
                : dict.contactSection.fields.submitButton}
            </span>
          </button>

          <p className="text-xs text-[#3D524B] flex items-center gap-2 pt-2">
            <ShieldCheck className="w-4 h-4 text-[#0E6B50] shrink-0" />
            <span>{dict.contactSection.privacyAssurance}</span>
          </p>
        </form>
      </div>

      {/* Right Column: Official Verified Contact Channels & Executive Card */}
      <div className="lg:col-span-5 space-y-6">
        <div className="rounded-3xl bg-[#091713] text-white border border-[#5EA885]/35 p-8 space-y-6 shadow-architectural-dark">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-wider text-[#0FC28E]">
              {dict.contactInfo.companyName}
            </span>
            <h3 className="text-2xl font-semibold text-white">
              {dict.contactSection.directChannelsTitle}
            </h3>
          </div>

          <div className="space-y-4 pt-2">
            {/* Phone */}
            <a
              href={`tel:${dict.contactInfo.phoneClean}`}
              className="flex items-start gap-4 p-4 rounded-2xl bg-[#12382B]/65 border border-[#5EA885]/25 hover:border-[#0FC28E] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#091713] flex items-center justify-center text-[#0FC28E] shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#9BC9A9]">{dict.contactSection.directCallLabel}</p>
                <p className="text-base font-bold text-white ltr-inline mt-0.5">
                  {dict.contactInfo.phone}
                </p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${dict.contactInfo.email}`}
              className="flex items-start gap-4 p-4 rounded-2xl bg-[#12382B]/65 border border-[#5EA885]/25 hover:border-[#0FC28E] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#091713] flex items-center justify-center text-[#0FC28E] shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#9BC9A9]">{dict.contactSection.directEmailLabel}</p>
                <p className="text-base font-semibold text-white ltr-inline mt-0.5">
                  {dict.contactInfo.email}
                </p>
              </div>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/249120404045"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-2xl bg-[#12382B]/65 border border-[#5EA885]/25 hover:border-[#0FC28E] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-[#091713] flex items-center justify-center text-[#0FC28E] shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-[#9BC9A9]">{dict.contactSection.directWhatsappLabel}</p>
                <p className="text-base font-semibold text-white ltr-inline mt-0.5">
                  +249 120 4040 45
                </p>
              </div>
            </a>

            {/* Headquarters Address */}
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#12382B]/40 border border-[#5EA885]/20">
              <div className="w-10 h-10 rounded-xl bg-[#091713] flex items-center justify-center text-[#0FC28E] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-xs text-[#9BC9A9]">{dict.contactSection.hqLabel}</p>
                <p className="text-sm font-semibold text-white">{dict.contactInfo.address}</p>
                <p className="text-xs text-[#0FC28E] pt-1">{dict.contactInfo.fieldHubs}</p>
                <p className="text-xs text-[#9BC9A9]">{dict.contactInfo.slaStatement}</p>
              </div>
            </div>
          </div>

          {/* Executive Leadership Contact Card */}
          <div className="pt-4 border-t border-[#5EA885]/20 flex items-center gap-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/profile/rami-suliman-gm.png"
              alt={dict.contactInfo.gmName}
              className="w-14 h-14 rounded-2xl object-cover border border-[#0FC28E]/50 shrink-0"
            />
            <div>
              <p className="text-sm font-bold text-white">{dict.contactInfo.gmName}</p>
              <p className="text-xs text-[#0FC28E]">{dict.contactInfo.gmTitle}</p>
              <p className="text-xs text-[#9BC9A9] mt-0.5">{dict.contactInfo.companyName} — Sudan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
