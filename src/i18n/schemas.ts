import { type Lang } from './index';

const SITE = 'https://www.nuvora.studio';

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

// ── Onboarding page schema ────────────────────────────────────────────────────
// The paid onboarding of the Nuvora app, priced in the currency each locale
// shows (src/lib/onboarding.ts holds the matching payment links).
const onboardingPathByLang: Record<Lang, string> = {
  en: '/services/onboarding',
  fr: '/fr/services/prise-en-main',
  de: '/de/leistungen/onboarding',
  es: '/es/servicios/puesta-en-marcha',
  zh: '/zh/services/onboarding',
};

const onboardingOfferByLang: Record<Lang, { price: string; currency: string }> = {
  en: { price: '500', currency: 'USD' },
  fr: { price: '500', currency: 'EUR' },
  de: { price: '500', currency: 'EUR' },
  es: { price: '500', currency: 'EUR' },
  zh: { price: '3500', currency: 'CNY' },
};

const onboardingTextByLang: Record<Lang, { name: string; description: string }> = {
  en: {
    name: 'Nuvora onboarding',
    description:
      'At least four hours of live sessions to set up your Nuvora team and LinkedIn accounts and train everyone who uses the app, then three months of free support. 250 USD of the price goes back into your wallet.',
  },
  fr: {
    name: 'Prise en main de Nuvora',
    description:
      'Au moins quatre heures de séances en direct pour configurer votre équipe Nuvora et vos comptes LinkedIn, puis former chaque utilisateur, avant trois mois d’assistance gratuite. 250 € du prix sont reversés dans votre portefeuille.',
  },
  de: {
    name: 'Nuvora-Onboarding',
    description:
      'Mindestens vier Stunden Live-Sitzungen: Ihr Nuvora-Team und Ihre LinkedIn-Konten eingerichtet, alle Nutzer geschult, danach drei Monate kostenloser Support. 250 € des Preises fließen als Guthaben an Ihr Team zurück.',
  },
  es: {
    name: 'Puesta en marcha de Nuvora',
    description:
      'Al menos cuatro horas de sesiones en directo para configurar tu equipo en Nuvora y tus cuentas de LinkedIn y formar a cada usuario, seguidas de tres meses de soporte gratuito. 250 € del precio vuelven a tu monedero.',
  },
  zh: {
    name: 'Nuvora 上线辅导',
    description:
      '至少 4 小时实时会议：与您一起搭建 Nuvora 团队、接入 LinkedIn 账号，并逐一培训每位使用者，此后三个月免费答疑。费用中的 1,750 元返还至您的钱包。',
  },
};

export function onboardingPageSchemas(lang: Lang): Record<string, unknown>[] {
  const path = onboardingPathByLang[lang];
  const offer = onboardingOfferByLang[lang];
  return [
    {
      '@type': 'Service',
      '@id': `${SITE}${path}#service`,
      name: onboardingTextByLang[lang].name,
      description: onboardingTextByLang[lang].description,
      serviceType: 'Software onboarding and training',
      provider: { '@id': `${SITE}/#organization` },
      areaServed: { '@type': 'Place', name: 'Worldwide' },
      audience: { '@type': 'BusinessAudience', audienceType: 'B2B companies' },
      url: `${SITE}${path}`,
      inLanguage: inLanguageByLang[lang],
      offers: {
        '@type': 'Offer',
        price: offer.price,
        priceCurrency: offer.currency,
        url: `${SITE}${path}`,
        availability: 'https://schema.org/InStock',
      },
    },
  ];
}

// ── Article / case-study registry ─────────────────────────────────────────────
// Keyed by canonical English slug (no leading slash, no trailing slash).
// Each entry powers BlogPosting (insight) or Article (case study) JSON-LD across
// all 5 languages — the slug→lang URL is resolved via i18n helpers.

type ArticleAuthor = 'cyril' | 'liyan';
type ArticleType = 'insight' | 'case';

interface ArticleMeta {
  type: ArticleType;
  datePublished: string;   // ISO 8601
  dateModified?: string;   // optional; defaults to datePublished
  author: ArticleAuthor;
  image?: string;          // absolute path under /public, optional
}

export const articleRegistry: Record<string, ArticleMeta> = {
  // Insights
  'insights/algorithm-change-small-vs-large-accounts': { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/algorithm-change-small-vs-large-accounts.jpg' },
  'insights/content-to-inbound-leads':                 { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/content-to-inbound-leads.jpg' },
  'insights/how-to-grow-on-linkedin':                  { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/how-to-grow-on-linkedin.jpg' },
  'insights/linkedin-ad-roi-measurement-problem':      { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/linkedin-ad-roi-measurement-problem.jpg' },
  'insights/linkedin-ads-vs-organic-content':          { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/linkedin-ads-vs-organic-content.jpg' },
  'insights/linkedin-headline-costing-opportunities':  { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/linkedin-headline-costing-opportunities.jpg' },
  'insights/minimum-viable-linkedin-ads-budget':       { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/minimum-viable-linkedin-ads-budget.jpg' },
  'insights/profile-mistakes-killing-conversions':     { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/profile-mistakes-killing-conversions.jpg' },
  'insights/stop-wasting-money-low-intent-audiences':  { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/stop-wasting-money-low-intent-audiences.jpg' },
  'insights/the-real-linkedin-problem':                { type: 'insight', datePublished: '2026-03-23', author: 'cyril', image: '/og/the-real-linkedin-problem.jpg' },
  'insights/why-linkedin-ads-cost-more':               { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/why-linkedin-ads-cost-more.jpg' },
  'insights/why-your-reach-dropped':                   { type: 'insight', datePublished: '2026-03-29', author: 'cyril', image: '/og/why-your-reach-dropped.jpg' },
  'insights/your-linkedin-post-is-already-dead':       { type: 'insight', datePublished: '2026-03-23', author: 'cyril', image: '/og/your-linkedin-post-is-already-dead.jpg' },

  // Case studies
  'work/chinese-cable-manufacturer-employee-advocacy': { type: 'case', datePublished: '2026-03-29', author: 'cyril' },
  'work/french-accounting-firm-partner-linkedin':      { type: 'case', datePublished: '2026-03-29', author: 'cyril' },
  'work/french-fragrance-lab-personal-branding':       { type: 'case', datePublished: '2026-03-29', author: 'cyril' },
  'work/hong-kong-law-firm-cross-border-deals':        { type: 'case', datePublished: '2026-03-29', author: 'cyril' },
  'work/japanese-medical-bed-maker-linkedin-leads':    { type: 'case', datePublished: '2026-03-29', author: 'cyril' },
  'work/swedish-polymer-brand-aerospace':              { type: 'case', datePublished: '2026-03-29', author: 'cyril' },
};

// Resolve a path (any locale, with or without trailing slash) to its canonical
// English slug. Returns null if the path isn't an insight or case study.
function canonicalSlugFromPath(pathname: string): string | null {
  // strip leading + trailing slashes
  const clean = pathname.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!clean) return null;

  // strip lang prefix
  const langMatch = clean.match(/^(fr|de|es|zh)\/(.+)$/);
  const segment = langMatch ? langMatch[2] : clean;
  const lang: Lang = langMatch ? (langMatch[1] as Lang) : 'en';

  // map back to canonical EN slug for non-EN locales
  let canonical = segment;
  if (lang === 'es') canonical = canonicalFromEs(segment);
  else if (lang === 'de') canonical = canonicalFromDe(segment);
  else if (lang === 'fr') canonical = canonicalFromFr(segment);

  return articleRegistry[canonical] ? canonical : null;
}

// Reverse the slug maps from i18n/index.ts. Inlined here to avoid a circular
// import (i18n/index already imports nothing from schemas, schemas only imports
// the Lang type — so the inverse lookup is duplicated here intentionally).
function canonicalFromEs(esSegment: string): string {
  const map: Record<string, string> = {
    'nosotros': 'about', 'contacto': 'contact', 'optimizador-de-perfil': 'linkedin-optimizer',
    'precios': 'pricing', 'privacidad': 'privacy', 'terminos': 'terms',
    'servicios': 'services', 'servicios/contenido': 'services/content',
    'servicios/publicidad': 'services/advertising', 'servicios/consultoria': 'services/consulting',
    'casos': 'work',
    'casos/fabricante-chino-cables-defensa-empleados': 'work/chinese-cable-manufacturer-employee-advocacy',
    'casos/socio-bufete-contable-frances-linkedin': 'work/french-accounting-firm-partner-linkedin',
    'casos/laboratorio-perfumes-frances-marca-personal': 'work/french-fragrance-lab-personal-branding',
    'casos/bufete-hong-kong-operaciones-transfronterizas': 'work/hong-kong-law-firm-cross-border-deals',
    'casos/fabricante-camas-medicas-japones-linkedin': 'work/japanese-medical-bed-maker-linkedin-leads',
    'casos/empresa-polimeros-sueca-aeroespacial': 'work/swedish-polymer-brand-aerospace',
    'blog': 'insights',
    'blog/cambio-algoritmo-cuentas-pequenas-vs-grandes': 'insights/algorithm-change-small-vs-large-accounts',
    'blog/de-contenido-a-leads-entrantes': 'insights/content-to-inbound-leads',
    'blog/como-crecer-en-linkedin': 'insights/how-to-grow-on-linkedin',
    'blog/problema-medicion-roi-publicidad-linkedin': 'insights/linkedin-ad-roi-measurement-problem',
    'blog/publicidad-linkedin-vs-contenido-organico': 'insights/linkedin-ads-vs-organic-content',
    'blog/titular-linkedin-cuesta-oportunidades': 'insights/linkedin-headline-costing-opportunities',
    'blog/presupuesto-minimo-publicidad-linkedin': 'insights/minimum-viable-linkedin-ads-budget',
    'blog/errores-perfil-matan-conversiones': 'insights/profile-mistakes-killing-conversions',
    'blog/deja-de-gastar-en-audiencias-sin-intencion': 'insights/stop-wasting-money-low-intent-audiences',
    'blog/el-verdadero-problema-de-linkedin': 'insights/the-real-linkedin-problem',
    'blog/por-que-la-publicidad-linkedin-cuesta-mas': 'insights/why-linkedin-ads-cost-more',
    'blog/por-que-cayo-tu-alcance': 'insights/why-your-reach-dropped',
    'blog/tu-publicacion-linkedin-ya-esta-muerta': 'insights/your-linkedin-post-is-already-dead',
  };
  return map[esSegment] ?? esSegment;
}

function canonicalFromDe(deSegment: string): string {
  const map: Record<string, string> = {
    'referenzen/chinesischer-kabelhersteller-employee-advocacy': 'work/chinese-cable-manufacturer-employee-advocacy',
    'referenzen/franzoesische-wirtschaftspruefer-partner': 'work/french-accounting-firm-partner-linkedin',
    'referenzen/franzoesisches-parfuemlabor-personal-branding': 'work/french-fragrance-lab-personal-branding',
    'referenzen/hongkong-kanzlei-cross-border-transaktionen': 'work/hong-kong-law-firm-cross-border-deals',
    'referenzen/japanischer-medizinbettenhersteller-leads': 'work/japanese-medical-bed-maker-linkedin-leads',
    'referenzen/schwedische-polymermarke-luftfahrt': 'work/swedish-polymer-brand-aerospace',
    'einblicke/algorithmus-kleine-vs-grosse-accounts': 'insights/algorithm-change-small-vs-large-accounts',
    'einblicke/vom-content-zum-inbound-lead': 'insights/content-to-inbound-leads',
    'einblicke/wachstum-auf-linkedin': 'insights/how-to-grow-on-linkedin',
    'einblicke/linkedin-ads-roi-messproblem': 'insights/linkedin-ad-roi-measurement-problem',
    'einblicke/linkedin-ads-vs-organisch': 'insights/linkedin-ads-vs-organic-content',
    'einblicke/headline-fehler-die-geschaeft-kosten': 'insights/linkedin-headline-costing-opportunities',
    'einblicke/mindestbudget-linkedin-ads': 'insights/minimum-viable-linkedin-ads-budget',
    'einblicke/profilfehler-die-konversionen-kosten': 'insights/profile-mistakes-killing-conversions',
    'einblicke/schluss-mit-niedrig-intent-zielgruppen': 'insights/stop-wasting-money-low-intent-audiences',
    'einblicke/das-eigentliche-linkedin-problem': 'insights/the-real-linkedin-problem',
    'einblicke/warum-linkedin-ads-teurer-werden': 'insights/why-linkedin-ads-cost-more',
    'einblicke/warum-ihre-reichweite-eingebrochen-ist': 'insights/why-your-reach-dropped',
    'einblicke/ihr-linkedin-beitrag-ist-bereits-tot': 'insights/your-linkedin-post-is-already-dead',
  };
  return map[deSegment] ?? deSegment;
}

function canonicalFromFr(frSegment: string): string {
  const map: Record<string, string> = {
    'realisations/fabricant-chinois-cables-mobilisation-equipes': 'work/chinese-cable-manufacturer-employee-advocacy',
    'realisations/cabinet-comptable-francais-associes-linkedin': 'work/french-accounting-firm-partner-linkedin',
    'realisations/laboratoire-parfums-francais-visibilite-dirigeant': 'work/french-fragrance-lab-personal-branding',
    'realisations/cabinet-avocats-hong-kong-transfrontalier': 'work/hong-kong-law-firm-cross-border-deals',
    'realisations/fabricant-japonais-lits-medicaux-linkedin': 'work/japanese-medical-bed-maker-linkedin-leads',
    'realisations/fabricant-suedois-polymeres-aeronautique': 'work/swedish-polymer-brand-aerospace',
    'publications/changement-algorithme-petits-vs-gros-comptes': 'insights/algorithm-change-small-vs-large-accounts',
    'publications/du-contenu-aux-prospects-entrants': 'insights/content-to-inbound-leads',
    'publications/comment-grandir-sur-linkedin': 'insights/how-to-grow-on-linkedin',
    'publications/probleme-mesure-roi-publicite-linkedin': 'insights/linkedin-ad-roi-measurement-problem',
    'publications/publicite-linkedin-vs-contenu-organique': 'insights/linkedin-ads-vs-organic-content',
    'publications/accroche-linkedin-coute-opportunites': 'insights/linkedin-headline-costing-opportunities',
    'publications/budget-minimum-publicite-linkedin': 'insights/minimum-viable-linkedin-ads-budget',
    'publications/erreurs-profil-tuent-conversions': 'insights/profile-mistakes-killing-conversions',
    'publications/arretez-gaspiller-audiences-faible-intention': 'insights/stop-wasting-money-low-intent-audiences',
    'publications/le-vrai-probleme-linkedin': 'insights/the-real-linkedin-problem',
    'publications/pourquoi-publicite-linkedin-coute-plus': 'insights/why-linkedin-ads-cost-more',
    'publications/pourquoi-votre-portee-a-chute': 'insights/why-your-reach-dropped',
    'publications/votre-publication-linkedin-est-deja-morte': 'insights/your-linkedin-post-is-already-dead',
  };
  return map[frSegment] ?? frSegment;
}

// Inline name/url so consumers that don't resolve nested @ids still get the
// author; the @id ties it to the full Person node on the about pages.
const authorByKey: Record<ArticleAuthor, { id: string; name: string }> = {
  cyril: { id: `${SITE}/about#cyril-drouin`, name: 'Cyril Drouin' },
  liyan: { id: `${SITE}/about#liyan-ye`, name: 'LiYan Ye' },
};

const articleSectionByLang: Record<ArticleType, Record<Lang, string>> = {
  insight: {
    en: 'LinkedIn Strategy',
    fr: 'Stratégie LinkedIn',
    de: 'LinkedIn-Strategie',
    es: 'Estrategia de LinkedIn',
    zh: 'LinkedIn 策略',
  },
  case: {
    en: 'Case Study',
    fr: 'Étude de cas',
    de: 'Fallstudie',
    es: 'Caso de éxito',
    zh: '客户案例',
  },
};

// Google recommends headlines of 110 characters or fewer.
function headlineFromTitle(title: string): string {
  const bare = title.replace(/\s*[|｜]\s*Nuvora Studio\s*$/, '');
  if (bare.length <= 110) return bare;
  const cut = bare.slice(0, 109);
  return `${cut.slice(0, cut.lastIndexOf(' ') > 80 ? cut.lastIndexOf(' ') : 109)}…`;
}

// Registry entry for an article or case study in any locale; null otherwise.
export function articleMetaFromPath(pathname: string): ArticleMeta | null {
  const slug = canonicalSlugFromPath(pathname);
  return slug ? articleRegistry[slug] : null;
}

// Sitemap lastmod for registered articles (any locale); null for other pages.
export function articleLastmod(pathname: string): string | null {
  const meta = articleMetaFromPath(pathname);
  return meta ? meta.dateModified ?? meta.datePublished : null;
}

// Build a BlogPosting / Article JSON-LD node for the current page if its path
// matches a registered insight or case study. Returns null otherwise.
export function articleSchemaFromPath(
  pathname: string,
  title: string,
  description: string,
  lang: Lang,
  ogImage: string,
): Record<string, unknown> | null {
  const slug = canonicalSlugFromPath(pathname);
  if (!slug) return null;
  const meta = articleRegistry[slug];
  const url = `${SITE}${pathname.replace(/\/$/, '') || '/'}`;
  const image = meta.image
    ? `${SITE}${meta.image}`
    : ogImage.startsWith('http') ? ogImage : `${SITE}${ogImage}`;

  return {
    '@type': meta.type === 'insight' ? 'BlogPosting' : 'Article',
    '@id': `${url}#article`,
    headline: headlineFromTitle(title),
    description,
    image,
    datePublished: meta.datePublished,
    dateModified: meta.dateModified ?? meta.datePublished,
    inLanguage: inLanguageByLang[lang],
    isPartOf: { '@id': `${SITE}/#website` },
    publisher: { '@id': `${SITE}/#organization` },
    author: {
      '@type': 'Person',
      '@id': authorByKey[meta.author].id,
      name: authorByKey[meta.author].name,
      url: `${SITE}${aboutPathByLang[lang]}`,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    articleSection: articleSectionByLang[meta.type][lang],
  };
}
