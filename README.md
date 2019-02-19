# ReactSSR-app
React全栈+服务器渲染（ssr）打造社区Webapp

目录结构及文件说明
ReactSSR-app>build：打包所需的webpack配置文件夹
ReactSSR-app>build>webpack.config.client.js:
  含有entry，output，module，plugins,
  配置了入口文件，打包输出的路径和名字，解析不同文件用的loader（babel-loader等），生成html所用的模板，并将打包好的js文件引入到html中
