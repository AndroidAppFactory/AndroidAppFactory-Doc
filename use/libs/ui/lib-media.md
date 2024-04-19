# LibMedia

![LibMedia](https://img.shields.io/badge/AndroidAppFactory-LibMedia-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibMedia-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibMedia)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-media)](https://search.maven.org/artifact/com.bihe0832.android/lib-media)

## 功能简介

对音视频及图片处理相关的的扩展

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-media:+'
```

## 组件功能

### Media

- 将图片或者视频添加到相册，前提是图片或者视频保存在外部存储

### CheckedEnableImageView

- 支持点击状态的ImageView

### BitmapUtil

- Bitmap相关的各种处理

- 返回bitmap的数组大小

- 根据网络URL或者图片本地路径、URI读取图片获取图片Bitmap、按照缩放比保持长宽比例返回bitmap对象

- 获取指定View的Bitmap数据、基于数据做二次处理，例如：添加一个指定颜色、形状的浮层或者背景色

- 根据width 和 height 与 reqWidth 和 reqHeight 的差异，计算出如果缩放到一样大，使用的 BitmapFactory.Options

- 将Bitmap保存到本地，支持自定义路径

- Bitmap合并：例如上下拼接成为一个Bitmap，覆盖合成为一个Bitmap

- Bitmap 缩放、压缩、旋转、Bitmap支持获取圆角等

### GlideExt

- 基于kotlin的扩展函数，使用Glide为ImageView添加的各种扩展，支持各种形式的图片加载，如圆形、圆角、gif等

### BlurTransformation

Glide 支持高斯模糊的转换方式

### HeadIconBuilder

头像拼装，支持用不同数量的头像合并成一个新头像，一般用于群头像生成

### AudioTools

获取音频时长

### TextToImageUtils

- 文字生成图片
