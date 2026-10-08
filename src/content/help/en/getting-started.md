---
title: "Getting started with Nuvora"
seoTitle: "Getting started | Nuvora Help"
description: "What Nuvora is, how to create your account alone or with a team, how to sign in, how the menu is laid out, and how to write and publish your first LinkedIn post."
excerpt: "Create your account, find your way around the menu and publish your first LinkedIn post in a few minutes."
section: "getting-started"
order: 1
updated: 2026-10-08
appPaths: ["/signup", "/login", "/social/linkedin/posts"]
audience: "Everyone"
related: ["linkedin-posts", "calendar", "linkedin-ads", "validation", "ask", "agents", "assets-library", "my-connections", "balance-and-payments", "your-team", "client-space", "account-and-sign-in"]
shots:
  - file: "/images/help/getting-started-menu.webp"
    route: "/social/linkedin/posts"
    clip: "#side-nav"
    alt: "The menu on the left: Posts, Calendar, LinkedIn Ads, Validation, Ask, Agents, Assets Library, Image editor, Campaigns and Skills, with Team and Credits at the foot"
    captured: 2026-10-08
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/styles/apps/nuvora.css", "public/apps/nuvora/vocabulary.js", "src/lib/auth.ts", "src/middleware.ts", "src/pages/signup.astro", "src/lib/signup.ts", "src/pages/api/signup/verify.ts", "src/pages/login.astro", "src/lib/mfa.ts", "src/pages/invite/[token].astro", "src/scripts/creditChip.ts", "src/components/ThemeSwitch.astro", "src/components/panels/SocialContentPanel.astro", "src/scripts/socialContent.ts", "src/lib/social/connect-guide.ts"]
---

Nuvora is a workspace for LinkedIn, and for LinkedIn only. You write posts with AI or by hand and publish them on your LinkedIn profile or on the company pages you administer, now or at the hour you pick. Every post planned, scheduled and published shows on a calendar. Your LinkedIn ad account is read live, with its dashboard, its campaigns and the Ad Library. Posts can wait for a teammate's or a client's approval before they go out. **Ask** answers questions about your posts, your calendar and your ad account, and agents watch your publishing rhythm and your ad account for you. Your visuals live in the Assets Library, where the Image editor frames a picture for LinkedIn, and campaigns gather the material of one LinkedIn push for Ask, your agents and your posts.

You can work alone, or in a team that shares one prepaid balance, held in US dollars, and works for clients who sign in to see what was made for them. Every paid run says what it costs: a picture render or a publication shows its price before you press, and an AI draft or answer shows its cost as soon as it's done.

## Create your account

1. On the sign-in page, click **Create an account**.
2. Type your **First name**, **Last name** and **Email**.
3. Under **How you work**, pick one of the three options:
   - **Just me**: "Create on your own, with your own credits. You can invite people later." Nuvora opens a team of one for you, named after you, and you are its administrator.
   - **Create a team**: "You run it: invite people, and they create from one shared pool of credits." A field appears: type the name of your team. You are its administrator.
   - **Join a team**: "Your team already uses Nuvora: an admin lets you in." A field appears where you type your team's name or your admin's email address.
4. Tick the box to accept the Terms of Service.
5. Click **Send my code**. Nuvora emails you a 6-digit code. Nothing is created before you enter it.

The code is valid for 20 minutes. Temporary mailboxes can't open an account: use your work or personal address. If the address already has an account, you receive an email saying so instead of a code.

### Enter the code

The next screen is **Check your inbox**.

- **Just me** or **Create a team**: type the code in **Verification code**, choose a **Password** of at least 8 characters, then click **Create my account**. You are signed in and land on **Posts**.
- **Join a team**: type the code and click **Send my request**. No password is asked yet. The screen **Your request is sent** tells you that the team's admins have been told. Once one of them accepts, you receive an invitation by email. Open it, choose your password, and click **Join and sign in**.

Nothing arriving? Check the spam folder, or click **start again** to correct the address.

## Sign in

Type your **Login** (your email address) and your **Password**, then click **Sign in**. The sign-in page speaks your browser's language, English, French or Chinese, and the language names under the card switch it. Once you're in, Nuvora speaks the language saved on your account; change it any time in **User Settings**, under **Language**.

You land on **Posts**, or on the home page you chose in **User Settings**. A client login always lands on its **Client space**, and a commercial partner on **Commissions**.

New teams also ask for a second step: a 6-digit sign-in code sent to your email address, valid for 10 minutes. Type it under **Sign-in code** and click **Confirm and sign in**. Leave **Trust this browser for 30 days, so it only asks for my password.** ticked on a computer you use every day. An admin can switch this step off for the whole team on the **Team** page. See [Account and sign-in](/help/account-and-sign-in#the-sign-in-code-by-email).

Once you're in, Nuvora checks your LinkedIn connections in the background. If one needs reconnecting, a notification in the bottom right corner of the screen says so. See [My Connections](/help/my-connections#the-connection-check-after-you-sign-in).

## Find your way around

The menu on the left holds the LinkedIn modules first, then the housekeeping at the foot:

| Menu entry | What it opens |
|---|---|
| **Posts** | Your LinkedIn posts: brief, copy, pictures, then publishing on your profile or a company page. See [LinkedIn posts](/help/linkedin-posts). |
| **Calendar** | Every post planned, scheduled and published, by month, by week or as a list. See [Calendar](/help/calendar). |
| **LinkedIn Ads** | **Dashboard**, **Campaigns** and **Ad Library**: your ad account read live from LinkedIn. See [LinkedIn Ads](/help/linkedin-ads). |
| **Validation** | The posts and files waiting for someone's approval, and what you sent for approval. See [Validation](/help/validation). |
| **Ask** | Questions answered from your posts, your calendar and your LinkedIn ad account. See [Ask](/help/ask). |
| **Agents** | **My agents**, **Team agents** (admins only), **Catalog** and **Runs**: agents that watch the publishing and the ad account. See [Agents](/help/agents). |
| **Assets Library** | Every file of your team, in folders. See [Assets Library](/help/assets-library). |
| **Image editor** | A picture framed to the LinkedIn sizes, cropped, adjusted, written on and branded. See [The Image editor](/help/assets-library#the-image-editor). |
| **Campaigns** | The visuals, documents and posts of one LinkedIn push, gathered under a name and a brief for Ask, your agents and your posts. Not the **Campaigns** tab of LinkedIn Ads, which holds your ad campaigns. See [Campaigns](/help/campaigns). |
| **Skills** | **My skills**, **Team skills** (admins only) and the **Catalog**: the instructions that shape your drafts. See [Skills](/help/skills). |
| **Partner** | Only for commercial partners. See [Partners](/help/partners). |
| **Team** | The people who share your balance, and your clients. See [Your team](/help/your-team). |
| **Credits** | Your balance: **Buy credits** to top it up, **Invoices** and **Usage**. See [Balance and payments](/help/balance-and-payments). |

An admin can switch a module off for one person; it then leaves that person's menu. A client login sees a much shorter menu: **Client space** and **Validation**. See [Client space](/help/client-space).

![The menu on the left: Posts, Calendar, LinkedIn Ads, Validation, Ask, Agents, Assets Library, Image editor, Campaigns and Skills, with Team and Credits at the foot](/images/help/getting-started-menu.webp)

The bar at the top of every page holds:

- A house button that makes the page you're on your home page, the one you land on when you sign in. Click it again to go back to the default.
- A sun or moon button that switches between light and dark.
- **Activity**: the drafts, renders and checks running for you, and how they ended. It keeps following a run while you move to another page.
- Your balance: the amount you can spend right now. Click it to top up. When the balance is empty, it reads **Buy credits**. A client login has no balance, so it sees no amount here.
- Your picture, which opens a menu with **User Settings**, **Billing & credits**, **Team**, **My Connections**, the **System**, **Light** and **Dark** choices, the language row and **Sign out**.

The footer links to the **Help center**, **Report a bug**, **Contact us**, the nuvora.studio website, **What's new**, the **Terms of Service** and the **Privacy Policy**.

## Your first post

1. **Connect LinkedIn.** Click your picture at the top right, then **My Connections**. On the **LinkedIn** card under **Your social accounts**, click **Connect an account**, sign in to LinkedIn as yourself and press **Allow**. Your profile comes back, along with the company pages LinkedIn lists you as an administrator of. Keep the ones you post for. See [My Connections](/help/my-connections).
2. **Check your balance.** The amount in the top bar is what you can spend. If it reads **Buy credits**, top up first on **Credits** > **Buy credits**. See [Balance and payments](/help/balance-and-payments).
3. **Open Posts** in the menu. A new post is ready; **New post** clears the form for another one.
4. **Write the brief.** Pick the **Format** (**Text only**, **+ Image** or **+ Carousel**), the **Language** and the model that writes (**Quick**, **Balanced** or **Best**: see [Choosing a model](/help/choosing-a-model)). In the brief box, say what the post is about, who it speaks to and what it has to achieve.
5. **Click Draft with AI.** The copy comes back on the next step, ready to edit, with a line that says what the draft cost. Prefer to write it yourself? **Write it myself** opens the editor with no AI call and nothing billed.
6. **Publish.** Open **Publishing**. On the **Publish automatically** tab, tick your profile or a page under **Who it goes out as**, then click **Publish now**, or **Schedule** to pick a day and a time. Nothing is ticked for you: **Schedule** and **Publish now** stay locked until you tick an account.

Every scheduled and published post then shows on the [Calendar](/help/calendar). The full walkthrough, pictures and approvals included, is in [LinkedIn posts](/help/linkedin-posts).
