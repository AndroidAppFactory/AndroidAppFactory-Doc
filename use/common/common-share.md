# CommonShare

![CommonShare](https://img.shields.io/badge/AndroidAppFactory-CommonShare-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonShare-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonShare)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-share) ](https://search.maven.org/artifact/com.bihe0832.android/common-share)

## 功能简介

基于公共框架，增加的分享通用页面，及APP分享模块

## 组件使用

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-share:+'
```

## 组件功能


### ShareBaseActivity

基本的分享界面，支持图片或者结构化消息，仅实现UI，逻辑没有实现

### ShareQRCodeActivity && ShareAPPActivity

通过二维码分享链接等内容及应用分享，根据配置，可以分享用户的下载方式的文本或者二维码其余用户，二维码事例如下：

<img src="./common-share/share_demo.jpg" width="90%"/>



