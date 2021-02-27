# LibInstall

![LibInstall](https://img.shields.io/badge/AndroidAppFactory-LibInstall-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibInstall-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibInstall)
[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-install/images/download.svg) ](https://bintray.com/bihe0832/android/lib-install/_latestVersion)

## 功能简介

应用安装，支持OBB, Split APK等各种格式

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-install:+'
```

## 组件功能

### InstallUtils

- 应用安装封装，建议安装包放在 ZixieFileProvider#getZixieFilePath 的子目录

- 支持OBB, Split APK等各种格式

- 支持超过2G的特殊安装包，或者已解压的安装文件目录