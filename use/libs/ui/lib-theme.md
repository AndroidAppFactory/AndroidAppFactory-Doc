# LibAAF

![LibAAF](https://img.shields.io/badge/AndroidAppFactory-LibAAF-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibAAF-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAAF)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-aaf-tools) ](https://search.maven.org/artifact/com.bihe0832.android/lib-aaf-tools)

## 功能简介

AAFException 等AAF的通用定义
 
## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-aaf-tools:+'
```

## 组件功能

目前支持的属性包括：

- background
- src
- textColor
- bgtv_backgroundColor
- bgtv_strokeColor
- tint
- string

### ThemeResourcesManager

- 获取当前主题的颜色、图标、背景等信息

### ThemeManager

- 主题获取、安装、切换，可通过 ThemeChangedLiveData 通知
