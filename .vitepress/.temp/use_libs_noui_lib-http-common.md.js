import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibHttpCommon","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/noui/lib-http-common.md","filePath":"use/libs/noui/lib-http-common.md"}');
const _sfc_main = { name: "use/libs/noui/lib-http-common.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libhttpcommon" tabindex="-1">LibHttpCommon <a class="header-anchor" href="#libhttpcommon" aria-label="Permalink to &quot;LibHttpCommon&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibHttpCommon-brightgreen" alt="LibHttpCommon"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibHttpCommon" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibHttpCommon-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-http-common" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-http-common" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>一款基于 HttpURLConnection 实现的简单的网络请求的事例，没有做任何处理，将网络请求的内容以String返回</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-http-common:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="httpserver" tabindex="-1">HTTPServer <a class="header-anchor" href="#httpserver" aria-label="Permalink to &quot;HTTPServer&quot;">​</a></h3><ul><li><p>支持使用Http或者Https 同步、异步发送 GET 和 POST 请求</p></li><li><p>根据请求链接是 https 还是 http 开头确定使用什么协议</p></li><li><p>根据是否有data 信息 确定使用 GET 还是 POST</p></li><li><p>支持添加 http 头，cookie，设置超时时间等</p></li><li><p>支持文件上传</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/noui/lib-http-common.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libHttpCommon = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libHttpCommon as default
};
