# LibColor

![LibColor](https://img.shields.io/badge/AndroidAppFactory-LibColor-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibColor-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibColor)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-color) ](https://search.maven.org/artifact/com.bihe0832.android/lib-color)

## 功能简介

颜色转化的各种封装，以及一个简单的颜色选择框和颜色选择UI

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-color:+'
```

## 组件功能

具体事例可以参考代码：[https://github.com/AndroidAppFactory/AndroidAppFactory/blob/master/BaseDebug/src/main/java/com/bihe0832/android/base/debug/color/DebugColorFragment.kt](https://github.com/AndroidAppFactory/AndroidAppFactory/blob/master/BaseDebug/src/main/java/com/bihe0832/android/base/debug/color/DebugColorFragment.kt)

### ColorUtils

- 颜色的转化（int、RGB、16进制转化等）、颜色的深度、亮度提取、颜色的某个色彩通道值获取等

### ColorDialogUtils

- 通用简单的颜色选择对话框

### ColorWheelPickerView

- 轮盘颜色取色器

### ColorRingPickerView

- 色环颜色取色器
