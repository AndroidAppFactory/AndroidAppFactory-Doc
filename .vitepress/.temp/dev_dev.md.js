import { ssrRenderAttrs } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"dev/dev.md","filePath":"dev/dev.md"}');
const _sfc_main = { name: "dev/dev.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="文档整理中" tabindex="-1">文档整理中 <a class="header-anchor" href="#文档整理中" aria-label="Permalink to &quot;文档整理中&quot;">​</a></h2><ol><li><p>完成本地开发</p></li><li><p>在远程仓库添加新的组件：</p><ul><li><p>地址：<a href="https://bintray.com/bihe0832/android/" target="_blank" rel="noreferrer">https://bintray.com/bihe0832/android/</a></p></li><li><p>版本库：<a href="https://github.com/bihe0832/AndroidAppFactory.git" target="_blank" rel="noreferrer">https://github.com/bihe0832/AndroidAppFactory.git</a></p></li></ul></li><li><p>执行命令<code>./gradlew showPublishCommand</code> 生成组件发布命令。例如：</p><pre><code> ➜  AndroidAppFactory git:(master) ✗ ./gradlew showPublishCommand
 Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=1g; support was removed in 8.0
 
 ……	
 
 当前开发的组件开发修改版本号后，直接在根目录运行下面的命令即可发布所有依赖到最新版本
 
 运行后升级版本的组件有：
 
         [LibWrapper]
 
 发布使用的命令：
 
 
 echo &quot;
 LibWrapper
 &quot;  | xargs -I {} /bin/bash ./build_upload.sh {} 2.0.18
 
 
 ========================================
 
 ……
</code></pre></li><li><p>在命令行输入生成的命令，完成组件发布</p></li></ol><h2 id="组件更新" tabindex="-1">组件更新 <a class="header-anchor" href="#组件更新" aria-label="Permalink to &quot;组件更新&quot;">​</a></h2><ol><li><p>完成本地开发</p></li><li><p>执行命令<code>./gradlew showPublishCommand</code> 生成组件发布命令。例如：</p><pre><code> ➜  AndroidAppFactory git:(master) ✗ ./gradlew showPublishCommand
 Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=1g; support was removed in 8.0
 
 ……	
 
 当前开发的组件开发修改版本号后，直接在根目录运行下面的命令即可发布所有依赖到最新版本
 
 运行后升级版本的组件有：
 
         [LibWrapper]
 
 发布使用的命令：
 
 
 echo &quot;
 LibWrapper
 &quot;  | xargs -I {} /bin/bash ./build_upload.sh {} 2.0.18
 
 
 ========================================
 
 ……
</code></pre></li><li><p>在命令行输入生成的命令，完成组件发布</p></li></ol></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("dev/dev.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const dev = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  dev as default
};
