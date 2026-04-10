import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { email, name, discipline, budget, timeline, zipCode } = body;

  if (!email || !name || !discipline || !budget) {
    return NextResponse.json(
      { error: "Email, name, discipline, and budget are required." },
      { status: 400 }
    );
  }

  // TODO: Add subscriber to Loops.so with tags
  // TODO: Trigger welcome email sequence via Loops.so
  // TODO: Store in Supabase for CRM tracking

  console.log("New subscriber:", {
    email,
    name,
    discipline,
    budget,
    timeline,
    zipCode,
    timestamp: new Date().toISOString(),
  });

  return NextResponse.json({ success: true });
}
