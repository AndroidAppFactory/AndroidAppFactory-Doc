![LibThread](https://img.shields.io/badge/AndroidAppFactory-LibThread-brightgreen)

## 功能简介

一些系统接口，由于 Android 版本的原因不在可以直接使用，直接引入相关源码

## 组件信息

### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

### 组件使用

    implementation 'com.bihe0832.android:lib-thread:+'

### 最新版本

[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-thread/images/download.svg) ](https://bintray.com/bihe0832/android/lib-thread/_latestVersion)

### 组件源码

[https://github.com/bihe0832/AndroidAppFactory/tree/master/LibThread](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibThread)

## 组件功能

### ThreadManager

- 提供了快速在新线程（线程池）、主线程立刻或者延时执行的方法

- 提供了不同优先级的HadlerThread，对外暴露Looper
