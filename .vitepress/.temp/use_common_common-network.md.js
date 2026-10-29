import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/doc/use/common/common-network.png";
const __pageData = JSON.parse('{"title":"CommonNetwork","description":"","frontmatter":{},"headers":[],"relativePath":"use/common/common-network.md","filePath":"use/common/common-network.md"}');
const _sfc_main = { name: "use/common/common-network.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="commonnetwork" tabindex="-1">CommonNetwork <a class="header-anchor" href="#commonnetwork" aria-label="Permalink to &quot;CommonNetwork&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-CommonNetwork-brightgreen" alt="CommonNetwork"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonNetwork" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-CommonNetwork-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/common-network" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/common-network" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>基于公共框架，进一步封装的网络状态监听组件</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:common-network:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="networkchangemanager-需要初始化" tabindex="-1">NetworkChangeManager(需要初始化) <a class="header-anchor" href="#networkchangemanager-需要初始化" aria-label="Permalink to &quot;NetworkChangeManager(需要初始化)&quot;">​</a></h3><ul><li><p>提供了网络切变的回调，回调切变前后的网络变化，可以配合 DeviceInfoManager 获取更多信息，例如下图是一个测试场景的效果：</p><img${ssrRenderAttr("src", _imports_0)} width="30%"></li></ul><p>上面效果的代码可以参考：<a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/BaseTest/src/main/java/com/bihe0832/android/base/test/network/TestNetworkActivity.kt" target="_blank" rel="noreferrer">https://github.com/bihe0832/AndroidAppFactory/tree/master/BaseTest/src/main/java/com/bihe0832/android/base/test/network/TestNetworkActivity.kt</a></p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/common/common-network.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonNetwork = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonNetwork as default
};
