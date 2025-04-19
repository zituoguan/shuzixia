# 个人网络安全 | TLDR [![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![欢迎 PR](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![许可证](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/)[![贡献者](https://img.shields.io/github/contributors/lissy93/personal-security-checklist?color=%23ffa900&style=flat-square)](/ATTRIBUTIONS.md#contributors-)

#### 目录
- [个人安全清单](#personal-security-checklist)
- [注重隐私的软件](#open-source-privacy-focused-software)
- [安全硬件](#security-hardware)

## 个人安全清单

> 这份隐私与安全提示清单，是[完整个人安全清单](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md)的简要版。它列出了保护你数字生活最重要的步骤。

### 认证
- 为每个账户使用长、强且唯一的密码（参见 [HowSecureIsMyPassword.net](https://howsecureismypassword.net)）
- 使用安全的[密码管理器](https://github.com/Lissy93/awesome-privacy#password-managers)来加密、存储和填写凭据，如 [BitWarden](https://bitwarden.com) 或 [KeePass](https://keepass.info) / [KeePassXC](https://keepassxc.org)
- 在可用时启用双因素认证，并使用[身份验证器应用](https://github.com/Lissy93/awesome-privacy#2-factor-authentication)或[硬件令牌](/6_Privacy_and-Security_Gadgets.md#fido-u2f-keys)
- 启用多因素认证时，通常会获得若干备用码，以防2FA方式丢失、损坏或不可用。应将这些码写在纸上或安全地保存在磁盘上（如离线存储或加密文件/驱动器中）
- 注册数据泄露提醒（如 [Firefox Monitor](https://monitor.firefox.com) 或 [HaveIBeenPwned](https://haveibeenpwned.com)），并及时更新被泄露账户的密码

### 浏览
- 使用注重隐私的浏览器，[Brave](https://brave.com) 和 [Firefox](https://www.mozilla.org/en-US/exp/firefox/new) 是不错的选择。将默认搜索引擎设置为不追踪的引擎，如 [DuckDuckGo](https://duckduckgo.com)

## 开源且注重隐私的软件

切换到开源、注重隐私的替代应用和服务，这些软件不会收集你的数据、跟踪你或推送定向广告。

#### 安全
- 密码管理器：[BitWarden] | [1Password]（专有）| [KeePassXC]（本地离线）| [LessPass]（无状态）
- 双因素认证：[Aegis]（Android）| [Authenticator]（iOS）| [AndOTP]（Android）
- 文件加密：[VeraCrypt] | [Cryptomator]（适用于云端）
- 加密消息：[Signal] | [KeyBase]（适合群组/社区）
- 加密邮件：[ProtonMail] | [MailFence] | [Tutanota] | （以及 [33Mail]、[anonaddy] 用于邮箱别名）
- 注重隐私的浏览器：[Brave Browser] | [Firefox]（可参考[优化建议](https://restoreprivacy.com/firefox-privacy/)）| [Tor]
- 非追踪搜索引擎：[DuckDuckGo] | [StartPage] | [SearX]（自建）| [Qwant]
- VPN：[Mullvad] | [ProtonVPN] | [Windscribe] | [IVPN]（更进一步可用 [Tor] 匿名）。另见 [VPN 注意事项]
- 应用防火墙：[NetGuard]（Android）| [Lockdown]（iOS）| [OpenSnitch]（Linux）| [LuLu]（MacOS）

#### 浏览器扩展
- [Privacy Badger] - 阻止追踪器
- [HTTPS Everywhere] - 自动升级为 HTTPS
- [uBlock Origin] - 屏蔽广告、追踪器和恶意软件
- [ScriptSafe] - 阻止特定脚本执行
- [WebRTC Leak Prevent] - 防止 IP 泄露
- [Vanilla Cookie Manager] - 自动清理不需要的 Cookie
- [Privacy Essentials] - 显示哪些网站不安全

#### 移动应用
- [Exodus] - 显示设备上有哪些追踪器
- [Orbot] - 全局 Tor 代理
- [Island] - 应用沙盒环境
- [NetGuard] - 控制哪些应用可访问网络
- [Bouncer] - 临时授权权限
- [Greenify] - 控制哪些应用可在后台运行
- [1.1.1.1] - 使用 CloudFlare 的 DNS over HTTPS
- [Fing App] - 监控家庭 WiFi 网络是否有入侵者

#### 在线工具
- [εxodus] - 检查应用包含哪些追踪器
- [';--have i been pwned?] - 检查你的信息是否在数据泄露中被曝光
- [EXIF Remover] - 移除图片或文件的元数据
- [Redirect Detective] - 显示链接跳转路径
- [Virus Total] - 检查文件或网址是否含有恶意软件
- [Panopticlick]、[Browser Leak Test] 和 [IP Leak Test] - 检查系统和浏览器是否存在隐私泄露

#### 效率工具
- 文件存储：[NextCloud]
- 文件同步：[Syncthing]
- 文件投递：[FilePizza]
- 笔记：[Standard Notes]、[Cryptee]、[Joplin]
- 博客：[Write Freely]
- 日历/联系人同步：[ETE Sync]

📜 **查看更多**：[完整隐私友好软件列表](https://github.com/Lissy93/awesome-privacy)

----

## 安全硬件

还有一些硬件设备可以帮助提升你的物理和数字安全。

- **阻断器与屏蔽器**：[PortaPow] - USB 数据阻断器 | [Mic Block] - 物理禁用麦克风 | [Silent-Pocket] - 信号屏蔽法拉第袋 | [Lindy] - 物理端口阻断器 | [RFID 屏蔽卡] | [摄像头遮挡] | [防窥屏幕]
- **加密钱包**：[Trezor] - 硬件钱包 | [CryptoSteel] - 不可摧毁的钢制加密钱包
- **FIDO U2F 密钥**：[Solo Key] | [Nitro Key] | [Librem Key]
- **数据阻断器**：[PortaPow] - 阻断数据传输，防止恶意软件上传攻击，同时支持快速充电
- **硬件加密存储**：[iStorage] - PIN 认证的 256 位硬件加密存储 | [加密硬盘盒]
- **网络设备**：[Anonabox] - 即插即用 Tor 路由器 | [FingBox] - 家庭网络自动安全监控
- **极客安全设备！** [Orwl] - 自毁型电脑 | [Hunter-Cat] - 信用卡盗刷检测器 | [Adversarial Fashion] - 反人脸识别服饰 | [DSTIKE Deauth Detector] - 检测断开攻击，来自 [Spacehuhn] | [Reflectacles] - 反监控眼镜 | [Armourcard] - 主动 RFID 干扰 | [Bug-Detector] - 检查射频窃听设备 | [超声波麦克风干扰器] - 发出人耳听不到但能干扰录音设备的信号

大多数产品无需花钱——这些设备大多可以用开源软件在家自制。这里有一份 [DIY 安全硬件清单](/6_Privacy_and-Security_Gadgets.md#diy-security-products)。

📜 **查看更多**：[隐私与安全硬件](/6_Privacy_and-Security_Gadgets.md)

----

*感谢你的访问，希望你在这里有所收获 :) 欢迎贡献内容，非常感谢——如需提出修改建议，请[提交 issue](https://github.com/Lissy93/personal-security-checklist/issues/new/choose)，或[发起 PR](https://github.com/Lissy93/personal-security-checklist/pull/new/master)。参见：[《贡献指南》](/.github/CONTRIBUTING.md)。*

----

觉得有用？欢迎分享给他人，帮助他们提升数字安全 😇

[![分享到 Twitter](https://img.shields.io/badge/Share-Twitter-17a2f3?style=flat-square&logo=Twitter)](http://twitter.com/share?text=Check%20out%20the%20Personal%20Cyber%20Security%20Checklist-%20an%20ultimate%20list%20of%20tips%20for%20protecting%20your%20digital%20security%20and%20privacy%20in%202020%2C%20with%20%40Lissy_Sykes%20%F0%9F%94%90%20%20%F0%9F%9A%80&url=https://github.com/Lissy93/personal-security-checklist)
[![分享到 LinkedIn](https://img.shields.io/badge/Share-LinkedIn-0077b5?style=flat-square&logo=LinkedIn)](
http://www.linkedin.com/shareArticle?mini=true&url=https://github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=https://github.com/Lissy93)
[![分享到 Facebook](https://img.shields.io/badge/Share-Facebook-4267b2?style=flat-square&logo=Facebook)](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/Lissy93/personal-security-checklist&title=The%20Ultimate%20Personal%20Cyber%20Security%20Checklist&summary=%F0%9F%94%92%20A%20curated%20list%20of%20100%2B%20tips%20for%20protecting%20digital%20security%20and%20privacy%20in%202020&source=)
[![分享到 Mastodon](https://img.shields.io/badge/Share-Mastodon-56a7e1?style=flat-square&logo=Mastodon)](https://mastodon.social/web/statuses/new?text=Check%20out%20the%20Ultimate%20Personal%20Cyber%20Security%20Checklist%20by%20%40Lissy93%20on%20%23GitHub%20%20%F0%9F%94%90%20%E2%9C%A8)

*本作品采用 [知识共享署名 4.0 国际许可协议](https://creativecommons.org/licenses/by/4.0/) 授权，© [Alicia Sykes](https://aliciasykes.com) 2020*

<a href="https://twitter.com/intent/follow?screen_name=Lissy_Sykes">
  <img src="https://img.shields.io/twitter/follow/Lissy_Sykes?style=social&logo=twitter" alt="关注 Alicia Sykes 的 Twitter">
</a>

[//]: # (SECURITY SOFTWARE LINKS)
[BitWarden]: https://bitwarden.com
[1Password]: https://1password.com
[KeePassXC]: https://keepassxc.org
[LessPass]: https://lesspass.com
[Aegis]: https://getaegis.app
[AndOTP]: https://github.com/andOTP/andOTP
[Authenticator]: https://mattrubin.me/authenticator
[VeraCrypt]: https://www.veracrypt.fr
[Cryptomator]: https://cryptomator.org
[Tor]: https://www.torproject.org
[Pi-Hole]: https://pi-hole.net
[Mullvad]: https://mullvad.net
[ProtonVPN]: https://protonvpn.com
[Windscribe]: https://windscribe.com/?affid=6nh59z1r
[IVPN]: https://www.ivpn.net
[NetGuard]: https://www.netguard.me
[Lockdown]: https://lockdownhq.com
[OpenSnitch]: https://github.com/evilsocket/opensnitch
[LuLu]: https://objective-see.com/products/lulu.html
[SimpleWall]: https://github.com/henrypp/simplewall
[33Mail]: http://33mail.com/Dg0gkEA
[anonaddy]: https://anonaddy.com
[Signal]: https://signal.org
[KeyBase]: https://keybase.io
[ProtonMail]: https://protonmail.com
[MailFence]: https://mailfence.com
[Tutanota]: https://tutanota.com
[Brave Browser]: https://brave.com/?ref=ali721
[Firefox]: https://www.mozilla.org/
[DuckDuckGo]: https://duckduckgo.com
[StartPage]: https://www.startpage.com
[Qwant]: https://www.qwant.com
[SearX]: https://asciimoo.github.io/searx

[VPN Warning Note]: https://github.com/Lissy93/personal-security-checklist/blob/master/5_Privacy_Respecting_Software.md#word-of-warning-8

[//]: # (PRODUCTIVITY SOFTWARE LINKS)
[NextCloud]: https://nextcloud.com
[Standard Notes]: https://standardnotes.org/?s=chelvq36
[Cryptee]: https://crypt.ee
[Joplin]: https://joplinapp.org
[ETE Sync]: https://www.etesync.com/accounts/signup/?referrer=QK6g
[FilePizza]: https://file.pizza/
[Syncthing]: https://syncthing.net
[Write Freely]: https://writefreely.org

[//]: # (BROWSER EXTENSION LINKS)
[Privacy Badger]: https://www.eff.org/privacybadger
[HTTPS Everywhere]: https://eff.org/https-everywhere
[uBlock Origin]: https://github.com/gorhill/uBlock
[ScriptSafe]: https://github.com/andryou/scriptsafe
[WebRTC Leak Prevent]: https://github.com/aghorler/WebRTC-Leak-Prevent
[Vanilla Cookie Manager]: https://github.com/laktak/vanilla-chrome
[Privacy Essentials]: https://duckduckgo.com/app

[//]: # (ONLINE SECURITY TOOLS)
[';--have i been pwned?]: https://haveibeenpwned.com
[εxodus]: https://reports.exodus-privacy.eu.org
[Panopticlick]: https://panopticlick.eff.org
[Browser Leak Test]: https://browserleaks.com
[IP Leak Test]: https://ipleak.net
[EXIF Remover]: https://www.exifremove.com
[Redirect Detective]: https://redirectdetective.com
[Virus Total]: https://www.virustotal.com

[//]: # (ANDROID APP LINKS)
[Island]: https://play.google.com/store/apps/details?id=com.oasisfeng.island
[Orbot]: https://play.google.com/store/apps/details?id=org.torproject.android
[Orbot]: https://play.google.com/store/apps/details?id=org.torproject.android
[Bouncer]: https://play.google.com/store/apps/details?id=com.samruston.permission
[Crypto]: https://play.google.com/store/apps/details?id=com.kokoschka.michael.crypto
[Cryptomator]: https://play.google.com/store/apps/details?id=org.cryptomator
[Daedalus]: https://play.google.com/store/apps/details?id=org.itxtech.daedalus
[Brevent]: https://play.google.com/store/apps/details?id=me.piebridge.brevent
[Greenify]: https://play.google.com/store/apps/details?id=com.oasisfeng.greenify
[Secure Task]: https://play.google.com/store/apps/details?id=com.balda.securetask
[Tor Browser]: https://play.google.com/store/apps/details?id=org.torproject.torbrowser 
[PortDroid]: https://play.google.com/store/apps/details?id=com.stealthcopter.portdroid
[Packet Capture]: https://play.google.com/store/apps/details?id=app.greyshirts.sslcapture
[SysLog]: https://play.google.com/store/apps/details?id=com.tortel.syslog
[Dexplorer]: https://play.google.com/store/apps/details?id=com.dexplorer
[Check and Test]: https://play.google.com/store/apps/details?id=com.inpocketsoftware.andTest
[Tasker]: https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm
[Haven]: https://play.google.com/store/apps/details?id=org.havenapp.main
[NetGaurd]: https://www.netguard.me/
[Exodus]: https://exodus-privacy.eu.org/en/page/what/#android-app
[XUMI Security]: https://xumi.ca/xumi-security/
[Fing App]: https://www.fing.com/products/fing-app
[FlutterHole]: https://github.com/sterrenburg/flutterhole
[1.1.1.1]: https://1.1.1.1/
[The Guardian Project]: https://play.google.com/store/apps/dev?id=6502754515281796553
[The Tor Project]: https://play.google.com/store/apps/developer?id=The+Tor+Project
[Oasis Feng]: https://play.google.com/store/apps/dev?id=7664242523989527886
[Marcel Bokhorst]: https://play.google.com/store/apps/dev?id=8420080860664580239

[//]: # (SECURITY HARDWARE LINKS)
[Encrypted Drive Enclosure]: https://www.startech.com/HDD/Enclosures/encrypted-sata-enclosure-2-5in-hdd-ssd-usb-3~S2510BU33PW
[iStorage]: https://istorage-uk.com
[PortaPow]: https://portablepowersupplies.co.uk/product/usb-data-blocker
[Lindy]: https://lindy.com/en/technology/port-blockers
[Mic Block]: https://www.aliexpress.com/item/4000542324471.html
[RFID Shields]: https://www.aliexpress.com/item/32976382478.html
[Webcam Covers]: https://www.aliexpress.com/item/4000393683866.html
[Privacy Screen]: https://www.aliexpress.com/item/32906889317.html
[Trezor]: https://trezor.io
[CryptoSteel]: https://cryptosteel.com/product/cryptosteel/?v=79cba1185463
[Solo Key]: https://solokeys.com
[Nitro Key]: https://www.nitrokey.com
[Librem Key]: https://puri.sm/products/librem-key
[Anonabox]: https://www.anonabox.com
[FingBox]: https://www.fing.com/products/fingbox
[Orwl]: https://orwl.org
[Hunter-Cat]: https://lab401.com/products/hunter-cat-card-skimmer-detector
[DSTIKE Deauth Detector]: https://www.tindie.com/products/lspoplove/dstike-deauth-detector-pre-flashed-with-detector
[Bug-Detector]: https://www.brickhousesecurity.com/counter-surveillance/multi-bug
[Ultrasonic Microphone Jammer]: https://uspystore.com/silent-ultrasonic-microphone-defeater
[Silent-Pocket]: https://silent-pocket.com
[Armourcard]: https://armourcard.com
[Adversarial Fashion]: https://adversarialfashion.com
[Reflectacles]: https://www.reflectacles.com
[Spacehuhn]: https://github.com/spacehuhn/DeauthDetector

