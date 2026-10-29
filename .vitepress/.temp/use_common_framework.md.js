import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"Framework","description":"","frontmatter":{},"headers":[],"relativePath":"use/common/framework.md","filePath":"use/common/framework.md"}');
const _sfc_main = { name: "use/common/framework.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="framework" tabindex="-1">Framework <a class="header-anchor" href="#framework" aria-label="Permalink to &quot;Framework&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-Framework-brightgreen" alt="Framework"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/Framework" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-Framework-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/framework" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/framework" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>通用应用开发的公共框架，包含常量定义、调试模式、路由管理、通用页面，结合场景的通用弹框，基础资源以及对于所有基础组件的必要初始化等</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:framework:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="公共框架ui无关模块" tabindex="-1">公共框架UI无关模块 <a class="header-anchor" href="#公共框架ui无关模块" aria-label="Permalink to &quot;公共框架UI无关模块&quot;">​</a></h3><ul><li>公共框架的非UI的核心模块，主要定义了全局的应用上下文、应用调试、对于底层基础库的二次封装等。点击 <a href="./framework/framework-noui.html">公共框架UI无关模块</a> 查看详细信息</li></ul><h3 id="公共框架ui模块" tabindex="-1">公共框架UI模块 <a class="header-anchor" href="#公共框架ui模块" aria-label="Permalink to &quot;公共框架UI模块&quot;">​</a></h3><ul><li>公共框架的UI相关模块，主要定义了各种通用UI。点击 <a href="./framework/framework-ui.html">公共框架UI模块</a> 查看详细信息</li></ul><h3 id="应用更新" tabindex="-1">应用更新 <a class="header-anchor" href="#应用更新" aria-label="Permalink to &quot;应用更新&quot;">​</a></h3><ul><li>基于公共框架的应用更新模块，主要定义了更新相关的数据结构，以及各种更新类型下的处理方式。点击 <a href="./framework/framework-update.html">应用更新</a> 查看详细信息</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/common/framework.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const framework = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  framework as default
};
