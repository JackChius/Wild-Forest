// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 引用路由
import VueRouter from 'vue-router'
// 使用路由
Vue.use(VueRouter)
// 引入第三方UI库
import ElementUI from 'element-ui'
// 单独引入第三方样式文件
import 'element-ui/lib/theme-chalk/index.css'
// 引入根组件文件
import App from './App.vue'
// 使用第三方库
Vue.use(ElementUI)
// 引用路由配置文件
import routes from './config/routes'

// 引用API文件
import api from './config/api'
// 将API方法绑定到全局!!!!
Vue.prototype.$api = api
// 使用配置文件规则

const router = new VueRouter({
  mode: 'hash',
  // base: __dirname,
  routes
})
router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)                               // 路由切换回到顶部
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: (h) => h(App)
  // methods: {
  //   watchName: function () {
  //       //  if(this.$route.name==account) {
  //         // var test2 = this.$refs;
  //     alert (this.$el.querySelect('.aside-tab'))
  //     //  }
  //   }
  // }
  // template: '<App/>',
  // components: { App }
})

