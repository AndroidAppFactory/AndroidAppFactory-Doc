
## 基础组件集


![LibWrapper](https://img.shields.io/badge/AndroidAppFactory-LibWrapper-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-wrapper/images/download.svg) ](https://bintray.com/bihe0832/android/lib-wrapper/_latestVersion)

- 简介：

    所有基础库的合集，包含了权限声明等，建议平时开发直接使用LibWrapper的最新版
    
- 使用：

		implementation 'com.bihe0832.android:lib-wrapper:+'
    
![LibUIUtils](https://img.shields.io/badge/AndroidAppFactory-LibUIUtils-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-uiutils/images/download.svg) ](https://bintray.com/bihe0832/android/lib-uiutils/_latestVersion)

- 简介：

    所有UI相关的基础库的合集
    
- 使用：

		implementation 'com.bihe0832.android:lib-uiutils:+'

![LibUtils](https://img.shields.io/badge/AndroidAppFactory-LibUtils-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-utils/images/download.svg) ](https://bintray.com/bihe0832/android/lib-utils/_latestVersion)

- 简介：

    所有非UI相关的基础库的合集，使用时如果用到特殊库，需要添加对应的权限声明
    
- 使用：

		implementation 'com.bihe0832.android:lib-utils:+'

## 组件列表

![RouterAnnotation](https://img.shields.io/badge/AndroidAppFactory-RouterAnnotation-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-router-annotation/images/download.svg) ](https://bintray.com/bihe0832/android/lib-router-annotation/_latestVersion)

- 简介：

	通用路由的annotation工具组件，用于自动生成路由表
	
- 使用：

		implementation 'com.bihe0832.android:lib-router-annotation:+'
	
![RouterCompiler](https://img.shields.io/badge/AndroidAppFactory-RouterCompiler-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-router-compiler/images/download.svg) ](https://bintray.com/bihe0832/android/lib-router-compiler/_latestVersion)

- 简介：

	编译时生成路由表的注解处理器，用于自动生成路由表
	
- 使用：

		kapt "com.bihe0832.android:lib-router-compiler:+"
![Router](https://img.shields.io/badge/AndroidAppFactory-Router-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-router/images/download.svg) ](https://bintray.com/bihe0832/android/lib-router/_latestVersion)

- 简介：

	通用路由的核心库，用于路由寻址、管理等
	
- 使用：

		implementation 'com.bihe0832.android:lib-router:+'

[![LibAndroid](https://img.shields.io/badge/AndroidAppFactory-LibAndroid-brightgreen)](#!doc/detail/lib-android.md)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-android/images/download.svg) ](https://bintray.com/bihe0832/android/lib-android/_latestVersion)

- 简介：

	一些系统接口，由于 Android 版本的原因不在可以直接使用，直接引入相关源码
	
- 使用：

		implementation 'com.bihe0832.android:lib-android:+'


[![LibLog](https://img.shields.io/badge/AndroidAppFactory-LibLog-brightgreen)](#!doc/detail/lib-log.md)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-log/images/download.svg) ](https://bintray.com/bihe0832/android/lib-log/_latestVersion)

- 简介：

	简单封装的日志工具类，支持注册自定义日志实现

- 使用：

		implementation 'com.bihe0832.android:lib-log:+'

[![LibOS](https://img.shields.io/badge/AndroidAppFactory-LibOS-brightgreen)](#!doc/detail/lib-android-os.md)[![Download](https://api.bintray.com/packages/bihe0832/android/lib-android-os/images/download.svg) ](https://bintray.com/bihe0832/android/lib-android-os/_latestVersion)

- 简介：

	对于系统级别的常用功能的封装，例如获取进程名，当前系统版本；展示隐藏软键盘，屏幕宽高获取，dp，sp，px 等各类数据单位之间转换

- 使用：

		implementation 'com.bihe0832.android:lib-android-os:+'


[![LibCommonUtils](https://img.shields.io/badge/AndroidAppFactory-LibCommonUtils-brightgreen)](#!doc/detail/lib-utils-common.md)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-utils-common/images/download.svg) ](https://bintray.com/bihe0832/android/lib-utils-common/_latestVersion)

- 简介：

    安全的类型转换、时间格式化、自增ID、随机数等

- 使用：

		implementation 'com.bihe0832.android:lib-utils-common:+'

[![LibThread](https://img.shields.io/badge/AndroidAppFactory-LibThread-brightgreen)](#!doc/detail/lib-thread)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-thread/images/download.svg) ](https://bintray.com/bihe0832/android/lib-thread/_latestVersion)

- 简介：

    线程管理模块，提供了不同优先级（系统级别的优先级）的线程（HandlerThread）及一个有五个线程的线程池
    
- 使用：

		implementation 'com.bihe0832.android:lib-thread:+'

![LibEncrypt](https://img.shields.io/badge/AndroidAppFactory-LibEncrypt-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-encrypt/images/download.svg) ](https://bintray.com/bihe0832/android/lib-encrypt/_latestVersion)

- 简介：
    
    AES加密，MD5计算，进制转化

- 使用：

		implementation 'com.bihe0832.android:lib-encrypt:+'

![LibChannel](https://img.shields.io/badge/AndroidAppFactory-LibChannel-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-channel/images/download.svg) ](https://bintray.com/bihe0832/android/lib-channel/_latestVersion)

- 简介：

	渠道号相关，主要是读取渠道号。目前渠道号写在assets下的channel.ini文件
	
- 使用：

		implementation 'com.bihe0832.android:lib-channel:+'
		
![LibRequest](https://img.shields.io/badge/AndroidAppFactory-LibRequest-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-request/images/download.svg) ](https://bintray.com/bihe0832/android/lib-request/_latestVersion)

- 简介：
    
    请求参数处理，URL校验、合并等
    
- 使用：

		implementation 'com.bihe0832.android:lib-request:+'

![LibGson](https://img.shields.io/badge/AndroidAppFactory-LibGson-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-gson/images/download.svg) ](https://bintray.com/bihe0832/android/lib-gson/_latestVersion)

- 简介：

    基于Gson封装的类型安全的转换方法

- 使用：

		implementation 'com.bihe0832.android:lib-gson:+'


![LibHttpCommon](https://img.shields.io/badge/AndroidAppFactory-LibHttpCommon-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-http-common/images/download.svg) ](https://bintray.com/bihe0832/android/lib-http-common/_latestVersion)

- 简介：

    一款封装HttpURLConnection实现的简单的网络请求的事例，没有做任何处理，将网络请求的内容以String返回

- 使用：

		implementation 'com.bihe0832.android:lib-http-common:+'

![LibHttpAdvanced](https://img.shields.io/badge/AndroidAppFactory-LibHttpAdvanced-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-http-advanced/images/download.svg) ](https://bintray.com/bihe0832/android/lib-http-advanced/_latestVersion)

- 简介：

    一款封装HttpURLConnection实现的简单的网络请求的事例，会完成网络请求结果的解析，最终网络请求结果（Json）会被处理为对应数据类型

- 使用：

		implementation 'com.bihe0832.android:lib-http-advanced:+'
    
    
![LibSqlite](https://img.shields.io/badge/AndroidAppFactory-LibSqlite-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-sqlite/images/download.svg) ](https://bintray.com/bihe0832/android/lib-sqlite/_latestVersion)

- 简介：

    Sqlite封装，同时提供了一个key-value的基本数据库

- 使用：

		implementation 'com.bihe0832.android:lib-sqlite:+'

![LibDeviceNetwork](https://img.shields.io/badge/AndroidAppFactory-LibDeviceNetwork-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-device-network/images/download.svg) ](https://bintray.com/bihe0832/android/lib-device-network/_latestVersion)

- 简介：

    设备基本信息和网络相关信息的工具库

- 使用：

		implementation 'com.bihe0832.android:lib-device-network:+'


![LibTimer](https://img.shields.io/badge/AndroidAppFactory-LibTimer-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-timer/images/download.svg) ](https://bintray.com/bihe0832/android/lib-timer/_latestVersion)

- 简介：

    基于Timer封装的定时器
    
- 使用：

		implementation 'com.bihe0832.android:lib-timer:+'

![LibConfig](https://img.shields.io/badge/AndroidAppFactory-LibConfig-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-config/images/download.svg) ](https://bintray.com/bihe0832/android/lib-config/_latestVersion)

- 简介：

	配置管理相关，支持读取本地配置文件、支持配置保存本地
	
- 使用：
		implementation 'com.bihe0832.android:lib-config:+'
	
![LibAPK](https://img.shields.io/badge/AndroidAppFactory-LibAPK-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-utils-apk/images/download.svg) ](https://bintray.com/bihe0832/android/lib-utils-apk/_latestVersion)

- 简介：

    检查应用安装，获取应用数据，打开APP等发送各类Intent
    
- 使用：

		implementation 'com.bihe0832.android:lib-utils-apk:+'

![LibTTS](https://img.shields.io/badge/AndroidAppFactory-LibTTS-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-tts/images/download.svg) ](https://bintray.com/bihe0832/android/lib-tts/_latestVersion)

- 简介：

    文字转语音组件的封装

- 使用：

		implementation 'com.bihe0832.android:lib-tts:+'


![LibFile](https://img.shields.io/badge/AndroidAppFactory-LibFile-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-file/images/download.svg) ](https://bintray.com/bihe0832/android/lib-file/_latestVersion)

- 简介：

    提供Provider的方式访问文件以及对于文件的一些基本操作，例如获取文件名，扩展名等

- 使用：

		implementation 'com.bihe0832.android:lib-file:+'

![LibZip](https://img.shields.io/badge/AndroidAppFactory-LibZip-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-zip/images/download.svg) ](https://bintray.com/bihe0832/android/lib-zip/_latestVersion)

- 简介：

    提供ZIP 文件的压缩和解压缩，支持2G以上超大文件

- 使用：

		implementation 'com.bihe0832.android:lib-zip:+'

	
![LibDownloadAndInstall](https://img.shields.io/badge/AndroidAppFactory-LibDownloadAndInstall-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-download-install/images/download.svg) ](https://bintray.com/bihe0832/android/lib-download-install/_latestVersion)

- 简介：

    简单的下载和唤起应用安装，支持OBB,Split APK等各种格式

- 使用：

		implementation 'com.bihe0832.android:lib-download-install:+'
		
![LibText](https://img.shields.io/badge/AndroidAppFactory-LibText-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-text/images/download.svg) ](https://bintray.com/bihe0832/android/lib-text/_latestVersion)

- 简介：

    文字处理的基础工具库，入分割字符串，特殊字符串等

- 使用：

		implementation 'com.bihe0832.android:lib-text:+'
		
![LibSuperAPP](https://img.shields.io/badge/AndroidAppFactory-LibSuperAPP-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-super-app/images/download.svg) ](https://bintray.com/bihe0832/android/lib-super-app/_latestVersion)

- 简介：

    超级APP相关的工具类，例如一键拉起QQ群，引导关注公众号等

- 使用：

		implementation 'com.bihe0832.android:lib-super-app:+'
		
	
![LibDebug](https://img.shields.io/badge/AndroidAppFactory-LibDebug-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-debug/images/download.svg) ](https://bintray.com/bihe0832/android/lib-debug/_latestVersion)

- 简介：

    应用调试相关的通用工具，例如分享调试信息等

- 使用：

		implementation 'com.bihe0832.android:lib-debug:+'
		
![LibCommonUIUtils](https://img.shields.io/badge/AndroidAppFactory-LibCommonUIUtils-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-ui-common/images/download.svg) ](https://bintray.com/bihe0832/android/lib-ui-common/_latestVersion)

- 简介：

    资源反射等所有UI相关的基础控件

- 使用：

		implementation 'com.bihe0832.android:lib-ui-common:+'
        
![LibFragmentation_core](https://img.shields.io/badge/AndroidAppFactory-LibFragmentation_core-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-fragmentation-core/images/download.svg) ](https://bintray.com/bihe0832/android/lib-fragmentation-core/_latestVersion)

- 简介：

    单Activity ＋ 多Fragment 模式的Fragment管理框架。对应GitHub：https://github.com/YoKeyword/Fragmentation 目前已经做了二次封装
	
    
- 使用：

		implementation 'com.bihe0832.android:lib-fragmentation-core:+'
		
![LibFragmentation](https://img.shields.io/badge/AndroidAppFactory-LibFragmentation-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-fragmentation/images/download.svg) ](https://bintray.com/bihe0832/android/lib-fragmentation/_latestVersion)

- 简介：

    单Activity ＋ 多Fragment 模式的Fragment管理框架。对应GitHub：https://github.com/YoKeyword/Fragmentation 目前已经做了二次封装

- 使用：
		
		implementation 'com.bihe0832.android:lib-fragmentation:+'
        
![LibFragmentation_swipeback](https://img.shields.io/badge/AndroidAppFactory-LibFragmentation_swipeback-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-fragmentation-swipeback/images/download.svg) ](https://bintray.com/bihe0832/android/lib-fragmentation-swipeback/_latestVersion)

- 简介：

    单Activity ＋ 多Fragment 模式的Fragment管理框架。对应GitHub：https://github.com/YoKeyword/Fragmentation 目前已经做了二次封装
    
- 使用：

		implementation 'com.bihe0832.android:lib-fragmentation-swipeback:+'

![LibFlycoTabLayout](https://img.shields.io/badge/AndroidAppFactory-LibFlycoTabLayout-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-flycotablayout/images/download.svg) ](https://bintray.com/bihe0832/android/lib-flycotablayout/_latestVersion)

- 简介：

    FlycoTabLayout 是一个 Android TabLayout 库，目前有两个 TabLayout。对应github：[https://github.com/H07000223/FlycoTabLayout/blob/master/README_CN.md](https://github.com/H07000223/FlycoTabLayout/blob/master/README_CN.md)
	
- 使用：

		implementation 'com.bihe0832.android:lib-flycotablayout:+'

![LibQRCode](https://img.shields.io/badge/AndroidAppFactory-LibQRCode-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-qrcode/images/download.svg) ](https://bintray.com/bihe0832/android/lib-qrcode/_latestVersion)

- 简介：

    一款基于zxing的二维码识别类库，目前已经被二次封装

- 使用：

		implementation 'com.bihe0832.android:lib-qrcode:+'


![LibAdapter](https://img.shields.io/badge/AndroidAppFactory-LibAdapter-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-adapter/images/download.svg) ](https://bintray.com/bihe0832/android/lib-adapter/_latestVersion)

- 简介：
	
	一个更丰富和强大的RecyclerAdapter框架，可以支持：
	
	- 支持一个RecycleView支持多种Item样式
	
	- 添加头部、尾部、空页面
	
	- 自动加载更多等
	
	对应GitHub为：[https://github.com/CymChad/BaseRecyclerViewAdapterHelper](https://github.com/CymChad/BaseRecyclerViewAdapterHelper)，目前已经在`BaseCard`中进行了二次封装，使用方法可以参考`TestCardActivity`。**建议后续RecycleView都使用该Adapter**。

- 使用：

		implementation 'com.bihe0832.android:lib-adapter:+'


![LibRefresh](https://img.shields.io/badge/AndroidAppFactory-LibRefresh-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-refresh/images/download.svg) ](https://bintray.com/bihe0832/android/lib-refresh/_latestVersion)

- 简介：

    配合LibAdapter 一起使用的下拉刷新，上滑加载更多的组件，对应Github为：[https://github.com/anzaizai/EasyRefreshLayout](https://github.com/anzaizai/EasyRefreshLayout)

- 使用：

		implementation 'com.bihe0832.android:lib-refresh:+'
        
	
[![LibToast](https://img.shields.io/badge/AndroidAppFactory-LibToast-brightgreen)](#!doc/detail/lib-toast.md)[![Download](https://api.bintray.com/packages/bihe0832/android/lib-toast/images/download.svg) ](https://bintray.com/bihe0832/android/lib-toast/_latestVersion)

- 简介：

	通用的Toast弹框，支持各种自定义设置

- 使用：

		implementation 'com.bihe0832.android:lib-toast:+'
		
    
![LibImage](https://img.shields.io/badge/AndroidAppFactory-LibImage-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-image/images/download.svg) ](https://bintray.com/bihe0832/android/lib-image/_latestVersion)

- 简介：

    对ImageView加载图片的的扩展，支持各种类型的图片加载方式

- 使用：

		implementation 'com.bihe0832.android:lib-image:+'

![LibDialog](https://img.shields.io/badge/AndroidAppFactory-LibDialog-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-dialog/images/download.svg) ](https://bintray.com/bihe0832/android/lib-dialog/_latestVersion)

- 简介：

    自定义样式的对话框，包括通用的、带进度的、以及全屏非全屏的loading
    
- 使用：

		implementation 'com.bihe0832.android:lib-dialog:+'


![LibNotification](https://img.shields.io/badge/AndroidAppFactory-LibNotification-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-notification/images/download.svg) ](https://bintray.com/bihe0832/android/lib-notification/_latestVersion)

- 简介：

    创建通知栏通知，支持下载带进度的，以及通用的

- 使用：
        
		implementation 'com.bihe0832.android:lib-notification:+'

![LibCustomView](https://img.shields.io/badge/AndroidAppFactory-LibCustomView-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-custom-view/images/download.svg) ](https://bintray.com/bihe0832/android/lib-custom-view/_latestVersion)

- 简介：

    通用的自定义UI，目前有底部按钮栏，带红点的角标TextView

- 使用：
        
		implementation 'com.bihe0832.android:lib-custom-view:+'

![LibRecycleviewExt](https://img.shields.io/badge/AndroidAppFactory-LibRecycleviewExt-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-recycleview-ext/images/download.svg) ](https://bintray.com/bihe0832/android/lib-recycleview-ext/_latestVersion)

- 简介：

    基于LibAdapter的列表的扩展，例如计算当前激活的元素、设置边距等

- 使用：
        
		implementation 'com.bihe0832.android:lib-recycleview-ext:+'

![LibTouchRegion](https://img.shields.io/badge/AndroidAppFactory-LibTouchRegion-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-touchregion/images/download.svg) ](https://bintray.com/bihe0832/android/lib-touchregion/_latestVersion)

- 简介：

    View的点击区扩大，最大可以扩大到父布局的大小

- 使用：
        
		implementation 'com.bihe0832.android:lib-touchregion:+'

![LibViewExt](https://img.shields.io/badge/AndroidAppFactory-LibViewExt-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-view-ext/images/download.svg) ](https://bintray.com/bihe0832/android/lib-view-ext/_latestVersion)

- 简介：

    基于kotlin的扩展函数，对于基础view的一些功能扩展，例如设置高度，获取view对应的bitmap等

- 使用：
        
		implementation 'com.bihe0832.android:lib-view-ext:+'

![LibWebview](https://img.shields.io/badge/AndroidAppFactory-LibWebview-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-webview/images/download.svg) ](https://bintray.com/bihe0832/android/lib-webview/_latestVersion)

- 简介：

    基于腾讯X5内核的封装的内置浏览器，支持JSBridge等基础功能

- 使用：
        
		implementation 'com.bihe0832.android:lib-webview:+'


![LibLifecycle](https://img.shields.io/badge/AndroidAppFactory-LibLifecycle-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-lifecycle/images/download.svg) ](https://bintray.com/bihe0832/android/lib-lifecycle/_latestVersion)

- 简介：

    Android 应用生命周期相关的接口，包括应用前后台判断，启动次数，最后使用版本记录等

- 使用：
        
		implementation 'com.bihe0832.android:lib-lifecycle:+'
		
		
![LibPermission](https://img.shields.io/badge/AndroidAppFactory-LibPermission-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-permission/images/download.svg) ](https://bintray.com/bihe0832/android/lib-permission/_latestVersion)

- 简介：

    Android 权限管理

- 使用：
        
		implementation 'com.bihe0832.android:lib-permission:+'
