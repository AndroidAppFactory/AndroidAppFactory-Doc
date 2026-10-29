import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibText","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/noui/lib-text.md","filePath":"use/libs/noui/lib-text.md"}');
const _sfc_main = { name: "use/libs/noui/lib-text.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libtext" tabindex="-1">LibText <a class="header-anchor" href="#libtext" aria-label="Permalink to &quot;LibText&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibText-brightgreen" alt="LibText"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibText" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibText-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-text" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-text" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>文字处理的基础工具库，入分割字符串，特殊字符串等</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-text:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="textfactoryutils" tabindex="-1">TextFactoryUtils <a class="header-anchor" href="#textfactoryutils" aria-label="Permalink to &quot;TextFactoryUtils&quot;">​</a></h3><ul><li><p>过滤字符串收尾的空格、引号</p></li><li><p>根据指定分隔符，将字符串分割为字符数组</p></li><li><p>返回指定长度的随机字符串</p></li><li><p>返回 String 的 UTF8 格式的 Byte 数组</p></li><li><p>返回基于 HTML 格式化的 CharSequence（支持带点击回调），支持的HTML标签，可以参考文章 <a href="https://blog.bihe0832.com/android-textview-html.html" target="_blank" rel="noreferrer">Android Textview 对HTML 的支持</a></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/noui/lib-text.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libText = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libText as default
};
