# 使用模板创建新书

## checkout 项目

- 命令

        git clone https://github.com/bihe0832/gitbook.git

- 事例
  
        ➜  github  git clone https://github.com/bihe0832/gitbook.git
        Cloning into 'gitbook'...
       
        ……
    
        Unpacking objects: 100% (9/9), done.
    
## 安装依赖，推荐使用npm

- 命令

        gitbook install
            
    或者
            
        npm install

- 事例
                
        ➜  gitbook git:(master) npm install
                 
         ……

        1 package is looking for funding
          run `npm fund` for details

## 初始化新书

- 命令

        gitbook init
            
- 事例
            
        ➜  gitbook git:(master) gitbook init
        warn: no summary file in this book
        info: create SUMMARY.md
        info: initialization is finished
    
## 预览新书

- 命令

        gitbook serve
            
- 事例
            
        ➜  gitbook git:(master) ✗ gitbook serve

        Live reload server started on port: 35729
        Press CTRL+C to quit ...
        
        ……
        
        Starting server ...
        Serving book on http://localhost:4000

## 生成新书

- 命令

        gitbook build
            
- 事例
            
        ➜  gitbook git:(master) ✗ gitbook build
        info: 25 plugins are installed
        info: 20 explicitly listed
        
        ……
        
        info: found 1 pages
        info: found 2 asset files
        warn: "options" property is deprecated, use config.get(key) instead
        warn: "options.generator" property is deprecated, use "output.name" instead
        info: >> generation finished with success in 0.8s !
