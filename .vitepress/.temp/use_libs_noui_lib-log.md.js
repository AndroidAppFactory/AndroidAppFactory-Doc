import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibLog","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/noui/lib-log.md","filePath":"use/libs/noui/lib-log.md"}');
const _sfc_main = { name: "use/libs/noui/lib-log.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="liblog" tabindex="-1">LibLog <a class="header-anchor" href="#liblog" aria-label="Permalink to &quot;LibLog&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibLog-brightgreen" alt="LibLog"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibLog" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibLog-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-log" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-log" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>简单封装的日志工具类，支持注册自定义日志实现</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-log:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="zlog" tabindex="-1">ZLog <a class="header-anchor" href="#zlog" aria-label="Permalink to &quot;ZLog&quot;">​</a></h3><ul><li>日志工具类的各类日志打印方式</li></ul><h3 id="logimplforlogcat" tabindex="-1">LogImplForLogcat <a class="header-anchor" href="#logimplforlogcat" aria-label="Permalink to &quot;LogImplForLogcat&quot;">​</a></h3><ul><li>使用系统Logcat的日志实现</li></ul><h3 id="logimpl" tabindex="-1">LogImpl <a class="header-anchor" href="#logimpl" aria-label="Permalink to &quot;LogImpl&quot;">​</a></h3><ul><li>自定义日志实现的抽象</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/noui/lib-log.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libLog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libLog as default
};
