import { component$, useContextProvider, Slot } from "@builder.io/qwik";
// 导入 StaticGenerateHandler 用于 SSG
import { routeLoader$, type RequestHandler, } from "@builder.io/qwik-city";
import jsyaml from "js-yaml";

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import type { Sections } from "~/types/PSC";

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
