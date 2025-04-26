import { component$, useContext } from '@builder.io/qwik';
import { useLocation, type StaticGenerateHandler } from '@builder.io/qwik-city';
import { marked } from 'marked';
import jsyaml from "js-yaml";
import Icon from '~/components/core/icon';
import { ChecklistContext } from '~/store/checklist-context';
import type { Sections, Section } from "~/types/PSC";
import Table from '~/components/psc/checklist-table';


const remoteUrl = 'https://cdn.jsdelivr.net/gh/zituoguan/shuzixia@HEAD/personal-security-checklist.yml';
async function fetchChecklistData(): Promise<Sections> {
  try {
    console.log(`[SSG Fetch in [title]] Fetching checklist from: ${remoteUrl}`);
    const response = await fetch(remoteUrl);
    if (!response.ok) {
      console.error(`[SSG Fetch in [title]] Failed: ${response.status}`);
      return [];
    }
    const yamlText = await response.text();
    const data = (jsyaml.load(yamlText) as Sections) || [];
    console.log(`[SSG Fetch in [title]] Fetched ${data.length} sections.`);
    return data;
  } catch (error) {
    console.error("[SSG Fetch in [title]] Error:", error);
    return [];
  }
}

// 添加 onStaticGenerate 并使其也执行 fetch (用于 SSG 构建时)
export const onStaticGenerate: StaticGenerateHandler = async () => {
  console.log("--- [SSG in [title]] Starting onStaticGenerate ---");
  let sections: Sections = [];
  try {
    // --- 选择你的数据加载方式 ---
    // sections = loadChecklistLocally(); // 如果用本地文件
    sections = await fetchChecklistData(); // 如果用 fetch

    console.log(`[SSG in [title]] Data loaded. Sections: ${sections.length}`);
    const params = sections.map((section: Section) => ({ title: section.slug }));
    console.log(`[SSG in [title]] Generated params count: ${params.length}`);

    if (params.length === 0) {
       console.warn("[SSG in [title]] Warning: No params generated!");
    }
    console.log("--- [SSG in [title]] Ending onStaticGenerate ---");
    return { params };

  } catch (error) {
    console.error("[SSG in [title]] FATAL ERROR:", error);
    console.log("--- [SSG in [title]] Ending onStaticGenerate due to error ---");
    return { params: [] };
  }
};

export default component$(() => {

  const checklists = useContext(ChecklistContext);

  const loc = useLocation();
  const slug = loc.params.title;

  const section: Section | undefined = (checklists.value)
    .find((item: Section) => item.slug === slug);

  const parseMarkdown = (text: string | undefined): string => {
    return marked.parse(text || '', { async: false }) as string || '';
  };
  
  return (
    <div class="md:my-8 md:px-16 sm:px-2 rounded-md">
    <article class="bg-back p-8 mx-auto w-full max-w-[1200px] rounded-lg shadow-md">
      <h1 class={['gap-2 text-5xl font-bold capitalize flex']}>
        <Icon height={36} width={36} icon={section?.icon || 'star'}  />
        {section?.title}
      </h1>
      <p class="py-2" dangerouslySetInnerHTML={parseMarkdown(section?.intro)}></p>

      <div class="overflow-x-auto">
        {section && (<Table section={section} />)}
      </div>

      {section && section.softwareLinks && (
        <>
        <div class="divider my-4">实用链接</div>
        <h3 class="text-xl my-2">推荐软件</h3>
          <ul class="list-disc pl-4">
          {section.softwareLinks.map((link, index) => (
            <li key={index}>
              <a class="link link-primary" href={link.url} title={link.description}>{link.title}</a>
            </li>
          ))}
          </ul>
        </>
      )}

    </article>
    </div>
  );
});

