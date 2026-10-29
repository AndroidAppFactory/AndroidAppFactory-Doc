import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibFloatview","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/ui/lib-float-view.md","filePath":"use/libs/ui/lib-float-view.md"}');
const _sfc_main = { name: "use/libs/ui/lib-float-view.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libfloatview" tabindex="-1">LibFloatview <a class="header-anchor" href="#libfloatview" aria-label="Permalink to &quot;LibFloatview&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibFloatview-brightgreen" alt="LibFloatview"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibFloatview" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibFloatview-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-float-view" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-float-view" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>Android 悬浮窗管理</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-float-view:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="iconmanager" tabindex="-1">IconManager <a class="header-anchor" href="#iconmanager" aria-label="Permalink to &quot;IconManager&quot;">​</a></h3><ul><li>悬浮窗管理，自带一个IconView，负责悬浮窗的展示、隐藏、各种定制类型等</li></ul><h3 id="iconview" tabindex="-1">IconView <a class="header-anchor" href="#iconview" aria-label="Permalink to &quot;IconView&quot;">​</a></h3><ul><li>提示Icon类悬浮窗，实现了：位置跟随、自动靠边、自动虚幻、自动隐藏、红点提醒等</li></ul><h3 id="baseiconview" tabindex="-1">BaseIconView <a class="header-anchor" href="#baseiconview" aria-label="Permalink to &quot;BaseIconView&quot;">​</a></h3><ul><li>常用悬浮窗的基类，实现了手指跟随</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/ui/lib-float-view.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libFloatView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libFloatView as default
};
