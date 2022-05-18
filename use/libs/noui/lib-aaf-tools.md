# LibAAF

![LibAAF](https://img.shields.io/badge/AndroidAppFactory-LibAAF-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibAAF-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAAF)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-aaf-tools) ](https://search.maven.org/artifact/com.bihe0832.android/lib-aaf-tools)

## 功能简介

AAFException 等AAF的通用定义
 
## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-aaf-tools:+'
```

## 组件功能

### AAFException

- AAF 相关的异常

### AAFDataCallback

- AAF 通用的数据回调

```
    class AAFDataCallback<T> {
        fun onError(errorCode: kotlin.Int, msg: kotlin.String)
        fun onSuccess(result: T?)
    }
```
