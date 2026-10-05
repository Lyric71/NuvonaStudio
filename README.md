# Nuvora Studio website

Source for [www.nuvora.studio](https://www.nuvora.studio): an Astro static site deployed on Vercel, in five languages (English at the root, plus `/fr`, `/de`, `/es` and `/zh` with localized slugs).

## Commands

| Command | What it does |
| :-- | :-- |
| `npm run dev` | Dev server on `127.0.0.1:4321` (next free port if taken) |
| `npm run build` | Converts new PNG/JPG in `public/` to WebP, then builds to `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run generate -- "<prompt>"` | Generates an image with the OpenAI Images API (needs `OPENAI_API_KEY`) |
| `npm run indexnow` | Submits the built sitemap's URLs to IndexNow by hand. Not needed after a deploy: `.github/workflows/indexnow.yml` submits new and changed pages automatically |

## Where things live

- `src/pages/`: one `.astro` file per page and locale. `src/pages/api/` holds the server routes (contact forms, LinkedIn optimizer).
- `src/layouts/Layout.astro`: head tags, canonical, hreflang, Open Graph and the JSON-LD graph.
- `src/i18n/index.ts`: UI strings and the slug maps behind `getAlternateUrl` and `localizedPath`.
- `src/i18n/schemas.ts`: page schemas and the article registry (dates, author, share image).
- `public/og/`: 1200x630 share images. These stay JPEG; the WebP optimizer skips this folder.
- `astro.config.mjs`: the sitemap, with hreflang alternates built from the same slug maps as the pages.

## Environment

`.env` needs `RESEND_API_KEY`, `RECAPTCHA_SECRET_KEY` and `ANTHROPIC_API_KEY` for the API routes. `OPENAI_API_KEY` is only used by the local image script.
