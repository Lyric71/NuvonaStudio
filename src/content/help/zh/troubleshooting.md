---
title: "故障排除"
lang: "zh"
seoTitle: "故障排除与错误提示｜Nuvora 帮助中心"
description: "Nuvora 的各种提示是什么意思、该怎么办：余额为零、优惠码被拒、文件过大、素材库和图片编辑器、注册和登录、邀请、客户、审核、LinkedIn 帖子和连接、LinkedIn Ads、提问和智能体。"
excerpt: "Nuvora 在操作中断时给出的提示，每一条是什么意思，以及怎样重新上手。"
section: "troubleshooting"
order: 16
updated: 2026-10-04
appPaths: ["/billing", "/files", "/files/tools/image-editor", "/signup", "/login", "/invite", "/team", "/client", "/validation", "/social/linkedin/posts", "/my-connections", "/ads/linkedin", "/ads/linkedin/library", "/ask", "/agents"]
audience: "所有人"
related: ["balance-and-payments", "assets-library", "account-and-sign-in", "your-team", "client-space", "validation", "linkedin-posts", "my-connections", "linkedin-ads", "ask", "agents"]
shots: []
sources: ["src/lib/credits.ts", "src/scripts/creditsPanel.ts", "src/scripts/creditChip.ts", "src/pages/api/billing/checkout.ts", "src/lib/promo.ts", "src/pages/api/files/index.ts", "src/pages/api/files/[id].ts", "src/pages/api/files/folders/[id].ts", "src/pages/files/tools/image-editor.astro", "src/scripts/imageEditor.ts", "src/scripts/clientSpace.ts", "src/lib/signup.ts", "src/pages/signup.astro", "src/pages/api/signup/verify.ts", "src/pages/api/login.ts", "src/lib/mfa.ts", "src/pages/reset-password.astro", "src/lib/invitations.ts", "src/pages/invite/[token].astro", "src/pages/api/team.ts", "src/lib/team-clients.ts", "src/pages/api/client/index.ts", "src/pages/api/social-content/[id].ts", "src/lib/validation-http.ts", "src/lib/validation-lock.ts", "src/pages/api/validation/[id]/comments.ts", "src/middleware.ts", "src/scripts/socialContent.ts", "src/pages/api/social-content/draft.ts", "src/scripts/socialAccounts.ts", "src/pages/api/social/callback/[platform].ts", "src/pages/api/social/accounts/[id].ts", "src/scripts/connectionCheckNotice.ts", "src/scripts/personalConnections.ts", "src/lib/user-linkedin-ads.ts", "src/pages/api/linkedin-ads/manage.ts", "src/pages/api/linkedin-ads/search.ts", "src/scripts/linkedinAds.ts", "src/pages/api/intelligence/ask.ts", "src/scripts/askIntelligence.ts", "src/pages/api/agents/custom.ts", "public/apps/nuvora/vocabulary.js"]
---

在第一列里找到你看到的提示。下面的提示中，方括号里的内容代表你自己的文件、金额或账户。

## 余额

| 提示 | 含义 | 怎么办 |
|---|---|---|
| **You are out of AI credits ([amount] left).** | 你的余额为零，付费运行一律被拒。顶部栏显示 **购买额度**。 | 在 **额度** > **购买额度** 充值。参见 [余额与付款](/zh/help/balance-and-payments)。 |
| **AI 额度已用完。购买额度前所有 AI 功能停用。产品其他部分不受影响。** | 余额为零时，显示在 **购买额度** 页面上。AI 运行以外的一切照常工作。 | 购买额度，或请管理员为团队充值。 |
| **贵团队的 AI 额度已用尽（剩余 [金额]），且您没有个人额度。** | 团队余额为零，你自己的余额也为零。 | 请管理员为团队余额充值，或者给自己充值。 |
| **您已用完今天团队额度的每日限额** | 你已达到管理员在团队余额上为你设定的每日限额。限额在 UTC 零点重置。 | 等它重置，给自己的余额充值，或者请管理员提高你的限额。参见 [你的团队](/zh/help/your-team#团队额度的每日限额)。 |
| **您尚未获得团队额度的每日限额** | 管理员把你的每日限额设成了零。 | 请管理员在团队页面上设定一个限额，或者给自己的余额充值。 |
| **仅管理员可为 [团队] 购买额度。** | 只有管理员能为团队余额充值。 | 选 **您的账户** 为自己购买，或者找管理员。 |
| **自动充值已暂停。** | 已保存的银行卡被拒。 | 检查银行卡，然后点 **重试**，或者点 **更换银行卡**。 |
| **请先接受服务条款再继续。** | 第一次购买前的那个方框没有勾选。 | 勾选它，然后付款。 |

## 优惠码

| 提示 | 怎么办 |
|---|---|
| **That promotional code does not exist.** | 检查拼写。 |
| **That promotional code has expired.** 或 **That promotional code is no longer available.** | 优惠活动已经结束。 |
| **That promotional code is not open yet.** | 优惠活动还没开始。等它开放后再试。 |
| **This code applies from $[amount] of credits.** | 把金额提高到至少所示的数字。 |
| **You have already used that promotional code.** 或 **That promotional code has been fully used.** | 这个优惠码不能再用了。 |
| **That promotional code is not available on this account.** | 这个优惠码只留给另一个账户。试试另一个标签页（你的团队，或 **您的账户**）。 |

## 文件过大或不被接受

| 提示 | 怎么办 |
|---|---|
| **该文件过大（上限 [n] MB）。** | 素材库接受的文件大小以库顶部显示的上限为准。换一个小一些的文件。 |
| **编辑器无法打开此文件，请改用 JPG、PNG 或 WebP 文件。** | 你拖进图片编辑器的文件不是它能读取的图片。转换一下格式。 |
| **您的浏览器无法打开这张图片，请改用 JPG、PNG 或 WebP 文件。** | 你的浏览器读不了这种图片。转换一下格式。 |

## 素材库与图片编辑器

| 提示 | 含义 | 怎么办 |
|---|---|---|
| **Only the person who added this asset can delete it.** | 文件只能由添加它的人删除。 | 请对方删除。 |
| **This folder holds assets added by other people. Only the person who added an asset can delete it.** | 只有当文件夹里的每个文件都是你添加的，才能删除这个文件夹。 | 请添加了其他文件的人把它们移走或删除，然后再删除文件夹。 |
| **无法打开这张图片进行编辑。** | 无法从素材库读取这张图片。 | 关闭编辑器，稍后再试。 |
| **无法添加这张图片。** | 你叠加在图片上的标志或图片读取失败。 | 换一个文件试试，PNG 或 JPG 都行。 |
| **图片无法生成，请尝试更小的尺寸。** | 图片太大，你的浏览器无法按这个尺寸保存。 | 调小 **宽度**，再保存一次。 |
| **要离开编辑器吗？** | 你要关闭编辑器，但还有未保存的修改。 | 点 **继续编辑**，然后保存；或者点 **不保存并离开**，放弃这些修改。 |
| **无法生成下载链接。** | 客户空间里的下载没能开始。 | 稍后再试。 |

## 注册与登录

| 提示 | 含义 | 怎么办 |
|---|---|---|
| **This code is not valid, or it has expired. Request a new one.** | 注册验证码不对，或已超过 20 分钟，或者输错次数太多。 | 点 **重新开始**，申请一个新的验证码。 |
| **Temporary mailboxes cannot open an account. Please use your work or personal address.** | 一次性邮箱一律被拒。 | 使用真实的邮箱地址。 |
| **This address already has an account. Sign in instead.** | 这个地址已经有登录账号。 | 直接登录，或者点 **忘记密码？**。 |
| **账号或密码错误。** | 邮箱或密码不对。 | 两样都检查一遍，或者点 **忘记密码？**。 |
| **账户已停用，请联系管理员。** | 管理员暂停了你的登录。 | 找你团队的管理员。 |
| **验证码不正确，还剩 [n] 次机会。** | 登录验证码输错了。 | 核对邮件，重新输入。 |
| **验证码无效或已过期。请重新登录以获取新的验证码。** | 登录验证码不对，或已超过 10 分钟。 | 重新登录，或者点 **重新发送验证码**。 |
| **错误次数过多。请重新登录以获取新的验证码。** | 登录验证码输错次数太多。 | 重新登录。 |
| **验证码已发送三次。请过几分钟后重新登录。** | 申请验证码的次数太多。 | 等几分钟，再重新登录。 |
| **请等待 [n] 秒后再申请新的验证码。** | 申请新验证码太快了。 | 等一下，再点 **重新发送验证码**。 |
| **链接无效或已过期** | 密码重置链接只能用一次，有效期约一小时。 | 点 **重新申请链接**。 |

## 邀请与团队

| 提示 | 含义 | 怎么办 |
|---|---|---|
| **该邀请已过期** | 邀请的有效期为一周。 | 请邀请你的人重新发一封。 |
| **该邀请已被使用** | 它开通的账户已经存在。 | 用受邀的地址登录。 |
| **该邀请不存在** | 链接不完整，或者邀请已被取消。 | 申请一封新的邀请。 |
| **This invitation is not valid any more. Ask for a new one.** | 你还在页面上时，链接过期了或被取消了。 | 申请一封新的邀请。 |
| **This person already belongs to another team. Ask a super admin to move them.** | 一个地址只能属于一个团队。 | 通过页脚的 **联系我们** 给我们写信。 |
| **This person is already a member of the team.** | 对方已经在你的团队里。 | 无需任何操作。 |
| **Give the team a name of at least 2 characters.** | 团队名称太短。 | 起一个长一些的名称。 |

## 客户与“适用于”

| 提示 | 含义 | 怎么办 |
|---|---|---|
| **Give the client a name.** | 新建或重命名客户时，名称为空。 | 填上这家公司的名称。 |
| **Your team already has a client called [name].** | 同一团队的两个客户不能重名。 | 换一个名称，或者直接用已有的那个客户。 |
| **Only a team administrator manages the clients.** | 创作者和查看者不能添加、重命名或删除客户。 | 找管理员。 |
| **Choose the client this person works for.** | 客户登录账号必须属于你的某个客户，而这个客户没找到，往往是因为它刚被删除。 | 刷新页面，在 **客户** 卡片上对应客户下方的表单里操作。 |
| **Only a creator or an administrator says who a piece was made for.** | 查看者不能修改 **适用于**。 | 找创作者或管理员。 |
| **This client is not one of your team.** | 这个客户在此期间已被删除。 | 刷新页面，重新选择。 |
| **Your login is not attached to a client any more. Ask the team that invited you.** | 客户登录账号所属的客户已被移除时，会看到这条提示。 | 联系邀请你的团队。 |

## 审核

| 提示 | 含义 | 怎么办 |
|---|---|---|
| **This piece was made for another client. Ask one of that client's people, or a colleague.** | 为某个客户制作的内容，只能由该客户的人员或团队成员审批。 | 选对应客户的人，或者一位同事。 |
| **The validator must be a member of your team.** | 你选的人不在你的团队里，或者已经不在了。 | 换一位审核人。 |
| **该内容正在等待审核。在审核人做出决定前，无法修改或删除。** | 帖子或文件在等待审核期间被锁定。 | 请审核人或管理员做出决定。 |
| **您的角色（查看者）为只读。** | 查看者不能发起审核、评论或做决定。 | 请管理员把你设为创作者，或者另选一位审核人。 |
| **Write the comment first.** | 评论框是空的。 | 写好评论，再发送。 |

## LinkedIn 帖子与连接

| 你看到的 | 含义 | 怎么办 |
|---|---|---|
| **保存** 旁边出现 **Not saved:** 和一条原因 | 帖子没能自动保存。你的文字还在屏幕上，下一次按键会再试一次。 | 如果一直失败，先把文字复制到安全的地方，再刷新页面。 |
| **未生成草稿。请改写简报后重试。** | 模型没有返回可用的内容。 | 改写简报，再试一次。 |
| **草稿超出了模型单次可生成的长度，返回时已被截断。** | 回答还没写完就被截断了。 | 缩短简报，或者要一篇更短的帖子，再试一次。 |
| **定时发布** 和 **立即发布** 一直锁着 | **以谁的身份发布** 下没有勾选任何账号。 | 勾选你的个人主页或某个公司主页。 |
| **No account is connected on LinkedIn yet.** | **自动发布** 标签页需要一个已连接的 LinkedIn 账号。 | 点提示下方的按钮打开“我的连接”，或者改用 **手动发布**。参见 [我的连接](/zh/help/my-connections#连接-linkedin)。 |
| **Your account has stopped working and is waiting to be reconnected.**，或账号磁贴上出现 **重新连接** | 连接已过期，或授权被撤销。 | 在“我的连接”里，点该账号那一行的 **重新连接**。 |
| 连接后少了某个公司主页 | LinkedIn 没有把你列为该主页的管理员。 | 请主页所有者把你加进去，再连接一次。 |
| **The network authorized us but returned no account to publish on.** | LinkedIn 放行了 Nuvora，却没有返回任何个人主页或公司主页。 | 确认你登录的是正确的 LinkedIn 账号，再试一次。 |
| **This connect link has expired or was already used. Start again from the card.** | 从 Nuvora 跳往 LinkedIn 的登录链接已经用过，或者太旧了。 | 再点一次 **连接账户**。 |
| **[n] post is still scheduled on this account. Cancel it first, or switch the account off instead of removing it.** | 账号上还有排队的内容时，不能移除它。 | 取消排期中的帖子，或者点 **关闭**。 |
| 屏幕右下角的通知里出现 **部分连接需要处理** | 登录后的检查发现某条连接已经无法让 Nuvora 进入。 | 点 **重新连接**，在打开的卡片上重新登录，然后点通知上的 **重新检查**。参见 [我的连接](/zh/help/my-connections#登录后的连接检查)。 |

## LinkedIn Ads

| 提示 | 含义 | 怎么办 |
|---|---|---|
| **LinkedIn Ads 尚未连接。请在“我的连接”中连接你自己的 LinkedIn 访问权限。** | 你还没有为广告账户连接 LinkedIn 登录账号。 | 点 **打开“我的连接”**，再点 **连接 LinkedIn Ads**。参见 [我的连接](/zh/help/my-connections#你的-linkedin-广告账户)。 |
| **尚未选择 LinkedIn 广告账户。请在“我的连接”中勾选你管理的账户。** | 你的 LinkedIn 登录账号已连接，但没有勾选任何广告账户。 | 在它的卡片上至少勾选一个广告账户。 |
| **此 LinkedIn 登录账号无法打开任何广告账户** | 你连接的登录账号在任何广告账户上都没有角色。 | 连接在 Campaign Manager 里对该账户有角色的 LinkedIn 登录账号。 |
| **此 LinkedIn 广告账户不在你管理的账户之中。请先在“我的连接”中勾选它。** | 你选的账户没有在“我的连接”里勾选。 | 勾选它，再回来。 |
| **你在此广告账户中的 LinkedIn 角色只能查看广告系列，不能修改。账户管理员可以在 Campaign Manager 中提升你的角色。** | 你在 LinkedIn 那边的角色是只读的。 | 请该广告账户的管理员在 Campaign Manager 中提升你的角色。 |
| **你可以查看 LinkedIn Ads，但不能修改。请联系你的管理员。** | 你在 Nuvora 里的权限只允许查看广告账户。 | 找你团队的管理员。 |
| **请填写要查询的关键词或广告主。** | 在广告库里搜索，需要一个关键词或一个广告主。 | 填一个，再点 **搜索广告**。 |

## 提问与智能体

| 提示 | 含义 | 怎么办 |
|---|---|---|
| **问题过长，请缩短。** | 一个问题最多 1,000 个字符。 | 缩短它，剩下的部分用追问来问。 |
| **未返回答案。请换一种说法。** | 模型没有返回可用的内容。 | 换个说法，再问一次。 |
| **联网搜索** 一直是 **关** | 你的团队关闭了联网搜索，或者这个模型不能联网搜索。 | 找管理员，或者换一个能联网搜索的模型。 |
| **请为智能体命名。** | 新建的智能体需要一个名称。 | 填一个。 |
| **Write the agent's instructions (at least 20 characters).** | 指令为空或太短。 | 写清楚智能体要关注什么、汇报什么。 |
| **请为智能体至少选择一个数据源。** | 智能体需要有东西可读。 | 在智能体的表单里选一个数据源。 |
| **您的角色为只读。** | 查看者不能创建或修改智能体。 | 请管理员把你设为创作者。 |

## 仍未解决？

点任意页面页脚的 **反馈问题** 或 **联系我们**。告诉我们你点了什么、原本期望看到什么，以及你看到的那条提示的原文。
