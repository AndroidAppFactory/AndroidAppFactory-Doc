[ ![Github](https://img.shields.io/badge/bihe0832-AndroidAppFactory-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory)
[ ![Github](https://img.shields.io/github/last-commit/bihe0832/AndroidAppFactory) ](https://github.com/bihe0832/AndroidAppFactory)
[ ![Github](https://img.shields.io/github/stars/bihe0832/AndroidAppFactory?style=social) ](https://github.com/bihe0832/AndroidAppFactory)
[ ![Github](https://img.shields.io/bitbucket/issues/bihe0832/AndroidAppFactory) ](https://github.com/bihe0832/AndroidAppFactory)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-wrapper) ](https://search.maven.org/artifact/com.bihe0832.android/lib-wrapper)


# 写在前面

做酱油的时候发现做开发那么久竟然没有一整套顺手的开发方案，要从头开始一个一个搭建（相当于之前做的就没什么沉淀），因此开始逐渐整理一整套相对全面并且顺手的开发方案。随着这几年逐渐完善，现在基本上具备雏形了，因此逐渐总结一下。

AAF 是基于组件化方案，逐渐积累整理的一套完整的**组件化开发，多维度复用**的 Android 终端开发方案。

在新方案的设计和优化过程中，我们的最终目标是**方案使用一套代码支持所有项目并对开发友好**。具体表现为：**统一技术栈**，**相同问题**彻底研究一次，然后提供**统一解决方案**，后续可以直接放心使用。最终做到一个项目的技术方案可以**高效便捷复用**到另一个项目，或者可以快速在框架基础上开发出一个独立全新的应用，开发过程中基本聚焦在新业务的逻辑，而不是基础功能。

随着 AI 编码能力的成熟，AAF 已经进一步演进为「**框架 + AI 工具链 + UI 自动化**」的完整体系：在四层组件化框架之上，沉淀了 `aaf` CLI + 9 个 Skill + 3 个 Agent 的 AI 工具链，以及 `replay` 四端 UI 自动化能力。

关于整个方案的详细介绍，可以参考文章：[安卓开发那些事总纲 \| 子勰的博客](https://blog.bihe0832.com/android-dev-summary.html)

# 框架介绍

这是AAF的一个总体架构：

<img src="./aaf_architecture.png" />

整个AAF框架共有四层：

- **基础组件**：基础组件 `Router*` 是路由相关的基础组件，`Lib*` 是自己沉淀或者统一对比以后选择的第三方技术栈，**与业务无关，可通用**。

- **公共组件**：基础框架 `Framework` 负责通用资源、公共声明、页面路由以及对于底层第三方库的二次封装，所有业务通用的基础通用功能。`Common*` 则是聚焦一个具体的业务无关的功能，例如反馈、内置浏览器等，这部分功能**也与业务无关，可通用**。

- **业务组件**：基础框架 `Application` 包含与业务相关的一些公共资源定义，基础功能封装等。`Base*` 则是聚焦一个具体的业务功能，例如页面卡片、广告等。

- **应用组件**：应用组件是可以独立运行的最小单元，而且他们基本只是一个Android Application 的空壳加一些配置文件，所有的业务逻辑都在业务组件层实现。其中里面比较特别的是APPTest，他既是底层业务组件开发中的临时入口，同时也是一些基础功能 和 所有 Pub的测试入口。

对于整个框架的更多内容，可以参考 [AAF相关文档](./summary/links.md) 里面列出来的文章。

对于基于框架开发的应用，可以参考 [应用事例](./summary/samples.md) 里面列举的具体应用案例。

# AI 工具链与自动化

AAF 已经从单纯的组件化框架，演进为「**框架 + AI 工具链 + UI 自动化**」的完整闭环：

| 层次 | 内容 | 解决什么 |
|------|------|---------|
| 框架层 | 四层组件化 Android 框架 | 业务耦合 / 编译效率 / 代码复用 |
| 工具链层 | `aaf` CLI + 9 个 Skill + 3 个 Agent | 文档同步、版本升级、发布检查、示例升级 |
| 自动化层 | `replay` 四端 UI 自动化 | UI 录制回放与回归验证 |

核心设计理念是**确定性逻辑下沉**：模块信息提取、版本查找、巡检等确定性逻辑全部由 `aaf` CLI 承载，LLM 只负责语义理解和文档撰写，避免 LLM 幻觉（如版本号、模块映射）；文档定位是「**给 AI 编码时参考的 API 能力索引**」，而非给人读的手册。

## aaf Skill 体系

基于 ZixieKit 沉淀了 9 个 AAF Skill，按职能分为五类：

| 分类 | Skill | 职责 |
|------|-------|------|
| 项目定位 | `aaf-project-finder` | 通过 `AAF_HOME` 定位项目，模块目录名 ↔ artifactId 映射 |
| 文档管理 | `aaf-doc-management` | 文档生成 / 同步 / 更新入口 |
| | `aaf-doc-generator` | 分析源码，按 AI-facing 模板生成 API 能力索引 |
| 版本管理 | `aaf-version-reader` | 读取最新 SDK 配置与各模块真实版本 |
| | `aaf-version-upgrade` | 识别项目 AAF 模块最新版本，生成升级报告并应用 |
| 发布检查 | `aaf-release-check` | 发布前检查（版本号 / 模块完整性 / 依赖 / 编译） |
| 示例升级 | `aaf-sample-apply` | 升级 Template-AAF 到最新框架版本 |
| | `aaf-sample-upgrade` | 编排升级三个 Template 项目并编译验证 |
| 开发辅助 | `aaf-demo` | Demo 开发助手（支持自动编译安装启动） |

## Agent 编排

文档同步采用「生成 → 校验 → 修正」三 Agent 流水线：

- `aaf-doc-orchestrator`（主 Agent）：获取变更模块列表，逐模块编排 A→B，通知结果；
- `aaf-doc-sync`（子 Agent）：生成文档并创建 MR；
- `aaf-doc-fixer`（子 Agent）：对比文档与源码，修正不一致（只修文档不动源码）。

两个子 Agent 环境无关（只接收 `module + aaf_path + doc_path`），可被任意编排层调用。

# 框架使用

这个系列的文档重点介绍 AAF 框架的使用，包括：

- 组件使用：如何在自己开发的项目中直接使用 AAF 提供的基础库

- 框架使用：如何直接基于 AAF 开发新的应用

对于「组件使用」没有门槛，就是常见的 maven 第三方库，可以直接引入并使用，文档中这部分内容主要介绍了当前包含的基础组件及其对应的功能。

**对于「框架使用」和「框架开发」，熟悉、理解和使用有一定门槛，建议先仔细阅读 [安卓开发那些事总纲](https://blog.bihe0832.com/android-dev-summary.html) 里面关于「组件化框架介绍」的内容。**
