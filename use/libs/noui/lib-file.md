# LibFile

![LibFile](https://img.shields.io/badge/AndroidAppFactory-LibFile-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibFile-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibFile)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-file) ](https://search.maven.org/artifact/com.bihe0832.android/lib-file)

## 功能简介

提供Provider的方式访问文件以及对于文件的一些基本操作，例如获取文件名，扩展名等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-file:+'
```

## 组件功能

### FileUtils

- 文件及文件夹操作

- 检查文件是否存在、检查并创建多层级文件夹，检查外部存储卡权限

- 获取文件长度、读取文件内容（支持Gzip）、使用系统文档查看器打开文件、获取文件MD5，根据路径获取文件名称、扩展名

- 删除文件或文件夹、高速复制文件或文件夹

- 使用手机上的第三方应用查看或者分享指定文件

### ZixieFileProvider

- 封装的文件访问用的Provider

- 获取 FileProvider 对应文件地址、路径、根据文件生成对应的URI