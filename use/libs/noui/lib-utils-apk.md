# LibAPK

![LibAPK](https://img.shields.io/badge/AndroidAppFactory-LibAPK-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibAPK-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAPK)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-utils-apk) ](https://search.maven.org/artifact/com.bihe0832.android/lib-utils-apk)


## 功能简介

检查应用安装，获取应用数据，打开APP等发送各类Intent

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-utils-apk:+'
```

## 组件功能

### APKUtils

- 获取APP版本号、版本名、应用名称、应用Icon

- 获取当前手机已安装应用列表、获取应用安装信息

- 基于包名、包名 + 闪屏、Intent 拉起应用，未安装，使用 [LibToast](./../ui/lib-toast.md#toastutils) 提供的功能 提示

- 检查应用进程是否被杀，Android Q 以后不可用

- 获取应用签名文件的MD5、指纹

### IntentUtils

- 根据第三方 Schema 拉起应用 

- 使用系统浏览器打开网址

- 启动一个Intent（新建Task方式）

- 打开应用的指定设置（兼容MIUI、魅族、华为）、如果应用没有，打开手机的指定设置

- 分享文本信息
