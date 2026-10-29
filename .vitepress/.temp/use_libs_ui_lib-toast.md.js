import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/doc/use/libs/ui/lib-toast.png";
const __pageData = JSON.parse('{"title":"LibToast","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/ui/lib-toast.md","filePath":"use/libs/ui/lib-toast.md"}');
const _sfc_main = { name: "use/libs/ui/lib-toast.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libtoast" tabindex="-1">LibToast <a class="header-anchor" href="#libtoast" aria-label="Permalink to &quot;LibToast&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibToast-brightgreen" alt="LibToast"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibToast" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibToast-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-toast" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-toast" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>通用的Toast弹框，支持各种自定义设置的Toast</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-toast:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="toastutils" tabindex="-1">ToastUtils <a class="header-anchor" href="#toastutils" aria-label="Permalink to &quot;ToastUtils&quot;">​</a></h3><img${ssrRenderAttr("src", _imports_0)} width="30%"><ul><li><p>通用的Toast 弹框、解决设备兼容性问题</p></li><li><p>可定制Toast，上、下、左、右方位以及距离页边距的距离</p></li><li><p>Toast内容支持基础的HTML内容</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/ui/lib-toast.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libToast = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libToast as default
};
