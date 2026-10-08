---
title: "Choosing a model"
seoTitle: "Choose the AI model that writes: Quick, Balanced or Best | Nuvora Help"
description: "The model picker of Nuvora's writing steps and of Ask: the Quick, Balanced and Best choices, what one run costs, All models, how your pick is remembered, and the Model benchmarks page that compares the text models on public benchmarks."
excerpt: "Three plain choices for the AI that writes your posts and answers your questions, every model one click away, and a page that compares them on public benchmarks."
section: "library"
order: 9.5
updated: 2026-10-08
appPaths: ["/settings/model-benchmarks", "/settings", "/social/linkedin/posts", "/ask"]
audience: "Everyone who writes or asks with AI; the Model benchmarks page is open to everyone"
related: ["linkedin-posts", "ask", "skills", "agents", "account-and-sign-in", "balance-and-payments"]
shots: []
sources: ["src/scripts/modelPicker.ts", "src/lib/model-tiers.ts", "src/lib/model-tiers-rules.ts", "src/lib/model-benchmarks.ts", "src/data/model-benchmarks.json", "src/pages/settings/model-benchmarks.astro", "src/pages/settings.astro", "src/scripts/selectionRewrite.ts", "src/components/panels/SocialContentPanel.astro", "src/pages/ask.astro", "src/scripts/askIntelligence.ts", "src/lib/app.ts"]
---

When Nuvora writes a post or answers a question, an AI model does the writing. You don't need to know the models by name to pick one: every model picker opens on three plain choices, **Quick**, **Balanced** and **Best**, and the full list stays one click away.

## Where you pick the model

The model picker sits wherever AI writes text:

- the brief of a post, next to **Language**, for **Draft with AI**;
- **Another version**, on the copy step of a post;
- the menu that opens when you highlight a passage and click **Rewrite with AI**;
- [Ask](/help/ask), next to **Use a skill**.

Agents are set another way: each agent keeps its own **Model** field in its form. See [Agents](/help/agents).

## The button

The picker is one compact button that shows your current pick: the icon and name of the choice when the model is one of the three, then the model's name, then what one typical run of that feature costs.

Click it to open **Choose a model**. Escape, a click outside or a pick closes it. With the keyboard, the arrow keys move from one option to the next.

When only one model is on offer, there is no button: a line says **Runs on** and names the model.

## Quick, Balanced and Best

The top of **Choose a model** holds the three choices as cards:

| Choice | What the card says |
|---|---|
| **Quick** | Fast and cheap, for drafts and short posts |
| **Balanced** | Good quality at a fair cost, for most work |
| **Best** | The strongest, for important work and hard questions |

Each card shows the model it runs, a globe if that model searches the web, a picture if it reads images, and its price with **a run** under it. The star **Recommended here** marks the model this feature runs when nobody chooses.

Nuvora sets which model each choice runs, and may change it as new models arrive, so the card is always the place to check. When the model of a choice is forbidden for your team, or switched off in your **My models**, the choice moves to the closest model in price that you can use. Quick looks among cheaper models first and Best among stronger, dearer ones first, so Quick stays cheap and Best stays strong.

The recommended model of the feature is always one of the three: it takes the place of the choice closest to it in price, and that card carries the star. Two choices never show the same model, so when only one or two models are on offer, you see one or two choices.

In Ask, while **Web search** is ON, the picker only offers the models that search the web, and a choice whose model can't search leaves the cards.

## All models

Under the cards, **All models**, with the number of models, unfolds the full list: every model you can use there, grouped under its provider, each with what a run costs and the same web and picture icons. The tag **Default** marks the model that runs when nobody chooses.

Type in **Search a model or a provider** to narrow the list. When nothing fits, it says "No model matches."

**All models** opens already unfolded when your current model is not one of the three.

**Compare models**, at the top right, opens the [Model benchmarks](#model-benchmarks) page in a new tab.

## What a run costs

The price on the button, on the cards and in the list is what one typical run of that feature costs your team, everything included: a post in the brief, an answer in Ask. A long brief or a long thread costs more, a short one less. The exact price of each run is shown on the run and charged as shown. See [Balance and payments](/help/balance-and-payments).

## Your pick is remembered

Nuvora remembers your pick for each feature on this browser: the model you draft posts with is kept apart from the one that answers in Ask. Another browser or computer opens on the recommended model.

Pick the model marked **Default** (the card with the star, or the row tagged **Default**) to go back to following the default: if Nuvora moves it later, your runs follow.

If you switched off a feature's default model in **My models**, the picker opens on the first model you kept. A remembered model that is no longer on offer is forgotten. See [Account and sign-in](/help/account-and-sign-in#my-models).

## Model benchmarks

**Model benchmarks** shows how the text models compare on public benchmarks, for when the three choices are not enough to decide. Open it from **Compare models** in any picker, or from **Compare the models on public benchmarks** on the **My models** card in **Settings**.

The page opens on the three choices as cards. Each says **Runs on** and the model, or **Not available here**; then its price level, from $ to $$$$, which says how dear the model is next to the others; then about what one post costs.

### Scores and costs

**Scores and costs** lists the text models your team allows, the strongest on the Intelligence Index first. **Provider** narrows the table to one maker; **Every provider** shows them all again. Click a column to sort by it: scores sort strongest first, price and costs cheapest first, and a second click turns the order round. Models without a figure always go last.

| Column | What it shows |
|---|---|
| **Model** | The model's name and provider, the choice it runs (**Quick**, **Balanced** or **Best**), and icons for **Searches the web** and **Reads images**. |
| **Price** | The price level, from $ to $$$$. |
| **Intelligence Index** | One overall score from Artificial Analysis that blends ten hard tests of reasoning, knowledge, coding and agent work. |
| **LMArena Text** | A rating built from blind votes in which people pick the better of two answers. |
| **Output speed** | How many tokens, roughly words, the model writes per second once it starts answering. |
| **Humanity's Last Exam** | About 2,000 very hard expert questions across many fields, answered without tools. |
| **GPQA Diamond** | Graduate-level science questions that are hard to answer even with a web search. |
| **tau2-bench Telecom** | A customer support conversation in which the model must use tools and follow the rules. |
| **A post** | What one LinkedIn post costs your team, everything included. |
| **An article** | What one long article costs your team, everything included. |

Each score links to the page it was read on. A small "v" marks a figure reported by the model's maker, because no independent figure exists. A dash means there is no public figure: no score is ever estimated. The newest models show a dash under GPQA Diamond and tau2-bench Telecom, which are no longer run on them.

The line under the title gives the date the scores were read ("Scores read on" and the date). They are refreshed about twice a month.

The costs are what your team pays for one typical run. A real run costs more on a long brief and less on a short one.

### What the benchmarks measure

The last card, **What the benchmarks measure**, explains each benchmark and links to its source. A high score on one test does not make a model better at everything: for marketing copy, look first at the overall index and at the arena, where people vote for the answers they prefer.

The page lists text models only: the models that make pictures are not on it.
