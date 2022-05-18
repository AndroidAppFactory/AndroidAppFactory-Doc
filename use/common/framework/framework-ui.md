# 公共框架UI模块

![Framework](https://img.shields.io/badge/AndroidAppFactory-Framework-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-Framework-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/Framework)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/framework) ](https://search.maven.org/artifact/com.bihe0832.android/framework)

## 功能简介

公共框架的UI相关模块，主要定义了各种通用UI

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:framework:+'
```
## 组件功能

### 通用基础UI

- BaseActivity

    支持沉浸式效果、onResume完成权限检查、初始化通用标题栏、子Fragment自动设置userVisibleHint、onActivityResult自动回调

    返回上一级根据堆栈跳转到主界面，并且在主界面回退是提示是否退出应用

- BaseApplication

    根据进程名完成对应的初始化以及退出时的资源销毁

    调试模式弹出调试模式Toast

    修复 Android P 以后，跨进程webview 共享存储问题

- BaseFragment

    userVisibleHint完成权限检查、子Fragment自动设置userVisibleHint、onActivityResult自动回调

    定义通用的获取布局、解析intent、初始化View、初始化数据等接口

### 通用主UI

- CommonActivity

    一款通用的包含一个全屏Fragment的空页面，使用事例包括：反馈页面、WebView 等

- CommonMainFragment

    一款支持底部Tab的 通用Fragment的页面
