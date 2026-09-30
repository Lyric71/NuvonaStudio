// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.nuvora.studio',
  output: 'static',
  trailingSlash: 'never',
  adapter: vercel(),
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          fr: 'fr',
          es: 'es',
          de: 'de',
          zh: 'zh-CN',
        },
      },
      filter: (page) => {
        const disallowed = [
          '/api',
          '/generate',
          '/thank-you',
          '/fr/merci',
          '/de/danke',
          '/es/gracias',
          '/zh/thank-you',
        ];
        return !disallowed.some(
          (path) => page.includes(`${path}/`) || page.endsWith(path),
        );
      },
      serialize(item) {
        const stripSlash = (url) => {
          const stripped = url.replace(/\/$/, '');
          // Keep the trailing slash on the bare root only.
          return stripped === 'https://www.nuvora.studio'
            ? 'https://www.nuvora.studio/'
            : stripped;
        };
        item.url = stripSlash(item.url);
        if (item.links) {
          item.links = item.links.map((link) => ({ ...link, url: stripSlash(link.url) }));
        }
        return item;
      },
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
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
