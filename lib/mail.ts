import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function sendContactEmail(payload: ContactPayload) {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO_EMAIL || user;

  if (!user || !pass || !to) {
    throw new Error("Gmail SMTP is not configured.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user, pass },
  });

  const companyLine = payload.company
    ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>`
    : "";

  await transporter.sendMail({
    from: `"Tariq Ali Portfolio" <${user}>`,
    to,
    replyTo: payload.email,
    subject: `Portfolio inquiry from ${payload.name}`,
    text: [
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      payload.company ? `Company: ${payload.company}` : "",
      "",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;padding:24px;color:#111827">
        <h2 style="margin:0 0 16px">New portfolio inquiry</h2>
        <p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
        ${companyLine}
        <div style="margin-top:20px;padding:16px;background:#f3f4f6;border-radius:12px;white-space:pre-wrap">${escapeHtml(payload.message)}</div>
      </div>
    `,
  });
}
