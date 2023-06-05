# CommonWebview

![CommonWebview](https://img.shields.io/badge/AndroidAppFactory-CommonWebview-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonWebview-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonWebview)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-webview) ](https://search.maven.org/artifact/com.bihe0832.android/common-webview)

## 功能简介

基于公共框架，进一步封装的通用webview

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-webview:+'
```

## 组件功能

### BaseWebviewFragment && BaseWebviewActivity

- 封装好的通用的 Webview 的Fragment、Activity，支持：

    下拉刷新，请求追加业务参数，错误页面及错误重试，非 Http 协议使用 Intent 唤起，获取网页标题，将终端的前后台切换响应到H5

- 支持Jsbridge，使用方式可以参考 [JSBridge](./../../tools/android_jsbridge.md)

### WebviewLoggerFile

- Webview 相关的日志

### WebViewViewModel

- 配合获取当前WebPage的title

### NativeWebView

- 支持防 webview 远程代码执行漏洞

- 添加基础的HTML支持：

    ```java
    //设置WebView属性，能够执行Javascript脚本
    webSetting.setJavaScriptEnabled(true);
    webSetting.setAllowFileAccess(true);
    webSetting.setSupportMultipleWindows(false);
    webSetting.setPluginState(WebSettings.PluginState.ON_DEMAND);
    webSetting.setUseWideViewPort(true);  //将图片调整到适合webview的大小
    webSetting.setLoadWithOverviewMode(true); // 缩放至屏幕的大小
    //支持HTTP和HTTPS混合模式
    if (Build.VERSION.SDK_INT > Build.VERSION_CODES.LOLLIPOP) {
        //由于X5没有定义对应的常量，因此直接使用实际值，对应官方webkit的WebSettings.MIXED_CONTENT_ALWAYS_ALLOW
        webSetting.setMixedContentMode(0);
    }
    //支持缩放，默认为true。是下面那个的前提。
    webSetting.setSupportZoom(true);
    //设置内置的缩放控件。
    webSetting.setBuiltInZoomControls(true);

    //若上面是false，则该WebView不可缩放，这个不管设置什么都不能缩放。
    webSetting.setLayoutAlgorithm(WebSettings.LayoutAlgorithm.SINGLE_COLUMN); //支持内容重新布局
    webSetting.supportMultipleWindows();  //多窗口
    webSetting.setNeedInitialFocus(true); //当webview调用requestFocus时为webview设置节点
    webSetting.setJavaScriptCanOpenWindowsAutomatically(true); //支持通过JS打开新窗口
    webSetting.setLoadsImagesAutomatically(true);  //支持自动加载图片
    webSetting.setDefaultTextEncodingName("utf-8");//设置编码格式
    ```

- 自定义缓存支持

    ```java
    //设置缓存类型
    webSetting.setCacheMode(WebSettings.LOAD_DEFAULT);
    //设置缓存位置
    String cacheDirPath = this.getContext().getApplicationContext().getFilesDir().getAbsolutePath() + APP_CACAHE_DIRNAME;
    //JYLog.d("cacheDirPath=" + cacheDirPath);
    //设置数据库缓存路径
    webSetting.setDatabasePath(cacheDirPath);
    //设置  Application Caches 缓存目录
    webSetting.setAppCachePath(cacheDirPath);
    //开启 Application Caches 功能
    webSetting.setAppCacheEnabled(true);
    // 开启 DOM storage API 功能
    webSetting.setDomStorageEnabled(true);
    //开启 database storage API 功能
    webSetting.setDatabaseEnabled(true);
    webSetting.setAppCacheMaxSize(Long.MAX_VALUE);
    ```

### NativeWebviewFragment

- 封装好的通用的 [NativeWebView](./common-webview.md) 的Fragment，支持：

    下拉刷新，请求追加业务参数，错误页面及错误重试，非 Http 协议使用 Intent 唤起，获取网页标题，将终端的前后台切换响应到H5

- 支持Jsbridge，使用方式可以参考 [JSBridge](./../../tools/android_jsbridge.md)

### NativeJsBridgeProxy && NativeJsBridge && NativeCookieManager

- 基于 LibJsBridge 实现的相关功能

### CommonWebviewFragment

- 对于 BaseWebviewFragment 的 进一步封装，打开时会自动在：URL参数、cookie、UserAgent，添加响应的字段，如下图：

 <img src="./common-webview/webview-params.png" width="80%"/>


### WebPageActivity

通用的带标题栏的 Webview Activity，标题栏自动获取网页标题，如下图，使用 [CommonWebviewFragment](./common-webview.md#commonwebviewfragment) 和   [CommonActivity](./framework/framework-ui.md#通用主ui)实现：

<img src="./common-webview/webview-pages.png" width="30%"/>

## 测试事例：

AAF 的测试Demo 提供了几个Webview的调试页面，具体内容可以点击链接 [https://github.com/bihe0832/AndroidAppFactory/tree/master/BaseTest/src/main/java/com/bihe0832/android/base/test/webview/TestWebviewActivity.kt](https://github.com/bihe0832/AndroidAppFactory/tree/master/BaseTest/src/main/java/com/bihe0832/android/base/test/webview/TestWebviewActivity.kt) 查看对应源码


