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

## 常用组件集

**所有的组件都可以单独使用，同时为了方便开发，对于部分组件归类为组件集集中管理** 


#### ![LibWrapper](https://img.shields.io/badge/AndroidAppFactory-LibWrapper-brightgreen)[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-wrapper) ](https://search.maven.org/artifact/com.bihe0832.android/lib-wrapper)


- 简介：对于基础组件的集中管理所有组件

- 引用：`api 'com.bihe0832.android:lib-wrapper:+'`

    
#### ![CommonWrapper](https://img.shields.io/badge/AndroidAppFactory-CommonWrapper-brightgreen)[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-wrapper) ](https://search.maven.org/artifact/com.bihe0832.android/common-wrapper)

- 简介：对于公共组件的集中管理所有组件

- 引用：`api 'com.bihe0832.android:common-wrapper:+'`


#### ![LibScreenWrapper](https://img.shields.io/badge/AndroidAppFactory-LibScreenWrapper-brightgreen)[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-wrapper-screen) ](https://search.maven.org/artifact/com.bihe0832.android/lib-wrapper-screen)


- 简介：Widget及锁屏相关组件

- 引用：`api 'com.bihe0832.android:lib-wrapper-screen:+'`

#### ![CommonTBSWrapper](https://img.shields.io/badge/AndroidAppFactory-CommonTBSWrapper-brightgreen)[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/common-wrapper-tbs) ](https://search.maven.org/artifact/com.bihe0832.android/common-wrapper-tbs)


- 简介：X5内核 Webview 相关组件

- 引用：`api 'com.bihe0832.android:common-wrapper-tbs:+'`
