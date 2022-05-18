# LibDialog

![LibDialog](https://img.shields.io/badge/AndroidAppFactory-LibDialog-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibDialog-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibDialog)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-dialog)](https://search.maven.org/artifact/com.bihe0832.android/lib-dialog)


## 功能简介

自定义样式的对话框，包括通用的、带进度的、以及全屏非全屏的loading

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-dialog:+'
```

## 组件功能

### CommonDialog

- 通用弹框，所有组件显示可控，调用方式可以参考 `BaseTest` 里面的 `TestDialogFragment`，显示样式参考：

    <img src="./../noui/lib-debug.png"/>

### DownloadProgressDialog

- 带进度下载弹框，调用方式可以参考 `BaseTest` 里面的 `TestDialogFragment`，显示事例可以参考：

    <img src="./../../common/framework/update.png" />

### LoadingDialog

- Loading 对话框，分全屏和非全屏，调用方式可以参考 `BaseTest` 里面的 `TestDialogFragment`

### RadioDialog

- 支持单选框的Dialog，调用方式可以参考 `BaseTest` 里面的 `TestDialogFragment`，显示事例可以参考：

    <img src="./lib-dialog-radio.png" />

### PopMenu

    - 在指定View周围弹出一个带图标的菜单列表（类似右上角），调用方式可以参考 `BaseTest` 里面的 `TestTextView`

### PopupList

    - 长按以后，在上方弹出一排并排操作（类似微信长按消息内容），调用方式可以参考 `BaseTest` 里面的 `TestTextView`