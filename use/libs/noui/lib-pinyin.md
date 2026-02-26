# LibPinYin

![LibPinYin](https://img.shields.io/badge/AndroidAppFactory-LibPinYin-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibPinYin-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibPinYin)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-pinyin) ](https://search.maven.org/artifact/com.bihe0832.android/lib-pinyin)

## 功能简介

提供汉字转拼音功能，支持多种拼音格式（带声调、数字声调、无声调），支持多音字处理、词组拼音转换和拼音首字母提取。内置拼音字典和多音字词组字典，同时支持自定义扩展字典。

**核心特性：**
- 单个汉字转拼音（支持多音字）
- 字符串转拼音（自动处理多音字词组）
- 三种拼音格式：带声调符号、数字声调、无声调
- 拼音首字母提取
- 自动繁体转简体处理
- 支持自定义拼音字典和多音字词组字典

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-pinyin:+'
```

## 组件功能

### PinyinFormat

拼音格式枚举类，定义了三种拼音输出格式：

| 格式 | 说明 | 示例（"中"字） |
|------|------|---------------|
| `WITH_TONE_MARK` | 带声调符号 | zhōng |
| `WITH_TONE_NUMBER` | 数字代表声调 | zhong1 |
| `WITHOUT_TONE` | 不带声调 | zhong |

### PinYinWithTone

汉字转拼音的核心工具类，提供拼音转换、多音字判断、首字母提取等功能。

#### 初始化

使用前需要先初始化拼音字典：

```java
// 在应用启动时初始化（加载内置拼音字典和多音字词组字典）
PinYinWithTone.init(context);
```

#### 单个汉字转拼音

- **toPinYin(char c)** - 将单个汉字转换为带声调格式的拼音，返回拼音数组（多音字会返回多个拼音）
- **toPinYin(char c, PinyinFormat pinyinFormat)** - 将单个汉字转换为指定格式的拼音

```java
// 带声调符号（默认格式）
String[] pinyin = PinYinWithTone.toPinYin('中');
// 结果：["zhōng", "zhòng"]

// 数字声调格式
String[] pinyin = PinYinWithTone.toPinYin('中', PinyinFormat.WITH_TONE_NUMBER);
// 结果：["zhong1", "zhong4"]

// 无声调格式
String[] pinyin = PinYinWithTone.toPinYin('中', PinyinFormat.WITHOUT_TONE);
// 结果：["zhong"]
```

#### 字符串转拼音

- **toPinYin(String str, String separator, PinyinFormat pinyinFormat, boolean throwExceptionWhenBad)** - 将字符串转换为指定格式的拼音，自动处理多音字词组
- **toPinYin(String str, String separator, boolean throwExceptionWhenBad)** - 将字符串转换为带声调格式的拼音

```java
// 字符串转拼音（无声调，用空格分隔）
String pinyin = PinYinWithTone.toPinYin("中国人民", " ", PinyinFormat.WITHOUT_TONE, false);
// 结果："zhong guo ren min"

// 字符串转拼音（带声调符号，用横线分隔）
String pinyin = PinYinWithTone.toPinYin("你好世界", "-", true);
// 结果："nǐ-hǎo-shì-jiè"

// throwExceptionWhenBad 参数说明：
// true  - 遇到无法转换的字符时抛出 AAFException
// false - 遇到无法转换的字符时保留原字符
String pinyin = PinYinWithTone.toPinYin("Hello世界", " ", PinyinFormat.WITHOUT_TONE, false);
// 结果："H e l l o shi jie"
```

> **注意**：字符串转拼音时会自动将繁体字转换为简体字后再进行拼音转换。

#### 多音字判断

- **hasMultiPinyin(char c)** - 判断一个汉字是否为多音字

```java
boolean isMulti = PinYinWithTone.hasMultiPinyin('中');  // true
boolean isMulti = PinYinWithTone.hasMultiPinyin('国');  // false
```

#### 拼音首字母提取

- **getShortPinyin(String str, boolean throwExceptionWhenBad)** - 获取字符串中每个汉字对应拼音的首字母

```java
String shortPinyin = PinYinWithTone.getShortPinyin("中国人民", false);
// 结果："zgrm"

// 混合字符串（非汉字保留原字符）
String shortPinyin = PinYinWithTone.getShortPinyin("Hello世界", false);
// 结果："Hellosj"
```

#### 自定义字典扩展

支持添加自定义拼音字典和多音字词组字典，字典格式为 `key=value`：

- **addPinyinDict(String path)** - 从文件加载自定义拼音字典
- **addPinyinDict(Map<String, String> dict)** - 直接添加拼音字典映射
- **addMutilPinyinDict(String path)** - 从文件加载自定义多音字词组字典
- **addMutilPinyinDict(Map<String, String> dict)** - 直接添加多音字词组字典映射

```java
// 从文件加载自定义拼音字典
PinYinWithTone.addPinyinDict("/path/to/custom_pinyin.dict");

// 直接添加拼音映射
Map<String, String> customDict = new HashMap<>();
customDict.put("龘", "dá");
PinYinWithTone.addPinyinDict(customDict);

// 添加自定义多音字词组字典
PinYinWithTone.addMutilPinyinDict("/path/to/custom_mutil_pinyin.dict");
```

## 注意事项

1. **初始化时机**：使用拼音转换功能前，必须先调用 `PinYinWithTone.init(context)` 初始化字典
2. **繁体支持**：字符串转拼音时会自动进行繁体转简体处理，依赖 [LibChinese](lib-chinese.md) 组件
3. **非汉字处理**：当 `throwExceptionWhenBad` 为 `false` 时，非汉字字符会原样保留；为 `true` 时会抛出 `AAFException`
4. **多音字词组**：内置多音字词组字典，通过 Aho-Corasick 算法进行词组匹配，优先使用词组拼音
5. **字典格式**：自定义字典文件格式为每行一个 `key=value` 对

## 相关组件

- [LibChinese](lib-chinese.md) - 中文字符处理组件（简繁体转换、中文判断）
