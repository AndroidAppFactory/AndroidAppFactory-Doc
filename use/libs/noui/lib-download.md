# LibDownload

![LibDownload](https://img.shields.io/badge/AndroidAppFactory-LibDownload-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibDownload-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibDownload)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-download) ](https://search.maven.org/artifact/com.bihe0832.android/lib-download)

## 功能简介

功能强大的下载组件，支持：

- **高级下载特性**：分片下载、断点续传、多线程高速下载、文件完整性校验、详细回调
- **灵活控制**：下载队列管理、通知栏提醒、异常自动重试、优先级控制
- **协议优化**：HTTP/2 多路复用支持、协议自动检测与降级
- **多种下载模式**：完整文件下载、文件片段下载（Range 下载）

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-download:+'
```

## 组件功能

### DownloadClientConfig

下载客户端配置类，支持实例级别的下载配置：

**核心特性：**
- HTTP/2 协议支持开关
- 自适应分片策略（HTTP/2 vs HTTP/1.1）
- 性能优化选项
- 协议检测缓存

**主要配置项：**

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `enableHttp2` | 是否启用 HTTP/2 支持 | true |
| `http2MaxChunks` | HTTP/2 环境下的最大分片数 | 10 |
| `http1MaxChunks` | HTTP/1.1 环境下的最大分片数 | 5 |
| `http2MinChunkSize` | HTTP/2 最小分片大小 | 512KB |
| `http1MinChunkSize` | HTTP/1.1 最小分片大小 | 1MB |
| `enableProtocolCache` | 是否启用协议检测缓存 | true |
| `logProtocolInfo` | 是否在日志中输出协议信息 | true |

**使用示例：**

```kotlin
// 方式1：使用默认配置
val config = DownloadClientConfig.createDefault()
DownloadFileUtils.init(context, 3, config, true)

// 方式2：使用 HTTP/2 优化配置（适用于高速网络）
val http2Config = DownloadClientConfig.createHttp2Optimized()
DownloadFileUtils.init(context, 5, http2Config, false)

// 方式3：使用兼容模式（禁用 HTTP/2）
val compatibleConfig = DownloadClientConfig.createCompatible()
DownloadFileUtils.init(context, 3, compatibleConfig, false)

// 方式4：自定义配置
val customConfig = DownloadClientConfig().apply {
    enableHttp2 = true
    http2MaxChunks = 12
    http2MinChunkSize = 1024 * 256  // 256KB
    http1MaxChunks = 3
    http1MinChunkSize = 1024 * 1024 * 2  // 2MB
}
DownloadFileUtils.init(context, 4, customConfig, true)
```

**配置选择建议：**

| 场景 | 推荐配置 | 说明 |
|------|---------|------|
| 高速网络环境 | `createHttp2Optimized()` | 更多分片、更小分片大小 |
| 普通网络环境 | `createDefault()` | 平衡速度和资源 |
| 低速或不稳定网络 | `createCompatible()` | 禁用 HTTP/2，使用保守策略 |
| 大文件下载 | 自定义配置 | 根据文件大小调整分片策略 |

### DownloadFileUtils

文件下载管理工具类，提供完整的下载任务管理功能：

**核心功能：**
- 下载任务的增删改查
- 任务的暂停、恢复、删除
- 批量任务管理（暂停所有、恢复所有）
- 任务列表查询（全部、下载中、等待中、已完成）
- 下载优先级控制
- 4G 网络下载控制

**任务类型：**
- `DOWNLOAD_ACTION_KEY_APK`: APK 文件下载
- `DOWNLOAD_ACTION_KEY_CONFIG`: 配置文件下载
- `DOWNLOAD_ACTION_KEY_FILE`: 普通文件下载

**使用示例：**

```java
// 1. 初始化（应用启动时调用）
DownloadClientConfig config = DownloadClientConfig.createDefault();
DownloadFileUtils.init(context, 3, config, true);

// 2. 创建下载任务
DownloadItem item = new DownloadItem();
item.setDownloadURL("https://example.com/file.zip");
item.setDownloadActionKey(DownloadFileUtils.DOWNLOAD_ACTION_KEY_FILE);
item.setNotificationVisibility(true);  // 显示通知栏
item.setDownloadPriority(DownloadItem.PRIORITY_NORMAL);

// 3. 开始下载
DownloadFileUtils.startDownload(context, item);

// 4. 查询任务状态
DownloadItem task = DownloadFileUtils.getTaskByDownloadURL(downloadURL);

// 5. 暂停下载
DownloadFileUtils.pauseTask(downloadURL);

// 6. 恢复下载
DownloadFileUtils.resumeTask(downloadURL);

// 7. 删除任务
DownloadFileUtils.deleteTask(downloadURL, true);  // true: 删除本地文件

// 8. 批量操作
DownloadFileUtils.pauseAllTask();   // 暂停所有
DownloadFileUtils.resumeAllTask();  // 恢复所有

// 9. 应用退出时释放资源
DownloadFileUtils.onDestroy();
```

**下载回调监听：**

```java
item.setDownloadListener(new DownloadListener() {
    @Override
    public void onWait(DownloadItem item) {
        // 任务加入等待队列
    }

    @Override
    public void onStart(long downloadedLength, long totalLength, DownloadItem item) {
        // 开始下载
    }

    @Override
    public void onProgress(long downloadedLength, long totalLength, DownloadItem item) {
        // 下载进度更新
        int progress = (int) ((downloadedLength * 100) / totalLength);
    }

    @Override
    public void onPause(int errorCode, String errorMsg, DownloadItem item) {
        // 下载暂停
    }

    @Override
    public void onFail(int errorCode, String errorMsg, DownloadItem item) {
        // 下载失败
    }

    @Override
    public void onComplete(String filePath, DownloadItem item) {
        // 下载完成
    }

    @Override
    public void onDelete(String filePath, DownloadItem item) {
        // 任务删除
    }
});
```

### DownloadRangeUtils

文件片段下载工具，支持下载指定文件的部分内容：

**核心特性：**
- 支持 HTTP Range 请求
- 下载指定文件区间内容
- 保存到本地文件的指定位置
- 适用于视频预加载、分段下载等场景

**使用示例：**

```java
// 下载文件的前 1MB 内容
DownloadItem rangeItem = new DownloadItem();
rangeItem.setDownloadURL("https://example.com/video.mp4");
rangeItem.setRangeStart(0);           // 起始位置
rangeItem.setRangeLength(1024 * 1024); // 下载 1MB
rangeItem.setLocalStart(0);            // 保存到本地文件的起始位置

DownloadRangeUtils.startDownload(context, rangeItem);
```

### DownloadConfig

配置文件专用下载器：

**特点：**
- 无进度展示
- 4G 强制下载
- 不排队强制下载
- 不可分片下载

### DownloadFile

通用文件下载器，可自由控制：

**控制选项：**
- 是否强制重新下载
- 是否展示下载进度
- 移动网络是否下载
- 是否弹框用户选择下载方式
- 是否排队下载
- 是否分片下载
- 是否在通知栏展示进度

### DownloadAPK

APK 下载器（基于 `DownloadFile` 封装）：

**特点：**
- 下载完成自动使用 [LibAPK](./lib-install.md) 拉起安装
- 支持通知栏进度展示
- 支持 MD5/SHA256 校验

**使用示例：**

```java
DownloadItem apkItem = new DownloadItem();
apkItem.setDownloadURL("https://example.com/app.apk");
apkItem.setDownloadActionKey(DownloadFileUtils.DOWNLOAD_ACTION_KEY_APK);
apkItem.setContentMD5("apk_file_md5");  // 可选：MD5 校验
apkItem.setNotificationVisibility(true);

DownloadFileUtils.startDownload(context, apkItem);
```

## 高级特性

### HTTP/2 多路复用

LibDownload 支持 HTTP/2 多路复用，可显著提升下载速度：

**优势：**
- 单个 TCP 连接支持多个并发请求
- 减少连接建立开销
- 更高效的资源利用

**自动降级：**
- 自动检测服务器 HTTP/2 支持
- 不支持时自动降级到 HTTP/1.1
- 缓存检测结果，避免重复检测

### 断点续传

**特性：**
- 自动保存下载进度
- 应用重启后可继续下载
- 网络中断后自动重试

### 文件完整性校验

**支持校验方式：**
- MD5 校验：`item.setContentMD5("md5_value")`
- SHA256 校验：`item.setContentSHA256("sha256_value")`

**校验流程：**
1. 下载完成后自动计算文件哈希
2. 与设置的值对比
3. 不匹配则标记下载失败并重试

## 最佳实践

### 1. 初始化配置

```java
// Application onCreate() 中初始化
DownloadClientConfig config = DownloadClientConfig.createDefault();
DownloadFileUtils.init(getApplicationContext(), 3, config, BuildConfig.DEBUG);
```

### 2. 大文件下载

```java
// 使用 HTTP/2 优化配置
DownloadClientConfig config = DownloadClientConfig.createHttp2Optimized();
DownloadFileUtils.init(context, 5, config, false);

// 设置高优先级
item.setDownloadPriority(DownloadItem.PRIORITY_HIGH);
```

### 3. 移动网络控制

```java
item.setForceDownloadInMobile(false);  // 移动网络不自动下载
item.setNotificationVisibility(true);  // 显示通知，用户可手动恢复
```

### 4. 资源释放

```java
// Activity/Fragment onDestroy()
DownloadFileUtils.onDestroy();
```

## 注意事项

1. **并发数控制**：建议大文件下载时 `maxDownloadNum` 不超过 5
2. **HTTP/2 兼容性**：如遇兼容性问题，可使用 `createCompatible()` 禁用
3. **文件校验**：重要文件务必设置 MD5 或 SHA256 校验
4. **内存占用**：下载队列过长时注意内存占用
5. **通知权限**：Android 13+ 需申请通知权限才能显示通知栏进度

## 相关组件

- [LibOkhttpWrapper](./lib-okhttp-wrapper.md) - OkHttp 封装（提供 HTTP/2 支持）
- [LibAPK](./lib-install.md) - APK 安装工具
- [LibNotification](./lib-notification.md) - 通知栏管理
