# CommonTBSWebview

![CommonTBSWebview](https://img.shields.io/badge/AndroidAppFactory-CommonTBSWebview-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonTBSWebview-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonTBSWebview)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-webview-tbs) ](https://search.maven.org/artifact/com.bihe0832.android/common-webview-tbs)

## 功能简介

基于公共框架，进一步封装的X5 内核 通用webview，对于 Webview 相关的内容，可以查看 [CommonTBS](./common-tbs.md)

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-webview-tbs:+'
```

## 组件功能

### TBSWebviewFragment

- 封装好的通用的 [Webview](./common-webview.md) 的Fragment，支持：

    下拉刷新，请求追加业务参数，错误页面及错误重试，非 Http 协议使用 Intent 唤起，获取网页标题，将终端的前后台切换响应到H5

- 支持Jsbridge，使用方式可以参考 [JSBridge](./../../tools/android_jsbridge.md)

### TBSJsBridgeProxy && TBSJsBridge && TBSCookieManager

- 基于 LibJsBridge 实现的相关功能

### CommonTBSWebviewFragment

- 对于 TBSWebviewFragment 的 进一步封装，打开时会自动在：URL参数、cookie、UserAgent，添加响应的字段，如下图：

 <img src="./common-webview-tbs/webview-params.png" width="80%"/>


### WebPageActivity

通用的带标题栏的 Webview Activity，标题栏自动获取网页标题，如下图，使用 [CommonTBSWebviewFragment](./common-webview-tbs.md#CommonTBSWebviewfragment) 和   [CommonActivity](./framework/framework-ui.md#通用主ui)实现：

<img src="./common-webview-tbs/webview-pages.png" width="30%"/>

## 测试事例：

AAF 的测试Demo 提供了几个Webview的调试页面，具体内容可以点击链接 [https://github.com/bihe0832/AndroidAppFactory/tree/master/BaseTest/src/main/java/com/bihe0832/android/base/test/webview/TestWebviewActivity.kt](https://github.com/bihe0832/AndroidAppFactory/tree/master/BaseTest/src/main/java/com/bihe0832/android/base/test/webview/TestWebviewActivity.kt) 查看对应源码


