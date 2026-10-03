// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import { getAlternateUrl, languages } from './src/i18n/index.ts';
import { articleLastmod } from './src/i18n/schemas.ts';

const SITE = 'https://www.nuvora.studio';

// Keep the trailing slash on the bare root only.
const stripSlash = (url) => {
  const stripped = url.replace(/\/$/, '');
  return stripped === SITE ? `${SITE}/` : stripped;
};

// https://astro.build/config
export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [
    sitemap({
      filter: (page) => {
        const disallowed = ['/api', '/404'];
        return !disallowed.some(
          (path) => page.includes(`${path}/`) || page.endsWith(path),
        );
      },
      // The integration's own i18n option only pairs identical paths, which
      // misses the localized fr/es/de slugs. Build the alternates from the same
      // slug maps the pages use for their hreflang tags instead.
      serialize(item) {
        item.url = stripSlash(item.url);
        const path = new URL(item.url).pathname;
        item.links = [
          ...Object.keys(languages).map((l) => ({
            lang: l === 'zh' ? 'zh-CN' : l,
            url: stripSlash(`${SITE}${getAlternateUrl(path, l)}`),
          })),
          { lang: 'x-default', url: stripSlash(`${SITE}${getAlternateUrl(path, 'en')}`) },
        ];
        // Only articles carry a real modification date; omit it elsewhere
        // rather than stamping every URL with the build time.
        const lastmod = articleLastmod(path);
        if (lastmod) item.lastmod = lastmod;
        else delete item.lastmod;
        return item;
      },
    }),
  ],
  // Astro 7's default strips whitespace between tags the way JSX does, which
  // runs inline elements written on separate lines into the next word. `true`
  // keeps the Astro 6 behavior the templates were written for.
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'zh', 'es', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  server: {
    host: '127.0.0.1',
  },
});
