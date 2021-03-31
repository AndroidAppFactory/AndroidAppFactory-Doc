# Framework

![Framework](https://img.shields.io/badge/AndroidAppFactory-Framework-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-Framework-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/Framework)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/framework) ](https://search.maven.org/artifact/com.bihe0832.android/framework)

## 功能简介

通用应用开发的公共框架，包含常量定义、调试模式、路由管理、通用页面，结合场景的通用弹框，基础资源以及对于所有基础组件的必要初始化等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:framework:+'
```

## 组件功能

### 公共框架UI无关模块

- 公共框架的非UI的核心模块，主要定义了全局的应用上下文、应用调试、对于底层基础库的二次封装等。点击 [公共框架UI无关模块](./framework/framework-noui.md) 查看详细信息

### 公共框架UI模块

- 公共框架的UI相关模块，主要定义了各种通用UI。点击 [公共框架UI模块](./framework/framework-ui.md) 查看详细信息

### 应用更新

- 基于公共框架的应用更新模块，主要定义了更新相关的数据结构，以及各种更新类型下的处理方式。点击 [应用更新](./framework/framework-update.md) 查看详细信息
