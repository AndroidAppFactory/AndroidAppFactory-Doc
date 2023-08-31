# LibCustomView

![LibCustomView](https://img.shields.io/badge/AndroidAppFactory-LibCustomView-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibCustomView-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibCustomView)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-custom-view)](https://search.maven.org/artifact/com.bihe0832.android/lib-custom-view)

## 功能简介

一些基础的通用的自定义View

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-custom-view:+'
```

## 组件功能

### PlaceholderView

带Icon、以及两个Textview的全屏居中View组合，一般用户空页面的展示

### ViewWithBackground

- 支持通过xml 或者代码动态修改背景的View，支持动态的内容有：

    - bgtv_backgroundColor：背景色

    - bgtv_cornerRadius：圆角弧度,单位dp

    - bgtv_strokeWidth：圆角边框厚度,单位dp

    - bgtv_strokeColor：圆角边框颜色

    - bgtv_isRadiusHalfHeight：圆角弧度是高度一半

    - bgtv_isWidthHeightEqual：圆角矩形宽高相等,取较宽高中大值

### TextViewWithBackground

- 支持动态修改TextView背景，支持动态的内容有：

    - bgtv_backgroundColor：背景色

    - bgtv_cornerRadius：圆角弧度,单位dp

    - bgtv_strokeWidth：圆角边框厚度,单位dp

    - bgtv_strokeColor：圆角边框颜色

    - bgtv_isRadiusHalfHeight：圆角弧度是高度一半

    - bgtv_isWidthHeightEqual：圆角矩形宽高相等,取较宽高中大值

### TextViewWithBackgroundExt

- 基于Kotlin的扩展函数添加的 TextViewWithBackground 的扩展，使用 TextViewWithBackground 完成红点提醒的相关功能

### AccCircleProgress

- 圆环进度自定义View

### SlideFinishLayout

- 滑动解锁，此时整个UI右移

### SwipeMenuLayout

- 左滑删除

### SlideViewLayout

- 仿滑动解锁等滑动特效，仅内部LockBtn 在范围内滑动
