interface Article {
  title: string;
  description: string;
  slug: string;
  markdown: string;
  warningMessage?: string;
}

const articles: Article[] = [
  {
    title: '为什么安全很重要？',
    description: '为什么你的个人数字安全和隐私需要被认真对待。',
    slug: 'importance-of-digital-security',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/0_Why_It_Matters.md',
  },
  {
    title: '安全清单：简短版',
    description: '主清单太长？这里有精简版。',
    slug: 'short-list',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/2_TLDR_Short_List.md',
  },
  {
    title: '实用链接',
    description: '额外工具、资源和信息的链接目录。',
    slug: 'helpful-links',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/4_Privacy_And_Security_Links.md',
    warningMessage: '本文写于2020年，需要更新。',
  },
  {
    title: '安全硬件设备',
    description: '有助于保护隐私和安全的实用硬件设备。',
    slug: 'privacy-gadgets',
    markdown: 'https://raw.githubusercontent.com/Lissy93/personal-security-checklist/old-version/6_Privacy_and-Security_Gadgets.md',
    warningMessage: '本文已过时，可能包含不正确的信息。建议在使用文中列出的产品前先核实相关信息。',
  },
  {
    title: '尊重隐私的软件',
    description: '隐私友好型软件替代主流应用和服务的终极清单。',
    slug: 'awesome-privacy',
    markdown: 'https://raw.githubusercontent.com/Lissy93/awesome-privacy/main/README.md',
    warningMessage: '该资源已迁移！你现在可以在 github.com/Lissy93/awesome-privacy 访问它。',
  },
];

export default articles;
