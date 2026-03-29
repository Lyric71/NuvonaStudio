import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PAGES_DIR = path.join(__dirname, '..', 'src', 'pages');
const OUTPUT = path.join(__dirname, '..', 'public', 'sitemap.xml');
const BASE_URL = 'https://nuvora.studio';
const TODAY = new Date().toISOString().split('T')[0];

// Pages to exclude from sitemap
const EXCLUDE = new Set(['generate']);

// Priority mapping
function getPriority(route) {
  if (route === '' || route === 'fr') return '1.0';
  const depth = route.replace(/^fr\/?/, '').split('/').filter(Boolean).length;
  if (depth === 0) return '1.0';
  if (depth === 1) return '0.8';
  return '0.7';
}

// Changefreq mapping
function getChangefreq(route) {
  const clean = route.replace(/^fr\/?/, '');
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
  // Separate EN and FR routes
  const enRoutes = routes.filter(r => !r.startsWith('fr/') && r !== 'fr');
  const frRoutes = routes.filter(r => r.startsWith('fr/') || r === 'fr');

  // Build a map of FR routes for quick lookup
  const frRouteSet = new Set(frRoutes);

  // Build a map: en route -> fr route (if exists)
  const enToFr = new Map();
  for (const en of enRoutes) {
    const frCandidate = en === '' ? 'fr' : `fr/${en}`;
    if (frRouteSet.has(frCandidate)) {
      enToFr.set(en, frCandidate);
    }
  }

  // Build reverse: fr route -> en route
  const frToEn = new Map();
  for (const [en, fr] of enToFr) {
    frToEn.set(fr, en);
  }

  const urls = [];

  // Process EN routes
  for (const route of enRoutes.sort()) {
    const loc = route === '' ? `${BASE_URL}/` : `${BASE_URL}/${route}`;
    const frRoute = enToFr.get(route);

    let hreflang = '';
    if (frRoute) {
      const enHref = route === '' ? `${BASE_URL}/` : `${BASE_URL}/${route}`;
      const frHref = `${BASE_URL}/${frRoute}/`;
      hreflang = `
    <xhtml:link rel="alternate" hreflang="x-default" href="${enHref}"/>
    <xhtml:link rel="alternate" hreflang="en"        href="${enHref}"/>
    <xhtml:link rel="alternate" hreflang="fr"        href="${frHref}"/>`;
    }

    urls.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>${hreflang}
  </url>`);
  }

  // Process FR routes
  for (const route of frRoutes.sort()) {
    const loc = `${BASE_URL}/${route}/`;
    const enRoute = frToEn.get(route);

    let hreflang = '';
    if (enRoute !== undefined) {
      const enHref = enRoute === '' ? `${BASE_URL}/` : `${BASE_URL}/${enRoute}`;
      const frHref = `${BASE_URL}/${route}/`;
      hreflang = `
    <xhtml:link rel="alternate" hreflang="x-default" href="${enHref}"/>
    <xhtml:link rel="alternate" hreflang="en"        href="${enHref}"/>
    <xhtml:link rel="alternate" hreflang="fr"        href="${frHref}"/>`;
    }

    urls.push(`  <url>
    <loc>${loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${getChangefreq(route)}</changefreq>
    <priority>${getPriority(route)}</priority>${hreflang}
  </url>`);
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
