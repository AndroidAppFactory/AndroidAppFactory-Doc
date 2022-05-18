# LibImage

![LibImage](https://img.shields.io/badge/AndroidAppFactory-LibImage-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibImage-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibImage)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-image)](https://search.maven.org/artifact/com.bihe0832.android/lib-image)

## 功能简介

对ImageView加载图片的的扩展，支持各种类型的图片加载方式，以及图像相关的 Bitmap、相册保存等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-image:+'
```

## 组件功能

### BitmapUtil

- Bitmap相关的各种处理

- 返回bitmap的数组大小

- 根据网络URL或者图片本地路径、URI读取图片获取图片Bitmap、按照缩放比保持长宽比例返回bitmap对象

- 获取指定View的Bitmap数据、基于数据做二次处理，例如：添加一个指定颜色、形状的浮层或者背景色

- 根据width 和 height 与 reqWidth 和 reqHeight 的差异，计算出如果缩放到一样大，使用的 BitmapFactory.Options

- 将Bitmap保存到本地，支持自定义路径

- Bitmap合并：例如上下拼接成为一个Bitmap，覆盖合成为一个Bitmap

- Bitmap 压缩、旋转、Bitmap支持获取圆角等

### GlideExt

- 基于kotlin的扩展函数，使用Glide为ImageView添加的各种扩展，支持各种形式的图片加载，如圆形、圆角、gif等

### Media

- 将图片或者视频添加到相册，前提是图片或者视频保存在外部存储