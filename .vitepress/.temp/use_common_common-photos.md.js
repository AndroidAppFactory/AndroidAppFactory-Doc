import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CommonPhotos","description":"","frontmatter":{},"headers":[],"relativePath":"use/common/common-photos.md","filePath":"use/common/common-photos.md"}');
const _sfc_main = { name: "use/common/common-photos.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="commonphotos" tabindex="-1">CommonPhotos <a class="header-anchor" href="#commonphotos" aria-label="Permalink to &quot;CommonPhotos&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-CommonPhotos-brightgreen" alt="CommonPhotos"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonPhotos" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-CommonPhotos-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/common-photos" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/common-photos" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>基于公共框架的使用系统原生进一步封装的拍照、相册选择、裁剪图片等，已适配到Android 11</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:common-photos:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="activity的扩展" tabindex="-1">Activity的扩展 <a class="header-anchor" href="#activity的扩展" aria-label="Permalink to &quot;Activity的扩展&quot;">​</a></h3><ul><li><p>获取无需相册权限的拍照、裁剪目录及图片</p></li><li><p>无需相册权限的拍照</p></li><li><p>基于 <a href="./../libs/ui/lib-permission.html#permissionmanager">PermissionManager</a> 完成权限设置及检查的相册照片选择</p></li></ul><h3 id="headiconbuildfactory" tabindex="-1">HeadIconBuildFactory <a class="header-anchor" href="#headiconbuildfactory" aria-label="Permalink to &quot;HeadIconBuildFactory&quot;">​</a></h3><p>基于 HeadIconBuilder 的，支持使用缓存的扩展类</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/common/common-photos.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonPhotos = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonPhotos as default
};
