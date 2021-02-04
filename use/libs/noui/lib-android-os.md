# LibOS

![LibOS](https://img.shields.io/badge/AndroidAppFactory-LibOS-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibOS-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibOS)
[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-android-os/images/download.svg) ](https://bintray.com/bihe0832/android/lib-android-os/_latestVersion)

## 功能简介

对于系统级别的常用功能的封装，例如获取进程名，当前系统版本；展示隐藏软键盘，屏幕宽高获取，dp，sp，px 等各类数据单位之间转换

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-android-os:+'
```

## 组件功能

### OSUtils

- 根据进程ID获取进程名

- 当前系统版本，API 版本，是不是Android Q
        
### DisplayUtil

- 隐藏软键盘、虚拟导航判断

- 获取屏幕（完整、可用）宽高等分辨率信息、状态栏宽高
  
- dp，sp，px 等各类数据单位之间转换

