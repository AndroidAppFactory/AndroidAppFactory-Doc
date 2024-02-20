## 添加依赖

在根目录添加发布插件的相关依赖
```groovy
buildscript {  
    repositories {  
        maven { url "https://repo1.maven.org/maven2" }
    }  
}   

allprojects {  
    repositories {  
        maven { url "https://repo1.maven.org/maven2" }
    }  
}
```  
## import


直接在项目依赖中添加对应库的依赖，例如基础组件集`LibWrapper`：

```groovy
dependencies {
    api 'com.bihe0832.android:lib-wrapper:+'
}
```


## 调用

所有的组件都可以单独使用，具体的调用方式参考对应项目

## 关联源码

### 下载源码

先通过 Github 下载 AAF 的源码，也可以直接点击下面的链接下载：

- [https://github.com/AndroidAppFactory/AndroidAppFactory/archive/refs/heads/master.zip](https://github.com/AndroidAppFactory/AndroidAppFactory/archive/refs/heads/master.zip)

备注：

1. 要确保本地依赖的 AAF 版本与 Master 最新的版本一致，此种方法仅支持关联查看最新版本的源码

2. 如需查看对应版本的源码，需要Clone 整个项目，然后切换到对应的版本Tag，然后再执行关联

### 开启关联

- 在项目中调用 AAF 代码的地方，点击跳转，查看源码，此时应该是编译以后的代码

- 在 Android Studio 右上方点击 Choose Sources，然后选择对应组件的 `src/main/java` 目录后确定

- 关闭.class 文件，然后再次点击调用的地方，即可跳转到源码

## 常用组件集

**所有的组件都可以单独使用，同时为了方便开发，对于部分组件归类为组件集集中管理** 


#### ![LibWrapper](https://img.shields.io/badge/AndroidAppFactory-LibWrapper-brightgreen)[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-wrapper) ](https://search.maven.org/artifact/com.bihe0832.android/lib-wrapper)


- 简介：对于基础组件的集中管理所有组件

- 引用：`api 'com.bihe0832.android:lib-wrapper:+'`

#### ![CommonWrapperMin](https://img.shields.io/badge/AndroidAppFactory-CommonWrapperMin-brightgreen)[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-wrapper-min) ](https://search.maven.org/artifact/com.bihe0832.android/common-wrapper-min)

- 简介：对于公共组件的集中管理所有通用组件

- 引用：`api 'com.bihe0832.android:common-wrapper-min:+'`

    
#### ![CommonWrapper](https://img.shields.io/badge/AndroidAppFactory-CommonWrapper-brightgreen)[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-wrapper) ](https://search.maven.org/artifact/com.bihe0832.android/common-wrapper)

- 简介：对于公共组件的集中管理所有组件，在 CommonWrapperMin 的基础上增加了 SVGA、AceEditor、无障碍、绘图板、视频图片合成、截图等功能

- 引用：`api 'com.bihe0832.android:common-wrapper:+'`


#### ![LibScreenWrapper](https://img.shields.io/badge/AndroidAppFactory-LibScreenWrapper-brightgreen)[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-wrapper-screen) ](https://search.maven.org/artifact/com.bihe0832.android/lib-wrapper-screen)


- 简介：Widget及锁屏相关组件

- 引用：`api 'com.bihe0832.android:lib-wrapper-screen:+'`

#### ![CommonTBSWrapper](https://img.shields.io/badge/AndroidAppFactory-CommonTBSWrapper-brightgreen)[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-wrapper-tbs) ](https://search.maven.org/artifact/com.bihe0832.android/common-wrapper-tbs)


- 简介：X5内核 Webview 相关组件

- 引用：`api 'com.bihe0832.android:common-wrapper-tbs:+'`
