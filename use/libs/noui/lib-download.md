# LibDownload

![LibDownload](https://img.shields.io/badge/AndroidAppFactory-LibDownload-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibDownload-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibDownload)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-download) ](https://search.maven.org/artifact/com.bihe0832.android/lib-download)

## 功能简介

包含丰富功能的下载组件，支持：

- 分片下载、断点续传、多线程高速下载、已下载文件校验、下载详细回调

- 可控下载是否排队、是否通知栏提醒、下载后完整性校验、下载异常自动重试

- 下载增加优先级，再队列已经满的情况下，部分高优先级文件依然可以下载

- 支持完整的文件下载或者文件片段下载

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-download:+'
```

## 组件功能

### DownloadUtils

- 底层实现，实现完整文件下载任务的添加、暂停、重试、删除、当前下载列表获取等

### DownloadConfig

- 配置文件的下载：无进度展示，4G强制下载，不排队强制下载，不可分片下载

### DownloadFile

- 文件下载，可以自由控制：

    - 是否强制重新下载

    - 是否展示下载进度

    - 移动网络是否下载，是否弹框用户选择下载方式

    - 是否排队下载

    - 是否分片下载

    - 是否在通知栏展示进度

### DownloadAPK

- 基于 `DownloadFile` 进一步封装的APK下载，下载完成直接使用 [LibAPK](./lib-install.md) 拉起安装

### DownloadRangeUtils

- 文件区间下载，支持下载指定文件的部分内容并保存在本地文件的指定位置
