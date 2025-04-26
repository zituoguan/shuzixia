import { component$, useContextProvider, Slot } from "@builder.io/qwik";
import { routeLoader$, type RequestHandler, type StaticGenerateHandler } from "@builder.io/qwik-city"; // 导入 StaticGenerateHandler
import jsyaml from "js-yaml";

import Navbar from "~/components/furniture/nav";
import Footer from "~/components/furniture/footer";
import { ChecklistContext } from "~/store/checklist-context";
import type { Sections, Section } from "~/types/PSC"; // 导入 Section 类型

export const useChecklists = routeLoader$(async () => {
  const remoteUrl = 'https://cdn.jsdelivr.net/gh/zituoguan/shuzixia@HEAD/personal-security-checklist.yml';
  try {
    const response = await fetch(remoteUrl);
    if (!response.ok) {
      console.error(`Failed to fetch checklist: ${response.statusText}`);
      return []; // 获取错误时返回空数组
    }
    const yamlText = await response.text();
    return (jsyaml.load(yamlText) as Sections) || [];
  } catch (error) {
    console.error("Error fetching or parsing checklist:", error);
    return []; // 解析错误时返回空数组
  }
});

// 添加 onStaticGenerate 以提供此布局下动态路由的参数
export const onStaticGenerate: StaticGenerateHandler = async () => {
  const remoteUrl = 'https://cdn.jsdelivr.net/gh/zituoguan/shuzixia@HEAD/personal-security-checklist.yml';
  try {
    const response = await fetch(remoteUrl);
     if (!response.ok) {
      console.error(`SSG: Failed to fetch checklist: ${response.statusText}`);
      return { params: [] }; // 错误时返回空参数
    }
    const yamlText = await response.text();
    const sections = (jsyaml.load(yamlText) as Sections) || [];
    // 提取 slugs 作为 '[title]' 参数
    const params = sections.map((section: Section) => ({ title: section.slug }));
    return { params }; // 返回参数列表
  } catch (error) {
     console.error("SSG: Error fetching or parsing checklist:", error);
     return { params: [] }; // 错误时返回空参数
  }
};

export const onGet: RequestHandler = async ({ cacheControl }) => {
  cacheControl({
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    maxAge: 5,
  });
};

export default component$(() => {
  const checklists = useChecklists();
  useContextProvider(ChecklistContext, checklists); // 提供 context

  return (
    <>
      <Navbar checklists={checklists.value} /> {/* 将 checklists 传递给 Navbar */}
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
