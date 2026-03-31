export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  // Honeypot check — this field should be empty (bots auto-fill it)
  const honeypot = (data.get('company_url') as string)?.trim();
  if (honeypot) {
    // Pretend success so bots don't know they were caught
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name    = (data.get('name')    as string)?.trim();
  const email   = (data.get('email')   as string)?.trim();
  const phone   = (data.get('phone')   as string)?.trim();
  const website = (data.get('website') as string)?.trim();
  const company = (data.get('company') as string)?.trim();
  const project = (data.get('project') as string)?.trim();

  // Validate required fields
  if (!name || !email || !website || !company || !project) {
    return new Response(JSON.stringify({ error: '请填写所有必填项。' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return new Response(JSON.stringify({ error: '请输入正确的邮箱地址。' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const resend = new Resend(import.meta.env.RESEND_API_KEY);

  const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f7fb; padding: 32px;">
      <div style="background: linear-gradient(135deg, #001840 0%, #0A66C2 100%); border-radius: 12px; padding: 32px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0;">New contact form submission (ZH)</h1>
        <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 8px 0 0;">nuvora.studio/zh/contact</p>
      </div>
      <div style="background: #ffffff; border-radius: 12px; padding: 32px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px; width: 140px;">Name</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #1A1F2E;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Email</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2;">
              <a href="mailto:${email}" style="color: #0A66C2;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Phone</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #1A1F2E;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Website</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2;">
              <a href="${website}" style="color: #0A66C2;">${website}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Company</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #1A1F2E;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #56687A; font-size: 13px; vertical-align: top; padding-top: 16px;">Project</td>
            <td style="padding: 10px 0; color: #1A1F2E; padding-top: 16px; line-height: 1.6;">${project.replace(/\n/g, '<br/>')}</td>
          </tr>
        </table>
      </div>
      <p style="text-align: center; font-size: 12px; color: #56687A; margin-top: 24px;">Sent from nuvora.studio/zh/contact form</p>
    </div>
  `;

  try {
    const { error } = await resend.emails.send({
      from: 'Nuvora Studio <onboarding@resend.dev>',
      to: 'cyril.drouin@outlook.com',
      replyTo: email,
      subject: `New enquiry from ${name} — ${company}`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(JSON.stringify({ error: '发送失败,请稍后再试。' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(JSON.stringify({ error: '发送失败,请稍后再试。' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
