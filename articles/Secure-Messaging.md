# 选择安全的消息平台

本文介绍在选择安全消息应用时应注意的事项。

**摘要：** 选择安全的消息应用可以防止第三方访问你的私人对话。请选择具备端到端加密（E2E）、开源且积极维护的平台。高级安全功能如自毁消息、联系人验证、前向保密、支持别名注册（无需手机号或邮箱）以及通过 Tor 传输内容的去中心化 P2P 网络，都能进一步增强防护。

## 主要考量

### 端到端加密
端到端加密意味着消息在你设备本地加密后才发送给收件人。服务提供商或任何拦截消息的第三方都无法解密内容。这确保了你的数据不会因数据泄露、执法部门调查、内部人员或恶意攻击者而泄露。避免使用将 E2E 加密作为可选功能的应用，因为这可能导致明文消息意外发送。注意，有些平台可能提供弱加密或存在后门（通常称为[蛇油加密](https://en.wikipedia.org/wiki/Snake_oil_(cryptography)))，如果平台不是开源的，就无法验证其加密的真实性。

### 开源
最安全的设计是不需要你去信任的设计。如果应用不是开源的，我们无法验证其真正的安全性，可能存在后门、弱加密或安全漏洞。因此，拥有完全公开源代码的应用更值得信赖。但不要被虚假宣传迷惑；仅仅使用开源加密算法并不代表整个应用开源，无法被完全验证。发布的源代码必须完整，安全设计也要有详细文档。

### 代码审计
除了加密，开发者还需关注代码质量、用户体验和服务可用性。即使加密算法无懈可击，代码实现中的小错误也可能带来严重安全后果。因此，代码库应定期由独立安全专家审计，并公开发布审计报告。

### 积极维护
及时推送经过充分测试的安全更新对安全至关重要。新漏洞和问题不断被发现，若不及时修复，可能被攻击者利用。安全的消息应用应有公开稳定（非测试版）版本，并具备安全的自动更新机制，确保快速修复安全问题。用户应能清楚知道当前版本及是否有新版本可用。

### 可复现构建
大多数应用以预编译形式分发，难以验证下载版本是否与开源仓库一致。[二进制透明性](https://wiki.mozilla.org/Security/Binary_Transparency)允许第三方验证二进制文件确实由公开源代码构建。[可复现构建](https://reproducible-builds.org)则确保构建过程确定性，用户可自行编译并验证输出与官方一致，防止后门。

### 附加功能
部分消息平台有吸引用户的附加功能，但这些功能不能破坏安全目标。例如，云备份应默认关闭，若导出数据会被解密，必须明确告知用户。避免优先开发新功能而忽视安全的平台。

### 元数据
消息收发会产生元数据，可能泄露你与谁、何时、多久、在哪里、如何交流等信息。并非所有平台都自动加密这些数据，因此需关注：收集了哪些元数据、保存多久、与谁共享及用途。最佳做法是：不收集任何用户元数据。

### 稳定性
应用应可用、可扩展且可靠。如果平台无法稳定传递消息，用户可能被迫转用不安全的渠道。一些小型服务可能缺乏构建可靠平台的资源，但这对安全至关重要。

### 融资方式
开发和维护应用及服务器成本高昂。请思考——谁在为此买单？通常，免费服务意味着你就是产品。当然，也有开源应用由非营利组织通过捐赠和赞助支持。但如果无法轻易查明应用背后是谁，这应引起警惕。

### 开发者声誉
开发者应有应对技术和法律问题的良好记录，并对政府和执法部门持现实且透明的态度。

### 司法管辖区
公司注册地、运营地及用户数据存储地对安全影响很大。在某些国家或地区，组织可能被强制记录所有用户数据或交出加密密钥。一般建议避免选择[五眼联盟](https://en.wikipedia.org/wiki/Five_Eyes)成员国的公司。

### 匿名性
如果应用要求手机号、邮箱或姓名注册，你就不是匿名的。对于高风险用户，匿名注册至关重要，因为手机号等信息一旦泄露，可能被针对（如政府、跟踪者或犯罪分子）。如有需要，建议选择支持匿名注册的应用，通过 Tor 下载，避开 Google Play/苹果商店，创建匿名身份，并仅在连接 Tor 时使用。

### 联系人验证
通信安全取决于最薄弱环节。如果无法验证联系人身份，就无法确保对方账号未被盗用或确实是目标对象。若收件人被攻破，你的消息也不安全。指纹验证功能可让用户确认对方身份，防止会话被劫持。通常通过比对指纹码、电话或现实中扫码实现。安全应用应为用户提供可识别的异常提示，如有新设备登录应通知双方。

### 临时消息
设备物理安全无法完全依赖。自毁消息功能可让消息在设定时间后自动删除，若设备丢失或被盗，攻击者只能获取最近的通信内容。与远程擦除不同，消失消息无需设备在线或有信号。可根据威胁模型设置消息保留时间，从几周到几秒不等。

### 前向保密
请选择实现[前向保密](https://en.wikipedia.org/wiki/Forward_secrecy)的平台。即每条消息生成新加密密钥，即使攻击者获取设备和私钥，也无法解密之前的消息。这样即便某一密钥被攻破，也无法解密整个会话。

### 去中心化
去中心化可避免单点故障。如果所有数据都通过中心化服务商，则需完全信任其处理元数据能力，且一旦服务中断，整个网络都不可用。去中心化系统可将信任委托给其他司法辖区的节点。完全点对点的应用没有中心服务器，无单点故障。

## 附加设置
请选择可关闭非安全功能（如已读回执、最后在线、输入状态通知）的应用。如果支持云同步（用于备份或网页端），这会增加攻击面，应关闭。

## 最终建议
任何系统的最薄弱环节都是用户。如果你或联系人被攻破，再先进的安全功能也无济于事。请遵循良好安全习惯，并确保联系人也这样做。要记住，新的漏洞不断被发现和利用，今天最安全的消息应用未来也可能被攻破。
