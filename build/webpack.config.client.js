
const path = require('path');//用于绝对路径编写

const HTMLPlugin=require("html-webpack-plugin");

module.exports = {
  entry: {
  	app:path.join(__dirname,"../client/app.js")
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[hash].js',
    publicPath:"/public"//插入到HTML中的路径前有/public,代表是静态资源
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