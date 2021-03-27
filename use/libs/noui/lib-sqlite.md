# LibSqlite

![LibSqlite](https://img.shields.io/badge/AndroidAppFactory-LibSqlite-brightgreen)
[ ![Github](https://img.shields.io/badge/Github-LibSqlite-brightgreen?style=social) ](https://github.com/bihe0832/AndroidAppFactory/tree/master/LibSqlite)
[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-sqlite/images/download.svg) ](https://bintray.com/bihe0832/android/lib-sqlite/_latestVersion)

## 功能简介

Sqlite封装，同时提供了一个key-value的基本数据库

## 组件信息

#### 引用仓库

引用仓库可以参考 [组件使用](./../start.md) 中添加依赖的部分

#### 组件使用

```groovy
implementation 'com.bihe0832.android:lib-sqlite:+'
```

## 组件功能

### BaseDBHelper && BaseTableModel

- 简单的SQLiteOpenHelper封装及ContentValues工具类封装

### CommonDBManager

- 基于 BaseDBHelper 和  BaseTableModel 封装的 key-value 存储数据库

- 提供，数据插入、查询、删除的基本功能，不支持获取全部数据