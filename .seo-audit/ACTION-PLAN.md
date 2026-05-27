# Nuvora Studio — SEO Action Plan

Prioritised by impact / effort. Companion to [FULL-AUDIT-REPORT.md](FULL-AUDIT-REPORT.md).

## CRITICAL — fix this week

### C1. Fix broken footer links (5 minutes, sitewide)
File: [src/components/Footer.astro:57](src/components/Footer.astro#L57)

- `https://hubtudio.ai` → `https://hubstudio.ai` (missing `s`)
- ~~`.org` change~~: false positive. `.org` is the legitimate parent group entity (umbrella), distinct from `.com` (the China agency in the network list). Keep both as-is.

### C2. Add default `og:image` + `twitter:image` to Layout
File: [src/layouts/Layout.astro](src/layouts/Layout.astro)

Add to the `<head>`, after the existing Twitter card meta:

```astro
<meta property="og:image" content={`${SITE}/og/default.png`} />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Nuvora Studio — LinkedIn Agency for B2B" />
<meta property="og:site_name" content="Nuvora Studio" />
<meta property="og:locale" content={lang === 'en' ? 'en_US' : lang === 'fr' ? 'fr_FR' : lang === 'de' ? 'de_DE' : lang === 'es' ? 'es_ES' : 'zh_CN'} />
<meta name="twitter:image" content={`${SITE}/og/default.png`} />
<meta name="twitter:image:alt" content="Nuvora Studio — LinkedIn Agency for B2B" />
```

Then create `public/og/default.png` at 1200×630. Also add per-page `ogImage` prop override for insight articles (use the existing `/blog/hero-*.webp` / `.svg` files — convert to PNG/JPG so OG consumers reliably render).

### C3. Ship `Organization` + `WebSite` JSON-LD in Layout
File: [src/layouts/Layout.astro](src/layouts/Layout.astro)

Embed in `<head>` (model the shape on the BBG `@graph` you've already seen):

```astro
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      "name": "Nuvora Studio",
      "url": SITE,
      "logo": `${SITE}/images/nuvora-logo.webp`,
      "description": "LinkedIn-only B2B marketing agency. Strategy, content, ads — built for B2B teams who want pipeline.",
      "founder": { "@type": "Person", "@id": `${SITE}/about#cyril-drouin` },
      "sameAs": [
        "https://www.linkedin.com/company/nuvorastudio"
      ]
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      "url": SITE,
      "name": "Nuvora Studio",
      "publisher": { "@id": `${SITE}/#organization` },
      "inLanguage": ["en", "fr", "de", "es", "zh"]
    }
  ]
}) } />
```

Then add page-type schema where it earns its keep:
- `Article` on every `src/pages/insights/*.astro` (and localised siblings)
- `Person` (Cyril Drouin) on `/about`
- `Service` on each of `/services/content`, `/services/advertising`, `/services/consulting`
- `BreadcrumbList` on all sub-pages
- `FAQPage` on `/`, `/pricing`, `/contact` (Info priority for Google, Medium for AI/LLM citation)

### C4. Add `llms.txt` for AI search engines
File: create `public/llms.txt`

Model the structure on the BBG llms.txt you already use, but replace every line with Nuvora content. Sections:
- One-line H1 + intro paragraph naming the agency and what it does
- `## Primary Pages` — Home, Services, Pricing, Work, Insights, About, Contact, LinkedIn Optimizer
- `## Insights` — each of the 13 articles with a single-sentence summary
- `## Case Studies` — each of the 6 work pages with a single-sentence summary

Keep one sentence per bullet, no marketing language, no emoji. AI engines read it as structured ground truth.

### C5. Add explicit AI bot allow rules to `robots.txt`
File: `public/robots.txt`

```
User-agent: *
Allow: /

Disallow: /thank-you
Disallow: /fr/merci
Disallow: /de/danke
Disallow: /es/gracias
Disallow: /generate

# Explicit AI / answer engine signalling
User-agent: GPTBot
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: CCBot
Allow: /
User-agent: cohere-ai
Allow: /
User-agent: Bytespider
Allow: /

Sitemap: https://nuvora.studio/sitemap-index.xml
```

(Confirm `/thank-you` and localised variants actually exist in routing before committing — they're in the inherited robots template from BBG and may not all be Nuvora routes.)

---

## HIGH — fix within 1 week

### H1. Trim FR and ES insight article titles + descriptions
Sample (Why LinkedIn ads cost more):

- FR title: 118 chars → trim to ≤60 (was: long descriptive sentence; aim for "Pourquoi la publicité LinkedIn coûte plus cher | Nuvora Studio")
- ES title: 117 chars → same treatment
- ES description: 217 chars → trim to ≤155
- FR description: 185 chars → trim to ≤155

Audit all 13 article × FR/ES variants. Files under [src/pages/fr/publications/](src/pages/fr/publications/) and [src/pages/es/blog/](src/pages/es/blog/).

### H2. Expand or label ZH insight articles
ZH version of the sampled article is 558 words vs. 1,729 EN. Either:
- (a) Expand ZH translations to ≥80% of EN length, **OR**
- (b) Re-position ZH as digest/summary content and update `<meta name="description">` to reflect that.

Option (a) is more SEO-defensible. Option (b) is the honest short-term answer if you're not going to keep all 13 articles in sync.

### H3. Enforce trailing-slash policy
File: [astro.config.mjs](astro.config.mjs)

Add:
```js
trailingSlash: 'always', // or 'never' — pick one
```

Then either align `Layout.astro` canonical generation to keep trailing slash sitewide, or strip it sitewide. Currently home has it, sub-pages don't.

### H4. Resolve `hreflang="zh"` vs sitemap `zh-CN`
File: [astro.config.mjs:20](astro.config.mjs#L20) and [src/layouts/Layout.astro:51-54](src/layouts/Layout.astro#L51-L54)

Two safe options:
- Use `zh-Hans` everywhere (script-based, audience-agnostic)
- Use `zh-CN` everywhere (region-based, matches the existing sitemap config)

Update [src/i18n/index.ts](src/i18n/index.ts) `languages` map and Layout `hreflang` emission together.

### H5. Build + verify production sitemap
Local check before deploy:

```
npm run build
ls dist/sitemap-*.xml          # expect: sitemap-index.xml, sitemap-0.xml
head -40 dist/sitemap-0.xml    # expect: all 5 locales × ~33 routes
```

Then post-deploy:
```
curl -I https://nuvora.studio/sitemap-index.xml
curl https://nuvora.studio/sitemap-index.xml | head -20
```

### H6. Submit sitemap to Google Search Console + Bing Webmaster

After H5 confirms the sitemap exists at the production URL. While in GSC, also request indexing for the homepage and the 5 language homepages.

---

## MEDIUM — fix within 1 month

### M1. Add `BreadcrumbList` schema sitewide
Templated in Layout — derive from `Astro.url.pathname` + `localizedPath()` from [src/i18n/index.ts](src/i18n/index.ts).

### M2. Add `FAQPage` schema to homepage, pricing, contact
Each of these pages already passes `faqs` to the FAQ component ([src/components/FAQ.astro](src/components/FAQ.astro)). The component receives the array — modify it to also emit a `<script type="application/ld+json">` with `FAQPage` structure inside the section. Single edit, three pages benefit.

### M3. Tighten content image alt text
Spot-check alts on `Hero`, `ProblemStatement`, `ServicesGrid`, `WhatSetsUsApart`, `IndustriesWeServe`. A handful are likely generic ("hero image", "team"). Replace with descriptive alts like "Strategist annotating a LinkedIn post draft on a tablet" — better for accessibility, image SEO, and AI image understanding.

### M4. Add `Service` schema to the three service detail pages
[/services/content](src/pages/services/content.astro), [/services/advertising](src/pages/services/index.astro), [/services/consulting](src/pages/services/index.astro). Each gets one `Service` JSON-LD with `provider` pointing to the `#organization` node from C3.

### M5. Add `Person` schema for Cyril Drouin
File: [src/pages/about.astro](src/pages/about.astro)

Include `jobTitle`, `worksFor` (link to `#organization`), `sameAs` (LinkedIn profile URL), `description`. This is the single biggest E-E-A-T signal for an agency built on a named founder.

### M6. Audit Spanish copy against neutral-pronoun rule
Memory rule (`project_spanish_variant.md`): no vosotros, no ustedes, FAQ-style questions rephrased to be pronoun-free, `tú` kept for the prospect.

Scan [src/i18n/index.ts:195-254](src/i18n/index.ts#L195-L254) and the ES page bodies during the H1 title/desc trim pass. Specific high-risk strings: `cta.headline2: '¿por fin te traiga negocio?'` (correct — `tú`), but `common.book_discovery: 'Reservar una llamada'` is infinitive (correct). No immediate red flags spotted, but a sweep is cheap.

### M7. Post-deploy CWV measurement
Run `/seo google pagespeed https://nuvora.studio` once production is live to capture LCP, INP, CLS, FCP, TTFB. If `inlineStylesheets: 'always'` produces a bloated payload (>50 KB inline CSS), consider switching to `'auto'`.

---

## LOW — backlog

### L1. Add `theme-color` meta
One line in Layout. Improves mobile browser chrome UX.

### L2. Add `<link rel="me" href="..." />` for verified author social profiles
Useful for AI search and Mastodon-style verification chain.

### L3. Implement `Article.dateModified` and surface it on insight pages
Both for `Article` schema (M1 dependency) and as visible "Last updated:" text — strong freshness + E-E-A-T signal for AI Overviews.

### L4. Add a Person/founder bio block to `/about` that AI engines can extract
Short, structured: name, role, prior role (ex-CEO of X), credentials, areas of expertise. Pair with the M5 `Person` schema.

### L5. Set up `/seo drift baseline https://nuvora.studio` after the schema/og/llms.txt work lands
So future audits can detect regressions on the metadata that took effort to add.

---

## Tracking the work

Suggested PR breakdown:

1. **PR 1 (quick wins):** C1 (footer typos) + L1 (theme-color) — 1 file, 2 minutes.
2. **PR 2 (OG + schema):** C2 + C3 + M1 + M2 — Layout.astro + FAQ.astro changes, 1 hour.
3. **PR 3 (AI search):** C4 (llms.txt) + C5 (robots.txt) — 2 files, 30 minutes.
4. **PR 4 (i18n metadata):** H1 (FR/ES title/desc trim) — touches 26 files (13 FR + 13 ES), 1-2 hours with the HUMANIZER pass.
5. **PR 5 (trailing slash + hreflang code):** H3 + H4 — config + Layout, 30 minutes plus regression check.
6. **PR 6 (ZH content):** H2 — biggest scope; can run in parallel.

Re-run `/seo audit` after PR 2 and PR 3 land to confirm the Schema and AI Search categories move from 15 → 70+ and 45 → 80+, which should pull the overall score from 65 to ~80.
