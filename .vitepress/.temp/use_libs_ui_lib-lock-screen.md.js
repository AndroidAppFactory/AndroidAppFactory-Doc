import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibLockScreen","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/ui/lib-lock-screen.md","filePath":"use/libs/ui/lib-lock-screen.md"}');
const _sfc_main = { name: "use/libs/ui/lib-lock-screen.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="liblockscreen" tabindex="-1">LibLockScreen <a class="header-anchor" href="#liblockscreen" aria-label="Permalink to &quot;LibLockScreen&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibLockScreen-brightgreen" alt="LibLockScreen"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibLockScreen" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibLockScreen-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-lock-screen" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-lock-screen" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>锁屏壁纸实现，结合 Widget 可以实现进程保活</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-lock-screen:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="lockscreenpermission" tabindex="-1">LockScreenPermission <a class="header-anchor" href="#lockscreenpermission" aria-label="Permalink to &quot;LockScreenPermission&quot;">​</a></h3><ul><li>锁屏开启，以及基于需要的悬浮窗及悬浮在其他应用上层的权限判断的开启</li></ul><h3 id="cancelnoticeservice-lockscreenservice" tabindex="-1">CancelNoticeService &amp;&amp; LockScreenService <a class="header-anchor" href="#cancelnoticeservice-lockscreenservice" aria-label="Permalink to &quot;CancelNoticeService &amp;&amp; LockScreenService&quot;">​</a></h3><ul><li>接受锁屏等事件的系统服务，搭配使用可以实现保活</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/ui/lib-lock-screen.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libLockScreen = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libLockScreen as default
};
