# LibDeviceNetwork

![LibDeviceNetwork](https://img.shields.io/badge/AndroidAppFactory-LibDeviceNetwork-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibDeviceNetwork-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibDeviceNetwork)
[ ![Maven Central](https://img.shields.io/maven-central/v/com.bihe0832.android/lib-device-network) ](https://search.maven.org/artifact/com.bihe0832.android/lib-device-network)

## 功能简介

设备基本信息和网络相关信息的工具库

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-device-network:+'
```

## 组件功能

### 设备信息相关

#### BatteryUtils

- 获取设备当前电量等级及充电状态

#### DeviceIDUtils

- 获取各种类型的设备ID，例如：Imei、Mac 地址、AndroidID、CID

#### ManufacturerUtil 

- 获取厂商、品牌、型号等基本信息

- 获取当前使用语言

- 是否指定厂商、对应厂商的操作系统版本

### 网络相关

#### DeviceInfoManager

- 判断是否包含SIM卡

- 数据开关是否打开、4G是否开启

- 获取上网卡或者拨号卡的网络运营商信息

#### IpUtils

- 判断IP地址是否合法（IPV4 & IPV6）

- 获取指定域名IP列表，DNS解析

- IP字符与Int转换，主机序、网络序转ipstr等

#### IspUtil

- 根据运营商代码 获取运营商名称

#### MobileUtil

- 获取信号强度、移动网络是否可用、周边基站信息

#### NetworkUtil

- 实现不区分4G、WIFI的网络信息获取方法，例如：当前使用网络运营商信息，网络状态例如 Wi-Fi、4G、有线、蓝牙等，网络强度，网络可用性，IP

#### WifiManagerWrapper

- 获取Wi-Fi 基本信息类的封装