# LibHttpCommon

![LibHttpCommon](https://img.shields.io/badge/AndroidAppFactory-LibHttpCommon-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibHttpCommon-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibHttpCommon)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-http-common) ](https://search.maven.org/artifact/com.bihe0832.android/lib-http-common)

## 功能简介

一款基于 HttpURLConnection 实现的简单的网络请求的事例，没有做任何处理，将网络请求的内容以String返回

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-http-common:+'
```

## 组件功能

### HTTPServer

- 支持使用Http或者Https 同步、异步发送 GET 和 POST 请求

- 根据请求链接是 https 还是 http 开头确定使用什么协议

- 根据是否有data 信息 确定使用 GET 还是 POST

- 支持添加 http 头，cookie，设置超时时间等

- 支持文件上传

<!-- ## 事例代码

[https://github.com/bihe0832/AndroidAppFactory/tree/master/APPTest/src/main/java/com/bihe0832/android/test/module/request/TestHttpActivity.kt](https://github.com/bihe0832/AndroidAppFactory/tree/master/APPTest/src/main/java/com/bihe0832/android/test/module/request/TestHttpActivity.kt) -->
