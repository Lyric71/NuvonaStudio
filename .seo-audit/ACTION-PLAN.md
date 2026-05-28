# Nuvora Studio — SEO Action Plan

Prioritised by impact / effort. Companion to [`FULL-AUDIT-REPORT.md`](FULL-AUDIT-REPORT.md), [`report-performance.md`](report-performance.md), and [`report-content.md`](report-content.md).

| Priority | Items | Suggested window |
|---|---:|---|
| 🔴 CRITICAL | 5 | This week |
| 🟠 HIGH | 9 | Within 2 weeks |
| 🟡 MEDIUM | 11 | Within 1 month |
| 🟢 LOW / Backlog | 7 | Backlog |

---

## 🔴 CRITICAL — fix this week

### C1. Unify host + canonical + sitemap on `https://www.nuvora.studio/` with trailing slash

Three forms exist for every page (apex/www × no-slash/with-slash). Canonical declared = redirect chain to live URL. Highest-impact single fix.

**Files / changes:**
- [`astro.config.mjs:8`](../astro.config.mjs#L8) — change `site: 'https://nuvora.studio'` → `site: 'https://www.nuvora.studio'`.
- [`src/layouts/Layout.astro:26`](../src/layouts/Layout.astro#L26) — change `const SITE = 'https://nuvora.studio'` → `'https://www.nuvora.studio'`.
- [`src/layouts/Layout.astro:28`](../src/layouts/Layout.astro#L28) — remove the `.replace(/\/$/, '')`. New line: `const canonicalUrl = \`${SITE}${currentPath}\`;` (Astro pathname includes the trailing slash for static routes; the only path without one is `/`, which doesn't need replacement).
- [`src/i18n/schemas.ts:3`](../src/i18n/schemas.ts#L3) — change `const SITE = 'https://nuvora.studio'` → `'https://www.nuvora.studio'`.
- Recommended cleanup: extract `SITE` to a single `src/lib/constants.ts` so apex never reappears.

**Verify after deploy:**
- `curl -I https://www.nuvora.studio/about/` → 200, no redirect.
- HTML canonical = `https://www.nuvora.studio/about/`.
- Sitemap loc = `https://www.nuvora.studio/about/`.
- Hreflang alternates = `https://www.nuvora.studio/de/ueber-uns/` etc. (all with trailing slash).

### C2. Resolve trailing-slash duplicate content via Vercel redirect

`/pricing` and `/pricing/` both return 200 today. Force one form sitewide.

**Files / changes:**
- [`vercel.json`](../vercel.json) — add `redirects` block forcing no-slash → with-slash (matching the sitemap and Astro's default static route style):

```json
{
  "redirects": [
    {
      "source": "/((?!api/|.*\\..*).*[^/])",
      "destination": "/$1/",
      "statusCode": 308
    }
  ]
}
```

(Excludes API routes and any path containing a `.` — i.e. file assets.)

### C3. Resolve `/generate/` robots-vs-sitemap conflict

The page returns 200 with `index, follow` but `robots.txt` disallows it. Pick one stance — recommended: **noindex + remove from sitemap**.

**Files / changes:**
- [`astro.config.mjs:23`](../astro.config.mjs#L23) — extend sitemap filter:
  `filter: (page) => !page.includes('/api/') && !page.includes('/generate'),`
- `src/pages/generate.astro` (or `generate/index.astro`) — wrap in `<Layout>` with explicit `<meta name="robots" content="noindex, nofollow">` (currently inherits `index, follow` from Layout.astro:149). Easiest path: add a `robots` prop to `Layout.astro`.
- Keep the `robots.txt` Disallow as a belt-and-braces (it doesn't hurt; some bots respect only one).

### C4. Resize `Cyril-Drouin-LinkedIn-03-29-2026_09_55_AM.webp`

Currently **1920 × 10,439 px, 658 KB**. Rendered at ~280 px wide on `/work/`. Largest single byte on the site.

**Action:** crop or resize to ~560 × 3045 px (2× display width), re-encode WebP q=80. Expected output ~50–80 KB.
**Saves:** ~550 KB on `/work/` page weight.

### C5. Add Article + author + dates JSON-LD to insights and case studies

19 long-form pages with zero authored-content schema. Single largest GEO/AI-search lever on the site.

**Approach:**
- Add `articleSchema()` / `caseStudySchema()` helpers to `src/i18n/schemas.ts` taking `{slug, title, description, datePublished, dateModified, authorRef, lang}`.
- `author` should reference the existing Person `@id` — `https://www.nuvora.studio/about#cyril-drouin` or `#liyan-ye`.
- Required fields: `@type: BlogPosting` (insights) / `Article` (case studies), `headline`, `description`, `image`, `datePublished`, `dateModified`, `author`, `publisher`, `mainEntityOfPage`, `inLanguage`, `articleSection`, `wordCount`.
- Pass via `<Layout schemas={[articleSchema({...})]}>` from each insight/case-study page.
- Source the dates from page frontmatter (insights look like they already carry visible dates — surface them into JSON-LD).

**Expected GEO score uplift:** +20 to +25 points.

---

## 🟠 HIGH — within 2 weeks

### H1. Add `vercel.json` `headers` rule for static assets + security headers

```json
{
  "headers": [
    {
      "source": "/(.+\\.(webp|avif|svg|woff2|png|jpg|jpeg|ico))",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" },
        { "key": "X-Frame-Options", "value": "DENY" }
      ]
    }
  ]
}
```

Hold off on `Content-Security-Policy` until you've decided on a strategy; add as `Content-Security-Policy-Report-Only` first to see what breaks.

### H2. Add FAQPage schema on 5 pages with visible FAQ blocks

Pages: `/`, `/services/content/`, `/services/advertising/`, `/services/consulting/`, `/pricing/`.

**Caveat:** Google restricted FAQPage rich-result eligibility to government and healthcare sites in Aug 2023. **Frame this as AI/LLM citation work**, not as Google rich snippets. Perplexity, ChatGPT, and AI Overviews still consume FAQPage markup.

Add a `faqSchema()` helper to `i18n/schemas.ts` and pass via `Layout schemas` prop.

### H3. Resize partner logos and service-card thumbs

| File | Current | Target | Saves |
|---|---|---|---|
| `/AgencyLogos/Logo-ChinaWebFoundry-transparent.webp` | 7932 × 2048, 169 KB | 800 px long edge | ~140 KB |
| `/AgencyLogos/BeyondCompass - Transparent - 4K.webp` | 5167 × 1140, 111 KB | 800 px long edge | ~90 KB |
| `/images/services-consulting.webp` | 1024 × 1024, 125 KB | 500 × 500 | ~85 KB |
| `/images/services-content.webp` | 1024 × 1024, 117 KB | 500 × 500 | ~80 KB |
| `/images/services-advertising.webp` | 1024 × 1024, 87 KB | 500 × 500 | ~60 KB |
| `/images/problem-linkedin.webp` | 1024 × 1024, 73 KB | 500 × 500 | ~50 KB |

Also: rename `/AgencyLogos/BBG PNG.webp` and `BeyondCompass - Transparent - 4K.webp` to kebab-case (no spaces). Update references.

### H4. Flip `inlineStylesheets` to `'auto'`

[`astro.config.mjs:30`](../astro.config.mjs#L30) — `inlineStylesheets: 'always'` → `'auto'`.

Saves 25–30 KB per repeat-visited page once CSS is cached. Verify LCP doesn't regress (above-the-fold critical CSS should still inline at this threshold; Astro decides per-page based on size).

### H5. Add visible author byline + date to every insight

Insert author block at the top of each insight: photo of Cyril or LiYan, name, 1-line credibility, published date. Mirror in Article schema `author` + `datePublished` (done in C5).

### H6. Cross-link services ↔ case studies and add Related insights blocks

- `/services/content/` → inline link to `/work/swedish-polymer-brand-aerospace/`.
- `/services/consulting/` → inline link to `/work/chinese-cable-manufacturer-employee-advocacy/`.
- `/services/advertising/` → inline link to `/insights/linkedin-ad-roi-measurement-problem/`.
- Each insight: 3-card "Related insights" block at the end.
- Each case study: 2-card "Related case studies" block at the end.

Hand-curate the related-articles map once in a `relatedMap.ts`; let pages import their list.

### H7. Add SoftwareApplication schema + fix duplicate H1 on `/linkedin-optimizer/`

Two identical H1s render today (sticky header + hero). Demote one to `h2` (likely in `src/components/LinkedInOptimizer.astro`).

Add `SoftwareApplication` schema:
```json
{
  "@type": "SoftwareApplication",
  "name": "LinkedIn Profile Optimizer",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
  "aggregateRating": "... (only if real ratings exist)"
}
```

### H8. Trim two long meta descriptions

- `/insights/why-your-reach-dropped/`: 161 chars → trim to ≤155.
- `/insights/content-to-inbound-leads/`: 168 chars → trim to ≤155.

### H9. Add inline outbound citations to key statistics

Priority targets:
- "Gyanda Sachdeva" quote (`/insights/why-your-reach-dropped/`) → link to LinkedIn Engineering blog post.
- "121% ROAS" (`/services/advertising/` and `/insights/...measurement-problem/`) → link to LinkedIn source.
- "14.6% vs 1.7%" (`/insights/content-to-inbound-leads/`) → link to source study.
- Refine Labs / Dreamdata / Chris Walker references → link to original.
- `/services/consulting/` stat cluster (8×, 10×, 92%, 4.3×, 82%, 64%, 68%, 24×) → cite each.

---

## 🟡 MEDIUM — within 1 month

### M1. Fix hero image `width`/`height` attribute mismatch
Declared 1920×1080, actual 1408×768. Update `<img>` attributes (or the preload `imagesrcset` if used) to actual dimensions.

### M2. Add AVIF variants via `<picture>` element
For top-traffic photographic images. Expected savings 20–30% vs WebP.

### M3. Add `srcset` + `sizes` to card thumbs and case images
Mobile saves ~40% on those images.

### M4. Trim `/pricing/` FAQ block 16 → 6 questions
Currently 16 Q&As risk Google reading the page as partly informational, not commercial. Spin overflow to `/pricing/faq/` or fold into `/insights/`. Saves ~5 KB + sharper commercial-intent signal.

### M5. Restructure P11 in `/insights/content-to-inbound-leads/`
The one paragraph on the site that genuinely needs restructuring — 130 words containing 4 nested rule-of-three lists. Convert to a `<dl>` or four `<h3>`-led sections.

### M6. Drop `| Nuvora Studio` brand suffix from non-EN insight titles
Currently 91–96 chars on FR/ES samples — SERP truncation risk on desktop.

### M7. Localize ZH slugs (or document why English slugs are kept)
Add `zhSlugMap` to `i18n/index.ts` matching the pattern of `esSlugMap`/`deSlugMap`/`frSlugMap`. Or write a 2-line note in `Translation.md` justifying English slugs for ZH (acceptable — many sites do).

### M8. Add `width`/`height` to `AgencyLogos/*` images
5 partner logos currently missing dims on `/work/` and case studies → CLS risk on the logo strip.

### M9. Add one mid-article soft CTA per insight
Insights only fire CTA after 8-10 minutes of reading.

### M10. Add 200–300 words to each case study
Current 441–521 words is short for a flagship case study. Add: the audit moment, one tactical detail, one quote from the client (or written placeholder if not yet collected).

### M11. Run PageSpeed Insights with an API key for field data
Lab estimates are good but Google's CrUX field data should replace them. Use `scripts/google_auth.py` to set up credentials. Re-run audit afterward for the seo-google agent's real-data pass.

---

## 🟢 LOW / Backlog

### L1. Reduce woff2 weight variants from 14 → ~4
Most pages need 3–4 weights. Audit usage and drop unused variants.

### L2. Consolidate responsive breakpoints
12+ distinct breakpoints in inline CSS (1600/1536/1440/1280/1040/1024/860/768/680/660/640/580/540/520 px). Trim to 4 tiers.

### L3. SVG flag sprite
Each flag SVG (cn/de/es/fr) is used 8× per page. Replace with one sprite + `<use>`.

### L4. Inline the external `<script>` on `/linkedin-optimizer/` if small enough
Currently the only external script in the audited surface.

### L5. Add `includeSubDomains; preload` to HSTS header
After ensuring all subdomains are HTTPS-only. Then submit to the HSTS preload list.

### L6. Run image optimization on every upload
Add a build-time step (e.g. Astro Image integration, sharp, or squoosh-cli) so 10,000-px images can't be committed again.

### L7. Add `seo-drift` baseline
Capture a baseline snapshot after the canonical/host fix lands so future regressions are caught: `python scripts/drift_baseline.py https://www.nuvora.studio/`.

---

## Implementation roadmap (suggested sequencing)

### Week 1 — Critical fixes (single PR or two small PRs)
1. **PR-1 — Canonical/host/slash unification** (C1, C2, C3) — 1 dev day. Touches `astro.config.mjs`, `Layout.astro`, `schemas.ts`, `vercel.json`. Verify hreflang on 4 pages post-deploy.
2. **PR-2 — Image fixes + cache headers** (C4, H1, H3) — 0.5 dev day. Resize one image + edit vercel.json headers + resize partner logos.
3. **PR-3 — Article schema rollout** (C5) — 1 dev day. Helper in `schemas.ts` + per-page wiring.

### Week 2 — High-impact polish
4. **PR-4 — FAQPage + SoftwareApplication schema, fix duplicate H1, trim meta descriptions** (H2, H7, H8) — 0.5 day.
5. **PR-5 — Visible author byline + cross-links + related-articles blocks** (H5, H6) — 1.5 days.
6. **PR-6 — Inline citations on top 5 statistical claims** (H9) — 0.5 day.

### Week 3-4 — Performance + UX deepening
7. CSS inline → auto (H4), AVIF generation (M2), srcset (M3), AVIF hero (M1).
8. Pricing FAQ trim (M4), P11 restructure (M5), title-suffix drop on non-EN insights (M6).
9. Run PSI with API key (M11); re-score CWV against field data.

### Backlog
- ZH slug localization (M7), woff2 cleanup (L1), breakpoint consolidation (L2), HSTS preload (L5), image build-time optimization (L6).

---

## Expected score after Week 1 critical fixes

| Category | Before | After Week 1 |
|---|---:|---:|
| Technical SEO | 60 | 85 |
| Schema | 45 | 82 |
| Performance | 80 | 85 |
| Images | 50 | 70 |
| AI Search Readiness (GEO) | 64 | 88 |
| **Overall** | **72** | **~84** |

The site reaches "above industry average" in two weeks of focused work, almost entirely without touching body copy. The writing is already where it needs to be.
