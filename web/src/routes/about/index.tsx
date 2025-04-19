import { component$, useResource$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Icon from "~/components/core/icon";
import { projects, socials, intro, contributing, license } from './about-content';
import { marked } from "marked";

export default component$(() => {

  interface Contributor {
    login: string;
    avatar_url: string;
    avatarUrl: string;
    html_url: string;
    contributions: number;
    name: string;
  }

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };

  const contributorsResource = useResource$<Contributor[]>(async () => {
    const url = 'https://api.github.com/repos/lissy93/personal-security-checklist/contributors?per_page=100';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('获取贡献者失败');
    }
    return await response.json();
  });

  // const sponsorsResource = useResource$<Contributor[]>(async () => {
  //   const url = 'https://github-sponsors.as93.workers.dev/lissy93';
  //   const response = await fetch(url);
  //   if (!response.ok) {
  //     throw new Error('获取赞助者失败');
  //   }
  //   return await response.json();
  // });


  return (
    <div class="m-4 md:mx-16">
      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">关于安全清单</h2>
        {intro.map((paragraph, index) => (
          <p class="mb-2" key={index}>{paragraph}</p>
        ))}        
      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">贡献指南</h2>
        {contributing.map((paragraph, index) => (
          <p class="mb-2" key={index} dangerouslySetInnerHTML={parseMarkdown(paragraph)}></p>
        ))}        
      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">致谢</h2>

        <h3 class="text-2xl mb-2">赞助者</h3>

        <p>
          衷心感谢以下赞助者对本项目的持续支持 💖
        </p>
{/* 
        <div class="flex flex-wrap gap-4 my-4 mx-auto">
          <Resource
              value={sponsorsResource}
              onPending={() => <p>加载中...</p>}
              onResolved={(contributors: Contributor[]) => (
                contributors.map((contributor: Contributor) => (
                  <a
                    class="w-16 tooltip tooltip-bottom"
                    href={contributor.html_url || `https://github.com/${contributor.login}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={contributor.login}
                    data-tip={`感谢 @${contributor.login}`}
                  >
                    <img
                      class="avatar rounded"
                      width="64" height="64"
                      src={contributor.avatar_url || contributor.avatarUrl}
                      alt={contributor.login}
                    />
                    <p
                      class="text-ellipsis overflow-hidden w-max-16 mx-auto line-clamp-2"
                    >{contributor.name || contributor.login}</p>
                  </a>
                ))
              )}
            />
          </div> */}

        <div class="divider"></div>

        <h3 class="text-2xl mb-2">贡献者</h3>
        <p>
          感谢所有帮助构建和维护本项目的人。<br />
          特别感谢以下前100名贡献者 🌟
        </p>
        <div class="flex flex-wrap gap-4 my-4 mx-auto">
          <Resource
            value={contributorsResource}
            onPending={() => <p>加载中...</p>}
            onResolved={(contributors: Contributor[]) => (
              contributors.map((contributor: Contributor) => (
                <a
                  class="w-16 tooltip tooltip-bottom"
                  href={contributor.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={contributor.login}
                  data-tip={`@${contributor.login} 贡献了 ${contributor.contributions} 次\n\n点击查看其主页`}
                >
                  <img
                    class="avatar rounded"
                    width="64" height="64"
                    src={contributor.avatar_url}
                    alt={contributor.login}
                  />
                  <p
                    class="text-ellipsis overflow-hidden w-max-16 mx-auto"
                  >{contributor.login}</p>
                </a>
              ))
            )}
          />
        </div>

      </article>
      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] my-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2" id="author">关于作者</h2>
          <p>
            本项目最初由
            <a href="https://aliciasykes.com" class="link link-primary">Alicia Sykes</a> 发起，
            并得到了社区的大力帮助。
          </p>
          <br />
          <div class="ml-4 float-right">
            <img class="rounded-lg" width="180" height="240" alt="Alicia Sykes" src="https://i.ibb.co/fq10qhL/DSC-0597.jpg" />
            <div class="flex gap-2 my-2 justify-between">
              {
                socials.map((social, index) => (
                  <a key={index} href={social.link}>
                    <Icon icon={social.icon} width={24} height={24} />
                  </a>
                ))
              }
            </div>
          </div>
          <p class="text-lg italic font-thin">
            我致力于开发帮助人们<b>摆脱大科技公司、保护数据安全和隐私</b>的应用。
          </p>
          <br />
          <p>
            我对自托管、Linux、安全和OSINT有浓厚兴趣。<br />
            如果你也喜欢这些内容，欢迎关注我的其他项目：
          </p>
          <ul class="list-disc pl-8">
            {
              projects.map((project, index) => (
                <li key={index}>
                  <img class="rounded inline mr-1" width="20" height="20" alt={project.title} src={project.icon} />
                  <a href={project.link} class="link link-secondary" target="_blank" rel="noreferrer">
                    {project.title}
                  </a> - {project.description}
                </li>
              ))
            }
          </ul>
          <br />
          <p>
            更多我发布的开源应用，请访问
            <a href="https://apps.aliciasykes.com/" class="link link-primary">apps.aliciasykes.com</a>，
            或 <a href="https://github.com/lissy93" class="link link-primary">在 GitHub 上关注我</a>
          </p>

      </article>

      <div class="divider"></div>

      <article class="bg-back p-8 mx-auto max-w-[1200px] m-8 rounded-lg shadow-md">
        <h2 class="text-3xl mb-2">许可证</h2>
        <p>
          本项目采用双重许可，清单内容（位于
          <a class="link" href="https://github.com/Lissy93/personal-security-checklist/blob/HEAD/personal-security-checklist.yml">
            <code>personal-security-checklist.yml</code>
          </a>）采用
          <b><a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a></b> 许可。
          其他所有内容（包括代码）均采用
          <b><a href="https://gist.github.com/Lissy93/143d2ee01ccc5c052a17">MIT</a></b> 许可。
        </p>
        <pre class="bg-front whitespace-break-spaces rounded text-xs my-2 mx-auto p-2">
          {license}
        </pre>
        <details class="collapse">
          <summary class="collapse-title">
            <h3 class="mt-2">这对你意味着什么？</h3>
          </summary>
          <div class="collapse-content">
            <p class="mb-2">
              这意味着除清单 YAML 文件外，你几乎可以无限制地使用、复制、修改、合并、发布、分发、再授权和/或销售本软件的副本。
              只需在任何副本中保留原始版权声明和许可声明即可。
            </p>
            <p class="mb-2">
              对于安全清单内容，你可以在注明出处、不用于商业用途、并以相同许可分发贡献的前提下自由分享和修改。
            </p>
          </div>
        </details>

      </article>

    </div>
  );
});

export const head: DocumentHead = {
  title: "关于 | 数字侠",
  meta: [
    {
      name: "description",
      content: "本项目旨在为你提供实用的数字安全和隐私保护建议。",
    },
  ],
};
