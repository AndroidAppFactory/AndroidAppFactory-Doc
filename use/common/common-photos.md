# CommonPhotos

![CommonPhotos](https://img.shields.io/badge/AndroidAppFactory-CommonPhotos-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonPhotos-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonPhotos)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-photos) ](https://search.maven.org/artifact/com.bihe0832.android/common-photos)

## 功能简介

基于公共框架的使用系统原生进一步封装的拍照、相册选择、裁剪图片等，已适配到Android 11

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-photos:+'
```

## 组件功能

### Activity的扩展

- 获取无需相册权限的拍照、裁剪目录及图片

- 无需相册权限的拍照

- 基于 [PermissionManager](./../libs/ui/lib-permission.md#permissionmanager) 完成权限设置及检查的相册照片选择

### HeadIconBuildFactory

基于 HeadIconBuilder 的，支持使用缓存的扩展类