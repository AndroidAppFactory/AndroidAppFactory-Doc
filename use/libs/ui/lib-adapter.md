# LibAdapter

![LibAdapter](https://img.shields.io/badge/AndroidAppFactory-LibAdapter-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibAdapter-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAdapter)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-adapter) ](https://search.maven.org/artifact/com.bihe0832.android/lib-adapter)

## 功能简介

一个更丰富和强大的RecyclerAdapter框架，可以支持：
	
- 支持一个RecycleView支持多种Item样式

- 添加头部、尾部、空页面

- 自动加载更多等
	
对应GitHub为：[https://github.com/CymChad/BaseRecyclerViewAdapterHelper](https://github.com/CymChad/BaseRecyclerViewAdapterHelper)

目前已经进行了二次封装，使用方法可以参考`TestCardActivity`。**建议后续RecycleView都使用该Adapter**。

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-adapter:+'
```

## 组件功能

### CardBaseAdapter

- 通用的RecycleView Adapter的基类

### CardBaseHolder

-  所有卡片的Holder都继承自该类并实现对应的view查找和内容填充

### CardBaseModule

- 所有卡片对应的数据都继承自该类

## 特殊用法（示例仅供参考）

- 根据位置，获取对应的ViewHolder:

```
	mRecyclerView.findViewHolderForAdapterPosition(newposition)?.let {viewHolder ->
		ZixieContext.showDebug("Test onActive:" + viewHolder.javaClass.name)
	}
```

- 根据位置，修改数据并且直接刷新UI:

```
	mRecyclerView.findViewHolderForAdapterPosition(newposition)?.let {viewHolder ->
		(mAdapter.data[newposition] as CardBaseModule ).apply{

		}.let{
			(viewHolder as CardBaseHolder).initData(mAdapter.data[newposition])
		}
	}
```

- 根据特征值获取位置后，修改数据并且直接刷新UI，示例来自：https://github.com/bihe0832/AndroidAppFactory/blob/master/CommonAbout/src/main/java/com/bihe0832/android/common/about/AboutFragment.kt

```
	var position: Int = -1
	val title = context?.resources?.getString(R.string.settings_update_title)
	for (i in mAdapter.data.indices) {
		if (mAdapter.data[i] is SettingsData && title == (mAdapter.data[i] as? SettingsData)?.mItemText) {
			position = i
			break
		}
	}

	if (position >= 0) {
		(mAdapter.data[position] as? SettingsData)?.apply {
			if (null != cloud && cloud.updateType > UpdateDataFromCloud.UPDATE_TYPE_HAS_NEW_JUMP) {
				mTipsText = context?.resources?.getString(R.string.settings_update_tips)
						?: ""
				mItemIsNew = true
			} else {
				mTipsText = ""
				mItemIsNew = false
			}
		}?.let { newData ->
			mRecyclerView?.findViewHolderForAdapterPosition(position).let { viewHolder ->
				(viewHolder as? CardBaseHolder)?.initData(newData)
			}
		}
	}
```
