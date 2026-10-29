import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _imports_0 = "/doc/tools/router_page.png";
const __pageData = JSON.parse('{"title":"H5页面通过指定Schema拉起Android应用","description":"","frontmatter":{},"headers":[],"relativePath":"tools/android_schema.md","filePath":"tools/android_schema.md"}');
const _sfc_main = { name: "tools/android_schema.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="h5页面通过指定schema拉起android应用" tabindex="-1">H5页面通过指定Schema拉起Android应用 <a class="header-anchor" href="#h5页面通过指定schema拉起android应用" aria-label="Permalink to &quot;H5页面通过指定Schema拉起Android应用&quot;">​</a></h1><p>在终端开发中，经常会遇到Web页面与终端联动的需求，因此基本上终端都会添加schema支持。终端测试总是很方便，但是一旦和H5结合，尤其H5的页面还没开发好的时候，联动测试就比较麻烦。最近就顺手撸了一个工具，一劳永逸。这里不介绍终端页面如何添加schema支持。</p><h2 id="demo-使用" tabindex="-1">Demo 使用 <a class="header-anchor" href="#demo-使用" aria-label="Permalink to &quot;Demo 使用&quot;">​</a></h2><ol><li><p>使用PC浏览器打开URL：<a href="https://cdn.bihe0832.com/tools/router/index.html" target="_blank" rel="noreferrer">https://cdn.bihe0832.com/tools/router/index.html</a></p></li><li><p>按照下图的指引，输入URL后使用手机扫描即可跳转体验</p><img${ssrRenderAttr("src", _imports_0)} width="80%"></li></ol><h2 id="相关代码" tabindex="-1">相关代码 <a class="header-anchor" href="#相关代码" aria-label="Permalink to &quot;相关代码&quot;">​</a></h2><ul><li><p>Demo 相关页面代码：</p><p><a href="https://github.com/bihe0832/demo.bihe0832.com/tree/main/tools/router" target="_blank" rel="noreferrer">https://github.com/bihe0832/demo.bihe0832.com/tree/main/tools/router</a></p></li><li><p>Demo 中浏览器及设备检测：</p><p><a href="https://github.com/bihe0832/MultiQrcode" target="_blank" rel="noreferrer">https://github.com/bihe0832/MultiQrcode</a></p></li></ul><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p>终端链接，实质上就是一个URL，然而不管是原生浏览器还是一些第三方浏览器，都对地址栏做了一些扩展功能，导致在地址栏直接输入URL并不能直接跳转。</p><p>我们只需要做一个中转页，在中转页加载或者点击的时候，使用window.location.href重定向到我们的schema即可。</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tools/android_schema.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const android_schema = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  android_schema as default
};
