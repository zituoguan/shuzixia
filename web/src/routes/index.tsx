import { component$, useContext } from '@builder.io/qwik';
import { type DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/furniture/hero";
import SectionLinkGrid from "~/components/psc/section-link-grid";
import Progress from "~/components/psc/progress";

import { ChecklistContext } from '~/store/checklist-context';

import { useChecklist } from '~/store/local-checklist-store';

export default component$(() => { 
  const checklists = useContext(ChecklistContext);

  const localChecklist = useChecklist();

  return (
    <>
      <Hero />
      <Progress />
      <SectionLinkGrid sections={localChecklist.checklist.checklist || checklists.value} />
    </>
  );
});

export const head: DocumentHead = {
  title: "数字侠",
  meta: [
    {
      name: "description",
      content: "终极增强安全和隐私清单，用于保护您的数字生活。",
    },
  ],
};
