---
title: "Validation"
seoTitle: "Get LinkedIn posts and files approved | Nuvora Help"
description: "Send a LinkedIn post or a file for approval to a teammate or to one of your client's people, decide on it, submit new versions and comment, all on one thread."
excerpt: "Send a post or a file for approval, keep every version and comment on one thread, and let a client approve what was made for them."
section: "linkedin"
order: 5
updated: 2026-10-04
appPaths: ["/validation", "/validation/[id]"]
audience: "Everyone; clients approve what was made for them"
related: ["linkedin-posts", "your-team", "client-space", "assets-library"]
shots:
  - file: "/images/help/validation-page.webp"
    route: "/validation"
    alt: "The Validation page titled Assets to validate, with the Send an asset for validation button and the Waiting for me, My requests and All assets tabs, each at 0, above the line Nothing waits for your validation"
    captured: 2026-10-04
sources: ["src/lib/app.ts", "src/middleware.ts", "src/pages/validation/index.astro", "src/pages/validation/[id].astro", "src/scripts/validationPanel.ts", "src/scripts/validationRequest.ts", "src/scripts/validationAsset.ts", "src/pages/api/validation/index.ts", "src/pages/api/validation/[id].ts", "src/pages/api/validation/[id]/comments.ts", "src/pages/api/validation/[id]/decision.ts", "src/pages/api/validation/[id]/versions.ts", "src/pages/api/validation/upload.ts", "src/lib/validation-db.ts", "src/lib/validation-http.ts", "src/lib/validation-mail.ts", "src/lib/validation-lock.ts", "src/lib/team-clients.ts", "src/scripts/socialContent.ts", "public/apps/nuvora/vocabulary.js"]
---

Validation is how someone approves your work before it goes out on LinkedIn. You send a post or a file to a teammate, or to one of the people of the client it was made for. They approve it or send it back with a comment. Every version and every comment stays on one thread.

On this page, the requester is the person who sent the piece, and the validator is the person asked to approve it.

## The round trip

1. You send a piece for validation and name a validator.
2. The validator gets an email with the link.
3. They open it, then click **Validate**, or **Send back** with a comment.
4. You get the decision by email.
5. If it was sent back, you submit a new version on the same thread, and the validator gets another email.

The back and forth can take as many rounds as it needs. Nothing is deleted along the way.

## The Validation page

Open **Validation** in the menu. The page is titled **Assets to validate** and has three tabs, each with a count:

- **Waiting for me**: what waits for your decision.
- **My requests**: everything you sent for validation.
- **All assets**: everything your team sent for validation.

The table shows each piece with its **Type**, **Version**, **Status**, who it was **Requested by**, the **Validator** and the **Last activity**. Your own name carries "(you)". Click a row to open the piece.

| Status | What it means |
|---|---|
| **Waiting for validation** | The current version waits for the validator's decision. |
| **Validated** | The current version was approved. |
| **Not validated** | The current version was sent back. A new version is expected. |

![The Validation page titled Assets to validate, with the Send an asset for validation button and the Waiting for me, My requests and All assets tabs, each at 0, above the line Nothing waits for your validation](/images/help/validation-page.webp)

## Send a post for validation

Open the post in **Posts**. In the bar under the post's preview, next to **Save**, click **Send for validation**. See [LinkedIn posts](/help/linkedin-posts).

The dialog opens already filled in: the post goes as a **Social post**, with its text as it stands on screen, unsaved edits included. Each picture of the post goes along as a link to the picture in the Assets Library, so the validator sees the whole post.

1. Check the **Title**.
2. Pick the **Validator**: a teammate, or one of a client's people, listed under **Client:** and the client's name.
3. Add a **Message to the validator** if you want: what to look at, the deadline, the context.
4. Click **Send for validation**.

The thread opens in a new tab, and the validator is emailed.

Sending the same post again doesn't open a second thread: it adds a new version to the existing one.

## Send a file from the Validation page

**Send an asset for validation** sends anything else: a visual, a document, a text, a link.

1. Give it a **Title** and pick its **Type**: **Text**, **Image**, **Video**, **Social post**, **File** or **Other**.
2. Pick the **Validator**.
3. Add the piece: **Upload a file** (any format), **Paste a text**, or **Give an address** (a link that starts with http:// or https://).
4. Add a message if you want, then click **Send for validation**.

An uploaded file goes to your team's Assets Library and counts toward storage. The piece's page opens once it is sent.

## Clients as validators

When a post or a file was made for a client (see [Your team](/help/your-team)), you can ask one of that client's people to approve it. They open it from the email or from their [Client space](/help/client-space), and decide like anyone else.

- A piece made for one client can only go to that client's people, or to a teammate. Naming someone from another client is refused: "This piece was made for another client. Ask one of that client's people, or a colleague."
- Naming a client's person on a piece made for nobody yet makes the piece that client's: from then on, its people see it.
- Every new version of a thread made for a client is shown to that client too.

A client sees only the threads of its own company. It can comment on them and decide when it is the validator, but it can't send anything for validation, submit a version or change the validator.

## What the validator receives

An email titled "To validate:" followed by the piece's title, with a button that opens it. A new version sends "New version to validate:" and the title. When the piece is a file of the Assets Library, the button reads **Open in the Assets Library**, and the mail also carries the link to the thread.

## The piece's page

At the top: the type, the status, the title and one tab per version (**v1**, **v2** and so on), the current one marked **(current)**. Under the title: who it was **Requested by** and the **Validator**. Each version says when it was **Submitted** and by whom, and once decided, when it was **Validated** or **Sent back**. **All assets**, in the band, goes back to the Validation page.

The version is shown right in the page: a text in full, an image, a video or a PDF inline with **Open the file** underneath, or a link that opens in a new tab. Click another version tab to compare.

On the right, the **Thread** lists every event and comment in order.

## Decide

When you are the validator and the current version is waiting, a form titled **Your decision on version 1** (or 2, 3 and so on) appears. An admin sees it too, and can decide in the validator's place.

1. Read or watch the version.
2. Write a **Comment**. It is required to send the version back.
3. Click **Validate** or **Send back**.

The requester is emailed your decision: "Validated:" or "Not validated:" and the title. Each version gets one decision: if something needs another look, the requester sends a new version.

## Submit a new version

As the requester, open **Submit a new version** on the piece's page. It opens by itself after a version was sent back, and you can use it at any time.

1. Upload a file, paste a text or give an address.
2. Say **What changed** if you want.
3. Click **Send version 2 for validation** (the button names the next version's number).

The status goes back to **Waiting for validation**, and the validator is emailed.

## Comment

Write in the **Thread** and click **Comment**. The other people on the thread are emailed.

## Change the validator

The requester, the validator or an admin can pick another validator from the **Validator** list on the piece's page. On a thread made for a client, the list offers your teammates and that client's people.

## While a post waits, it is locked

A post sent for validation shows **waiting for validation** in **Posts**, with the line "Waiting for validation: this post is locked until the validator decides. Nothing can be changed or deleted meanwhile." Until the validator decides, nobody can change or delete it, and it has no **Send for validation** button. Validated, the post becomes **approved**; sent back, it goes back to **draft**.

## Who can do what

| Action | Who |
|---|---|
| Open the Validation page and read a thread | Everyone in the team; a client, for its own company's threads |
| Send a piece, submit a new version | Creators and admins |
| Comment | Creators, admins, and a client on its own company's threads |
| Validate or send back | The named validator, or an admin |
| Change the validator | The requester, the validator, or an admin |

Viewers read only: they can be named validator but can't record a decision, so name a Creator, an Admin or a client's person instead.

## What it costs

The round trip costs nothing, and no AI is involved. A file you upload is kept in the Assets Library and billed as storage, like any file there. See [Assets Library](/help/assets-library#what-files-cost).

## Good to know

- You can't withdraw a request or delete a thread, a version or a comment. The history is kept on purpose. If a request is no longer needed, say so in the thread.
- A post already waiting for validation has no **Send for validation** button. Open it from the Validation page instead.
