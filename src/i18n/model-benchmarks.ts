// The AI model benchmarks page (/insights/ai-model-benchmarks and its French
// and Chinese versions). Every figure comes from src/data/model-benchmarks.json,
// which the app writes and refreshes twice a month: never edit that file by
// hand and never copy a figure from it into this module. This module holds
// the page's wording only, in the three languages the page exists in.
import data from '../data/model-benchmarks.json';
import { localizedPath } from './index';

export type BenchLang = 'en' | 'fr' | 'zh';
export const BENCH_LANGS: BenchLang[] = ['en', 'fr', 'zh'];
export const BENCH_ROUTE = 'insights/ai-model-benchmarks';

export type Tier = 'quick' | 'balanced' | 'best';
export type Kind = 'text' | 'image' | 'video';
// Units the page knows how to name; any other unit shows as the data writes it.
export type KnownUnit = 'score' | 'elo' | '%' | 'tokens/s' | 's';
export type Unit = KnownUnit | (string & {});

export interface Benchmark {
  kind?: Kind;                // missing means text (older files)
  key: string;
  name: string;
  measures: string;
  unit: Unit;
  higherIsBetter: boolean;
  sourceName: string;
  sourceUrl: string;
  asOf: string;
  note?: string;
  i18n?: {
    name?: Partial<Record<'fr' | 'zh', string>>;
    measures?: Partial<Record<'fr' | 'zh', string>>;
    note?: Partial<Record<'fr' | 'zh', string>>;
  };
}

export interface Score { value: number; sourceUrl: string; vendor?: boolean }

export interface Model {
  id: string;
  kind?: Kind;                // missing means text (older files)
  label: string;
  provider: string;
  level: number | null;
  web?: boolean;
  vision?: boolean;
  scores: Record<string, Score | undefined>;
}

export interface BenchData {
  collectedOn: string;
  benchmarks: Benchmark[];
  tiers: { tier: Tier; model: string }[];
  models: Model[];
}

export const benchData = data as unknown as BenchData;

// Price levels run from 1 to 4.
export const PRICE_LEVELS = 4;

export const TIER_ORDER: Tier[] = ['quick', 'balanced', 'best'];
export const KIND_ORDER: Kind[] = ['text', 'image', 'video'];

export const kindOf = (x: { kind?: Kind }): Kind => x.kind ?? 'text';

// Labels may end with the maker in parentheses ("Kling 3.0 (KlingAI)"); the
// maker is shown on its own, so the page drops it from the name.
export const displayLabel = (label: string): string => label.replace(/\s*\([^()]*\)\s*$/, '');

interface Strings {
  metaTitle: string;
  metaDescription: string;
  datasetName: string;
  datasetDescription: string;

  // Hero
  eyebrow: string;
  h1a: string;
  h1b: string;
  promise: string;
  readOn: string;             // {date}
  refresh: string;

  // Text / Image / Video switch
  kindsLabel: string;
  kindNames: Record<Kind, string>;

  // The three choices (text only)
  tiersLabel: string;
  tierNames: Record<Tier, string>;
  tierPurposes: Record<Tier, string>;
  runsOn: string;
  notAvailable: string;

  // Scores card
  scoresTitle: string;
  scoresDesc: Record<Kind, string>;
  scoresDate: string;         // {date}
  collecting: Record<Kind, string>;
  providerLabel: string;
  everyProvider: string;
  colModel: string;
  colPrice: string;
  capWeb: string;
  capVision: string;
  priceAria: string;          // {n} {max}
  priceNone: string;
  priceNote: Record<Kind, string>;
  vendorNote: string;
  missingNote: string;
  sourceTitle: string;        // {source}
  newTab: string;
  empty: string;
  noModels: string;
  units: Record<KnownUnit, string>;

  // What the benchmarks measure
  measuresTitle: string;
  measuresDesc: Record<Kind, string>;
  measuresEmpty: Record<Kind, string>;
}

// French spacing: narrow no-break space before ; ? ! and %, no-break space
// before the colon.
const NB = ' ';
const NNB = ' ';

export const benchStrings: Record<BenchLang, Strings> = {
  en: {
    metaTitle: 'AI model benchmarks: every Nuvora model compared | Nuvora Studio',
    metaDescription:
      'How the AI models in Nuvora compare on public benchmarks, for text, images and video: reasoning, expert questions, human preference and speed. Every figure links to its source.',
    datasetName: 'Nuvora AI model benchmarks',
    datasetDescription:
      'Public benchmark scores of the AI text, image and video models offered in Nuvora, each linked to the page it was read on, with a relative price level from $ to $$$$. No score is estimated.',

    eyebrow: 'AI model benchmarks',
    h1a: 'Every model in Nuvora,',
    h1b: 'judged on public scores.',
    promise:
      'The AI models you can pick in Nuvora, for text, images and video, measured on public benchmarks. Choose on facts, not habit.',
    readOn: 'Scores read on {date}',
    refresh: 'Refreshed twice a month',

    kindsLabel: 'Model type',
    kindNames: { text: 'Text', image: 'Image', video: 'Video' },

    tiersLabel: 'The three choices',
    tierNames: { quick: 'Quick', balanced: 'Balanced', best: 'Best' },
    tierPurposes: {
      quick: 'Fast and cheap, for drafts and short posts',
      balanced: 'Good quality at a fair cost, for most work',
      best: 'The strongest, for important work and hard questions',
    },
    runsOn: 'Runs on',
    notAvailable: 'Not available yet',

    scoresTitle: 'Scores',
    scoresDesc: {
      text: 'The text models you can pick in Nuvora. Click a column to sort by it.',
      image: 'The image models you can pick in Nuvora. Click a column to sort by it.',
      video: 'The video models you can pick in Nuvora. Click a column to sort by it.',
    },
    scoresDate: 'Scores read on {date}.',
    collecting: {
      text: 'Public scores for text models are being collected. Until they are published, the table lists each model with its price level.',
      image: 'Public scores for image models are being collected. Until they are published, the table lists each model with its price level.',
      video: 'Public scores for video models are being collected. Until they are published, the table lists each model with its price level.',
    },
    providerLabel: 'Provider',
    everyProvider: 'Every provider',
    colModel: 'Model',
    colPrice: 'Price',
    capWeb: 'Searches the web',
    capVision: 'Reads images',
    priceAria: 'Price level {n} of {max}',
    priceNone: 'Not rated yet',
    priceNote: {
      text: 'Price level, from $ to $$$$, ranks the text models against one another and is not a price.',
      image: 'Price level, from $ to $$$$ per image, ranks the image models against one another and is not a price.',
      video: 'Price level, from $ to $$$$ per clip, ranks the video models against one another and is not a price.',
    },
    vendorNote: 'Reported by the model’s maker',
    missingNote: 'No public figure; we never estimate one',
    sourceTitle: 'Source: {source}',
    newTab: '(opens in a new tab)',
    empty: 'No model from this provider.',
    noModels: 'No model of this type yet.',
    units: { score: 'points', elo: 'Elo', '%': '%', 'tokens/s': 'tokens/s', s: 's' },

    measuresTitle: 'What the benchmarks measure',
    measuresDesc: {
      text: 'A high score on one test does not make a model better at everything. For marketing copy, look first at the overall index and at the arena, where people vote for the answers they prefer.',
      image: 'A high score on one test does not make a model better at everything.',
      video: 'A high score on one test does not make a model better at everything.',
    },
    measuresEmpty: {
      text: 'The benchmarks for text models will be listed here as soon as public scores are published.',
      image: 'The benchmarks for image models will be listed here as soon as public scores are published.',
      video: 'The benchmarks for video models will be listed here as soon as public scores are published.',
    },
  },

  fr: {
    metaTitle: `Comparatif des modèles d’IA${NB}: les scores publics | Nuvora Studio`,
    metaDescription:
      `Les modèles d’IA de Nuvora face aux benchmarks publics, pour le texte, l’image et la vidéo${NB}: raisonnement, questions d’experts, préférence des utilisateurs et vitesse. Chaque chiffre renvoie à sa source.`,
    datasetName: 'Comparatif des modèles d’IA de Nuvora',
    datasetDescription:
      'Les scores publics des modèles de texte, d’image et de vidéo proposés dans Nuvora, chacun relié à la page où il a été relevé, avec un niveau de prix relatif de $ à $$$$. Aucun score n’est estimé.',

    eyebrow: 'Comparatif des modèles d’IA',
    h1a: 'Les modèles de Nuvora,',
    h1b: 'à l’épreuve des scores publics.',
    promise:
      'Les modèles d’IA proposés dans Nuvora, pour le texte, l’image et la vidéo, passés au crible des benchmarks publics. De quoi choisir sur pièces, et non par habitude.',
    readOn: 'Scores relevés le {date}',
    refresh: 'Mis à jour deux fois par mois',

    kindsLabel: 'Type de modèle',
    kindNames: { text: 'Texte', image: 'Image', video: 'Vidéo' },

    tiersLabel: 'Les trois choix',
    tierNames: { quick: 'Rapide', balanced: 'Équilibré', best: 'Puissant' },
    tierPurposes: {
      quick: 'Vif et économique, pour les brouillons et les posts courts',
      balanced: 'Une bonne qualité pour un coût raisonnable, pour l’essentiel du travail',
      best: 'Le plus performant, pour les contenus qui comptent et les questions ardues',
    },
    runsOn: 'Tourne sur',
    notAvailable: 'Pas encore disponible',

    scoresTitle: 'Les scores',
    scoresDesc: {
      text: 'Les modèles de texte proposés dans Nuvora. Cliquez sur une colonne pour trier le tableau.',
      image: 'Les modèles d’image proposés dans Nuvora. Cliquez sur une colonne pour trier le tableau.',
      video: 'Les modèles vidéo proposés dans Nuvora. Cliquez sur une colonne pour trier le tableau.',
    },
    scoresDate: 'Scores relevés le {date}.',
    collecting: {
      text: 'Les scores publics des modèles de texte sont en cours de collecte. D’ici leur publication, le tableau présente chaque modèle et son niveau de prix.',
      image: 'Les scores publics des modèles d’image sont en cours de collecte. D’ici leur publication, le tableau présente chaque modèle et son niveau de prix.',
      video: 'Les scores publics des modèles vidéo sont en cours de collecte. D’ici leur publication, le tableau présente chaque modèle et son niveau de prix.',
    },
    providerLabel: 'Éditeur',
    everyProvider: 'Tous les éditeurs',
    colModel: 'Modèle',
    colPrice: 'Prix',
    capWeb: 'Cherche sur le web',
    capVision: 'Lit les images',
    priceAria: 'Niveau de prix {n} sur {max}',
    priceNone: 'Pas encore classé',
    priceNote: {
      text: 'Le niveau de prix, de $ à $$$$, situe les modèles de texte les uns par rapport aux autres et n’indique aucun tarif.',
      image: 'Le niveau de prix, de $ à $$$$ par image, situe les modèles d’image les uns par rapport aux autres et n’indique aucun tarif.',
      video: 'Le niveau de prix, de $ à $$$$ par clip, situe les modèles vidéo les uns par rapport aux autres et n’indique aucun tarif.',
    },
    vendorNote: 'Chiffre publié par l’éditeur du modèle',
    missingNote: `Aucun chiffre public${NNB}; nous n’en estimons jamais`,
    sourceTitle: `Source${NB}: {source}`,
    newTab: '(nouvel onglet)',
    empty: 'Aucun modèle de cet éditeur.',
    noModels: 'Aucun modèle de ce type pour l’instant.',
    units: { score: 'points', elo: 'Elo', '%': '%', 'tokens/s': 'tokens/s', s: 's' },

    measuresTitle: 'Ce que mesurent les benchmarks',
    measuresDesc: {
      text: 'Briller sur un test ne rend pas un modèle meilleur en tout. Pour des textes marketing, regardez d’abord l’indice global et l’arène, où le public vote pour les réponses qu’il préfère.',
      image: 'Briller sur un test ne rend pas un modèle meilleur en tout.',
      video: 'Briller sur un test ne rend pas un modèle meilleur en tout.',
    },
    measuresEmpty: {
      text: 'Les benchmarks des modèles de texte figureront ici dès la publication de scores publics.',
      image: 'Les benchmarks des modèles d’image figureront ici dès la publication de scores publics.',
      video: 'Les benchmarks des modèles vidéo figureront ici dès la publication de scores publics.',
    },
  },

  zh: {
    metaTitle: 'AI 模型评测榜：Nuvora 全部模型公开成绩对比｜Nuvora Studio',
    metaDescription:
      'Nuvora 文本、图像与视频 AI 模型的公开评测成绩：推理能力、专家级难题、用户偏好与输出速度一目了然，每项数据均链接原始出处。',
    datasetName: 'Nuvora AI 模型评测榜',
    datasetDescription:
      'Nuvora 所提供文本、图像与视频模型的公开评测成绩，每项数据均链接至采集页面，并附 $ 至 $$$$ 的相对价格档位。所有成绩均未经估算。',

    eyebrow: 'AI 模型评测',
    h1a: 'Nuvora 的每一款模型，',
    h1b: '都用公开成绩说话。',
    promise:
      'Nuvora 可选的文本、图像与视频 AI 模型，逐一放进公开评测比较。选模型，看数据，不凭习惯。',
    readOn: '评分采集于 {date}',
    refresh: '每月更新两次',

    kindsLabel: '模型类型',
    kindNames: { text: '文本', image: '图像', video: '视频' },

    tiersLabel: '三档选择',
    tierNames: { quick: '快速', balanced: '均衡', best: '旗舰' },
    tierPurposes: {
      quick: '速度快、成本低，适合草稿与短帖',
      balanced: '质量可靠、成本合理，胜任大多数工作',
      best: '能力最强，用于重要内容与复杂问题',
    },
    runsOn: '默认运行',
    notAvailable: '暂未开放',

    scoresTitle: '评测成绩',
    scoresDesc: {
      text: 'Nuvora 中可选的文本模型。点击列标题即可排序。',
      image: 'Nuvora 中可选的图像模型。点击列标题即可排序。',
      video: 'Nuvora 中可选的视频模型。点击列标题即可排序。',
    },
    scoresDate: '评分采集于 {date}。',
    collecting: {
      text: '文本模型的公开评测成绩正在收集中。正式发布前，下表先列出各模型及其价格档位。',
      image: '图像模型的公开评测成绩正在收集中。正式发布前，下表先列出各模型及其价格档位。',
      video: '视频模型的公开评测成绩正在收集中。正式发布前，下表先列出各模型及其价格档位。',
    },
    providerLabel: '厂商',
    everyProvider: '全部厂商',
    colModel: '模型',
    colPrice: '价格',
    capWeb: '可联网搜索',
    capVision: '可理解图片',
    priceAria: '价格档位 {n}/{max}',
    priceNone: '暂未定级',
    priceNote: {
      text: '价格档位从 $ 到 $$$$，仅表示文本模型之间的相对高低，并非实际价格。',
      image: '价格档位从 $ 到 $$$$（按每张图片计），仅表示图像模型之间的相对高低，并非实际价格。',
      video: '价格档位从 $ 到 $$$$（按每段视频计），仅表示视频模型之间的相对高低，并非实际价格。',
    },
    vendorNote: '由模型厂商自行公布',
    missingNote: '暂无公开数据，我们从不自行估算',
    sourceTitle: '来源：{source}',
    newTab: '（在新标签页打开）',
    empty: '该厂商暂无模型。',
    noModels: '暂无此类模型。',
    units: { score: '分', elo: 'Elo', '%': '%', 'tokens/s': 'token/秒', s: '秒' },

    measuresTitle: '各项评测测的是什么',
    measuresDesc: {
      text: '单项测试得分高，并不代表模型样样都强。写营销文案，建议先看综合指数和竞技场排名：后者由真实用户投票，选出更好的回答。',
      image: '单项测试得分高，并不代表模型样样都强。',
      video: '单项测试得分高，并不代表模型样样都强。',
    },
    measuresEmpty: {
      text: '文本模型的评测项目将在公开成绩发布后列于此处。',
      image: '图像模型的评测项目将在公开成绩发布后列于此处。',
      video: '视频模型的评测项目将在公开成绩发布后列于此处。',
    },
  },
};

// Benchmark names are proper names and stay as the sources write them, but
// for a generic one the page uses a native wording. Unknown keys fall back
// to the name in the data file.
const benchmarkNames: Record<string, Partial<Record<'fr' | 'zh', string>>> = {
  aa_speed: { fr: 'Vitesse d’écriture', zh: '输出速度' },
  aa_img_time: { fr: 'Temps de génération', zh: '生成时间' },
};

const intlLocale: Record<BenchLang, string> = { en: 'en-US', fr: 'fr-FR', zh: 'zh-CN' };

export function fill(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? `{${k}}`));
}

// French typography on text that comes from the data file.
export function frTypo(text: string): string {
  return text
    .replace(/(\d) (\d{3})(?!\d)/g, `$1${NNB}$2`)
    .replace(/ ([;?!%])/g, `${NNB}$1`)
    .replace(/ :/g, `${NB}:`)
    .replace(/'/g, '’');
}

export function benchName(b: Benchmark, lang: BenchLang): string {
  if (lang === 'en') return b.name;
  const name = b.i18n?.name?.[lang] ?? benchmarkNames[b.key]?.[lang] ?? b.name;
  return lang === 'fr' ? name.replace(/'/g, '’') : name;
}

export function benchMeasures(b: Benchmark, lang: BenchLang): string {
  if (lang === 'en') return b.measures;
  const text = b.i18n?.measures?.[lang] ?? b.measures;
  return lang === 'fr' ? frTypo(text) : text;
}

export function benchNote(b: Benchmark, lang: BenchLang): string | undefined {
  if (lang === 'en') return b.note;
  const text = b.i18n?.note?.[lang] ?? b.note;
  return text && lang === 'fr' ? frTypo(text) : text;
}

// A YYYY-MM-DD date in the page's language: October 8, 2026 / 8 octobre 2026 / 2026年10月8日.
export function formatDate(iso: string, lang: BenchLang): string {
  const [y, m, d] = iso.split('-').map(Number);
  return new Intl.DateTimeFormat(intlLocale[lang], {
    year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC',
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

// A score as the cell shows it. Ratings (Elo, and arena scores of 200 or
// more) and speeds are whole numbers without grouping (1424); an index under
// 200 and a percentage keep one decimal at most (57.6, 61.4%); a time in
// seconds keeps one decimal and its unit (8.2 s, French 8,2 s with a no-break
// space, Chinese 8.2 秒).
export function formatValue(value: number, unit: Unit, lang: BenchLang): string {
  const whole = unit === 'elo' || unit === 'tokens/s' || (unit === 'score' && Math.abs(value) >= 200);
  const n = new Intl.NumberFormat(intlLocale[lang], {
    maximumFractionDigits: whole ? 0 : 1, minimumFractionDigits: 0,
    useGrouping: !(unit === 'elo' || unit === 'score'),
  }).format(value);
  if (unit === '%') return lang === 'fr' ? `${n}${NNB}%` : `${n}%`;
  if (unit === 's') return lang === 'zh' ? `${n} 秒` : lang === 'fr' ? `${n}${NB}s` : `${n} s`;
  return n;
}

export function unitLabel(unit: Unit, lang: BenchLang): string {
  return (benchStrings[lang].units as Record<string, string>)[unit] ?? unit;
}

export function benchPath(lang: BenchLang): string {
  return localizedPath(BENCH_ROUTE, lang);
}

// Structured data: the table is a Dataset, dated by the day the scores were read.
export function benchPageSchemas(lang: BenchLang): Record<string, unknown>[] {
  const SITE = 'https://www.nuvora.studio';
  const s = benchStrings[lang];
  const url = `${SITE}${benchPath(lang)}`;
  const sources = [...new Map(benchData.benchmarks.map((b) => [b.sourceUrl, b])).values()];
  return [
    {
      '@type': 'Dataset',
      '@id': `${url}#dataset`,
      name: s.datasetName,
      description: s.datasetDescription,
      url,
      inLanguage: lang === 'zh' ? 'zh-CN' : lang,
      dateModified: benchData.collectedOn,
      isAccessibleForFree: true,
      creator: { '@id': `${SITE}/#organization` },
      publisher: { '@id': `${SITE}/#organization` },
      isPartOf: { '@id': `${SITE}/#website` },
      isBasedOn: sources.map((b) => ({ '@type': 'CreativeWork', name: b.sourceName, url: b.sourceUrl })),
      variableMeasured: benchData.benchmarks.map((b) => ({
        '@type': 'PropertyValue',
        name: benchName(b, lang),
        description: benchMeasures(b, lang),
        unitText: unitLabel(b.unit, lang),
      })),
    },
  ];
}
