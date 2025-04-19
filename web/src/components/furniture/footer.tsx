import { component$ } from "@builder.io/qwik";

export default component$(() => {

  const ghLink = 'https://github.com/zituoguan/shuzixia';
  const licenseLink = 'https://github.com/zituoguan/shuzixia/blob/master/LICENSE';
  const authorLink = 'https://aliciasykes.com';

  return (
  <footer class="footer footer-center px-4 py-2 mt-4 text-base-content bg-base-200 bg-opacity-25">
    <aside>
      <p>
        许可协议为 <a href={licenseLink} class="link link-primary">MIT</a> -
        © <a href={authorLink} class="link link-primary">Alicia Sykes</a> 2024 -
        源代码托管于 <a href={ghLink} class="link link-primary">GitHub</a>
      </p>
    </aside>
  </footer>
  );
});
