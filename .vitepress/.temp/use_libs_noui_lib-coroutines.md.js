import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibCoroutines","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/noui/lib-coroutines.md","filePath":"use/libs/noui/lib-coroutines.md"}');
const _sfc_main = { name: "use/libs/noui/lib-coroutines.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libcoroutines" tabindex="-1">LibCoroutines <a class="header-anchor" href="#libcoroutines" aria-label="Permalink to &quot;LibCoroutines&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibCoroutines-brightgreen" alt="LibCoroutines"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibCoroutines" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibCoroutines-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-coroutines" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-coroutines" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>基于公共框架的协程相关处理</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-coroutines:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="zixiecoroutinesexception" tabindex="-1">ZixieCoroutinesException <a class="header-anchor" href="#zixiecoroutinesexception" aria-label="Permalink to &quot;ZixieCoroutinesException&quot;">​</a></h3><p>通用基础框架的协程异常定义</p><h3 id="zixiecoroutinesdata" tabindex="-1">ZixieCoroutinesData <a class="header-anchor" href="#zixiecoroutinesdata" aria-label="Permalink to &quot;ZixieCoroutinesData&quot;">​</a></h3><p>协程通用的数据结构，可以同时返回错误和正常值，并支持多种调用方式</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/noui/lib-coroutines.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libCoroutines = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libCoroutines as default
};
