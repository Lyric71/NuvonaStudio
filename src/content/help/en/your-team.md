---
title: "Your team"
seoTitle: "Your team, its roles and its clients | Nuvora Help"
description: "Working alone or in a team, the Admin, Creator, Viewer and Client roles, inviting people, answering requests to join, daily limits, pausing a login, modules and rights per person, adding clients and giving their people a login, invoice details and the sign-in code."
excerpt: "A team shares one pool of credits and works for its clients. Admins invite people, set daily limits, add clients and give their people a login."
section: "team"
order: 10
updated: 2026-10-05
appPaths: ["/team", "/invite"]
audience: "Everyone; most actions are for admins"
related: ["getting-started", "balance-and-payments", "client-space", "linkedin-posts", "validation", "skills", "agents", "account-and-sign-in"]
shots:
  - file: "/images/help/your-team-members.webp"
    route: "/team"
    alt: "The Team page of a new team: Just you, for now, the team name with Save the name, Team credits at $0.00 with Buy credits, the Members card with one admin and No limit for admins, then the Invite someone, Clients and Invoices and sign-in cards"
    captured: 2026-10-04
sources: ["src/pages/team.astro", "src/scripts/teamPanel.ts", "src/pages/api/team.ts", "src/pages/api/team/clients.ts", "src/pages/api/team/clients/[id].ts", "src/lib/team-clients.ts", "src/lib/invitations.ts", "src/lib/user-admin.ts", "src/lib/app.ts", "src/layouts/Layout.astro", "src/pages/settings.astro", "src/pages/invite/[token].astro", "src/pages/signup.astro", "src/scripts/socialContent.ts", "src/pages/api/social-content/[id].ts", "src/lib/stored-files.ts", "src/lib/validation-http.ts", "src/scripts/validationRequest.ts", "src/pages/admin/users/[id].astro", "public/apps/nuvora/vocabulary.js"]
---

In Nuvora, a **team** is a group of people who share one pool of credits. Everything the team does with AI is paid from the team's credits first. A team can also work for **clients**: the companies it writes LinkedIn posts for. Open **Team** in the menu.

## Working alone or in a team

**Working alone?** You are a team of one, and nothing changes for you: the credits you buy pay for what you do. The Team page says **Just you, for now**. Invite someone and they start sharing the team's credits with you.

**In a team**, the page says how many people share the team's credits, and lists them under **Members**. An admin also sees the team's balance there, under **Team credits**.

![The Team page of a new team: Just you, for now, the team name with Save the name, Team credits at $0.00 with Buy credits, the Members card with one admin and No limit for admins, then the Invite someone, Clients and Invoices and sign-in cards](/images/help/your-team-members.webp)

## The four roles

Nuvora has four roles.

| Role | What they do |
|---|---|
| **Admin** | Runs the team: invites people, answers requests to join, chooses each person's role, sets each creator's daily limit, pauses a login, renames the team, adds clients and gives their people a login, buys the team's credits, and writes the team's skills and agents (**Team skills** and **Team agents** in the menu). Admins have no daily limit. |
| **Creator** | Makes the work: writes and publishes LinkedIn posts and runs the LinkedIn ad account, paid actions included, with the team's credits and within the daily limit an admin may set. Can also buy credits of their own. Says which client a post is made for, and sends work for approval in [Validation](/help/validation). |
| **Viewer** | Sees the team's work. Creates nothing and spends nothing. |
| **Client** | A person at one of the companies the team works for, given a login by an admin. Sees only what was made for their company, in their [Client space](/help/client-space): downloads it, comments on it and approves it. Holds no credits and spends nothing. |

The person who creates a team is its first admin. Your own role is shown in **User Settings**, under your picture at the top right, with a line that says what it allows.

### Modules and rights per person

Beyond the role, each person's access can be fitted more finely:

- **Modules**: a module switched off for someone disappears for them entirely, menu and pages. The modules are **Posts**, **Calendar**, **LinkedIn Ads**, **Validation**, **Ask**, **Agents**, **Assets Library**, **Image editor** and **Skills**.
- **Rights**: what a person may do in each area (see it, create in it, change it, delete from it), graded on **Posts**, **Publishing and scheduling**, **LinkedIn Ads**, **Validation**, **Assets**, **Image editor**, **Ask**, **Agents**, **Skills**, **Team members**, **Team settings** and **Shared credits**. Each right follows the person's role until it is changed for them.

An admin changes both on the person's own page: on the Team page, click **Details** in their row, adjust the **Modules** and **Rights, module by module** cards, then click **Save changes**. **Back to the team** returns to the list. Nobody can change their own rights.

## Invite someone

Admins see the card **Invite someone**. It is for the people of your team; a client's people get their login on the **Clients** card instead (see [Clients](#clients)).

1. Type the person's **First name**, **Last name** and **Email**.
2. Pick the **Role**: **Creator**, **Viewer** or **Admin**.
3. Click **Send the invitation**.

They receive an email with a link to choose their password and join the team. On that page they tick the Terms of Service and click **Join and sign in**. A new creator shares the team's credits with no limit until an admin sets one.

Pending invitations are listed under **Waiting for an answer**, each with its role and **Link valid until** and a date, or **The link has expired**. An invitation stays valid for 7 days. **Cancel the invitation** stops its link from working. To invite someone again after the link expired, send a new invitation.

An address that already belongs to another team can't be invited: the page says "This person already belongs to another team. Ask a super admin to move them." Write to us through **Contact us** in the footer if that happens.

## Requests to join

When someone signs up with **Join a team** and names your team or an admin's email address, the request appears under **Requests to join**, with the date they asked.

- **Accept as creator**: they receive an invitation by email, where they choose their password.
- **Decline**: the request is dropped.

## Daily limit on the team's credits

For each creator, an admin can set a daily limit, in US dollars, on the team's credits. Type the amount in the person's row and click **Save**. Leave the field empty for no limit. Under the field, **Used today** shows what they have drawn from the team's credits today.

The limit resets at midnight UTC. A creator who reaches it continues on their own credits, if they bought some. Otherwise their AI runs are refused until the next day. See [Balance and payments](/help/balance-and-payments).

Admins have no daily limit, and their row says **No limit for admins**. A viewer's row says **A viewer spends nothing**.

Members who are not admins see the list of people and their roles, with this line: "Everyone here creates from the team's credits. Your administrators decide who joins and how much each member may use a day."

## Change a role

In a person's row, pick **Creator**, **Viewer** or **Admin** in the role list. The change applies at once, and a line at the top of the page confirms it. You can't change your own role.

## Pause a login

**Pause login** stops a person from signing in, after you confirm. Nothing they made is lost, and they are told by email. **Let back in** restores their access at any time, and they are told again. Each row also shows **Last seen** with a date, or **Never signed in**.

You can't pause your own login.

## Clients

The **Clients** card, for admins, lists the companies your team works for. Their people sign in to see only what was made for their company: they open it, download it, comment on it, and approve it when asked. They create nothing and spend nothing.

### Add a client

1. Under **New client**, type the company's name.
2. Click **Add the client**.

The page confirms that the client is added and invites you to give its people a login. Two clients of the same team can't share a name.

To rename a client, change the name in its field and click **Rename**.

### Give a client's people a login

Each client has its own small form under its name.

1. Type the person's **First name**, **Last name** and **Email**.
2. Click **Give them a login**.

They receive an invitation by email, with the role Client, and choose their password on the invitation page as anyone else would. Until they do, they are listed under their client as **Invited**, with **Link valid until** and a date, and **Cancel the invitation** next to them. A client with nobody yet reads **Nobody from this client can sign in yet.**

Once they have signed in, each login shows its email and **Last seen**, or **Never signed in**. **Pause login** stops that person from signing in, and **Let back in** restores it.

### Make a post for a client

Nothing reaches a client until you say it was made for them. Creators and admins do that on the post itself, in [Posts](/help/linkedin-posts#made-for-a-client): once your team has at least one client, the post shows a **Made for** list in its header. Pick the client, and the choice is saved at once. The post's pictures, and the copy of its text in the [Assets Library](/help/assets-library), are tagged for the same client.

Pick **No client: the team only** to take a post back from a client. The team keeps seeing everything it made, whoever it was made for.

When you send a piece to [Validation](/help/validation#clients-as-validators), the validator list holds your colleagues, then each client's people under **Client:** and the client's name. A piece made for a client can only go to that client's people or to a colleague. Naming a client's person on a piece made for nobody yet makes it that client's, so its people can open it.

### What a client sees

A client login lands on its **Client space**, titled **Made for** and its company's name. It holds what the team made for that company, newest first: posts, pictures and files. It never shows a cost. Its menu has only **Client space** and **Validation**, and it holds no credits. Downloads by a client are paid from the team's credits. See [Client space](/help/client-space).

### Delete a client

**Delete the client** asks you to confirm first. What was made for the client stays with the team, no longer tagged for anyone, and the client's logins are paused. Their pending invitations stop working.

## Invoices and sign-in

The **Invoices and sign-in** card, for admins, holds two decisions the team takes for itself.

- **Invoiced to (a person or the company)**, **Invoices sent to** and **Billing address**: the team's billing details. Click **Save the invoice details**. Every invoice for the team's credits is made out to the team's name, at the email address under **Invoices sent to** and the **Billing address**, and the next invoice carries any change.
- **Ask for a code sent by email at each sign-in**: after the password, every member types a 6-digit code mailed to them. A browser they choose to trust skips it for 30 days. The switch is on for a new team. See [Account and sign-in](/help/account-and-sign-in).

## Rename the team

Admins see the team's name in an editable field at the top of the page. Change it and click **Save the name**. A team name needs at least 2 characters.

The same card shows admins the team's balance, under **Team credits**, with a **Buy credits** button. See [Balance and payments](/help/balance-and-payments).
