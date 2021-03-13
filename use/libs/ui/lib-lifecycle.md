# LibLifecycle

![LibLifecycle](https://img.shields.io/badge/AndroidAppFactory-LibLifecycle-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibLifecycle-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibLifecycle)
[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-lifecycle/images/download.svg) ](https://bintray.com/bihe0832/android/lib-lifecycle/_latestVersion)

## 功能简介

Android 应用生命周期相关的接口，包括应用前后台判断，启动次数，最后使用版本记录等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-lifecycle:+'
```

## 组件功能

### LifecycleHelper

- 获取应用相关的基本信息，例如：应用安装时间、当前版本安装时间、上次启动时间、最后一次启动版本、应用使用天数、使用次数、当前版本使用次数、

### ApplicationObserver

- 获取生命周期相关的信息，例如：当前应用是否前后台、上次切后台时间、上次回到前台时间、本次启动时间

### ActivityObserver

- 获取UI 相关的基本信息，当前Activity，已启动ActivityList