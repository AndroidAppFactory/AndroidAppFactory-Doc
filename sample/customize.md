## 概述

这部分内容主要介绍，如何基于 AAF 的整体框架，进行新应用的开发。由于**AAF 对于Android的构建方式做了一定范围的重构与定制。**为了更贴近实际开发的场景，这里提供两种开发模式的使用事例：

- 基于 AAF 构建模式

- 基于通用Android项目构建模式

两种使用方法是一致的，只是配置会有细微差距。所有事例都基于[AndroidAppFactory-Sample](https://github.com/bihe0832/AndroidAppFactory-Sample) 来介绍

## 基于 AAF 构建模式

**使用基于 AAF 构建模式 开发新项目时，新增一个模块最快的方式是复制并重命名一个已有模块，然后手动修改 dependencies.gradle 方式添加，不要直接使用IDE 提供的New Module 方式**

### 基于AAF 提供的空项目

- 打开 Template-AAF: [https://github.com/AndroidAppFactory/Template-AAF](https://github.com/AndroidAppFactory/Template-AAF)

- 直接 clone 或者基于  Template-AAF 新建项目

### 使用 AndroidAppFactory-Sample 最新代码


- 新建空目录

    ```shell
    mkdir ./AAF
    ```
        

- 复制 AndroidAppFactory-Sample 的所有内容到当前目录

    ```shell
    git clone https://github.com/bihe0832/AndroidAppFactory-Sample.git ./AAF
    ```

- 删除除 APPTest 和 Application 以外的所有模块（也就是所有Base 开头和Pub 开头的项目）及 Git 信息
    
    ```shell
    cd ./AAF
    ls | grep Base | xargs -I {} rm -fr ./{}
    ls | grep Pub | xargs -I {} rm -fr ./{}
    rm -fr .git
    rm -fr demo
    ```

- 修改 dependencies.gradle

    修改dependencies.gradle，仅保留 APPTest 和 Application 的配置

    - ext.moduleInfo 仅保留 APPTest 和 Application的配置

    - ext.mainProject = "APPTest" 

    - ext.developModule = "Application"

    修改后的dependencies.gradle 如下：

    ```java
    apply from: rootDir.toString() + '/config.gradle'
    def project = ext
    
    ext.mainProject = "APPTest"
    ext.developModule = "Application"
    ext.pubModuleIsApplication = true
    ext.includeALLDependOnDevelopModule = false
    ext.moduleVersionName = "3.6.5"
    ext.moduleInfo = [

        "APPTest"         : [
            "apidependenciesList": ["",
                                    "Application", "BaseDebug"
            ]
        ],
        "Application"     : [
                "apidependenciesList"    : [
                        "com.bihe0832.android:common-wrapper:${project.aaf_version}",

                ],
                "specialdependenciesList": [
                        "debugApi"  : ["com.squareup.leakcanary:leakcanary-android:1.5.1"],
                        "releaseApi": ["com.squareup.leakcanary:leakcanary-android-no-op:1.5.1"],
                        "kapt": ["com.bihe0832.android:lib-router-compiler:5.1.7"]
                ]
        ]
    ]
    ```

- 运行项目

    运行APPTest

## 基于通用Android项目构建模式


### 基于 AAF 提供的空项目

- 打开 Template-Android: [https://github.com/AndroidAppFactory/Template-Android](https://github.com/AndroidAppFactory/Template-Android)

- 直接 clone 或者基于  Template-Android 新建项目

### 使用 AndroidAppFactory-Sample 最新代码

- 新建 Android 工程，已有可以跳过

- 将 APPTest 和 Application 复制到项目根目录

- 在项目根目录`settings.gradle`添加APPTest 和 Application ，例如：

```java
include ':Application'
include ':APPTest'
```

- 在 Application 的 `build.gradle` 中添加依赖：

```java
dependencies {
    api "com.bihe0832.android:common-wrapper:${project.aaf_version}"
}
```

- 在 APPTest 的 `build.gradle` 中添加依赖：

```java
dependencies {
    api project(':Application')
}
```

- 运行APPTest

## 常见错误

### AndroidX 没开启

- 错误描述：

        Caused by: com.android.builder.errors.EvalIssueException: Configuration debugRuntimeClasspath contains AndroidX dependencies, but the android.useAndroidX property is not enabled, which may cause runtime issues.

- 错误原因：

    出现此错误时，需要在 `gradle.properties` 文件增加配置 `android.useAndroidX=true`。
    
- 解决方案：

    由于 `gradle.properties` 文件会包含 一些编译环境（例如 Java Home 等环境变量等）、自定义数据（签名信息等敏感数据）等，所以开发中一般都是使用本地的全局配置，而不放在项目代码中。因此在项目中找不到 `gradle.properties` 文件。你可以在项目新增 `gradle.properties` 文件 并添加配置，具体事例可以参考：https://github.com/bihe0832/Settings-Tools/blob/master/as/gradle.properties
    
    或者在 Android Studio 的 Settings 里面的 Gradle 配置设置你自定义的全局配置的地址。

