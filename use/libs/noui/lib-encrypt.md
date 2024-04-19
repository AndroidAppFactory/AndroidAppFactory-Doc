# LibEncrypt

![LibEncrypt](https://img.shields.io/badge/AndroidAppFactory-LibEncrypt-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibEncrypt-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibEncrypt)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-encrypt) ](https://search.maven.org/artifact/com.bihe0832.android/lib-encrypt)


## 功能简介

AES加密，MD5计算，进制转化

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-encrypt:+'
```

## 组件功能

### AESUtils

- 各种类型的AES（自定义向量或无向量加密）计算，结果支持返回Base64、16进制字符串等

### GzipUtils

- Gzip 的压缩与解压

###  HexUtils

- 十六进制转换
    
### MD5

- 计算内容的MD5，支持文本、文件（全文、指定片段）、字符数组、输入流  

### SHA256

- 计算内容的SHA256，支持文本、文件（全文、指定片段）、字符数组、输入流  

### MessageDigestUtils

- 通用的MessageDigest，MD5、SHA256底层都是调用它

### RSAUtils

- RSA 加解密，支持"RSA/ECB/OAEPWithSHA-256AndMGF1Padding"、"RSA/ECB/PKCS1Padding" 等

### AESKeyStoreUtils

- 基于系统提供的利用 Android Keystore 生成秘钥的 AES 加解密

### RSAKeyStoreUtils

- 基于系统提供的利用 Android Keystore 生成秘钥的 RSA 加解密

### CompressionUtils

- 字符数组的压缩与解压缩
