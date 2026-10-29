import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/doc/use/common/common-splash/AgreementPrivacy.png";
const _imports_1 = "/doc/use/common/common-splash/SplashActivity.png";
const __pageData = JSON.parse('{"title":"CommonSplash","description":"","frontmatter":{},"headers":[],"relativePath":"use/common/common-splash.md","filePath":"use/common/common-splash.md"}');
const _sfc_main = { name: "use/common/common-splash.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="commonsplash" tabindex="-1">CommonSplash <a class="header-anchor" href="#commonsplash" aria-label="Permalink to &quot;CommonSplash&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-CommonSplash-brightgreen" alt="CommonSplash"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonSplash" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-CommonSplash-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/common-splash" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/common-splash" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>基于公共框架，进一步封装的闪屏、用户隐私与协议</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:common-splash:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="agreementprivacy" tabindex="-1">AgreementPrivacy <a class="header-anchor" href="#agreementprivacy" aria-label="Permalink to &quot;AgreementPrivacy&quot;">​</a></h3><ul><li><p>基于 <a href="./../libs/noui/lib-text.html#textfactoryutils">TextFactoryUtils</a> 将文字转换为带跳转链接文字，生成隐私相关的跳转链接</p></li><li><p>展示首次启动时的用户隐私协议弹框</p></li></ul><img${ssrRenderAttr("src", _imports_0)} width="30%"><h3 id="splashactivity" tabindex="-1">SplashActivity <a class="header-anchor" href="#splashactivity" aria-label="Permalink to &quot;SplashActivity&quot;">​</a></h3><ul><li>简单的闪屏UI，支持Icon，APPName 和 Slogan，判断用户安装情况弹出隐私框</li></ul><img${ssrRenderAttr("src", _imports_1)} width="30%"></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/common/common-splash.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonSplash = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonSplash as default
};
