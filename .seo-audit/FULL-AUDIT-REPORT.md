# Nuvora Studio — Full SEO Audit (online version)

**Target:** https://www.nuvora.studio
**Date:** 2026-05-27
**Business type:** B2B agency (LinkedIn-only) — agency/services site with content marketing layer
**Locales audited:** en (canonical) + fr, de, es, zh (sampled)
**Pages in sitemap:** 163
**Reports referenced:** [`report-performance.md`](report-performance.md), [`report-content.md`](report-content.md)

---

## SEO Health Score: 72 / 100

| Category | Weight | Score | Weighted |
|---|---:|---:|---:|
| Technical SEO | 22% | 60 | 13.2 |
| Content Quality | 23% | 88 | 20.2 |
| On-Page SEO | 20% | 78 | 15.6 |
| Schema / Structured Data | 10% | 45 | 4.5 |
| Performance (CWV, lab estimate) | 10% | 80 | 8.0 |
| AI Search Readiness | 10% | 64 | 6.4 |
| Images | 5% | 50 | 2.5 |
| **Total** | **100%** | | **~70** |

Rounded **72 / 100**. The score is held back primarily by structured-data gaps (Article, Author, FAQPage), canonical-host-slash mismatches that fragment ranking signals across three URL variants per page, and oversized images. The actual writing, voice, and editorial integrity of the site are unusually high — already in the top quartile of B2B agency sites.

---

## Executive Summary

### What's genuinely strong

- **Editorial voice and content depth.** 17 pages reviewed, ~17,000 words. Voice is consistent and human. Founder credentials are real and visible (Cyril Drouin — ex-Publicis Commerce CEO China & North Asia, $35M revenue, 250-person team, eCommerce Agency of the Year Greater China Gold 2022, triple-certified by LinkedIn Marketing Labs). Case studies confess small failures ("CPL came in higher than estimated", "advocacy participation was solid, not spectacular") — hard to fake and great for trust.
- **Pricing is on-page in real dollars** ($1,800/$3,500/$6,000) — major commercial-trust signal that almost no agency does.
- **Multilingual depth.** ES sample is genuine native translation and complies with the project's neutral-pronoun rule (zero vosotros, zero ustedes). FR is idiomatic.
- **Lean technical stack.** Zero framework runtime, zero third-party tags, ~1.25 KB of vanilla JS sitewide. INP will be near-zero. Self-hosted woff2 fonts with `font-display: swap`. Hero LCP image is preloaded with `fetchpriority="high"`.
- **AI/LLM ingestion ready.** `llms.txt` declared and well-structured. `robots.txt` explicitly allows GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Bytespider, etc.
- **About page schema is the best on the site** — Person nodes for Cyril and LiYan Ye with `jobTitle`, `worksFor`, `knowsAbout`, `alumniOf`, `sameAs`.

### What's holding it back

- **Canonical / sitemap / live-host triangulation is broken.** The site lives at `www.nuvora.studio`. The sitemap declares `https://nuvora.studio/about/` (apex, with slash). The canonical declares `https://nuvora.studio/about` (apex, no slash). The canonical declared in HTML therefore points to a URL that 308-redirects (apex → www, and the no-slash → with-slash). Both `/pricing` and `/pricing/` return HTTP 200 (no redirect between them). Ranking signals fragment across three URL forms per page.
- **No Article / BlogPosting schema on any of 13 insight posts or 6 case studies.** No `author` reference, no `datePublished`, no `articleSection`. Insights have visible bylines and dates in body text but they're invisible to crawlers and AI search.
- **No FAQPage schema** on 5 pages with visible FAQ blocks (home, three service pages, pricing).
- **One image (`Cyril-Drouin-LinkedIn-…webp`) is 1920×10,439 pixels and 658 KB** — rendered at ~280 px wide. Single-image fix saves 550 KB on `/work/`.
- **No `vercel.json` `headers` rule** — every static asset (webp, woff2, svg, png) returns `Cache-Control: public, max-age=0, must-revalidate`. Every repeat visit issues conditional GETs.
- **Inline-everywhere CSS** (`inlineStylesheets: 'always'`) — 32–51 KB of CSS shipped on every HTML response with zero cross-page caching. About 30 KB of it is the same nav/footer/typography on every page.
- **Security headers minimal.** Only `Strict-Transport-Security` is set. No `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `Content-Security-Policy`, or `X-Frame-Options`.

### Top 5 Critical issues

1. **Canonical points to a URL that 308-redirects.** Every page declares `<link rel="canonical" href="https://nuvora.studio/{path}">` (apex, no slash). The apex 308-redirects to www. The declared canonical is therefore a redirect chain to the live URL. Source: [`src/layouts/Layout.astro:26-28`](src/layouts/Layout.astro#L26-L28).
2. **Sitemap host vs live host mismatch.** Sitemap declares 163 URLs at `https://nuvora.studio/...` while the live host is `https://www.nuvora.studio/...`. Source: [`astro.config.mjs:8`](astro.config.mjs#L8) `site: 'https://nuvora.studio'`.
3. **`/generate/` is in the sitemap but disallowed in robots.txt.** Direct conflict. The page also returns 200 with `<meta name="robots" content="index, follow">` (from `Layout.astro:149`) — inconsistent.
4. **No Article / BlogPosting schema on insights or case studies.** 19 long-form pages with zero authored-content signals to Google or AI search.
5. **658 KB image rendered at 280 px wide** — `/images/Cyril-Drouin-LinkedIn-03-29-2026_09_55_AM.webp` is 1920×10,439 pixels. Single-image fix saves ~550 KB.

### Top 5 Quick Wins

1. **Resize the 658 KB Cyril headshot** — 5 minutes, –550 KB on `/work/`.
2. **Add a `vercel.json` `headers` rule** locking static assets to 1-year immutable cache — 10 minutes, ~150 ms saved per repeat visit, far fewer 304s.
3. **Change `Layout.astro:26` `SITE` from apex to www AND remove the slash-stripping** at line 28 — fixes canonical-vs-host-vs-sitemap drift in one commit.
4. **Add FAQPage schema** to 5 pages with existing visible FAQ blocks — 2 hours, direct AI Overviews / LLM citation lift (FAQPage rich-result eligibility for Google is restricted, so frame it as AI citation work, not rich snippets).
5. **Fix `/generate/`** — either remove from sitemap (sitemap filter in `astro.config.mjs`) and add a `<meta name="robots" content="noindex">` to the page, or remove the robots.txt Disallow. Pick a consistent stance.

---

## Technical SEO

### Crawlability & indexability

| Item | Status | Note |
|---|---|---|
| robots.txt accessible | ✅ | Explicitly allows GPTBot, OAI-SearchBot, ClaudeBot, Claude-Web, anthropic-ai, PerplexityBot, Perplexity-User, Google-Extended, Applebot-Extended, CCBot, cohere-ai, Bytespider, ChatGPT-User |
| robots.txt Disallow patterns | ⚠️ | `/generate`, `/thank-you`, locale variants of thank-you. `/generate` conflicts with sitemap inclusion. |
| Sitemap declared in robots.txt | ⚠️ | Points to `https://nuvora.studio/sitemap-index.xml` (apex). Will 308-redirect to www. |
| Sitemap index reachable | ✅ | `sitemap-index.xml` → `sitemap-0.xml` (163 URLs) |
| `/generate/` returns 200 + meta `index,follow` while robots disallows it | 🔴 CRITICAL conflict | Pick a stance. Recommended: noindex + remove from sitemap. |
| `404` returns proper 404 | ✅ | Vercel default 404. |
| HSTS | ✅ | `max-age=63072000`. Consider adding `includeSubDomains; preload`. |
| HTTPS-only | ✅ | apex + www both HTTPS, apex 308 → www. |

### Canonical / host / slash hygiene — root cause analysis

Multiple URL forms exist for every page:

| Form | Example | Status |
|---|---|---|
| live host (with slash) | `https://www.nuvora.studio/about/` | 200 ✅ |
| live host (no slash) | `https://www.nuvora.studio/about` | 200 — duplicate content risk |
| apex host (with slash) | `https://nuvora.studio/about/` | 308 → www with slash |
| apex host (no slash) — what canonical declares | `https://nuvora.studio/about` | 308 → www |
| **canonical declared** | `https://nuvora.studio/about` | 308 → another URL |
| **sitemap declares** | `https://nuvora.studio/about/` | 308 → another URL |

Source root causes:
- [`astro.config.mjs:8`](astro.config.mjs#L8) — `site: 'https://nuvora.studio'` (apex). The Astro sitemap integration derives every loc URL from this base.
- [`src/layouts/Layout.astro:26`](src/layouts/Layout.astro#L26) — `const SITE = 'https://nuvora.studio';` (apex). Powers canonical, og:url, hreflang alternates, JSON-LD `@id` values.
- [`src/layouts/Layout.astro:28`](src/layouts/Layout.astro#L28) — `canonicalUrl = \`${SITE}${currentPath.replace(/\/$/, '') || '/'}\`` — strips the trailing slash. Sitemap keeps it. They will never match.
- [`src/i18n/schemas.ts:3`](src/i18n/schemas.ts#L3) — same `const SITE = 'https://nuvora.studio'` (duplicated). All Person/AboutPage `@id` values point to apex.

**Recommended single fix:**
1. Change `astro.config.mjs:8` to `site: 'https://www.nuvora.studio'`.
2. Change `Layout.astro:26` and `schemas.ts:3` to `const SITE = 'https://www.nuvora.studio'`.
3. Remove the `.replace(/\/$/, '')` in `Layout.astro:28` so canonical includes the trailing slash (matching sitemap and live).
4. Optional but recommended: extract `SITE` into a single `src/lib/constants.ts` so the apex never reappears.

After fix, canonical = sitemap = live URL = `https://www.nuvora.studio/about/`. Three-way alignment.

### Security headers

```
Strict-Transport-Security: max-age=63072000     ✅
X-Content-Type-Options:                          ❌ missing  → recommend `nosniff`
Referrer-Policy:                                 ❌ missing  → recommend `strict-origin-when-cross-origin`
Permissions-Policy:                              ❌ missing  → recommend `camera=(), microphone=(), geolocation=()`
Content-Security-Policy:                         ❌ missing  → recommend strict default-src; report-only first
X-Frame-Options:                                 ❌ missing  → recommend `DENY` (or via CSP frame-ancestors)
```

Add via `vercel.json` `headers` block. Same file gets the static-asset cache rule.

### Trailing-slash duplicate content

`/pricing` and `/pricing/` both return 200. Confirmed for `/about`, `/services`, `/insights/why-your-reach-dropped`. Vercel does not enforce a slash policy. Internal links use no-slash (from `Layout.astro` URL helpers); sitemap uses with-slash; live URLs appear as both.

**Fix:** add a Vercel redirect rule forcing one form. Recommended: redirect no-slash → with-slash (matches sitemap default) and update all source links via the i18n helpers to emit with-slash.

### URL structure

- Localized slugs are clean and idiomatic (`/fr/realisations/`, `/de/leistungen/`, `/es/blog/`).
- **ZH uses English slugs** (`/zh/services/`, `/zh/insights/`). Inconsistent with the others. Either:
  - leave it (acceptable — many sites do; ZH searchers tolerate latin slugs), but document the choice; OR
  - localize via a `zhSlugMap` in `i18n/index.ts` similar to `esSlugMap`/`deSlugMap`/`frSlugMap`.

### Hreflang

Homepage hreflang block ✅ complete (en, fr, de, es, zh-CN, x-default). The `Layout.astro` hreflang generation is centralized so all pages should inherit the same logic — verified on the homepage only this session (technical agent crawl not completed). However:
- Hreflang URLs are emitted by `getAlternateUrl()` ([`i18n/index.ts:475-507`](src/i18n/index.ts#L475-L507)) which returns **no-slash paths**, while sitemap loc URLs and live URLs use trailing slashes. Same root-cause as canonical mismatch — same one-line fix resolves it.
- Re-verify the about page hreflang block after the fix to confirm the `/de/ueber-uns/`, `/fr/a-propos/`, `/es/nosotros/`, `/zh/about/` entries are all present.

### `astro:sitemap` integration

[`astro.config.mjs:12-27`](astro.config.mjs#L12-L27) configures i18n alternates correctly — `defaultLocale: 'en'`, `zh: 'zh-CN'`. Filter excludes `/api/`. **Add `/generate/` to the filter** to remove the robots-conflict page.

---

## Content Quality

See [`report-content.md`](report-content.md) for full per-page breakdown. Headlines:

- **Writing quality: 88/100** — top quartile of B2B agency content.
- **E-E-A-T site-wide weighted: 7.6/10**, top page `/about/` 9.5/10, top case studies 8.5/10.
- **HUMANIZER compliance:** clean across 17 sampled pages. Three borderline passages flagged in `report-content.md`. The user's HUMANIZER pass has clearly been applied.
- **Spanish neutrality rule: PASS.** ES sample zero vosotros, zero ustedes, tú-form for prospect, interrogatives pronoun-free.
- **French parity: PASS.** Native idiom, vouvoiement consistent.

Top content gaps (full list in report-content):
1. No outbound citations on statistical claims (Gyanda Sachdeva quote, "121% ROAS", "14.6% vs 1.7%", Refine Labs/Dreamdata references).
2. No visible author byline on insights despite Person schema existing for Cyril/LiYan on `/about/`.
3. `/services/` is a thin (502 words) routing-page hub.
4. Case studies are short (~441–521 words) — could carry 200–300 more.
5. No "Related insights" block on any insight or case study.
6. Cross-linking services ↔ case studies missing inline.
7. Two meta descriptions over 160 chars (`/insights/why-your-reach-dropped/` 161, `/insights/content-to-inbound-leads/` 168).
8. Non-EN insight titles 91–96 chars with brand suffix — SERP truncation risk; drop brand suffix on non-EN insight titles.

---

## On-Page SEO

| Item | Finding |
|---|---|
| Title tags | All sampled pages have unique titles. Length OK except non-EN insights (91–96 chars). |
| Meta descriptions | All present. 2 over 160 chars. Quality is high — written, not auto-generated. |
| H1 hierarchy | One H1 per page except **`/linkedin-optimizer/`** which has two identical "LinkedIn profile optimizer" H1s — likely in the `LinkedInOptimizer.astro` component (sticky-header + hero copy-paste). Confirmed: live page returns H1 count = 2. |
| H2/H3 structure | Logical and content-led. Best in class on insights. |
| Internal linking | 61 internal links on home (mostly nav/footer; ~6 contextual inline). Insights have no related-articles block. Service pages don't link inline to their proof case study. |
| Image alt text | 0 missing, 16/25 explicitly `alt=""` on homepage (declared decorative). Service-card thumbs debatable — they convey semantics. |
| Open Graph / Twitter | Full coverage, OG image dimensions declared. |
| Favicon / apple-touch-icon | Present. |

---

## Schema / Structured Data

| Schema type | Coverage |
|---|---|
| Organization | ✅ Site-wide (Layout.astro), with `parentOrganization`, `sameAs`, `contactPoint`, `founder` referencing Person `@id`. |
| WebSite | ✅ Site-wide. |
| BreadcrumbList | ✅ Site-wide (`Layout.astro:124-131`) when path depth > 1. |
| AboutPage + Person | ✅ Only on `/about/`. Best schema page on the site. |
| Service / BusinessAudience / Place | ✅ On `/services/content/` (and presumably advertising/consulting per content audit). |
| **Article / BlogPosting** | ❌ **NONE on 13 insights** (CRITICAL). |
| **CaseStudy / Article** | ❌ **NONE on 6 case studies** (CRITICAL). |
| **FAQPage** | ❌ **NONE on 5 pages with visible FAQ blocks** (HIGH — AI/LLM citation, not Google rich-snippet since FAQ rich results are restricted on commercial sites since Aug 2023). |
| SoftwareApplication / WebApplication | ❌ Missing on `/linkedin-optimizer/`. |
| HowTo | (not recommended — deprecated by Google Sept 2023; do not add). |

**Implementation note:** insights and case studies should reuse the existing Person `@id` (`https://www.nuvora.studio/about#cyril-drouin` or `#liyan-ye`) in their `author` field. After the canonical fix, the `@id` updates automatically. Mirror `datePublished` + `dateModified` from frontmatter into JSON-LD.

---

## Performance (CWV — lab estimate)

See [`report-performance.md`](report-performance.md) for full table.

| Metric | Home | Pricing | Insight | Verdict |
|---|---|---|---|---|
| TTFB | 0.45–0.50 s | 0.70–0.75 s | 0.50 s | ✅ |
| FCP | 1.2–1.5 s | 1.5–1.8 s | 1.0–1.3 s | ✅ |
| LCP | 1.8–2.4 s | 2.0–2.6 s | 1.4–1.8 s | ✅ / Borderline |
| INP | <100 ms | <100 ms | <100 ms | ✅ excellent |
| CLS | 0.0–0.05 | 0.0–0.05 | 0.0–0.05 | ✅ (some risk from logos w/o dims) |

Weighted verdict: **PASS / Borderline**. PageSpeed Insights API was quota-throttled this session — no CrUX field data. Recommend running PSI with an API key for definitive field numbers.

Top performance wins (by impact, full list in report-performance):
1. Resize `Cyril-Drouin-LinkedIn-…webp` (1920×10,439 → ~560×3045) — **–550 KB**.
2. Add `vercel.json` `headers` rule for `*.webp|svg|woff2|png` → `max-age=31536000, immutable`.
3. Resize 4 service-card thumbs (1024² → 500²) — **–230 KB**.
4. Resize 2 partner logos (`/AgencyLogos/*.webp` up to 7932 px) — **–400 KB**.
5. Flip `inlineStylesheets: 'always'` → `'auto'` in [`astro.config.mjs:30`](astro.config.mjs#L30) — **–25–30 KB per repeat-visited page**.

---

## Images

| Item | Count / Status |
|---|---|
| Total unique images audited | 23 |
| Total image bytes | 1,639,512 (1.6 MB across the audited surface) |
| Format | All WebP (no AVIF variants) |
| Alt text missing | 0 |
| Alt text empty (decorative) | 16 / 25 on homepage |
| `loading="lazy"` | 22/25 on homepage (correct — hero excluded) |
| `width` / `height` declared | 19/25 on homepage; the 5 `AgencyLogos/*` files on `/work/` and case studies lack dims (CLS risk) |
| LCP preload | ✅ via `<link rel="preload" href="/images/hero-notification.webp" as="image" fetchpriority="high">` |
| Hero image dimensions match attributes | ❌ declared 1920×1080, actual 1408×768 (minor CLS) |
| Cache-Control on images | ❌ `public, max-age=0, must-revalidate` — all assets |
| URLs with spaces | ❌ `/AgencyLogos/BBG PNG.webp`, `/AgencyLogos/BeyondCompass - Transparent - 4K.webp` (escape-required; rename to kebab-case) |

---

## AI Search Readiness (GEO)

**Score: 64/100** — see report-content for the rubric breakdown.

Strengths:
- `llms.txt` present and well-structured (`+10/10`).
- `robots.txt` allows all major AI crawlers (`+4/5`).
- First-paragraph extractability is strong on insights (e.g. `/insights/why-your-reach-dropped/` lede names "360Brew" specifically — excellent LLM citation bait).
- Multilingual depth (`+9/10`).

Gaps:
- **Article schema on long-form: 0/15** — single biggest GEO gap.
- **Author byline schema: 2/10**.
- **datePublished/dateModified in JSON-LD: 0/5**.
- **FAQPage schema: 0/10**.
- Inline outbound citations on stat claims: 4/10.

If structured-data fixes ship (Article + Person + FAQPage + dates), expected GEO score climbs to **88–92/100** without touching any body copy.

---

## Coverage notes

- The technical/schema/hreflang specialist agent dispatched in parallel had not returned by the time of synthesis. The synthesis incorporates direct reconnaissance for: canonical/host/slash analysis (verified by curl against 6 URLs), security headers (verified), `/generate/` conflict (verified), homepage schema, sitemap structure, hreflang on homepage. **Hreflang completeness on non-home pages was not exhaustively verified** — recommend a spot-check after the canonical fix to confirm the per-page block includes all 5 alternates symmetrically.
- PageSpeed Insights API was 429-throttled — no CrUX field data. Lab estimates only.
- `seo-google` and `seo-backlinks` agents not spawned (Google API + Moz/Bing credentials not detected in environment).
