import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"LibAdapter","description":"","frontmatter":{},"headers":[],"relativePath":"use/libs/ui/lib-adapter.md","filePath":"use/libs/ui/lib-adapter.md"}');
const _sfc_main = { name: "use/libs/ui/lib-adapter.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="libadapter" tabindex="-1">LibAdapter <a class="header-anchor" href="#libadapter" aria-label="Permalink to &quot;LibAdapter&quot;">​</a></h1><p><img src="https://img.shields.io/badge/AndroidAppFactory-LibAdapter-brightgreen" alt="LibAdapter"><a href="https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAdapter" target="_blank" rel="noreferrer"><img src="https://img.shields.io/badge/Github-LibAdapter-brightgreen?style=social" alt="Github"></a><a href="https://search.maven.org/artifact/com.bihe0832.android/lib-adapter" target="_blank" rel="noreferrer"><img src="https://img.shields.io/maven-central/v/com.bihe0832.android/lib-adapter" alt="Maven Central"></a></p><h2 id="功能简介" tabindex="-1">功能简介 <a class="header-anchor" href="#功能简介" aria-label="Permalink to &quot;功能简介&quot;">​</a></h2><p>一个更丰富和强大的RecyclerAdapter框架，可以支持：</p><ul><li><p>支持一个RecycleView支持多种Item样式</p></li><li><p>添加头部、尾部、空页面</p></li><li><p>自动加载更多等</p></li></ul><p>对应GitHub为：<a href="https://github.com/CymChad/BaseRecyclerViewAdapterHelper" target="_blank" rel="noreferrer">https://github.com/CymChad/BaseRecyclerViewAdapterHelper</a></p><p>目前已经进行了二次封装，使用方法可以参考<code>TestCardActivity</code>。<strong>建议后续RecycleView都使用该Adapter</strong>。</p><h2 id="组件信息" tabindex="-1">组件信息 <a class="header-anchor" href="#组件信息" aria-label="Permalink to &quot;组件信息&quot;">​</a></h2><h4 id="引用仓库" tabindex="-1">引用仓库 <a class="header-anchor" href="#引用仓库" aria-label="Permalink to &quot;引用仓库&quot;">​</a></h4><p>引用仓库可以参考 <a href="./../start.html">组件使用</a> 中添加依赖的部分</p><h4 id="组件使用" tabindex="-1">组件使用 <a class="header-anchor" href="#组件使用" aria-label="Permalink to &quot;组件使用&quot;">​</a></h4><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">implementation </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.android:lib-adapter:+&#39;</span></span></code></pre></div><h2 id="组件功能" tabindex="-1">组件功能 <a class="header-anchor" href="#组件功能" aria-label="Permalink to &quot;组件功能&quot;">​</a></h2><h3 id="cardbaseadapter" tabindex="-1">CardBaseAdapter <a class="header-anchor" href="#cardbaseadapter" aria-label="Permalink to &quot;CardBaseAdapter&quot;">​</a></h3><ul><li>通用的RecycleView Adapter的基类</li></ul><h3 id="cardbaseholder" tabindex="-1">CardBaseHolder <a class="header-anchor" href="#cardbaseholder" aria-label="Permalink to &quot;CardBaseHolder&quot;">​</a></h3><ul><li>所有卡片的Holder都继承自该类并实现对应的view查找和内容填充</li></ul><h3 id="cardbasemodule" tabindex="-1">CardBaseModule <a class="header-anchor" href="#cardbasemodule" aria-label="Permalink to &quot;CardBaseModule&quot;">​</a></h3><ul><li>所有卡片对应的数据都继承自该类</li></ul><h2 id="特殊用法-示例仅供参考" tabindex="-1">特殊用法（示例仅供参考） <a class="header-anchor" href="#特殊用法-示例仅供参考" aria-label="Permalink to &quot;特殊用法（示例仅供参考）&quot;">​</a></h2><ul><li>根据位置，获取对应的ViewHolder:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mRecyclerView.findViewHolderForAdapterPosition(newposition)?.let {viewHolder -&gt;</span></span>
<span class="line"><span>	ZixieContext.showDebug(&quot;Test onActive:&quot; + viewHolder.javaClass.name)</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>根据位置，修改数据并且直接刷新UI:</li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>mRecyclerView.findViewHolderForAdapterPosition(newposition)?.let {viewHolder -&gt;</span></span>
<span class="line"><span>	(mAdapter.data[newposition] as CardBaseModule ).apply{</span></span>
<span class="line"><span></span></span>
<span class="line"><span>	}.let{</span></span>
<span class="line"><span>		(viewHolder as CardBaseHolder).initData(mAdapter.data[newposition])</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>	}</span></span></code></pre></div><ul><li>根据特征值获取位置后，修改数据并且直接刷新UI，示例来自：<a href="https://github.com/bihe0832/AndroidAppFactory/blob/master/CommonAbout/src/main/java/com/bihe0832/android/common/about/AboutFragment.kt" target="_blank" rel="noreferrer">https://github.com/bihe0832/AndroidAppFactory/blob/master/CommonAbout/src/main/java/com/bihe0832/android/common/about/AboutFragment.kt</a></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>var position: Int = -1</span></span>
<span class="line"><span>val title = context?.resources?.getString(R.string.settings_update_title)</span></span>
<span class="line"><span>for (i in mAdapter.data.indices) {</span></span>
<span class="line"><span>	if (mAdapter.data[i] is SettingsData &amp;&amp; title == (mAdapter.data[i] as? SettingsData)?.mItemText) {</span></span>
<span class="line"><span>		position = i</span></span>
<span class="line"><span>		break</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>if (position &gt;= 0) {</span></span>
<span class="line"><span>	(mAdapter.data[position] as? SettingsData)?.apply {</span></span>
<span class="line"><span>		if (null != cloud &amp;&amp; cloud.updateType &gt; UpdateDataFromCloud.UPDATE_TYPE_HAS_NEW_JUMP) {</span></span>
<span class="line"><span>			mTipsText = context?.resources?.getString(R.string.settings_update_tips)</span></span>
<span class="line"><span>					?: &quot;&quot;</span></span>
<span class="line"><span>			mItemIsNew = true</span></span>
<span class="line"><span>		} else {</span></span>
<span class="line"><span>			mTipsText = &quot;&quot;</span></span>
<span class="line"><span>			mItemIsNew = false</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}?.let { newData -&gt;</span></span>
<span class="line"><span>		mRecyclerView?.findViewHolderForAdapterPosition(position).let { viewHolder -&gt;</span></span>
<span class="line"><span>			(viewHolder as? CardBaseHolder)?.initData(newData)</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("use/libs/ui/lib-adapter.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const libAdapter = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  libAdapter as default
};
