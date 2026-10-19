---
title: "Log"
seoTitle: "Your Log: runs, emails, sign-ins and spending | Nuvora Help"
description: "The Log in the menu under your picture: your runs and notifications, your agent runs, the emails Nuvora sent you, your sign-ins and what you spent, in one table you can filter, sort and download."
excerpt: "Your personal history in Nuvora: every draft, post and notification, your agent runs, the emails you received, your sign-ins and your paid actions."
section: "account"
order: 14.5
updated: 2026-10-17
appPaths: ["/log"]
audience: "Everyone but client logins; nobody else ever sees your Log"
related: ["getting-started", "account-and-sign-in", "agents", "linkedin-posts", "balance-and-payments", "your-team"]
shots: []
sources: ["src/pages/log.astro", "src/scripts/logPanel.ts", "src/lib/user-log.ts", "src/pages/api/log.ts", "src/scripts/activityTracker.ts", "src/scripts/activityKinds.ts", "src/lib/activity-jobs.ts", "src/pages/api/jobs.ts", "src/lib/spend-actions.ts", "src/layouts/Layout.astro", "src/lib/features.ts", "src/lib/app.ts"]
---

The **Log** is your own history in Nuvora. One table holds the drafts, visuals and posts Nuvora ran for you and the notifications it sent you, the runs of your agents, the emails it mailed to you, the sign-ins of your login and the paid actions billed to you. Open it when you wonder whether a scheduled post went out, what failed while you were away, which browser signed in last night or what a draft cost.

**Activity**, at the top of the page, shows what is running now and what ended in the last day. The Log keeps the longer history. It is not the **Activity log** card of User Settings, which charts what you spent.

## Open the Log

Click your picture at the top right, then **Log**. The page opens with **Your history** above its title.

Two other ways lead there:

- **See everything in the Log**, at the foot of the **Activity** panel.
- The **More** button on the card that sums up the notifications you missed (see [Back to a pile of notifications](#back-to-a-pile-of-notifications)).

## The six sections

The tabs under the page header pick what the table shows, each with the number of rows it holds for the period:

| Section | What it lists |
|---|---|
| **Everything** | The five sections below in one table. |
| **Runs and notifications** | Every run **Activity** told you about: the drafts and post visuals you started, and what happened on its own while you were away, such as a scheduled post that went out or failed. Rows you cleared from **Activity** are still here. |
| **Agents** | The runs of your own agents, and the runs you started yourself with **Run now**. |
| **Emails** | The emails Nuvora sent to your address: sign-in codes, recaps, digests, alerts and the rest. |
| **Sign-ins** | Each **Signed in**, **Sign-in refused**, **Signed out** and **Password reset asked** of your login. |
| **Spending** | Every paid action billed to you, at the price you were billed. |

## Read the table

Each row is one event, in eight columns:

| Column | What it holds |
|---|---|
| **When** | The date and time, in your date and time settings. |
| **Section** | **Runs**, **Agents**, **Emails**, **Sign-ins** or **Spending**. |
| **Type** | A run carries its type from **Activity**, such as **Social post**, **Post visuals** or **Publishing**. The other rows read **Agent run**, **Email**, **Sign-in** or **Paid action**. |
| **What** | The run's name, the agent's name, the email's subject, the sign-in event or the paid action's name. |
| **Status** | **Finished**, **Failed** or **Running** for runs and agent runs; **Sent** or **Not sent** for emails; **Succeeded** or **Refused** for sign-ins; **Billed** for paid actions. |
| **Details** | The result or the error of a run, what an agent run found, why an email didn't go out, the browser, system, place and IP address of a sign-in ("Chrome · Windows"), or the tokens a paid action used on a model. |
| **Duration** | How long a run or an agent run took. |
| **Billed** | What a paid action, or an agent run that was billed, cost you. |

A line above the table sums up what the filters keep, for example "133 rows · 14 failed · $0.03 billed". Click a column heading to sort by it, and click it again to reverse the order. Empty cells always go last.

## Narrow it down

- **Period**, at the top right: **Today**, **Last 7 days**, **Last 30 days** (the default), **Last 90 days** or **Last 12 months**.
- **Status**, beside the tabs: **Any status**, **Succeeded**, **Failed** or **Running**. **Failed** keeps failed runs and agent runs, emails that didn't go out and refused sign-ins.
- **Type**: **Every type**, or one of the types present in the section.
- **Search the Log**: keeps the rows whose name, details, type or status hold the words you type.

The table shows 100 rows a page. Under it, the pager says where you are ("Rows 1 to 100 of 133") and offers **Previous**, the page numbers and **Next**. The address of the page keeps the period, the section, the filters, the sort and the page, so a reload or a bookmark opens the same view.

The whole period loads at once, up to 1,000 rows per section. When a section holds more, the summary line adds "This period holds more than the Log shows at once. Pick a shorter period to see everything."

**Download CSV**, next to **Period**, saves every row the filters keep, all pages included, with raw values a spreadsheet can add up: the time in ISO format, the duration in seconds and the billed amount in US dollars.

## Open a row

- A run opens the page it belongs to, like a row of **Activity**.
- An agent run opens the **Agents Command Room** tab (**Runs** in the Agents menu) on that run. See [Agents](/help/agents#the-agents-command-room).
- An email unfolds its text under its row. Click the subject again to fold it.
- A sign-in or a paid action has nowhere to go: everything there is to know is on the row.

Emails that carry a way into your account (the sign-in code, the password reset, the sign-up code, the welcome email and invitations) are listed with their subject and time, but their text is never shown. Click one and it reads "This email carried a sign-in code or a link to your account, so its text is not kept here." A session left open on a shared computer can't be turned into your password.

## Back to a pile of notifications

Runs that end while you're away are announced the next time you open Nuvora, with a card each in the bottom right corner of the screen. When more than five are waiting, only the five newest get a card. One last card closes the stack: **While you were away**, "12 more notifications" (with the real number), and a **More** button that opens the Log.

All of them count as announced at once, so no second wave of cards comes on the next page. Every one of them is under **Runs and notifications**.

## Who sees your Log

Only you. The Log reads your own rows, whatever the role of the person asking, your team's admins included. Admins still see your last sign-ins on your page, opened from **Team**, which is another screen.

Client logins have no Log. On their screen, the card of missed notifications shows the count without the **More** button.

The Log has its own row in the rights, **Log**, under **Shared**, which every role but Client has from the start: "Their own history: runs, notifications, agent runs, emails received, sign-ins and paid actions. Viewing is all it takes; nobody else sees it." When an admin takes it away from someone, **Log** leaves their menu, **Activity** loses its **See everything in the Log** link and the **More** card shows the count alone. See [Your team](/help/your-team).

## What it costs

Reading or downloading the Log costs nothing. **Spending** lists what each of your paid actions cost; **Activity log** in User Settings sums them up. See [Balance and payments](/help/balance-and-payments).
