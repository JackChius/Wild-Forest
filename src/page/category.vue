<template>
  <div> 
    <!-- <div id="main-wrapper"> -->
    <el-row :gutter="10">
      <section class="home">
        <el-col :md="4" :lg="3">
          <div class="e_col w1">

            <ul class="simple_tabs">
              <strong><h2>分类账号导航</h2></strong><br>
              <li class="tab">
                <router-link :to="{ name: 'category', query: { tag: 'duanzi' } }"> 段子 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', query: { tag: 'car'}}"> 汽车 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', query: { tag: 'fashion' }}"> 潮流 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', query: { tag: 'finance' }}"> 金融 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', query: { tag: 'food' }}"> 美食 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', query: { tag: 'history' }}"> 历史 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', query: { tag: 'job' }}"> 工作 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', query: { tag: 'sport' }}"> 运动 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', query: { tag: 'technology' }}"> 科技 </router-link>
              </li>
            </ul>

          </div>
        </el-col>
        <el-col :xs="24" :md="16" :lg="18">
          <section class="main">
            <!-- 循环接收服务器数据开始 -->
            <ul class="list">             
              <li v-for="item in cateList">
                <i class="user_ico">
                  <img :src="item.logo" v-bind:alt="item.gzh_name">                
                </i>
                <h3 class="ckey">
                  <router-link :to="{ name: 'accountInfo', params: {id:item.wechat_id}}">  {{item.gzh_name}} {{item.tag}} </router-link>     
                </h3>
                <span>
                   {{item.introduce}}                          
                </span>                         
              </li>

            </ul>
          </section>
        </el-col>
        <!--侧边栏部分。IDE中通常折叠-->
        <el-col :md="4" :lg="3">
          <aside class="aside-bar">
            <h3>本站说明</h3>
            <ul>
              <li>
                <p> &nbsp;&nbsp; </p>&nbsp; Website Powered by
                <strong> abc</strong>
              </li>
              <br>
              <li>
                <code>Phone</code>
                <strong> 1234567890</strong>
              </li>

            </ul>
            <!--侧边栏信息区 编辑器通常折叠-->
            <div class="aside-tab">
              <h3>最新收录</h3>
              <ul class="aside-list">
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/5.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>葫芦岛晚报</span>
                    </a>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/4.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>鞍山日报</span>
                    </a>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/c3.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>羊城晚报</span>
                    </a>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/2.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>安庆晚报</span>
                    </a>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/1.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>锦州日报</span>
                    </a>
                  </strong>
                </li>
              </ul>
            </div>
            <div class="aside-tab">
              <h3>推荐账号</h3>
              <ul class="aside-list">
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/6.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>占豪情</span>
                    </a>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/8.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>草编往事</span>
                    </a>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/7.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>十点读书</span>
                    </a>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/9.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>滴答滴答</span>
                    </a>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/10.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>南方摇滚帮</span>
                    </a>
                  </strong>
                </li>
              </ul>
            </div>
            <div class="aside-tab ad-special">
              <strong>
                <h3>云服务</h3>
                <h3>
                  <a href="#">阿里云</a>
                </h3>
              </strong>
            </div>
            <div class="aside-tab">
              <!-- <ul id="tagList">
                <li class="tagTitle" v-for="(tag,index) in tags" v-if="index < 28">
                  <el-tag type="success">
                    <router-link :to="{ name: 'category', query: { tag:tag.tag , p:1 }}"> {{tag.tag}} </router-link>
                    <div class="border"></div>
                  </el-tag>
                </li>
              </ul> -->
            </div>
            <br>
            <br>
            <br>
            <div>

            </div>
          </aside>

        </el-col>

      </section>
    </el-row>

    <!-- </div> -->

  </div>
</template>
<script>
import { goodTime } from '../config/method'  //引入时间过滤函数等方法

export default {

  data() {
    return {
      cateList: [],
      input2: '',
      // tags: [],
      test:'1'
    }
  },
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  created() {
    this.get_data()
    
  },
  // beforeRouterEnter(to,from,next) {
  //   next(vm=>
  //     vm.get_data()
  //   )
  // },
  // beforeRouterLeave(to,from,next) {
  //   next()
  // },
  watch: {
    page(val) {
      //  console.log('new: %s, old: %s', val, oldVal),
      this.get_data()
    },
    '$route' (to, from) {                          // 监听路由变化 重新获取数据
    //  console.log(this.$route.path)  
     this.get_data()
    
   }
  },
  filters: {
    goodTime(val) {
      return goodTime(val)
    }
  },

  methods: {
    get_data: function(params) {
      console.log(this.$route)
      var v = this
      if (!params) params = {}
      // 使用全局绑定的$api方法来获取数据     
      v.$api.get('category', { tag: this.$route.query.tag}, function(r) {     
         if(r.data.status===0){
        //  window.location.href = '#/404'
           v.$router.replace({ path: '/404' })
        }else{
           v.cateList = r.data.data  //追加数据（非覆盖加载）  
           v.$route.meta.pageTitle = '标题';     
        }
        
      })

    }
    // getTag: function(params) {
    //   var v = this
    //   if (!params) params = {}
    //   v.$api.get('category',{tag:'all'}, function(r) {

    //     v.tags = r.data.data    //追加数据（覆盖加载）
    //   })
    // }
    

  }
}
</script>