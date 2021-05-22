# LibIPC

![LibIPC](https://img.shields.io/badge/AndroidAppFactory-LibIPC-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibIPC-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibIPC)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-ipc) ](https://search.maven.org/artifact/com.bihe0832.android/lib-ipc)

## 功能简介

基于文章 https://enzowyf.github.io/ipc_router.html 改造的跨进程调用的基础框架。

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-ipc:+'
```

## 组件功能

### 使用Demo

目前提供了基于，具体的使用事例，可以参考 [BaseTest](https://github.com/bihe0832/AndroidAppFactory/tree/master/BaseTest/src/main/java/com/bihe0832/android/base/test/ipc) 中 `com.bihe0832.android.base.test.ipc` 下面的代码

### 新增跨进程调用步骤

以 `IZixieIPCForTestInterface` 举例，介绍新增跨进程调用的步骤：
 
1. 确定接口名称，并新增aidl文件，例如事例中的 IZixieIPCForTestInterface.aidl    

2. 在同包名下定义对应的Java接口，并制定将来运行的进程，如果没有制定，则在当前进程调用，例如事例中的 IZixieIPCTestServiceForTest.java

3. 具体实现跨进程调用接口，例如事例中的 ZixieIPCTestServiceForTest.java

4. 新增基于 AbstractBinderProvider 的 对应新进程的 ContentProvider，例如事例中的 TestBinderProvider.java

5. 在 AndroidMainFest 里面定义新增的ContentProvider 并指定其运行的进程

6. 在Applicaion 的 onCreate 里初始化 ServiceManager 及跨进程调用的实例，例如事例中的 TestApplication.java