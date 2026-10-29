import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/doc/use/common/common-share/share_demo.jpg";
const __pageData = JSON.parse('{"title":"CommonShare","description":"","frontmatter":{},"headers":[],"relativePath":"use/common/common-share.md","filePath":"use/common/common-share.md"}');
const _sfc_main = { name: "use/common/common-share.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="commonshare" tabindex="-1">CommonShare <a class="header-anchor" href="#commonshare" aria-label="Permalink to &quot;CommonShare&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-CommonShare-brightgreen" alt="CommonShare"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonShare" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-CommonShare-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/common-share" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/common-share" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>基于公共框架，增加的分享通用页面，及APP分享模块</p><h2 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用-1" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用-1" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:common-share:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="sharebaseactivity" tabindex="-1">ShareBaseActivity <a class="header-anchor" href="#sharebaseactivity" aria-label="Permalink to &quot;ShareBaseActivity&quot;">​</a></h3><p>基本的分享界面，支持图片或者结构化消息，仅实现UI，逻辑没有实现</p><h3 id="shareqrcodeactivity-shareappactivity" tabindex="-1">ShareQRCodeActivity &amp;&amp; ShareAPPActivity <a class="header-anchor" href="#shareqrcodeactivity-shareappactivity" aria-label="Permalink to &quot;ShareQRCodeActivity &amp;&amp; ShareAPPActivity&quot;">​</a></h3><p>通过二维码分享链接等内容及应用分享，根据配置，可以分享用户的下载方式的文本或者二维码其余用户，二维码事例如下：</p><img${ssrRenderAttr("src", _imports_0)} width="90%"></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/common/common-share.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonShare = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonShare as default
};
