import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"CommonMessage","description":"","frontmatter":{},"headers":[],"relativePath":"use/common/common-message.md","filePath":"use/common/common-message.md"}');
const _sfc_main = { name: "use/common/common-message.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="commonmessage" tabindex="-1">CommonMessage <a class="header-anchor" href="#commonmessage" aria-label="Permalink to &quot;CommonMessage&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-CommonMessage-brightgreen" alt="CommonMessage"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonMessage" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-CommonMessage-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/common-message" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/common-message" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>消息公告模块，基于LibDialog，目前共有四种类型，如下图，依次为文本消息、图片消息、Web全屏消息、应用下载消息。目前仅提供数据通道，暂不提供消息中心的UI样式。使用示例可以参考：DebugMessageFragment</p><h4 id="消息特性" tabindex="-1">消息特性 <a class="header-anchor" href="#消息特性" aria-label="Permalink to &quot;消息特性&quot;">​</a></h4><p>对于所有的消息我们支持以下特性：</p><ol><li>消息置顶</li><li>对于文本和图片消息，支持跳转（可以通过shame跳转到APP内指定页面）</li><li>在通知栏同步通知，且点击可跳转（配置了跳转的shame的跳转到对应schema，否则跳转首页）</li><li>消息过期时间设置（当为-1，永不过期）</li><li>支持拍脸公告（可以设定次数）</li><li>记录展示时间、是否删除、是否已读等</li></ol><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:common-message:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="messageinfoitem" tabindex="-1">MessageInfoItem <a class="header-anchor" href="#messageinfoitem" aria-label="Permalink to &quot;MessageInfoItem&quot;">​</a></h3><ul><li>消息的数据结构</li></ul><h3 id="messagemanager" tabindex="-1">MessageManager <a class="header-anchor" href="#messagemanager" aria-label="Permalink to &quot;MessageManager&quot;">​</a></h3><p>消息通知的管理类，需要提前初始化，提供消息获取，顺序弹出，未读数目获取等</p></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/common/common-message.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const commonMessage = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  commonMessage as default
};
