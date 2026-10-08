/**
 * The onboarding booking request, server side. Shared by /api/onboarding
 * (the English, French, Spanish and German pages) and /api/onboarding-zh
 * (the Chinese page), the way /api/contact and /api/contact-zh split: the
 * same checks and the same Resend email, with the visitor's errors in the
 * page's language and the email marked (ZH) when it came from the Chinese
 * page. The admin email is always in English.
 *
 * Anti-spam is the contact forms' own: the `company_url` honeypot and the
 * `form_ts` render time. Either one tripped answers success and sends nothing.
 *
 * The form posts over fetch with `Accept: application/json` and gets JSON
 * back. Without JavaScript the browser posts the form itself and gets a 303:
 * on to the payment page once the request is in, back to the form otherwise.
 */
import { Resend } from 'resend';
import type { Lang } from '../i18n/index';
import { languages } from '../i18n/index';
import {
  ATTENDEES,
  DATE_RANGE,
  LIMITS,
  ONBOARDING_CHARGE,
  SESSION_LANGUAGES,
  onboardingPath,
} from './onboarding';

type ErrorKey = 'required' | 'email' | 'date' | 'send';

const ERRORS: Record<Lang, Record<ErrorKey, string>> = {
  en: {
    required: 'Please fill in every required field.',
    email: 'Please enter a valid email address.',
    date: 'Please pick a date between today and a year from now.',
    send: 'The request could not be sent. Please try again, or write to hello@nuvora.studio.',
  },
  fr: {
    required: 'Merci de remplir tous les champs obligatoires.',
    email: 'Merci d’indiquer une adresse e-mail valide.',
    date: 'Merci de choisir une date comprise entre aujourd’hui et l’an prochain.',
    send: 'La demande n’a pas pu être envoyée. Réessayez, ou écrivez à hello@nuvora.studio.',
  },
  es: {
    required: 'Rellena todos los campos obligatorios.',
    email: 'Indica una dirección de correo electrónico válida.',
    date: 'Elige una fecha entre hoy y dentro de un año.',
    send: 'No se ha podido enviar la solicitud. Vuelve a intentarlo o escribe a hello@nuvora.studio.',
  },
  de: {
    required: 'Bitte füllen Sie alle Pflichtfelder aus.',
    email: 'Bitte geben Sie eine gültige E-Mail-Adresse an.',
    date: 'Bitte wählen Sie ein Datum zwischen heute und einem Jahr ab heute.',
    send: 'Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder schreiben Sie an hello@nuvora.studio.',
  },
  zh: {
    required: '请填写所有必填项。',
    email: '请输入有效的邮箱地址。',
    date: '请选择今天起一年以内的日期。',
    send: '提交失败，请稍后重试，或发送邮件至 hello@nuvora.studio。',
  },
};

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

const isLang = (v: string): v is Lang => v in languages;

/** The page a request came from, named in English for the admin email. */
const PAGE_LANGUAGE: Record<Lang, string> = { en: 'English', fr: 'French', es: 'Spanish', de: 'German', zh: 'Chinese' };

/** A YYYY-MM-DD date inside the bookable range, or null. */
function bookableDate(value: string): string | null {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const picked = Date.parse(`${value}T00:00:00Z`);
  if (Number.isNaN(picked) || new Date(picked).toISOString().slice(0, 10) !== value) return null;
  const DAY = 86_400_000;
  const today = new Date().setUTCHours(0, 0, 0, 0);
  if (picked < today + DATE_RANGE.minDays * DAY || picked > today + DATE_RANGE.maxDays * DAY) return null;
  return value;
}

/** The handler of one endpoint. `zh` marks the Chinese route. */
export function bookingHandler(route: 'default' | 'zh') {
  return async ({ request }: { request: Request }): Promise<Response> => {
    const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');
    const data = await request.formData();
    const field = (name: string, max = 4000) => ((data.get(name) as string | null) ?? '').trim().slice(0, max);

    // The page's language, for the visitor's messages and the redirects.
    const posted = field('lang', 5);
    const lang: Lang = route === 'zh' ? 'zh' : isLang(posted) && posted !== 'zh' ? posted : 'en';
    const errors = ERRORS[lang];

    const ok = (): Response =>
      wantsJson
        ? Response.json({ success: true })
        : new Response(null, { status: 303, headers: { Location: onboardingPath('payment', lang) } });

    const fail = (key: ErrorKey, status = 400): Response =>
      wantsJson
        ? Response.json({ error: errors[key] }, { status })
        : new Response(null, {
            status: 303,
            headers: { Location: `${onboardingPath('book', lang)}?error=${encodeURIComponent(errors[key])}` },
          });

    // Anti-spam, as on the contact forms: a filled honeypot, or a form sent
    // less than three seconds after it was rendered, gets a quiet success.
    if (field('company_url')) return ok();
    const renderedAt = Number(field('form_ts', 20) || 0);
    if (!renderedAt || Date.now() - renderedAt < 3000) return ok();

    const name = field('name', LIMITS.name);
    const email = field('email', LIMITS.email);
    const phone = field('phone', LIMITS.phone);
    const role = field('role', LIMITS.role);
    const company = field('company', LIMITS.company);
    const website = field('website', LIMITS.website);
    const team = field('team', LIMITS.team);
    const sessionLanguage = field('sessionLanguage', 5);
    const date = field('date', 10);
    const attendees = field('attendees', 5);
    const people = field('people', LIMITS.people);

    if (
      !name ||
      !email ||
      !company ||
      !(sessionLanguage in SESSION_LANGUAGES) ||
      !date ||
      !(attendees in ATTENDEES)
    ) {
      return fail('required');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return fail('email');
    const day = bookableDate(date);
    if (!day) return fail('date');

    const row = (label: string, value: string, strong = false) => `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #56687A; font-size: 13px; width: 150px; vertical-align: top;">${label}</td>
            <td style="padding: 10px 0; border-bottom: 1px solid #E8ECF2; color: #1A1F2E; line-height: 1.6;${strong ? ' font-weight: 600;' : ''}">${value}</td>
          </tr>`;
    const notGiven = '<span style="color: #94A3B8;">Not given</span>';
    const safe = (v: string) => (v ? escapeHtml(v) : notGiven);

    const html = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f4f7fb; padding: 32px;">
      <div style="background: linear-gradient(135deg, #001840 0%, #0A66C2 100%); border-radius: 12px; padding: 32px; margin-bottom: 24px;">
        <h1 style="color: #ffffff; font-size: 22px; margin: 0;">New onboarding booking${route === 'zh' ? ' (ZH)' : ''}</h1>
        <p style="color: rgba(255,255,255,0.6); font-size: 13px; margin: 8px 0 0;">nuvora.studio${onboardingPath('book', lang)}</p>
      </div>
      <div style="background: #ffffff; border-radius: 12px; padding: 32px;">
        <p style="margin: 0 0 16px; color: #1A1F2E; font-size: 14px; line-height: 1.6;">
          The next step on the site is the payment: <strong>${ONBOARDING_CHARGE[lang]}</strong>.
          Confirm the first session by email within one working day.
        </p>
        <table style="width: 100%; border-collapse: collapse;">
          ${row('Name', escapeHtml(name), true)}
          ${row('Email', `<a href="mailto:${escapeHtml(email)}" style="color: #0A66C2;">${escapeHtml(email)}</a>`)}
          ${row('Phone', safe(phone))}
          ${row('Role', safe(role))}
          ${row('Company', escapeHtml(company), true)}
          ${row('Website', safe(website))}
          ${row('Team in Nuvora', safe(team))}
          ${row('Preferred date', day, true)}
          ${row('Sessions in', SESSION_LANGUAGES[sessionLanguage as keyof typeof SESSION_LANGUAGES], true)}
          ${row('People joining', ATTENDEES[attendees as keyof typeof ATTENDEES])}
          ${row('Who they are', people ? escapeHtml(people).replace(/\n/g, '<br/>') : notGiven)}
          ${row('Booked from', `The ${PAGE_LANGUAGE[lang]} page`)}
        </table>
      </div>
      <p style="text-align: center; font-size: 12px; color: #56687A; margin-top: 24px;">Sent from the nuvora.studio onboarding form</p>
    </div>
  `;

    try {
      const resend = new Resend(import.meta.env.RESEND_API_KEY);
      const { error } = await resend.emails.send({
        from: 'Nuvora Studio <onboarding@resend.dev>',
        to: 'cyril.drouin@outlook.com',
        replyTo: email,
        subject: `[Onboarding] ${company}, ${day}`,
        html,
      });
      if (error) {
        console.error('Onboarding booking, Resend error:', error);
        return fail('send', 500);
      }
      return ok();
    } catch (err) {
      console.error('Onboarding booking, unexpected error:', err);
      return fail('send', 500);
    }
  };
}
