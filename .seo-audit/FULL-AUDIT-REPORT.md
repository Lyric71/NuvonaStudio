# Nuvora Studio — Full SEO Audit Report

- **Date:** 2026-05-27
- **Target:** `http://127.0.0.1:4322/` (Astro dev server) → production `https://nuvora.studio`
- **Codebase:** `C:\Users\cyril\Project\NuvoraStudioWeb` (commit `d53f79b`)
- **Pages in source:** 163 `.astro` (5 languages × ~33 routes)

## Executive summary

| Category | Weight | Score (0-100) | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 70 | 15.4 |
| Content Quality | 23% | 75 | 17.3 |
| On-Page SEO | 20% | 75 | 15.0 |
| Schema / Structured Data | 10% | **15** | 1.5 |
| Performance (CWV) | 10% | 75* | 7.5 |
| AI Search Readiness | 10% | **45** | 4.5 |
| Images | 5% | 80 | 4.0 |
| **SEO Health Score** | | | **65 / 100 (Fair)** |

\* CWV scored from lab-only signals (font preload, hero preload, `inlineStylesheets: 'always'`); confirm with field data after deploy via PageSpeed/CrUX.

**Business type detected:** Specialist B2B service agency (LinkedIn-only). Not local, not e-commerce, not multi-location. SXO/E-E-A-T-driven category, with a strong personal-brand component (Cyril Drouin in network footer).

### Top 5 critical issues (fix immediately)

1. **Zero Schema.org JSON-LD across the entire site.** No `Organization`, `WebSite`, `BreadcrumbList`, `Article`, `Service`, `FAQPage`, or `Person` markup is emitted by `Layout.astro` or any page. Sister sites in the network (Beyond Border Group) ship a rich `@graph` — Nuvora ships none. Direct impact on AI Overviews citability, Google knowledge panel eligibility, and rich result eligibility.
2. **Broken external link in Footer:** `https://hubtudio.ai` (missing the "s" — should be `hubstudio.ai`). Footer is sitewide, so this is a sitewide broken outbound link. [src/components/Footer.astro:57](src/components/Footer.astro#L57)
3. ~~Wrong-TLD footer link~~ — false positive (corrected 2026-05-27 by user). `.org` is the legitimate parent group entity (BeyondBorderGroup umbrella), distinct from `.com` (the China agency in the network list). Both TLDs are intentional.
4. **`og:image` and `twitter:image` are missing on every page.** `Layout.astro` defines no image fallback. Result: blank/auto-cropped previews on LinkedIn, X, Slack, WhatsApp, and any Open Graph consumer — directly bad for the channel the entire business specialises in.
5. **No `llms.txt` served from this project.** Robots.txt does not explicitly allow major AI bots either (it relies on the wildcard `Allow: /`, which works, but losing explicit signalling). The BBG sister project has both — Nuvora doesn't.

### Top 5 quick wins

1. Add `og:image` + `twitter:image` defaults in `Layout.astro` (1 image, 1200×630). Single edit, sitewide impact.
2. Fix the two broken outbound links in `Footer.astro` (1 character + 1 TLD).
3. Add an `Organization` + `WebSite` JSON-LD block to `Layout.astro` (sitewide), and `BreadcrumbList` + `Article` to insight pages. Templated, no design work.
4. Trim the FR and ES insight article titles (currently 117–118 chars — Google truncates at ~580 px / ≈60 chars).
5. Add `/generate` and `/thank-you` (and localised variants) to `robots.txt` Disallow.

---

## 1. Technical SEO

### Crawlability & indexability

| Signal | Status | Notes |
|---|---|---|
| `robots.txt` reachable | ✅ HTTP 200 | Wildcard `Allow: /`; sitemap pointer to `https://nuvora.studio/sitemap-index.xml`. Clean. |
| `sitemap-index.xml` in dev | ⚠️ HTTP 404 | Expected — `@astrojs/sitemap` only writes at `astro build`. **Confirm on production** after deploy: `curl -I https://nuvora.studio/sitemap-index.xml`. |
| Local `dist/` artifact | ⚠️ No sitemap on disk | `dist/` exists with `client/` only — last build is stale or partial. Run `npm run build` and verify `dist/sitemap-index.xml` + `dist/sitemap-0.xml` exist before deploying. |
| Canonical tags | ✅ Present | `Layout.astro` strips trailing slash from sub-paths but keeps `/` for root. Mild inconsistency — see "Trailing-slash policy" below. |
| `meta robots` | ✅ `index, follow` | Sitewide via Layout. |
| Internal dead links | ✅ None found | All `/services/*`, `/insights/*`, `/work/*` resolve 200 on dev server. |
| Broken external links | ❌ 1 found | `https://hubtudio.ai` (typo for `hubstudio.ai`). See Critical #2. |
| Dev/internal pages exposed | ⚠️ `/generate` | Public AI image generator; should not be indexed. Add to robots Disallow. |

### Trailing-slash policy

`astro.config.mjs` doesn't set `trailingSlash`, so Astro's default is `'ignore'`. The rendered Layout produces canonicals like `https://nuvora.studio/insights/why-linkedin-ads-cost-more` (no trailing slash) while the homepage canonical is `https://nuvora.studio/` (with trailing slash). `@astrojs/sitemap` will likely emit URLs **with** trailing slashes for non-root pages, creating canonical ≠ sitemap mismatches. Pick one and enforce it via `trailingSlash: 'always'` (or `'never'`) and align canonicals + sitemap.

### Security headers (dev)

Dev server returns no `strict-transport-security`, no `content-security-policy`, no `x-content-type-options`, no `referrer-policy`. Expected in dev — these will be set by Vercel on production. **Verify after deploy** with:

```
curl -I https://nuvora.studio | grep -iE "strict-|content-sec|x-content|referrer-policy"
```

### Core Web Vitals (signal-only — confirm with field data)

Lab-friendly signals in the dev HTML:

- ✅ Hero image preloaded with `fetchpriority="high"` ([Layout.astro:64](src/layouts/Layout.astro#L64))
- ✅ Self-hosted Inter + Poppins fonts preloaded as `woff2` ([Layout.astro:60-61](src/layouts/Layout.astro#L60-L61))
- ✅ `inlineStylesheets: 'always'` in `astro.config.mjs:30` removes render-blocking CSS request
- ⚠️ The dev HTML is ~226 KB on the homepage (large inline CSS) — production build with critical CSS may be lighter, but worth measuring. Inlining "always" can hurt repeat-view LCP because CSS isn't cached.
- ⚠️ Hero `/images/hero-notification.webp` not given explicit `width`/`height` in the `<link rel="preload">` (CLS protection); the matching `<img>` tag is the place that matters — verify.

After production deploy, run `/seo google pagespeed https://nuvora.studio` and `/seo google crux https://nuvora.studio` for real LCP / INP / CLS values.

---

## 2. Content quality (E-E-A-T)

### Coverage

| Section | EN | FR | DE | ES | ZH |
|---|---|---|---|---|---|
| Insight articles (non-index) | 13 | 13 | 13 | 13 | 13 |
| Case studies | 6 | 6 | 6 | 6 | 6 |

**Routing parity is excellent** — every English insight and case study has a matching localised slug via [src/i18n/index.ts:331-468](src/i18n/index.ts#L331-L468).

### Per-article word count (sample: "Why LinkedIn ads cost more")

| Lang | Word count | % of EN |
|---|---|---|
| EN | 1,729 | 100% |
| FR | 2,081 | 120% |
| DE | 1,678 | 97% |
| ES | 2,037 | 118% |
| **ZH** | **558** | **32%** |

**ZH is significantly under-translated** — at 558 words it falls into the thin-content zone for a long-form thought-leadership article. Per [references/quality-gates.md](references/quality-gates.md), an editorial insight piece should clear 1,000 words; the EN/FR/DE/ES versions all do, ZH does not. Expand ZH translations to ≥80% of EN length or mark them clearly as digests.

### E-E-A-T signals

- **Experience:** Strong — first-person practitioner voice on insights, named case-study clients (Japanese medical bed manufacturer, Swedish polymer aerospace, etc.), Cyril Drouin biographical link in the network footer.
- **Expertise:** Strong — narrow, declared specialisation ("LinkedIn-only"), no SEO/Instagram/full-service drift. FAQs answer real procurement questions ("What does it cost", "Is advertising included") with numbers.
- **Authoritativeness:** Mixed — no `Organization` schema, no author bylines visible in the homepage HTML, no `Person` JSON-LD for the founder, no `sameAs` social links emitted. The signals exist in copy but are invisible to crawlers.
- **Trust:** Weak signals at the markup layer — no schema, no review/rating mention found on the homepage, no security headers in dev. Copy-side trust is solid (specific pricing, "$1,800/month", "30 minutes. No pitch.").

**Net E-E-A-T grade: B.** Content earns it; markup withholds half the proof.

### HUMANIZER compliance (English-only memory rule)

Sampled EN homepage and `/insights/why-linkedin-ads-cost-more`. Copy reads in the practitioner-voice register the user mandates (`feedback_humanizer.md`, `feedback_english_drafting_workflow.md`) — short sentences, no "moreover/furthermore", contractions present, no AI-tells. No remediation needed in the English body copy.

---

## 3. On-page SEO

### Title and description lengths

| Page | Title (chars) | Desc (chars) | Verdict |
|---|---|---|---|
| `/` (EN home) | 39 | 144 | ✅ |
| `/about` | 51 | 149 | ✅ |
| `/contact` | 66 | 181 | ⚠️ desc trims |
| `/pricing` | 53 | 158 | ✅ |
| `/services` | 41 | 147 | ✅ |
| `/insights` | 43 | 142 | ✅ |
| `/fr` | 47 | 128 | ✅ |
| `/de` | 55 | 140 | ✅ |
| `/es` | 44 | 144 | ✅ |
| `/zh` | 45 | 103 | ⚠️ desc short for ZH char-density |
| `/insights/why-linkedin-ads-cost-more` (EN) | 44 | 158 | ✅ |
| **`/fr/publications/...`** | **118** | **185** | ❌ both too long |
| **`/de/einblicke/...`** | 75 | 146 | ⚠️ title borderline |
| **`/es/blog/...`** | **117** | **217** | ❌ both too long |
| `/zh/insights/...` | 45 | 103 | ✅ |

Sub-page canonical example: `https://nuvora.studio/insights/why-linkedin-ads-cost-more` (no trailing slash) vs. home `https://nuvora.studio/` (trailing slash). Decide and enforce.

### Heading hierarchy

Every sampled page has exactly **one `<h1>`**. Good. Spot-check the H2/H3 hierarchy in the long insight articles for a single sequential outline once the schema fix is in.

### Hreflang

Every sampled page emits **6 alternates** (`en`, `fr`, `zh`, `es`, `de`, `x-default`) with correct localised slugs. The implementation in [src/i18n/index.ts:475-507](src/i18n/index.ts#L475-L507) is solid.

**One inconsistency**: `Layout.astro` emits `hreflang="zh"` while `astro.config.mjs:20` declares `zh: 'zh-CN'` in the sitemap config. Pick one and align. For a site that's largely a single-script Simplified Chinese variant, `zh-Hans` or `zh-CN` are both more precise than bare `zh`.

### Internal linking

Homepage emits 61 internal `<a>` (22 unique). Healthy spread across services, work, insights, pricing, contact. No orphan top-level pages detected from the homepage crawl.

---

## 4. Schema / structured data

**Zero JSON-LD blocks** found across 10 sampled pages (homepage, 4 language homes, insights index, services, pricing, contact, about, 5 article variants).

### What's missing (priority order)

1. **`Organization` + `WebSite`** — sitewide via Layout. Mandatory baseline. Include `name`, `url`, `logo` (1200×630 OG image), `sameAs` (LinkedIn company URL), `contactPoint`, `description`.
2. **`Person`** for Cyril Drouin — `Person` node with `jobTitle`, `worksFor` linking to `#organization`, `sameAs` (LinkedIn profile). Add on `/about`.
3. **`Service`** — one per service line (`/services/content`, `/services/advertising`, `/services/consulting`). Each as `Service` with `provider` linking to `#organization`, `areaServed: "Worldwide"`, `serviceType`.
4. **`Article`** — on every insight page. `headline`, `datePublished`, `dateModified`, `author` linking to Cyril, `image`, `mainEntityOfPage`.
5. **`BreadcrumbList`** — on all sub-pages.
6. **`FAQPage`** — on `/`, `/pricing`, `/contact` (the three pages that already have FAQ component instances). Note: since Aug 2023 Google restricts FAQ rich results to gov/healthcare, so the SEO/SERP benefit is gone — but FAQPage schema still helps **AI engines** (ChatGPT search, Perplexity, AI Overviews) cite the answers. Worth doing for that reason alone. Per [references/quality-gates.md](references/quality-gates.md) this is Info-priority for Google SERPs, but Medium for GEO/AI.

### What NOT to add

- **`HowTo`** — deprecated by Google in Sept 2023. Skip.
- **`LocalBusiness`** — Nuvora isn't a brick-and-mortar/SAB business. Skip.

---

## 5. AI Search Readiness (GEO)

| Signal | Status |
|---|---|
| `llms.txt` at root | ❌ Missing (HTTP 404) |
| `robots.txt` AI bot allow-list | ⚠️ Implicit via `*` only — no explicit `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` blocks. Functionally permissive but not signalled. |
| Schema for citability | ❌ None (see §4) |
| FAQ schema | ❌ None — the strongest passage-citable structure on the site is unmarked |
| Author/`Person` schema | ❌ None |
| Self-hosted fonts (no third-party calls) | ✅ Inter + Poppins local |

**Citability score (informal): 3/10.** Content is citation-worthy (specific dollar figures, named clients, contrarian takes) but the markup gives AI extractors nothing to anchor on. A 100-line `Layout.astro` schema patch + a 30-line `llms.txt` would double this number.

Recommended `llms.txt` should mirror the structure of the BBG sister site's existing one (which you've already seen). Don't copy that file verbatim — its content is for a different company.

---

## 6. Images

| Check | Status |
|---|---|
| Format | ✅ WebP everywhere in `public/images/` |
| Alt attributes present | ✅ Every `<img>` has an `alt` (no missing) |
| Decorative empty alts | ✅ Flags, dividers — correctly empty |
| Explicit `width`/`height` | ✅ At least on the logo and hero (sampled) |
| Lazy loading | ✅ `loading="lazy"` on flags, network logos |
| LCP image preload | ✅ Per-page via `preloadHero` prop |
| OG image | ❌ Missing entirely (see §3 / Critical #4) |

Spot-check Hero/Problem/ServicesGrid `<img>` tags for descriptive (not generic) alt text once the schema/OG work is done — current sample shows `alt="Nuvora Studio"` on the logo, which is correct, but content images need a quick alt-text pass to ensure they describe the visual (not just "hero image").

---

## 7. International SEO (hreflang + content parity)

Strong points:
- All 5 languages route correctly and emit complete hreflang sets.
- Localised slugs (FR `publications`, DE `einblicke`, ES `blog`, ZH retains EN slugs by design).
- `x-default` points to EN — correct.

Weak points:
- ZH article body length is ~32% of EN (see §2). Either expand or label as digest.
- FR/ES titles + descriptions exceed Google truncation limits on insight articles (see §3 table).
- `hreflang="zh"` ↔ sitemap `zh-CN` mismatch.
- Spanish memory rule (`project_spanish_variant.md`) — content must avoid vosotros AND ustedes. Not exhaustively verified in this audit; spot-check the FAQ and CTA strings in `src/i18n/index.ts:195-254` during the title/desc trim pass.

---

## 8. Performance (preliminary — confirm with field data)

Architecture is sensible:
- Astro static output with Vercel adapter.
- All fonts and images self-hosted (no third-party calls observed).
- Hero image preloaded with `fetchpriority="high"`.
- `inlineStylesheets: 'always'` — eliminates render-blocking CSS at the cost of repeat-view caching.

Unknowns until field data:
- Real LCP/INP/CLS on production.
- Inline-CSS payload size after Tailwind purge.
- Image dimensions on actual hero usage.

Re-run with `/seo google pagespeed https://nuvora.studio` after deployment.

---

## Appendix A — Files captured

All raw HTML and findings under `.seo-audit/`:

- `homepage.html`, `about.html`, `contact.html`, `pricing.html`, `services.html`, `insights.html`
- `fr-home.html`, `de-home.html`, `es-home.html`, `zh-home.html`
- `insight-en.html` and 4 localised variants
- `robots.txt`, `llms.txt` (404 placeholder)

## Appendix B — Note on initial port confusion

The audit was originally pointed at `localhost:4321`, which was serving the **BeyondBorderGroup** Astro project (visible from the inlined Vite source path `C:/Users/cyril/Project/BeyondBorderGroup/src/styles/global.css`). The Nuvora dev server is on `127.0.0.1:4322`. All findings above are from port 4322.
