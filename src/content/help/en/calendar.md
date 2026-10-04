---
title: "Calendar"
seoTitle: "Plan and follow your LinkedIn publishing calendar | Nuvora Help"
description: "The Calendar: every LinkedIn post planned, scheduled, published or refused, by month, by week or as one list, with the publishing watcher's findings under it."
excerpt: "See what is planned, what is booked to go out and what is already live on LinkedIn, move a send to another day, and act on what the publishing watcher noticed."
section: "linkedin"
order: 3
updated: 2026-10-04
appPaths: ["/social/calendar/monthly", "/social/calendar/weekly", "/social/calendar/list"]
audience: "Everyone in the team; creators and admins plan and move"
related: ["linkedin-posts", "agents", "validation", "my-connections", "account-and-sign-in"]
shots:
  - file: "/images/help/calendar-monthly.webp"
    route: "/social/calendar/monthly"
    alt: "The Calendar on the Monthly view for October 2026: the band with Monthly, Weekly and List, the No brand button, How this page works and Add a publication, the To do, Planned, Published and Refused counters at zero, and the empty month grid"
    captured: 2026-10-04
sources: ["src/lib/app.ts", "src/pages/social/calendar/monthly.astro", "src/pages/social/calendar/weekly.astro", "src/pages/social/calendar/list.astro", "src/components/panels/SocialCalendarPanel.astro", "src/scripts/socialCalendar.ts", "src/pages/api/social-posts/index.ts", "src/pages/api/social-posts/[id].ts", "src/lib/social-db.ts", "src/lib/social/publications.ts", "src/lib/social/limits.ts", "src/lib/own-work.ts", "src/lib/no-brand.ts", "src/components/AgentFindings.astro", "src/scripts/agentFindings.ts", "src/pages/api/agents/run.ts", "src/pages/api/agents/findings.ts", "src/pages/api/agents/finding-action.ts", "src/lib/agents/watchers.ts", "src/lib/agents/agents-db.ts", "src/middleware.ts"]
---

**Calendar** in the menu shows your LinkedIn publishing day by day: what still has to be written and published, what Nuvora is booked to send, what is already live, and what LinkedIn refused. A post you schedule or publish from [Posts](/help/linkedin-posts) lands here on its own, with the profile or page it goes out on.

## The band

The dark band at the top holds:

- **Monthly**, **Weekly** and **List**, the three ways to read the calendar;
- **How this page works**, a short note about the colors and the views;
- **Add a publication**, to plan one by hand;
- the period on view, with the arrows to the previous and next month (or week) and **Today** to come back;
- four counters for the period on view: **To do**, **Planned**, **Published** and **Refused**. The bar under each one is its share of the period.

The **No brand** button beside the three views is your team's own plan. Your team has only this one, so there is nothing to choose there.

![The Calendar on the Monthly view for October 2026: the band with Monthly, Weekly and List, the No brand button, How this page works and Add a publication, the To do, Planned, Published and Refused counters at zero, and the empty month grid](/images/help/calendar-monthly.webp)

## What the colors mean

Each publication wears one of four colors, the same as the counters:

| Color | Counter | What it means |
|---|---|---|
| Amber | **To do** | Planned, but nothing is booked: it still has to be written and published. |
| Blue | **Planned** | Booked: Nuvora sends it by itself at the hour shown, and it is not out yet. |
| Green | **Published** | Live on LinkedIn. |
| Red | **Refused** | Its time came and LinkedIn refused it. The reason is on the card. |

Hours are shown in your own time zone, set in **Settings**. See [Account and sign-in](/help/account-and-sign-in).

## Monthly

The month as a grid, Monday to Sunday, today circled. Each publication is a small card on its day: the network, the hour it goes out, a word for where it stands (**Planned**, **Sending** or **Did not go out**), the initials of the person in charge, and the title. Point at a card to read the account it goes out on and, for a refused one, why.

- **Click an empty part of a day** to plan a publication on that day.
- **Click a post written in Posts** to open it there, on its **Publishing** step.
- **Click a publication added by hand** to open it in its window and change it.

## Weekly

The week as one row per day, Monday to Sunday. Each card shows its state, **In charge:** and the person (or **Nobody in charge yet**), its notes, and, for a post sent by Nuvora, each account it goes out on with its hour and state. On a card:

- **Edit the plan** opens the window of a post written in Posts, to change its day, the person in charge or its notes. Clicking the card itself opens the post.
- **Mark as published** turns an amber card green.
- **Add the link** opens the window to paste the address of a post marked published.
- **View the post** opens it on LinkedIn.

**+ Add a publication**, under each day, plans one on that day. A day with nothing on it says **Nothing planned.**

## List

Every publication on one line, in the order it goes out.

1. Pick the period: **This month** (the arrows on the band move it month by month), **From today** (everything still ahead) or **Everything**.
2. Type in **Search a title, a network, a person**: the search reads the title, the notes, the network, the accounts and the person in charge.
3. Keep one state with the filter: **Every state**, **To do**, **Planned**, **Published** or **Refused**.

The columns are **Date**, **Hour**, **Publication**, **Network**, **In charge**, **State** and **Accounts**. Click **Date** to reverse the order. The last column holds the same actions as the weekly cards, and the count of publications shows beside the filters. The four counters follow the period and the search, not the state filter.

## Add a publication

Click **Add a publication** on the band, or click a day. The window asks for:

1. **Title**: one line saying what the post is about.
2. **Publish date**, already set to the day you clicked.
3. **Platform**: LinkedIn.
4. **Who is in charge**: the teammate responsible for writing and publishing it, or **Nobody yet**.
5. **Status**: **To do** or **Published**.
6. **Link to the published post** (optional): paste it once the post is live.
7. **Notes** (optional): anything the team should know.

Click **Save**. A publication added this way is yours: nobody else in the team sees it on the calendar. To share the work, write the post in [Posts](/help/linkedin-posts) and pick **Everyone in the team** there.

**Delete**, at the bottom of the window, takes a publication off the plan after you confirm. It is there for the person who planned it while only they can see it, and for admins.

## Move a scheduled post

Drag a blue card to another day, on the monthly grid or the weekly rows. The send moves with it and keeps its hour: Nuvora sends the post on the new day. A refused card can be dragged too: it is booked again on the new day, at the same hour. A day that has already passed is refused: pick a day ahead, or schedule the post again from Posts.

## LinkedIn publishing findings

Under the monthly grid, **LinkedIn publishing findings** shows what the LinkedIn publishing watcher noticed. It checks your LinkedIn publishing about once a day: what went out in the last 30 days, what is scheduled for the next 14, publications that failed, and drafts or posts awaiting validation that stalled. It flags a quiet week, an empty schedule and every failure, with the real dates.

The watcher runs once it is among your agents or your team's: add it from **Agents** > **Catalog**. See [Agents](/help/agents). Until it has something to say, the panel reads **No open findings.**

Each finding shows its level (info, warning or critical), its date, what happened and a **Suggested:** next step. Creators and admins can act on it:

- **Acknowledge**: you have seen it. It stays in the list, marked acknowledged.
- **Resolve**: it is handled. It leaves the list.
- **Dismiss**: it is noise. It leaves the list.
- **Draft response**: AI writes the concrete response to the finding, shown under it.
- **Draft post**: AI writes a LinkedIn post answering the finding, saved as a draft in Posts.

Both drafts are paid, and their cost shows next to them. Drafting acknowledges a new finding.

**Run watchers now** runs your team's switched-on agents at once, not only this one, and says how many new findings came back, with the cost of the run next to the button. If no agent is switched on yet, it says so. Admins also see **Configure watchers**, which opens **Team agents** to switch an agent on or off and set how often it runs.

## Who can do what

| Action | Who |
|---|---|
| Read the calendar and the findings | Everyone in the team |
| Add, change, mark published, move a send | Creators and admins |
| Delete a publication | The person who planned it while it is theirs alone, or an admin |
| Act on a finding, run the watchers | Creators and admins |
| Configure the watchers | Admins |

Client logins don't see the calendar. A client follows the posts made for it in its [Client space](/help/client-space).

## What it costs

The calendar itself costs nothing: planning, moving and marking publications is free. Each run of a watcher that reaches the AI is paid, and so are **Draft response** and **Draft post**. Every charge against your credits is listed in **Usage**, under **Credits** in the menu.
