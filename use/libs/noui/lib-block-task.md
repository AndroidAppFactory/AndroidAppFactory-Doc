# LibBlockTask

![LibBlockTask](https://img.shields.io/badge/AndroidAppFactory-LibBlockTask-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibBlockTask-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibBlockTask)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-block-task) ](https://search.maven.org/artifact/com.bihe0832.android/lib-block-task)

## 功能简介

通用的具有优先级的阻塞队列实现

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-block-task:+'
```

## 组件功能

### PriorityBlockTaskManager

基于优先级的阻塞队列的管理实例，添加任务以后，会按照优先级和添加顺序逐个执行

### DependenceBlockTaskManager

基于依赖顺序的阻塞队列的管理实例，添加任务以后，会按照依赖关系和添加顺序逐个执行

### BaseAAFBlockTask

阻塞队列的任务实例，

### DependenceBlockTask

基于依赖顺序的阻塞队列的单个任务定义
