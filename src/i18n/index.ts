export const languages = {
  en: 'English',
  fr: 'Français',
  zh: '中文',
  es: 'Español',
  de: 'Deutsch',
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
    'nav.advertising':  'Advertising',
    'nav.consulting':   'Consulting',
    'nav.pricing':      'Pricing',
    'nav.work':         'Work',
    'nav.insights':     'Insights',
    'nav.about':        'About',
    'nav.optimizer':    'Profile Optimizer',
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
    'form.success_body':  "Thanks for reaching out. We will get back to you within one business day.",
    'form.back_home':     'Back to home',

    // Footer
    'footer.tagline':       'LinkedIn without the noise.',
    'footer.services':      'Services',
    'footer.company':       'Company',
    'footer.see_all':       'See all services →',
    'footer.badges':        'Working globally | LinkedIn-only | B2B specialists',
    'footer.rights':        'All rights reserved.',
    'footer.about':         'About',
    'footer.work':          'Work',
    'footer.insights':      'Insights',
    'footer.pricing':       'Pricing',
    'footer.contact':       'Contact',
    'footer.content':       'Content',
    'footer.advertising':   'Advertising',
    'footer.consulting':    'Consulting',
    'footer.privacy':       'Privacy Policy',
    'footer.terms':         'Terms of Service',
    'footer.cookies':       'Cookie Policy',

    // CTA
    'cta.eyebrow':    'Start here',
    'cta.headline':   'Ready to make LinkedIn',
    'cta.headline2':  'pay back?',
    'cta.sub':        "Tell us about your company. We'll show you where the opportunity is, and what it would take to capture it.",
    'cta.book':       'Book a call',
    'cta.pricing':    'View pricing',
    'cta.note':       '30 minutes. No pitch. Straight answers.',

    // Translation banner (not shown for EN)
    'lang.banner': '',
  },
  fr: {
    // Nav
    'nav.services':     'Services',
    'nav.all_services': 'Tous les services',
    'nav.content':      'Contenu',
    'nav.advertising':  'Publicité',
    'nav.consulting':   'Conseil',
    'nav.pricing':      'Tarifs',
    'nav.work':         'Réalisations',
    'nav.insights':     'Publications',
    'nav.about':        'À propos',
    'nav.optimizer':    'Optimiseur de Profil',
    'nav.book_call':    'Prendre rendez-vous',

    // Common
    'common.read_article':    'Lire l\'article →',
    'common.back_to_articles': '← Retour aux articles',
    'common.read_all':        'Tous les articles',
    'common.book_discovery':  'Réserver un appel découverte',
    'common.view_results':    'Voir les résultats clients',
    'common.min_read':        'min de lecture',

    // Contact form
    'form.send':    'Envoyer le message',
    'form.sending': 'Envoi en cours…',
    'form.success_title': 'Message envoyé.',
    'form.success_body':  'Merci de nous avoir contacté. Nous vous répondrons dans un délai d\'un jour ouvrable.',
    'form.back_home':     'Retour à l\'accueil',

    // Footer
    'footer.tagline':       'LinkedIn sans le bruit.',
    'footer.services':      'Services',
    'footer.company':       'Entreprise',
    'footer.see_all':       'Tous les services →',
    'footer.badges':        'Présence mondiale | LinkedIn uniquement | Spécialistes B2B',
    'footer.rights':        'Tous droits réservés.',
    'footer.about':         'À propos',
    'footer.work':          'Réalisations',
    'footer.insights':      'Publications',
    'footer.pricing':       'Tarifs',
    'footer.contact':       'Contact',
    'footer.content':       'Contenu',
    'footer.advertising':   'Publicité',
    'footer.consulting':    'Conseil',
    'footer.privacy':       'Politique de confidentialité',
    'footer.terms':         'Conditions d\'utilisation',
    'footer.cookies':       'Politique de cookies',

    // CTA
    'cta.eyebrow':    'Commencez ici',
    'cta.headline':   'Prêt à faire de LinkedIn',
    'cta.headline2':  'un levier pour votre business ?',
    'cta.sub':        'Parlez-nous de votre entreprise. On vous montre exactement où se trouve l\'opportunité.',
    'cta.book':       'Prendre rendez-vous',
    'cta.pricing':    'Voir les tarifs',
    'cta.note':       '30 minutes. Pas de pitch. Des réponses concrètes.',

    // Translation banner
    'lang.banner': 'Cette page est en cours de traduction. Certains contenus apparaissent en anglais.',
  },
  zh: {
    // Nav
    'nav.services':     '我们的服务',
    'nav.all_services': '全部我们的服务',
    'nav.content':      'LinkedIn内容服务',
    'nav.advertising':  'LinkedIn广告服务',
    'nav.consulting':   '策略咨询',
    'nav.pricing':      '价格',
    'nav.work':         '客户案例',
    'nav.insights':     '专栏',
    'nav.about':        '关于',
    'nav.optimizer':    '主页诊断',
    'nav.book_call':    '预约沟通',

    // Common
    'common.read_article':    '阅读全文 →',
    'common.back_to_articles': '← 返回全部文章',
    'common.read_all':        '浏览全部文章',
    'common.book_discovery':  '预约免费咨询',
    'common.view_results':    '查看客户实绩',
    'common.min_read':        '分钟',

    // Contact form
    'form.send':    '提交',
    'form.sending': '提交中…',
    'form.success_title': '已收到您的留言。',
    'form.success_body':  '感谢联系，我们会在一个工作日内回复你。',
    'form.back_home':     '返回首页',

    // Footer
    'footer.tagline':       'LinkedIn上只做有用的事。',
    'footer.services':      '我们的服务',
    'footer.company':       '关于',
    'footer.see_all':       '全部我们的服务 →',
    'footer.badges':        '我们的服务覆盖全球 | 专注Linkedin | B2B专业团队',
    'footer.rights':        '版权所有。',
    'footer.about':         '公司介绍',
    'footer.work':          '客户案例',
    'footer.insights':      '专栏文章',
    'footer.pricing':       '价格',
    'footer.contact':       '联系我们',
    'footer.content':       'LinkedIn内容服务',
    'footer.advertising':   'LinkedIn广告服务',
    'footer.consulting':    '策略咨询',
    'footer.privacy':       '隐私条款',
    'footer.terms':         '我们的服务协议',
    'footer.cookies':       'Cookie条款',

    // CTA
    'cta.eyebrow':    '现在开始',
    'cta.headline':   '准备好让LinkedIn',
    'cta.headline2':  '开始产生业务价值了吗？',
    'cta.sub':        '说说你的情况，我们来看看Linkedin上有什么现成的机会。',
    'cta.book':       '预约沟通',
    'cta.pricing':    '查看价格',
    'cta.note':       '30分钟，不推销，就聊实际的。',

    // Translation banner
    'lang.banner': '本页中文版本持续完善中，部分内容暂为英文。',
  },
  es: {
    // Nav
    'nav.services':     'Servicios',
    'nav.all_services': 'Todos los servicios',
    'nav.content':      'Contenido',
    'nav.advertising':  'Publicidad',
    'nav.consulting':   'Consultoría',
    'nav.pricing':      'Precios',
    'nav.work':         'Casos',
    'nav.insights':     'Blog',
    'nav.about':        'Nosotros',
    'nav.optimizer':    'Diagnóstico de perfil',
    'nav.book_call':    'Reservar llamada',

    // Common
    'common.read_article':    'Leer artículo →',
    'common.back_to_articles': '← Volver al blog',
    'common.read_all':        'Ver todos los artículos',
    'common.book_discovery':  'Reservar una llamada',
    'common.view_results':    'Ver resultados de clientes',
    'common.min_read':        'min de lectura',

    // Contact form
    'form.send':    'Enviar mensaje',
    'form.sending': 'Enviando…',
    'form.success_title': 'Mensaje enviado.',
    'form.success_body':  'Gracias por escribirnos. Respondemos en un día hábil.',
    'form.back_home':     'Volver al inicio',

    // Footer
    'footer.tagline':       'LinkedIn sin ruido.',
    'footer.services':      'Servicios',
    'footer.company':       'Empresa',
    'footer.see_all':       'Ver todos los servicios →',
    'footer.badges':        'Trabajamos en todo el mundo | Solo LinkedIn | Especialistas B2B',
    'footer.rights':        'Todos los derechos reservados.',
    'footer.about':         'Nosotros',
    'footer.work':          'Casos',
    'footer.insights':      'Blog',
    'footer.pricing':       'Precios',
    'footer.contact':       'Contacto',
    'footer.content':       'Contenido',
    'footer.advertising':   'Publicidad',
    'footer.consulting':    'Consultoría',
    'footer.privacy':       'Política de privacidad',
    'footer.terms':         'Términos del servicio',
    'footer.cookies':       'Política de cookies',

    // CTA
    'cta.eyebrow':    'Empieza aquí',
    'cta.headline':   '¿Quieres que LinkedIn',
    'cta.headline2':  'por fin te traiga negocio?',
    'cta.sub':        'Cuéntanos cómo está tu empresa hoy. Te decimos dónde está la oportunidad y qué hace falta para aprovecharla.',
    'cta.book':       'Reservar llamada',
    'cta.pricing':    'Ver precios',
    'cta.note':       '30 minutos. Sin pitch. Respuestas directas.',

    // Translation banner
    'lang.banner': 'Esta página está en proceso de traducción. Algunas secciones siguen en inglés.',
  },
  de: {
    // Nav
    'nav.services':     'Leistungen',
    'nav.all_services': 'Alle Leistungen',
    'nav.content':      'Content',
    'nav.advertising':  'Werbung',
    'nav.consulting':   'Beratung',
    'nav.pricing':      'Preise',
    'nav.work':         'Referenzen',
    'nav.insights':     'Einblicke',
    'nav.about':        'Über uns',
    'nav.optimizer':    'Profil-Check',
    'nav.book_call':    'Termin vereinbaren',

    // Common
    'common.read_article':    'Beitrag lesen →',
    'common.back_to_articles': '← Zurück zur Übersicht',
    'common.read_all':        'Alle Beiträge ansehen',
    'common.book_discovery':  'Erstgespräch vereinbaren',
    'common.view_results':    'Kundenergebnisse ansehen',
    'common.min_read':        'Min. Lesezeit',

    // Contact form
    'form.send':    'Nachricht senden',
    'form.sending': 'Wird gesendet…',
    'form.success_title': 'Nachricht eingegangen.',
    'form.success_body':  'Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb eines Werktags zurück.',
    'form.back_home':     'Zur Startseite',

    // Footer
    'footer.tagline':       'LinkedIn ohne Lärm.',
    'footer.services':      'Leistungen',
    'footer.company':       'Unternehmen',
    'footer.see_all':       'Alle Leistungen →',
    'footer.badges':        'Weltweit tätig | Nur LinkedIn | B2B-Spezialisten',
    'footer.rights':        'Alle Rechte vorbehalten.',
    'footer.about':         'Über uns',
    'footer.work':          'Referenzen',
    'footer.insights':      'Einblicke',
    'footer.pricing':       'Preise',
    'footer.contact':       'Kontakt',
    'footer.content':       'Content',
    'footer.advertising':   'Werbung',
    'footer.consulting':    'Beratung',
    'footer.privacy':       'Datenschutz',
    'footer.terms':         'AGB',
    'footer.cookies':       'Cookie-Richtlinie',

    // CTA
    'cta.eyebrow':    'Hier beginnen',
    'cta.headline':   'Bereit, LinkedIn',
    'cta.headline2':  'zum Vertriebsmotor zu machen?',
    'cta.sub':        'Erzählen Sie uns von Ihrem Unternehmen. Wir zeigen Ihnen, wo das Potenzial steckt und wie Sie es heben.',
    'cta.book':       'Termin vereinbaren',
    'cta.pricing':    'Preise ansehen',
    'cta.note':       '30 Minuten. Kein Pitch. Klare Antworten.',

    // Translation banner
    'lang.banner': '',
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

// ── Slug localization (Spanish) ───────────────────────────────────────────────
// Maps canonical English routes (no leading slash, no lang prefix) to their
// Spanish counterparts. Chinese keeps English slugs for now.
export const esSlugMap: Record<string, string> = {
  // Top-level
  'about': 'nosotros',
  'contact': 'contacto',
  'cookies': 'cookies',
  'linkedin-optimizer': 'optimizador-de-perfil',
  'pricing': 'precios',
  'privacy': 'privacidad',
  'terms': 'terminos',

  // Services
  'services': 'servicios',
  'services/content': 'servicios/contenido',
  'services/advertising': 'servicios/publicidad',
  'services/consulting': 'servicios/consultoria',

  // Work
  'work': 'casos',
  'work/chinese-cable-manufacturer-employee-advocacy': 'casos/fabricante-chino-cables-defensa-empleados',
  'work/french-accounting-firm-partner-linkedin': 'casos/socio-bufete-contable-frances-linkedin',
  'work/french-fragrance-lab-personal-branding': 'casos/laboratorio-perfumes-frances-marca-personal',
  'work/hong-kong-law-firm-cross-border-deals': 'casos/bufete-hong-kong-operaciones-transfronterizas',
  'work/japanese-medical-bed-maker-linkedin-leads': 'casos/fabricante-camas-medicas-japones-linkedin',
  'work/swedish-polymer-brand-aerospace': 'casos/empresa-polimeros-sueca-aeroespacial',

  // Insights
  'insights': 'blog',
  'insights/algorithm-change-small-vs-large-accounts': 'blog/cambio-algoritmo-cuentas-pequenas-vs-grandes',
  'insights/content-to-inbound-leads': 'blog/de-contenido-a-leads-entrantes',
  'insights/how-to-grow-on-linkedin': 'blog/como-crecer-en-linkedin',
  'insights/linkedin-ad-roi-measurement-problem': 'blog/problema-medicion-roi-publicidad-linkedin',
  'insights/linkedin-ads-vs-organic-content': 'blog/publicidad-linkedin-vs-contenido-organico',
  'insights/linkedin-headline-costing-opportunities': 'blog/titular-linkedin-cuesta-oportunidades',
  'insights/minimum-viable-linkedin-ads-budget': 'blog/presupuesto-minimo-publicidad-linkedin',
  'insights/profile-mistakes-killing-conversions': 'blog/errores-perfil-matan-conversiones',
  'insights/stop-wasting-money-low-intent-audiences': 'blog/deja-de-gastar-en-audiencias-sin-intencion',
  'insights/the-real-linkedin-problem': 'blog/el-verdadero-problema-de-linkedin',
  'insights/why-linkedin-ads-cost-more': 'blog/por-que-la-publicidad-linkedin-cuesta-mas',
  'insights/why-your-reach-dropped': 'blog/por-que-cayo-tu-alcance',
  'insights/your-linkedin-post-is-already-dead': 'blog/tu-publicacion-linkedin-ya-esta-muerta',
};

// Reverse lookup: Spanish path → canonical English path
const enFromEsSlug: Record<string, string> = Object.fromEntries(
  Object.entries(esSlugMap).map(([en, es]) => [es, en])
);

// ── Slug localization (German) ────────────────────────────────────────────────
// Maps canonical English routes to their German counterparts.
export const deSlugMap: Record<string, string> = {
  // Top-level
  'about': 'ueber-uns',
  'contact': 'kontakt',
  'cookies': 'cookies',
  'linkedin-optimizer': 'linkedin-optimierer',
  'pricing': 'preise',
  'privacy': 'datenschutz',
  'terms': 'agb',

  // Services
  'services': 'leistungen',
  'services/content': 'leistungen/content',
  'services/advertising': 'leistungen/werbung',
  'services/consulting': 'leistungen/beratung',

  // Work
  'work': 'referenzen',
  'work/chinese-cable-manufacturer-employee-advocacy': 'referenzen/chinesischer-kabelhersteller-employee-advocacy',
  'work/french-accounting-firm-partner-linkedin': 'referenzen/franzoesische-wirtschaftspruefer-partner',
  'work/french-fragrance-lab-personal-branding': 'referenzen/franzoesisches-parfuemlabor-personal-branding',
  'work/hong-kong-law-firm-cross-border-deals': 'referenzen/hongkong-kanzlei-cross-border-transaktionen',
  'work/japanese-medical-bed-maker-linkedin-leads': 'referenzen/japanischer-medizinbettenhersteller-leads',
  'work/swedish-polymer-brand-aerospace': 'referenzen/schwedische-polymermarke-luftfahrt',

  // Insights
  'insights': 'einblicke',
  'insights/algorithm-change-small-vs-large-accounts': 'einblicke/algorithmus-kleine-vs-grosse-accounts',
  'insights/content-to-inbound-leads': 'einblicke/vom-content-zum-inbound-lead',
  'insights/how-to-grow-on-linkedin': 'einblicke/wachstum-auf-linkedin',
  'insights/linkedin-ad-roi-measurement-problem': 'einblicke/linkedin-ads-roi-messproblem',
  'insights/linkedin-ads-vs-organic-content': 'einblicke/linkedin-ads-vs-organisch',
  'insights/linkedin-headline-costing-opportunities': 'einblicke/headline-fehler-die-geschaeft-kosten',
  'insights/minimum-viable-linkedin-ads-budget': 'einblicke/mindestbudget-linkedin-ads',
  'insights/profile-mistakes-killing-conversions': 'einblicke/profilfehler-die-konversionen-kosten',
  'insights/stop-wasting-money-low-intent-audiences': 'einblicke/schluss-mit-niedrig-intent-zielgruppen',
  'insights/the-real-linkedin-problem': 'einblicke/das-eigentliche-linkedin-problem',
  'insights/why-linkedin-ads-cost-more': 'einblicke/warum-linkedin-ads-teurer-werden',
  'insights/why-your-reach-dropped': 'einblicke/warum-ihre-reichweite-eingebrochen-ist',
  'insights/your-linkedin-post-is-already-dead': 'einblicke/ihr-linkedin-beitrag-ist-bereits-tot',
};

const enFromDeSlug: Record<string, string> = Object.fromEntries(
  Object.entries(deSlugMap).map(([en, de]) => [de, en])
);

// ── Slug localization (French) ────────────────────────────────────────────────
// Maps canonical English routes to their French counterparts.
export const frSlugMap: Record<string, string> = {
  // Top-level
  'about': 'a-propos',
  'contact': 'contact',
  'cookies': 'cookies',
  'linkedin-optimizer': 'optimiseur-linkedin',
  'pricing': 'tarifs',
  'privacy': 'confidentialite',
  'terms': 'conditions',

  // Services
  'services': 'services',
  'services/content': 'services/contenu',
  'services/advertising': 'services/publicite',
  'services/consulting': 'services/conseil',

  // Work
  'work': 'realisations',
  'work/chinese-cable-manufacturer-employee-advocacy': 'realisations/fabricant-chinois-cables-mobilisation-equipes',
  'work/french-accounting-firm-partner-linkedin': 'realisations/cabinet-comptable-francais-associes-linkedin',
  'work/french-fragrance-lab-personal-branding': 'realisations/laboratoire-parfums-francais-visibilite-dirigeant',
  'work/hong-kong-law-firm-cross-border-deals': 'realisations/cabinet-avocats-hong-kong-transfrontalier',
  'work/japanese-medical-bed-maker-linkedin-leads': 'realisations/fabricant-japonais-lits-medicaux-linkedin',
  'work/swedish-polymer-brand-aerospace': 'realisations/fabricant-suedois-polymeres-aeronautique',

  // Insights
  'insights': 'publications',
  'insights/algorithm-change-small-vs-large-accounts': 'publications/changement-algorithme-petits-vs-gros-comptes',
  'insights/content-to-inbound-leads': 'publications/du-contenu-aux-prospects-entrants',
  'insights/how-to-grow-on-linkedin': 'publications/comment-grandir-sur-linkedin',
  'insights/linkedin-ad-roi-measurement-problem': 'publications/probleme-mesure-roi-publicite-linkedin',
  'insights/linkedin-ads-vs-organic-content': 'publications/publicite-linkedin-vs-contenu-organique',
  'insights/linkedin-headline-costing-opportunities': 'publications/accroche-linkedin-coute-opportunites',
  'insights/minimum-viable-linkedin-ads-budget': 'publications/budget-minimum-publicite-linkedin',
  'insights/profile-mistakes-killing-conversions': 'publications/erreurs-profil-tuent-conversions',
  'insights/stop-wasting-money-low-intent-audiences': 'publications/arretez-gaspiller-audiences-faible-intention',
  'insights/the-real-linkedin-problem': 'publications/le-vrai-probleme-linkedin',
  'insights/why-linkedin-ads-cost-more': 'publications/pourquoi-publicite-linkedin-coute-plus',
  'insights/why-your-reach-dropped': 'publications/pourquoi-votre-portee-a-chute',
  'insights/your-linkedin-post-is-already-dead': 'publications/votre-publication-linkedin-est-deja-morte',
};

const enFromFrSlug: Record<string, string> = Object.fromEntries(
  Object.entries(frSlugMap).map(([en, fr]) => [fr, en])
);

// ── URL helpers ───────────────────────────────────────────────────────────────
export function getAlternateUrl(currentPath: string, targetLang: Lang): string {
  // Split path from query/hash (preserve them for the rewritten URL)
  const queryIdx = currentPath.search(/[?#]/);
  const pathOnly = queryIdx >= 0 ? currentPath.slice(0, queryIdx) : currentPath;
  const tail = queryIdx >= 0 ? currentPath.slice(queryIdx) : '';

  // Detect current lang prefix and strip it
  const langMatch = pathOnly.match(/^\/(fr|zh|es|de)(\/|$)/);
  const currentLang: Lang = langMatch ? (langMatch[1] as Lang) : 'en';
  const withoutLang = langMatch
    ? pathOnly.replace(/^\/(fr|zh|es|de)(\/|$)/, '/')
    : pathOnly;

  // Normalize: remove leading and trailing slashes
  const segment = withoutLang.replace(/^\//, '').replace(/\/$/, '');

  // Convert current segment back to canonical English route
  let canonicalEn = segment;
  if (currentLang === 'es') canonicalEn = enFromEsSlug[segment] ?? segment;
  else if (currentLang === 'de') canonicalEn = enFromDeSlug[segment] ?? segment;
  else if (currentLang === 'fr') canonicalEn = enFromFrSlug[segment] ?? segment;

  // Translate canonical English route to the target language's segment
  let targetSegment = canonicalEn;
  if (targetLang === 'es') targetSegment = esSlugMap[canonicalEn] ?? canonicalEn;
  else if (targetLang === 'de') targetSegment = deSlugMap[canonicalEn] ?? canonicalEn;
  else if (targetLang === 'fr') targetSegment = frSlugMap[canonicalEn] ?? canonicalEn;

  if (targetLang === 'en') {
    return (targetSegment ? `/${targetSegment}` : '/') + tail;
  }
  return (targetSegment ? `/${targetLang}/${targetSegment}` : `/${targetLang}/`) + tail;
}

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/zh')) return 'zh';
  if (pathname.startsWith('/fr')) return 'fr';
  if (pathname.startsWith('/es')) return 'es';
  if (pathname.startsWith('/de')) return 'de';
  return 'en';
}

// Build the localized href for any canonical (English) route.
// Pass the English route without leading slash, e.g. "services/content".
export function localizedPath(canonicalEn: string, lang: Lang): string {
  const clean = canonicalEn.replace(/^\//, '').replace(/\/$/, '');
  let segment = clean;
  if (lang === 'es') segment = esSlugMap[clean] ?? clean;
  else if (lang === 'de') segment = deSlugMap[clean] ?? clean;
  else if (lang === 'fr') segment = frSlugMap[clean] ?? clean;
  if (lang === 'en') return segment ? `/${segment}` : '/';
  return segment ? `/${lang}/${segment}` : `/${lang}/`;
}
