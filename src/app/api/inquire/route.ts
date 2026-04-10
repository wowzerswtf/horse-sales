import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { name, email, phone, discipline, budget, timeline, message, horseSlug } = body;

  if (!name || !email || !horseSlug) {
    return NextResponse.json(
      { error: "Name, email, and horse are required." },
      { status: 400 }
    );
  }

  // TODO: Store inquiry in Supabase
  // TODO: Send notification email via Resend
  // TODO: Send auto-response to buyer via Resend
  // TODO: Send SMS alert via Twilio

  console.log("New inquiry:", {
    name,
    email,
    phone,
    discipline,
    budget,
    timeline,
    message,
    horseSlug,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
