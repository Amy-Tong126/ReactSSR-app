# ReactSSR-app
React全栈+服务器渲染（ssr）打造社区Webapp



## 目录结构及文件说明

### 一、build：打包所需的webpack配置文件夹

webpack.config.client.js:
	含有entry，output，module，plugins

​	配置了入口文件，打包输出的路径和名字，解析不同文件用的loader（babel-loader等），生成html所用的模板，并将打包好的js文件引入到html中。

```
html-webpack-plugin：生成html所用的模板，并将打包好的js文件引入到html中
babel-loader：解析js

```

webpack.config.server.js:

​	将client文件夹中的server-entry打包编译到dist的server-entry.js中

### 二、client：客户端代码文件夹

app.js：js入口文件

App.jsx：react的App组件

template.html：用于生成打包后的html文件的模板

server-entry.js：暴露的App组件

### 三、dist:打包后的资源文件

app.***.js ：打包后的js文件

index.html：打包后的html文件

server-entry.js：打包编译后的App组件

### 四、server：服务端文件夹--用于服务端渲染SSR

server：

引入react-dom/server将App(react组件,这里的../dist/server-entry.js)转成字符串

读取../dist/index.html文件将其对应位置替换成字符串

引入express开启一个服务，设置当请求路径包含/public时，返回dist下的静态资源，此外的其他请求返回替换过的html字符串。

注意：运行server前要先运行build的webpack配置文件，将代码打包到dist文件夹，以便于server.js使用。



