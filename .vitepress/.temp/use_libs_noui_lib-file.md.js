import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibFile","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/noui/lib-file.md","filePath":"use/libs/noui/lib-file.md"}');
const _sfc_main = { name: "use/libs/noui/lib-file.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libfile" tabindex="-1">LibFile <a class="header-anchor" href="#libfile" aria-label="Permalink to &quot;LibFile&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibFile-brightgreen" alt="LibFile"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibFile" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibFile-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-file" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-file" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>提供Provider的方式访问文件以及对于文件的一些基本操作，例如获取文件名，扩展名等</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-file:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="fileutils" tabindex="-1">FileUtils <a class="header-anchor" href="#fileutils" aria-label="Permalink to &quot;FileUtils&quot;">​</a></h3><ul><li><p>文件及文件夹操作</p></li><li><p>检查文件是否存在、检查并创建多层级文件夹，检查外部存储卡权限</p></li><li><p>获取文件长度、读取文件内容（支持Gzip、支持编码格式）、使用系统文档查看器打开文件、获取文件MD5，根据路径获取文件名称、扩展名</p></li><li><p>删除文件或文件夹、高速复制文件或文件夹</p></li><li><p>使用手机上的第三方应用查看或者分享指定文件</p></li><li><p>校验文件名是否合规</p></li><li><p>检查文件类型是否为二进制文件</p></li><li><p>Assets 相关操作，包括读取asest文件内容，复制Assets 文件或者整个文件夹到外部存储</p></li><li><p>滑动读取或者写入指定文件的指定位置</p></li></ul><h3 id="zixiefileprovider" tabindex="-1">ZixieFileProvider <a class="header-anchor" href="#zixiefileprovider" aria-label="Permalink to &quot;ZixieFileProvider&quot;">​</a></h3><ul><li><p>封装的文件访问用的Provider</p></li><li><p>获取 FileProvider 对应文件地址、路径、根据文件生成对应的URI</p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/noui/lib-file.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libFile = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libFile as default
};
