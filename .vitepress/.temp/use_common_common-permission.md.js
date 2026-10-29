import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CommonPermission","description":"","frontmatter":{},"headers":[],"relativePath":"use/common/common-permission.md","filePath":"use/common/common-permission.md"}');
const _sfc_main = { name: "use/common/common-permission.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="commonpermission" tabindex="-1">CommonPermission <a class="header-anchor" href="#commonpermission" aria-label="Permalink to &quot;CommonPermission&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-CommonPermission-brightgreen" alt="CommonPermission"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonPermission" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-CommonPermission-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/common-permission" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/common-permission" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>关于权限相关功能的二次封装</p><h2 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用-1" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用-1" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:common-permission:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="aafpermissionmanager" tabindex="-1">AAFPermissionManager <a class="header-anchor" href="#aafpermissionmanager" aria-label="Permalink to &quot;AAFPermissionManager&quot;">​</a></h3><ul><li>权限获取、检查、权限相关的文案、图标配置、发起权限申请</li></ul><h3 id="permissionfragment-permissionitem" tabindex="-1">PermissionFragment &amp;&amp; PermissionItem <a class="header-anchor" href="#permissionfragment-permissionitem" aria-label="Permalink to &quot;PermissionFragment &amp;&amp; PermissionItem&quot;">​</a></h3><ul><li>设置中关于使用权限的列表展示</li></ul><h3 id="permissionsactivitywithspecial" tabindex="-1">PermissionsActivityWithSpecial <a class="header-anchor" href="#permissionsactivitywithspecial" aria-label="Permalink to &quot;PermissionsActivityWithSpecial&quot;">​</a></h3><ul><li>一些特殊权限的申请UI，目前仅包含位置权限</li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/common/common-permission.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonPermission = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonPermission as default
};
