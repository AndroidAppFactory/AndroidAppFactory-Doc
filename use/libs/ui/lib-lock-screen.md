# LibLockScreen

![LibLockScreen](https://img.shields.io/badge/AndroidAppFactory-LibLockScreen-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibLockScreen-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibLockScreen)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-lock-screen)](https://search.maven.org/artifact/com.bihe0832.android/lib-lock-screen)

## 功能简介

锁屏壁纸实现，结合 Widget 可以实现进程保活

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-lock-screen:+'
```

## 组件功能

### LockScreenPermission

- 锁屏开启，以及基于需要的悬浮窗及悬浮在其他应用上层的权限判断的开启

### CancelNoticeService && LockScreenService

- 接受锁屏等事件的系统服务，搭配使用可以实现保活
