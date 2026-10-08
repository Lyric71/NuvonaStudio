/**
 * Onboarding: the paid offer of /services/onboarding and its localized twins.
 *
 * Two steps, in this order: the booking form (/services/onboarding/book,
 * nothing charged), then the payment page it lands on
 * (/services/onboarding/payment), which carries the pay button. The offer
 * page also links the payment directly ("Already booked? Pay here").
 *
 * The offer: 500 USD in one payment, 250 USD of it put back into the team's
 * wallet in the Nuvora app, at least four hours of live sessions, the team
 * trained, then three months of free support. French, Spanish and German
 * pages show it in euros (500 €, card only), the Chinese page in yuan
 * (3,500 元人民币). The copy never names the payment provider.
 */
import type { Lang } from '../i18n/index';
import { localizedPath } from '../i18n/index';

/**
 * The live payment links, one per locale, in the currency that locale shows.
 * Stripe Payment Links created by the owner:
 *   en        500 USD, card or Alipay
 *   fr/es/de  500 EUR, card only (Alipay takes no euros)
 *   zh        3,500 CNY, bank card, Alipay or WeChat Pay
 * Change a link here and every page, button and email follows.
 */
export const ONBOARDING_PAY: Record<Lang, string> = {
  en: 'https://buy.stripe.com/fZu7sKgQPadQeB3e4z5kk06',
  fr: 'https://buy.stripe.com/eVqfZgeIHadQgJb5y35kk07',
  es: 'https://buy.stripe.com/eVqfZgeIHadQgJb5y35kk07',
  de: 'https://buy.stripe.com/eVqfZgeIHadQgJb5y35kk07',
  zh: 'https://buy.stripe.com/7sY4gyeIHdq278B9Oj5kk08',
};

/** What the visitor pays, as the admin email reports it (always in English). */
export const ONBOARDING_CHARGE: Record<Lang, string> = {
  en: '500 USD (card or Alipay)',
  fr: '500 EUR (card)',
  es: '500 EUR (card)',
  de: '500 EUR (card)',
  zh: '3,500 CNY (bank card, Alipay or WeChat Pay)',
};

/** The canonical English routes; localizedPath() turns them into each locale's slug. */
export const ONBOARDING_ROUTES = {
  offer: 'services/onboarding',
  book: 'services/onboarding/book',
  payment: 'services/onboarding/payment',
} as const;

export const onboardingPath = (page: keyof typeof ONBOARDING_ROUTES, lang: Lang): string =>
  localizedPath(ONBOARDING_ROUTES[page], lang);

/* ------------------------------------------------------------------ *
 * The booking request: the only accepted values, and the limits the
 * form and both endpoints share.
 * ------------------------------------------------------------------ */

/** The session languages on offer: the three the app speaks. */
export const SESSION_LANGUAGES = {
  en: 'English',
  fr: 'French',
  zh: 'Chinese',
} as const;

/** How many people join the sessions. */
export const ATTENDEES = {
  '1': 'Just the person booking',
  '2-5': '2 to 5 people',
  '6-15': '6 to 15 people',
  '16+': 'More than 15 people',
} as const;

export const LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  role: 120,
  company: 160,
  website: 200,
  team: 120,
  people: 1500,
} as const;

/** The bookable range, in days from today (UTC): yesterday, to cover time zones, up to a year out. */
export const DATE_RANGE = { minDays: -1, maxDays: 365 } as const;
