---
title: "我的连接"
lang: "zh"
seoTitle: "连接 LinkedIn 个人主页、公司主页和广告账户｜Nuvora 帮助中心"
description: "Nuvora 的“我的连接”：给 LinkedIn Ads 页面用的 LinkedIn 广告账户，用来发帖的 LinkedIn 个人主页和你管理的公司主页，连接能维持多久、怎么续期，以及登录后的连接检查。"
excerpt: "连上你自己的 LinkedIn 个人主页、公司主页和广告账户，让它们一直有效，哪一个需要重新登录，你第一时间就知道。"
section: "account"
order: 12
updated: 2026-10-04
appPaths: ["/my-connections", "/connections-check"]
audience: "除客户登录账号外的所有人"
related: ["linkedin-posts", "linkedin-ads", "calendar", "agents", "account-and-sign-in", "troubleshooting"]
shots:
  - file: "/images/help/my-connections-page.zh.webp"
    route: "/my-connections"
    alt: "尚未连接任何账号的“我的连接”页面：先是“你的 LinkedIn 广告账户”卡片，里面有 LinkedIn Ads、未连接和“连接 LinkedIn Ads”；下面是“您的社交账号”卡片，LinkedIn 卡片列出四个步骤"
    captured: 2026-10-04
sources: ["src/pages/my-connections.astro", "src/scripts/personalConnections.ts", "src/scripts/socialAccounts.ts", "src/pages/api/social/connect/[platform].ts", "src/pages/api/social/callback/[platform].ts", "src/pages/api/social/accounts/[id].ts", "src/pages/api/connections/personal.ts", "src/pages/api/connections/linkedin-ads.ts", "src/lib/social/connect-guide.ts", "src/lib/social/scheduler.ts", "src/lib/social/notify.ts", "src/lib/connection-health.ts", "src/pages/api/connections/health.ts", "src/scripts/connectionCheckNotice.ts", "src/pages/connections-check.astro", "src/middleware.ts", "src/lib/app.ts", "src/layouts/Layout.astro", "src/pages/settings.astro"]
---

**我的连接** 是你接入自己 LinkedIn 的地方。一类是你的个人主页和你运营的公司主页，帖子以你本人或该主页的名义发出；另一类是你的 LinkedIn 广告账户，LinkedIn Ads 页面读的就是你自己的广告系列。点右上角的头像，再选 **我的连接**。**账户设置** 里的 **您的连接** 一节也通到这里，按 **打开“我的连接”** 即可。

页面上有两张卡片：先是 **你的 LinkedIn 广告账户**，然后是 **您的社交账号**。

![尚未连接任何账号的“我的连接”页面：先是“你的 LinkedIn 广告账户”卡片，里面有 LinkedIn Ads、未连接和“连接 LinkedIn Ads”；下面是“您的社交账号”卡片，LinkedIn 卡片列出四个步骤](/images/help/my-connections-page.zh.webp)

## 只归你一个人

在这里接上的一切都只属于你。团队里其他任何人，管理员也不例外，既看不到，也不能借它发帖，更不能通过它读你的广告账户；反过来，你也用不了同事的。凡是要发帖或要读广告账户的人，都各自连接自己的 LinkedIn。

登录是在 LinkedIn 自己的页面上完成的，Nuvora 永远看不到你的密码。连接本身不会发布任何内容，也不花一分钱。

客户登录账号打不开“我的连接”：他们不发布任何内容。

## 你的 LinkedIn 广告账户

**LinkedIn Ads** 卡片里放的是广告账户，LinkedIn Ads 页面以你本人在 LinkedIn 上的角色，在这些账户里读取和管理你的广告系列。在你亲自开启某个广告系列之前，不会产生任何花费。

1. 点 **连接 LinkedIn Ads**，LinkedIn 在当前标签页打开。
2. 用在 Campaign Manager 里已有该广告账户访问权限的 LinkedIn 账号登录，并授权。
3. 回到“我的连接”，卡片上显示这个登录账号，下面是 **你用此登录管理的账户**：它能打开的每个广告账户都在这里，各自带着名称、编号和币种。
4. 勾选你管理的广告账户。每勾一个都立即保存，卡片提示 **已保存。LinkedIn Ads 页面会提供你勾选的账户。** 你在 LinkedIn Ads 页面上正在使用的那个账户，在这里带一个 **已在使用** 标签。

如果这个登录账号一个广告账户都打不开，卡片会显示 **此 LinkedIn 登录账号无法打开任何广告账户**：换用在 Campaign Manager 里对该账户有角色的那个账号登录。

**多个 LinkedIn 登录账号也没问题。** 连上一个之后，会出现一段提示：“还用另一个 LinkedIn 登录账号管理广告账户？也把它连接上：它的账户会加入 LinkedIn Ads 页面的选择器。”点 **连接另一个 LinkedIn 登录账号**，用那个账号登录即可。每个登录账号都有自己的一张卡片，勾选也各管各的。

登录账号卡片上的 **断开连接** 会先请你确认，然后把它移除：它的广告账户从 LinkedIn Ads 页面上消失，直到你重新连接；你当初给的授权也随之撤销。

广告账户能拿来做什么，仪表盘、广告系列和广告库，详见 [LinkedIn Ads](/zh/help/linkedin-ads)。

## 你的社交账号

这张卡片放的是你发帖用的账号：你的 LinkedIn 个人主页，以及你在上面运营的公司主页。LinkedIn 是 Nuvora 唯一发布的社交网络。

### 连接 LinkedIn

**LinkedIn** 卡片上列着步骤：

1. 点 **连接账户**，LinkedIn 在当前标签页打开。
2. 用你自己的账号登录 LinkedIn，点 **允许**。
3. 你的个人主页回到这里，LinkedIn 上已把你列为管理员的公司主页也一并回来。
4. 保留你的个人主页和你要为其发帖的公司主页，其余的移除。

回到页面后，会有一行字告诉你回来了几个账号，例如 “1 account connected. It is yours alone: nobody else in the workspace can publish on it. Remove anything you did not mean to connect.”

回来的是这个浏览器里 LinkedIn 当前已登录的账号。要连接另一个 LinkedIn 账号，先在 LinkedIn 上切换成那个账号登录，再点卡片上的 **连接另一个账号**。

少了某个公司主页，说明 LinkedIn 没有把你列为它的管理员。请主页所有者把你加进去，再连接一次。

### 已连接的账号

接上之后，LinkedIn 卡片会计数（**已连接 1 个**），并列出每个账号的名称和状态；点名称就跳到下方对应的那一行。每一行显示账号名称、**LinkedIn** 和账号标识、类型（**资料** 或 **页面**）、**仅您本人**，以及最近一次发帖的日期。四个按钮可以操作它：

- **重命名**：改的是它在 Nuvora 里显示的名字，两个主页长得很像时很管用。
- **关闭**：停用这个账号，不能再往上面排新帖子，已在队列里的也不会发出。**开启** 让它恢复。
- **重新连接**：重走一遍 LinkedIn 登录，为连接续期。
- **移除**：确认后删除这条连接。此后不能再用它发布，已经发出的帖子仍留在 LinkedIn 上。只要账号上还有排期中的帖子，移除就会被拒绝：先取消那条帖子，或者改为关闭这个账号。

### 连接能维持多久

一条 LinkedIn 连接有效期 60 天，点一下 **重新连接** 就能续期。

每一行都有一条状态：

| 状态 | 含义 |
|---|---|
| **Connected, 45 days left**（天数会变化） | 一切正常。 |
| **Connect it again within 5 days**（天数会变化） | 一周之内就会到期。现在就点 **重新连接**。 |
| **重新连接后即可发布** | 连接已过期，或在 LinkedIn 上被撤销了授权。在你重新连接之前，排在上面的帖子都不会发出。 |
| **Switched off** | 你把它关闭了。 |
| **Something went wrong on the last send**，或 LinkedIn 自己给出的原因 | 上一次发布失败，原因如所示。 |

连接到期前大约一周，Nuvora 会发邮件提醒你，LinkedIn 再过几天就会停止发布，邮件里附一个 **重新连接** 链接，直通这一页。如果还是到期了，你会收到第二封邮件，告诉你需要重新连接；队列里的内容一样也不会丢，重新连接只需点一下。

## 登录后的连接检查

你一登录，Nuvora 就会检查你建立并保持开启的 LinkedIn 连接：你的社交账号和你的 LinkedIn 广告登录账号。访问权限可能悄无声息地失效，比如你改了 LinkedIn 密码，或在 LinkedIn 上撤销了授权；要是没有这项检查，你往往要等到帖子发布失败才发现。

检查从不耽误你。第一个页面立刻打开，检查在后台运行，在 **动态** 里显示为一条 **连接检查**；结果会以通知的形式出现在屏幕右下角，不论你当时在哪个页面，而且从不遮挡页面：

| 结果 | 通知显示什么 |
|---|---|
| 一切正常 | **所有连接均正常**。底边有一条细线逐渐缩短，大约七秒后通知自行消失。 |
| 有连接需要处理 | **部分连接需要处理**，下面每个账号一行，写着名称、账号标识和“访问权限已过期或已被撤销，请重新登录该账户。”在这个标签页里，通知会跟着你从一页换到另一页，直到你关掉它，或者新一轮检查不再发现问题。 |
| 检查失败 | **连接检查未能完成**。你的连接没有经过测试。 |

在需要处理的账号上，**重新连接** 会在新标签页打开“我的连接”，直接定位到对应的卡片。在那里重新登录，回来后点通知上的 **重新检查**。检查结果是需要处理或失败时，通知上还有 **详情**，它会在新标签页打开完整的检查页 **您的连接**，并把所有连接重新测一遍。

要关闭通知，点它角上的叉（提示文字是 **忽略**），或者按 Esc 键。

你关闭的账号不参加检查。什么都没连接时，不会检查，**动态** 里也不会出现这一条。每次登录只检查一次。
