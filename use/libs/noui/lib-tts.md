# LibTTS

![LibTTS](https://img.shields.io/badge/AndroidAppFactory-LibTTS-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibTTS-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibTTS)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-tts) ](https://search.maven.org/artifact/com.bihe0832.android/lib-tts)


## 功能简介

基于 Android TextToSpeech 的语音合成组件封装，提供：

- 多种播放模式（顺序、插队、清空、立即播放）
- 语音参数配置（语速、音调、音量）
- 配置持久化
- TTS 引擎选择
- 语音保存到文件
- 播放状态监听

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-tts:+'
```

## 快速开始

### 初始化

```kotlin
// 使用系统默认 TTS 引擎
LibTTS.init(context, Locale.SIMPLIFIED_CHINESE, "", null)

// 指定 TTS 引擎（如 Google TTS）
LibTTS.init(context, Locale.SIMPLIFIED_CHINESE, "com.google.android.tts", null)

// 带初始化监听
LibTTS.init(context, Locale.SIMPLIFIED_CHINESE, "", object : TTSImpl.TTSInitListener {
    override fun onInitSuccess() {
        // 初始化成功
    }
    override fun onInitError() {
        // 初始化失败
    }
})
```

### 播放语音

```kotlin
// 创建 TTS 数据
val ttsData = TTSData("你好，世界")

// 顺序播放（添加到队列末尾）
LibTTS.speak(ttsData, TTSConfig.SPEEAK_TYPE_SEQUENCE)

// 插队播放（添加到队列头部）
LibTTS.speak(ttsData, TTSConfig.SPEEAK_TYPE_NEXT)

// 立即播放（打断当前播放）
LibTTS.speak(ttsData, TTSConfig.SPEEAK_TYPE_FLUSH)

// 清空队列后播放
LibTTS.speak(ttsData, TTSConfig.SPEEAK_TYPE_CLEAR)
```

### 带 Key 回调播放

```kotlin
// 播放时传入 Key，回调时会透传
LibTTS.speak("my_key", ttsData, TTSConfig.SPEEAK_TYPE_SEQUENCE)

// 添加播放监听
LibTTS.addTTSSpeakListener(object : TTSImplNotifyWithKey.TTSListener {
    override fun onStart(utteranceId: String, key: String) {
        // 开始播放，key = "my_key"
    }
    override fun onComplete(utteranceId: String, key: String) {
        // 播放完成
    }
    override fun onError(utteranceId: String, key: String) {
        // 播放出错
    }
})
```

## 播放类型

| 类型 | 常量 | 说明 |
|------|------|------|
| 顺序播放 | `SPEEAK_TYPE_SEQUENCE` (1) | 添加到队列末尾，按顺序播放 |
| 插队播放 | `SPEEAK_TYPE_NEXT` (2) | 添加到队列头部，下一个播放 |
| 立即播放 | `SPEEAK_TYPE_FLUSH` (3) | 打断当前播放，立即开始 |
| 清空播放 | `SPEEAK_TYPE_CLEAR` (4) | 清空队列后播放 |

## 参数配置

### 语速设置

```kotlin
// 获取当前语速
val rate = LibTTS.getConfigSpeechRate()

// 设置语速（1.0 为正常速度）
LibTTS.setSpeechRate(1.2f)

// 获取默认语速
val defaultRate = LibTTS.getDefaultSpeechRate()
```

### 音调设置

```kotlin
// 获取当前音调
val pitch = LibTTS.getConfigPitch()

// 设置音调（1.0 为正常音调）
LibTTS.setPitch(1.1f)

// 获取默认音调
val defaultPitch = LibTTS.getDefaultPitch()
```

### 音量设置

```kotlin
// 获取当前音量
val volume = LibTTS.getConfigVoiceVolume()

// 设置音量
LibTTS.setVoiceVolume(80)
```

## 其他功能

### 状态查询

```kotlin
// 是否正在播放
val isSpeaking = LibTTS.isSpeaking()

// 是否还有待播放的语音
val hasMore = LibTTS.hasMoreSpeak()
```

### 控制播放

```kotlin
// 停止当前播放
LibTTS.stopSpeak()

// 强制停止并清空队列
LibTTS.forceStop()

// 开始播放队列
LibTTS.startSpeak()
```

### 保存到文件

```kotlin
val ttsData = TTSData("要保存的文本")
LibTTS.save(ttsData, "/path/to/output.wav")
```

### 引擎管理

```kotlin
// 获取可用引擎列表
val engines = LibTTS.getEngines()

// 获取默认引擎
val defaultEngine = LibTTS.getDefaultEngine()
```

### 资源释放

```kotlin
// 销毁 TTS 实例
LibTTS.onDestroy()
```

## TTSData 高级用法

```kotlin
val ttsData = TTSData("你好，世界")

// 添加自定义参数
ttsData.addSpeakParams(Bundle().apply {
    putFloat(TextToSpeech.Engine.KEY_PARAM_VOLUME, 0.8f)
})
```

## 注意事项

1. **引擎选择**：建议使用空字符串让系统选择默认引擎，避免指定不存在的引擎导致初始化失败
2. **内存管理**：组件内部使用 ApplicationContext，无需担心 Activity 泄漏
3. **配置持久化**：语速、音调、音量等配置会自动持久化
4. **线程安全**：播放相关方法已做同步处理
