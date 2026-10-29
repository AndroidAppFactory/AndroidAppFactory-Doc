import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_0, a as _imports_1 } from "./common-feedback.CmCjpWWJ.js";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CommonFeedback","description":"","frontmatter":{},"headers":[],"relativePath":"use/common/common-feedback.md","filePath":"use/common/common-feedback.md"}');
const _sfc_main = { name: "use/common/common-feedback.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="commonfeedback" tabindex="-1">CommonFeedback <a class="header-anchor" href="#commonfeedback" aria-label="Permalink to &quot;CommonFeedback&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-CommonFeedback-brightgreen" alt="CommonFeedback"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonFeedback" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-CommonFeedback-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/common-feedback" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/common-feedback" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>基于公共框架，结合腾讯吐槽添加的用户反馈组件</p><h2 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用-1" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用-1" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:common-feedback:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><p>基于 <a href="https://support.qq.com/products/290858" target="_blank" rel="noreferrer">腾讯吐槽</a> 通过网页打开的用户反馈模块。会自动收集基础信息。</p><p>用户界面：</p><img${ssrRenderAttr("src", _imports_0)} width="90%"><p>反馈提交以后管理端界面：</p><img${ssrRenderAttr("src", _imports_1)} width="90%"></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/common/common-feedback.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonFeedback = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonFeedback as default
};
