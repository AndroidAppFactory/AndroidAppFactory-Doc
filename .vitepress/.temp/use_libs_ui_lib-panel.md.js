import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibPanel","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/ui/lib-panel.md","filePath":"use/libs/ui/lib-panel.md"}');
const _sfc_main = { name: "use/libs/ui/lib-panel.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libpanel" tabindex="-1">LibPanel <a class="header-anchor" href="#libpanel" aria-label="Permalink to &quot;LibPanel&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibPanel-brightgreen" alt="LibPanel"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibPanel" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibPanel-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-panel" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-panel" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>一个支持添加文字、可以自由涂写的绘图板，支持修改颜色、画笔粗细、文字大小、文字粗细、支持数据的保存和读取，一般配合 CommonPanel 使用</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-panel:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="panelmanager" tabindex="-1">PanelManager <a class="header-anchor" href="#panelmanager" aria-label="Permalink to &quot;PanelManager&quot;">​</a></h3><ul><li>白板管理的核心类</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/ui/lib-panel.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libPanel as default
};
