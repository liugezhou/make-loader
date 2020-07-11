#### 如何编写一个loader
> 这是编写一个loader的小demo。

> 本项目的开发步骤：  
> + mkdir make-loader 
> + cd  make-loader   
> + npm init -y 
> + npm i webpack webpack-cli  loader-utils -D  
> + 新建src/index(代码如项目)   
> + 新建webpack.config.js(代码如项目)，进行简单配置，在module的rules中添加关于js的自定义命名loader    
> + 根目录下新建loaders文件，分别新建同步与异步loaderjs(代码如项目)   
> + npm run build,查看dist下新生成的main.js，发现loader生效。

> 说明：webpack.config.js中有一个resolveLoader属性，该属性的意思是在node_module或者项目根目录下loaders与寻找音乐的loader(方便引用本地代码时的路径简写)  
> 编写loader时，使用函数而不能使用箭头函数，因为在loader中取得的值多从this中取得 。 