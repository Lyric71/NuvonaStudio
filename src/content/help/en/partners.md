---
title: "Partners"
seoTitle: "The partner area | Nuvora Help"
description: "What a Nuvora commercial partner sees: creating teams and people, inviting prospects in their own words, and the commissions earned on what those accounts pay."
excerpt: "For commercial partners only: create teams and people, invite prospects, and follow your commissions."
section: "partner"
order: 15
updated: 2026-10-04
appPaths: ["/partner/users", "/partner/invitations", "/partner/commissions"]
audience: "Commercial partners"
related: ["getting-started", "your-team", "balance-and-payments"]
shots: []
sources: ["src/pages/partner/users.astro", "src/pages/partner/invitations.astro", "src/pages/partner/commissions.astro", "src/lib/partners.ts", "src/lib/partner-invites.ts", "src/pages/signup.astro", "src/layouts/Layout.astro", "src/lib/auth.ts", "src/lib/app.ts", "public/apps/nuvora/vocabulary.js"]
---

The **Partner** entry appears in the menu only for commercial partners: people who bring customers to Nuvora and earn a commission on what those customers pay. If you don't see it, this article doesn't concern you.

A partner lands on **Commissions** after signing in, unless they chose another home page. The **Partner** menu holds three pages: **Users**, **Invitations** and **Commissions**.

## Users: create teams and people

On **Partner** > **Users**, you create the customer accounts you bring. Every person you create belongs to a team, and there is no limit on how many you create.

1. Under **Create a user**, pick a team you created before, or pick the option for a new team and type its name and its **Billing address**.
2. Type the person's **First name**, **Last name** and **Email**, and pick their **Preferred language**: every email they receive is written in it.
3. Pick their **Role**: **Admin**, or **Creator** for someone who makes the work. **What each role can do** explains the four roles of Nuvora: Admin, Creator, Viewer and Client.
4. Click **Create the user**.

The first person of a new team must be its admin, who runs the team and buys its credits. You can add people only to a team you created, and an address that already has an account can't be used again. The person receives a welcome email with a link to choose their password.

A creator you add draws nothing from the team's credits until an admin of the team sets their daily limit on the Team page. Viewers, and the logins of the team's clients, are added afterwards by the team's admins on that same page. See [Your team](/help/your-team).

Below the form, the table lists your teams and their people, with each person's **Role**, the date they were **Created**, **Spent this month**, **Spent to date**, **Paid us** and **Your commission**. A team's figures include its members. A prospect who opened an account through your invitation is listed on a row of their own, marked **Signed up through your invitation**.

## Invitations: prospects in your own words

On **Partner** > **Invitations**, you write to a prospect yourself.

1. Under **Invite a prospect**, type **Their email**, and if you like **Their name**, **Their company** and **Their language**.
2. Write the **Subject** and **Your message**. Nuvora proposes a text: change a sentence or all of them. The three tags shown under the message are replaced by their name, their company and your own name when the email goes out, and the button that opens the account is added under your text, so you never need to paste a link.
3. Open **Read it as your prospect will** to check it.
4. Click **Send the invitation**. Tick **Keep this text for next time** first if you want your version proposed next time; **Save as my default text** does the same without sending, and **Back to the proposed text** restores the original.

The email leaves from Nuvora's domain, which keeps it out of spam folders, with your own address as the reply address, so your prospect's answer comes to you.

The link in the email opens the sign-up page with your prospect's address already filled in, and a line saying you invited them. The day they finish creating their account, it becomes one of your accounts, exactly as if you had created it yourself.

You can send 30 invitations a day; the form shows how many you sent in the last 24 hours. Under **Your prospects**, each invitation shows its state: **Sent**, **Opened**, **Account opened**, **Called back** or **Expired**. **Send again** replaces the earlier link, and **Call back** stops it from working. An invitation that became an account reads **Now one of your accounts**.

## Commissions

**Partner** > **Commissions** shows what your accounts paid and your share of it. The tiles at the top give **Your rate**, how many teams and users you created, **They paid us** and **You earned**.

Your commission is a share of what your accounts pay: their credit purchases and automatic top-ups, with any refund deducted. It is money in, not usage, so an account that bought credits has already earned you your share before it spends them.

An account earns from the day you create it, or the day your prospect opens it through your invitation. The rate in force that day is frozen on the account, so a later change to your terms never rewrites what you already earned. Free credit granted to a customer by Nuvora itself is not a payment and earns no commission.

The table **Your accounts** has one line per team and per user, with **Earning since**, **They paid**, **Rate** and **You earned**, and a total at the bottom. A team pays from its shared credits, a user from the credits they bought for themselves.
