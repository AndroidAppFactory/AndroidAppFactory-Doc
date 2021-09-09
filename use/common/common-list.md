# CommonList

![CommonList](https://img.shields.io/badge/AndroidAppFactory-CommonList-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonList-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonList)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-list) ](https://search.maven.org/artifact/com.bihe0832.android/common-list)

## 功能简介

基于公共框架的通用列表页面，列表样式

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-list:+'
```

## 组件功能

### BaseListActivity & BaseListFragment

一款通用的包含一个recycleView的列表页，目前支持：下拉刷新、加载更多、添加header、列表为空展示空页面等

### CardItemForCommonList

BaseListActivity & BaseListFragment 中的UI卡片的数据结构

### CommonListActivity & CommonListFragment

对于 BaseListActivity & BaseListFragment 的进一步封装，分别使用了LibRefresh 提供的两种下拉刷新方式

使用事例，可以参照：https://github.com/bihe0832/AndroidAppFactory/tree/master/BaseTest/src/main/java/com/bihe0832/android/base/test/card/