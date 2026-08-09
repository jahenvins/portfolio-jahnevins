import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { senderEmail, subject, message } = await req.json();

    // 1. Save to Supabase DB
    const { error: dbError } = await supabase.from("messages").insert([
      {
        sender_email: senderEmail,
        subject: subject || "New message from portfolio",
        message: message,
      },
    ]);

    if (dbError) throw dbError;

    // 2. Deliver email to your personal Gmail inbox
    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: "Portfolio <onboarding@resend.dev>",
        to: "jahnevi@gmail.com",
        subject: `[Portfolio] ${subject || "New Message"} from ${senderEmail}`,
        html: `
          <h3>New Recruiter Message</h3>
          <p><strong>From:</strong> ${senderEmail}</p>
          <p><strong>Subject:</strong> ${subject || "No Subject"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}