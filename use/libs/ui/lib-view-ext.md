# LibViewExt

![LibViewExt](https://img.shields.io/badge/AndroidAppFactory-LibViewExt-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibViewExt-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibViewExt)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-view-ext)](https://search.maven.org/artifact/com.bihe0832.android/lib-view-ext)

## 功能简介

基于kotlin的扩展函数，对于基础 view 的一些功能扩展，例如设置高度，获取view对应的 bitmap 等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-view-ext:+'
```

## 组件功能

### 通用资源定义

    定义了 state_checked、state_pressed、state_focused等资源样式

### EditTextExt

- 基于Kotlin的扩展函数添加的 EditText 的扩展，设置EditView是否可编辑

### ListViewExt

- 基于Kotlin的扩展函数添加的 EditText 的扩展，根据listview的item个数得到其全部显示时的高度

### ViewExt

- 基于Kotlin的扩展函数添加的 View 的扩展，支持设置View的宽高、旋转角度、获取View附着的Activity等

### DrawableFactory

- 一些常见的背景颜色等的代码实现，减少xml形式的Drawable的使用，核心就是 GradientDrawable

### ViewCaptureLayout

- 此View 即是不添加到屏幕也可以生成Bitmap，对于View 生成图片的情况，可以使用该View
