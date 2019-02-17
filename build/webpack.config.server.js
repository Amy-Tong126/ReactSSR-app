const path = require('path');//用于绝对路径编写


module.exports = {
  target:"node",//执行环境
  entry: {
  	app:path.join(__dirname,"../client/server-entry.js")
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'server-entry.js',
    libraryTarget:"commonjs2",//模块化规范
    publicPath:"/public"
  },
  module:{
  	rules: [
    {
      test: /\.(jsx|js)$/,
      loader: 'babel-loader'
    }
   ]
  }
};