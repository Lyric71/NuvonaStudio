export const languages = {
  en: 'English',
  fr: 'Français',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';

// ── UI strings ──────────────────────────────────────────────────────────────
// FR values are placeholders — replace with real translations when ready.
export const ui = {
  en: {
    // Nav
    'nav.services':     'Services',
    'nav.all_services': 'All Services',
    'nav.content':      'Content',
    'nav.training':     'Training',
    'nav.pricing':      'Pricing',
    'nav.work':         'Work',
    'nav.insights':     'Insights',
    'nav.about':        'About',
    'nav.book_call':    'Book a call',

    // Common
    'common.read_article':    'Read article →',
    'common.back_to_articles': '← Back to all articles',
    'common.read_all':        'Read all articles',
    'common.book_discovery':  'Book a discovery call',
    'common.view_results':    'View client results',
    'common.min_read':        'min read',

    // Contact form
    'form.send':    'Send message',
    'form.sending': 'Sending…',
    'form.success_title': 'Message sent.',
    'form.success_body':  "Thanks for reaching out. We'll get back to you within one business day.",
    'form.back_home':     'Back to home',

    // Translation banner (not shown for EN)
    'lang.banner': '',
  },
  fr: {
    // Nav
    'nav.services':     'Services',
    'nav.all_services': 'Tous les services',
    'nav.content':      'Contenu',
    'nav.training':     'Formation',
    'nav.pricing':      'Tarifs',
    'nav.work':         'Réalisations',
    'nav.insights':     'Insights',
    'nav.about':        'À propos',
    'nav.book_call':    'Prendre rendez-vous',

    // Common
    'common.read_article':    'Lire l\'article →',
    'common.back_to_articles': '← Retour aux articles',
    'common.read_all':        'Tous les articles',
    'common.book_discovery':  '[FR] Book a discovery call',
    'common.view_results':    '[FR] View client results',
    'common.min_read':        'min de lecture',

    // Contact form
    'form.send':    'Envoyer le message',
    'form.sending': 'Envoi en cours…',
    'form.success_title': 'Message envoyé.',
    'form.success_body':  'Merci de nous avoir contacté. Nous vous répondrons dans un délai d\'un jour ouvrable.',
    'form.back_home':     'Retour à l\'accueil',

    // Translation banner
    'lang.banner': 'Cette page est en cours de traduction. Certains contenus apparaissent en anglais.',
  },
} as const;

export type UiKey = keyof typeof ui[typeof defaultLang];

// ── Helper ───────────────────────────────────────────────────────────────────
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return (ui[lang] as Record<string, string>)[key]
      ?? (ui[defaultLang] as Record<string, string>)[key]
      ?? key;
  };
}

// ── URL helpers ───────────────────────────────────────────────────────────────
export function getAlternateUrl(currentPath: string, targetLang: Lang): string {
  if (targetLang === 'fr') {
    return currentPath === '/' ? '/fr/' : `/fr${currentPath}`;
  }
  // target is 'en' — strip /fr prefix
  const stripped = currentPath.replace(/^\/fr\/?/, '');
  return stripped ? `/${stripped}` : '/';
}

export function getLangFromPath(pathname: string): Lang {
  return pathname.startsWith('/fr') ? 'fr' : 'en';
}
