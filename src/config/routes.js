// 引用模板
import index from '../page/index.vue'
import content from '../page/content.vue'
import account from '../page/account.vue'
import category from '../page/category.vue'
import accountInfo from '../page/accountInfo.vue'
import videocar from '../page/videocar.vue'
import video from '../page/video.vue'
import notfound from '../page/notfound.vue'

// 配置路由
export default [
  {
    path: '/404',
    name: '404',
    component: notfound
  },
  {
    path: '/',
    name: 'index',
    component: index,
    data () {
      return { }
    },
    methods: {
      next () {}
    }
  },
  {
    path: '/:itag/:p',
    name: 'indexcate',
    component: index,
    data () {
      return { }
    },
    methods: {
      next () {}
    }
  },
  {
    path: '/content/:id/:tag',
    name: 'content',
    component: content
  },
  {
    path: '/account/:id',
    name: 'account',
    component: account
  },
  {
    path: '/category',
    name: 'category',
    component: category
  },
  {
    path: '/accountInfo',
    name: 'accountInfo',
    component: accountInfo
  },
  {
    path: '/videocar/',
    name: 'videocar',
    component: videocar
  },
  {
    path: '/video',
    name: 'video',
    component: video
  },
  {
    path: '*',
    redirect: '/404'
  }
]
