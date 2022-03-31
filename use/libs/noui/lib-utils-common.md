# LibCommonUtils

![LibCommonUtils](https://img.shields.io/badge/AndroidAppFactory-LibCommonUtils-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibCommonUtils-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibCommonUtils)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-utils-common) ](https://search.maven.org/artifact/com.bihe0832.android/lib-utils-common)

## 功能简介

一些系统接口，由于 Android 版本的原因不在可以直接使用，直接引入相关源码

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-utils-common:+'
```

## 组件功能

### ReflecterHelper

- 基于状态机的 Java 反射工具类

### MathUtils    

- 最大值、最小值、随机数、随机区间获取

### KVPair

- 简单的 int-string 数据结构

### IdGenerator

- 基于 AtomicInteger 的 ID 自增封装

### DateUtil

- 各式时间转换，获取各种格式的时间，时间比较文字结果（几秒前，几分钟前）

### TimeUtil

- 各式时间转换，获取各种格式的时间，时间比较文字结果（几秒前，几分钟前）

### ConvertUtils

- 各种安全的类型转换，如 string -> int

- 数组、列表获取指定index的安全类型

### LimitedQueue

- 定长的先进先出数据队列