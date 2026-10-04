/**
 * The Nuvora help center: the articles of src/content/help/<lang>/ (copied
 * from the app's repository by `npm run help:sync`), in English, French and
 * Chinese, in the reading order and the groups that each language's
 * index.md gives them.
 */
import type { MarkdownHeading } from 'astro';
import type { Lang } from '../i18n/index';

export type HelpLang = Extract<Lang, 'en' | 'fr' | 'zh'>;
export const HELP_LANGS: HelpLang[] = ['en', 'fr', 'zh'];

interface Frontmatter {
  title: string;
  slug?: string;
  seoTitle?: string;
  description: string;
  excerpt?: string;
  order: number;
  updated?: string | Date;
  audience?: string;
}

interface MarkdownModule {
  frontmatter: Frontmatter;
  Content: any;
  getHeadings: () => MarkdownHeading[];
}

export interface HelpArticle {
  /** The English slug: the article's key in every language. */
  key: string;
  /** Its address in this language, without the help center's own prefix. */
  slug: string;
  url: string;
  lang: HelpLang;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  order: number;
  updated: string | null;
  audience: string | null;
  group: string;
  Content: any;
  headings: MarkdownHeading[];
}

export interface HelpGroup {
  title: string;
  articles: HelpArticle[];
}

/** Where each language's help center lives. */
export const HELP_HOME: Record<HelpLang, string> = { en: '/help', fr: '/fr/aide', zh: '/zh/help' };

const modules = import.meta.glob<MarkdownModule>('../content/help/*/*.md', { eager: true });
const indexRaw = import.meta.glob<string>('../content/help/*/index.md', { eager: true, query: '?raw', import: 'default' });

const langOf = (path: string) => path.split('/').slice(-2)[0] as HelpLang;
const keyOf = (path: string) => path.split('/').pop()!.replace(/\.md$/, '');

const SUFFIX: Record<HelpLang, string> = { en: 'Nuvora Help', fr: 'Aide Nuvora', zh: 'Nuvora 帮助中心' };
const MORE: Record<HelpLang, string> = { en: 'More', fr: 'Autres guides', zh: '更多' };

export function helpHome(lang: HelpLang): MarkdownModule {
  return modules[`../content/help/${lang}/index.md`];
}

/** The intro paragraph of index.md: its first plain paragraph. */
export function helpIntro(lang: HelpLang): string {
  return (
    (indexRaw[`../content/help/${lang}/index.md`] ?? '')
      .replace(/^---[\s\S]*?---/, '')
      .split(/\r?\n\s*\r?\n/)
      .map((p) => p.trim())
      .find((p) => p && !p.startsWith('#') && !/^\d+\./.test(p)) ?? ''
  );
}

/** Group of each article (by its address), read from the "## Group" headings of index.md. */
function groupsFromIndex(lang: HelpLang): Map<string, string> {
  const out = new Map<string, string>();
  const prefix = HELP_HOME[lang].replace(/\//g, '\\/');
  const linkRe = new RegExp(`\\]\\(${prefix}\\/([\\w-]+)[)#]`);
  let group = '';
  for (const line of (indexRaw[`../content/help/${lang}/index.md`] ?? '').split(/\r?\n/)) {
    const h = /^##\s+(.+?)\s*$/.exec(line);
    if (h) group = h[1];
    const link = linkRe.exec(line);
    if (link && group && !out.has(link[1])) out.set(link[1], group);
  }
  return out;
}

const cache = new Map<HelpLang, HelpArticle[]>();

export function helpArticles(lang: HelpLang): HelpArticle[] {
  const hit = cache.get(lang);
  if (hit) return hit;
  const groupOf = groupsFromIndex(lang);
  const list = Object.entries(modules)
    .filter(([path]) => langOf(path) === lang && keyOf(path) !== 'index')
    .map(([path, m]) => {
      const key = keyOf(path);
      const fm = m.frontmatter;
      const slug = lang === 'fr' && fm.slug ? fm.slug : key;
      const updated = fm.updated instanceof Date ? fm.updated.toISOString() : fm.updated ? String(fm.updated) : '';
      return {
        key,
        slug,
        url: `${HELP_HOME[lang]}/${slug}`,
        lang,
        title: fm.title,
        seoTitle: fm.seoTitle ?? `${fm.title} | ${SUFFIX[lang]}`,
        description: fm.description,
        excerpt: fm.excerpt ?? fm.description,
        order: fm.order ?? 99,
        updated: updated ? updated.slice(0, 10) : null,
        audience: fm.audience ?? null,
        group: groupOf.get(slug) ?? MORE[lang],
        Content: m.Content,
        headings: m.getHeadings(),
      } satisfies HelpArticle;
    })
    .sort((a, b) => a.order - b.order);
  cache.set(lang, list);
  return list;
}

export function helpGroups(lang: HelpLang): HelpGroup[] {
  return helpArticles(lang).reduce<HelpGroup[]>((acc, a) => {
    const g = acc.find((x) => x.title === a.group);
    if (g) g.articles.push(a);
    else acc.push({ title: a.group, articles: [a] });
    return acc;
  }, []);
}

const DATE_LOCALE: Record<HelpLang, string> = { en: 'en-GB', fr: 'fr-FR', zh: 'zh-CN' };

export function formatDate(iso: string | null, lang: HelpLang): string | null {
  if (!iso) return null;
  const d = new Date(`${iso}T00:00:00Z`);
  return d.toLocaleDateString(DATE_LOCALE[lang], { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
}

/** The words of the help center pages, per language. */
export const HELP_UI: Record<HelpLang, Record<string, string>> = {
  en: {
    eyebrow: 'Help center',
    homeTitle: 'Nuvora Help Center: Guides for the App',
    homeDescription:
      'Guides for the Nuvora app: write and publish LinkedIn posts, plan them on the calendar, read your LinkedIn ad account, get approval, ask questions, run agents, and manage your team, clients and balance.',
    heading: 'How to',
    headingAccent: 'Nuvora.',
    search: 'Search the guides',
    searchPlaceholder: 'Search the guides: calendar, company page, invoices…',
    empty: 'No guide matches. Try another word, or',
    emptyLink: 'write to us',
    read: 'Read the guide',
    allGuides: 'All guides',
    onThisPage: 'On this page',
    previous: 'Previous',
    next: 'Next',
    updated: 'Updated',
    for: 'For',
    ctaEyebrow: 'Still stuck?',
    ctaTitle: 'A person answers.',
    ctaText: 'Tell us what you were trying to do and what the app showed. We come back to you within one working day.',
    ctaButton: 'Contact us',
    collection: 'Nuvora Help Center',
  },
  fr: {
    eyebrow: 'Centre d’aide',
    homeTitle: 'Centre d’aide Nuvora : les guides de l’application',
    homeDescription:
      'Les guides de l’application Nuvora : rédiger et publier vos posts LinkedIn, les planifier dans le calendrier, suivre votre compte publicitaire LinkedIn, faire valider, interroger vos données, confier une veille à des agents, gérer votre équipe, vos clients et votre solde.',
    heading: 'Nuvora,',
    headingAccent: 'mode d’emploi.',
    search: 'Rechercher dans les guides',
    searchPlaceholder: 'Rechercher : calendrier, page entreprise, factures…',
    empty: 'Aucun guide ne correspond. Essayez un autre mot, ou',
    emptyLink: 'écrivez-nous',
    read: 'Lire le guide',
    allGuides: 'Tous les guides',
    onThisPage: 'Sur cette page',
    previous: 'Précédent',
    next: 'Suivant',
    updated: 'Mis à jour le',
    for: 'Pour',
    ctaEyebrow: 'Toujours bloqué ?',
    ctaTitle: 'Une personne vous répond.',
    ctaText: 'Dites-nous ce que vous cherchiez à faire et ce que l’application a affiché. Nous revenons vers vous sous un jour ouvré.',
    ctaButton: 'Nous contacter',
    collection: 'Centre d’aide Nuvora',
  },
  zh: {
    eyebrow: '帮助中心',
    homeTitle: 'Nuvora 帮助中心：应用使用指南',
    homeDescription:
      'Nuvora 应用使用指南：撰写并发布 LinkedIn 帖子，在日历中排期，查看 LinkedIn 广告账户，提交审核，提问数据，让智能体值守，管理团队、客户和余额。',
    heading: '上手',
    headingAccent: 'Nuvora。',
    search: '搜索指南',
    searchPlaceholder: '搜索：日历、公司主页、发票……',
    empty: '没有找到相关指南。换个关键词试试，或',
    emptyLink: '联系我们',
    read: '阅读指南',
    allGuides: '全部指南',
    onThisPage: '本页目录',
    previous: '上一篇',
    next: '下一篇',
    updated: '更新于',
    for: '适用于',
    ctaEyebrow: '还是没解决？',
    ctaTitle: '有专人回复你。',
    ctaText: '告诉我们你想做什么、应用显示了什么，我们会在一个工作日内回复。',
    ctaButton: '联系我们',
    collection: 'Nuvora 帮助中心',
  },
};
