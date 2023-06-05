# LibJsBridge

![LibJsBridge](https://img.shields.io/badge/AndroidAppFactory-LibJsBridge-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibJsBridge-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibJsBridge)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-jsbridge)](https://search.maven.org/artifact/com.bihe0832.android/lib-jsbridge)

## 功能简介

JSBridge等基础功能

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-jsbridge:+'
```

## 组件功能


### JSbridge

JSbridge 相关的实现方案，可以点击[JSBridge](./../../../tools/android_jsbridge.md)参考文档了解

- BaseJsBridgeProxy

    从JS调用转为原生接口

- JsBridge

    接原生处理结果，回调JS


- JsResult

    错误码
