## 添加依赖

在根目录添加发布插件的相关依赖

    buildscript {  
        repositories {  
            jcenter()  
        }  
    }   

    allprojects {  
        repositories {  
            jcenter()  
        }  
    }
    
## import

直接在项目依赖中添加对应库的依赖，例如基础组件集`LibWrapper`：

	dependencies {
	    api 'com.bihe0832.android:lib-wrapper:+'
	}

**备注：所有的组件都可以单独使用，同时为了方便开发，直接添加了LibWrapper，方便快速使用** 

![LibWrapper](https://img.shields.io/badge/AndroidAppFactory-LibWrapper-brightgreen)[ ![Download](https://api.bintray.com/packages/bihe0832/android/lib-wrapper/images/download.svg) ](https://bintray.com/bihe0832/android/lib-wrapper/_latestVersion)


## 调用

所有的组件都可以单独使用，具体的调用方式参考对应项目