# LibOkhttpWrapper

![LibOkhttpWrapper](https://img.shields.io/badge/AndroidAppFactory-LibOkhttpWrapper-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibOkhttpWrapper-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibOkhttpWrapper)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-okhttp-wrapper) ](https://search.maven.org/artifact/com.bihe0832.android/lib-okhttp-wrapper)

## 功能简介

基于OkHttp 和 Retrofit2，进一步封装的网络请求信息跟踪记录通用类

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-okhttp-wrapper:+'
```

## 组件功能

### OkHttpClientExt

- 获取OKHttpCliet的Request 和 Response 的 Body 的String值

### OkHttpWrapper

- 缓存记录所有网络请求的各种耗时以及对应的请求内容。最终获取到的请求内容事例：

```
 --> POST https://microdemo.bihe0832.com/AndroidHTTP/post.php h2
    Content-Type: application/json; charset=utf-8
    Content-Length: 95
    Host: microdemo.bihe0832.com
    Connection: Keep-Alive
    Accept-Encoding: gzip
    User-Agent: okhttp/3.10.0
    AAF-Content-Request-Id: 2
    
    {"devid":"d16b8245163bd4c6","version":"1","os":"android","package":"com.bihe0832.android.test"}
    --> END POST (95-byte - byte body)   Cost: 250ms
    <-- 200 https://microdemo.bihe0832.com/AndroidHTTP/post.php
    server: nginx/1.16.1
    date: Tue, 28 Jun 2022 16:19:09 GMT
    content-type: text/html; charset=utf-8
    vary: Accept-Encoding
    x-powered-by: PHP/5.4.16
    content-encoding: gzip
    
    {"content":{},"err_code":0,"message":"成功"}
    
    <-- END HTTP (unknown-length - byte body)   Total Cost: 283ms
```

- 快速获取封装了基本参数的 OkHttpClient.Builder 

### AAFNetworkEventListener

- 基于OKHttpClient的EventListener封装的，追踪记录网络请求耗时的回调

### AAFOKHttpInterceptor

- 基于Interceptor封装的，获取并保存记录网络请求内容的拦截器
