export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function getBarColor(score: number): string {
  if (score >= 85) return '#22c55e';
  if (score >= 70) return '#0ea5e9';
  if (score >= 55) return '#f59e0b';
  return '#ef4444';
}

function gradeColor(grade: string): string {
  if (grade === 'S' || grade === 'A') return '#22c55e';
  if (grade === 'B') return '#0ea5e9';
  if (grade === 'C') return '#f59e0b';
  return '#ef4444';
}

function buildPlainText(analysis: any): string {
  const lines: string[] = [];
  lines.push('LINKEDIN PROFILE ANALYSIS REPORT');
  lines.push(`Score: ${analysis.overall_score}/100 (Grade: ${analysis.overall_grade})`);
  lines.push('');
  lines.push('CATEGORY BREAKDOWN');
  (analysis.categories || []).forEach((cat: any) => {
    lines.push(`  ${cat.name}: ${cat.score}%`);
  });
  if (analysis.top_priorities?.length) {
    lines.push('');
    lines.push('TOP PRIORITIES');
    analysis.top_priorities.forEach((p: any, i: number) => {
      lines.push(`  ${i + 1}. [${p.impact}] ${p.label}`);
      lines.push(`     ${p.recommendation}`);
    });
  }
  if (analysis.quick_wins?.length) {
    lines.push('');
    lines.push('QUICK WINS');
    analysis.quick_wins.forEach((q: string) => { lines.push(`  - ${q}`); });
  }
  if (analysis.strengths?.length) {
    lines.push('');
    lines.push('STRENGTHS');
    analysis.strengths.forEach((s: string) => { lines.push(`  - ${s}`); });
  }
  lines.push('');
  lines.push('---');
  lines.push('Need help improving your score?');
  lines.push('Book a free call: https://nuvora.studio/contact?intent=call');
  lines.push('');
  lines.push('Nuvora Studio - LinkedIn Profile Optimizer');
  lines.push('https://nuvora.studio/linkedin-optimizer');
  return lines.join('\n');
}

function buildEmailHtml(analysis: any): string {
  const gc = gradeColor(analysis.overall_grade);

  let categoriesHtml = '';
  (analysis.categories || []).forEach((cat: any) => {
    const color = getBarColor(cat.score);
    categoriesHtml += `
      <tr>
        <td style="padding:8px 12px;font-size:14px;color:#1E293B;">${cat.name}</td>
        <td style="padding:8px 12px;width:120px;">
          <div style="background:#F1F5F9;border-radius:99px;height:8px;overflow:hidden;">
            <div style="background:${color};height:100%;width:${cat.score}%;border-radius:99px;"></div>
          </div>
        </td>
        <td style="padding:8px 12px;font-size:14px;font-weight:700;color:${color};text-align:right;width:50px;">${cat.score}%</td>
      </tr>`;
  });

  let prioritiesHtml = '';
  (analysis.top_priorities || []).forEach((p: any, i: number) => {
    const impactColor = p.impact === 'CRITICAL' ? '#dc2626' : p.impact === 'HIGH' ? '#ea580c' : '#0284c7';
    prioritiesHtml += `
      <tr>
        <td style="padding:10px 12px;vertical-align:top;width:30px;">
          <div style="width:24px;height:24px;border-radius:50%;background:linear-gradient(135deg,#0EA5E9,#06B6D4);color:white;font-size:12px;font-weight:700;text-align:center;line-height:24px;">${i + 1}</div>
        </td>
        <td style="padding:10px 12px;">
          <span style="display:inline-block;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;padding:2px 8px;border-radius:99px;background:${impactColor}15;color:${impactColor};margin-bottom:4px;">${p.impact}</span>
          <div style="font-size:14px;font-weight:600;color:#1E293B;margin-bottom:4px;">${p.label}</div>
          <div style="font-size:13px;color:#64748B;line-height:1.5;">${p.recommendation}</div>
        </td>
      </tr>`;
  });

  let quickWinsHtml = '';
  (analysis.quick_wins || []).forEach((q: string) => {
    quickWinsHtml += `<li style="padding:4px 0;font-size:13px;color:#15803d;">${q}</li>`;
  });

  let strengthsHtml = '';
  (analysis.strengths || []).forEach((s: string) => {
    strengthsHtml += `<li style="padding:4px 0;font-size:13px;color:#1E293B;">${s}</li>`;
  });

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /><meta name="viewport" content="width=device-width" /></head>
<body style="margin:0;padding:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#F8FAFC;">
  <!-- Preheader text (shown in email preview) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    Your LinkedIn profile scored ${analysis.overall_score}/100 (Grade ${analysis.overall_grade}). Here are your personalized recommendations from Nuvora Studio.
  </div>
  <div style="max-width:600px;margin:0 auto;padding:24px 16px;">

    <!-- Header -->
    <div style="text-align:center;padding:40px 24px;background:linear-gradient(135deg,#0F172A 0%,#1E293B 50%,#0F172A 100%);border-radius:16px;margin-bottom:24px;">
      <div style="font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:0.1em;color:#06B6D4;margin-bottom:20px;">LinkedIn Profile Analysis</div>
      <div style="font-size:56px;font-weight:700;color:white;line-height:1;">${analysis.overall_score}</div>
      <div style="font-size:12px;color:rgba(255,255,255,0.5);margin-top:4px;">out of 100</div>
      <div style="display:inline-block;font-size:24px;font-weight:700;color:${gc};background:${gc}20;border:1px solid ${gc}40;padding:4px 20px;border-radius:99px;margin-top:16px;">${analysis.overall_grade}</div>
    </div>

    <!-- Categories -->
    <div style="background:white;border:1px solid #E2E8F0;border-radius:12px;padding:20px;margin-bottom:16px;">
      <h2 style="font-size:16px;font-weight:600;color:#0F172A;margin:0 0 16px;">Category Breakdown</h2>
      <table style="width:100%;border-collapse:collapse;">${categoriesHtml}</table>
    </div>

    <!-- Priorities -->
    ${prioritiesHtml ? `
    <div style="background:white;border:1px solid #E2E8F0;border-radius:12px;padding:20px;margin-bottom:16px;">
      <h2 style="font-size:16px;font-weight:600;color:#0F172A;margin:0 0 16px;">Top Priorities</h2>
      <table style="width:100%;border-collapse:collapse;">${prioritiesHtml}</table>
    </div>` : ''}

    <!-- Quick Wins & Strengths -->
    <table style="width:100%;border-collapse:collapse;margin-bottom:16px;">
      <tr>
        <td style="vertical-align:top;width:50%;padding-right:8px;">
          <div style="background:white;border:1px solid #E2E8F0;border-radius:12px;padding:20px;height:100%;">
            <h2 style="font-size:16px;font-weight:600;color:#0F172A;margin:0 0 12px;">Quick Wins</h2>
            <ul style="margin:0;padding:0 0 0 16px;">${quickWinsHtml || '<li style="color:#94A3B8;font-size:13px;">No quick wins remaining</li>'}</ul>
          </div>
        </td>
        <td style="vertical-align:top;width:50%;padding-left:8px;">
          <div style="background:white;border:1px solid #E2E8F0;border-radius:12px;padding:20px;height:100%;">
            <h2 style="font-size:16px;font-weight:600;color:#0F172A;margin:0 0 12px;">Strengths</h2>
            <ul style="margin:0;padding:0 0 0 16px;">${strengthsHtml || '<li style="color:#94A3B8;font-size:13px;">Keep improving!</li>'}</ul>
          </div>
        </td>
      </tr>
    </table>

    <!-- CTA -->
    <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:12px;padding:24px;text-align:center;margin-bottom:24px;">
      <p style="font-size:15px;font-weight:600;color:#0F172A;margin:0 0 8px;">Want expert help improving your score?</p>
      <p style="font-size:13px;color:#64748B;margin:0 0 16px;">Our LinkedIn specialists can optimize your profile, content strategy, and advertising.</p>
      <a href="https://nuvora.studio/contact?intent=call" style="display:inline-block;padding:10px 28px;background:linear-gradient(135deg,#0EA5E9,#06B6D4);color:white;font-size:14px;font-weight:600;text-decoration:none;border-radius:8px;">Book a Free Call</a>
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding:16px 0;">
      <p style="font-size:12px;color:#94A3B8;margin:0;">Generated by <a href="https://nuvora.studio/linkedin-optimizer" style="color:#0EA5E9;text-decoration:none;">Nuvora Studio LinkedIn Profile Optimizer</a></p>
    </div>
  </div>
</body>
</html>`;
}

export const POST: APIRoute = async ({ request }) => {
  const resendKey = import.meta.env.RESEND_API_KEY;
  if (!resendKey) {
    return json({ success: false, error: 'Email service not configured.' }, 500);
  }

  let body: { email: string; analysis: any };
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: 'Invalid request.' }, 400);
  }

  const { email, analysis } = body;
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return json({ success: false, error: 'A valid email address is required.' }, 400);
  }
  if (!analysis) {
    return json({ success: false, error: 'No analysis data provided.' }, 400);
  }

  try {
    const resend = new Resend(resendKey);
    const grade = analysis.overall_grade || '?';
    const score = analysis.overall_score || 0;

    await resend.emails.send({
      from: 'Nuvora Studio <onboarding@resend.dev>',
      replyTo: 'cyril.drouin@beyondbordergroup.com',
      to: email,
      subject: `LinkedIn Profile Report - Score ${score}/100 (${grade})`,
      html: buildEmailHtml(analysis),
      text: buildPlainText(analysis),
      headers: {
        'List-Unsubscribe': '<mailto:cyril.drouin@beyondbordergroup.com?subject=Unsubscribe>',
      },
    });

    return json({ success: true });
  } catch (err: any) {
    console.error('Email send error:', err);
    return json({ success: false, error: 'Failed to send email. Please try again.' }, 500);
  }
};
