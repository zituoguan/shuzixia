# 隐私与安全精选链接

[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![License](https://img.shields.io/badge/LICENSE-CC_BY_4.0-00a2ff?&style=flat-square)](https://creativecommons.org/licenses/by/4.0/) [![Contributors](https://img.shields.io/github/contributors/lissy93/personal-security-checklist?color=%23ffa900&style=flat-square)](https://github.com/Lissy93/personal-security-checklist/graphs/contributors)

*精选与数字安全、互联网自由和在线隐私相关的指南、文章、工具和媒体的列表*

**另请参阅**: [个人安全清单](https://github.com/Lissy93/personal-security-checklist/blob/master/README.md) | [隐私友好软件](https://github.com/Lissy93/personal-security-checklist/blob/master/5_Privacy_Respecting_Software.md) | [安全小工具](/6_Privacy_and-Security_Gadgets.md) | [隐私为何重要](/0_Why_It_Matters.md) | [简要概述](/2_TLDR_Short_List.md)🔐

## 目录

- **信息与指南**
  - [操作指南](#how-to-guides)
  - [文章](#articles)
  - [博客](#blogs)
- **媒体资源**
  - [书籍](#books)
  - [播客](#podcasts)
  - [视频](#videos)
- **安全工具与服务**
  - [在线工具](#online-tools)
  - 隐私友好软件，已移至 [此处](https://github.com/Lissy93/awesome-privacy)
  - 安全硬件，已移至 [此处](/6_Privacy_and-Security_Gadgets.md)
- **研究**
  - [数据与API](#data-apis-and-visualisations)
  - [学术资源](#academic)
- **组织机构**
  - [基金会](#foundations)
  - [政府与独立组织](#governance)
- **更多列表**
  - [综合指南](#mega-guides)
  - [其他GitHub安全列表](#more-awesome-github-lists)


## 操作指南

- **威胁防护**
  - 防范SIM卡交换诈骗：通过 [Wired](https://www.wired.com/story/sim-swap-attack-defend-phone)
  - 如何识别网络钓鱼攻击：通过 [EFF](https://ssd.eff.org/en/module/how-avoid-phishing-attacks)
  - 防止身份盗窃：通过 [Restore Privacy](https://restoreprivacy.com/identity-theft-fraud)
  - 使用KeyScrambler防止键盘记录：通过 [TechRepublic](https://www.techrepublic.com/blog/it-security/keyscrambler-how-keystroke-encryption-works-to-thwart-keylogging-threats)
  - 使用哈希校验确保程序未被篡改：通过 [ProPrivacy](https://proprivacy.com/guides/how-why-and-when-you-should-hash-check)
  - 在Linux中永久安全地删除文件和目录：通过 [TechMint](https://www.tecmint.com/permanently-and-securely-delete-files-directories-linux/)
- **网络安全**
  - 如何启用DNS over HTTPS：通过 [GeekWire](https://geekwire.co.uk/privacy-and-security-focused-dns-resolver)
  - 如何解决DNS泄漏问题：通过 [DNSLeakTest](https://www.dnsleaktest.com/how-to-fix-a-dns-leak.html)
  - 防止WebRTC泄漏：通过 [Restore Privacy](https://restoreprivacy.com/webrtc-leaks)
  - ISP和DNS隐私提示：通过 [Bluz71](https://bluz71.github.io/2018/06/20/digital-privacy-tips.html)
  - Tor浏览器入门指南：通过 [ProPrivacy](https://proprivacy.com/privacy-service/guides/ultimate-tor-browser-guide)
  - I2P入门指南：通过 [The Tin Hat](https://thetinhat.com/tutorials/darknets/i2p.html)
  - 同时使用VPN和Tor的指南：通过 [ProPrivacy](https://proprivacy.com/vpn/guides/using-vpn-tor-together)
  - 使用`__nomap`减少SSID的公共暴露：通过 [Ghacks](https://www.ghacks.net/2014/10/29/add-_nomap-to-your-routers-ssid-to-have-it-ignored-by-google-and-mozilla/)
  - 最新的路由器配置以增强安全性：通过 [RouterSecurity.org](https://routersecurity.org/)
- **通信**
  - 邮件自我防护：从零开始安全配置邮件客户端 - 通过 [FSF.org](https://emailselfdefense.fsf.org)
  - 如何避免网络钓鱼攻击：通过 [EFF](https://ssd.eff.org/en/module/how-avoid-phishing-attacks)
  - 如何使用PGP：通过EFF - [Windows](https://ssd.eff.org/en/module/how-use-pgp-windows)、[MacOS](https://ssd.eff.org/en/module/how-use-pgp-mac-os-x) 和 [Linux](https://ssd.eff.org/en/module/how-use-pgp-linux)
  - 生成更安全的GPG密钥的分步指南：通过 [spin.atomicobject.com](https://spin.atomicobject.com/2013/11/24/secure-gpg-keys-guide/)
  - 如何在比特币交易中保持匿名：通过 [Coinsutra.com](https://coinsutra.com/anonymous-bitcoin-transactions/)
  - Signal（安全消息应用）入门指南：通过 [Freedom of the Press Foundation](https://freedom.press/news/signal-beginners/)
  - 在MacOS上使用Adium进行OTR消息传递：通过 [CalyxInstitute.org](https://calyxinstitute.org/docs/howto-encrypted-instant-messaging-with-osx-adium-and-otr)
  - 使用纯文本邮件的完整指南：通过 [useplaintext.email](https://useplaintext.email/)
- **设备**
  - 如何启用设备加密：通过 [SpreadPrivacy.com](https://spreadprivacy.com/how-to-encrypt-devices/)
  - 如何安全删除数据：通过EFF - [Windows](https://ssd.eff.org/en/module/how-delete-your-data-securely-windows)、[MacOS](https://ssd.eff.org/en/module/how-delete-your-data-securely-macos) 和 [Linux](https://ssd.eff.org/en/module/how-delete-your-data-securely-linux)
  - 个人技术安全的多层防护：通过 [The Wire Cutter](https://thewirecutter.com/blog/internet-security-layers)
  - 设备隐私指南：通过 [SpreadPrivacy](https://spreadprivacy.com/tag/device-privacy-tips/)
    - 针对：[Windows 10](https://spreadprivacy.com/windows-10-privacy-tips/)、[MacOS](https://spreadprivacy.com/mac-privacy-tips/)、[Linux](https://spreadprivacy.com/linux-privacy-tips/)、[Android](https://spreadprivacy.com/android-privacy-tips/) 和 [iOS](https://spreadprivacy.com/iphone-privacy-tips/)
  - 清理Windows操作系统以防止取证调查的指南：由u/moschles提供，通过 [Reddit](https://www.reddit.com/r/security/comments/32fb1l/open_guide_to_scrubbing_windows_oss_from_forensic)
  - Windows域强化技术的精选列表：由@PaulSec提供，通过 [GitHub](https://github.com/PaulSec/awesome-windows-domain-hardening)
  - 配置Gboard以提高隐私：通过 [Ghacks](https://www.ghacks.net/2016/12/21/configure-gboard-privacy-google-keyboard/)
  - 提高隐私的iPhone设置更新：通过 [Lifehacker](https://lifehacker.com/the-privacy-enthusiasts-guide-to-using-an-iphone-1792386831)
  - 如何检查应用权限（Android、iOS、Mac和Windows）：通过 [Wired](https://www.wired.com/story/how-to-check-app-permissions-ios-android-macos-windows/)
- **软件**
  - 配置Firefox以提高隐私和速度的完整指南：通过 [12bytes](https://12bytes.org/articles/tech/firefox/firefoxgecko-configuration-guide-for-privacy-and-performance-buffs/)
  - Firefox配置指南（适合初学者）：通过 [12bytes](https://12bytes.org/articles/tech/firefox/the-firefox-privacy-guide-for-dummies/)
  - 如何使用VeraCrypt：通过 [HowToGeek](https://www.howtogeek.com/108501/the-how-to-geek-guide-to-getting-started-with-truecrypt)
  - 如何使用KeePassXC：通过 [EFF](https://ssd.eff.org/en/module/how-use-keepassxc)
  - 如何使用uMatrix浏览器插件阻止跟踪器：通过 [ProPrivacy](https://proprivacy.com/privacy-service/guides/lifehacks-setup-umatrix-beginners)
  - 如何在常见网站上设置双因素认证：通过 [The Verge](https://www.theverge.com/2017/6/17/15772142/how-to-set-up-two-factor-authentication)
  - 如何使用DuckDuckGo高级搜索功能：通过 [Ghacks](https://www.ghacks.net/2013/03/24/duckduckgo-another-bag-of-tricks-to-get-the-most-out-of-it/)
  - 如何使用Cryptomator（加密云存储文件）：通过 [It's Foss](https://itsfoss.com/cryptomator/)
- **物理安全**
  - 匿名生活指南、个人数据移除和信用冻结：通过 [IntelTechniques.com](https://inteltechniques.com/data/workbook.pdf)
  - 如何躲避物理监控：通过 [Snallabolaget](http://snallabolaget.com/hiding-from-surveillance-how-and-why)
  - 退出公共数据列表和营销名单的指南：通过 [World Privacy Forum](https://www.worldprivacyforum.org/2015/08/consumer-tips-top-ten-opt-outs)
  
- **企业**
  - 符合GDPR合规性的基本检查清单：通过 [GDPR Checklist](https://gdprchecklist.io)

- **参考信息**
  - 支持双因素认证（2FA）的网站、应用和服务目录：通过 [TwoFactorAuth.org](https://twofactorauth.org)
  - 提供直接链接以删除网络服务账户的目录：通过 [JustDeleteMe.xyz](https://justdeleteme.xyz)
  - 公正的VPN比较数据：通过 [ThatOnePrivacySite](https://thatoneprivacysite.net/#detailed-vpn-comparison)
  - 服务条款；未阅读 - 提取隐私政策/服务条款中的关键细节，旨在解决盲目同意条款的问题：通过 [tosdr.org](https://tosdr.org/)
  - 免费、开源且注重隐私的流行软件替代品：通过 [Switching.Software](https://switching.software/)
  - Mozilla从隐私角度进行的产品评测：通过 [Privacy Not Included](https://foundation.mozilla.org/en/privacynotincluded)
  - 监控目录 - 政府秘密监控设备数据库，斯诺登：通过 [The Intercept](https://theintercept.com/surveillance-catalogue)
    - 另见：WikiLeaks上的源代码 [Vault7](https://wikileaks.org/vault7) 和 [Vault8](https://wikileaks.org/vault8)，以及相关 [新闻稿](https://wikileaks.org/ciav7p1)
  - 谁支持你的隐私？ - 哪些公司遵守政府数据请求（2019年）：通过 [EFF](https://www.eff.org/wp/who-has-your-back-2019)
  - 检查您所在地区的地方和政府代表：[WhoAreMyRepresentatives.org](https://whoaremyrepresentatives.org)
  - 开放项目，用于评级、注释和存档隐私政策：通过 [PrivacySpy.org](https://privacyspy.org)
  - 阻止的主机列表：通过 [someonewhocares/ hosts](https://someonewhocares.org/hosts) / [StevenBlack/ hosts](https://github.com/StevenBlack/hosts)
  - 魔术数字 - 最新的文件签名表，用于识别/验证文件未被篡改：通过 [GaryKessler](https://www.garykessler.net/library/file_sigs.html)
  - 各国IP范围列表：通过 [Nirsoft](https://www.nirsoft.net/countryip)
  - 各种设备按制造商和型号的默认密码数据库：通过 [Default-Password.info](https://default-password.info)

- **全面的数字和物理安全**
  - Umbrella：一个开源的iOS/Android/Web应用，用于学习和管理数字、操作和物理安全（从安全通信到应对绑架）：通过 [Security First](https://www.secfirst.org)


  ## 文章
  - **通用**
    - 隐私为何重要的8点宣言：通过 [whyprivacymatters.org](https://whyprivacymatters.org)
    - 重新思考数字广告：通过 [TheInternetHealthReport](https://internethealthreport.org/2019/rethinking-digital-ads)
  - **加密**
    - 下一代安全电子邮件项目概述：通过 [OpenTechFund](https://github.com/OpenTechFund/secure-email)
    - GPG密钥的结构解析：通过 [@DaveSteele](https://davesteele.github.io/gpg/2014/09/20/anatomy-of-a-gpg-key/)
  - **监控**
    - 一千两百万部手机，一个数据集，零隐私：通过 [纽约时报](https://www.nytimes.com/interactive/2019/12/19/opinion/location-tracking-cell-phone.html)
    - Windows数据发送：通过 [The Hacker News](https://thehackernews.com/2016/02/microsoft-windows10-privacy.html)
    - 你的杀毒软件是否在监视你：通过 [Restore Privacy](https://restoreprivacy.com/antivirus-privacy)
    - 你的汽车知道你什么信息？：通过 [华盛顿邮报](https://www.washingtonpost.com/technology/2019/12/17/what-does-your-car-know-about-you-we-hacked-chevy-find-out)
    - 警方使用Stingray间谍工具确实可以录音：通过 [Wired](https://www.wired.com/2015/10/stingray-government-spy-tools-can-record-calls-new-documents-confirm)
    - 英国警方在无令状情况下访问私人手机数据：通过 [Restore Privacy](https://restoreprivacy.com/uk-police-accessing-phone-data)
    - 对抗数据霸权：通过 [Privacy International](https://privacyinternational.org/long-read/3734/rage-against-data-dominance-new-hope)
    - NSA文件解码：这些揭露对你的意义：通过 [卫报](https://www.theguardian.com/world/interactive/2013/nov/01/snowden-nsa-files-surveillance-revelations-decoded)
    - 如何在没有GPS或同意的情况下追踪手机：通过 [Gizmodo](https://gizmodo.com/how-to-track-a-cellphone-without-gps-or-consent-1821125371)
    - 应用程序通过电源管理器追踪设备位置：通过 [Wired](https://www.wired.com/2015/02/powerspy-phone-tracking/)
    - 黑客和政府可以通过你的手机摄像头监视你：通过 [Business Insider](https://www.businessinsider.com/hackers-governments-smartphone-iphone-camera-wikileaks-cybersecurity-hack-privacy-webcam-2017-6)
    - 警方通过Google位置数据的地理围栏请求如何让无辜的骑行者成为嫌疑人：通过 [每日邮报](https://www.dailymail.co.uk/news/article-8086095/Police-issue-warrant-innocent-mans-Google-information.html)
    - IBM使用纽约警察局监控录像开发按肤色搜索的技术：通过 [TheIntercept](https://theintercept.com/2018/09/06/nypd-surveillance-camera-skin-tone-search/)
  - **威胁**
    - 23个不透露DNA的理由：通过 [Internet Health Report](https://internethealthreport.org/2019/23-reasons-not-to-reveal-your-dna)
    - 移动设备上第三方键盘应用的安全性：通过 [Lenny Zelster](https://zeltser.com/third-party-keyboards-security)
    - 移动网站可以在未经许可的情况下访问你的手机传感器：通过 [Wired](https://www.wired.com/story/mobile-websites-can-tap-into-your-phones-sensors-without-asking)
    - 非管理员账户可缓解94%的Windows关键漏洞：通过 [ghacks](https://www.ghacks.net/2017/02/23/non-admin-accounts-mitigate-94-of-critical-windows-vulnerabilities/)
    - Android应用无需权限即可监控屏幕状态、数据使用情况和已安装应用详情：通过 [@databurn-in](https://github.com/databurn-in/Android-Privacy-Issues)
      - 另见 [PrivacyBreacher](https://github.com/databurn-in/PrivacyBreacher) - 一个由 @databurn-in 开发的应用，展示了这些问题
    - 应用程序中的URL预览如何泄露个人信息：通过 [hunch.ly](https://hunch.ly/osint-articles/osint-article-how-to-blow-your-online-cover)
    - 大数据隐私风险：通过 [CSO Online](https://www.csoonline.com/article/2855641/the-5-worst-big-data-privacy-risks-and-how-to-guard-against-them.html)
    - 反Doxing指南（针对面临攻击的活动人士）：通过 [Equality Labs](https://medium.com/@EqualityLabs/anti-doxing-guide-for-activists-facing-attacks-from-the-alt-right-ec6c290f543c)
  - **数据泄露**
    - Wired数据泄露指南 - 过去、现在和未来：通过 [Wired](https://www.wired.com/story/wired-guide-to-data-breaches/)
    - Grindr和OkCupid传播个人信息：通过 [纽约时报](https://www.nytimes.com/2020/01/13/technology/grindr-apps-dating-data-tracking.html)
    - 亚太地区长达5年的网络间谍活动：通过 [TheHackerNews](https://thehackernews.com/2020/05/asia-pacific-cyber-espionage.html)
    - ClearView AI数据泄露 - 30亿张面孔：通过 [Forbes](https://www.forbes.com/sites/kateoflahertyuk/2020/02/26/clearview-ai-the-company-whose-database-has-amassed-3-billion-photos-hacked/)
    - MongoDB黑客事件及安全默认设置的重要性：通过 [Synk](https://snyk.io/blog/mongodb-hack-and-secure-defaults/)
    - Truecaller数据泄露 - 4750万印度用户记录被出售：通过 [GBHackers](https://gbhackers.com/truecaller-data-breach/)
    - 数百万Facebook用户记录暴露在Amazon云服务器上：通过 [CBS News](https://www.cbsnews.com/news/millions-facebook-user-records-exposed-amazon-cloud-server/)
    - 微软数据泄露暴露2.5亿客户支持记录：通过 [Graham Cluley](https://www.grahamcluley.com/microsoft-data-breach/)
  - **数据收集**
    - Ring门铃应用内置第三方追踪器：通过 [EFF](https://www.eff.org/deeplinks/2020/01/ring-doorbell-app-packed-third-party-trackers)
    - 一个高度定向的广告如何追踪你的精确位置：通过 [Wired](https://www.wired.com/story/track-location-with-mobile-ads-1000-dollars-study/)
      - 基于论文《使用广告定位进行低成本监控》：通过 [Washington.edu](https://adint.cs.washington.edu/ADINT.pdf)
    - 网站如何通过你的手机合同信息看到你的完整个人信息：通过 [Medium/@philipn](https://medium.com/@philipn/want-to-see-something-crazy-open-this-link-on-your-phone-with-wifi-turned-off-9e0adb00d024)
    - Facebook和美国最大公司将员工数据提供给Equifax：通过 [FastCompany](https://www.fastcompany.com/40485634/equifax-salary-data-and-the-work-number-database)
    - 会话重播脚本如何外泄个人数据：通过 [Freedom-to-Tinker](https://freedom-to-tinker.com/2017/11/15/no-boundaries-exfiltration-of-personal-data-by-session-replay-scripts/)
    - 苹果iTerm2通过DNS请求泄露你在终端中悬停的一切：通过 [BleepingComputer](https://www.bleepingcomputer.com/news/security/iterm2-leaks-everything-you-hover-in-your-terminal-via-dns-requests/)
    - Google悄悄取消了对可识别个人身份的网络追踪的禁令：通过 [propublica.org](https://www.propublica.org/article/google-has-quietly-dropped-ban-on-personally-identifiable-web-tracking)


## 博客
- **安全研究员**
  - [Krebs on Security](https://krebsonsecurity.com/) - 深入且有趣的网络安全新闻和调查，由领域传奇人物和《纽约时报》畅销书作者 Brian Krebs 撰写。[RSS](https://krebsonsecurity.com/feed/)
  - [Schneier on Security](https://www.schneier.com/) - 关于密码学、网络安全和隐私的评论、新闻和文章。由世界知名的安全专家和畅销书作者 Bruce Schneier 撰写。[RSS](https://www.schneier.com/blog/atom.xml)
  - [Troy Hunt](https://www.troyhunt.com/) - 安全研究员和数据泄露收集者。[RSS](https://feeds.feedburner.com/TroyHunt)
  - [Graham Cluley](https://www.grahamcluley.com/) - 安全新闻、建议和观点。由《Smashing Security》联合主持人 Graham Cluley 撰写。
  - [The Last Watch Dog](https://www.lastwatchdog.com/) - 隐私和安全文章、观点和媒体，由 Byron Acohido 撰写。
  - [Daniel Miessler](https://danielmiessler.com/) - 总结近期新闻和事件，专注于安全、技术和人。[RSS](https://danielmiessler.com/feed/)
  - [Errata Security](https://blog.erratasec.com/) - 涵盖最新有趣新闻，并清晰解释概念。由 Robert Graham 和 David Maynor 撰写。[RSS](https://blog.erratasec.com/feeds/posts/default?alt=rss)
  - [Underground Tradecraft](https://gru.gq/blog-feed/) - 面向所有人的反情报、操作安全和技术博客。

- **网络安全新闻**
  - [Dark Reading](https://www.darkreading.com/) - 知名网络安全新闻网站，涵盖数据泄露、物联网、云安全和威胁情报等主题。[RSS](https://www.darkreading.com/rss_simple.asp)
  - [Threat Post](https://threatpost.com/) - 涵盖云安全、恶意软件、漏洞和安全播客的新闻和文章。[RSS](https://threatpost.com/feed/)
  - [We Live Security](https://www.welivesecurity.com/) - 由 ESET 和社区提供的安全新闻、观点和洞察。[RSS](https://www.welivesecurity.com/rss-configurator/)
  - [The Hacker News](https://thehackernews.com/) - 涵盖数据泄露、网络攻击、漏洞和恶意软件的新闻和信息。[RSS](https://feeds.feedburner.com/TheHackersNews)
  - [Sophos: Naked Security](https://nakedsecurity.sophos.com/) - 以易于理解的格式呈现的安全新闻和更新。[RSS](https://nakedsecurity.sophos.com/feed/)
  - [IT Security Guru](https://www.itsecurityguru.org/) - 汇集多个网站的顶级网络安全新闻，便于保持更新。
  - [FOSS Bytes - Cyber Security](https://fossbytes.com/category/security) - 关于最新漏洞和黑客攻击的新闻。

- **网络安全信息**
  - [Heimdal](https://heimdalsecurity.com/blog) - 个人网络安全教程和文章。
  - [Tech Crunch](https://techcrunch.com/tag/cybersecurity-101) - 网络安全入门。
  - [Email Self-Defense](https://emailselfdefense.fsf.org) - 完整的安全电子邮件指南。
  - [Security Planner](https://securityplanner.org) - 为初学者提供的优秀建议。
  - [My Shadow](https://myshadow.org) - 帮助您掌控数据的资源和指南。

- **隐私指南**
  - [EFF SSD](https://ssd.eff.org) - 更安全在线通信的提示。
  - [Restore Privacy](https://restoreprivacy.com) - 关于隐私和安全的工具和指南。
  - [That One Privacy Site](https://thatoneprivacysite.net) - 公正的比较和讨论。
  - [The Hated One](https://www.youtube.com/channel/UCjr2bPAyPV7t35MvcgT3W8Q) - 隐私和安全视频。
  - [12Bytes](https://12bytes.org/articles/tech) - 技术、隐私等（注意，有时涉及争议话题）。
  - [Pixel Privacy](https://pixelprivacy.com/resources) - 在线隐私指南。
  - [The Tin Hat](https://thetinhat.com) - 在线隐私的教程和文章。
  - [PrivacyTools.io](https://www.privacytools.io) - 保护免受大规模监控的工具。
  - [PrismBreak](https://prism-break.org/en/all) - 安全应用替代品。
  - [The VERGE guide to privacy](https://bit.ly/2ptl4Wm) - 保护移动设备、网络和家庭技术的指南。

- **隐私新闻**
  - [Spread Privacy](https://spreadprivacy.com) - DuckDuckGo 提供的在线信任标准提升内容。
  - [BringBackPrivacy](https://bringingprivacyback.com) - 易于阅读和分享的隐私文章。
  - [The Privacy Project](https://www.nytimes.com/interactive/2019/opinion/internet-privacy-project.html) - 《纽约时报》关于隐私的文章和报道。

- **互联网自由**
  - [OONI](https://ooni.org/post) - 关于互联网自由和被屏蔽网站的分析。
  - [Internet Health Report](https://foundation.mozilla.org/en/internet-health-report) - Mozilla 记录并解释互联网开放性和自由的现状。
  - [Worth Hiding](https://worthhiding.com) - 关于隐私、政治和法律的文章。

## 书籍
- [永久记录](https://www.amazon.co.uk/Permanent-Record-Edward-Snowden/dp/1529035651) 作者：爱德华·斯诺登
- [沙虫](https://www.amazon.co.uk/Sandworm-Cyberwar-Kremlins-Dangerous-Hackers/dp/0385544405) 作者：安迪·格林伯格：网络战争新时代以及追踪克里姆林宫最危险黑客的故事
- [极端隐私](https://www.amazon.co.uk/Extreme-Privacy-Takes-Disappear-America/dp/1093757620) 作者：迈克尔·巴泽尔：详尽的指南，教你如何在电子和物理层面保护隐私
- [电线中的幽灵](https://www.amazon.co.uk/gp/product/B00FOQS8D6) 作者：凯文·米特尼克：讲述他作为世界上最受通缉的黑客的故事
- [隐身的艺术](https://www.amazon.com/Art-Invisibility-Worlds-Teaches-Brother/dp/0316380504) 作者：凯文·米特尼克：教你如何在大数据时代保护自己
- [天眼](https://www.goodreads.com/book/show/40796190-eyes-in-the-sky)：作者：亚瑟·霍拉·米歇尔：揭示数字成像在连续空中和卫星监视中的能力，并讨论当前部署的系统和未来计划的技术可行性

## 播客
- [暗网日记] 作者：杰克·瑞赛德：讲述互联网黑暗面的故事<br>
[![Stitcher](https://img.shields.io/badge/收听-Stitcher-E88923?logo=stitcher&style=flat-square)][da-stitch]
[![iTunes](https://img.shields.io/badge/收听-iTunes-FB5BC5?logo=itunes&style=flat-square)][da-itunes]
[![Spotify](https://img.shields.io/badge/收听-Spotify-1ED760?logo=spotify&style=flat-square)][da-spotify]
[![Google Podcasts](https://img.shields.io/badge/收听-Google%20Podcasts-4285F4?logo=Google%20Podcasts&style=flat-square)][da-google]
[![PocketCasts](https://img.shields.io/badge/收听-PocketCasts-F43E37?logo=Pocket%20Casts&style=flat-square)][cy-pocketcasts]
- [网络威胁] 作者：Motherboard：关于最新网络威胁的新闻和分析<br>
[![Stitcher](https://img.shields.io/badge/收听-Stitcher-E88923?logo=stitcher&style=flat-square)][cy-stitch]
[![iTunes](https://img.shields.io/badge/收听-iTunes-FB5BC5?logo=itunes&style=flat-square)][cy-itunes]
[![Spotify](https://img.shields.io/badge/收听-Spotify-1ED760?logo=spotify&style=flat-square)][cy-spotify]
[![SoundCloud](https://img.shields.io/badge/收听-SoundCloud-FF6600?logo=soundcloud&style=flat-square)][cy-soundcloud]
[![PocketCasts](https://img.shields.io/badge/收听-PocketCasts-F43E37?logo=Pocket%20Casts&style=flat-square)][cy-pocketcasts]
- [隐私、安全与OSINT秀] 作者：迈克尔·巴泽尔：关于隐私和OSINT的全面指南<br>
[![Stitcher](https://img.shields.io/badge/收听-Stitcher-E88923?logo=stitcher&style=flat-square)][tp-stitch]
[![iTunes](https://img.shields.io/badge/收听-iTunes-FB5BC5?logo=itunes&style=flat-square)][tp-itunes]
[![Spotify](https://img.shields.io/badge/收听-Spotify-1ED760?logo=spotify&style=flat-square)][tp-spotify]
[![SoundCloud](https://img.shields.io/badge/收听-SoundCloud-FF6600?logo=soundcloud&style=flat-square)][tp-soundcloud]
[![PocketCasts](https://img.shields.io/badge/收听-PocketCasts-F43E37?logo=Pocket%20Casts&style=flat-square)][tp-pocketcasts]
- [安全趣谈] 作者：格雷厄姆·克鲁利和卡罗尔·特里奥：关于当前网络安全新闻的轻松、有趣的讨论<br>
[![Stitcher](https://img.shields.io/badge/收听-Stitcher-E88923?logo=stitcher&style=flat-square)][sm-stitch]
[![iTunes](https://img.shields.io/badge/收听-iTunes-FB5BC5?logo=itunes&style=flat-square)][sm-itunes]
[![Spotify](https://img.shields.io/badge/收听-Spotify-1ED760?logo=spotify&style=flat-square)][sm-spotify]
[![Google Podcasts](https://img.shields.io/badge/收听-Google%20Podcasts-4285F4?logo=Google%20Podcasts&style=flat-square)][sm-google]
[![PocketCasts](https://img.shields.io/badge/收听-PocketCasts-F43E37?logo=Pocket%20Casts&style=flat-square)][sm-pocketcasts]
- [IRL播客] 作者：Mozilla：在线生活即真实生活，关于网络未来的故事<br>
[![Stitcher](https://img.shields.io/badge/收听-Stitcher-E88923?logo=stitcher&style=flat-square)][irl-stitch]
[![iTunes](https://img.shields.io/badge/收听-iTunes-FB5BC5?logo=itunes&style=flat-square)][irl-itunes]
[![Spotify](https://img.shields.io/badge/收听-Spotify-1ED760?logo=spotify&style=flat-square)][irl-spotify]
[![Google Podcasts](https://img.shields.io/badge/收听-Google%20Podcasts-4285F4?logo=Google%20Podcasts&style=flat-square)][irl-google]
[![PocketCasts](https://img.shields.io/badge/收听-PocketCasts-F43E37?logo=Pocket%20Casts&style=flat-square)][irl-pocketcasts]
- [随机但难忘] 作者：1Password：一个关于安全建议的播客<br>
[![Stitcher](https://img.shields.io/badge/收听-Stitcher-E88923?logo=stitcher&style=flat-square)][rbm-stitch]
[![iTunes](https://img.shields.io/badge/收听-iTunes-FB5BC5?logo=itunes&style=flat-square)][rbm-itunes]
[![Spotify](https://img.shields.io/badge/收听-Spotify-1ED760?logo=spotify&style=flat-square)][rbm-spotify]
[![Google Podcasts](https://img.shields.io/badge/收听-Google%20Podcasts-4285F4?logo=Google%20Podcasts&style=flat-square)][rbm-google]
[![PocketCasts](https://img.shields.io/badge/收听-PocketCasts-F43E37?logo=Pocket%20Casts&style=flat-square)][rbm-pocketcasts]


 
更多安全播客可在 [player.fm](https://player.fm/featured/security) 上找到。

更多播客（可能需要验证）：[Naked Security](https://nakedsecurity.sophos.com) | [Open Source Security Podcast](https://opensourcesecuritypodcast.com) | [Defensive Security Podcast](https://defensivesecurity.org) | [Malicious Life](https://malicious.life) | [Down the Security Rabbit Hole](http://podcast.wh1t3rabbit.net) | [Cyber Wire](https://thecyberwire.com/podcasts/daily-podcast) | [Hacking Humans](https://thecyberwire.com/podcasts/hacking-humans) | [Security Now](https://twit.tv/shows/security-now) | [Cyber Security Interviews](https://cybersecurityinterviews.com) | [Security Weekly](https://securityweekly.com) | [The Shared Security Podcast](https://sharedsecurity.net) | [Risky Business](https://risky.biz/netcasts/risky-business) | [Crypto-Gram Security Podcast](https://crypto-gram.libsyn.com) | [Off the Hook](https://player.fm/series/off-the-hook-84511) | [Opt Out Podcast](https://optoutpod.com)。

[Darknet Diaries]: https://darknetdiaries.com  
[da-stitch]: https://www.stitcher.com/podcast/darknet-diaries  
[da-itunes]: https://podcasts.apple.com/us/podcast/darknet-diaries/id1296350485  
[da-spotify]: https://open.spotify.com/show/4XPl3uEEL9hvqMkoZrzbx5  
[da-pocketcasts]: https://pca.st/darknetdiaries  
[da-google]: https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5tZWdhcGhvbmUuZm0vZGFya25ldGRpYXJpZXM%3D  

[CYBER]: https://www.vice.com/en_us/article/59vpnx/introducing-cyber-a-hacking-podcast-by-motherboard  
[cy-stitch]: https://www.stitcher.com/podcast/vice-2/cyber  
[cy-soundcloud]: https://soundcloud.com/motherboard  
[cy-itunes]: https://podcasts.apple.com/us/podcast/cyber/id1441708044  
[cy-spotify]: https://open.spotify.com/show/3smcGJaAF6F7sioqFDQjzn  
[cy-pocketcasts]: https://pca.st/z7m3  

[The Privacy, Security, & OSINT Show]: https://inteltechniques.com/podcast.html  
[tp-stitch]: https://www.stitcher.com/podcast/michael-bazzell/the-complete-privacy-security-podcast  
[tp-soundcloud]: https://soundcloud.com/user-98066669  
[tp-itunes]: https://podcasts.apple.com/us/podcast/complete-privacy-security/id1165843330  
[tp-spotify]: https://open.spotify.com/show/6QPWpZJ6bRTdbkI7GgLHBM  
[tp-pocketcasts]: https://pca.st/zdIq  

[Smashing Security]: https://www.smashingsecurity.com  
[sm-stitch]: https://www.stitcher.com/podcast/smashing-security  
[sm-itunes]: https://podcasts.apple.com/gb/podcast/smashing-security/id1195001633  
[sm-spotify]: https://open.spotify.com/show/3J7pBxEu43nCnRTSXaan8S  
[sm-pocketcasts]: https://pca.st/47UH  
[sm-google]: https://podcasts.google.com/?feed=aHR0cHM6Ly93d3cuc21hc2hpbmdzZWN1cml0eS5jb20vcnNz  

[IRL Podcast]: https://irlpodcast.org  
[irl-stitch]: https://www.stitcher.com/podcast/smashing-security  
[irl-itunes]: https://geo.itunes.apple.com/podcast/us/id1247652431?mt=2&at=1010lbVy  
[irl-spotify]: https://open.spotify.com/show/0vT7LJMeVDxyQ2ZamHKu08  
[irl-pocketcasts]: https://pca.st/irl  
[irl-google]: https://www.google.com/podcasts?feed=aHR0cHM6Ly9mZWVkcy5tb3ppbGxhLXBvZGNhc3RzLm9yZy9pcmw  

[Random but Memorable]: https://blog.1password.com/random-but-memorable-the-security-advice-podcast-from-1password  
[rbm-stitch]: https://www.stitcher.com/podcast/1password/random-but-memorable  
[rbm-itunes]: https://podcasts.apple.com/us/podcast/random-but-memorable/id1435486599  
[rbm-pocketcasts]: https://pca.st/43AW  
[rbm-spotify]: https://open.spotify.com/show/5Sa3dy0xDvMT0h3O5MGMOr  
[rbm-google]: https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9lRVpIazJhTA  


## 视频资源

- **通用**
  - [你正在被监视](https://youtu.be/c8jDsg-M6qM) - 纽约时报
  - [隐私的力量](https://youtu.be/KGX-c5BJNFk) - 卫报
  - [为什么隐私很重要，即使你没有什么可隐藏的](https://youtu.be/Hjspu7QV7O0) - The Hated One
  - [不可破解的电子邮件服务](https://youtu.be/NM8fAnEqs1Q) - Freethink
  - [NSA举报人：政府收集你的一切](https://youtu.be/SjHs-E2e2V4) - Empire Files
- **加密**
  - [GnuPGP高级入门](https://begriffs.com/posts/2016-11-05-advanced-intro-gnupg.html) - Neal Walfield ([walfield.org](http://walfield.org/))
- **TED演讲**
  - [在线追踪器如何追踪你，以及如何应对](https://youtu.be/jVeqAemtC6w) - Luke Crouch
  - [为什么你应该关闭家庭WiFi](https://youtu.be/2GpNhYy2l08) - Bram Bonné
  - [为什么隐私很重要](https://www.ted.com/talks/glenn_greenwald_why_privacy_matters) - Glenn Greenwald
  - [对抗病毒，捍卫网络](https://www.ted.com/talks/mikko_hypponen_fighting_viruses_defending_the_net) - Mikko Hypponen
  - [网络战争背后的1和0](https://www.ted.com/talks/chris_domas_the_1s_and_0s_behind_cyber_warfare) - Chris Domas
  - [国家支持的黑客——房间里的大象](https://youtu.be/z-A2MxHmnU4) - Frank Heidt
  - [物联网如何让网络犯罪调查更容易](https://youtu.be/9CemONO6vrY) - Jonathan Rajewski
  - [在线隐私不存在](https://youtu.be/LgWrD3EJ1Do) - Denelle Dixon
  - [数据是新的黄金，谁是新的窃贼？](https://youtu.be/XNF-rGiGb50) - Tijmen Schep
- **会议**
  - [DEF CON 27](https://www.youtube.com/playlist?list=PL9fPq3eQfaaA4qJEQQyXDYtTIfxCNA0wB) - 2019年DEF CON会议演讲合集
  - [RSA会议](https://www.youtube.com/user/RSAConference) - RSA会议的安全演讲合集
  - [Administraitor.video](https://administraitor.video) - 定期更新的安全会议演讲合集
- **其他**
  - [通过PRISM，黑暗地](https://youtu.be/e4woRYs0mM4) - Kurt Opsahl关于NSA监控的所有信息
  - [在21世纪实现真正隐私需要什么](https://youtu.be/bxQSu06yuZc) - @MalcomVetter

另见：[awesome-sec-talks](https://github.com/PaulSec/awesome-sec-talks) - @PaulSec

## 在线工具

- **检查与测试**
  - [εxodus](https://reports.exodus-privacy.eu.org) - 检查Play商店中应用的追踪器
  - [我是否被泄露](https://haveibeenpwned.com) 和 [Dehashed](https://www.dehashed.com) - 检查你的信息是否被泄露
  - [重定向侦探](https://redirectdetective.com) - 检查可疑URL的重定向路径
  - [Botometer](https://botometer.iuni.iu.edu/) - 检查某个用户名是否为机器人
  - [谁在追踪我](https://whotracks.me/trackers.html) - 常见追踪脚本的分析及其使用网站
- **实用工具**
  - [Privacy.sexy](https://privacy.sexy/) - Windows和MacOS隐私最佳实践命令集合
  - [ExifRemove](https://www.exifremove.com) - 在线移除元数据/EXIF数据
  - [安全密码检查](https://password.kaspersky.com) - 演示破解密码所需时间的有趣工具
  - [33Mail](http://33mail.com/Dg0gkEA)、[Anonaddy](https://anonaddy.com) 或 [SimpleLogin](https://simplelogin.io?slref=bridsqrgvrnavso) - 通过生成唯一的永久别名保护你的电子邮件地址
  - [Deseat Me](https://www.deseat.me) - 清理你的在线存在
- **反追踪分析**
  - [Panopticlick](https://panopticlick.eff.org) - 检查你的浏览器是否在追踪你
  - [Browser Leaks](https://browserleaks.com) - 检查浏览器泄露的信息
  - [DNS泄漏测试](https://www.dnsleaktest.com) - 检查并修复DNS泄漏
  - [IP泄漏测试](https://ipleak.net) - 检查IP泄漏
  - [我是否独特？](http://amiunique.org) - 如果你的指纹是唯一的，网站就可以追踪你
  - [Qualys SSL客户端测试](https://clienttest.ssllabs.com:8443/ssltest/viewMyClient.html) - 检查浏览器的SSL/TLS能力
- **钓鱼、黑客与滥用**
  - [VirusTotal](https://www.virustotal.com) - 分析可疑网络资源是否存在恶意软件
  - [ScamAdviser](https://www.scamadviser.com) - 检查网站是否为骗局
  - [Abuse IP DB](https://www.abuseipdb.com) - 报告IP地址的滥用、垃圾邮件或攻击行为，并检查IP状态
  - [Phish Tank](https://www.phishtank.com) - 检查链接是否为已知钓鱼URL，提交钓鱼URL，浏览最近的钓鱼URL
  - [是否被黑？](http://www.isithacked.com) - 检查网站或页面是否被黑、劫持或存在可疑行为
- **IP工具**
  - [我知道你下载了什么](https://iknowwhatyoudownload.com) - 显示从你的IP地址下载或分发的种子文件
  - [Hetrix工具 - 黑名单检查](https://hetrixtools.com/blacklist-check/) - 检查你的域名或IP是否出现在常见黑名单中
  - [检查：Tor项目](https://check.torproject.org/) - 检查你是否通过Tor连接，并诊断问题
- **公共域和网站扫描工具**
  - [URL Scan](https://urlscan.io) - 扫描和分析网站，显示IP、DNS、域名和主机数据，以及资源和请求信息
  - [Security Trails](https://securitytrails.com/#search) - 显示所有DNS记录、历史DNS数据和子域名
  - [crt.sh](https://crt.sh) - 显示给定域名的当前和以前的SSL/TLS证书，提供高级搜索选项
  - [Virus Total](https://www.virustotal.com) - 扫描任何URL、网络资产或文件以检测恶意软件
  - [DomainTools WhoIs](https://whois.domaintools.com) - WhoIs查询。检查谁注册了域名，并找到联系信息
  - [Pentest Tools漏洞扫描器](https://pentest-tools.com/website-vulnerability-scanning/website-scanner) - 轻量扫描搜索客户端和服务器端漏洞以及缺失的HTTP安全头
  - [Qualys SSL服务器测试](https://www.ssllabs.com/ssltest) - 对公共互联网上的任何SSL网络服务器配置进行深入分析
  - [Abuse IP DB](https://www.abuseipdb.com) - 检查IP或域名是否被报告滥用，或提交报告
  - [RIPEstat](https://stat.ripe.net) - 对IP地址的详细分析（路由、DNS、滥用历史、活动等）
  - [Multirbl](http://multirbl.valli.org) - 针对发送邮件服务器的完整IP检查
  - [IPVoid](https://www.ipvoid.com) - 提供域名、IP和DNS工具的完整套件，用于跟踪、查询、检查和Ping操作
- **网络中立**
  - [Blocked by ORG](https://www.blocked.org.uk) - 检查您的网站是否被某些ISP屏蔽
  - [Data Rights Finder](https://www.datarightsfinder.org) - 查找、理解并使用隐私政策中的信息
  - [Down For Everyone Or Just Me](https://downforeveryoneorjustme.com) - 快速确定网站是否宕机，或仅对您不可用
- **匿名服务** - 以下网站提供各种匿名在线服务
  - [NixNet](https://nixnet.services)
  - [Snopyta](https://snopyta.org)
  - [Disroot](https://disroot.org)
- **档案**
  - [The Way Back Machine](https://archive.org/web/web.php) - 查看任何网站的以前版本。一个包含20年间4310亿快照的档案
  - [PolitiTweet](https://polititweet.org) - 归档有权势公众人物的推文，并记录静默撤回和删除的推文
  - [Internet Archive Software Collection](https://archive.org/details/software) - 最大的复古和历史软件库
  - [OpenLibrary](https://openlibrary.org) - 一个包含超过200万本电子书和2000万本书籍信息的免费数字图书馆
  - [Archive-It](https://archive-it.org) - 收集和访问网络上的文化遗产

## 隐私友好软件

此部分已移至[此处](https://github.com/Lissy93/awesome-privacy)。完整的隐私友好软件和服务列表

## 安全硬件

此部分已移至[此处](/6_Privacy_and-Security_Gadgets.md)。产品、小工具和DIY项目以帮助提高安全性
## 数据、API 和可视化

- **研究结果**
  - [互联网普查数据](https://ant.isi.edu/datasets) - 包括地址空间分配、流量、DNS、服务枚举、互联网中断和其他互联网拓扑数据
  - [网络追踪数据](https://webtransparency.cs.princeton.edu/webcensus/#data) - 由普林斯顿大学提供，这是迄今为止最详细的在线追踪分析，测量了基于 Cookie 的状态追踪和基于指纹的无状态追踪。爬取数据使用了 [OpenWPM](https://github.com/mozilla/OpenWPM)
  - [谁支持你的隐私？](https://www.eff.org/files/2019/06/11/whyb_2019_report.pdf) - 由 EFF 提供的年度报告，评估公司如何处理个人数据
    - 历史报告：[2012](https://www.eff.org/files/who-has-your-back-2012_0.pdf) | [2013](https://www.eff.org/sites/default/files/who-has-your-back-2013-report-20130513.pdf) | [2014](https://www.eff.org/files/2014/05/15/who-has-your-back-2014-govt-data-requests.pdf) | [2015](https://www.eff.org/files/2015/06/18/who_has_your_back_2015_protecting_your_data_from_government_requests_20150618.pdf) | [2016](https://www.eff.org/files/2016/05/04/who-has-your-back-2016.pdf) | [2017](https://www.eff.org/files/2017/07/08/whohasyourback_2017.pdf) | [2018](https://www.eff.org/files/2018/05/31/whyb_2018_report.pdf) | [2019](https://www.eff.org/files/2019/06/11/whyb_2019_report.pdf)
  - [滥用会话重播的网站列表](https://webtransparency.cs.princeton.edu/no_boundaries/session_replay_sites.html) - 第三方会话重播脚本记录用户的所有操作，并允许人类观看。此列表包含使用这些脚本的网站
    - 另见相关的[博客文章](https://freedom-to-tinker.com/2017/11/15/no-boundaries-exfiltration-of-personal-data-by-session-replay-scripts/)和 [WebTAP](https://webtap.princeton.edu/) 项目
  - [传感器访问数据](https://databank.illinois.edu/datasets/IDB-9213932) - 移动网络爬取，测量传感器访问情况，由伊利诺伊大学提供
  - [Canalys 新闻室](https://www.canalys.com/newsroom) - 关于安全、隐私、技术和金融的研究报告
  - [数据永不眠](https://web-assets.domo.com/blog/wp-content/uploads/2019/07/data-never-sleeps-7-896kb.jpg) - 可视化每分钟生成的数据量（2019）
  - [他们知道你的什么](https://external-preview.redd.it/KU3pS4LIhLWqeYSluiYyJMhLQW1fEjTdh8lEKL2jafc.png?auto=webp&s=fe015c1e32731bc61cd0d57313f5a261173846ca) - 展示科技巨头收集的用户信息的图表（2020）

- **数据库**
  - [Exodus](https://reports.exodus-privacy.eu.org/en/trackers/stats) - Android 应用中的追踪器
  - [Exploit Database](https://www.exploit-db.com) - 当前软件漏洞数据库
  - [URLScan](https://urlscan.io) - 扫描恶意域名的服务，提供历史结果
  - [Dehashed](https://www.dehashed.com/breach) - 数据泄露和凭据数据库
  - [VirusTotal](https://developers.virustotal.com/v3.0/reference) - 软件病毒扫描的详细信息
  - [Abuse IP DB](https://www.abuseipdb.com) - 被报告滥用的 IP 数据库
  - [SnusBase](https://snusbase.com) - 长期托管泄露数据的数据库
  - [OpenPhish](https://openphish.com) - 当前钓鱼端点的实时数据
  - [HashToolkit](http://hashtoolkit.com) - 已破解哈希值的数据库
  - [SecLists](https://github.com/danielmiessler/SecLists) - 泄露数据库、密码、用户名等的初始列表（适合编程）
  - [Qualys SSL Pulse](https://www.ssllabs.com/ssl-pulse) - 监控全球 15 万个支持 SSL/TLS 的网站的质量
  - [Tor Bulk Exit List](https://check.torproject.org/torbulkexitlist) - Tor 网络中所有出口节点（IP）的列表

- **实时数据的乐趣** 🌠
  - **互联网**
    - [Tor Flow](https://torflow.uncharted.software) - Tor 节点之间的实时数据流
    - [互联网普查](http://census2012.sourceforge.net/images/geovideo.gif) - IPv4 地址的 24 小时世界地图平均利用率
    - [移动互联网地图](https://labs.mapbox.com/labs/twitter-gnip/brands/) - 根据 Twitter 数据显示全球数据覆盖
    - [IKnow](https://iknowwhatyoudownload.com/en/stat/GB/daily) - 显示通过种子下载和分发的实时数据
    - [语义互联网地图](http://internet-map.net) - 展示不同网站之间的链接关系
    - [Wiggle](https://wigle.net) - 全球最大的 WiFi 地图，按地理位置显示个人热点统计
    - [BGP Stream](https://bgpstream.com) - 显示所有当前的网络中断
    - [自由之家 - 审查地图](https://freedomhouse.org/explore-the-map) - 按国家显示全球互联网自由和民主状态
    - [DomainTools 统计](https://research.domaintools.com/statistics) - 域名注册数量和图表
    - [Insecam](http://www.insecam.org) - 不安全或公开的实时摄像头目录和视频流
  - **网络安全**
    - [Checkpoint](https://threatmap.checkpoint.com) - 恶意软件、钓鱼和漏洞的地理分布
    - [Comparitech 勒索软件攻击地图](https://www.comparitech.com/ransomware-attack-map/) - 地理分布的勒索软件攻击和统计数据
    - [FortiGuard](https://threatmap.fortiguard.com) - 各国的入站和出站攻击
    - [卡巴斯基统计](https://cybermap.kaspersky.com/stats) - 显示每秒的详细威胁数据
    - [卡巴斯基日志簿](https://apt.securelist.com) - 历史威胁时间线
    - 另见：
      - 每个防病毒提供商和安全公司都有类似的网络威胁地图，例如：[Fire Eye](https://www.fireeye.com/cyber-map/threat-map.html)、[BitDefender](https://threatmap.bitdefender.com)、[ESET](https://www.virusradar.com)、[Looking Glass Cyber Map](https://map.lookingglasscyber.com)、[Digital Attack Map](https://www.digitalattackmap.com)
      - [pewpew](https://github.com/hrbrmstr/pewpew) 是一个很棒的 Web 组件，可用于构建自己的威胁地图（带有音效！）
  - **无关但有趣的数据**
    - [海底电缆地图](https://www.submarinecablemap.com) - 最新的全球主要互联网电缆地图（另见 [he.net](https://he.net/3d-map) 和 [此处](https://submarine-cable-map-2016.telegeography.com)）
    - [FlightRadar24](https://www.flightradar24.com) - 全球实时飞机位置地图
    - [Marine Traffic](https://www.marinetraffic.com/) - 全球实时船只、油轮、货船和客船等位置地图
    - [太空中的物体](http://stuffin.space) - 显示围绕地球运行的物体
    - [Asterank](http://www.asterank.com/) - 一个包含超过60万颗小行星的科学和经济数据库
    - [航班延误地图](https://uk.flightaware.com/miserymap/) - 实时美国地理航班延误和取消趋势
    - [流星雨](https://www.meteorshowers.org/) - 显示彗星位置，模拟流星雨的时间
    - [机场WiFi地图](https://www.google.com/maps/d/u/0/viewer?mid=1Z1dI8hoBZSJNWFx2xr_MMxSxSxY) - 显示全球机场的WiFi网络及其密码
    - [百万推文地图](https://onemilliontweetmap.com/) - 实时推文地图
    - [聆听维基百科](http://listen.hatnote.com/) - 维基百科编辑以音调表示，取决于编辑大小，由 Hatnote 构建
    - [BitListen](https://www.bitlisten.com/) - 实时比特币交易，以气泡和音调表示
    - [FiatLeak](https://fiatleak.com/) - 实时加密货币统计
    - [谷歌搜索趋势](https://trends.google.com/trends/hottrends/visualize?pn=p9&nrow=4&ncol=4) - 按地区显示的每小时谷歌搜索趋势
    - [情感扫描](https://sentiment-sweep.com/now) - 基于实时推文数据的地理情感分析（由我制作）
    - [三千年历史](http://histography.io/) - 使用维基百科数据显示历史上的重大事件
    - [Wiki-Atlas](https://wiki-atlas.org/) - 分类并绘制在地图上的维基百科文章
    - [ncov2019/live](https://ncov2019.live/) - 实时新冠疫情数据、地图和仪表盘（由 Avi Schiffmann 制作）
    - [国家电网：实时状态](http://grid.iamkate.com/) - 实时英国能源统计（由 Kate Morley 制作）（类似于 [Grid Watch](https://www.gridwatch.templar.co.uk/)）
    - [经济复杂性地球仪](http://globe.cid.harvard.edu/) - 可视化15万亿美元的世界贸易，每个点代表1亿美元的出口

  想要发现更多有趣的实时数据可视化？请查看[这篇文章](https://listed.to/@lissy93/18611/fun-with-real-time-data) 🌠
## 学术资源

- **期刊**
  - 重新思考信息隐私与安全：它真的重要吗？ 作者：Waseem Afzal：[Wiley](https://asistdl.onlinelibrary.wiley.com/doi/10.1002/meet.14505001095)
  - 加密论文：为每位互联网用户提供隐私、安全和匿名性，作者：Crypto Seb：[GitHub](https://github.com/cryptoseb/cryptopaper)
  - 评估隐私影响的挑战：前线故事：[Wiley](https://onlinelibrary.wiley.com/doi/10.1002/spy2.101)
  - 隐私保护的多因素认证系统：[Wiley](https://onlinelibrary.wiley.com/doi/10.1002/spy2.88)
  - 网络浏览器隐私：浏览器在“回家”时说了什么？：[scss.tcd.ie](https://www.scss.tcd.ie/Doug.Leith/pubs/browser_privacy.pdf)
  - 在线追踪：百万站点的测量与分析：[普林斯顿大学](https://www.cs.princeton.edu/~arvindn/publications/OpenWPM_1_million_site_tracking_measurement.pdf)
  - 检测和防御网页上的第三方追踪：[Franziska Roesner](http://www.franziroesner.com/pdf/webtracking-NSDI2012.pdf)
  - 谷歌是否在降低搜索质量？来自通用搜索的消费者伤害：[law.berkeley.edu](https://www.law.berkeley.edu/wp-content/uploads/2015/04/Luca-Wu-Yelp-Is-Google-Degrading-Search-2015.pdf)
  - 第三方Cookie政策的全面评估：[WhoLeftOpenTheCookieJar.com](https://wholeftopenthecookiejar.com/static/tpc-paper.pdf)
  - 监控的危险：[哈佛法律评论](https://harvardlawreview.org/wp-content/uploads/pdfs/vol126_richards.pdf)
  - 从陀螺仪信号中识别语音：[斯坦福](https://crypto.stanford.edu/gyrophone/)
  - 关于脚本访问智能手机传感器的研究：[sensor-js.xyz](https://sensor-js.xyz/webs-sixth-sense-ccs18.pdf)
  - 像素完美：HTML5中的Canvas指纹识别：[hovav.net](https://hovav.net/ucsd/dist/canvas.pdf)
  - 照亮移动网页追踪的隐私调查：[semanticscholar.org](https://pdfs.semanticscholar.org/80bb/5c9119ff4fc2374103b4f3d6a8f614b3c2ed.pdf)
  - 使用浏览器扩展阻止在线追踪的研究：[aruneshmathur.co.in](http://aruneshmathur.co.in/files/publications/SOUPS18_Tracking.pdf)
  - 邮件追踪的隐私影响：[senglehardt.com](https://senglehardt.com/papers/pets18_email_tracking.pdf)
  - 电池状态不包括在内：评估网络标准中的隐私：[princeton.edu](https://www.cs.princeton.edu/~arvindn/publications/battery-status-case-study.pdf)
  - 针对主要人脸识别算法实现匿名性：[ruhr-uni-bochum.de](https://www.mobsec.ruhr-uni-bochum.de/media/ei/veroeffentlichungen/2016/01/15/2013-cms-face-recognition.pdf)
  - 使用社交网络去匿名化网页浏览数据：[princeton.edu](https://www.cs.princeton.edu/~arvindn/publications/browsing-history-deanonymization.pdf)
  - 网页追踪的监控影响：[senglehardt.com](https://senglehardt.com/papers/www15_cookie_surveil.pdf)
  - 理解Facebook Connect登录权限：[jbonneau.com](http://jbonneau.com/doc/RB14-fb_permissions.pdf)
  - 日常生活中的企业监控：公司如何收集、组合、分析、交易和使用数十亿人的个人数据，作者：Wolfie Christl：[crackedlabs.org](https://crackedlabs.org/dl/CrackedLabs_Christl_CorporateSurveillance.pdf)
  - 使用广告定位进行低成本监控：[washington.edu](https://adint.cs.washington.edu/ADINT.pdf)
  - 跨站WebSocket劫持：[christian-schneider.net](http://www.christian-schneider.net/CrossSiteWebSocketHijacking.html)
  - 使用移动设备电源分析进行位置追踪：[scribd.com](https://www.scribd.com/doc/256304846/PowerSpy-Location-Tracking-using-Mobile-Device-Power-Analysis)
  - HORNET：网络层的高速洋葱路由：[arxiv.org](https://arxiv.org/pdf/1507.05724v1.pdf)
  - 诱饵路由：迈向不可阻挡的互联网通信：[usenix.org](https://www.usenix.org/legacy/events/foci11/tech/final_files/Karlin.pdf)
  - 追踪器与Firefox：比较不同的阻止工具：[GitHub - @jawz101](https://github.com/jawz101/TrackersVsFirefox)
  - “我没有什么可隐藏的”以及其他对隐私的误解：[ssrn.com](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=998565&)

- **文章**
  - 隐私：百科全书定义与背景：[stanford.edu](https://plato.stanford.edu/entries/privacy/)

- **实现与标准**
  - [GNU隐私保护工具](https://www.gnupg.org)
  - [OpenPGP JavaScript实现](https://openpgpjs.org)
  - [WireGuard](https://www.wireguard.com/papers/wireguard.pdf)
  - [Nym](https://as93.link/nym-blog-post) - 下一代隐私基础设施
  - [REC-X.509](https://www.itu.int/rec/T-REC-X.509) - 定义公钥证书格式的标准，广泛用于互联网协议和应用
  - [obfs4-spec](https://gitweb.torproject.org/pluggable-transports/obfs4.git/tree/doc/obfs4-spec.txt) 和 [obfs3-protocol-spec](https://gitweb.torproject.org/pluggable-transports/obfsproxy.git/tree/doc/obfs3/obfs3-protocol-spec.txt) - Tor的混淆器和用于混淆流量的可插拔传输



## 基金会

- [网络契约](https://contractfortheweb.org)
- [电子前沿基金会](https://www.eff.org) - 捍卫数字隐私等
- [OWASP基金会](https://www.owasp.org)
- [自由之家](https://freedomhouse.org) - 为网络自由而战
- [隐私国际](https://privacyinternational.org)
- [开放技术基金](https://www.opentech.fund)
- [新闻自由基金会](https://freedom.press)
- [开放权利组织](https://www.openrightsgroup.org)
- [LEAP加密访问项目](https://leap.se)
- [守护者项目](https://guardianproject.info)
- [应用隐私基金会](https://applied-privacy.net)
- [安全与保障](https://safeandsecure.film) - 为记者和电影制作者提供建议
- [公民实验室](https://citizenlab.ca)
- [电子隐私信息中心](https://epic.org)
- [美国公民自由联盟](https://www.aclu.org/issues/privacy-technology)
- [自由软件基金会](https://www.fsf.org)
- [Calyx研究所](https://calyxinstitute.org/) - 总部位于布鲁克林的组织，旨在教育公众关于数字通信中的隐私
- [勇气基金会](https://www.couragefound.org) - 支持那些冒着生命/自由风险为历史记录做出重大贡献的人
- [为未来而战](https://www.fightforthefuture.org) - 为技术解放的未来而战
- [公众公民](https://www.citizen.org) - 对抗企业权力并让政府负责
- [DNS隐私项目](https://dnsprivacy.org/wiki/display/DP) - 推广、实施和部署DNS隐私的协作开放项目
- [Epic](https://www.epic.org/) - 总部位于华盛顿特区的组织，关注新兴隐私和公民自由问题

## 政府机构

- **公民/小型企业建议和信息**
  - [英国国家网络安全中心](https://www.ncsc.gov.uk)
  - [美国网络安全 - NIST](https://www.nist.gov/topics/cybersecurity)
  - [在线保持安全](https://staysafeonline.org) - 美国政府支持的项目，旨在向个人和小型企业提供基本的数字安全教育
  - [年度信用报告](https://www.annualcreditreport.com) - 美国免费信用报告
- **网络犯罪**
  - [消费者欺诈报告](http://consumerfraudreporting.org) - 美国当前流传的在线骗局目录，并提供举报途径
  - [行动欺诈](https://www.actionfraud.police.uk) - 英国的国家欺诈和网络犯罪举报中心
  - [犯罪举报](https://crimestoppers-uk.org/) - 英国独立慈善机构，用于匿名举报犯罪
- **事实核查**
  - [全面事实](https://fullfact.org) - 英国独立事实核查慈善机构，致力于揭露错误信息及其危害
  - [Snopes](https://www.snopes.com/) - 提供透明的事实核查服务，附有文档化的来源。其调查报告基于证据和上下文分析
  - [FactCheck.org](https://www.factcheck.org/fake-news/) - 美国网站，揭穿社交媒体上传播的虚假信息
  - [媒体偏见事实核查](https://mediabiasfactcheck.com/) - 专注于媒体偏见，并比较来自3000多个来源的不同观点
  - [AP事实核查](https://apnews.com/APFactCheck) - AP新闻提供的事实核查服务
- **计算机应急响应小组（CERT）**
  - **A-C** - 澳大利亚：[auscert.org.au](https://www.auscert.org.au) | 奥地利：[cert.at](https://www.cert.at) | 孟加拉国：[cirt.gov.bd](https://www.cirt.gov.bd) | 玻利维亚：[cgii.gob.bo](https://cgii.gob.bo) | 巴西：[cert.br](https://www.cert.br) | 加拿大：[cyber.gc.ca](https://cyber.gc.ca/en/about-cyber-centre) | 中国：[cert.org.cn](https://www.cert.org.cn) | 哥伦比亚：[colcert.gov.co](http://www.colcert.gov.co) | 克罗地亚：[carnet.hr](https://www.carnet.hr) | 捷克共和国：[csirt.cz](https://csirt.cz)
  - **D-G** - 丹麦：[cert.dk](https://www.cert.dk) | 厄瓜多尔：[ecucert.gob.ec](https://www.ecucert.gob.ec) | 埃及：[egcert.eg](https://www.egcert.eg) | 爱沙尼亚：[ria.ee / CERT-EE](https://ria.ee/en/cyber-security/cert-ee.html) | 芬兰：[kyberturvallisuuskeskus.fi](https://www.kyberturvallisuuskeskus.fi/en/homepage) | 法国：[cert.ssi.gouv.fr](https://www.cert.ssi.gouv.fr) | 德国：[cert-bund.de](https://www.cert-bund.de) | 加纳：[nca-cert.org.gh](https://nca-cert.org.gh)
  - **H-M** - 香港：[hkcert.org](https://www.hkcert.org) | 冰岛：[cert.is](https://www.cert.is) | 印度：[CERT-IN](https://www.cert-in.org.in) | 印度尼西亚：[idsirtii.or.id](https://idsirtii.or.id) | 伊朗：[cert.ir](https://cert.ir) | 意大利：[cert-pa.it](https://www.cert-pa.it) | 日本：[JPCERT](https://www.jpcert.or.jp) | 吉尔吉斯斯坦：[cert.gov.kg](http://cert.gov.kg) | 卢森堡：[circl.lu](https://circl.lu) | 澳门：[mocert.org](www.mocert.org) | 马来西亚：[mycert.org.my](http://www.mycert.org.my) | 摩洛哥：[educert.ma](http://www.educert.ma)
  - **N-P** - 荷兰：[ncsc.nl](https://www.ncsc.nl) | 新西兰：[cert.govt.nz](https://www.cert.govt.nz) | 尼日利亚：[cert.gov.ng](https://cert.gov.ng) | 挪威：[norcert](https://www.nsm.stat.no/norcert) | 巴基斯坦：[pakcert.org](http://www.pakcert.org) | 巴布亚新几内亚：[pngcert.org.pg](https://www.pngcert.org.pg) | 菲律宾：[cspcert.ph](https://cspcert.ph) | 波兰：[cert.pl](https://www.cert.pl) | 葡萄牙：[cncs.gov.pt/certpt](https://www.cncs.gov.pt/certpt)
  - **Q-S** - 卡塔尔：[qcert.org](https://qcert.org) | 爱尔兰共和国：[ncsc.gov.ie](https://www.ncsc.gov.ie) | 罗马尼亚：[cert.ro](https://www.cert.ro) | 俄罗斯：[gov-cert.ru](http://www.gov-cert.ru) / [cert.ru](https://www.cert.ru) | 新加坡：[csa.gov.sg/singcert](https://www.csa.gov.sg/singcert) | 斯洛伐克：[sk-cert.sk](https://www.sk-cert.sk) | 韩国：[krcert.or.kr](https://www.krcert.or.kr) | 西班牙：[incibe.es](https://www.incibe.es) | 斯里兰卡：[cert.gov.lk](https://www.cert.gov.lk) | 瑞典：[cert.se](https://www.cert.se) | 瑞士：[govcert.ch](https://www.govcert.ch)
  - **T-Z** - 台湾：[twcert.org.tw](https://www.twcert.org.tw) | 泰国：[thaicert.or.th](https://www.thaicert.or.th) | 汤加：[cert.to](https://www.cert.to) | 乌克兰：[cert.gov.ua](https://cert.gov.ua) | 阿联酋：[tra.gov.ae/aecert](https://www.tra.gov.ae/aecert) | 英国：[ncsc.gov.uk](https://www.ncsc.gov.uk) | 美国：[us-cert.gov](https://www.us-cert.gov)
  - **全球**：[first.org](https://www.first.org) - 全球事件响应和安全团队论坛

## 综合指南

- 非常全面的防御步骤和注意事项列表，作者 Michael Horowitz：[defensivecomputingchecklist.com](https://defensivecomputingchecklist.com/)
- 隐私相关的软件推荐和建议：[privacytools.io](https://www.privacytools.io/)
- 关于互联网自由、数据健康和隐私的提示与技巧：[datadetoxkit.org](https://datadetoxkit.org/)
- 数字安全工具和策略：[securityinabox.org](https://securityinabox.org/)
- 在线隐私指南和软件推荐：通过 [Fried](https://fried.com/privacy)
- 加密安全指南：通过 [ProPrivacy](https://proprivacy.com/guides/the-ultimate-privacy-guide)
- 初学者安全指南的大量集合：[Heimdal Security](https://heimdalsecurity.com/blog/cyber-security-mega-guide)
- Motherboard 的防黑客指南：通过 [Vice](https://www.vice.com/en_us/article/d3devm/motherboard-guide-to-not-getting-hacked-online-safety-guide)
- 在线匿名性以及 Tor 和 VPN 教程：通过 [ivpn](https://www.ivpn.net/privacy-guides)

## 更多优秀的 GitHub 列表

- **优秀的开源应用**
  - [awesome-windows-apps](https://github.com/Awesome-Windows/Awesome) 作者：'many'
  - [awesome-macOS-apps](https://github.com/iCHAIT/awesome-macOS) 作者：@iCHAIT
  - [awesome-linux-software](https://github.com/luong-komorebi/Awesome-Linux-Software) 作者：@luong-komorebi
  - [open-source-ios-apps](https://github.com/dkhamsing/open-source-ios-apps) 作者：@dkhamsing
  - [open-source-android-apps](https://github.com/pcqpcq/open-source-android-apps) 作者：@pcqpcq
  - [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) 作者：'many'
  - [privacy-respecting](https://github.com/nikitavoloboev/privacy-respecting) 作者：@nikitavoloboev
  - [awesome-privacy](https://github.com/KevinColemanInc/awesome-privacy) 作者：@KevinColemanInc
  - [privacy-respecting-software](https://github.com/Lissy93/personal-security-checklist/blob/master/5_Privacy_Respecting_Software.md) 作者：@lissy93
- **指南**
  - [MacOS-Security-and-Privacy-Guide](https://github.com/drduh/macOS-Security-and-Privacy-Guide) 作者：@drduh
  - [YubiKey-Guide](https://github.com/drduh/YubiKey-Guide) 作者：@drduh
  - [Debian-Privacy-Server-Guide](https://github.com/drduh/Debian-Privacy-Server-Guide) 作者：@drduh
  - [personal-security-checklist](https://github.com/Lissy93/personal-security-checklist) 作者：@lissy93
- **安全链接（黑客/渗透测试/威胁情报/CTF）**
  - [Security_list](https://github.com/zbetcheckin/Security_list) 作者：@zbetcheckin
  - [awesome-security](https://github.com/sbilly/awesome-security) 作者：@sbilly
  - [awesome-sec-talks](https://github.com/PaulSec/awesome-sec-talks) 作者：@PaulSec
  - [awesome-threat-intelligence](https://github.com/hslatman/awesome-threat-intelligence) 作者：@hslatman
  - [awesome-incident-response](https://github.com/meirwah/awesome-incident-response) 作者：@meirwah
  - [awesome-anti-forensic](https://github.com/remiflavien1/awesome-anti-forensic) 作者：@remiflavien1
  - [awesome-malware-analysis](https://github.com/rshipp/awesome-malware-analysis) 作者：@rshipp
  - [awesome-lockpicking](https://github.com/fabacab/awesome-lockpicking) 作者：@fabacab
  - [awesome-hacking](https://github.com/carpedm20/awesome-hacking) 作者：@carpedm20
  - [awesome-honeypots](https://github.com/paralax/awesome-honeypots) 作者：@paralax
  - [awesome-forensics](https://github.com/Cugu/awesome-forensics) 作者：@cugu
  - [awesome-pentest](https://github.com/enaqx/awesome-pentest) 作者：@enaqx
  - [awesome-ctf](https://github.com/apsdehal/awesome-ctf) 作者：@apsdehal
  - [awesome-osint](https://github.com/jivoi/awesome-osint) 作者：@jivoi
  - [SecLists](https://github.com/danielmiessler/SecLists) 作者：@danielmiessler
  - [Infosec_Reference](https://github.com/rmusser01/Infosec_Reference) 作者：@rmusser01
- **其他**
  - [awesome-crypto-papers](https://github.com/pFarb/awesome-crypto-papers) 作者：@pFarb
- **优秀列表的优秀列表**
  - [awesome](https://github.com/sindresorhus/awesome) 作者：@sindresorhus
  - [lists](https://github.com/jnv/lists) 作者：@jnv
- **此仓库中的更多内容**
  - [个人安全清单](/README.md) 作者：@lissy93
  - [隐私友好软件](https://github.com/Lissy93/awesome-privacy)
  - [隐私与安全的重要性](/0_Why_It_Matters.md)
  - [数字安全小工具/DIY硬件](/6_Privacy_and-Security_Gadgets.md)
  - [TLDR - 本仓库的简要总结](/2_TLDR_Short_List.md)
  
---

*感谢您的访问，希望您在这里找到了一些有用的内容 :) 欢迎并非常感谢您的贡献 - 如果您想提出修改建议，请[提交问题](https://github.com/Lissy93/personal-security-checklist/issues/new/choose)，或[发起拉取请求](https://github.com/Lissy93/personal-security-checklist/pull/new/master)。请参阅：[《贡献指南》](/.github/CONTRIBUTING.md)。*

*根据[知识共享许可协议，CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)授权，© [Alicia Sykes](https://aliciasykes.com) 2020*

[![署名 4.0 国际](https://licensebuttons.net/l/by/3.0/88x31.png)](https://github.com/Lissy93/personal-security-checklist/blob/master/LICENSE.md)


----

觉得有帮助？考虑与他人分享，帮助他们也提升数字安全 😇

[![分享到 Twitter](https://img.shields.io/badge/分享-Twitter-17a2f3?style=for-the-badge&logo=Twitter)](http://twitter.com/share?text=查看个人网络安全清单——2020年终极数字安全和隐私保护提示列表，由%20%40Lissy_Sykes%20%F0%9F%94%90%20%20%F0%9F%9A%80&url=https://github.com/Lissy93/personal-security-checklist)
[![分享到 LinkedIn](https://img.shields.io/badge/分享-LinkedIn-0077b5?style=for-the-badge&logo=LinkedIn)](
http://www.linkedin.com/shareArticle?mini=true&url=https://github.com/Lissy93/personal-security-checklist&title=终极个人网络安全清单&summary=%F0%9F%94%92%20一个包含100多个数字安全和隐私保护提示的精选列表，适用于2020年&source=https://github.com/Lissy93)
[![分享到 Facebook](https://img.shields.io/badge/分享-Facebook-4267b2?style=for-the-badge&logo=Facebook)](https://www.linkedin.com/shareArticle?mini=true&url=https%3A//github.com/Lissy93/personal-security-checklist&title=终极个人网络安全清单&summary=%F0%9F%94%92%20一个包含100多个数字安全和隐私保护提示的精选列表，适用于2020年&source=)
[![分享到 Mastodon](https://img.shields.io/badge/分享-Mastodon-56a7e1?style=for-the-badge&logo=Mastodon)](https://mastodon.social/web/statuses/new?text=查看由%20%40Lissy93%20在%20%23GitHub%20上发布的终极个人网络安全清单%20%F0%9F%94%90%20%E2%9C%A8)
