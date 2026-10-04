---
title: "Nuvora 快速上手"
lang: "zh"
seoTitle: "快速上手｜Nuvora 帮助中心"
description: "Nuvora 是什么，如何独自或和团队一起创建账户，如何登录，菜单怎样布局，以及如何撰写并发布你的第一篇 LinkedIn 帖子。"
excerpt: "几分钟内创建账户，摸清菜单，发出你的第一篇 LinkedIn 帖子。"
section: "getting-started"
order: 1
updated: 2026-10-04
appPaths: ["/signup", "/login", "/social/linkedin/posts"]
audience: "所有人"
related: ["linkedin-posts", "calendar", "linkedin-ads", "validation", "ask", "agents", "assets-library", "my-connections", "balance-and-payments", "your-team", "client-space", "account-and-sign-in"]
shots:
  - file: "/images/help/getting-started-menu.zh.webp"
    route: "/social/linkedin/posts"
    clip: "#side-nav"
    alt: "左侧菜单：帖子、日历、LinkedIn Ads、审核、提问、智能体、素材库、图片编辑器和技能，底部是团队和额度"
    captured: 2026-10-04
sources: ["src/lib/app.ts", "src/layouts/Layout.astro", "src/styles/apps/nuvora.css", "public/apps/nuvora/vocabulary.js", "src/lib/auth.ts", "src/middleware.ts", "src/pages/signup.astro", "src/lib/signup.ts", "src/pages/api/signup/verify.ts", "src/pages/login.astro", "src/lib/mfa.ts", "src/pages/invite/[token].astro", "src/scripts/creditChip.ts", "src/components/ThemeSwitch.astro", "src/components/panels/SocialContentPanel.astro", "src/scripts/socialContent.ts", "src/lib/social/connect-guide.ts"]
---

Nuvora 是一个只为 LinkedIn 而生的工作空间。帖子可以交给 AI 写，也可以自己写，然后发到你的 LinkedIn 个人主页，或你管理的公司主页上，立即发出或定在你选的时间。每篇已计划、已排期和已发布的帖子都显示在日历上。你的 LinkedIn 广告账户被实时读取，包括仪表盘、广告系列和广告库。帖子可以先等同事或客户审批，再对外发出。**提问** 回答关于帖子、日历和广告账户的问题，智能体则替你盯着发布节奏和广告账户。你的视觉素材存放在素材库里，图片编辑器可以把图片调整成 LinkedIn 的尺寸。

你可以独自工作，也可以加入团队：团队共用一笔以美元计的预付余额，还可以为客户服务，客户登录后能看到为他们做的作品。每项付费操作都会写明费用：生成图片或发布帖子，按下按钮前就能看到价格；AI 草稿或回答一完成，就显示花了多少。

## 创建账户

1. 在登录页面点击 **创建账户**。
2. 填写 **名**、**姓** 和 **邮箱**。
3. 在 **How you work** 下，从三个选项中选一个：
   - **仅我个人**：“Create on your own, with your own credits. You can invite people later.” Nuvora 会为你开设一个只有你一人的团队，以你的名字命名，你就是管理员。
   - **Create a team**：“You run it: invite people, and they create from one shared pool of credits.” 这时会出现一个输入框，填写团队名称即可。你是这个团队的管理员。
   - **Join a team**：“您的团队已在使用 Nuvora：由管理员为您开通。” 这时会出现一个输入框，填写你所在团队的名称，或管理员的邮箱地址。
4. 勾选同意服务条款。
5. 点击 **发送验证码**。Nuvora 会给你发一封邮件，里面是 6 位验证码。输入验证码之前，系统不会创建任何东西。

验证码 20 分钟内有效。临时邮箱无法开户，请使用工作邮箱或个人邮箱。如果这个地址已经有账户，你收到的会是一封告知邮件，而不是验证码。

### 输入验证码

下一屏是 **请查收邮箱**。

- **仅我个人** 或 **Create a team**：在 **验证码** 中填入验证码，设置一个不少于 8 个字符的 **密码**，然后点击 **创建我的账户**。你随即登录，进入 **帖子**。
- **Join a team**：填入验证码，点击 **提交申请**。此时还不需要设置密码。**申请已提交** 页面会告诉你，团队管理员已经收到通知。其中一位管理员同意后，你会收到一封邀请邮件。打开邮件，设置密码，再点击 **加入并登录**。

迟迟没收到？查一下垃圾邮件文件夹，或者点击 **重新开始** 更正邮箱地址。

## 登录

填写 **登录**（即你的邮箱地址）和 **密码**，然后点击 **登录**。登录页面跟随浏览器的语言显示英文、法文或中文，卡片下方的语言名称可以随时切换。登录之后，Nuvora 使用你账户里保存的语言；随时可以在 **账户设置** 的 **语言** 中更改。

登录后进入 **帖子**，或你在 **账户设置** 中选定的主页。客户的登录账号总是进入它的 **客户空间**，商业合作伙伴则进入 **佣金**。

新建的团队还会要求第二步验证：一个发到你邮箱的 6 位登录验证码，10 分钟内有效。在 **登录验证码** 中填入，点击 **确认并登录**。在你每天使用的电脑上，保持勾选 **信任此浏览器 30 天，之后只需输入密码。** 管理员可以在 **团队** 页面为整个团队关闭这一步。参见[账户与登录](/zh/help/account-and-sign-in#邮件登录验证码)。

登录后，Nuvora 会在后台检查你的 LinkedIn 连接。如果某个连接需要重新连接，屏幕右下角会弹出通知。参见[我的连接](/zh/help/my-connections#登录后的连接检查)。

## 熟悉界面

左侧菜单先列出 LinkedIn 相关模块，底部是账户管理类的入口：

| 菜单项 | 打开什么 |
|---|---|
| **帖子** | 你的 LinkedIn 帖子：简报、文案、图片，然后发到你的个人主页或公司主页。参见 [LinkedIn 帖子](/zh/help/linkedin-posts)。 |
| **日历** | 每篇已计划、已排期和已发布的帖子，按月、按周或以列表查看。参见[日历](/zh/help/calendar)。 |
| **LinkedIn Ads** | **仪表盘**、**广告系列** 和 **广告库**：从 LinkedIn 实时读取的广告账户。参见 [LinkedIn Ads](/zh/help/linkedin-ads)。 |
| **审核** | 等待别人审批的帖子和文件，以及你提交审批的内容。参见[审核](/zh/help/validation)。 |
| **提问** | 根据你的帖子、日历和 LinkedIn 广告账户回答问题。参见[提问](/zh/help/ask)。 |
| **智能体** | **我的智能体**、**团队智能体**（仅限管理员）、**目录** 和 **运行记录**：盯着发布和广告账户的智能体。参见[智能体](/zh/help/agents)。 |
| **素材库** | 团队的所有文件，按文件夹存放。参见[素材库](/zh/help/assets-library)。 |
| **图片编辑器** | 把图片调整成 LinkedIn 的尺寸，裁切、调色、加文字、打上品牌标志。参见[图片编辑器](/zh/help/assets-library#图片编辑器)。 |
| **技能** | **我的技能**、**团队技能**（仅限管理员）和 **目录**：塑造你草稿的指令。参见[技能](/zh/help/skills)。 |
| **合作伙伴** | 仅限商业合作伙伴。参见[合作伙伴](/zh/help/partners)。 |
| **团队** | 与你共用余额的成员，以及你的客户。参见[你的团队](/zh/help/your-team)。 |
| **额度** | 你的余额：**购买额度** 用来充值，另有 **发票** 和 **用量**。参见[余额与付款](/zh/help/balance-and-payments)。 |

管理员可以为某个人关闭某个模块，该模块随即从这个人的菜单中消失。客户的登录账号看到的菜单短得多：只有 **客户空间** 和 **审核**。参见[客户空间](/zh/help/client-space)。

![左侧菜单：帖子、日历、LinkedIn Ads、审核、提问、智能体、素材库、图片编辑器和技能，底部是团队和额度](/images/help/getting-started-menu.zh.webp)

每个页面顶部的横栏上有：

- 一个房子按钮，把当前页面设为你的主页，也就是登录后进入的那一页。再点一次，恢复默认。
- 一个太阳或月亮按钮，在浅色和深色之间切换。
- **动态**：正在为你运行的草稿、生成和检查任务，以及它们的结果。你换到别的页面，它照样跟着任务走。
- 你的余额：此刻可以花的金额。点击即可充值。余额用完时，这里显示 **购买额度**。客户的登录账号没有余额，所以这里不显示金额。
- 你的头像，点开是一个菜单，里面有 **账户设置**、**账单与额度**、**团队**、**我的连接**，**系统**、**浅色** 和 **深色** 三个选项，一排语言，以及 **退出登录**。

页脚链接到 **帮助中心**、**反馈问题**、**联系我们**、nuvora.studio 网站、**更新日志**、**服务条款** 和 **隐私政策**。

## 你的第一篇帖子

1. **连接 LinkedIn。** 点击右上角的头像，再点 **我的连接**。在 **您的社交账号** 下的 **LinkedIn** 卡片上，点击 **连接账户**，用你自己的账号登录 LinkedIn，然后点 **允许**。你的个人主页会回到这里，LinkedIn 上把你列为管理员的公司主页也会一并带回。保留你要为之发帖的那些。参见[我的连接](/zh/help/my-connections)。
2. **查看余额。** 顶部横栏上的金额就是你能花的钱。如果显示 **购买额度**，先到 **额度** > **购买额度** 充值。参见[余额与付款](/zh/help/balance-and-payments)。
3. 在菜单中 **打开帖子**。一篇新帖子已经准备好；**新帖子** 会清空表单，再开一篇。
4. **撰写简报。** 选择 **格式**（**纯文字**、**+ 图片** 或 **+ 轮播**）、**语言**，以及负责撰写的 **模型**。在简报框里写清楚：帖子讲什么，面向谁，要达成什么效果。
5. **点击 AI 起草。** 文案会在下一步出现，可以直接修改，旁边有一行写明这份草稿花了多少钱。想自己写？**我自己写** 会直接打开编辑器，不调用 AI，也不计费。
6. **发布。** 打开 **发布**。在 **自动发布** 标签页上，在 **以谁的身份发布** 下勾选你的个人主页或某个公司主页，然后点击 **立即发布**，或点 **定时发布** 选定日期和时间。系统不会替你预先勾选：在你勾选账号之前，**定时发布** 和 **立即发布** 都处于锁定状态。

此后，每篇已排期和已发布的帖子都会显示在[日历](/zh/help/calendar)上。完整的操作说明，包括配图和审批，请看 [LinkedIn 帖子](/zh/help/linkedin-posts)。
