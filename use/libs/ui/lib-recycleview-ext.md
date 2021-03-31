# LibRecycleviewExt

![LibRecycleviewExt](https://img.shields.io/badge/AndroidAppFactory-LibRecycleviewExt-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibRecycleviewExt-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibRecycleviewExt)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-recycleview-ext)](https://search.maven.org/artifact/com.bihe0832.android/lib-recycleview-ext)

## 功能简介

基于 [LibAdapter](./lib-adapter.md) 的列表的扩展，例如计算当前激活的元素、设置边距等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-recycleview-ext:+'
```

## 组件功能

### GridDividerItemDecoration

- 在Recycleview的不同元素之间添加分割边框，可以控制不同方向的边框大小及显示与隐藏

### MyEasyRefreshLayout

- 基于 参考[LibRefresh](./lib-refresh.md) 中提供的下拉刷新二次封装的通用Recycleview的下拉刷新

### SafeGridLayoutManager、SafeLinearLayoutManager

- 为了方便计算Recycleview，对标准LayoutManager 的 supportsPredictiveItemAnimations 做了重写

### RecyclerViewItemActiveHelper

- 计算获取当前可见区域内首个或者最后一个可见、完整可见等情况下的元素，对应的 Recycleview 需要使用上面的LayoutManager


