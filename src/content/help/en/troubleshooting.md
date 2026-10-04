---
title: "Troubleshooting"
seoTitle: "Troubleshooting and error messages | Nuvora Help"
description: "What Nuvora's messages mean and what to do: an empty balance, a promotional code refused, a file too large, the Assets Library and the Image editor, signing up and signing in, invitations, clients, validation, LinkedIn posts and connections, LinkedIn Ads, Ask and agents."
excerpt: "The messages Nuvora shows when something stops, what each one means, and how to get going again."
section: "troubleshooting"
order: 16
updated: 2026-10-04
appPaths: ["/billing", "/files", "/files/tools/image-editor", "/signup", "/login", "/invite", "/team", "/client", "/validation", "/social/linkedin/posts", "/my-connections", "/ads/linkedin", "/ads/linkedin/library", "/ask", "/agents"]
audience: "Everyone"
related: ["balance-and-payments", "assets-library", "account-and-sign-in", "your-team", "client-space", "validation", "linkedin-posts", "my-connections", "linkedin-ads", "ask", "agents"]
shots: []
sources: ["src/lib/credits.ts", "src/scripts/creditsPanel.ts", "src/scripts/creditChip.ts", "src/pages/api/billing/checkout.ts", "src/lib/promo.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/pages/api/files/folders/[id].ts", "src/pages/files/tools/image-editor.astro", "src/scripts/imageEditor.ts", "src/scripts/clientSpace.ts", "src/lib/signup.ts", "src/pages/signup.astro", "src/pages/api/signup/verify.ts", "src/pages/api/login.ts", "src/lib/mfa.ts", "src/pages/reset-password.astro", "src/lib/invitations.ts", "src/pages/invite/[token].astro", "src/pages/api/team.ts", "src/lib/team-clients.ts", "src/pages/api/client/index.ts", "src/pages/api/social-content/[id].ts", "src/lib/validation-http.ts", "src/lib/validation-lock.ts", "src/pages/api/validation/[id]/comments.ts", "src/middleware.ts", "src/scripts/socialContent.ts", "src/pages/api/social-content/draft.ts", "src/scripts/socialAccounts.ts", "src/pages/api/social/callback/[platform].ts", "src/pages/api/social/accounts/[id].ts", "src/scripts/connectionCheckNotice.ts", "src/scripts/personalConnections.ts", "src/lib/user-linkedin-ads.ts", "src/pages/api/linkedin-ads/manage.ts", "src/pages/api/linkedin-ads/search.ts", "src/scripts/linkedinAds.ts", "src/pages/api/intelligence/ask.ts", "src/scripts/askIntelligence.ts", "src/pages/api/agents/custom.ts", "public/apps/nuvora/vocabulary.js"]
---

Find the message you see in the first column. In the messages below, a name in square brackets stands for your own file, amount or account.

## Balance

| Message | What it means | What to do |
|---|---|---|
| **You are out of AI credits ([amount] left).** | Your balance is empty, so paid runs are refused. The top bar reads **Buy credits**. | Top up on **Credits** > **Buy credits**. See [Balance and payments](/help/balance-and-payments). |
| **You are out of AI credits. Every AI feature is switched off until you buy more. Nothing else in the product is affected.** | Shown on **Buy credits** when your balance is empty. Everything that isn't an AI run keeps working. | Buy credits, or ask an admin to top up the team. |
| **Your team is out of AI credits ([amount] left) and you have no credits of your own.** | The team balance is empty and your own balance is too. | Ask an admin to top up the team balance, or top up your own. |
| **You have used today's allowance of your team's credits** | You reached the daily limit an admin set you on the team balance. It resets at midnight UTC. | Wait for the reset, top up your own balance, or ask an admin to raise your limit. See [Your team](/help/your-team#daily-limit-on-the-teams-credits). |
| **You have no allowance on your team's credits yet** | An admin set your daily limit to zero. | Ask an admin to set a limit on the Team page, or top up your own balance. |
| **Only an administrator can buy credits for [team].** | Only admins top up the team balance. | Pick **Your account** to buy for yourself, or ask an admin. |
| **Automatic top-up is paused.** | The saved card was declined. | Check the card, then click **Try again**, or **Replace card**. |
| **Please accept the Terms of Service to continue.** | The box before your first purchase is not ticked. | Tick it, then pay. |

## Promotional codes

| Message | What to do |
|---|---|
| **That promotional code does not exist.** | Check the spelling. |
| **That promotional code has expired.** or **That promotional code is no longer available.** | The offer has ended. |
| **That promotional code is not open yet.** | The offer hasn't started. Try again once it opens. |
| **This code applies from $[amount] of credits.** | Raise the amount to at least the figure shown. |
| **You have already used that promotional code.** or **That promotional code has been fully used.** | The code can't be used again. |
| **That promotional code is not available on this account.** | The code is reserved for another account. Try the other tab (your team or **Your account**). |

## Files too large or not accepted

| Message | What to do |
|---|---|
| **That file is too large (limit [n] MB).** | The Assets Library takes files up to the size shown at the top of the library. Use a smaller file. |
| **That file is not a picture the editor can open. Try a JPG, PNG or WebP file.** | The file you dropped on the Image editor is not a picture it reads. Convert it. |
| **Your browser cannot open this picture. Try a JPG, PNG or WebP file.** | Your browser can't read this kind of picture. Convert it. |

## Assets Library and the Image editor

| Message | What it means | What to do |
|---|---|---|
| **Only the person who added this asset can delete it.** | A file can be deleted only by the person who added it. | Ask them to delete it. |
| **This folder holds assets added by other people. Only the person who added an asset can delete it.** | A folder can be deleted only when every file inside it is yours. | Ask the people who added the other files to move or delete them, then delete the folder. |
| **That picture could not be opened for editing.** | The picture could not be read from the library. | Close the editor and try again in a moment. |
| **That picture could not be added.** | The logo or picture you placed over yours could not be read. | Try another file, a PNG or a JPG. |
| **The picture could not be written. Try a smaller size.** | The picture is too large for your browser to save at that size. | Lower the **Width**, then save again. |
| **Leave the editor?** | You are closing the editor with changes that aren't saved. | **Keep editing**, then save; or **Leave without saving** to drop them. |
| **The download link could not be made.** | A download from the Client space could not start. | Try again in a moment. |

## Signing up and signing in

| Message | What it means | What to do |
|---|---|---|
| **This code is not valid, or it has expired. Request a new one.** | The sign-up code is wrong or older than 20 minutes, or it was mistyped too many times. | Click **start again** and ask for a new code. |
| **Temporary mailboxes cannot open an account. Please use your work or personal address.** | Disposable addresses are refused. | Use a real address. |
| **This address already has an account. Sign in instead.** | The address already has a login. | Sign in, or click **Forgot password?**. |
| **Invalid login or password.** | The email or the password is wrong. | Check both, or click **Forgot password?**. |
| **This account has been suspended. Contact your administrator.** | An admin paused your login. | Ask an admin of your team. |
| **That code is not right. [n] attempts left.** | The sign-in code was mistyped. | Check the email and type it again. |
| **This code is not valid, or it has expired. Sign in again to get a new one.** | The sign-in code is wrong or older than 10 minutes. | Sign in again, or click **Send another code**. |
| **Too many wrong codes. Sign in again to get a new one.** | The sign-in code was mistyped too many times. | Sign in again. |
| **A code was already sent three times. Please sign in again in a few minutes.** | Too many codes were asked for. | Wait a few minutes, then sign in again. |
| **Please wait [n] seconds before asking for another code.** | A new code was asked for too soon. | Wait, then click **Send another code**. |
| **This link is invalid or has expired** | A password reset link works once and for about an hour. | Click **Request a new link**. |

## Invitations and teams

| Message | What it means | What to do |
|---|---|---|
| **This invitation has expired** | Invitations stay valid for a week. | Ask the person who invited you to send a new one. |
| **This invitation was already used** | The account it opened already exists. | Sign in with the invited address. |
| **This invitation does not exist** | The link is incomplete or was cancelled. | Ask for a new invitation. |
| **This invitation is not valid any more. Ask for a new one.** | The link expired or was cancelled while you were on the page. | Ask for a new invitation. |
| **This person already belongs to another team. Ask a super admin to move them.** | An address can belong to one team only. | Write to us through **Contact us** in the footer. |
| **This person is already a member of the team.** | They are already in your team. | Nothing to do. |
| **Give the team a name of at least 2 characters.** | A team name is too short. | Type a longer name. |

## Clients and Made for

| Message | What it means | What to do |
|---|---|---|
| **Give the client a name.** | The name of a new or renamed client is empty. | Type the company's name. |
| **Your team already has a client called [name].** | Two clients of a team can't share a name. | Pick another name, or use the client you already have. |
| **Only a team administrator manages the clients.** | Creators and viewers can't add, rename or delete a client. | Ask an admin. |
| **Choose the client this person works for.** | A client login must belong to one of your clients, and this one was not found, often because it was just deleted. | Reload the page and use the form under the right client on the **Clients** card. |
| **Only a creator or an administrator says who a piece was made for.** | Viewers can't change **Made for**. | Ask a creator or an admin. |
| **This client is not one of your team.** | The client was deleted meanwhile. | Reload the page and pick again. |
| **Your login is not attached to a client any more. Ask the team that invited you.** | Seen by a client login whose client was removed. | Contact the team that invited you. |

## Validation

| Message | What it means | What to do |
|---|---|---|
| **This piece was made for another client. Ask one of that client's people, or a colleague.** | A piece made for one client can only be approved by that client's people or by a teammate. | Pick someone of the right client, or a teammate. |
| **The validator must be a member of your team.** | The person picked is not in your team, or no longer is. | Pick another validator. |
| **This asset is waiting for validation. It cannot be changed or deleted until the validator decides.** | The post or file is locked while it waits. | Ask the validator, or an admin, to decide. |
| **Your role (viewer) is read-only.** | Viewers can't send, comment or decide. | Ask an admin to make you a creator, or name another validator. |
| **Write the comment first.** | The comment box is empty. | Write the comment, then send it. |

## LinkedIn posts and connections

| What you see | What it means | What to do |
|---|---|---|
| **Not saved:** next to **Save**, with a reason | The post could not save itself. Your text is still on screen, and the next keystroke tries again. | If it keeps failing, copy your text somewhere safe and reload the page. |
| **No draft came back. Please try rephrasing the brief.** | The model returned nothing usable. | Rephrase the brief and try again. |
| **The draft ran past the length the model can answer in and came back cut off.** | The answer was cut before it was complete. | Shorten the brief, or ask for a shorter post, and try again. |
| **Schedule** and **Publish now** stay locked | No account is ticked under **Who it goes out as**. | Tick your profile or a page. |
| **No account is connected on LinkedIn yet.** | The **Publish automatically** tab needs a connected LinkedIn account. | Click the button under the message to open My Connections, or use **Publish manually**. See [My Connections](/help/my-connections#connect-linkedin). |
| **Your account has stopped working and is waiting to be reconnected.**, or **Reconnect** on an account's tile | The connection ran out or was withdrawn. | Click **Connect again** on its row on My Connections. |
| A company page is missing after you connect | LinkedIn doesn't list you as an administrator of that page. | Ask the page owner to add you, then connect again. |
| **The network authorized us but returned no account to publish on.** | LinkedIn let Nuvora in but sent back no profile or page. | Check that you signed in to the right LinkedIn login, then try again. |
| **This connect link has expired or was already used. Start again from the card.** | The sign-in link from Nuvora to LinkedIn was already used, or is too old. | Click **Connect an account** again. |
| **[n] post is still scheduled on this account. Cancel it first, or switch the account off instead of removing it.** | An account can't be removed while something is queued on it. | Cancel the scheduled posts, or click **Switch off**. |
| **Some connections need attention** in a notification at the bottom right of the screen | The check after sign-in found a connection that no longer lets Nuvora in. | Click **Reconnect**, sign in again on the card that opens, then **Check again** on the notification. See [My Connections](/help/my-connections#the-connection-check-after-you-sign-in). |

## LinkedIn Ads

| Message | What it means | What to do |
|---|---|---|
| **LinkedIn Ads is not connected. Connect your own LinkedIn access on My Connections.** | You haven't connected a LinkedIn login for the ad account. | Click **Open My Connections**, then **Connect LinkedIn Ads**. See [My Connections](/help/my-connections#your-linkedin-ad-accounts). |
| **No LinkedIn ad account is chosen. Tick the accounts you manage on My Connections.** | Your LinkedIn login is connected but no ad account is ticked. | Tick at least one ad account on its card. |
| **This LinkedIn login opens no ad account** | The login you connected has no role on any ad account. | Connect the LinkedIn login that has a role on the account in Campaign Manager. |
| **This LinkedIn ad account is not among the accounts you manage. Tick it on My Connections first.** | The account picked is not ticked on My Connections. | Tick it, then come back. |
| **Your LinkedIn role on this ad account can read campaigns but not change them. An account manager can raise it in Campaign Manager.** | Your role on LinkedIn's side is read-only. | Ask an account manager of the ad account to raise your role in Campaign Manager. |
| **You may read LinkedIn Ads but not change it. Ask your administrator.** | Your rights in Nuvora let you read the ad account only. | Ask an admin of your team. |
| **Enter a keyword or an advertiser to search.** | An Ad Library search needs a keyword or an advertiser. | Type one, then click **Search ads**. |

## Ask and agents

| Message | What it means | What to do |
|---|---|---|
| **That question is too long. Please shorten it.** | A question holds up to 1,000 characters. | Shorten it, and ask a follow-up for the rest. |
| **No answer came back. Please try rephrasing.** | The model returned nothing usable. | Rephrase the question and ask again. |
| **Web search** stays on **OFF** | Web search is switched off for your team, or the model can't search the web. | Ask an admin, or pick a model that searches the web. |
| **Give the agent a name.** | A new agent needs a name. | Type one. |
| **Write the agent's instructions (at least 20 characters).** | The instructions are empty or too short. | Say what the agent should watch and report. |
| **Pick at least one data source for the agent.** | An agent needs something to read. | Pick a data source in the agent's form. |
| **Your role is read-only.** | Viewers can't create or change an agent. | Ask an admin to make you a creator. |

## Still stuck?

Use **Report a bug** or **Contact us** in the footer of every page. Tell us what you clicked, what you expected, and the exact message you saw.
