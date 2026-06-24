import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { resend } from "@/lib/resend";

const schema = z.object({
  name: z.string().min(2),
  company: z.string().optional(),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(20),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, company, phone, service, message } = parsed.data;

    if (!resend) {
      // In development without API key, log and return success
      console.log("Contact form submission (Resend not configured):", parsed.data);
      return NextResponse.json({ success: true });
    }

    await resend.emails.send({
      from: "NAFI Solutions <onboarding@resend.dev>",
      to: "info@nafisolutions.com",
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; background: #0D0F14; color: #F0F2F8; padding: 32px; border-radius: 12px;">
          <h1 style="color: #4F7EF7; font-size: 24px; margin-bottom: 24px;">New Project Inquiry</h1>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #8B93A8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #8B93A8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 14px;"><a href="mailto:${email}" style="color: #4F7EF7;">${email}</a></td>
            </tr>
            ${company ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #8B93A8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Company</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 14px;">${company}</td>
            </tr>` : ""}
            ${phone ? `<tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #8B93A8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 14px;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); color: #8B93A8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.07); font-size: 14px;">${service}</td>
            </tr>
          </table>
          
          <div style="margin-top: 24px; padding: 16px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 8px;">
            <p style="color: #8B93A8; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">Project Description</p>
            <p style="font-size: 14px; line-height: 1.6; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
