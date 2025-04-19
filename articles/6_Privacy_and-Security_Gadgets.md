[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)

# 用于保护隐私和安全的硬件
一个精选的（DIY 和预制）设备列表，帮助保护隐私并提升物理网络安全 🔐

**太长不看？🦒** 请查看[简明版 TLDR](/2_TLDR_Short_List.md#security-hardware)。

另见 [The Hackers Hardware Toolkit](https://raw.githubusercontent.com/yadox666/The-Hackers-Hardware-Toolkit/master/TheHackersHardwareToolkit.pdf) by [@yadox666](https://github.com/yadox666) —— 红队渗透测试和安全研究人员的终极硬件指南。

**注意**：本节内容仅供娱乐，完全可以在不购买或自制任何设备的情况下保持安全和匿名。由于添加了更多设备，无法全部亲测，因此这些产品不构成推荐，仅供参考和娱乐。

---

#### 目录
- [基础](#basics)
- [DIY 安全产品](#diy-security-products)
- [偏执级安全设备](#paranoid-security-gadgets)
- [网络安全](#network-security)
- [安全计算设备](#secure-computing-devices)
- [硬件加密存储](#hardware-encrypted-storage)
- [USB 数据隔离器](#usb-data-blockers)
- [FIDO U2F 密钥](#fido-u2f-keys)
- [加密钱包](#crypto-wallets)

## 基础
（本节所有产品均已测试。）

**项目** | **描述**
--- | ---
**USB 数据隔离器**<br>[![Data Blocker](https://i.ibb.co/jG3dpGW/1.jpg)](https://amzn.to/2HDArRP) | 许多攻击者会利用 USB 电源插口传播恶意软件或窃取数据。USB 数据隔离器通过断开数据线，仅允许电源通过，防止数据泄露。PortaPower 品牌还带有快充芯片。
**麦克风隔离器**<br>[![__](https://i.ibb.co/BKQTCbQ/2.jpg)](https://amzn.to/2uQ3r5L) | 麦克风隔离器是一种硬件配件，插入后设备会认为已连接外部麦克风，从而禁用内置麦克风，防止被窃听。
**法拉第袋**<br>[![__](https://i.ibb.co/HBBG0QL/3.jpg)](https://amzn.to/3bIkfw4) | [法拉第笼](https://en.wikipedia.org/wiki/Faraday_cage)可屏蔽电磁信号，适用于防止车钥匙、手机等设备被远程攻击。也有适用于平板和笔记本的大号版本。
**RFID 屏蔽卡**<br>[![__](https://i.ibb.co/m4GtMdj/4.jpg)](https://amzn.to/38ycMxN) | 担心银行卡被盗刷可使用 RFID 屏蔽套保护，但实际 RFID 盗刷案件较少。
**摄像头遮挡盖**<br>[![__](https://i.ibb.co/X7B1WsH/5.jpg)](https://amzn.to/2uEz16H) | 物理遮挡摄像头，防止黑客或机构远程监控。甚至马克·扎克伯格也会遮挡摄像头。
**Prokey 钱包**<br>[![__](https://i.ibb.co/m53MmCL/prokey.jpg)](https://prokey.io/?reflink=67e4a39bc5cd4c04bd7f38b50b041c1f) | Prokey Optimum 是一款安全易用的离线硬件钱包，支持 1000+ 种币种，固件和应用均为[开源](https://github.com/prokey-io)。
**端口堵塞器**<br>[![__](https://i.ibb.co/fYPVnK5/6.jpg)](https://amzn.to/327Yn9n) | 防止攻击者插入恶意 USB 设备，虽不能完全杜绝，但可防止机会性攻击。
**防窥膜**<br>[![__](https://i.ibb.co/KjkTbGN/7.jpg)](https://amzn.to/3bAa9xv) | 防窥膜仅允许正面可见屏幕内容，防止他人偷窥。
**YubiKey**<br>[![__](https://i.ibb.co/PGtbwxN/8.jpg)](https://amzn.to/38wcG9R) | YubiKey 是一款硬件二次认证密钥，保护账户安全，比手机验证更安全便捷。
**金士顿加密 U 盘**<br>[![__](https://i.ibb.co/ScRFhdt/9.jpg)](https://amzn.to/38xsnO5) | 硬件加密，易用且无需安装，支持云备份，性价比高。
**硬件加密 USB 3.0 U 盘**<br>[![__](https://i.ibb.co/p3MzFHF/11.jpg)](https://amzn.to/2vD32Ug) | 100% 硬件加密，兼容所有操作系统，军用级 AES-XTS 256 位加密。
**硬件加密外置硬盘**<br>[![__](https://i.ibb.co/BV5k29v/12.jpg)](https://amzn.to/37pTmK8) | 大容量，强加密，支持多次错误输入自动擦除。
**Fingbox 家庭网络监控**<br>[![__](https://i.ibb.co/nkMxwz9/14.jpg)](https://amzn.to/2V5gATx) | FingBox 提供网络监控和安全功能，可阻止入侵、分析漏洞等。
**可启动硬盘擦除器**<br>[![__](https://i.ibb.co/P11d0YH/15.jpg)](https://amzn.to/2SsL67Y) | 启动后可彻底擦除硬盘数据，防止数据恢复。
**手机防窥膜**<br>[![__](https://i.ibb.co/Zg9QG1j/17.jpg)](https://amzn.to/2OZO3Lc) | 类似于电脑防窥膜，防止侧面偷窥。
**肯辛通锁**<br>[![__](https://i.ibb.co/TKHV5d3/20.jpg)](https://amzn.to/38zu0e2) | 防止笔记本被盗，需设备有肯辛通安全插槽。
**反监控服饰**<br>[![__](https://i.ibb.co/Gk8jBBm/21.jpg)](https://adversarialfashion.com) | 特殊图案可干扰人脸、物体和车牌识别，防止被自动跟踪。
**Solo Key**<br>[![__](https://i.ibb.co/8PFQRDy/26.jpg)](https://amzn.to/37CsOpj) | FIDO2 硬件密钥，开源硬件和软件，支持开发者自定义。
**Nano Ledger**<br>[![__](https://i.ibb.co/HdVyPzb/22.jpg)](https://amzn.to/37q1cn6) | 硬件钱包，隔离私钥，安全存储加密货币。
**冷存储**<br>[![__](https://i.ibb.co/nj6xyv1/23.jpg)](https://amzn.to/2HqVy9x) | 金属冷钱包，防水防火，适合长期保存私钥。
**Anonabox**<br>[![__](https://i.ibb.co/L177XDJ/24.jpg)](https://amzn.to/2UWtP8E) | 即插即用 Tor 路由器，可搭配 VPN 使用，保护隐私。
**Deauth Detector**<br>[![__](https://i.ibb.co/BqNGRCW/19.jpg)](https://amzn.to/2HtUy4B) | 检测 WiFi 去认证攻击，基于 ESP8266 和 SpaceHuhn 的开源代码。
**WiPhone**<br>[![__](https://i.ibb.co/grnJjKt/wiphone.jpg)](https://www.wiphone.io/) | 开源、模块化 VOIP/LoRa 手机，适合自由通信和开发。
**Librem 5**<br>[![__](https://i.ibb.co/3TNh5Vt/l5-v1-front-100x100.png)](https://shop.puri.sm/shop/librem-5/) | Purism 推出的安全隐私手机，硬件开关，运行 Linux，无跟踪。
**Slate 旅行路由器**<br>[![__](https://i.ibb.co/Nt7hmfW/ar750s-ext-1000x1000.jpg)](https://www.gl-inet.com/products/gl-ar750s/) | 可作为 WiFi AP、防火墙或便携 VPN 路由器，适合旅行时保护网络。

## DIY 安全产品

不想花钱？上面大多数产品都可以用简单硬件和开源软件自制。以下是入门指引：

另见 [DIY 网络硬件](#diy-networking-hardware)

- **全网广告拦截** - [Pi Hole](https://pi-hole.net) 可安装在树莓派上，作为 DNS 服务器拦截广告和恶意资源。
- **USB 杀毒器** - [CIRCLean](https://www.circl.lu/projects/CIRCLean) 自动清理不可信 USB 文件，输出安全副本。
- **可启动硬盘擦除器** - 使用 [DBAN](https://dban.org) 或 [KillDisk](https://www.killdisk.com/bootablecd.htm) ISO 制作启动 U 盘，彻底擦除硬盘。
- **Deauth Detector** - 用 ESP8266 刷入 [DeauthDetector](https://github.com/spacehuhn/DeauthDetector) 检测 WiFi 去认证攻击。
- **AI 助理隐私改造** - [Project Alias](https://github.com/bjoernkarmann/project_alias) 运行于树莓派，拦截语音命令，提升隐私。
- **Tor WiFi 网络** - 用 [OnionPi](https://github.com/breadtk/onion_pi) 创建 Tor 路由网络。
- **密码卡** - [PasswordCard.org](https://www.passwordcard.org/en) 生成独特密码卡，便于记忆和生成强密码。
- **法拉第盒** - 用[法拉第布](https://amzn.to/2ORKtTr)自制信号屏蔽盒。
- **硬件钱包** - 用 Trezor Shield 或 [Trezor Core](https://github.com/trezor/trezor-firmware) 和树莓派自制硬件钱包。
- **加密 U 盘** - 用 [VeraCrypt](https://www.veracrypt.fr/en/Home.html) 给普通 U 盘加密。
- **家庭 VPN** - [Pi_VPN](https://www.pivpn.io) 让你随时远程安全访问家庭网络。
- **USB 密码管理器** - [KeePass](https://keepass.info/help/v2/setup.html) 离线密码管理器，可便携运行于 U 盘。
- **安全聊天平台** - Tinfoil Chat (TFC) 端到端加密，防止密钥泄露。[TFC](https://github.com/maqp/tfc)
- **自动备份** - [Syncthing](https://syncthing.net) 隐私同步备份工具。
- **GPS 欺骗器** - 用 SDR 设备和 [gps-sdr-sim](https://github.com/osqzss/gps-sdr-sim) 发送伪 GPS 信号（请遵守当地法律）。
- **无麦克风笔记本** - 物理移除麦克风，或仅用外接麦克风。[教程](https://www.wired.com/story/remove-the-mic-from-your-phone/)

如果你熟悉电子，还可以自制：
- **USB 数据隔离器** - 移除 USB 适配器的数据线即可。[教程](https://www.instructables.com/id/Making-a-USB-Condom)
- **硬件加密密码管理器** - [hardpass0.2](https://bit.ly/3bg4Xi4) 基于 GnuPG 智能卡和树莓派。
- **U2F USB 令牌** - [U2f-Zero](https://github.com/conorpp/u2f-zero) 用树莓派自制二次认证密钥。
- **真随机数发生器** - [FST-01](https://www.gniibe.org/FST-01/fst-01.html) 开源硬件 RNG。
- **PC 自动锁定 U 盘** - 用 U 盘作为电脑锁钥匙。
- **无头树莓派 SSH 服务器** - [教程](https://openpunk.com/post/5)

## 偏执级安全设备

更极致的安全设备，虽非必需，但有趣且适合极端隐私需求：

- **自毁 PC** - ORWL PC 被入侵时自动擦除数据，需密码和密钥登录。[orwl.org](https://orwl.org)
- **Tor 旅行路由器** - 即插即用，支持 VPN/Tor。[Anonabox.com](https://www.anonabox.com)
- **硬件加密令牌** - Savvi Solutions Purrtec 需插入 USB 和密码双重认证。[Purrtec.com](http://www.purrtec.com/)
- **主动 RFID 干扰卡** - Armour Card 主动干扰 RFID 读取。[ArmourCard 网站](https://armourcard.com)
- **超声波麦克风干扰器** - 产生超声波干扰录音设备。[亚马逊](https://amzn.to/2Hnk63s)
- **GPS 干扰器** - 干扰附近 GPS 设备定位。[AliExpress](https://www.aliexpress.com/item/4000214903055.html)
- **音频干扰器/白噪声发生器** - 保护房间对话隐私。[SpyGadgets.com](https://www.spygadgets.com/rechargeable-audio-jammer-white-noise-generator-aj-40/)
- **LibremKey: USB 令牌** - 便捷安全的加密和密钥管理。[Purism](https://puri.sm/products/librem-key/)
- **Secalot: 多合一安全密钥** - 开源硬件钱包、PGP 卡、U2F 认证器。[Secalot](https://www.secalot.com/)
- **Slim 硬件 OTP 生成器** - 信用卡大小的 TOTP 令牌。[Protectimus](https://www.protectimus.com/protectimus-slim-mini/)
- **p@ss™ 手环** - 生成强密码的手环。[Tindie](https://www.tindie.com/products/russtopia/psstm-bracelet/)
- **密码卡** - 生成和记忆安全密码的卡片。[PasswordCard.org](https://www.passwordcard.org/en)
- **卡片盗刷检测器** - 检查 ATM 是否被加装盗刷设备。[Lab401](https://lab401.com/products/hunter-cat-card-skimmer-detector)
- **Deauth Detector** - 检测 WiFi 去认证攻击。[Tindie](https://www.tindie.com/products/lspoplove/dstike-deauth-detector-pre-flashed-with-detector/)
- **窃听器探测器** - 检测无线/有线窃听设备。[亚马逊](https://amzn.to/2V8z8C1)
- **多频 RF 探测器** - 检测多种无线威胁。[spygadgets.com](https://www.spygadgets.com/1207i-multi-frequency-rf-bug-detector-cdma-gsm-bluetooth-wimax/)
- **激光窃听防护器** - 干扰激光窃听。[shomer-tec](https://www.shomer-tec.com/laser-surveillance-defeater.html)
- **变声器** - 伪装语音。[亚马逊](https://amzn.to/3bXqpsn)
- **反人脸识别服饰** - 干扰人脸识别算法。[Redbubble](https://www.redbubble.com/people/naamiko/works/24714049-anti-surveillance-clothing?p=mens-graphic-t-shirt)
- **反光眼镜** - 阻挡摄像头和人脸识别。[Reflectacles](https://www.reflectacles.com)
- **硬件密码管理器** - MooltiPass 离线硬件加密密码管理器。[TheMooltiPass.com](https://www.themooltipass.com)
- **QUANTUM** - 多功能加密设备，开源钱包和密码管理器。[crypto-arts.com](https://security-arts.com/)
- **法拉第盒** - 屏蔽电磁信号，防止手机等设备被跟踪。[SilentPocket.com](https://silent-pocket.com/collections/all-products)
- **DNA 隐形剂** - 开源配方，擦除和混淆 DNA 痕迹。[DNA Invisible](http://biogenfutur.es)
- **滚轮印章** - 纸质数据擦除。[亚马逊](https://www.amazon.co.uk/Vantamo-Identity-Protection-Including-Refills/dp/B074MGBXLS/)
- **取证桥接套件** - 写保护和镜像数据。[亚马逊](https://www.amazon.com/dp/B00Q76XG5W)
- **Firewalla** - 开源智能防火墙，支持 VPN、广告拦截等。[Firewalla.com](https://firewalla.com)
- **IoTMATE v2b-CL** - 开源家庭自动化模块，无需联网，隐私友好。[Tindie](https://www.tindie.com/products/iotmate/iotmate-v2b-cl-home-automation-with-alexa-support/)
- **独立硬盘擦除器** - 无需连接电脑即可擦除硬盘。[亚马逊](https://www.amazon.com/StarTech-com-Hard-Drive-Eraser-Standalone/dp/B073X3YZNL)
- **碎纸机** - 安全销毁含个人信息的文件。[亚马逊](https://www.amazon.com/AmazonBasics-6-Sheet-High-Security-Micro-Cut-Shredder/dp/B00Q3KFX8U)
- **定时器** - 定时开关设备，防盗。[亚马逊](https://www.amazon.com/Century-Digital-Programmable-Packaging-Security/dp/B00MVF16JG)
- **SurfEasy Key** - 便携加密浏览器。[fightforthefuture.org](https://shop.fightforthefuture.org/products/surfeasy-key)
- **LoRa 私密短信收发器** | 脱离蜂窝网络的私密通信。[Tindie](https://www.tindie.com/products/DLSpectrum/two-private-texting-lora-transceivers/)
- **TrueRNG** - 真随机数发生器。[Tindie](https://www.tindie.com/products/ubldit/truerng-v3/)
- **电话窃听检测器** - 检查电话线路是否被窃听。[BrickHouseSecurity](https://www.brickhousesecurity.com/counter-surveillance/wiretap/)
- **真随机数发生器** - FST-01SZ 开源 USB 随机数发生器。[Free Software Foundation: Shop](https://shop.fsf.org/storage-devices/neug-usb-true-random-number-generator)

## 网络安全

用于保护和匿名化网络、检测和防止入侵、提供更多网络控制的设备。部分产品价格较高，也可参考上文 DIY 自制。

- **Anonabox** - 即插即用 Tor 路由器，支持 VPN 和文件共享。[Anonabox.com](anonabox.com)
- **Turris Omnia 路由器** - 开源路由器，自动更新，分布式防火墙。[turris.com](https://www.turris.com/en/omnia/overview/)
- **FingBox** - 网络监控与安全，配套免费 app。[Fing.com](https://www.fing.com/products/fingbox)
- **BitdefenderBox** - 家庭防火墙，保护 IoT 设备。[亚马逊](https://amzn.to/2vrurZJ)
- **Flashed-Routers** - 预装开源固件的品牌路由器。[flashrouters.com](https://www.flashrouters.com/routers)
- **Firewalla** - 开源智能防火墙，支持 VPN、广告拦截等。[Firewalla.com](https://firewalla.com)
- **Trend Micro Box** - 检测入侵和漏洞，家庭网络安全。[亚马逊](https://amzn.to/2wk3Y0s)
- **AlwaysHome Duo** - USB VPN，突破地理限制。[亚马逊](https://amzn.to/2Ts6oSn)
- **Firewalla Red** - 入侵检测与防护系统，带广告拦截和 VPN。[亚马逊](https://amzn.to/388BlAw)
- **LibertyShield** - 预配置多国 VPN 路由器，需订阅。[亚马逊](https://amzn.to/2T89vzU)
- **千兆旅行 VPN 路由器** - 双频 VPN 旅行路由器。[亚马逊](https://amzn.to/32HD1zU)
- **Helios 64** - 开源 NAS，本地备份，安全可靠。[Kobol.io](https://kobol.io/)
- **InvizBox** - Tor 路由器，提升所有设备的隐私安全。[Invizbox.com](https://www.invizbox.com)
- **InviziBox Go** - 便携 VPN：[亚马逊](https://amzn.to/386ikPT)
- **WatchGuard Firebox** - 商用级网络防火墙。[亚马逊](https://amzn.to/2VF0MqR)

#### DIY 网络硬件
- **[Pi-Hole](https://pi-hole.net)** - 网络级广告和追踪拦截，带 Web 界面和移动端监控。
- **[IPFire](https://www.ipfire.org)** - 基于 Linux 的开源防火墙，易用高性能。
- **[PiVPN](https://pivpn.io)** - 在 Debian 服务器上快速搭建家庭 VPN，支持 OpenVPN 和 WireGuard。
- **[E2guardian](http://e2guardian.org)** - 强大的开源网页内容过滤器。
- **[OpenWRT](https://openwrt.org)** - 强大定制路由固件，安全高性能。
- **[SquidGuard](http://www.squidguard.org)** - 网站内容控制插件，基于黑名单重定向。
- **[PF Sense](https://www.pfsense.org)** - 广泛使用的开源防火墙/路由器。
- **[Zeek](https://www.zeek.org)** - 网络分析与恶意软件检测框架。

[查看更多](https://geekflare.com/best-open-source-firewall) 开源防火墙应用

大多数项目用树莓派 3 或 4 即可。也可自制硬件，见[此教程](https://www.instructables.com/id/Build-your-own-gateway-firewall)。

## 安全计算设备

- **ORWL PC** - 自毁 PC，被入侵时自动擦除数据。[orwl.org](https://orwl.org)
- **Librem 5** - Purism 推出的开源安全手机。[puri.sm/products/librem-5](https://puri.sm/products/librem-5)
- **Armadillo Phones** - 加密手机、SIM 卡和网络，开源密钥链软件。[ArmadilloPhone.com](https://www.armadillophone.com/store#diamond)
- **KryptAll** - 加密移动网络，安全通话。[KryptAll.com](https://www.kryptall.com)
- **WiPhone** - 开源 VOIP/LoRa 手机，适合开发和自由通信。[WiPhone.io](https://www.wiphone.io/)
- **Ano-Phone** - 加强安全防护的安卓设备，非开源。[ano-phone.com](https://ano-phone.com)
- **Secure Group** - 硬件加密智能手机。[SecureGroup.com](https://securegroup.com/hardware)
- **Librem Laptop** - Purism 推出的开源加密笔记本，带物理开关和防篡改硬件。[puri.sm](https://puri.sm/products)

## 硬件加密存储

硬件加密设备自带加密芯片，无需额外软件，跨平台安全。即使设备被盗，数据也安全。可与软件加密结合提升安全性。

可靠选项包括：

- AES 硬件加密 USB 3.0 外置硬盘盒：[英国](https://amzn.to/2GM3GkB)
- Integral 256 位 AES USB 3.0（需软件），16GB/32GB/64GB。[英国](https://amzn.to/37vpyNb)
- iStorage 256 位 AES USB 3.0 Pro（硬件加密，带键盘），8GB/16GB/32GB/64GB。[美国](https://amzn.to/2T9wTgo) | [英国](https://amzn.to/2O1OPXu)
- IornKey 企业级加密 U 盘，4GB~128GB。[美国](https://amzn.to/2wYWQH2) | [英国](https://amzn.to/3cjsnUi)
- iStorage 256 位 AES USB 3.0 Personal（硬件加密，带键盘），8GB~64GB。[美国](https://amzn.to/2I99c1G) | [英国](https://amzn.to/38GzHqo)
- Lexar JumpDrive 指纹加密 U 盘（需软件），32GB~256GB。[美国](https://amzn.to/38b0eeP) | [英国](https://amzn.to/2GtipRC)
- iStorage 256 位硬件加密外置 USB 3.1 SSD，128GB~1TB。[英国](https://amzn.to/37wkhVA)
- iStorage 256 位硬件加密外置 USB 3.1 HDD，1TB~4TB。[美国](https://amzn.to/32DI4RA) | [英国](https://amzn.to/37vpFYN)
- iodd Mini USB 3.0 256 位加密 SSD，256GB~1TB。[英国](https://www.amazon.co.uk/dp/B07Y4FR9H7)

*更经济的选择是软件加密 U 盘。[VeraCrypt](https://www.veracrypt.fr/en/Home.html) 是跨平台开源加密工具，简单安全。可搭配普通 U 盘使用。*

*系统盘加密可用 [BitLocker](https://docs.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview)（Windows）、[FileVault](https://support.apple.com/en-us/HT204837)（OSX）或 [Linux 方案](https://www.tecmint.com/file-and-disk-encryption-tools-for-linux)。*

## USB 数据隔离器

小巧低价但必不可少的设备，插在 USB 线和充电口之间，物理阻断数据传输，仅允许充电，防止 USB 攻击。

- PortaPow 3 代，USB A，2 个装。[红色](https://amzn.to/39aStqE) | [白色](https://amzn.to/2TqXl4i) | [黑色](https://amzn.to/38imYd2)
- PortaPow 双 USB 电源监控器，带数据隔离。[美国](https://amzn.to/2I7HT7J) | [英国](https://amzn.to/3chnWcJ)
- Privise USB A 数据隔离器。[美国](https://amzn.to/3cig0rr) | [英国](https://amzn.to/2VAbX3K)
- 数据专用 Micro-USB 线，PortaPow 安全充电线。[美国](https://amzn.to/2Tq09ys) | [英国](https://amzn.to/38chHDF)
- USB-C ondom，开源 USB-C 数据隔离器。[Tindie](https://www.tindie.com/products/CrowbarTech/usb-c-ondom/)

PortaPow（3 代）带有 SmartCharge 芯片，兼容快充。

也可自制，[原理图](https://www.electroschematics.com/diy-usb-condom-circuit)。

注意：有些数据线本身可能有风险，见 [O.M.G Cable](https://shop.hak5.org/products/o-mg-cable)。建议标记自己的线材。

## FIDO U2F 密钥

物理二次认证密钥是安全便捷的认证方式。更多支持网站见 [twofactorauth.org](https://twofactorauth.org)。

- **[Solo Key](https://solokeys.com)** - 开源 U2F/FIDO2 密钥，支持 NFC。
- **[LibremKey](https://puri.sm/products/librem-key/)** - USB 安全令牌，便于加密和密钥管理。
- **[OnlyKey](onlykey.io/alicia)** - 开源硬件密码管理器，支持 FIDO2/U2F。
- **[NitroKey](https://www.nitrokey.com/)** - 开源安全 USB，支持认证、加密、SSH 密钥等。
- **[Secalot](https://www.secalot.com/)** - 开源多功能 USB，硬件钱包、PGP 卡、U2F、OTP。
- **[Protectimus](https://www.protectimus.com/protectimus-slim-mini/)** - 信用卡大小 TOTP 硬件令牌。
- **[Yubikey](https://www.yubico.com/products/)** - 流行易用的认证密钥，支持多种接口，非开源。
- **[Thetis](https://thetis.io)** - 耐用移动友好型 USB-A FIDO U2F 密钥。
- **[U2F Zero](https://u2fzero.com/)** - 开源 U2F 令牌，具备高熵随机数发生器。

也可自制，见 [U2f-Zero](https://github.com/conorpp/u2f-zero) 或 [NitroKey](https://github.com/nitrokey)，ESP8266 DIY 见[此文](https://hackaday.com/2018/01/04/two-factor-authentication-with-the-esp8266/)。

## 加密钱包

最安全的加密货币存储方式是冷钱包（离线），避免被黑。选择开源、口碑好的钱包，妥善备份助记词。

- Trezor 全开源，固件安全。[Trezor.com](https://trezor.io)
- Prokey Optimum 离线钱包，支持 1000+ 币种，[开源](https://github.com/prokey-io)。[Prokey.io](https://prokey.io/?reflink=67e4a39bc5cd4c04bd7f38b50b041c1f)
- Ledger 功能丰富，易用但非开源。[Ledger.com](https://shop.ledger.com/pages/hardware-wallets-comparison)
- 金属冷钱包，防水防火。[美国](https://amzn.to/2Px0EFV) | [英国](https://amzn.to/2VLeVmr)
- QUANTUM 多功能加密设备，开源钱包和密码管理器。[crypto-arts.com](https://security-arts.com/)

购买时请确保包装未被拆封，尽量官网购买。

---

## 另见

- [优秀隐私友好软件](https://github.com/Lissy93/awesome-privacy)
- [终极个人安全清单](/README.md)
- [为什么隐私和安全重要](/0_Why_It_Matters.md)
- [更多链接与资源](/4_Privacy_And_Security_Links.md)

欢迎贡献和建议 —— 提交 [issue](https://github.com/Lissy93/personal-security-checklist/issues/new/choose) 或 [PR](https://github.com/Lissy93/personal-security-checklist/pull/new/master)。参见 [`CONTRIBUTING.md`](/.github/CONTRIBUTING.md)

*采用 [知识共享 CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 许可，© [Alicia Sykes](https://aliciasykes.com) 2020*

[![Attribution 4.0 International](https://licensebuttons.net/l/by/3.0/88x31.png)](https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE.md)

---

觉得有用？欢迎分享给他人，一起提升数字安全 😇

[![分享到 Twitter](https://img.shields.io/badge/Share-Twitter-17a2f3?style=for-the-badge&logo=Twitter)](http://twitter.com/share?text=Check%20out%20the%20Personal%20Cyber%20Security%20Checklist-%20an%20ultimate%20list%20of%20tips%20for%20protecting%20your%20digital%20security%20and%20privacy%20in%202020%2C%20with%20%40Lissy_Sykes%20%F0%9F%94%90%20%20%F0%9F%9A%80&url=https://github.com/Lissy93/personal-security-checklist)
[![分享到 LinkedIn](https://img.shields.io/badge/Share-LinkedIn-0077b5?style=for-the-badge&logo=LinkedIn)](
http://www.linkedin.com/shareArticle?mini=true&url=https://github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=https://github.com/Lissy93)
[![分享到 Facebook](https://img.shields.io/badge/Share-Facebook-4267b2?style=for-the-badge&logo=Facebook)](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=)
[![分享到 Mastodon](https://img.shields.io/badge/Share-Mastodon-56a7e1?style=for-the-badge&logo=Mastodon)](https://mastodon.social/web/statuses/new?text=Check%20out%20the%20Ultimate%20Personal%20Cyber%20Security%20Checklist%20by%20%40Lissy93%20on%20%23GitHub%20%20%F0%9F%94%90%20%E2%9C%A8)
