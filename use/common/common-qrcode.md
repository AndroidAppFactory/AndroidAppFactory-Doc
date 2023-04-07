# CommonQRCode

![CommonQRCode](https://img.shields.io/badge/AndroidAppFactory-CommonQRCode-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonQRCode-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonQRCode)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-qrcode) ](https://search.maven.org/artifact/com.bihe0832.android/common-qrcode)

## 功能简介

二维码相关的功能库，主要包含二维码的升成、识别和扫描

## 组件使用

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-qrcode:+'
```

## 组件功能

### QrcodeUtils

包含二维码的生成、识别和扫描的API调用

### BaseCaptureActivity

二维码扫描的基础功能，没有整合权限相关的逻辑

### QrcodeScanActivity

二维码扫描的基础功能，整合了权限相关的逻辑，使用Tips 模式的权限提醒
