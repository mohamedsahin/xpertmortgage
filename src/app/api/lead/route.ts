import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  interest?: string;
  category?: string;
  employment?: string;
  message?: string;
};

const esc = (s: string) =>
  s.replace(/[<>&"]/g, (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c] as string));

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const interest = (body.interest || "").trim();
  const category = (body.category || "").trim();
  const employment = (body.employment || "").trim();
  const message = (body.message || "").trim();

  // Minimal validation
  if (!name || !phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please provide your name, phone and a valid email." }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, LEAD_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    return NextResponse.json(
      { ok: false, error: "Email service is not configured. Please contact us directly." },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // 465 = implicit TLS; 587 = STARTTLS
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const rows: [string, string][] = [
    ["Name", name],
    ["Phone", phone],
    ["Email", email],
    ["Interested in", interest],
    ["Category", category],
    ["Employment", employment],
    ["Message", message || "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#14110E;max-width:560px">
      <h2 style="color:#0E3B2E;margin:0 0 4px">New consultation request</h2>
      <p style="color:#5d574e;margin:0 0 18px">From the Xperts Home Mortgage website</p>
      <table style="width:100%;border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                 <td style="padding:8px 12px;background:#F6F3EC;font-weight:bold;width:140px;border:1px solid #e6e0d4">${esc(k)}</td>
                 <td style="padding:8px 12px;border:1px solid #e6e0d4">${esc(v)}</td>
               </tr>`
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join("\n");

  try {
    await transporter.sendMail({
      from: `"Xperts Home Mortgage Website" <${SMTP_USER}>`,
      to: LEAD_TO || SMTP_USER,
      replyTo: `"${name}" <${email}>`,
      subject: `New lead: ${name}${interest ? ` — ${interest}` : ""}`,
      text,
      html,
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Lead email failed:", err);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your request right now. Please try again or contact us directly." },
      { status: 502 }
    );
  }
}
