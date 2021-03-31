# Router

![Router](https://img.shields.io/badge/AndroidAppFactory-Router-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-Router-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/Router)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-router) ](https://search.maven.org/artifact/com.bihe0832.android/lib-router)


## 功能简介

通用路由的核心库，用于路由寻址、管理等

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-router:+'
```

### 新增路由

以登录举例，介绍路由新增的步骤：
 
1. 确定路由模块名称，以及路由规则名称，为了方便管理，目前路由都定义在RouterConstants中    

    ```java
    public static final String MODULE_NAME_LOGIN = "login";
    public static final String INTENT_EXTRA_KEY_LOGIN_ITEM_PLATFORM = "platform";
    ```

    备注：路由最终以intent唤起activity，所有路由参数的key都会统一强制转为小写（例如zixie://user?userID=1 在user对应的页面获取的时候extra在getString的时候使用的key为：userid）。**因此在定义页面参数的时候，key一律为小写。**
 
2. 在注册路由的activity类声明前添加路由规则的注解，例如LoginActivity中的代码：

    ```java
    @Module(RouterConstants.MODULE_NAME_LOGIN)
    public class LoginActivity extends BaseActivity implements UserListener{
    ```	 

3. 在注册路由的activity类的构建配置中增加注册路由表的相关构建依赖，例如在BaseProfile的build.gradle中的代码：

    ```groovy
    kapt "com.bihe0832.android:lib-router-compiler:+"
    ```
    
    **备注：Java的依赖和Kotlin依赖略有区别，Kotlin的依赖使用kapt关键字而不是annotationProcessor，具体可以参考APPProfile**
