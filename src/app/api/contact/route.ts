import { NextResponse } from "next/server";

interface InquiryPayload {
  fullName?: string;
  organization?: string;
  email?: string;
  phone?: string;
  serviceInterest?: string;
  locationCity?: string;
  projectSummary?: string;
  consent?: boolean;
  websiteHoneypot?: string;
  locale?: string;
}

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();

function sanitize(input: unknown, maxLen = 500): string {
  if (typeof input !== "string") return "";
  return input.replace(/[<>]/g, "").trim().slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "local-client";
    const now = Date.now();
    const rateRecord = rateLimitStore.get(ip);

    if (rateRecord && now < rateRecord.resetAt) {
      if (rateRecord.count >= 8) {
        return NextResponse.json(
          {
            ok: false,
            errorCode: "RATE_LIMIT",
            message:
              "Too many requests from this connection. Please wait a few minutes or contact us directly at +249 120 4040 45.",
          },
          { status: 429 },
        );
      }
      rateRecord.count += 1;
    } else {
      rateLimitStore.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 });
    }

    const body = (await request.json()) as InquiryPayload;

    // Anti-spam honeypot check
    if (body.websiteHoneypot && body.websiteHoneypot.trim().length > 0) {
      return NextResponse.json(
        {
          ok: false,
          errorCode: "SPAM_REJECTED",
          message: "Automated submission rejected.",
        },
        { status: 400 },
      );
    }

    const fullName = sanitize(body.fullName, 120);
    const organization = sanitize(body.organization, 140);
    const email = sanitize(body.email, 160);
    const phone = sanitize(body.phone, 60);
    const serviceInterest = sanitize(body.serviceInterest, 100);
    const locationCity = sanitize(body.locationCity, 120);
    const projectSummary = sanitize(body.projectSummary, 2500);
    const consent = Boolean(body.consent);
    const isAr = body.locale === "ar";

    const fieldErrors: Record<string, string> = {};

    if (fullName.length < 2) {
      fieldErrors.fullName = isAr
        ? "يرجى إدخال الاسم الكامل (حرفين على الأقل)."
        : "Please enter your full name (at least 2 characters).";
    }
    if (!isValidEmail(email)) {
      fieldErrors.email = isAr
        ? "يرجى إدخال عنوان بريد إلكتروني صحيح."
        : "Please enter a valid business email address.";
    }
    if (phone.length > 0 && phone.length < 6) {
      fieldErrors.phone = isAr
        ? "يرجى إدخال رقم هاتف صحيح أو ترك الحقل فارغاً."
        : "Please enter a valid phone number or leave this optional field blank.";
    }
    if (!serviceInterest) {
      fieldErrors.serviceInterest = isAr
        ? "يرجى اختيار مجال الخدمة المطلوب."
        : "Please select a primary service area.";
    }
    if (projectSummary.length < 15) {
      fieldErrors.projectSummary = isAr
        ? "يرجى كتابة ملخص واضح لمتطلبات المشروع (15 حرفاً على الأقل)."
        : "Please provide a brief summary of your project requirements (at least 15 characters).";
    }
    if (!consent) {
      fieldErrors.consent = isAr
        ? "يرجى الموافقة على سياسة الخصوصية لإرسال الطلب."
        : "Please confirm consent to process your inquiry.";
    }

    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        {
          ok: false,
          errorCode: "VALIDATION_ERROR",
          fieldErrors,
          message: isAr
            ? "يرجى مراجعة الحقول المطلوبة والمحاولة مرة أخرى."
            : "Please check the highlighted required fields and try again.",
        },
        { status: 422 },
      );
    }

    const referenceId = `NXR-${Date.now().toString(36).toUpperCase()}`;
    const webhookUrl = process.env.NEXORA_CONTACT_WEBHOOK_URL;

    if (webhookUrl) {
      const webhookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          referenceId,
          recipient: "r.suliman@nexora-tech.com",
          fullName,
          organization,
          email,
          phone,
          serviceInterest,
          locationCity,
          projectSummary,
          submittedAt: new Date().toISOString(),
        }),
      });

      if (webhookRes.ok) {
        return NextResponse.json({
          ok: true,
          validated: true,
          deliveryStatus: "delivered",
          referenceId,
          recipient: "r.suliman@nexora-tech.com",
        });
      }
    }

    // Honest reporting per Section 12 directive when live SMTP/Webhook credentials are not yet set
    return NextResponse.json({
      ok: true,
      validated: true,
      deliveryStatus: "pending_smtp_configuration",
      referenceId,
      recipient: "r.suliman@nexora-tech.com",
      summary: {
        fullName,
        organization,
        email,
        phone,
        serviceInterest,
        locationCity,
        projectSummary,
      },
    });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        errorCode: "SERVER_ERROR",
        message: "Unable to process inquiry payload. Please contact r.suliman@nexora-tech.com directly.",
      },
      { status: 500 },
    );
  }
}
