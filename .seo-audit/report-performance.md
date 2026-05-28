# Nuvora Studio — Performance / Image / SXO Audit

Target: https://www.nuvora.studio
Date: 2026-05-27
Method: curl against production Vercel edge (sfo1, X-Vercel-Cache HIT), regex/Python parsing of HTML, HEAD on every image, raw WebP header parsing for dimensions.

## 1. Per-page payload table

| Page | URL | HTML bytes | Inline CSS | Inline JS (blocks) | Imgs | Imgs lazy | w/ dims | Ext scripts | Preload | TTFB | Total |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Home | `/` | 124,195 | 50,688 (40.8%) | 2,350 (4) | 25 | 22 | 19 | 0 | 3 | 0.45 s | 0.78 s |
| Services | `/services/` | 76,883 | 39,517 (51.4%) | 2,361 (3) | 19 | 17 | 13 | 0 | 2 | 0.50 s | 0.73 s |
| Pricing | `/pricing/` | 131,149 | 51,466 (39.2%) | 2,617 (4) | 16 | 14 | 10 | 0 | 2 | 0.73 s | 1.06 s |
| Work | `/work/` | 112,117 | 44,119 (39.4%) | 2,830 (4) | 17 | 15 | 10 | 0 | 2 | 0.50 s | 0.80 s |
| Insight `why-reach-dropped` | `/insights/why-your-reach-dropped/` | 69,417 | 33,237 (47.9%) | 2,513 (3) | 16 | 14 | 10 | 0 | 2 | 0.51 s | 0.72 s |
| LinkedIn Optimizer | `/linkedin-optimizer/` | 83,515 | 47,084 (56.4%) | 2,391 (3) | 17 | 14 | 10 | **1** | 2 | 0.52 s | 0.76 s |
| Case study `/work/swedish-polymer-brand-aerospace/` | — | 57,413 | 32,344 (56.3%) | 2,524 (3) | 16 | 14 | 10 | 0 | 2 | — | 0.68 s |

Observations:
- CSS inlined into every page (root cause: `astro.config.mjs` line 30 `inlineStylesheets: 'always'`). 32–51 KB shipped per page with no cross-page reuse.
- Estimated ~30 KB per page is duplicate CSS (nav/footer/typography) that should be in a shared external stylesheet.
- HTML body content itself is well-sized (Insight 33 KB, Services 35 KB).
- Zero external CSS, zero framework runtime. Total executable JS is ~1.25 KB across 3 vanilla scripts. Excellent JS hygiene.
- Cold first-hit recorded 3.4 s TTFB / 4.86 s total once (TCP 0.9 s + TLS 1.55 s + server 0.95 s); steady-state 0.5 s thereafter. Normal first-connection cost.
- Orchestrator's "/generate/ slow" finding was transient — on 3 retries: 0.65 s consistent. **No action needed for `/generate/`.**

## 2. Core Web Vitals — lab estimate

PageSpeed Insights API returned **HTTP 429 (quota exceeded for keyless tier)** — no field data this session. Lab estimate on 4G mobile, mid-tier device:

| Metric | Home | Pricing | Insight |
|---|---|---|---|
| TTFB | 0.45–0.50 s | 0.70–0.75 s | 0.50 s |
| FCP | 1.2–1.5 s | 1.5–1.8 s | 1.0–1.3 s |
| LCP | 1.8–2.4 s (hero img, preloaded) | 2.0–2.6 s (text H1) | 1.4–1.8 s (text H1) |
| INP | <100 ms | <100 ms | <100 ms |
| CLS | 0.0–0.05 (some risk from logos w/o dims) | 0.0–0.05 | 0.0–0.05 |

**Weighted verdict: PASS / Borderline.** INP excellent (almost no JS). LCP fine because hero image is only 62 KB and preloaded with `fetchpriority="high"`. Pricing TTFB (0.73 s) is the upper-end outlier.

## 3. Image audit

23 unique image URLs across audited surface. **Total: 1,639,512 bytes (1.6 MB).**

Top byte offenders (HEAD-confirmed) — all `image/webp`, all served with `Cache-Control: public, max-age=0, must-revalidate`:

| Severity | Bytes | Actual pixels | URL | Notes |
|---|---:|---|---|---|
| **CRITICAL** | **658,590** | **1920 × 10,439** | `/images/Cyril-Drouin-LinkedIn-03-29-2026_09_55_AM.webp` | A 10,000-px-tall full LinkedIn screenshot rendered at ~280 px wide on `/work/`. |
| HIGH | 169,068 | 7932 × 2048 | `/AgencyLogos/Logo-ChinaWebFoundry-transparent.webp` | Partner logo at 7932 px wide. |
| HIGH | 125,050 | 1024 × 1024 | `/images/services-consulting.webp` | Homepage card thumb ~200 px wide. |
| HIGH | 117,116 | 1024 × 1024 | `/images/services-content.webp` | Same. |
| HIGH | 110,716 | 5167 × 1140 | `/AgencyLogos/BeyondCompass - Transparent - 4K.webp` | Partner logo. |
| MEDIUM | 87,010 | 1024 × 1024 | `/images/services-advertising.webp` | Card thumb. |
| MEDIUM | 72,684 | 1024 × 1024 | `/images/problem-linkedin.webp` | |
| LOW | 61,768 | 1408 × 768 | `/images/hero-notification.webp` | Homepage LCP — preloaded, `fetchpriority="high"`. Width/height attr declared 1920×1080 but actual is 1408×768 (tiny CLS risk). |
| LOW | 56,314 | 1024 × 1024 | `/images/global-connections.webp` | |
| LOW | 33,032 | 1448 × 563 | `/AgencyLogos/BBG PNG.webp` | URL has spaces. |
| INFO | 5,296 | 220 × 85 | `/images/nuvora-logo.webp` | Correctly sized. |
| INFO | 159–705 | — | `/flags/{cn,de,es,fr}.svg` | Used 8× each; consider SVG sprite. |

Issues:
- **CRITICAL:** the 658 KB headshot is a 10,439-pixel-tall image. 5-minute fix saves ~550 KB.
- **HIGH:** 5 `AgencyLogos/*.webp` referenced from `/work/` and case-study pages have **no `width`/`height` attributes** — CLS risk on the partner-logo strip.
- **MEDIUM:** No AVIF variants — only WebP. AVIF would save 20–30% more on photographic content.
- **MEDIUM:** No `srcset`/`sizes` anywhere — mobile gets full-size 1024-px sources for ~200-px card thumbs.
- **HIGH (cross-cutting):** ALL static assets (webp, svg, woff2, png) come back with `Cache-Control: public, max-age=0, must-revalidate`. Every repeat visit issues conditional GETs. **No `vercel.json` headers config exists** (verified — `vercel.json` only sets framework/build).
- 16 of 25 homepage `<img>` tags have `alt=""` (declared decorative). Service-card thumbs are debatable — they convey "consulting/content/ads" semantics that could feed GEO.

LCP candidates per URL: Home = `/images/hero-notification.webp` (62 KB, preloaded ✓). All other audited pages have a **text H1 as LCP** → fast.

## 4. Above-the-fold rendering (homepage `<head>`)

- Viewport meta ✓, description ✓, full OG/Twitter ✓, 4 hreflang + x-default ✓.
- **3 preloads:** `inter-latin.woff2`, `poppins-600-latin.woff2`, `hero-notification.webp` (`as=image`, `fetchpriority="high"`) — excellent.
- **0 preconnect** — fine, same-origin.
- **0 external CSS/JS in head** — only the 50 KB inline `<style>`.
- JSON-LD: Organization + WebSite graph w/ `parentOrganization: Beyond Border Group`, `sameAs: LinkedIn` ✓.

Font strategy: self-hosted woff2, 14 `@font-face` declarations, all with `font-display: swap`, unicode-range split into latin/latin-ext. 2 of 14 weight variants preloaded. Inter latin = 48,256 B, Poppins 600 latin = 8,000 B. **Excellent setup**; only flaw is fonts inherit the same `max-age=0` cache header.

Hero image attribute mismatch: declared `width="1920" height="1080"` but file is **1408×768**. Aspect ratio 1.778 declared vs 1.833 actual → minor CLS on layout. Fix.

## 5. SXO findings

**"B2B LinkedIn agency" intent (homepage):** Page type correct (transactional). Title `LinkedIn Agency for B2B | Nuvora Studio` ✓. Meta description ✓. **H1 = "We turn LinkedIn into your top sales channel."** — value-oriented, not category-anchored. Someone searching "B2B LinkedIn agency" expects a direct category confirmation. Consider `"The LinkedIn-only agency for B2B teams"` as H1, current line as subhead.

**"LinkedIn reach dropped 2026" intent (`/insights/why-your-reach-dropped/`):** Strong fit. Title `Why your LinkedIn reach dropped 50% in 2026` ✓. H1 has counter-intuitive hook ✓. First paragraph names a specific entity ("360Brew") — great GEO/AI-Overviews bait. Two weaknesses: **byline is "By Nuvora Studio" not a named author** (weakens E-E-A-T for an algorithm deep-dive), and **no visible date/last-updated** in the body copy.

**Heading concatenation bug (MEDIUM for SXO):** Three H1s have missing whitespace between styled spans:
- `Why your reach dropped 50%+in 2026(and no, it isn't your content)` (no space before `in`, before `(`)
- `The work speaks.So do the numbers.` (no space after `.`)
- `A Swedish polymer brand became the name aerospace buyers searched for.Their LinkedIn page was the bottleneck.` (same)

Looks like a `<span>` joiner that lost whitespace. Bad for SERP snippets and AI-Overview citations.

**Duplicate H1 on `/linkedin-optimizer/`:** Two identical H1s ("LinkedIn profile optimizer"). Likely a sticky-header + hero copy-paste leftover. Demote one to h2.

**Pricing page bloat investigation:** 51 KB inline CSS + 75 KB body. Body contains 10 sections, 26 comparison-table `<tr>` rows, **16 FAQ questions**. The pricing table is legitimate; the 16-question FAQ is the discretionary chunk. Trim to ~6 high-intent questions; move overflow to `/pricing/faq/`. ~5 KB body savings + sharper commercial-intent signal (16 Q&As risk Google reading the page as partly informational).

No major intent mismatches across the audited surface — every page is on the right type for its query.

## 6. Mobile-friendliness

- Viewport meta ✓ on every audited page.
- 28 `@media` queries in homepage inline CSS — responsive ruleset present.
- 12+ distinct breakpoints (1600/1536/1440/1280/1040/1024/860/768/680/660/640/580/540/520 px) — works, but inconsistent; consolidating to 4 tiers would shrink CSS.
- Mobile burger nav + dropdown is wired in inline script #2 with correct ARIA (`aria-expanded`, `aria-hidden`).

## 7. JS/CSS hygiene — 4 inline scripts on homepage

1. **1,101 B** — JSON-LD Organization + WebSite schema. No execution cost.
2. **747 B** — Mobile burger nav + dropdown toggle (vanilla, ARIA correct).
3. **259 B** — FAQ accordion (`aria-expanded`/`hidden` toggle).
4. **243 B** — IntersectionObserver adding `.is-visible` to `.reveal` elements on scroll.

**Total executable JS: ~1.25 KB.** Zero framework, zero hydration, zero third-party tags. INP will be effectively zero. One external `<script src>` only on `/linkedin-optimizer/` (probably the form/tool handler — worth inlining if small).

CSS: 137 design-token CSS variables, 0 comments (already minified), 14 `@font-face`. The `inlineStylesheets: 'always'` config is the single most expensive perf decision on the site — flipping to `'auto'` would save 20–30 KB per repeat-visited page by enabling cross-page CSS caching.

## 8. Top 10 improvements, ranked

| # | Sev | Action | Saving | Effort |
|--:|---|---|---|---|
| 1 | CRITICAL | Resize `Cyril-Drouin-LinkedIn-…webp` from 1920×10,439 → 560×3045 (2× display) and re-encode at q=80 | **–550 KB** on `/work/` | 5 min |
| 2 | HIGH | Add `vercel.json` `headers` rule: `Cache-Control: public, max-age=31536000, immutable` for `*.webp|svg|woff2|png` | ~150 ms per repeat visit + far fewer 304s | 10 min |
| 3 | HIGH | Resize all `/AgencyLogos/*.webp` to ≤ 800 px on long edge (currently up to 7932 px) | **–400 KB** across `/work/` + cases | 30 min |
| 4 | HIGH | Resize homepage service-card thumbs (`services-{consulting,content,advertising}.webp`, `problem-linkedin.webp`) from 1024 → 500 px | **–230 KB** on home card grid | 30 min |
| 5 | HIGH | Flip `inlineStylesheets: 'always'` → `'auto'` in `astro.config.mjs` | **–25–30 KB per repeat-visited page** | 5 min + test |
| 6 | MEDIUM | Generate AVIF variants and serve via `<picture>` | +20–30% on photographic images | 1–2 h |
| 7 | MEDIUM | Add `srcset`/`sizes` to card thumbs and case images | Mobile saves ~40% on those imgs | 1 h |
| 8 | MEDIUM | Trim Pricing FAQ 16 → 6, spin overflow to `/pricing/faq/` | ~5 KB + sharper commercial intent | 15 min |
| 9 | MEDIUM | Fix duplicate H1 on `/linkedin-optimizer/` (one → h2) | Cleaner SEO heading hierarchy | 5 min |
| 10 | MEDIUM | Fix concatenation bug in styled H1s (`dropped50%+in2026`, `speaks.So`, `for.Their`) — add whitespace between span fragments | Cleaner SERP snippets, AI-Overview citability | 10 min |

Bonus: named author + visible date on the insight article (E-E-A-T); correct hero img `width`/`height` to match actual 1408×768; rename `AgencyLogos` URLs to kebab-case (no spaces); SVG flag sprite; reduce 14 woff2 weight variants to 4.
