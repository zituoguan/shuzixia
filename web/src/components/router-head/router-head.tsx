import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { component$ } from "@builder.io/qwik";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      {/* 基本信息 */}
      <title>{head.title || '数字侠 - 终极个人安全清单，保护你的数字生活'}</title>
      <meta name="description" content="终极个人安全清单，保护你的数字生活" />
      
      {/* 网站配置 */}
      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />
      <meta name="theme-color" content="#6419e6" />
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={loc.url.href} />
      <meta property="og:title" content="数字侠 - 终极个人安全清单，保护你的数字生活" />
      <meta property="og:description" content="终极个人安全清单，保护你的数字生活" />
      <meta property="og:image" content="/banner.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={loc.url.href} />
      <meta name="twitter:title" content="数字侠 - 终极个人安全清单，保护你的数字生活" />
      <meta name="twitter:description" content="终极个人安全清单，保护你的数字生活" />
      <meta name="twitter:image" content="/banner.png" />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style key={s.key} {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}

      {head.scripts.map((s) => (
        <script key={s.key} {...s.props} dangerouslySetInnerHTML={s.script} />
      ))}
      {/* <script defer data-domain="digital-defense.io" src="https://no-track.as93.net/js/script.js"></script> */}
    </>
  );
});
