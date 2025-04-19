// src/routes/_404.tsx
import { component$ } from '@builder.io/qwik';

export default component$(() => {
  return (
    <div>
      <h1>404 未找到</h1>
      <p>您访问的页面不存在。</p>
      <a href="/">返回首页</a>
    </div>
  );
});
