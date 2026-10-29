import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibFragmentation","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/ui/lib-fragmentation.md","filePath":"use/libs/ui/lib-fragmentation.md"}');
const _sfc_main = { name: "use/libs/ui/lib-fragmentation.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libfragmentation" tabindex="-1">LibFragmentation <a class="header-anchor" href="#libfragmentation" aria-label="Permalink to &quot;LibFragmentation&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibFragmentation-brightgreen" alt="LibFragmentation"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibFragmentation" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibFragmentation-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-fragmentation" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-fragmentation" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>单Activity ＋ 多Fragment 模式的Fragment管理框架。对应GitHub：<a href="https://github.com/YoKeyword/Fragmentation" target="_blank" rel="noreferrer">https://github.com/YoKeyword/Fragmentation</a> 目前已经做了二次封装。使用可以参考下面几篇文章：</p><ul><li><p><a href="http://www.jianshu.com/p/d9143a92ad94" target="_blank" rel="noreferrer">Fragment全解析系列（一）：那些年踩过的坑</a></p></li><li><p><a href="http://www.jianshu.com/p/fd71d65f0ec6" target="_blank" rel="noreferrer">Fragment全解析系列（二）：正确的使用姿势</a></p></li><li><p><a href="https://github.com/YoKeyword/Fragmentation/wiki" target="_blank" rel="noreferrer">Fragmentation Wiki</a></p></li></ul><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-fragmentation:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><p>开发者无需关注，需要与 <a href="./lib-fragmentation-swipeback.html">LibFragmentation_swipeback</a> 配套使用</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/ui/lib-fragmentation.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libFragmentation = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libFragmentation as default
};
