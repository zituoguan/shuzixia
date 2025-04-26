import { component$, useContextProvider, Slot } from "@builder.io/qwik";
// 导入 StaticGenerateHandler 用于 SSG
import { routeLoader$, type RequestHandler, type StaticGenerateHandler } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
// 导入 Section 类型，用于 onStaticGenerate
import type { Sections, Section } from "~/types/PSC";

const remoteUrl = 'https://cdn.jsdelivr.net/gh/zituoguan/shuzixia@HEAD/personal-security-checklist.yml';

// 辅助函数：执行 fetch 并处理错误
async function fetchChecklistData(): Promise<Sections> {
  try {
    console.log(`[Loader/SSG] Fetching checklist from: ${remoteUrl}`); // 添加日志
    const response = await fetch(remoteUrl);
    if (!response.ok) {
      console.error(`[Loader/SSG] Failed to fetch checklist: ${response.status} ${response.statusText}`);
      return []; // 获取失败时返回空数组
    }
    const yamlText = await response.text();
    const data = (jsyaml.load(yamlText) as Sections) || [];
    console.log(`[Loader/SSG] Successfully fetched and parsed ${data.length} sections.`); // 添加日志
    return data;
  } catch (error) {
    console.error("[Loader/SSG] Error fetching or parsing checklist:", error);
    return []; // 其他错误时返回空数组
  }
}

// useChecklists 使用 fetch (用于 SSR 和客户端导航)
export const useChecklists = routeLoader$(async () => {
  return await fetchChecklistData();
});

// 添加 onStaticGenerate 并使其也执行 fetch (用于 SSG 构建时)
export const onStaticGenerate: StaticGenerateHandler = async () => {
  // 在构建时获取数据
  const sections = await fetchChecklistData();
  // 从获取的数据中提取 slug 作为动态路由 [title] 的参数
  const params = sections.map((section: Section) => ({ title: section.slug }));
   if (params.length === 0) {
      console.warn("[SSG] Warning: No params generated from fetched data. Checklist routes might be missing.");
   } else {
     console.log(`[SSG] Generated ${params.length} params for dynamic routes from fetched data.`);
   }
  // 返回参数列表，Qwik City 将为每个参数生成静态页面
  return { params };
};


export const onGet: RequestHandler = async ({ cacheControl }) => {
  // 控制缓存策略
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const checklists = useChecklists();
  // 确保传递给 Context 的是 Signal<Sections>
  useContextProvider(ChecklistContext, checklists);

  return (
    <>
      <Navbar /> {/* Navbar 可以通过 useContext(ChecklistContext) 获取数据 */}
      <main class="bg-base-100 min-h-full">
        <Slot />
      </main>
      <Footer />
    </>
  );
});
