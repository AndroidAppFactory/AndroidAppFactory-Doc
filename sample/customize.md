## 概述

这部分内容主要介绍，如何基于 AAF 的整体框架，进行新应用的开发。由于**AAF 对于Android的构建方式做了一定范围的重构与定制。**为了更贴近实际开发的场景，这里提供两种开发模式的使用事例：

- 基于 AAF 构建模式

- 基于通用Android项目构建模式

两种使用方法是一致的，只是配置会有细微差距。所有事例都基于[AndroidAppFactory-Sample](https://github.com/bihe0832/AndroidAppFactory-Sample) 来介绍

## 基于 AAF 构建模式

- 新建空目录

    ```shell
    mkdir ./
    ```
        

- 复制 AndroidAppFactory-Sample 的所有内容到当前目录

    ```shell
    cp -fr ~/zixie/github/AndroidAppFactory-Sample/ ./
    ```

- 删除除 APPTest 和 Application 以外的所有模块（也就是所有Base 开头和Pub 开头的项目）及 Git 信息
    
    ```shell
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

            "APPTest"       : [
                    "apidependenciesList": ["",
                                            "com.bihe0832.android:common-test:${project.aaf_version}",
                                            "Application"
                    ]
            ],
            "Application"   : [
                    "apidependenciesList"    : [
                            "com.bihe0832.android:common-feedback:${project.aaf_version}",
                            "com.bihe0832.android:common-photos:${project.aaf_version}",
                            "com.bihe0832.android:common-splash:${project.aaf_version}",
                            "com.bihe0832.android:framework:${project.aaf_version}",
                            'com.squareup.okhttp3:okhttp:3.9.1',
                            'com.squareup.okhttp3:logging-interceptor:3.8.0',
                            'com.squareup.retrofit2:retrofit:2.4.0',
                            'com.squareup.retrofit2:converter-gson:2.4.0',
                            "org.jetbrains.kotlin:kotlin-stdlib:${project.kotlin_version}"

                    ],
                    "specialdependenciesList": [
                            "kapt": ["com.bihe0832.android:lib-router-compiler:${project.aaf_router_version}"]
                    ]
            ]
    ]
    ```

- 运行项目

    运行APPTest

## 基于通用Android项目构建模式

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
    api "com.bihe0832.android:common-feedback:${project.aaf_version}"
    api "com.bihe0832.android:common-photos:${project.aaf_version}"
    api "com.bihe0832.android:common-splash:${project.aaf_version}"
    api "com.bihe0832.android:common-test:${project.aaf_version}"
    api "com.bihe0832.android:framework:${project.aaf_version}"

    api "com.squareup.okhttp3:okhttp:3.9.1"
    api "com.squareup.okhttp3:logging-interceptor:3.8.0"
    api "com.squareup.retrofit2:retrofit:2.4.0"
    api "com.squareup.retrofit2:converter-gson:2.4.0"
}
```

- 在 APPTest 的 `build.gradle` 中添加依赖：

```java
dependencies {
    api project(':Application')
}
```

- 运行APPTest