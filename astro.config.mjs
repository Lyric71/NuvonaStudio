// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://nuvora.studio',
  output: 'static',
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
          '/api/',
          '/generate/',
          '/thank-you/',
          '/fr/merci/',
          '/de/danke/',
          '/es/gracias/',
          '/zh/thank-you/',
        ];
        return !disallowed.some((path) => page.includes(path));
      },
      serialize(item) {
        const stripSlash = (url) =>
          url === 'https://nuvora.studio/' ? url : url.replace(/\/$/, '');
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
