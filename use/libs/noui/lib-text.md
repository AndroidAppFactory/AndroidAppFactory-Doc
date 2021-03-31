# LibText

![LibText](https://img.shields.io/badge/AndroidAppFactory-LibText-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibText-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibText)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-text) ](https://search.maven.org/artifact/com.bihe0832.android/lib-text)

## 功能简介

文字处理的基础工具库，入分割字符串，特殊字符串等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-text:+'
```

## 组件功能

### TextFactoryUtils

- 过滤字符串收尾的空格、引号

- 根据指定分隔符，将字符串分割为字符数组

- 返回指定长度的随机字符串

- 返回 String 的 UTF8 格式的 Byte 数组

- 返回基于 HTML 格式化的 CharSequence（支持带点击回调），支持的HTML标签，可以参考文章 [Android Textview 对HTML 的支持](https://blog.bihe0832.com/android-textview-html.html)