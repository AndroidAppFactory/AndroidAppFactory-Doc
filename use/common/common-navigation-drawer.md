# CommonNavigationDrawer

![CommonNavigationDrawer](https://img.shields.io/badge/AndroidAppFactory-CommonNavigationDrawer-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonNavigationDrawer-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonNavigationDrawer)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-navigation-drawer) ](https://search.maven.org/artifact/com.bihe0832.android/common-navigation-drawer)

## 功能简介

基于公共框架的协程相关处理

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-navigation-drawer:+'
```

## 组件功能

### NavigationDrawerFragment

NavigationDrawer 的基类，业务的NavigationDrawer 只需要继承它然后直接写自己的内部业务逻辑即可

### CommonActivityWithNavigationDrawer

通用集成了NavigationDrawerFragment 的activity，并且支持icon 红点

### CommonNavigationDrawerFragment

通用的 NavigationDrawerFragment

### CommonNavigationContentFragment

对 NavigationDrawerFragment 封装为一个列表，方便调用
