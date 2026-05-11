---
name: native-translation
description: Translate or localize content so it reads as if originally written by a native journalist in the target language, not translated from English. Use whenever editing, drafting, or translating non-English copy (page content, headlines, blog posts, marketing material, button labels, anything user-visible) and whenever working in non-English locale files or pages.
---

# Native translation

Translate so the result reads as if a native journalist wrote it from scratch in the target language. Never deliver a translation that reads as translated. Never regenerate a locale page from the English source.

---

## 1. Core principles

### 1.1 Native, not literal
- Write as a native speaker would naturally express the idea in the target language.
- Adapt idioms, expressions, and cultural references so they feel local.
- Prioritize natural flow, tone, and readability over word-for-word fidelity to the source.
- Match the register (formal, casual, professional) appropriate to the target audience.
- Use locale-specific conventions: date formats, currency, units, punctuation, quotation marks.

### 1.2 Improve, never retranslate
- Start from the current version of the target-language page or string, not from the English source.
- Treat the existing translation as the baseline. Preserve what already works.
- Only modify sections that are awkward, outdated, inaccurate, or missing.
- Never regenerate a full page from English. This destroys prior editorial work and reintroduces translated-sounding copy.
- If the English source has new content that is missing in the target, port only the missing parts and translate them natively; leave the rest untouched.

### 1.3 Single-locale default
- When the user requests a copy change, edit only the file(s) they referenced or are looking at.
- Do not propagate the same change to other locale variants until the user explicitly says so ("translate this", "do all locales", "propagate to FR/DE/ES/ZH", etc.).
- When editing an English version of a multi-locale page, end with a one-line offer: "Want me to propagate this to the other locales?" Never propagate without explicit acceptance.

---

## 2. The two-step translation process

For every piece of content being translated *from English into another language*, run both steps. Show the user only the final output; never expose the intermediate step.

### Step 1: Humanized translation
- Translate from the English source into a first draft.
- Target the native journalistic register of the language. Examples:
  - **French:** Le Monde / Les Echos register, not literal Anglo-French.
  - **Spanish:** El País register.
  - **Chinese:** 财经 / 36氪 register, not English-syntax 中式英文.
  - **German:** FAZ / Handelsblatt register.
  - **Italian:** Il Sole 24 Ore / Corriere della Sera register.
  - **Portuguese:** Expresso / Folha de S.Paulo register.
- Apply the humanizer principles (see section 4) inside the translation.

### Step 2: Native rewrite (mandatory)
- Treat step 1's output as a draft that is *not native enough* and *too familiar / too low level*. This step is not optional, even when step 1 looks fine.
- Rewrite everything as a native journalist would. Do **not** look back at the English source while doing this. Work only from the target-language draft and improve it in-language.
- Goal is full rewrite, not correction. Restructure sentences, switch idioms, swap weak verbs for strong native ones, drop English-shaped clauses, use the target language's natural rhythm and connectors.
- Accents and diacritics are mandatory wherever the language requires them.

---

## 3. Workflow when editing an existing locale page

1. Open the existing target-language page first. Read it in full before doing anything else.
2. Compare against the English source only to identify gaps or outdated sections.
3. For each section:
   - Reads naturally and is accurate → leave it.
   - Awkward or machine-translated → rewrite in native style.
   - Missing → translate the corresponding English section using the two-step process.
4. Preserve existing terminology choices unless they are clearly wrong. Consistency matters more than personal preference.
5. Keep the page structure (headings, anchors, IDs, frontmatter, metadata) intact unless explicitly asked to change it.

---

## 4. Humanizer principles (apply during the translation)

The translated copy must read as human, not machine. Avoid the patterns that flag AI-written text in any language.

**Forbidden AI tells:**
- Em dashes used as separators.
- Balanced triads everywhere ("X, Y, and Z" pattern repeated).
- "It's not X, it's Y" formulations.
- Abstract noun stacks.
- Listicle rhythm where every paragraph has the same shape.
- Excessive hedging ("might", "perhaps", "could be considered").
- Generic openers ("In today's fast-paced world…").

**Acceptable subtle imperfections that read human:**
- Occasional sentence fragment.
- A comma where a writer might have used a period.
- Mild redundancy or an idiomatic doubling.
- Colloquial contractions (where the language allows).
- Slight tonal unevenness between paragraphs.
- One-word sentences for emphasis.

**Never acceptable:**
- Typos in proper nouns.
- Factual mistakes.
- Broken links, wrong dates, wrong numbers.
- Broken syntax that hurts reading.

---

## 5. Language-specific conventions

### 5.1 No em dashes — ever
Never use the em dash character `—` (U+2014) in any user-visible content, in any language. Replace with:
- a comma, period, or colon (depending on the sentence)
- parentheses
- a simple hyphen `-` only when it's true hyphenation
- a line break or restructured sentence

This rule does not apply to code, identifiers, URLs, file paths.

### 5.2 Accents and diacritics are mandatory

Never ship unaccented copy. Apply the full character set of the target language:

| Language | Required characters |
|---|---|
| French | é è ê à â ç ù û ô î ï ë ÿ æ œ |
| Spanish | á é í ó ú ñ ü ¿ ¡ |
| German | ä ö ü ß |
| Portuguese | á é í ó ú ã õ â ê ô ç |
| Italian | à è é ì í î ò ó ù |
| Czech / Polish / Nordic / Turkish / Vietnamese | apply each language's full diacritic inventory |

### 5.3 Punctuation conventions

- **French:** use guillemets `« »` for quotes when natural. Apply insécable (non-breaking) spaces before `: ; ! ? » «` where typesetting allows.
- **Spanish:** opening `¿` and `¡` are mandatory for questions and exclamations.
- **German:** Anführungszeichen `„…"` for quotes when natural.
- **Chinese (simplified, zh-CN by default unless path indicates traditional):** use full-width punctuation `。，、：；" "' '（）` and full-width quotation marks. No space before/after punctuation.
- **Japanese:** full-width punctuation `。、「」『』（）`. No spaces between words.
- **Arabic / Hebrew:** right-to-left flow; mirror punctuation where appropriate; verify direction-sensitive characters.

### 5.4 Locale conventions
- Dates, times, numbers, and currency in the target locale's native format.
- Address formats, phone formats, and units (metric vs imperial) localized.
- Honorifics and forms of address (tu/vous, du/Sie, 你/您) chosen consciously and used consistently.

---

## 6. Brand and technical terms

- Keep brand names, product names, and technical terms in their canonical form when they are conventionally not translated in the target market.
- Do not translate codebase identifiers, API names, slugs, anchors, or URL fragments.
- When unsure whether a term is conventionally translated in the target market, default to keeping the English form and flag it to the user.

---

## 7. SEO-sensitive elements

Never silently change in a translated page:
- `title` tags
- `meta description`
- `H1`
- URL slugs
- canonical tags, hreflang

If a change to one of these is needed, flag it to the user first and wait for confirmation before editing.

---

## 8. What to avoid

- Outputting a full retranslation of the page from English.
- "Improving" sections that are already fine just to show changes.
- Translating brand names, product names, or technical terms that are conventionally kept in English in the target market.
- Introducing em dashes.
- Changing SEO-sensitive elements without flagging.
- Propagating an edit to other locales when the user only asked about one.
- Exposing the two-step process or the humanizer iterations to the user. The final output is what they see.

---

## 9. Quick checklist before delivering

- [ ] Started from the existing target-language file, not from English.
- [ ] Two-step process complete: humanized translation, then native rewrite without looking at English.
- [ ] No `—` em dashes anywhere.
- [ ] All required accents and diacritics present.
- [ ] Correct quotation marks and punctuation conventions for the target language.
- [ ] Register matches the target audience and language's journalistic norm.
- [ ] No AI tells (balanced triads, listicle rhythm, abstract noun stacks).
- [ ] Brand and technical terms preserved in their canonical form.
- [ ] SEO-sensitive elements untouched (or explicitly flagged).
- [ ] Only the locale the user referenced has been modified.
