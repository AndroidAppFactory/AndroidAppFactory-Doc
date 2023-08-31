# CommonPermission

![CommonPermission](https://img.shields.io/badge/AndroidAppFactory-CommonPermission-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonPermission-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonPermission)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-permission) ](https://search.maven.org/artifact/com.bihe0832.android/common-permission)

## 功能简介

关于权限相关功能的二次封装

## 组件使用

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-permission:+'
```

## 组件功能

### AAFPermissionManager

- 权限获取、检查、权限相关的文案、图标配置、发起权限申请

### PermissionFragment && PermissionItem

- 设置中关于使用权限的列表展示

### PermissionsActivityWithSpecial

- 一些特殊权限的申请UI，目前仅包含位置权限
