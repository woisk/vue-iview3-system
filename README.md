# vue-iview-system

> A Vue.js project  
 
iview-admin-2.0使用iView 3.0，基于 Vue Cli 3.0   
此测试项目使用vue init webpack vue-iview-system生成的结构替代了iview-admin-2.0 
vue-cli版本为2.9.2  

iView Admin 2.0
iView Admin 2.0 也进行了一波大的升级：  

基于 Vue Cli 3.0  
重构所有代码  
重写重要组件  
全新权限方案  
多级菜单路由  
Mock 请求模拟  
全局配置  
清晰数据流  
体验 iView Admin 2.0： https://iview.github.io/iview-admin GitHub：https://github.com/iview/iview-admin  

引入less文件时报错.bezierEasingMixin()
因为less版本太高不一致，自动安装是：
	"less": "^3.8.1",
    "less-loader": "^4.1.0"  

按照iView Admin 2.0中less版本降为：  
    "less": "^2.7.3",  
    "less-loader": "^4.0.5"


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9012
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report


