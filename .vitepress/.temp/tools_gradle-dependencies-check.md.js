import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const __pageData = JSON.parse('{"title":"一款检查依赖配置是否冲突的 Gradle 插件","description":"","frontmatter":{},"headers":[],"relativePath":"tools/gradle-dependencies-check.md","filePath":"tools/gradle-dependencies-check.md"}');
const _sfc_main = { name: "tools/gradle-dependencies-check.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="一款检查依赖配置是否冲突的-gradle-插件" tabindex="-1">一款检查依赖配置是否冲突的 Gradle 插件 <a class="header-anchor" href="#一款检查依赖配置是否冲突的-gradle-插件" aria-label="Permalink to &quot;一款检查依赖配置是否冲突的 Gradle 插件&quot;">​</a></h1><h2 id="背景介绍" tabindex="-1">背景介绍 <a class="header-anchor" href="#背景介绍" aria-label="Permalink to &quot;背景介绍&quot;">​</a></h2><p>在平时的开发中，大家经常会遇到因为gradle的构建配置错误引起的各种奇奇怪怪的问题，每次梳理依赖关系都需要很长时间，为了更方便的找出项目中的依赖冲突，专门开发了这个插件。</p><h2 id="使用方法" tabindex="-1">使用方法： <a class="header-anchor" href="#使用方法" aria-label="Permalink to &quot;使用方法：&quot;">​</a></h2><h3 id="在项目中添加插件" tabindex="-1">在项目中添加插件 <a class="header-anchor" href="#在项目中添加插件" aria-label="Permalink to &quot;在项目中添加插件&quot;">​</a></h3><ul><li><p>在项目根目录的build.gradle中添加插件仓库：</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">buildscript {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	repositories {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		maven { url </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;https://repo1.maven.org/maven2&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> }</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	dependencies {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		classpath </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;com.bihe0832:GradleDependenciesCheck:1.0.2&quot;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div></li><li><p>引入插件，并添加插件相关配置</p><p>你可以选择在每个project都添加一份，也可以选择参考demo，在根build.gradle的subprojects中添加</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">subprojects {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">	/************************** 应用插件 Start ***********************/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">	//应用插件</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	apply </span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}">plugin</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">: </span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;com.bihe0832.gradleDependenciesCheck&#39;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">	//配置插件相关配置</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">	GradleDependenciesCheckConfig</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}"> {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">		/**</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">			* 检查结果提示类型:</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">			*  1 以warning形式在命令行提示</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">			*  2 直接编辑报错，并提示错误</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">			*/</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		showResultType </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">=</span><span style="${ssrRenderStyle({ "--shiki-light": "#005CC5", "--shiki-dark": "#79B8FF" })}"> 2</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#6A737D", "--shiki-dark": "#6A737D" })}">	/************************** 应用插件 End ***********************/</span></span>
<span class="line"></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div></li><li><p>将插件添加到其余系统任务中自动执行</p><div class="language-groovy vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">groovy</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">subprojects {</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	afterEvaluate { </span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">Project</span><span style="${ssrRenderStyle({ "--shiki-light": "#E36209", "--shiki-dark": "#FFAB70" })}"> project</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}"> -&gt;</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		project</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">getTasks()</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">getByName(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;clean&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">dependsOn(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;checkGradleDependencies&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">		project</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">getTasks()</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">getByName(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&#39;preBuild&#39;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span><span style="${ssrRenderStyle({ "--shiki-light": "#D73A49", "--shiki-dark": "#F97583" })}">.</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">dependsOn(</span><span style="${ssrRenderStyle({ "--shiki-light": "#032F62", "--shiki-dark": "#9ECBFF" })}">&quot;checkGradleDependencies&quot;</span><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">)</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">	}</span></span>
<span class="line"><span style="${ssrRenderStyle({ "--shiki-light": "#24292E", "--shiki-dark": "#E1E4E8" })}">}</span></span></code></pre></div></li></ul><p>完整的插件使用方式，可以参考项目的事例Sample的根目录的build.gradle</p><h3 id="运行插件" tabindex="-1">运行插件 <a class="header-anchor" href="#运行插件" aria-label="Permalink to &quot;运行插件&quot;">​</a></h3><ul><li><p>在IED右侧的Gradle窗口选择<code>zixie</code>，然后点击<code>checkGradleDependencies</code></p></li><li><p>直接在命令行运行<code>./gradlew checkGradleDependencies</code></p></li><li><p>直接运行已经添加了依赖的系统task</p></li></ul><h3 id="运行效果" tabindex="-1">运行效果 <a class="header-anchor" href="#运行效果" aria-label="Permalink to &quot;运行效果&quot;">​</a></h3><ul><li><p>在命令行运行效果如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; Task :app:listGradleDependencies FAILED</span></span>
<span class="line"><span>listGradleDependencies start ...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>FAILURE: Build failed with an exception.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* What went wrong:</span></span>
<span class="line"><span>Execution failed for task &#39;:app:listGradleDependencies&#39;.</span></span>
<span class="line"><span>&gt; [ERROR] org.jetbrains.kotlin:kotlin-stdlib has different version: </span></span>
<span class="line"><span>	1.3.0 found from: </span></span>
<span class="line"><span>			app:org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.3.0</span></span>
<span class="line"><span>			app:Sample:sdk:unspecified</span></span>
<span class="line"><span>	1.2.71 found from: </span></span>
<span class="line"><span>			app:org.jetbrains.kotlin:kotlin-compiler-embeddable:1.2.71</span></span>
<span class="line"><span>……</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* Try:</span></span>
<span class="line"><span>Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>* Get more help at https://help.gradle.org</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Deprecated Gradle features were used in this build, making it incompatible with Gradle 5.0.</span></span>
<span class="line"><span>Use &#39;--warning-mode all&#39; to show the individual deprecation warnings.</span></span>
<span class="line"><span>See https://docs.gradle.org/4.10/userguide/command_line_interface.html#sec:command_line_warnings</span></span>
<span class="line"><span></span></span>
<span class="line"><span>BUILD FAILED in 1s</span></span>
<span class="line"><span>1 actionable task: 1 executed</span></span>
<span class="line"><span>[ERROR] org.jetbrains.kotlin:kotlin-stdlib has different version: </span></span>
<span class="line"><span>	1.3.0 found from: </span></span>
<span class="line"><span>			app:org.jetbrains.kotlin:kotlin-stdlib-jdk7:1.3.0</span></span>
<span class="line"><span>			app:Sample:sdk:unspecified</span></span>
<span class="line"><span>	1.2.71 found from: </span></span>
<span class="line"><span>			app:org.jetbrains.kotlin:kotlin-compiler-embeddable:1.2.71</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4:39:17 PM: Task execution finished &#39;listGradleDependencies&#39;.</span></span></code></pre></div></li></ul><h2 id="项目相关" tabindex="-1">项目相关： <a class="header-anchor" href="#项目相关" aria-label="Permalink to &quot;项目相关：&quot;">​</a></h2><h3 id="源码地址" tabindex="-1">源码地址 <a class="header-anchor" href="#源码地址" aria-label="Permalink to &quot;源码地址&quot;">​</a></h3><ul><li>项目源码及使用Demo：<a href="https://github.com/bihe0832/Gradle-Dependencies-Check" target="_blank" rel="noreferrer">https://github.com/bihe0832/Gradle-Dependencies-Check</a></li></ul><h3 id="后续规划" tabindex="-1">后续规划 <a class="header-anchor" href="#后续规划" aria-label="Permalink to &quot;后续规划&quot;">​</a></h3><ul><li><p>检查所有依赖的最新版，然后推荐更新</p></li><li><p>推荐把support等相关库都切换到了androidx</p></li><li><p>对于一些需要版本对应的，提示对应。例如：databing compile依赖的版本号与Android Gradle Plugin版本保持一致等</p></li></ul><h2 id="参考及文章" tabindex="-1">参考及文章 <a class="header-anchor" href="#参考及文章" aria-label="Permalink to &quot;参考及文章&quot;">​</a></h2><ul><li><p>Gradle插件开发系列之总纲：<a href="https://blog.bihe0832.com/gradle_plugin_summary.html" target="_blank" rel="noreferrer">https://blog.bihe0832.com/gradle_plugin_summary.html</a></p></li><li><p>开发第一个gradle插件：<a href="https://blog.bihe0832.com/gradle_plugin_new.html" target="_blank" rel="noreferrer">https://blog.bihe0832.com/gradle_plugin_new.html</a></p></li><li><p>gradle插件调试方\`：<a href="https://blog.bihe0832.com/gradle_plugin_debug.html" target="_blank" rel="noreferrer">https://blog.bihe0832.com/gradle_plugin_debug.html</a></p></li><li><p>发布gradle插件到开源库：<a href="https://blog.bihe0832.com/gradle_plugin_publish.html" target="_blank" rel="noreferrer">https://blog.bihe0832.com/gradle_plugin_publish.html</a></p></li><li><p>发布开源代码到jcenter：<a href="https://blog.bihe0832.com/jcenter.html" target="_blank" rel="noreferrer">https://blog.bihe0832.com/jcenter.html</a></p></li></ul></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("tools/gradle-dependencies-check.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const gradleDependenciesCheck = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  __pageData,
  gradleDependenciesCheck as default
};
