# 公共框架UI无关模块

![Framework](https://img.shields.io/badge/AndroidAppFactory-Framework-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-Framework-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/Framework)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/framework) ](https://search.maven.org/artifact/com.bihe0832.android/framework)

## 功能简介

公共框架的非UI的核心模块，主要定义了全局的应用上下文、应用调试、对于底层基础库的二次封装等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:framework:+'
```
## 组件功能

### Context & Init

-  ZixieContext

    获取全局可用，必不非空的上下文

    获取当前版本的版本类型、版本信息、渠道号、安装信息、应用使用信息
    
    获取当前设备ID及屏幕宽高、通用文件目录等信息

    根据应用前后台等弹出各种类型的 Toast信息，获取当前的Activity，应用彻底退出的逻辑
    
    提供在子线程初始化模块的接口

- ZixieCoreInit

    整个AAF的核心初始化，会完成最基础的配置管理，屏幕宽高获取、日志、生命周期

    调试模式直接通过隐私协议

- AAFAppGlideModule

    AAF 的 Glide 初始化配置，定义缓冲池、本地缓存、默认的图片压缩方法等

- LoggerFile

    打印日志到指定文件，并支持打开

- LoggerTrace

    打点记录操作耗时，可最终批量展示

### 常量定义

- Constants

    基础配置

- ZixieActivityRequestCode

    所有 startActivityWithResult 的 code 定义

### 调试

- ShowDebugClick

    连续调用五次可以触发核心调试信息分享

### 二次封装

- ZixieRequestConfig

    配置加载二次封装

- ZixieRequestHttp

    同步或异步发起简单的 Http 请求

### 路由

- RouterAction

    根据 Schema 和 Path 及参数生成最终的路由，提供各种常用的路由调用接口

- RouterConstants

    路由定位

- RouterInterrupt

    路由拦截器