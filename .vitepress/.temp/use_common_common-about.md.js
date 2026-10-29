import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/doc/use/common/common-about.png";
const __pageData = JSON.parse('{"title":"CommonAbout","description":"","frontmatter":{},"headers":[],"relativePath":"use/common/common-about.md","filePath":"use/common/common-about.md"}');
const _sfc_main = { name: "use/common/common-about.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="commonabout" tabindex="-1">CommonAbout <a class="header-anchor" href="#commonabout" aria-label="Permalink to &quot;CommonAbout&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-CommonAbout-brightgreen" alt="CommonAbout"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonAbout" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-CommonAbout-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/common-about" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/common-about" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>基于公共框架的通用关于页面</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:common-about:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="aboutactivity" tabindex="-1">AboutActivity <a class="header-anchor" href="#aboutactivity" aria-label="Permalink to &quot;AboutActivity&quot;">​</a></h3><p>整合了图标、版本、更多信息的关于页面（支持唤起调试信息）</p><img${ssrRenderAttr("src", _imports_0)}><h3 id="aboutfragment" tabindex="-1">AboutFragment <a class="header-anchor" href="#aboutfragment" aria-label="Permalink to &quot;AboutFragment&quot;">​</a></h3><p>通用的关于页面的更多信息</p><h3 id="settingsdata-settingsholder" tabindex="-1">SettingsData &amp;&amp; SettingsHolder <a class="header-anchor" href="#settingsdata-settingsholder" aria-label="Permalink to &quot;SettingsData &amp;&amp; SettingsHolder&quot;">​</a></h3><p>通用的消息样式</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/common/common-about.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonAbout = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonAbout as default
};
