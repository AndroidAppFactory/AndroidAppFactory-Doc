# LibGson

![LibGson](https://img.shields.io/badge/AndroidAppFactory-LibGson-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibGson-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibGson)
[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-gson/images/download.svg) ](https://bintray.com/bihe0832/android/lib-gson/_latestVersion)

## 功能简介

基于Gson封装的Json数据结构类型安全的转换方法

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-gson:+'
```

## 组件功能

### JsonHelper

- 将Json结构，按照转换为指定的数据类型

- 将指定的数据结构转为Json

- 支持解析指定类型的Json列表

- 对于类型错误的数据格式自动兼容，例如 可以支持将 String 安全转换为基本数据类型（例如 "1" 转为 Int 类型的 1），转换底层使用 [LibCommonUtils](./lib-utils-common.md) 提供的 ConvertUtils

- 对于特殊字段，支持不解析，直接返回String（Gson）添加 ` @JsonAdapter(RawStringJsonAdapter.class)` 设置字段不解析。例如：

```java
public class JsonTest {

	@SerializedName("key")
	private int key;

	@SerializedName("value")
	@JsonAdapter(RawStringJsonAdapter.class)
	private String data = "";

	public int getKey(){
		return key;
	}

	public void setKey(int key) {
		this.key = key;
	}
}
```

