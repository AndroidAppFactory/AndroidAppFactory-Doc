# LibPermission

![LibPermission](https://img.shields.io/badge/AndroidAppFactory-LibPermission-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibPermission-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibPermission)
[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-permission/images/download.svg) ](https://bintray.com/bihe0832/android/lib-permission/_latestVersion)

## 功能简介

Android 权限管理

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-permission:+'
```

## 组件功能

<img src="./lib-permission.png" width="30%"/>

### PermissionDialog

- 检查权限的引导弹框

### PermissionManager

- 添加权限弹框时的权限说明

- 检查权限并弹框引导

- 基于 [IntentUtils](./../noui/lib-utils-apk.md#intentutils) 打开对应权限的设置页面，具体权限对应的设置页面的跳转参数可以参考 [Android 权限 及设置描述信息](https://blog.bihe0832.com/android-permission.html)

### PermissionsActivity

- 检查权限并弹框引导的中转页

### FloatPermissionWrapper

- 悬浮窗权限的检查方法