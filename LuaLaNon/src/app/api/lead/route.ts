import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Zod schema matching the frontend form
const leadSchema = z.object({
  name: z.string().min(1, "Vui lòng nhập họ tên"),
  phone: z
    .string()
    .min(1, "Vui lòng nhập số điện thoại")
    .regex(/^(0[0-9]{9,10})$/, "Số điện thoại không hợp lệ"),
  quantity: z.string().min(1, "Vui lòng nhập số lượng"),
  orderFor: z.enum(["individual", "organization"], {
    errorMap: () => ({ message: "Vui lòng chọn loại đặt hàng" }),
  }),
  note: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const validationResult = leadSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Dữ liệu không hợp lệ",
          errors: validationResult.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const validatedData = validationResult.data;

    // Prepare payload for Google Sheets
    const payload = {
      ...validatedData,
      submittedAt: new Date().toISOString(),
      source: "landing-page",
    };

    // Get webhook URL from environment
    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

    if (!webhookUrl) {
      // No webhook configured - log but still return success for demo
      console.log("[Lead API] GOOGLE_SHEETS_WEBHOOK_URL not configured. Lead data:", payload);
      return NextResponse.json({
        success: true,
        message: "Lead received (webhook not configured)",
        data: payload,
      });
    }

    // Forward to Google Apps Script / SheetDB webhook
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        redirect: "follow",
      });

      // Google Apps Script may not return proper JSON, handle accordingly
      if (response.ok || response.status === 200 || response.redirected) {
        return NextResponse.json({
          success: true,
          message: "Yêu cầu đã được gửi thành công!",
          data: payload,
        });
      }

      // If response is not ok, log but still return success to user
      console.error("[Lead API] Webhook returned non-success status:", response.status);
      return NextResponse.json({
        success: true,
        message: "Yêu cầu đã được gửi thành công!",
        data: payload,
      });
    } catch (fetchError) {
      console.error("[Lead API] Webhook fetch error:", fetchError);
      // Return success anyway to not block user experience
      // In production, you might want to queue this for retry
      return NextResponse.json({
        success: true,
        message: "Yêu cầu đã được gửi thành công!",
        data: payload,
      });
    }
  } catch (error) {
    console.error("[Lead API] Unexpected error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Đã xảy ra lỗi khi xử lý yêu cầu. Vui lòng thử lại sau.",
      },
      { status: 500 }
    );
  }
}
