// Copy the Nuvora help center into this site.
//
// The articles are written next to the app's code, in the BearingBridge
// repository (nuvora-site/help/*.md, with their captures in
// nuvora-site/help/images/). Each article exists in English (<slug>.md),
// French (<slug>.fr.md) and Chinese (<slug>.zh.md). This script brings them
// here so /help, /fr/aide and /zh/help can be built without that repository:
//   - the Markdown goes to src/content/help/<lang>/<slug>.md, its links
//     rewritten for the site:
//       English  calendar.md#views     -> /help/calendar#views
//       French   calendar.fr.md#vues   -> /fr/aide/calendrier#vues (the
//                French address is the `slug` of the French file)
//       Chinese  calendar.zh.md#视图   -> /zh/help/calendar#视图
//       index(.fr|.zh).md              -> the help center home of that language
//       images/x.png                   -> /images/help/x.webp
//   - src/i18n/help-slugs.json records the French address of every article,
//     read by src/i18n/index.ts (language switcher, hreflang, sitemap);
//   - every capture is re-encoded to WebP in public/images/help/, at most
//     1600 px wide.
// Files that no longer exist upstream are removed here too.
//
// Run: npm run help:sync [-- <path to nuvora-site/help>]
// Default source: ../BearingBridgeIntelligence/nuvora-site/help
import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, extname, join, resolve } from 'node:path';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const src = resolve(process.argv[2] ?? join(root, '..', 'BearingBridgeIntelligence', 'nuvora-site', 'help'));
const mdOut = join(root, 'src', 'content', 'help');
const imgOut = join(root, 'public', 'images', 'help');
const slugsOut = join(root, 'src', 'i18n', 'help-slugs.json');
const LANGS = ['en', 'fr', 'zh'];

if (!existsSync(src)) {
  console.error(`✗ No help folder at ${src}`);
  process.exit(1);
}
for (const l of LANGS) mkdirSync(join(mdOut, l), { recursive: true });
mkdirSync(imgOut, { recursive: true });

const langOf = (f) => (f.endsWith('.fr.md') ? 'fr' : f.endsWith('.zh.md') ? 'zh' : 'en');
const slugOf = (f) => f.replace(/(\.fr|\.zh)?\.md$/, '');
const webp = (name) => `${basename(name, extname(name))}.webp`;

const files = readdirSync(src).filter((f) => f.endsWith('.md'));

// The French address of each article: the `slug` of its French file.
const frSlugs = {};
for (const f of files.filter((x) => langOf(x) === 'fr')) {
  const m = /^slug:\s*"?([\w-]+)"?\s*$/m.exec(readFileSync(join(src, f), 'utf8'));
  if (m && slugOf(f) !== 'index') frSlugs[slugOf(f)] = m[1];
}

const home = { en: '/help', fr: '/fr/aide', zh: '/zh/help' };
const articleUrl = (lang, slug) =>
  slug === 'index' ? home[lang] : lang === 'fr' ? `/fr/aide/${frSlugs[slug] ?? slug}` : `${home[lang]}/${slug}`;

function rewrite(md, lang) {
  const suffix = lang === 'en' ? '' : `\\.${lang}`;
  const link = new RegExp(`\\]\\(([\\w-]+)${suffix}\\.md(#[^)]*)?\\)`, 'g');
  return md
    // Captures: images/x.png -> /images/help/x.webp (body and frontmatter).
    .replace(/(^|[("\s])images\/([\w.-]+\.(?:png|jpe?g|webp))/g, (_, pre, f) => `${pre}/images/help/${webp(f)}`)
    // Article to article, and to the hub page.
    .replace(link, (_, slug, hash = '') => `](${articleUrl(lang, slug)}${hash})`);
}

const written = new Set();
for (const f of files) {
  const lang = langOf(f);
  const out = join(lang, `${slugOf(f)}.md`);
  writeFileSync(join(mdOut, out), rewrite(readFileSync(join(src, f), 'utf8'), lang));
  written.add(out.replace(/\\/g, '/'));
}
for (const l of LANGS) {
  for (const f of readdirSync(join(mdOut, l))) if (!written.has(`${l}/${f}`)) rmSync(join(mdOut, l, f));
}
writeFileSync(slugsOut, `${JSON.stringify(frSlugs, null, 2)}\n`);

const imgSrc = join(src, 'images');
const images = existsSync(imgSrc) ? readdirSync(imgSrc).filter((f) => /\.(png|jpe?g|webp)$/i.test(f)) : [];
for (const f of images) {
  await sharp(join(imgSrc, f))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(join(imgOut, webp(f)));
}
const kept = new Set(images.map(webp));
for (const f of readdirSync(imgOut)) if (!kept.has(f)) rmSync(join(imgOut, f));

const count = (l) => files.filter((f) => langOf(f) === l).length;
console.log(`✓ ${count('en')} EN, ${count('fr')} FR and ${count('zh')} ZH articles and ${images.length} captures from ${src}`);
