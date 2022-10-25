# LibDataCenter

![LibDataCenter](https://img.shields.io/badge/AndroidAppFactory-LibDataCenter-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibDataCenter-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibDataCenter)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-data-center) ](https://search.maven.org/artifact/com.bihe0832.android/lib-data-center)

## 功能简介

基于公共框架的数据中心，支持数据缓存

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-data-center:+'
```

## 组件功能

### InfoCacheManager

数据缓存的基础类，定义了远程数据拉取方式、本地数据缓存时间长短等，支持协程