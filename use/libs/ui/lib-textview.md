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

### ExpandableTextView

- 可扩展TextView，用于扩展收起、展开、固定行尾字符等，具体的使用事例，可以参考 BaseTest 中 com.bihe0832.android.base.test.textview 下面的代码。支持自定义的内容有：

    - etv_MaxLinesOnShrink: 收缩时的最大行数 

    - etv_EllipsisHint：省略符号，默认为 to_ellipsis_hint

    - etv_EllipsisHintShow: 否显示缩略的文案

    - etv_ToExpandHint: 展开的文案，默认为 to_expand_hint

    - etv_ToExpandHintColor: 展开文案的颜色

    - etv_ToExpandHintShow: 是否显示展开的文案

    - etv_ToExpandTypeface: 展开文案的效果

    - etv_ToShrinkHint: 收缩的文案，默认为 to_shrink_hint

    - etv_ToShrinkHintColor: 收起文案的颜色

    - etv_ToShrinkHintShow: 是否显示收缩的文案

    - etv_ToShrinkTypeface: 收缩文案的效果

    - etv_EnableToggle: 点击文本主体是否支持切换

    - etv_InitState:文案的初始状态

#### CommentTextView

- 基于 ExpandableTextView 优化的文末追加型Textview

#### FoldedTextView

- 基于 ExpandableTextView 优化的收起展开型TextView

### TextViewWithHTML

- 默认就支持HTML的TextView

### TextViewExt

- 基于Kotlin的扩展函数添加的 TextView 的扩展，为 TextView 设置四边Drawable，设置可点击的文字内容

#### TextView 扩展

通过 TextView 的基础扩展，可以更方便的展示更复杂的文字组合

- ZixieTextClickableSpan：点击区扩展

- ZixieTextImageSpan：图标扩展

- ZixieTextRadiusBackgroundSpan：圆角背景、文字边框等扩展
