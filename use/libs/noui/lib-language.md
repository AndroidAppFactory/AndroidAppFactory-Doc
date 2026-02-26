# LibLanguage

![LibLanguage](https://img.shields.io/badge/AndroidAppFactory-LibLanguage-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibLanguage-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibLanguage)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-language) ](https://search.maven.org/artifact/com.bihe0832.android/lib-language)

## 功能简介

提供应用多语言切换能力，支持获取系统语言、设置/读取应用语言配置、动态更新页面语言资源，适用于需要应用内切换语言的场景。语言配置通过 SharedPreferences 持久化存储。

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-language:+'
```

## 组件功能

### MultiLanguageHelper

多语言管理的核心工具类（单例对象），提供语言配置的读写、页面语言资源更新、系统语言获取等功能。

#### 更新页面语言资源

- **modifyContextLanguageConfig(context: Context): Context** - 使用已保存的语言配置更新当前页面的语言资源，返回更新后的 Context
- **modifyContextLanguageConfig(context: Context, locale: Locale): Context** - 使用指定的 Locale 更新当前页面的语言资源，返回更新后的 Context
- **modifyContextLanguageConfig(resources: Resources, locale: Locale)** - 直接更新 Resources 的语言配置

#### 获取语言信息

- **getSystemLocale(): Locale** - 获取当前系统语言，如获取失败则默认返回英文（Locale.ENGLISH）
- **getContextLocale(context: Context): Locale** - 获取指定 Context 当前使用的 Locale
- **getLanguageConfig(context: Context): Locale** - 获取应用保存的语言配置，如未设置过则返回系统语言

#### 设置语言配置

- **setLanguageConfig(context: Context, locale: Locale): Boolean** - 保存应用语言配置到 SharedPreferences，返回是否保存成功

#### 获取指定语言的 Resources

- **getResources(context: Context, locale: Locale): Resources** - 获取指定 Locale 对应的 Resources 对象
- **getRealResources(context: Context): Resources** - 获取应用已保存语言配置对应的 Resources 对象

#### 使用示例

```kotlin
// 在 Application 或 BaseActivity 的 attachBaseContext 中更新语言配置
override fun attachBaseContext(newBase: Context) {
    super.attachBaseContext(MultiLanguageHelper.modifyContextLanguageConfig(newBase))
}

// 获取当前系统语言
val systemLocale = MultiLanguageHelper.getSystemLocale()

// 设置应用语言为简体中文
MultiLanguageHelper.setLanguageConfig(context, Locale.SIMPLIFIED_CHINESE)

// 使用新语言配置更新当前页面
MultiLanguageHelper.modifyContextLanguageConfig(context)

// 获取指定语言的资源（例如获取英文资源中的字符串）
val enResources = MultiLanguageHelper.getResources(context, Locale.ENGLISH)
val enString = enResources.getString(R.string.app_name)
```
