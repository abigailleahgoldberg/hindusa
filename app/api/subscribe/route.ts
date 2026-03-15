import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email." }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;

  if (!apiKey) {
    console.warn("BREVO_API_KEY not set — subscriber not saved:", email);
    return NextResponse.json({ success: true, note: "Fallback mode" });
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        updateEnabled: true,
      }),
    });

    if (!res.ok && res.status !== 204) {
      const body = await res.text();
      console.error("Brevo error:", res.status, body);
      return NextResponse.json({ error: "Subscription failed." }, { status: 500 });
    }

    // Send welcome email with coupon to subscriber
    const htmlContent =
      '<div style="max-width:600px;margin:0 auto;font-family:Arial,sans-serif;">' +
      '<div style="background:#FF9933;padding:32px;text-align:center;">' +
      '<h1 style="color:#ffffff;font-size:28px;margin:0;letter-spacing:2px;">HindUSA</h1>' +
      '</div>' +
      '<div style="padding:40px 32px;background:#FFF8F0;text-align:center;">' +
      '<h2 style="color:#FF9933;font-size:22px;margin-bottom:16px;">Namaste! Welcome to the family.</h2>' +
      '<p style="color:#333333;font-size:16px;line-height:1.6;margin-bottom:24px;">Here\'s 10% off your first order as a thank you:</p>' +
      '<div style="background:#ffffff;border:2px dashed #FF9933;padding:24px;margin:24px 0;display:inline-block;">' +
      '<p style="color:#333333;font-size:14px;margin:0 0 8px;">Your discount code:</p>' +
      '<p style="color:#FF9933;font-size:32px;font-weight:900;letter-spacing:4px;margin:0;">NAMASTE10</p>' +
      '</div>' +
      '<p style="color:#333333;font-size:14px;margin:24px 0;">Use this code at checkout for 10% off your entire order.</p>' +
      '<a href="https://hindusa.com/#shop" style="display:inline-block;background:#FF9933;color:#ffffff;font-weight:900;font-size:16px;padding:16px 40px;text-decoration:none;letter-spacing:1px;">SHOP NOW</a>' +
      '</div>' +
      '<div style="padding:24px 32px;background:#f5e6d3;text-align:center;">' +
      '<p style="color:#7a5c3a;font-size:12px;margin:0;">Where Dharma meets Democracy.</p>' +
      '<p style="color:#7a5c3a;font-size:11px;margin:8px 0 0;opacity:0.6;">You received this because you subscribed at hindusa.com</p>' +
      '</div>' +
      '</div>';

    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": apiKey,
      },
      body: JSON.stringify({
        sender: { name: "HindUSA", email: "abigailleahgoldberg@gmail.com" },
        to: [{ email }],
        subject: "Namaste! Welcome — Here's 10% Off",
        htmlContent: htmlContent,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Subscription failed." }, { status: 500 });
  }
}
