import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibTheme","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/ui/lib-theme.md","filePath":"use/libs/ui/lib-theme.md"}');
const _sfc_main = { name: "use/libs/ui/lib-theme.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libtheme" tabindex="-1">LibTheme <a class="header-anchor" href="#libtheme" aria-label="Permalink to &quot;LibTheme&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibTheme-brightgreen" alt="LibTheme"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibTheme" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibTheme-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-theme" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-theme" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>AAFException 等AAF的通用定义</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-theme:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><p>目前支持的属性包括：</p><ul><li>background</li><li>src</li><li>textColor</li><li>bgtv_backgroundColor</li><li>bgtv_strokeColor</li><li>tint</li><li>string</li><li>drawableLeft、drawableTop、drawableRight、drawableBottom</li></ul><h3 id="themeresourcesmanager" tabindex="-1">ThemeResourcesManager <a class="header-anchor" href="#themeresourcesmanager" aria-label="Permalink to &quot;ThemeResourcesManager&quot;">​</a></h3><ul><li>获取当前主题的颜色、图标、背景等信息</li></ul><h3 id="thememanager" tabindex="-1">ThemeManager <a class="header-anchor" href="#thememanager" aria-label="Permalink to &quot;ThemeManager&quot;">​</a></h3><ul><li>主题获取、安装、切换，可通过 ThemeChangedLiveData 通知</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/ui/lib-theme.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libTheme = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libTheme as default
};
