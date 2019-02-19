
const path = require('path');//用于绝对路径编写

const HTMLPlugin=require("html-webpack-plugin");

const isDev=process.env.NODE_ENV==="development";

config = {
  entry: {
  	app:path.join(__dirname,"../client/app.js")
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath:"/public/"//插入到HTML中的路径前有/public,代表是静态资源
  },
  module:{
  	rules: [
    {
      test: /\.(jsx|js)$/,
      loader: 'babel-loader'
    }
   ]
  },
  plugins:[
  new HTMLPlugin({
  		template:path.join(__dirname,"../client/template.html")
  		//以template作为模板生成HTML
  	})
  ]
};
if (isDev) {
  config.devServer={
      host:"0.0.0.0",
      port:"8888",
      contentBase:path.join(__dirname,"../dist"),
      // hot:true,
      overlay:{
        errors:true
      },
      publicPath:"/public/",//访问资源时带上这个公共路径
      historyApiFallback:{
          index:"/public/index.html"//映射index.html对应/public/index.html
      }
  }
}

module.exports=config;