export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const NOTIFY_EMAIL = 'cyril.drouin@beyondbordergroup.com';

export const POST: APIRoute = async ({ request }) => {
  const resendKey = import.meta.env.RESEND_API_KEY;
  if (!resendKey) {
    return new Response(JSON.stringify({ success: false }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }

  let body: { name: string; company: string; position: string; email: string; country: string };
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ success: false }), { status: 400, headers: { 'Content-Type': 'application/json' } });
  }

  const { name, company, position, email, country } = body;

  try {
    const resend = new Resend(resendKey);

    await resend.emails.send({
      from: 'Nuvora Studio <onboarding@resend.dev>',
      replyTo: email,
      to: NOTIFY_EMAIL,
      subject: `New LinkedIn Optimizer Lead: ${name} - ${company}`,
      text: `New Lead\nName: ${name}\nCompany: ${company}\nPosition: ${position || '-'}\nEmail: ${email}\nCountry: ${country || '-'}`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#F8FAFC;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
    <div style="background:linear-gradient(135deg,#0F172A,#1E293B);border-radius:12px;padding:24px 28px;margin-bottom:20px;">
      <h1 style="color:white;font-size:18px;margin:0 0 4px;">New Optimizer Lead</h1>
      <p style="color:#06B6D4;font-size:13px;margin:0;">LinkedIn Profile Optimizer</p>
    </div>
    <div style="background:white;border:1px solid #E2E8F0;border-radius:12px;padding:24px 28px;">
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;font-size:13px;color:#64748B;width:100px;vertical-align:top;">Name</td>
          <td style="padding:10px 0;font-size:14px;color:#0F172A;font-weight:600;">${name || '-'}</td>
        </tr>
        <tr style="border-top:1px solid #F1F5F9;">
          <td style="padding:10px 0;font-size:13px;color:#64748B;vertical-align:top;">Company</td>
          <td style="padding:10px 0;font-size:14px;color:#0F172A;font-weight:600;">${company || '-'}</td>
        </tr>
        <tr style="border-top:1px solid #F1F5F9;">
          <td style="padding:10px 0;font-size:13px;color:#64748B;vertical-align:top;">Position</td>
          <td style="padding:10px 0;font-size:14px;color:#0F172A;">${position || '-'}</td>
        </tr>
        <tr style="border-top:1px solid #F1F5F9;">
          <td style="padding:10px 0;font-size:13px;color:#64748B;vertical-align:top;">Email</td>
          <td style="padding:10px 0;font-size:14px;color:#0F172A;font-weight:600;">
            <a href="mailto:${email}" style="color:#0EA5E9;text-decoration:none;">${email || '-'}</a>
          </td>
        </tr>
        <tr style="border-top:1px solid #F1F5F9;">
          <td style="padding:10px 0;font-size:13px;color:#64748B;vertical-align:top;">Country</td>
          <td style="padding:10px 0;font-size:14px;color:#0F172A;">${country || '-'}</td>
        </tr>
      </table>
    </div>
    <p style="text-align:center;font-size:11px;color:#94A3B8;margin-top:16px;">Sent from Nuvora Studio LinkedIn Profile Optimizer</p>
  </div>
</body>
</html>`,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (err) {
    console.error('Optimizer lead email error:', err);
    return new Response(JSON.stringify({ success: false }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
};
