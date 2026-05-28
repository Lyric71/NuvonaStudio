# Nuvora Studio — Content / E-E-A-T / GEO Audit

Target: https://www.nuvora.studio
Date: 2026-05-27
Sample: 15 EN pages + 1 FR insight + 1 ES insight (~17,000 words of body copy reviewed).

## Headline scores
- Writing quality: **88/100**
- E-E-A-T (site-wide weighted): **7.6/10**
- GEO / AI search readiness: **64/100**

## Site-wide critical findings

- **No Article schema on any insight** (4/4 sampled) or case study (2/2 sampled). Just Organization + WebSite + Breadcrumb.
- **No FAQPage schema** on 5 pages with visible FAQ blocks: `/`, `/services/content/`, `/services/advertising/`, `/services/consulting/`, `/pricing/`.
- **Canonical / sitemap trailing-slash mismatch on every internal page** — sitemap uses `https://nuvora.studio/about/` (trailing slash), canonical tag declares `https://nuvora.studio/about` (no slash). Both return HTTP 200.
- **No author Person reference on insights** — `/about/` correctly has Person schema for Cyril Drouin and LiYan Ye, but no insight links its author to either Person `@id`.
- **No datePublished in JSON-LD** despite dates being visible in body text ("29 March 2026").
- **No SoftwareApplication schema on /linkedin-optimizer/** (a free interactive tool that deserves it).
- **Duplicate H1 on /linkedin-optimizer/** (count: 2).

## Per-page findings (15 EN + 1 FR + 1 ES)

### / (Homepage) — E-E-A-T 8.0 / GEO 70
- Title 39 chars OK. Desc 144 chars OK. Canonical `/` (matches sitemap).
- 1,485 words main; H1×1, H2×9, H3×13.
- LEDE quotable: "Strategy, content, and ads. All on LinkedIn. We work with B2B teams that want pipeline, not vanity numbers."
- 61 internal links — mostly nav/footer, only ~6 contextual inline.
- Strong CTA stack (book call + explore services + final CTA).
- FAQ block present, no FAQPage schema — HIGH miss.
- HUMANIZER: 8 rule-of-three instances but all read as brand shorthand, not filler.

### /services/ — E-E-A-T 7.0 / GEO 50
- Thin hub page (502 words main). H1×1, H2×6, H3×0.
- Reads as routing table; low informational density.
- Service schema present on subpages (good).

### /services/content/ — E-E-A-T 7.5 / GEO 65
- 1,611 words. Title 58 chars OK.
- Service + BusinessAudience + Place schema present.
- No inline links to /work/swedish-polymer-brand-aerospace/ (its proof) — MEDIUM miss.
- Rule-of-three density highest on site (17) but mostly factual lists.
- FAQ block, no schema.

### /services/advertising/ — E-E-A-T 7.5 / GEO 68
- 1,796 words. Strong LinkedIn-ad-format taxonomy in H3s.
- "121% ROAS" cited but not linked to LinkedIn source.
- No inline link to /insights/linkedin-ad-roi-measurement-problem/ — should be there.
- FAQ block, no schema.

### /services/consulting/ — E-E-A-T 7.0 / GEO 60
- 1,136 words.
- Eight industry statistics dropped without inline source (8×, 10×, 92%, 4.3×, 82%, 64%, 68%, 24×). Each loses authority points.
- No inline link to /work/chinese-cable-manufacturer-employee-advocacy/ (the proof) — MEDIUM miss.

### /pricing/ — E-E-A-T 8.0 / GEO 65
- 1,296 words.
- Transparent dollar pricing ($1,800/$3,500/$6,000) — major trust signal.
- Desc 158 chars (TIGHT).
- 7 em dashes — all legitimate (used as "not included" in feature table).
- FAQ block, no schema.

### /about/ — E-E-A-T 9.5 / GEO 80
- 1,039 words.
- Excellent schema: AboutPage + 2× Person with `jobTitle`, `worksFor`, `knowsAbout`, `alumniOf` (Publicis Commerce China), `sameAs` (linkedin.com/in/cyrildrouin/).
- Concrete credentials: $35M revenue, 250-person team, eCommerce Agency of the Year Greater China Gold 2022, clients Apple/L'Oréal/Nike/Nestlé/Heineken/Kering, triple-certified LinkedIn Marketing Labs (Strategy + Advertising + Content & Creative).
- Best E-E-A-T page on the site.

### /contact/ — E-E-A-T 7.5 / GEO 45 (appropriate for the page type)
- 346 words; H1×1, H2×2.
- Real lead form; strong human-response promise.
- Two tailing-negation patterns ("No auto-reply, no queue", "No pitch deck") — deliberate voice, acceptable.

### /linkedin-optimizer/ — E-E-A-T 7.0 / GEO 55
- 356 words. Duplicate H1 (H1×2) — MEDIUM fix.
- No SoftwareApplication / WebApplication schema — MEDIUM miss.
- Methodology of "100+ best-practice checks" not disclosed on-page; lowers tool credibility for AI search.

### /insights/why-your-reach-dropped/ — E-E-A-T 7.5 / GEO 60
- 1,659 words; 40 paragraphs; H1×1, H2×10.
- Desc 161 chars — TOO LONG, trim by 5.
- Names Gyanda Sachdeva (LinkedIn VP Product), Lempod, 360Brew, specific dates ("February 2026"). Strong experience signals.
- Zero outbound citation links. Sachdeva quote needs source URL.
- "Analysis of over three million posts found saves carry 5x the reach impact of likes" — uncited.

### /insights/content-to-inbound-leads/ — E-E-A-T 7.0 / GEO 60
- 1,259 words. Desc 168 chars — TOO LONG, trim by 10.
- Lede number "14.6% vs 1.7%" uncited — high-priority citation gap.
- **P11 is the one paragraph on the site that genuinely needs restructuring** — 130 words containing four nested rule-of-three lists inside a single block. See HUMANIZER section below.

### /insights/the-real-linkedin-problem/ — E-E-A-T 7.5 / GEO 65
- 779 words; pure opinion essay.
- Strongest authorial voice on the site ("Open any B2B LinkedIn feed on a Monday. Award photos nobody outside HR will ever click...").
- Zero AI-tells detected by heuristics.
- LLM-extractable quotables: "AI can polish your sentences. It can't tell you what to say." / "The most invisible posts on LinkedIn are the safest ones."

### /insights/linkedin-ad-roi-measurement-problem/ — E-E-A-T 7.5 / GEO 62
- 1,423 words; 33 paragraphs.
- Names Dreamdata, Chris Walker, Refine Labs — highest-authority external references on the site, but none are linked.
- "272 days B2B deal close" stat is highly citable by LLMs.
- "One hundred and twenty-one." (P2 spelling out 121% for emphasis) — excellent rhetorical writing.

### /work/swedish-polymer-brand-aerospace/ — E-E-A-T 8.5 / GEO 65
- 441 words — SHORT for a case study, could carry 200-300 more words.
- Specific numbers (340→1,900 followers; 3.2% engagement; 61 leads at $58 CPL; 14,000 reached).
- Authenticity moment: "Cost per lead was higher than we'd initially projected (we'd estimated mid-$40s), but the lead quality was strong enough that the client didn't push back."
- No schema; no inline link to /services/ pages.

### /work/chinese-cable-manufacturer-employee-advocacy/ — E-E-A-T 8.5 / GEO 65
- 521 words.
- Vivid anecdote: "A field engineer in Nigeria shared a photo of a cable installation at a power substation… One post. One photo. One lead."
- Authenticity moment: "Advocacy participation hit 58% in the first month. Solid, not spectacular. We'd hoped for higher, honestly."
- No schema; no inline link to /services/consulting/.

### FR `/fr/publications/votre-publication-linkedin-est-deja-morte/` — Parity 9.5/10
- Title 91 chars including brand suffix — SERP truncation risk on desktop.
- 898 words. Genuine native French — idiomatic phrasing ("Le fil croule sous le contenu généré par IA", "C'est la mécanique réelle du fil LinkedIn en 2025", "un boost de 500 $ sur une publication qui a déjà bien tourné en organique").
- Vouvoiement used consistently for the B2B prospect.
- Same Article-schema gap as English.

### ES `/es/blog/cambio-algoritmo-cuentas-pequenas-vs-grandes/` — Parity 10/10
- Title 96 chars including brand — SERP truncation risk.
- 2,044 words — longest of all samples; substantive, not translated.
- **Neutral-pronoun rule compliance: PASS.** 0 vosotros / 0 vosotras / 0 ustedes-as-pronoun. tú-form used for prospect throughout.
- All four interrogative sentences pronoun-free: "¿Esas personas dejan de hacer scroll? ¿Leen entero? ¿Dejan un comentario real? ¿La guardan para más tarde?"
- Native idiom "ha dado la vuelta a la tortilla" — perfect register.
- Numbers correctly localized (50.000 not 50,000).

## E-E-A-T table (site-wide weighted avg = 7.6/10)

| Page | Exp | Expert | Auth | Trust | Overall |
|---|---|---|---|---|---|
| / | 9 | 8 | 6 | 9 | 8.0 |
| /services/ | 7 | 8 | 6 | 7 | 7.0 |
| /services/content/ | 8 | 8 | 6 | 8 | 7.5 |
| /services/advertising/ | 8 | 9 | 6 | 7 | 7.5 |
| /services/consulting/ | 8 | 8 | 5 | 7 | 7.0 |
| /pricing/ | 8 | 7 | 7 | 10 | 8.0 |
| /about/ | 10 | 10 | 9 | 9 | 9.5 |
| /contact/ | 7 | 7 | 6 | 10 | 7.5 |
| /linkedin-optimizer/ | 7 | 8 | 6 | 7 | 7.0 |
| ins-reach | 9 | 9 | 6 | 6 | 7.5 |
| ins-leads | 9 | 8 | 5 | 6 | 7.0 |
| ins-real | 9 | 9 | 5 | 7 | 7.5 |
| ins-roi | 9 | 9 | 7 | 5 | 7.5 |
| work-polymer | 10 | 9 | 6 | 9 | 8.5 |
| work-cable | 10 | 9 | 6 | 9 | 8.5 |
| FR insight | 9 | 9 | 6 | 6 | 7.5 |
| ES insight | 9 | 9 | 6 | 6 | 7.5 |

## GEO score 64/100 — breakdown
- llms.txt declared and well-structured: 10/10
- robots.txt allows AI crawlers: 4/5 (GPTBot, Claude-Web, PerplexityBot, Google-Extended all Allow)
- Article schema on long-form: 0/15 (CRITICAL gap)
- Author byline schema: 2/10
- datePublished/dateModified in JSON-LD: 0/5
- FAQPage schema where FAQs visible: 0/10 (CRITICAL gap)
- Inline citations on stat claims: 4/10
- First-paragraph extractability: 9/10
- Lists / extractable definitions: 7/10
- Brand mentions in answer engines: 3/5
- Multilingual depth: 9/10

If items #1, #2, #4, #5 of the Top 10 ship, expected GEO score 88-92/100.

## Top 10 improvements (ranked by impact)

1. **CRITICAL** — Add Article/BlogPosting JSON-LD to every insight and case study with `author` (refer to existing Cyril Drouin Person `@id`), `datePublished`, `dateModified`, `publisher`, `image`, `articleSection`, `wordCount`, `inLanguage`, `mainEntityOfPage`. Effort: 1 day. Impact: +15-25% organic clicks + AI citation lift.
2. **CRITICAL** — Add FAQPage schema to /, /services/content/, /services/advertising/, /services/consulting/, /pricing/. Effort: 2 hours. Direct path to FAQ rich results and AI Overviews answer box. (Note: FAQPage rich-result eligibility is restricted on commercial sites since Aug 2023; pursue for AI/LLM citation, not Google rich snippets.)
3. **HIGH** — Fix canonical/sitemap slash mismatch. Either 301 to trailing-slash and update canonicals, OR update sitemap to no-slash. Pick one. Effort: 30 min.
4. **HIGH** — Add visible author byline (Cyril or LiYan) + photo + 2-line credibility to every insight. Mirror in Article schema author field. Effort: 1 day.
5. **HIGH** — Add inline outbound citations to statistical claims. Priority targets: Gyanda Sachdeva quote (ins-reach), 121% ROAS figure (ins-roi), 14.6% vs 1.7% conversion (ins-leads), Refine Labs / Dreamdata references (ins-roi), 8×/92%/82% etc. on /services/consulting/. Effort: 4 hours.
6. **HIGH** — Add "Related insights" block on every insight + case study (currently zero). Hand-curate the related map for ~45 pages. Effort: 1 day.
7. **MEDIUM** — Cross-link case studies ↔ services. /services/content/ should link inline to /work/swedish-polymer-brand-aerospace/. /services/consulting/ should link to /work/chinese-cable-manufacturer-employee-advocacy/. Both case studies should link back. Effort: 2 hours.
8. **MEDIUM** — Trim 2 meta descriptions over 160 chars: `/insights/why-your-reach-dropped/` (161, trim by 5) and `/insights/content-to-inbound-leads/` (168, trim by 10). Effort: 10 min.
9. **MEDIUM** — Add SoftwareApplication schema + fix duplicate H1 on /linkedin-optimizer/. Effort: 1 hour.
10. **MEDIUM** — Restructure P11 in /insights/content-to-inbound-leads/ (the four-part lead-gen-system block) into a real list with one H3 or `<dt>` per item. Effort: 30 min.

## HUMANIZER red-flag sentences

The user has clearly already applied HUMANIZER. Across 17 pages and ~17,000 words of body copy, only these are borderline:

1. **/services/content/** — "We use AI to move faster without cutting corners. AI accelerates research, drafting, multilingual production, visuals, and video editing. Our editorial team reviews everything. You approve everything. The result: more content, produced faster, at a lower cost per piece. Quality holds, because humans make the final call." → Rule-of-three + "The result:" colon. Tutorial-script cadence.
2. **/services/content/** — "Every brand sounds different. We learn how your team talks, what your market actually cares about, and who you're trying to reach." → Tidy rule-of-three. Borderline.
3. **/insights/content-to-inbound-leads/ P11** — The single paragraph on the site that genuinely needs restructuring. 130 words containing four nested rule-of-three lists in one block. Convert to a `<dl>` or four H3-led sections.

Everything else passes. No em-dash misuse. No "stands as / serves as". No "tapestry / pivotal / leverage" abuse. No "let's dive in" signposting. The voice is consistent and human across the site.

## Localization parity

- **French**: native translation verified, vouvoiement consistent, idiomatic phrasing. Title 91 chars (truncation risk).
- **Spanish**: native translation, fully complies with project memory neutral-pronoun rule (zero vosotros, zero ustedes, tú for prospect, all interrogatives pronoun-free). Native idioms ("ha dado la vuelta a la tortilla"). Title 96 chars (truncation risk).
- **Recommend**: drop `| Nuvora Studio` brand suffix from non-EN insight titles, OR shorten head titles by ~15 chars.

## Conversion observations

- Insights only fire CTA at end (after 8-10 minute read). Add one mid-article soft CTA per insight.
- Case studies do not include "Could we do this for you?" mid-page nudge.
- Hand-off from outcome → next step is brisk; add a softer second touchpoint.

## Closing assessment

The English copy is genuinely better than ~95% of B2B agency content. Voice is consistent, founder credentials are real and visible, case studies confess small failures (CPL came in higher than estimated; advocacy participation was "solid, not spectacular"), pricing is on-page in actual dollars.

What is holding the site back is structured data, not writing. One sprint on Article + Person + FAQPage schema closes most of the AI-readiness gap without touching a word of body copy.
