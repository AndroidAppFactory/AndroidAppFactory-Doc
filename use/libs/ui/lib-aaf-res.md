# LibAAFResource

![LibAAFResource](https://img.shields.io/badge/AndroidAppFactory-LibAAFResource-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibAAFResource-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAAFResource)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-aaf-res) ](https://search.maven.org/artifact/com.bihe0832.android/lib-aaf-res)

## 功能简介

AAF 所有资源的通用定义，当想更换主题时，使用该模块里面的资源替换即可实现基础的换肤功能
 
## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-aaf-res:+'
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
