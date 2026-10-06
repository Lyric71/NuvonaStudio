export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

// "How did you hear about us?": the only accepted values, with their English labels for the
// admin email. Same whitelist as /api/contact; the ZH page posts the same English slugs.
const SOURCE_LABELS: Record<string, string> = {
  google:     'Google or another search engine',
  ai:         'An AI assistant (ChatGPT, Gemini, Claude, Perplexity…)',
  exhibition: 'An exhibition or a trade show',
  referral:   'A referral, someone recommended us',
  other:      'Somewhere else',
};
const SOURCE_VALUES      = new Set(Object.keys(SOURCE_LABELS));
const SOURCE_WITH_DETAIL = new Set(['exhibition', 'referral', 'other']);
const SOURCE_DETAIL_MAX  = 120;

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const honeypot = (data.get('company_url') as string)?.trim();
  if (honeypot) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const renderedAt = Number((data.get('form_ts') as string) || 0);
  if (!renderedAt || Date.now() - renderedAt < 3000) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const name     = (data.get('name')     as string)?.trim();
  const email    = (data.get('email')    as string)?.trim();
  const phone    = (data.get('phone')    as string)?.trim();
  const website  = (data.get('website')  as string)?.trim();
  const company  = (data.get('company')  as string)?.trim();
  const project  = (data.get('project')  as string)?.trim();
  const services = (data.getAll('service') as string[]).map(s => s.trim()).filter(Boolean);
  const packages = (data.getAll('package') as string[]).map(s => s.trim()).filter(Boolean);
  const timeline = (data.get('timeline') as string)?.trim();
  const source   = (data.get('source')   as string)?.trim();
  // The detail only counts for the choices that reveal it, and is capped like the input.
  const sourceDetail = source && SOURCE_WITH_DETAIL.has(source)
    ? ((data.get('sourceDetail') as string) ?? '').trim().slice(0, SOURCE_DETAIL_MAX)
    : '';

  // Validate required fields (source must be one of the whitelisted values)
  if (!name || !email || !website || !company || !project || services.length === 0 || !timeline
      || !source || !SOURCE_VALUES.has(source)) {
    return new Response(JSON.stringify({ error: '请填写所有必填项。' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Human-readable labels for the admin email (English — admin reads in English)
  const serviceLabels: Record<string, string> = {
    content: 'Content',
    advertising: 'Advertising',
    consulting: 'Consulting',
  };
  const timelineLabels: Record<string, string> = {
    'now': 'Now (within 30 days)',
    '3-months': '3 months',
    '6-months': '6 months',
  };
  const packageLabels: Record<string, string> = {
    'retainer-foundation': 'Foundation retainer ($1,800/mo)',
    'retainer-growth':     'Growth retainer ($3,500/mo)',
    'retainer-scale':      'Scale retainer ($6,000/mo)',
    'exec-ghostwriting':   'Executive ghostwriting ($1,200/mo per leader)',
    'video-ai':            'AI-generated video ($200–$5,000 per video)',
    'video-pro':           'Professional video shooting (custom quote)',
    'multilingual':        'Multilingual content (custom quote per language)',
    'ads-under-15k':       'Ads management — under $15K/mo spend ($1,500/mo)',
    'ads-over-15k':        'Ads management — over $15K/mo spend (6–10% of spend)',
    'exec-profile':        'Executive profile optimization ($500 one-time per profile)',
    'training-workshop':   'Training workshop, 2 hours ($2,500 per session)',
    'training-program':    'Team training program, 4 sessions ($8,000 one-time)',
    'advocacy':            'Employee advocacy program ($2,500/mo)',
    'enterprise':          'Enterprise — multi-market (from $10,000/mo)',
    'not-sure':            "Not sure yet — wants to discuss",
  };

  const serviceLabel  = services.map(s => serviceLabels[s] ?? s).join(', ');
  const timelineLabel = timelineLabels[timeline] ?? timeline;
  const sourceLabel   = SOURCE_LABELS[source]
    + (sourceDetail ? `<br/><span style="color: #56687A; font-weight: 400;">${escapeHtml(sourceDetail)}</span>` : '');
  const packageLabel  = packages.length
    ? packages.map(p => packageLabels[p] ?? p).map(l => `• ${l}`).join('<br/>')
    : '—';

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
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Services</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #0A66C2;">${serviceLabel}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px; vertical-align: top;">Packages</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #1A1F2E; line-height: 1.6;">${packageLabel}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px;">Timeline</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #1A1F2E;">${timelineLabel}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px; vertical-align: top;">Heard about us</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; font-weight: 600; color: #1A1F2E; line-height: 1.6;">${sourceLabel}</td>
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
