import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibAPK","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/noui/lib-utils-apk.md","filePath":"use/libs/noui/lib-utils-apk.md"}');
const _sfc_main = { name: "use/libs/noui/lib-utils-apk.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libapk" tabindex="-1">LibAPK <a class="header-anchor" href="#libapk" aria-label="Permalink to &quot;LibAPK&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibAPK-brightgreen" alt="LibAPK"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAPK" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibAPK-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-utils-apk" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-utils-apk" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>检查应用安装，获取应用数据，打开APP等发送各类Intent</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-utils-apk:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="apkutils" tabindex="-1">APKUtils <a class="header-anchor" href="#apkutils" aria-label="Permalink to &quot;APKUtils&quot;">​</a></h3><ul><li><p>获取APP版本号、版本名、应用名称、应用Icon</p></li><li><p>获取当前手机已安装应用列表、获取应用安装信息</p></li><li><p>基于包名、包名 + 闪屏、Intent 拉起应用，未安装，使用 <a href="./../ui/lib-toast.html#toastutils">LibToast</a> 提供的功能 提示</p></li><li><p>检查应用进程是否被杀，Android Q 以后不可用</p></li><li><p>获取应用签名文件的MD5、指纹</p></li><li><p>通用的版本对比接口，支持字符版本名的对比</p></li></ul><h3 id="intentutils" tabindex="-1">IntentUtils <a class="header-anchor" href="#intentutils" aria-label="Permalink to &quot;IntentUtils&quot;">​</a></h3><ul><li><p>根据第三方 Schema 拉起应用</p></li><li><p>使用系统浏览器打开网址</p></li><li><p>启动一个Intent（新建Task方式）</p></li><li><p>打开指定的应用设置（兼容MIUI、魅族、华为）、如果应用没有，打开手机设置</p></li><li><p>分享文本信息</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/noui/lib-utils-apk.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libUtilsApk = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libUtilsApk as default
};
