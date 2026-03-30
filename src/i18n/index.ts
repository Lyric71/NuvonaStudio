export const languages = {
  en: 'English',
  fr: 'Français',
  zh: '中文',
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
    'form.success_body':  "Thanks for reaching out. We'll get back to you within one business day.",
    'form.back_home':     'Back to home',

    // Footer
    'footer.tagline':       'LinkedIn without a noise.',
    'footer.services':      'Services',
    'footer.company':       'Company',
    'footer.see_all':       'See all services \u2192',
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
    'cta.headline2':  'work for your business?',
    'cta.sub':        "Tell us about your company. We'll show you exactly where the opportunity is.",
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
    'footer.see_all':       'Tous les services \u2192',
    'footer.badges':        'Pr\u00e9sence mondiale | LinkedIn uniquement | Sp\u00e9cialistes B2B',
    'footer.rights':        'Tous droits r\u00e9serv\u00e9s.',
    'footer.about':         '\u00c0 propos',
    'footer.work':          'R\u00e9alisations',
    'footer.insights':      'Publications',
    'footer.pricing':       'Tarifs',
    'footer.contact':       'Contact',
    'footer.content':       'Contenu',
    'footer.advertising':   'Publicit\u00e9',
    'footer.consulting':    'Conseil',
    'footer.privacy':       'Politique de confidentialit\u00e9',
    'footer.terms':         'Conditions d\u0027utilisation',
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
    'nav.services':     '服务',
    'nav.all_services': '全部服务',
    'nav.content':      '内容运营',
    'nav.advertising':  '广告投放',
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
    'form.success_body':  '感谢联系，我们将在一个工作日内回复您。',
    'form.back_home':     '返回首页',

    // Footer
    'footer.tagline':       'LinkedIn上只做有用的事。',
    'footer.services':      '服务',
    'footer.company':       '关于',
    'footer.see_all':       '全部服务 \u2192',
    'footer.badges':        '服务覆盖全球 | 专注LinkedIn | B2B专业团队',
    'footer.rights':        '版权所有。',
    'footer.about':         '公司介绍',
    'footer.work':          '客户案例',
    'footer.insights':      '专栏文章',
    'footer.pricing':       '价格',
    'footer.contact':       '联系我们',
    'footer.content':       '内容运营',
    'footer.advertising':   '广告投放',
    'footer.consulting':    '策略咨询',
    'footer.privacy':       '隐私条款',
    'footer.terms':         '服务协议',
    'footer.cookies':       'Cookie条款',

    // CTA
    'cta.eyebrow':    '现在开始',
    'cta.headline':   '准备好让LinkedIn',
    'cta.headline2':  '真正产生业务价值了吗？',
    'cta.sub':        '说说你的情况，我们来看LinkedIn上有什么现成的机会。',
    'cta.book':       '预约沟通',
    'cta.pricing':    '查看价格',
    'cta.note':       '30分钟，不推东西，聊实际的。',

    // Translation banner
    'lang.banner': '本页中文版本持续完善中，部分内容暂为英文。',
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
  if (targetLang === 'en') {
    const stripped = currentPath.replace(/^\/(fr|zh)\/?/, '');
    return stripped ? `/${stripped}` : '/';
  }
  // target is 'fr' or 'zh' — strip any existing lang prefix, then add new one
  const stripped = currentPath.replace(/^\/(fr|zh)\/?/, '');
  const base = stripped || '';
  return base ? `/${targetLang}/${base}` : `/${targetLang}/`;
}

export function getLangFromPath(pathname: string): Lang {
  if (pathname.startsWith('/zh')) return 'zh';
  if (pathname.startsWith('/fr')) return 'fr';
  return 'en';
}
