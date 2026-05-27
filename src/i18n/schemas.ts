import { type Lang } from './index';

const SITE = 'https://nuvora.studio';

// ── Reusable Person nodes (canonical @ids; safe to reference across pages) ──
const cyrilDrouin = {
  '@type': 'Person',
  '@id': `${SITE}/about#cyril-drouin`,
  name: 'Cyril Drouin',
  jobTitle: 'CEO & Chief Strategy Officer',
  worksFor: { '@id': `${SITE}/#organization` },
  image: `${SITE}/images/Cyril-Drouin.webp`,
  description:
    'Founder and CEO of Nuvora Studio. Over twenty years across marketing and commerce. Former CEO of Publicis Commerce and Performance Marketing for China and North Asia. Triple-certified by LinkedIn Marketing Labs.',
  knowsAbout: [
    'LinkedIn marketing',
    'B2B marketing',
    'Content strategy',
    'LinkedIn advertising',
    'Executive branding',
    'Social selling',
  ],
  alumniOf: [{ '@type': 'Organization', name: 'Publicis Commerce China' }],
  sameAs: ['https://www.linkedin.com/in/cyrildrouin/'],
};

const liyanYe = {
  '@type': 'Person',
  '@id': `${SITE}/about#liyan-ye`,
  name: 'LiYan Ye',
  jobTitle: 'General Manager',
  worksFor: { '@id': `${SITE}/#organization` },
  image: `${SITE}/images/LiyanYe.webp`,
  description:
    'General Manager at Nuvora Studio. Twenty years of marketing experience with Fortune 500 brands including Beiersdorf, Reckitt Benckiser, Yum! Brands, and Valio.',
  knowsAbout: [
    'LinkedIn content strategy',
    'Social selling',
    'B2B audience engagement',
    'China B2B marketing',
  ],
};

// ── About page schemas ────────────────────────────────────────────────────────
const aboutPathByLang: Record<Lang, string> = {
  en: '/about',
  fr: '/fr/a-propos',
  de: '/de/ueber-uns',
  es: '/es/nosotros',
  zh: '/zh/about',
};

const aboutPageNameByLang: Record<Lang, string> = {
  en: 'About Nuvora Studio',
  fr: 'À propos de Nuvora Studio',
  de: 'Über Nuvora Studio',
  es: 'Sobre Nuvora Studio',
  zh: '关于 Nuvora Studio',
};

const inLanguageByLang: Record<Lang, string> = {
  en: 'en',
  fr: 'fr',
  de: 'de',
  es: 'es',
  zh: 'zh-CN',
};

export function aboutPageSchemas(lang: Lang): Record<string, unknown>[] {
  const path = aboutPathByLang[lang];
  return [
    cyrilDrouin,
    liyanYe,
    {
      '@type': 'AboutPage',
      '@id': `${SITE}${path}#aboutpage`,
      url: `${SITE}${path}`,
      name: aboutPageNameByLang[lang],
      inLanguage: inLanguageByLang[lang],
      isPartOf: { '@id': `${SITE}/#website` },
      mainEntity: [
        { '@id': `${SITE}/about#cyril-drouin` },
        { '@id': `${SITE}/about#liyan-ye` },
      ],
    },
  ];
}

// ── Service page schemas ──────────────────────────────────────────────────────
export type ServiceKey = 'content' | 'advertising' | 'consulting';

const servicePathByLang: Record<Lang, Record<ServiceKey, string>> = {
  en: {
    content: '/services/content',
    advertising: '/services/advertising',
    consulting: '/services/consulting',
  },
  fr: {
    content: '/fr/services/contenu',
    advertising: '/fr/services/publicite',
    consulting: '/fr/services/conseil',
  },
  de: {
    content: '/de/leistungen/content',
    advertising: '/de/leistungen/werbung',
    consulting: '/de/leistungen/beratung',
  },
  es: {
    content: '/es/servicios/contenido',
    advertising: '/es/servicios/publicidad',
    consulting: '/es/servicios/consultoria',
  },
  zh: {
    content: '/zh/services/content',
    advertising: '/zh/services/advertising',
    consulting: '/zh/services/consulting',
  },
};

const serviceNameByLang: Record<Lang, Record<ServiceKey, string>> = {
  en: {
    content: 'LinkedIn content production for B2B',
    advertising: 'LinkedIn advertising management',
    consulting: 'LinkedIn strategy consulting and executive branding',
  },
  fr: {
    content: 'Production de contenu LinkedIn pour le B2B',
    advertising: 'Gestion des campagnes LinkedIn Ads',
    consulting: 'Conseil stratégique LinkedIn et personal branding des dirigeants',
  },
  de: {
    content: 'LinkedIn-Content-Produktion für B2B',
    advertising: 'LinkedIn-Anzeigenmanagement',
    consulting: 'LinkedIn-Strategieberatung und Executive Branding',
  },
  es: {
    content: 'Producción de contenido en LinkedIn para B2B',
    advertising: 'Gestión de publicidad en LinkedIn',
    consulting: 'Consultoría de estrategia en LinkedIn y branding directivo',
  },
  zh: {
    content: 'B2B 企业的 LinkedIn 内容运营服务',
    advertising: 'LinkedIn 广告投放与优化',
    consulting: 'LinkedIn 策略咨询与高管个人品牌',
  },
};

const serviceDescriptionByLang: Record<Lang, Record<ServiceKey, string>> = {
  en: {
    content:
      'Company page management, content production, LinkedIn newsletters, LinkedIn events, employee advocacy, and executive ghostwriting. Built for B2B teams that want pipeline.',
    advertising:
      'End-to-end LinkedIn ads management: sponsored content, lead gen forms, dynamic ads, sponsored messaging, and text ads. Ad spend always goes directly to the client account.',
    consulting:
      'LinkedIn strategy consulting, employee advocacy programme design, personal branding for founders and executives, and team training.',
  },
  fr: {
    content:
      'Gestion de page entreprise, production de contenu, newsletters LinkedIn, événements, programmes ambassadeurs et ghostwriting pour dirigeants. Conçu pour les équipes B2B qui veulent du pipeline.',
    advertising:
      'Pilotage complet des campagnes LinkedIn Ads : sponsored content, lead gen forms, dynamic ads, sponsored messaging et text ads. Le budget media reste sur le compte du client.',
    consulting:
      'Conseil stratégique LinkedIn, conception de programmes ambassadeurs, personal branding pour fondateurs et dirigeants, formations équipe.',
  },
  de: {
    content:
      'Company-Page-Management, Content-Produktion, LinkedIn Newsletter, Events, Employee-Advocacy-Programme und Executive Ghostwriting. Gebaut für B2B-Teams, die Pipeline wollen.',
    advertising:
      'Vollständiges Management von LinkedIn Ads: Sponsored Content, Lead Gen Forms, Dynamic Ads, Sponsored Messaging und Text Ads. Das Mediabudget bleibt auf dem Werbekonto des Kunden.',
    consulting:
      'LinkedIn-Strategieberatung, Aufbau von Employee-Advocacy-Programmen, Personal Branding für Gründer und Führungskräfte sowie Team-Trainings.',
  },
  es: {
    content:
      'Gestión de página de empresa, producción de contenido, newsletters de LinkedIn, eventos, programas de embajadores y ghostwriting para directivos. Pensado para equipos B2B que buscan pipeline.',
    advertising:
      'Gestión integral de campañas en LinkedIn Ads: sponsored content, lead gen forms, dynamic ads, sponsored messaging y text ads. La inversión publicitaria queda siempre en la cuenta del cliente.',
    consulting:
      'Consultoría estratégica de LinkedIn, diseño de programas de embajadores, personal branding para fundadores y directivos, y formación a equipos.',
  },
  zh: {
    content:
      '公司主页运营、内容生产、LinkedIn 新闻通讯、活动、员工传播计划与高管代笔。专为想要真实业务管道的 B2B 团队打造。',
    advertising:
      'LinkedIn 广告投放全流程托管：Sponsored Content、Lead Gen Forms、Dynamic Ads、Sponsored Messaging 与 Text Ads。投放预算始终保留在客户广告账户中。',
    consulting:
      'LinkedIn 策略咨询、员工传播计划设计、创始人与高管个人品牌、团队培训。',
  },
};

export function servicePageSchemas(lang: Lang, service: ServiceKey): Record<string, unknown>[] {
  const path = servicePathByLang[lang][service];
  return [
    {
      '@type': 'Service',
      '@id': `${SITE}${path}#service`,
      name: serviceNameByLang[lang][service],
      description: serviceDescriptionByLang[lang][service],
      serviceType: 'LinkedIn marketing',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Place', name: 'Worldwide' },
      audience: { '@type': 'BusinessAudience', audienceType: 'B2B companies' },
      url: `${SITE}${path}`,
      inLanguage: inLanguageByLang[lang],
    },
  ];
}
