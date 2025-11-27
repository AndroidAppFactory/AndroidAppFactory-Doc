# LibAudio

![LibAudio](https://img.shields.io/badge/AndroidAppFactory-LibAudio-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibAudio-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibAudio)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-audio) ](https://search.maven.org/artifact/com.bihe0832.android/lib-audio)

## 功能简介

音频处理基础工具库，提供音频文件处理、格式转换和配置管理功能。

**核心特性：**
- 音频时长计算
- PCM 与 WAV 格式互转
- 音频录制配置管理
- WAV 文件读写

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-audio:+'
```

## 组件功能

### AudioRecordConfig

录音参数配置类，用于配置 AudioRecord 和 WAV 文件生成。

**主要配置项：**

| 配置项 | 说明 | 默认值 |
|--------|------|--------|
| `audioSource` | 音频源 | 麦克风 (MIC) |
| `sampleRateInHz` | 采样率 | 16000 Hz |
| `channelConfig` | 声道配置 | 单声道 (MONO) |
| `audioFormat` | 音频格式 | 16bit PCM |

**使用示例：**

```java
// 1. 使用默认配置
AudioRecordConfig config = new AudioRecordConfig();

// 2. 自定义配置
AudioRecordConfig customConfig = new AudioRecordConfig(
    MediaRecorder.AudioSource.MIC,    // 音频源：麦克风
    16000,                             // 采样率：16kHz
    1,                                 // 声道数：单声道
    AudioFormat.ENCODING_PCM_16BIT    // 格式：16bit PCM
);

// 3. 设置声道（自动同步 channelConfig）
config.setChannels(2);  // 设置为立体声

// 4. 获取声道配置
int channelConfig = config.getChannelConfig();  // 用于 AudioRecord API

// 5. 获取采样位数
byte bits = config.bitsPerSample();  // 返回 8 或 16
```

**声道配置说明：**

```java
// 单声道（推荐用于语音识别）
config.setChannels(1);
// channelConfig 自动设置为 AudioFormat.CHANNEL_IN_MONO

// 立体声（用于音乐录制）
config.setChannels(2);
// channelConfig 自动设置为 AudioFormat.CHANNEL_IN_STEREO
```

**常用配置组合：**

```java
// 语音识别配置（低采样率、单声道）
AudioRecordConfig asrConfig = new AudioRecordConfig(
    MediaRecorder.AudioSource.VOICE_RECOGNITION,
    16000,
    1,
    AudioFormat.ENCODING_PCM_16BIT
);

// 高质量音乐录制配置
AudioRecordConfig musicConfig = new AudioRecordConfig(
    MediaRecorder.AudioSource.MIC,
    44100,
    2,  // 立体声
    AudioFormat.ENCODING_PCM_16BIT
);

// 通话录音配置
AudioRecordConfig callConfig = new AudioRecordConfig(
    MediaRecorder.AudioSource.VOICE_COMMUNICATION,
    8000,
    1,
    AudioFormat.ENCODING_PCM_16BIT
);
```

### AudioDurationTools

音频时长计算工具类。

**功能：**
- 计算 PCM 音频时长
- 计算 WAV 文件时长
- 支持不同采样率和声道配置

**使用示例：**

```kotlin
// 计算 PCM 数据时长（毫秒）
val duration = AudioDurationTools.getPCMDuration(
    pcmDataSize = 16000,
    sampleRate = 16000,
    channels = 1
)

// 计算 WAV 文件时长
val wavDuration = AudioDurationTools.getWavDuration(wavFilePath)
```

### PcmToWav

PCM 音频数据转换为 WAV 文件格式。

**功能：**
- PCM 数据转 WAV 文件
- 自动添加 WAV 文件头
- 支持自定义音频参数

**使用示例：**

```java
// PCM 数据转 WAV 文件
PcmToWav.pcmToWav(
    pcmFilePath,        // PCM 文件路径
    wavFilePath,        // 输出 WAV 文件路径
    sampleRate,         // 采样率
    channels,           // 声道数
    bitsPerSample       // 采样位数（8 或 16）
);

// 使用 AudioRecordConfig 配置
AudioRecordConfig config = new AudioRecordConfig();
PcmToWav.pcmToWav(
    pcmFilePath,
    wavFilePath,
    config.getSampleRateInHz(),
    config.getChannels(),
    config.bitsPerSample()
);
```

### WaveFileReader

WAV 文件读取工具。

**功能：**
- 读取 WAV 文件头信息
- 提取 PCM 音频数据
- 解析音频参数

**使用示例：**

```java
WaveFileReader reader = new WaveFileReader(wavFilePath);

// 读取 WAV 文件
if (reader.openWave()) {
    // 获取音频参数
    int sampleRate = reader.getSampleRate();
    int channels = reader.getChannels();
    int bitsPerSample = reader.getBitsPerSample();
    
    // 读取 PCM 数据
    byte[] pcmData = reader.getData();
    
    // 关闭文件
    reader.closeWaveFile();
}
```

## 录音配置最佳实践

### 配置选择指南

| 应用场景 | 采样率 | 声道 | 推荐配置 |
|---------|--------|------|---------|
| 语音识别 | 16kHz | 单声道 | `VOICE_RECOGNITION` + 16kHz + MONO |
| 通话录音 | 8kHz | 单声道 | `VOICE_COMMUNICATION` + 8kHz + MONO |
| 音乐录制 | 44.1kHz | 立体声 | `MIC` + 44.1kHz + STEREO |
| 普通录音 | 16kHz | 单声道 | `MIC` + 16kHz + MONO |

### 采样率选择

- **8kHz**：电话音质，适合通话录音
- **16kHz**：语音识别标准，适合 ASR 应用
- **44.1kHz**：CD 音质，适合音乐录制
- **48kHz**：专业音频，适合高质量录制

### 声道选择

- **单声道 (MONO)**：文件小，适合语音场景
- **立体声 (STEREO)**：音质好，适合音乐场景

## 注意事项

1. **权限要求**：录音需要 `RECORD_AUDIO` 权限
2. **声道同步**：使用 `setChannels()` 设置声道数会自动同步 `channelConfig`
3. **格式支持**：目前支持 PCM 和 WAV 格式
4. **采样率兼容**：确保设备支持所选采样率
5. **文件大小**：高采样率和立体声会显著增加文件大小

## 相关组件

- [LibAudioPlayer](lib-audio-player.md) - 音频播放组件
- [LibAudioRecord](lib-audio-record.md) - 音频录制组件
