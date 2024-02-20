# LibImageMetadata

![LibImageMetadata](https://img.shields.io/badge/AndroidAppFactory-LibImageMetadata-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibImageMetadata-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibImageMetadata)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-image-meta) ](https://search.maven.org/artifact/com.bihe0832.android/lib-image-meta)

## 功能简介

结合 drewnoakes 获取 图片的元数据信息即修改元数据

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-image-meta:+'
```

## 组件功能

### ImageMetadataUtils

- 展示图片的包含的所有元数据信息

- 对于LivePhoto，获取图片元数据中 XMPMicroVideoOffset 的值

- 获取图片元数据中的 APP1、XMP、exifOrientation 以及旋转图片等
