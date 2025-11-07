# LibChinese

![LibChinese](https://img.shields.io/badge/AndroidAppFactory-LibChinese-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibChinese-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibChinese)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-chinese) ](https://search.maven.org/artifact/com.bihe0832.android/lib-chinese)

## 功能简介

提供中文字符处理功能，支持简繁体转换、中文字符判断等操作
 
## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-chinese:+'
```

## 组件功能

### ChineseHelper

中文字符处理的核心工具类

#### 初始化

```java
// 在应用启动时初始化中文字典
ChineseHelper.init(context);

// 可选：添加自定义字典文件
ChineseHelper.addChineseDict(dictPath);
```

#### 简繁体转换

- **convertToSimplifiedChinese(char c)** - 单个繁体字转简体字
- **convertToSimplifiedChinese(String str)** - 繁体字符串转简体字符串
- **convertToTraditionalChinese(char c)** - 单个简体字转繁体字
- **convertToTraditionalChinese(String str)** - 简体字符串转繁体字符串

#### 字符判断

- **isChinese(char c)** - 判断字符是否为中文
- **isTraditionalChinese(char c)** - 判断字符是否为繁体字
- **containsChinese(String str)** - 判断字符串是否包含中文

#### 使用示例

```java
// 简繁体转换
String simplified = ChineseHelper.convertToSimplifiedChinese("繁體字");
String traditional = ChineseHelper.convertToTraditionalChinese("简体字");

// 字符判断
boolean isChinese = ChineseHelper.isChinese('中');
boolean hasChineseChar = ChineseHelper.containsChinese("Hello 世界");
```