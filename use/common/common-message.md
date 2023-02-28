# CommonMessage

![CommonMessage](https://img.shields.io/badge/AndroidAppFactory-CommonMessage-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-CommonMessage-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/CommonMessage)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-message) ](https://search.maven.org/artifact/com.bihe0832.android/common-message)

## 功能简介

消息公告模块，基于LibDialog，目前共有四种类型，如下图，依次为文本消息、图片消息、Web全屏消息、应用下载消息。目前仅提供数据通道，暂不提供消息中心的UI样式。使用示例可以参考：DebugMessageFragment

#### 消息特性

对于所有的消息我们支持以下特性：

1. 消息置顶
2. 对于文本和图片消息，支持跳转（可以通过shame跳转到APP内指定页面）
3. 在通知栏同步通知，且点击可跳转（配置了跳转的shame的跳转到对应schema，否则跳转首页）
4. 消息过期时间设置（当为-1，永不过期）
5. 支持拍脸公告（可以设定次数）
6. 记录展示时间、是否删除、是否已读等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:common-message:+'
```

## 组件功能

### MessageInfoItem

- 消息的数据结构

### MessageManager

消息通知的管理类，需要提前初始化
