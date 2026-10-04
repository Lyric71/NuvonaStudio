---
title: "Client space"
seoTitle: "Your client space: see, download and approve | Nuvora Help"
description: "For the people of a team's clients: signing in, what your Client space holds, opening and downloading the work, approving it or sending it back in Validation, and your account."
excerpt: "The team you work with made LinkedIn posts for your company. Here is how to find them, download them, comment on them and approve them."
section: "team"
order: 11
updated: 2026-10-04
appPaths: ["/client", "/validation", "/validation/[id]", "/settings", "/invite"]
audience: "Client logins"
related: ["validation", "account-and-sign-in", "your-team"]
shots: []
sources: ["src/pages/client.astro", "src/scripts/clientSpace.ts", "src/pages/api/client/index.ts", "src/lib/team-clients.ts", "src/lib/app.ts", "src/middleware.ts", "src/lib/auth.ts", "src/layouts/Layout.astro", "src/scripts/creditChip.ts", "src/pages/settings.astro", "src/lib/storage-billing.ts", "src/lib/stored-files.ts", "src/pages/validation/index.astro", "src/scripts/validationPanel.ts", "src/scripts/validationAsset.ts", "src/pages/api/validation/[id]/comments.ts", "src/lib/validation-http.ts", "src/lib/invitations.ts", "src/pages/invite/[token].astro"]
---

This article is for you if a team that uses Nuvora works for your company and gave you a login. Your login has the role **Client**. It shows you what the team made for your company, and nothing else of the team's work. You download it, comment on it, and approve it when the team asks you to.

A client login creates nothing and spends nothing. You hold no credits and see no prices.

## Sign in for the first time

The team's admin gives you a login. You receive an invitation by email.

1. Open the link in the email.
2. Choose your password, tick the Terms of Service, and click **Join and sign in**.

The link stays valid for 7 days. If it has expired, ask the team to send a new one. Next time, sign in with your email address and your password. If the team asks for it, a 6-digit code is also mailed to you at each sign-in: see [Account and sign-in](/help/account-and-sign-in).

You always land on your **Client space**. The menu holds two entries, **Client space** and **Validation**, and your account settings are under your picture at the top right.

## Your Client space

The page is titled **Made for** and your company's name. It lists everything the team made for your company, newest first and grouped by day.

The tabs in the dark band at the top keep one kind: **All**, **Images**, **Videos**, **Posts** or **Files**.

- **A post** takes a whole row: **LinkedIn**, its title and its text, its pictures beside it, and where it stands: **Published**, **Planned for** a date, or when it was last **Updated**. A published post has **See it live**, which opens it on LinkedIn. Click a picture to open it full size.
- **An image or a video** shows as a card with its name, its date, its size and **Download**. Click the picture to open it full size. Under **All**, a post's pictures are shown on the post only; under **Images**, each one also has its own card.
- **A file** shows its name, its date, its size and **Download**. The text of a post the team tagged for you can also be listed here as a file, whose name ends in `.md`.

You see the work itself. The costs stay with the team.

When nothing has been shared with your company yet, the page says so. What the team makes for you appears here as soon as they tag it for your company, and you receive an email when your approval is needed.

## Download

**Download** on a card saves the original file to your computer. The download costs you nothing: the team pays for it.

## Approve the team's work

When the team asks for your approval, a card at the top of your space lists what waits, for example **One piece waits for your approval**. Each line names the piece, says **You are the validator** (or **For your team at the company** when a colleague of yours was asked), and carries its state: **Waiting for approval**, **Approved** or **Sent back**. You also receive an email with a link.

1. Click the piece. Its page opens in **Validation**, with the version to review.
2. Read it, or look at it. Earlier versions, if any, sit in the tabs **v1**, **v2** and so on.
3. Write a **Comment**. It is required when you send the version back.
4. Click **Validate** to approve it, or **Send back** to ask for changes.

The team is emailed your decision. If you sent it back, they answer with a new version on the same page, and you are emailed again.

You can comment on any piece of your company that was sent for review, even when someone else is the validator: write in the **Thread** and click **Comment**. The other people on the thread are emailed. See [Validation](/help/validation).

The **Validation** entry of the menu lists the same threads, under **Waiting for me**, **My requests** and **All assets**. You only ever see your own company's. A client login answers on a thread; it never sends a piece for validation.

## Your account

Click your picture at the top right, then **User Settings**. There you change your name, your picture, your sign-in email and password, the appearance, the language, and the date and time formats. Your role reads **Client**: "Sees what the team made for your company, downloads it, comments on it and approves it." See [Account and sign-in](/help/account-and-sign-in).

**Sign out** is in the same menu.

## If something is wrong

| What you see | What to do |
|---|---|
| "Your login is not attached to a client any more. Ask the team that invited you." | The team changed its client list. Contact the person who invited you. |
| You can't sign in | The team may have paused your login. Contact the person who invited you. If you forgot your password, click **Forgot password?** on the sign-in page. |
| A page sends you back to your Client space | A client login opens only its space, Validation and its account settings. |
| Something you expected is missing | The team decides what it shares with your company. Ask them to tag it for you. |
