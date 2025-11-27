# LibOkhttpWrapper

![LibOkhttpWrapper](https://img.shields.io/badge/AndroidAppFactory-LibOkhttpWrapper-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibOkhttpWrapper-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibOkhttpWrapper)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-okhttp-wrapper) ](https://search.maven.org/artifact/com.bihe0832.android/lib-okhttp-wrapper)

## 功能简介

基于 OkHttp 和 Retrofit2 进一步封装的网络请求工具库：

- **OkHttpClient 统一管理**：全局单例、连接池复用、缓存管理
- **HTTP/2 多路复用支持**：协议自动检测、智能降级
- **请求追踪与监控**：网络耗时分析、请求内容记录、事件监听
- **简化配置**：提供预配置的 Builder，开箱即用

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-okhttp-wrapper:+'
```

## 组件功能

### OkHttpClientManager

OkHttp 客户端管理器，提供统一的客户端创建和管理。

**核心特性：**
- 全局客户端单例管理
- HTTP/2 多路复用支持
- 协议自动检测和降级
- 连接池和缓存管理
- 协议支持缓存机制

**主要方法：**

| 方法 | 说明 |
|------|------|
| `createOkHttpClient()` | 创建基础 OkHttpClient 实例 |
| `createOkHttpClientWithCache()` | 创建带缓存和调度器的客户端 |
| `getClient()` | 根据 URL 和配置获取适合的客户端 |
| `executeRequest()` | 执行请求（带协议自动降级） |
| `checkHttp2Support()` | 检测服务器是否支持 HTTP/2 |
| `clearProtocolCache()` | 清除 HTTP/2 支持缓存 |
| `getHttp2SupportedHosts()` | 获取支持 HTTP/2 的服务器列表 |

**使用示例：**

```kotlin
// 1. 获取客户端（自动选择 HTTP/2 或 HTTP/1.1）
val client = OkHttpClientManager.getClient(url)

// 2. 执行请求（自动降级）
val request = Request.Builder().url(url).build()
val response = OkHttpClientManager.executeRequest(request)

// 3. 创建自定义客户端
val customClient = OkHttpClientManager.createOkHttpClient(
    protocols = listOf(Protocol.HTTP_2, Protocol.HTTP_1_1),
    connectTimeout = 30000,  // 30秒
    readTimeout = 30000,
    writeTimeout = 30000
)

// 4. 创建带缓存的客户端
val cachedClient = OkHttpClientManager.createOkHttpClientWithCache(
    context = context,
    cacheSize = 50 * 1024 * 1024,  // 50MB 缓存
    maxRequests = 30,              // 全局最大请求数
    maxRequestsPerHost = 10        // 单主机最大请求数
)

// 5. 检测服务器 HTTP/2 支持
val supportsHttp2 = OkHttpClientManager.checkHttp2Support(url)
if (supportsHttp2) {
    println("服务器支持 HTTP/2")
}

// 6. 查看支持 HTTP/2 的服务器
val http2Hosts = OkHttpClientManager.getHttp2SupportedHosts()
http2Hosts.forEach { host ->
    println("HTTP/2 支持: $host")
}

// 7. 清除协议缓存
OkHttpClientManager.clearProtocolCache()
```

**HTTP/2 自动降级示例：**

```kotlin
// 首次请求会自动检测协议
val client1 = OkHttpClientManager.getClient("https://example.com/api/data")
// 如果服务器支持 HTTP/2，使用 HTTP/2 客户端
// 如果不支持，自动降级到 HTTP/1.1 客户端

// 后续请求使用缓存的检测结果
val client2 = OkHttpClientManager.getClient("https://example.com/api/other")
// 直接使用之前检测到的协议，无需重复检测
```

**协议优先级控制：**

```kotlin
// 优先使用 HTTP/2（默认）
val http2Client = OkHttpClientManager.getClient(url, preferHttp2 = true)

// 强制使用 HTTP/1.1
val http1Client = OkHttpClientManager.getClient(url, preferHttp2 = false)
```

### OkHttpWrapper

OkHttp 快速配置工具，提供预配置的 OkHttpClient.Builder。

**核心功能：**
- 快速获取封装了基本参数的 OkHttpClient.Builder
- 集成请求拦截器和事件监听器
- 请求内容记录和追踪
- 网络耗时统计

**使用示例：**

```kotlin
// 1. 获取基础 Builder
val builder = OkHttpWrapper.getOkHttpClientBuilder(
    context = context,
    canInterceptRequest = true  // 是否拦截请求内容
)

// 2. 自定义超时配置
val customBuilder = OkHttpWrapper.getOkHttpClientBuilder(
    context = context,
    connectTimeout = 10000,  // 连接超时 10秒
    readTimeout = 15000,     // 读取超时 15秒
    writeTimeout = 10000,    // 写入超时 10秒
    canInterceptRequest = true
)

// 3. 添加自定义拦截器
val client = builder
    .addInterceptor(customInterceptor)
    .build()

// 4. 配置请求记录数量
OkHttpWrapper.setMaxRequestNumInRequestCacheList(20)

// 5. 生成网络拦截器
val networkInterceptor = OkHttpWrapper.generateNetworkInterceptor(true)

// 6. 生成事件监听器
val eventListener = OkHttpWrapper.generateNetworkEventListener(true)
```

**请求追踪示例：**

```kotlin
val client = OkHttpWrapper.getOkHttpClientBuilder(context, true)
    .addNetworkInterceptor(OkHttpWrapper.generateNetworkInterceptor(true))
    .eventListenerFactory(OkHttpWrapper.generateNetworkEventListener(true))
    .build()

val request = Request.Builder()
    .url("https://api.example.com/data")
    .build()

val response = client.newCall(request).execute()

// 查看请求记录（包含详细的耗时和内容）
// 记录格式：
// --> POST https://example.com/api h2
//    Content-Type: application/json
//    [Request Headers]
//    
//    [Request Body]
//    --> END POST (body size) Cost: XXXms
//    
// <-- 200 https://example.com/api
//    [Response Headers]
//    
//    [Response Body]
// <-- END HTTP (body size) Total Cost: XXXms
```

### OkHttpClientExt

OkHttp 扩展工具，提供便捷的数据提取方法。

**功能：**
- 获取 Request 的 Body 字符串值
- 获取 Response 的 Body 字符串值
- 安全读取 Body 内容（不影响后续使用）

**使用示例：**

```kotlin
// 读取请求 Body
val requestBody = OkHttpClientExt.getRequestBodyString(request)

// 读取响应 Body
val responseBody = OkHttpClientExt.getResponseBodyString(response)
```

### AAFNetworkEventListener

基于 OkHttpClient 的 EventListener 封装的网络耗时追踪回调。

**追踪项：**
- DNS 解析耗时
- 连接建立耗时
- TLS 握手耗时
- 请求发送耗时
- 响应接收耗时
- 总耗时

**使用示例：**

```kotlin
val eventListener = object : AAFNetworkEventListener() {
    override fun onEventCompleted(
        callStartNanos: Long,
        event: String,
        durationNanos: Long
    ) {
        val durationMs = durationNanos / 1000000
        println("$event: ${durationMs}ms")
    }
}

val client = OkHttpClient.Builder()
    .eventListener(eventListener)
    .build()
```

### AAFOKHttpInterceptor

基于 Interceptor 封装的请求内容拦截器。

**功能：**
- 记录请求和响应的完整内容
- 保存网络交互数据
- 支持开关控制

**拦截内容：**
- 请求 URL、Headers、Body
- 响应 Code、Headers、Body
- 请求耗时

## 高级特性

### HTTP/2 多路复用

**优势：**
- 单个 TCP 连接支持多个并发请求
- 减少连接建立开销
- 头部压缩，降低带宽占用
- 服务器推送支持

**自动降级机制：**
1. 首次请求时尝试 HTTP/2
2. 检测服务器响应的协议版本
3. 缓存检测结果（host 级别）
4. 后续请求自动使用对应协议的客户端

**协议缓存：**
```kotlin
// 清除缓存（服务器升级后需要重新检测）
OkHttpClientManager.clearProtocolCache()

// 查看已缓存的 HTTP/2 服务器
val hosts = OkHttpClientManager.getHttp2SupportedHosts()
```

### 连接池管理

**默认配置：**
- 最大空闲连接数：5
- 连接存活时间：3 分钟

**自定义连接池：**
```kotlin
val client = OkHttpClientManager.createOkHttpClient(
    maxIdleConnections = 10,
    keepAliveDuration = 5  // 5 分钟
)
```

### 请求调度

**配置调度器：**
```kotlin
val client = OkHttpClientManager.createOkHttpClientWithCache(
    context = context,
    maxRequests = 50,           // 全局最大并发请求
    maxRequestsPerHost = 15     // 单主机最大并发请求
)
```

## 完整示例

### 创建 Retrofit 实例

```kotlin
// 1. 创建 OkHttpClient
val okHttpClient = OkHttpClientManager.createOkHttpClientWithCache(
    context = applicationContext,
    protocols = listOf(Protocol.HTTP_2, Protocol.HTTP_1_1),
    connectTimeout = 30000,
    readTimeout = 30000,
    writeTimeout = 30000,
    cacheSize = 100 * 1024 * 1024,  // 100MB
    maxRequests = 30,
    maxRequestsPerHost = 10
)

// 2. 创建 Retrofit
val retrofit = Retrofit.Builder()
    .baseUrl("https://api.example.com/")
    .client(okHttpClient)
    .addConverterFactory(GsonConverterFactory.create())
    .build()

// 3. 创建 API Service
val apiService = retrofit.create(ApiService::class.java)
```

### 请求追踪和监控

```kotlin
val client = OkHttpWrapper.getOkHttpClientBuilder(context, true)
    .addNetworkInterceptor(OkHttpWrapper.generateNetworkInterceptor(true))
    .eventListenerFactory(OkHttpWrapper.generateNetworkEventListener(true))
    .build()

// 执行请求
val request = Request.Builder()
    .url("https://api.example.com/data")
    .post(requestBody)
    .build()

client.newCall(request).enqueue(object : Callback {
    override fun onResponse(call: Call, response: Response) {
        // 请求成功
        val body = response.body?.string()
        
        // 可以查看详细的请求记录
        // 包含：请求内容、响应内容、各阶段耗时
    }

    override fun onFailure(call: Call, e: IOException) {
        // 请求失败
    }
})
```

## 最佳实践

### 1. 全局单例

```kotlin
object NetworkClient {
    val okHttpClient: OkHttpClient by lazy {
        OkHttpClientManager.createOkHttpClientWithCache(
            context = App.context,
            cacheSize = 50 * 1024 * 1024,
            maxRequests = 30,
            maxRequestsPerHost = 10
        )
    }
}
```

### 2. 请求拦截器

```kotlin
val client = OkHttpWrapper.getOkHttpClientBuilder(context, true)
    .addInterceptor { chain ->
        val request = chain.request().newBuilder()
            .addHeader("Authorization", "Bearer $token")
            .addHeader("User-Agent", "MyApp/1.0")
            .build()
        chain.proceed(request)
    }
    .build()
```

### 3. 协议优化

```kotlin
// 开发环境：记录请求详情
val devClient = OkHttpWrapper.getOkHttpClientBuilder(context, true)
    .addNetworkInterceptor(OkHttpWrapper.generateNetworkInterceptor(true))
    .build()

// 生产环境：HTTP/2 优化
val prodClient = OkHttpClientManager.createOkHttpClient(
    protocols = listOf(Protocol.HTTP_2, Protocol.HTTP_1_1)
)
```

## 注意事项

1. **HTTP/2 兼容性**：部分服务器可能不支持，组件会自动降级
2. **缓存大小**：根据应用需求合理设置缓存大小
3. **并发控制**：`maxRequests` 不宜过大，避免资源竞争
4. **连接池**：共享 OkHttpClient 实例以复用连接池
5. **请求记录**：生产环境建议关闭详细拦截，减少内存占用

## 相关组件

- [LibDownload](./lib-download.md) - 下载组件（使用本组件提供的 HTTP/2 支持）
- [LibRequest](./lib-request.md) - 网络请求封装
- [LibHttpAdvanced](./lib-http-advanced.md) - 高级 HTTP 工具
