# CommonTBS

![CommonTBS](https://img.shields.io/badge/AndroidAppFactory-CommonTBS-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonTBS-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonTBS)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-tbs)](https://search.maven.org/artifact/com.bihe0832.android/common-tbs)

## 功能简介

基于腾讯X5内核的封装的内置浏览器，支持JSBridge等基础功能

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-tbs:+'
```

## 组件功能

### WebViewHelper

- Webview 及 X5 内核的初始化

### TBSWebView

- 基于X5 定制的Webview

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

- X5 扩展支持

    ```java
    Bundle data = new Bundle();
    // true表示标准全屏，竖屏Web播放横屏视频不转为横屏，false表示X5全屏，此时竖屏Web播放横屏视频会转为横屏；不设置默认false，
    data.putBoolean("standardFullScreen", false);
    // false：关闭小窗；true：开启小窗；不设置默认true，
    data.putBoolean("supportLiteWnd", false);
    // 1：以页面内开始播放，2：以全屏开始播放；不设置默认：1
    data.putInt("DefaultVideoScreen", 2);
    getX5WebViewExtension().invokeMiscMethod("setVideoParams", data);
    //设置WebView是否通过手势触发播放媒体，默认是true，需要手势触发。
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN_MR1) {
        //设置WebView是否通过手势触发播放媒体，默认是true，需要手势触发。
        getSettings().setMediaPlaybackRequiresUserGesture(true);
    }
    //接口禁止(直接或反射)调用，避免视频画面无法显示
    setDrawingCacheEnabled(true);
    ```

