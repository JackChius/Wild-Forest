# Qland_Vuepro

> 一个专注于优质分享的垂直领域公众号聚合平台
### 主要技术栈
* Vue2.3+VueRouter
* 异步数据(服务端通讯): Axios
* UI: ElementUI+SCSS
* 数据/状态存储: LocalStorge+Vuex
* 聊天室模块: Sockect.io
* 视频模块：FlexBox+阿里云OSS对象存储

## 如何运行

``` bash
# 安装依赖
npm install

# 本地启动与7000端口 localhost:7000
npm run dev

# 构建静态资源
npm run build

# 如果需要带分析日志的启动可以这样
npm run build --report

# 单元测试(待完善)
npm run unit
```

过程中遇到的一些部署细节可查阅Vue-loader/Vue-cli相关文档
[guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
