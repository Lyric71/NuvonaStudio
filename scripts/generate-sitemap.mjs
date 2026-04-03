import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const OUTPUT = path.join(__dirname, '..', 'public', 'sitemap.xml');
const BASE_URL = 'https://nuvora.studio';
const TODAY = new Date().toISOString().split('T')[0];
const LOCALES = ['fr', 'zh'];

// Pages to exclude from sitemap
const EXCLUDE = new Set(['generate']);

// Priority mapping
function getPriority(route) {
  const clean = route.replace(/^(fr|zh)\/?/, '');
  if (clean === '') return '1.0';
  const depth = clean.split('/').filter(Boolean).length;
  if (depth === 1) return '0.8';
  return '0.7';
}

// Changefreq mapping
function getChangefreq(route) {
  const clean = route.replace(/^(fr|zh)\/?/, '');
  if (clean === '' || clean === 'insights' || clean === 'work') return 'daily';
  if (clean.startsWith('insights/') || clean.startsWith('work/')) return 'monthly';
  return 'weekly';
}

function collectPages(dir, prefix = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const routes = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      routes.push(...collectPages(path.join(dir, entry.name), prefix + entry.name + '/'));
    } else if (entry.name.endsWith('.astro')) {
      const name = entry.name.replace('.astro', '');
      const route = name === 'index' ? prefix.replace(/\/$/, '') : prefix + name;
      if (!EXCLUDE.has(route) && !EXCLUDE.has(name)) {
        routes.push(route);
      }
    }
  }

  return routes;
}

function buildSitemap(routes) {
  // Separate routes by locale
  const enRoutes = routes.filter(r => !LOCALES.some(l => r.startsWith(l + '/') || r === l));
  const localeRoutes = {};
  for (const locale of LOCALES) {
    localeRoutes[locale] = new Set(routes.filter(r => r.startsWith(locale + '/') || r === locale));
  }

  // Build mapping: en route -> { locale: localeRoute }
  function getLocaleRoute(enRoute, locale) {
    const candidate = enRoute === '' ? locale : `${locale}/${enRoute}`;
    return localeRoutes[locale].has(candidate) ? candidate : null;
  }

  function buildHreflang(enRoute) {
    const enHref = enRoute === '' ? `${BASE_URL}/` : `${BASE_URL}/${enRoute}`;
    const pairs = [{ lang: 'x-default', href: enHref }, { lang: 'en', href: enHref }];

    for (const locale of LOCALES) {
      const lr = getLocaleRoute(enRoute, locale);
      if (lr) {
        pairs.push({ lang: locale, href: `${BASE_URL}/${lr}/` });
      }
    }

    // Only emit hreflang if at least one translation exists
    if (pairs.length <= 2) return '';
    return pairs.map(p => `\n    <xhtml:link rel="alternate" hreflang="${p.lang}" href="${p.href}"/>`).join('');
  }

  const urls = [];

  // EN routes
  for (const route of enRoutes.sort()) {
    const loc = route === '' ? `${BASE_URL}/` : `${BASE_URL}/${route}`;
    urls.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>${buildHreflang(route)}
  </url>`);
  }

  // Locale routes
  for (const locale of LOCALES) {
    const sorted = [...localeRoutes[locale]].sort();
    for (const route of sorted) {
      const loc = `${BASE_URL}/${route}/`;
      // Find the corresponding EN route for hreflang
      const enRoute = route === locale ? '' : route.replace(`${locale}/`, '');
      const hreflang = enRoutes.includes(enRoute) ? buildHreflang(enRoute) : '';

      urls.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>${hreflang}
  </url>`);
    }
  }

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>

${urls.join('\n\n')}

</urlset>
`;
}

const routes = collectPages(PAGES_DIR);
const sitemap = buildSitemap(routes);
fs.writeFileSync(OUTPUT, sitemap, 'utf-8');
console.log(`Sitemap generated with ${routes.length} URLs -> public/sitemap.xml`);
