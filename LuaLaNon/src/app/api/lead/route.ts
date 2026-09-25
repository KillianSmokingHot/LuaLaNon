import { NextRequest, NextResponse } from "next/server";

interface LeadData {
  name: string;
  phone: string;
  email: string;
  timestamp?: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: LeadData = await request.json();

    // Validate required fields
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Add timestamp
    const leadWithTimestamp: LeadData = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    // In a real app, you would:
    // 1. Save to database (Prisma, Supabase, etc.)
    // 2. Send to email via SendGrid, Resend, etc.
    // 3. Send to Google Sheets via API
    // 4. Send to CRM via webhook

    // For now, log to console (replace with actual implementation)
    console.log("New lead received:", leadWithTimestamp);

    // TODO: Implement actual storage
    // Option 1: Send to Google Sheets
    // Option 2: Send to email
    // Option 3: Save to a JSON file for demo

    return NextResponse.json({
      success: true,
      message: "Lead saved successfully",
      data: leadWithTimestamp,
    });
  } catch (error) {
    console.error("Error saving lead:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
