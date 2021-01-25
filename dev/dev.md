## 组件添加

1. 完成本地开发

2. 在远程仓库添加新的组件：

	- 地址：[https://bintray.com/bihe0832/android/](https://bintray.com/bihe0832/android/)
	
	- 版本库：https://github.com/bihe0832/AndroidAppFactory.git

3. 执行命令`./gradlew showPublishCommand` 生成组件发布命令。例如：


		➜  AndroidAppFactory git:(master) ✗ ./gradlew showPublishCommand
		Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=1g; support was removed in 8.0
		
		……	
		
		当前开发的组件开发修改版本号后，直接在根目录运行下面的命令即可发布所有依赖到最新版本
		
		运行后升级版本的组件有：
		
		        [LibWrapper]
		
		发布使用的命令：
		
		
		echo "
		LibWrapper
		"  | xargs -I {} /bin/bash ./build_upload.sh {} 2.0.18
		
		
		========================================
		
		……


4. 在命令行输入生成的命令，完成组件发布


## 组件更新

1. 完成本地开发

2. 执行命令`./gradlew showPublishCommand` 生成组件发布命令。例如：

	
		➜  AndroidAppFactory git:(master) ✗ ./gradlew showPublishCommand
		Java HotSpot(TM) 64-Bit Server VM warning: ignoring option MaxPermSize=1g; support was removed in 8.0
		
		……	
		
		当前开发的组件开发修改版本号后，直接在根目录运行下面的命令即可发布所有依赖到最新版本
		
		运行后升级版本的组件有：
		
		        [LibWrapper]
		
		发布使用的命令：
		
		
		echo "
		LibWrapper
		"  | xargs -I {} /bin/bash ./build_upload.sh {} 2.0.18
		
		
		========================================
		
		……


3. 在命令行输入生成的命令，完成组件发布
