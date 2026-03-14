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

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Subscribe error:", err);
    return NextResponse.json({ error: "Subscription failed." }, { status: 500 });
  }
}
