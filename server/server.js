const express =require("express");
const ReactSSR= require("react-dom/server");
const path =require("path");
const serverEntry=require("../dist/server-entry").default;

const fs=require("fs");
const template=fs.readFileSync(path.join(__dirname,"../dist/index.html"),"utf-8");


const app =express();
//路径是public的，返回静态资源
app.use("/public",express.static(path.join(__dirname,"../dist")))

app.get("*",function(req,res){
  const appstring=ReactSSR.renderToString(serverEntry);
  res.send(template.replace("<app></app>",appstring));
})

app.listen(3333,function(){
	console.log("server is listening on 3333");
})

