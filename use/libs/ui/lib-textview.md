# LibTextView

![LibTextView](https://img.shields.io/badge/AndroidAppFactory-LibTextView-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibTextView-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibTextView)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-textview) ](https://search.maven.org/artifact/com.bihe0832.android/lib-textview)


## 功能简介

TextView 相关的扩展集合

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-textview:+'
```

## 组件功能

### TextViewWithRedTips

- 支持红点及数字红点的Textview

### ExpandableTextView

- 可扩展TextView，用于扩展收起、展开、固定行尾字符等，具体的使用事例，可以参考 BaseTest 中 com.bihe0832.android.base.test.textview 下面的代码

#### CommentTextView

- 文末追加型Textview

#### FoldedTextView

- 收起展开型TextView

### TextViewExt

- 基于Kotlin的扩展函数添加的 TextView 的扩展，为 TextView 设置四边Drawable，设置可点击的文字内容
