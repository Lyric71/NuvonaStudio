---
title: "LinkedIn Ads"
lang: "zh"
seoTitle: "LinkedIn Ads 仪表盘、广告系列与广告库｜Nuvora 帮助中心"
description: "连接你的 LinkedIn 广告账户，在仪表盘上实时查看数据，在广告系列页开启或暂停广告系列、调整预算、出价和结束日期，并检索 LinkedIn 公开的广告库。"
excerpt: "实时读取你的 LinkedIn 广告账户：一个仪表盘，一份每次修改都先确认再发往 LinkedIn 的广告系列列表，外加公开的广告库。"
section: "linkedin"
order: 4
updated: 2026-10-04
appPaths: ["/ads/linkedin", "/ads/linkedin/campaigns", "/ads/linkedin/library", "/my-connections"]
audience: "团队所有成员；修改广告系列需要创作者或管理员角色，以及在广告账户上的 LinkedIn 角色"
related: ["my-connections", "agents", "ask", "calendar", "your-team"]
shots:
  - file: "/images/help/linkedin-ads-connect.zh.webp"
    route: "/ads/linkedin"
    alt: "尚未连接广告账户时的 LinkedIn Ads 仪表盘：连接你的 LinkedIn Ads 账户、三个步骤、打开“我的连接”按钮，以及仪表盘、广告系列和广告库三个标签页"
    captured: 2026-10-04
  - file: "/images/help/linkedin-ads-library.zh.webp"
    route: "/ads/linkedin/library"
    alt: "广告库标签页：搜索表单上方是连接 LinkedIn 的提示，表单包含关键词、广告主、国家或地区、起始、至和搜索广告"
    captured: 2026-10-04
sources: ["src/pages/ads/linkedin/index.astro", "src/pages/ads/linkedin/campaigns.astro", "src/pages/ads/linkedin/library.astro", "src/components/LiAdsAccountPicker.astro", "src/components/AdsConnect.astro", "src/components/panels/LinkedInAdsPanel.astro", "src/components/AgentFindings.astro", "src/scripts/liAdsDashboard.ts", "src/scripts/liAdsManage.ts", "src/scripts/linkedinAds.ts", "src/scripts/personalConnections.ts", "src/pages/my-connections.astro", "src/pages/api/linkedin-ads/dashboard.ts", "src/pages/api/linkedin-ads/manage.ts", "src/pages/api/linkedin-ads/search.ts", "src/pages/api/linkedin-ads/auth.ts", "src/lib/linkedin-ads-dashboard.ts", "src/lib/linkedin-ads-manage.ts", "src/lib/linkedin-ads.ts", "src/lib/linkedin-marketing.ts", "src/lib/user-linkedin-ads.ts", "src/lib/features.ts", "src/middleware.ts", "src/lib/app.ts"]
---

**LinkedIn Ads** 把你的 LinkedIn 广告账户搬进了 Nuvora。在菜单中打开它，里面有三个标签页：

- **仪表盘**：广告账户的整体表现，每次打开都实时读取自 LinkedIn。
- **广告系列**：广告系列此刻的状态，可以开启或暂停、修改，也可以新建。
- **广告库**：LinkedIn 公开的广告记录，看看其他公司在投什么。

Nuvora 不复制任何数据。仪表盘和广告系列页在打开时，用你自己的 LinkedIn 权限从 LinkedIn 读取广告账户；每一处修改也都直接写回 LinkedIn。

## 连接你的广告账户

连接广告账户之前，仪表盘和广告系列页都会显示 **连接你的 LinkedIn Ads 账户**，并附上提示：“LinkedIn Ads 尚未连接。请在‘我的连接’中连接你自己的 LinkedIn 访问权限。”

![尚未连接广告账户时的 LinkedIn Ads 仪表盘：连接你的 LinkedIn Ads 账户、三个步骤、打开“我的连接”按钮，以及仪表盘、广告系列和广告库三个标签页](/images/help/linkedin-ads-connect.zh.webp)

这个连接属于你个人：用的是你自己的 LinkedIn 登录账号，你能看什么、能改什么，由 LinkedIn 说了算。同事要用，就各自连接自己的账号。

1. 点击 **打开“我的连接”**，或页面顶部的 **连接 LinkedIn Ads** 链接，两者都会在新标签页中打开“我的连接”。见 [我的连接](/zh/help/my-connections)。
2. 在 **你的 LinkedIn 广告账户** 卡片上，点击 **连接 LinkedIn Ads**。
3. 用在 Campaign Manager 中对广告账户拥有角色的那个账号登录 LinkedIn，并允许授权。
4. 回到卡片，在 **你用此登录管理的账户** 下，勾选要在 Nuvora 中使用的广告账户。每次勾选都即时保存。
5. 回到 **LinkedIn Ads**。

如果你通过不止一个 LinkedIn 账号管理广告账户，点击卡片上的 **连接另一个 LinkedIn 登录账号**：它名下的账户会并入同一份列表。**断开连接** 会移除一个登录账号，它的广告账户随即从 LinkedIn Ads 各页面消失，直到你重新连接。

### 选定要操作的广告账户

勾选账户后，页头会出现 **LinkedIn 广告账户**：一份你已勾选的账户列表，每个账户都标有编号和币种。选中一个，页面随即按它重新加载。三个标签页共用这一选择。**管理账号** 会在新标签页中打开“我的连接”。

如果一个账户都没勾选，页面会提示：“尚未选择 LinkedIn 广告账户。请在‘我的连接’中勾选你管理的账户。”

## 仪表盘

仪表盘默认显示最近 **30 天**，可在顶部切换为 **7 天**、**14 天**、**30 天** 或 **90 天**。每个数字都与紧挨在前、长度相同的上一时段对比。所有时段都截止到昨天，按 UTC 计算，与 LinkedIn 的统计口径一致。

读回的数据保留十分钟。**刷新** 会重新读取 LinkedIn。**Campaign Manager** 在新标签页中打开 LinkedIn 上的同一个广告账户。

所有金额都以广告账户的币种显示。

### 顶部的数字

| 数字 | 含义 |
|---|---|
| **花费** | 广告账户在本时段内的花费。 |
| **结果** | 网站转化数，加上 LinkedIn 表单带来的线索数。 |
| **每个结果的费用** | 拿到一个结果要花多少钱。 |
| **点击量** | 广告获得的点击次数。 |
| **点击率** | 点击量除以展示量。 |
| **平均点击价格** | 一次点击的平均价格。 |
| **展示量** | 广告被展示的次数。 |

每个数字都标出与上一时段相比的变化，并附一条小趋势线。

### 下方的卡片

- **每日趋势**：每天的花费及其带来的结果。最后一天画成斜纹，标为 **仍在确定中**：LinkedIn 的数据可能要过一天才会稳定。
- **本月预算**：本月迄今的花费，对照投放中广告系列的每日预算所允许的金额。
- **需要你关注**：眼下正在白白花钱的问题，由一套简单规则从你自己的数据中找出。它不会替你改动任何东西。比如它会指出：广告被拒；广告系列已开启却没有展示；广告系列在本时段内一次展示也没有；花了钱却没有任何结果；点击的人很少；每日预算天天花光；只有一条广告；不到三天就要结束；点击比以前贵。**打开广告系列** 会带你进入广告系列标签页。
- **变化最大**：与上一时段相比变动最大的广告系列。
- **广告系列**：本时段内的全部广告系列，花费最多的排在最前，列出 **每日预算**、**花费**、**展示量**、**点击量**、**点击率**、**结果** 和 **每个结果的费用**。可在 **运行中** 与 **全部** 之间切换。

仪表盘下方的 **LinkedIn 广告监测发现** 列出 LinkedIn 广告监测智能体注意到的情况。见 [智能体](/zh/help/agents)。

## 广告系列

广告系列标签页在打开时从 LinkedIn 读取你的广告系列，每一处修改都直接写回。数据覆盖最近 30 天。

顶部依次是 **投放中的广告系列**、**账户中的广告**、**花费，30 天**、**点击率**、**结果** 和 **每个结果的费用**，接着是 **新建组**、**新建广告系列**、**刷新** 和 **Campaign Manager**。

左侧的 **广告系列组** 列出你的各个组（可显示 **全部** 或 **运行中**）。点击一个组，右侧就会列出它的广告系列。每个广告系列都标出目标、付费方式、每日预算和各项数据；被 LinkedIn 暂缓投放时，还会附上说明。

### 可以修改什么

| 位置 | 可以做什么 |
|---|---|
| 广告系列组 | 用开关开启或暂停。暂停一个组，组内所有广告系列都会随之停下。 |
| 广告系列 | 开启或暂停。修改 **名称**、**每日预算**、**出价** 和 **结束日期**，然后点击 **保存修改**。**归档** 会在 LinkedIn 上将其归档（草稿没有归档按钮）。 |
| 广告 | 开启或暂停。帖子公开时，**预览** 按 LinkedIn 的样式显示这条帖子；**在 LinkedIn 上打开帖子** 则直接跳到 LinkedIn。 |

**Campaign Manager 中的广告** 会在 LinkedIn 上打开该广告系列的广告，添加广告、收窄受众都在那里完成。

### 每次修改都先确认

任何修改在发出之前，都会先弹出确认框：

1. 对话框显示“正在读取 LinkedIn 当前的数据，尚未发送任何内容…”。
2. 它逐项列出将要修改的内容，与 LinkedIn 此刻保存的数据对照，并逐一检查。一切无误时，会显示“以下正是将发送到 LinkedIn 的内容。”
3. 点击 **在 LinkedIn 中应用** 发送，或点击 **取消**，一切保持原样。

LinkedIn 接受修改后，页面显示“已在 LinkedIn 中完成。”，并重新读取广告系列。如果某项检查没有通过，对话框会说明原因，**在 LinkedIn 中应用** 保持不可用。

### 新建组或广告系列

- **新建组**：填写 **名称**，选择是否一开始就 **已开启**（组内的广告系列仍需逐个开启），然后点击 **检查并创建**。
- **新建广告系列**：新广告系列以草稿形式创建，在你开启之前不会花一分钱。选择 **广告系列组**，填写 **名称**，选择 **目标**（**网站访问**、**线索**、**网站转化**、**互动** 或 **品牌认知**）和 **付费方式**（**按点击** 或 **按千次展示**；品牌认知只能按千次展示购买），填写 **出价** 和 **每日预算**（在多数币种下，LinkedIn 要求每天至少 10），选择 **受众语言**，并在 **投放地区** 下至少添加一个国家、地区或城市。最后点击 **检查并创建**。

两者走的是同一套确认流程。新广告系列的受众起初只限定了地点和语言：请到 Campaign Manager 中按职位、行业或公司规模进一步收窄，并在那里添加广告，然后回到这里开启。

### 谁能修改广告系列

两个条件，缺一不可：

- **在 Nuvora 中**：拥有创作者或管理员角色。查看者可以查看 LinkedIn Ads，但页面会提示：“你在此工作区的角色可以查看 LinkedIn Ads，但不能修改。”
- **在 LinkedIn 上**：在该广告账户上拥有 campaign manager 或更高的角色。LinkedIn 角色较低时，页面会提示：“你在此广告账户中的 LinkedIn 角色可以查看广告系列，但不能修改。”账户管理员可以在 Campaign Manager 中为你提升角色。

## 广告库

**广告库** 是 LinkedIn 公开的广告记录，适合做竞品研究：其他公司在推什么、用什么形式、投在哪里、投了多久。

![广告库标签页：搜索表单上方是连接 LinkedIn 的提示，表单包含关键词、广告主、国家或地区、起始、至和搜索广告](/images/help/linkedin-ads-library.zh.webp)

### 一次性的 LinkedIn 授权

LinkedIn 要求先登录授权，才能检索它的广告库。

- 如果你已在“我的连接”中连接了 LinkedIn Ads，搜索就用你自己的连接，页面显示 **正在使用你自己的 LinkedIn Ads 连接搜索**。
- 否则使用共享连接。共享连接建立之前，页面显示 **连接 LinkedIn 后可检索广告库**：“LinkedIn 需登录一次完成授权。该连接全员共用，并自动续期。”由管理员点击 **连接 LinkedIn**，登录一次即可。其他人看到的是：“请联系管理员完成连接。”

### 搜索

1. 填写 **关键词**（比如一个话题）或 **广告主**（公司名称），两者至少填一项。
2. 需要的话再缩小范围：**国家或地区** 接受 US、FR、GB 这类 ISO 代码，**起始** 和 **至** 设定日期范围。
3. 点击 **搜索广告**。

每条结果显示广告主（如果由另一家公司付费，也会注明付费方）、广告形式、投放日期和展示量。对于在欧盟投放的广告，LinkedIn 还会公开 **各国家/地区展示量占比** 和 **定向**，有数据时显示在卡片上。**在列表旁查看广告** 会在结果旁的窗口中打开 LinkedIn 上的这条广告。**加载更多** 载入下一批结果。

没有匹配的结果时，页面显示：“没有匹配的广告。请换用更宽泛的关键词，或清除筛选条件。”

## 费用

在 Nuvora 里不花钱。查看仪表盘、在广告系列页修改广告系列、检索广告库，都不消耗额度。广告系列本身的花费由 LinkedIn 记在你的广告账户上，而且在你亲自开启广告系列之前，不会产生任何花费。

LinkedIn 广告监测智能体，以及在提问中询问广告账户，都属于付费的 AI 运行。见 [智能体](/zh/help/agents) 和 [提问](/zh/help/ask)。

## 谁能看到 LinkedIn Ads

| 角色 | LinkedIn Ads |
|---|---|
| 管理员 | 查看三个标签页，修改广告系列，为广告库连接共享授权。 |
| 创作者 | 查看三个标签页，修改广告系列。 |
| 查看者 | 查看三个标签页，不能做任何修改。 |
| 客户 | 无权访问。 |

无论什么角色，仪表盘和广告系列页都只显示你自己连接并勾选的广告账户，并以你自己的 LinkedIn 权限读取。
