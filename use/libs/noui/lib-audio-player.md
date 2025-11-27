# LibAudioPlayer

![LibAudioPlayer](https://img.shields.io/badge/AndroidAppFactory-LibAudioPlayer-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibAudioPlayer-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAudioPlayer)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-audio-player) ](https://search.maven.org/artifact/com.bihe0832.android/lib-audio-player)

## 功能简介

基于 SoundPool 封装的音频播放组件，专注于短音效播放。

**核心特性：**
- 短音效播放（适合 < 1MB 的音频文件）
- 支持文件路径和资源 ID
- 音量和播放速度控制
- 循环播放支持
- 简单易用的 API

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-audio-player:+'
```

## 组件功能

### AudioPlayerManager

音频播放管理器，基于 SoundPool 封装。

**核心功能：**
- 添加并播放音频
- 支持文件路径和资源 ID
- 支持设置音量和播放速度
- 支持循环播放

**使用示例：**

```kotlin
// 1. 播放资源文件中的音频
AudioPlayerManager.playAudio(context, R.raw.notification_sound)

// 2. 播放本地文件
AudioPlayerManager.playAudio(context, "/sdcard/audio.mp3")

// 3. 设置音量和速度
AudioPlayerManager.playAudio(
    context = context,
    audioPath = "/sdcard/music.mp3",
    volume = 0.8f,   // 音量 0.0-1.0
    rate = 1.5f      // 播放速度 0.5-2.0
)

// 4. 循环播放
AudioPlayerManager.playAudio(
    context = context,
    resId = R.raw.background_music,
    loop = true      // 循环播放
)

// 5. 停止播放
AudioPlayerManager.stop()

// 6. 释放资源
AudioPlayerManager.release()
```

## 最佳实践

### 1. 播放短音效

```kotlin
// 适用于通知音、按键音等短音效
AudioPlayerManager.playAudio(context, R.raw.click_sound)
```

### 2. 背景音乐

```kotlin
// 循环播放背景音乐
AudioPlayerManager.playAudio(
    context = context,
    resId = R.raw.background_music,
    volume = 0.5f,
    loop = true
)

// 停止背景音乐
AudioPlayerManager.stop()
```

### 3. 资源释放

```kotlin
// Activity/Fragment onDestroy()
override fun onDestroy() {
    super.onDestroy()
    AudioPlayerManager.release()
}
```

## 注意事项

1. **SoundPool 限制**：适合播放短音效（< 1MB），不适合长音乐
2. **音频格式**：支持 MP3、WAV、OGG 等常见格式
3. **资源释放**：使用完毕后及时调用 `release()` 释放资源
4. **音量范围**：音量参数范围 0.0-1.0
5. **播放速度**：速度参数范围 0.5-2.0

## 相关组件

- [LibAudio](lib-audio.md) - 音频基础工具库
- [LibAudioRecord](lib-audio-record.md) - 音频录制组件

