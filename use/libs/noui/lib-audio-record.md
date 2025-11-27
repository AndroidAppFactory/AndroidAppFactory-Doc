# LibAudioRecord

![LibAudioRecord](https://img.shields.io/badge/AndroidAppFactory-LibAudioRecord-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibAudioRecord-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAudioRecord)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-audio-record) ](https://search.maven.org/artifact/com.bihe0832.android/lib-audio-record)

## 功能简介

基于 AudioRecord 封装的音频录制组件，提供完整的录音功能和数据处理。

**核心特性：**
- 录音控制（开始、暂停、恢复、停止）
- 实时音频数据回调
- 自动保存为 WAV 文件
- 前台服务保活支持
- 录音状态监听

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-audio-record:+'
```

## 组件功能

### AudioRecordManager

音频录制管理器，提供完整的录音功能。

**核心功能：**
- 录音状态管理
- 音频数据实时回调
- 自动生成 WAV 文件
- 支持前台服务保活

**使用示例：**

```kotlin
// 1. 初始化录音管理器
val audioRecordManager = AudioRecordManager().apply {
    // 配置录音参数
    val config = AudioRecordConfig(
        MediaRecorder.AudioSource.MIC,
        16000,  // 16kHz 采样率
        1,      // 单声道
        AudioFormat.ENCODING_PCM_16BIT
    )
    setAudioRecordConfig(config)
    
    // 设置音频数据回调
    setAudioChunkPreparedListener { audioChunk ->
        // 处理实时音频数据
        val pcmData = audioChunk.pcmData
        val size = audioChunk.size
        // 可用于实时语音识别等
    }
}

// 2. 开始录音
audioRecordManager.start(
    savePath = "/sdcard/recording.wav",  // WAV 文件保存路径
    useForeground = true                  // 使用前台服务保活
)

// 3. 暂停录音
audioRecordManager.pause()

// 4. 恢复录音
audioRecordManager.resume()

// 5. 停止录音
audioRecordManager.stop()

// 6. 释放资源
audioRecordManager.release()
```

### AudioRecordFile

简化的录音文件工具类，快速录制音频文件。

**使用示例：**

```kotlin
// 1. 创建录音对象
val audioRecordFile = AudioRecordFile()

// 2. 开始录音（使用默认配置）
audioRecordFile.start("/sdcard/recording.wav")

// 3. 停止录音
audioRecordFile.stop()

// 4. 自定义配置录音
val config = AudioRecordConfig(
    MediaRecorder.AudioSource.VOICE_RECOGNITION,
    16000,
    1,
    AudioFormat.ENCODING_PCM_16BIT
)
audioRecordFile.startWithConfig("/sdcard/asr_recording.wav", config)
```

### AAFAudioTools

音频录制辅助工具类。

**功能：**
- 获取最小缓冲区大小
- 检查录音权限
- 音频格式转换

**使用示例：**

```java
// 获取最小缓冲区大小
int bufferSize = AAFAudioTools.getMinBufferSize(
    16000,                              // 采样率
    AudioFormat.CHANNEL_IN_MONO,       // 声道配置
    AudioFormat.ENCODING_PCM_16BIT     // 音频格式
);

// 检查录音权限
if (AAFAudioTools.hasRecordPermission(context)) {
    // 开始录音
}
```

## 录音状态管理

### 录音状态

| 状态 | 说明 |
|------|------|
| `IDLE` | 空闲状态 |
| `RECORDING` | 正在录音 |
| `PAUSED` | 已暂停 |
| `STOPPED` | 已停止 |

### 状态监听

```kotlin
audioRecordManager.setRecordStatusListener { status ->
    when (status) {
        RecordStatus.IDLE -> {
            // 空闲状态
        }
        RecordStatus.RECORDING -> {
            // 正在录音
        }
        RecordStatus.PAUSED -> {
            // 已暂停
        }
        RecordStatus.STOPPED -> {
            // 已停止
        }
    }
}
```

## 音频数据处理

### 实时数据回调

```kotlin
audioRecordManager.setAudioChunkPreparedListener { audioChunk ->
    // PCM 数据
    val pcmData: ByteArray = audioChunk.pcmData
    
    // 数据大小
    val size: Int = audioChunk.size
    
    // 时间戳
    val timestamp: Long = audioChunk.timestamp
    
    // 处理音频数据（如实时语音识别）
    processAudioData(pcmData, size)
}
```

### 数据格式

- **AudioChunk**：音频数据块
  - `pcmData`: PCM 原始音频数据
  - `size`: 数据大小（字节）
  - `timestamp`: 时间戳

## 前台服务保活

```kotlin
// 启用前台服务保活
audioRecordManager.start(
    savePath = "/sdcard/recording.wav",
    useForeground = true  // 启用前台服务
)

// 前台服务会显示通知，防止录音被系统杀死
```

**注意事项：**
- 需要在 AndroidManifest.xml 中声明前台服务权限
- Android 9.0+ 需要 `FOREGROUND_SERVICE` 权限
- 会显示常驻通知

## 最佳实践

### 1. 语音识别录音

```kotlin
val asrRecorder = AudioRecordManager().apply {
    val config = AudioRecordConfig(
        MediaRecorder.AudioSource.VOICE_RECOGNITION,
        16000,
        1,
        AudioFormat.ENCODING_PCM_16BIT
    )
    setAudioRecordConfig(config)
    
    setAudioChunkPreparedListener { chunk ->
        // 发送到语音识别引擎
        asrEngine.feedAudio(chunk.pcmData, chunk.size)
    }
}
asrRecorder.start("/sdcard/asr.wav", useForeground = false)
```

### 2. 长时间录音

```kotlin
val longRecorder = AudioRecordManager().apply {
    val config = AudioRecordConfig(
        MediaRecorder.AudioSource.MIC,
        16000,
        1,
        AudioFormat.ENCODING_PCM_16BIT
    )
    setAudioRecordConfig(config)
}

// 使用前台服务保活
longRecorder.start("/sdcard/long_recording.wav", useForeground = true)
```

### 3. 高质量音乐录制

```kotlin
val musicRecorder = AudioRecordManager().apply {
    val config = AudioRecordConfig(
        MediaRecorder.AudioSource.MIC,
        44100,  // CD 音质
        2,      // 立体声
        AudioFormat.ENCODING_PCM_16BIT
    )
    setAudioRecordConfig(config)
}
musicRecorder.start("/sdcard/music.wav", useForeground = true)
```

### 4. 资源管理

```kotlin
// Activity/Fragment 生命周期管理
override fun onPause() {
    super.onPause()
    audioRecordManager.pause()
}

override fun onResume() {
    super.onResume()
    if (shouldContinueRecording) {
        audioRecordManager.resume()
    }
}

override fun onDestroy() {
    super.onDestroy()
    audioRecordManager.stop()
    audioRecordManager.release()
}
```

## 权限配置

### AndroidManifest.xml

```xml
<!-- 录音权限（必需） -->
<uses-permission android:name="android.permission.RECORD_AUDIO" />

<!-- 前台服务权限（如需保活） -->
<uses-permission android:name="android.permission.FOREGROUND_SERVICE" />

<!-- 文件写入权限 -->
<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

### 运行时权限

```kotlin
// 检查并请求录音权限
if (ContextCompat.checkSelfPermission(this, Manifest.permission.RECORD_AUDIO)
    != PackageManager.PERMISSION_GRANTED) {
    ActivityCompat.requestPermissions(
        this,
        arrayOf(Manifest.permission.RECORD_AUDIO),
        REQUEST_RECORD_AUDIO
    )
}
```

## 注意事项

1. **权限要求**：必须获取 `RECORD_AUDIO` 权限
2. **前台服务**：长时间录音建议启用前台服务保活
3. **资源释放**：使用完毕后及时调用 `release()` 释放资源
4. **文件路径**：确保文件路径有写入权限
5. **音频源**：不同音频源适用于不同场景（语音识别、通话录音等）
6. **内存占用**：高采样率和立体声会占用更多内存

## 相关组件

- [LibAudio](lib-audio.md) - 音频基础工具库
- [LibAudioPlayer](lib-audio-player.md) - 音频播放组件
- [LibPermission](lib-permission.md) - 权限管理组件
- [LibForegroundService](lib-foreground-service.md) - 前台服务组件
