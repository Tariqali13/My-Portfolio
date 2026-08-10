import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongodb";
import { sendContactEmail } from "@/lib/mail";
import { ContactMessage } from "@/models/ContactMessage";

export const runtime = "nodejs";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  company: z.string().trim().max(120).optional().default(""),
  message: z.string().trim().min(20).max(3000),
  website: z.string().max(0).optional().default(""),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, message: "Please check the form and try again." },
        { status: 400 }
      );
    }

    // Honeypot field for basic bot filtering.
    if (parsed.data.website) {
      return NextResponse.json({ ok: true, message: "Message received." });
    }

    const payload = {
      name: parsed.data.name,
      email: parsed.data.email,
      company: parsed.data.company,
      message: parsed.data.message,
    };

    let stored = false;
    let emailed = false;

    if (process.env.MONGODB_URI) {
      await connectToDatabase();
      await ContactMessage.create({ ...payload, source: "portfolio" });
      stored = true;
    }

    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      await sendContactEmail(payload);
      emailed = true;
    }

    if (!stored && !emailed) {
      return NextResponse.json(
        {
          ok: false,
          message:
            "The contact service is not configured yet. Please use WhatsApp or Gmail instead.",
        },
        { status: 503 }
      );
    }

    return NextResponse.json({
      ok: true,
      message: "Thanks — your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        ok: false,
        message:
          "Something went wrong. Please use WhatsApp or Gmail if the issue continues.",
      },
      { status: 500 }
    );
  }
}
