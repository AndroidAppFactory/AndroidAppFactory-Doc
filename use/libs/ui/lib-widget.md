# LibWidget

![LibWidget](https://img.shields.io/badge/AndroidAppFactory-LibWidget-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibWidget-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibWidget)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-widget)](https://search.maven.org/artifact/com.bihe0832.android/lib-widget)

## 功能简介

对桌面微件及小组件优化，支持当前应用的所有微件可以相互触发更新等逻辑

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-widget:+'
```

## 组件功能

### BaseWidgetProvider

- 所有 AppWidgetProvider 的基类，包含了对添加、移除、更新、通用广播等逻辑

### BaseWidgetWorker

- 所有 AppWidgetProvider 的UI 更新任务的基类，包含了对添加、移除、更新、通用广播等逻辑

### WidgetUpdateManager

- 所有 AppWidgetProvider 相关的更新处理逻辑

### WidgetSelectDialog

- 应用内弹框列出应用内支持的所有微件，支持长按直接添加，不需通过主屏幕

### WidgetTools

- 检查微件是否添加、选择微件、添加到主屏幕等方法
