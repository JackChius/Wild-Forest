//index.vue
<template>
  <div>
 
    <el-row :gutter="10">
      <section class="home">
        <el-col :xs="24" :md="4" :lg="3">
          <div>
          <ul class="left_tabs">
              <li class="tab">               
                  <router-link :to="{ path:'/'}"> <span>今日</span>推荐 </router-link>               
              </li>
              <li class="tab">
                <router-link :to="{ name: 'indexcate', params: { itag: 'car', p: 1}}">汽车</router-link>
              </li>           
              <li class="tab">
                <router-link :to="{ name: 'indexcate', params: { itag: 'finance', p: 1 }}">金融理财</router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'indexcate', params: { itag: 'food', p: 1 }}"> 美食 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'indexcate', params: { itag: 'history', p: 1 }}"> 历史读书 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'indexcate', params: { itag: 'job', p: 1 }}"> 工作 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'indexcate',meta:{wqe:1}, params: { itag: 'sport', p: 1 }}"> 运动健身 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'indexcate', params: { itag: 'technology', p: 1 },meta:{wqe:1}}"> 科技 </router-link>
              </li>
              <!-- <li class="tab">1111</li> -->
              
            </ul>
          
        </div>

        </el-col>

        <el-col :xs="24" :md="16" :lg="18" key="item._id" >
          <section class="main">

            <clip-loader :loading="loading" :color="color" size="45px"></clip-loader>

            <!-- 循环接收服务器数据开始 -->
            <ul class="list">
              <li v-for="(item,index) in lists">
                <i class="user_ico">              
                  <img v-bind:src="item.logo">              
                </i>
                <h3>
                   <router-link  :to="{ name: 'content',params: { 
                     id: item._id,
                     tag: item.tag, 
                     utitle: item.title,
                     utime:item.update_time,
                     uname:item.gzh_name,
                     utag:item.tag,
                     uchatid:item.wechat_id }} ">{{ item.title }}</router-link>
                </h3>
              
                <span class="ckey">
                  <router-link  :to="{ name: 'accountInfo', query: { id: item.wechat_id }}">
                    <el-tag type="info" > {{ item.gzh_name }} </el-tag> &nbsp;
                  </router-link>
                  <router-link :to="{ name:item.tag==='hot'?'index':'category', query: {tag: item.tag}}">
                    <span style="color:#909399" > <strong>  {{item.tag}}  </strong> </span> </router-link>
                  <span style="color:grey" class="time">
                    <i class="el-icon-time"></i> {{ item.update_time | goodTime }} &nbsp;&nbsp; 
                    <i class="el-icon-star-on"></i>  {{ item.view_count ? item.view_count:'0'}} </span>
                </span>
              </li><br>

            </ul>

          <el-pagination ref="pageButton"
            background
            layout="prev, pager, next,jumper"
            :total="200"
            prev-text = "上一页"
            next-text = "下一页"
            :small = pgIsLittle
            :currentPage.sync = curpg
            @current-change="pgChange"
            >
          </el-pagination>

          </section>

        </el-col>
        <!--侧边栏部分。IDE中通常折叠-->
        <el-col :md="4" :lg="3">
          <aside class="aside-bar">
            <h3>专属个性阅读社区</h3>
            <ul>
              <li>
                <p> &nbsp;&nbsp; </p>&nbsp; Website Powered by
                <strong> Amazion Forest</strong>
                <i class="el-icon-message"></i>
              </li>
              <br>
              <li>
               
                <strong>&nbsp; 1234567890</strong>
                <i class="el-icon-share"></i>
              </li>
           
            </ul>
            <!--侧边栏信息区 编辑器通常折叠-->
            <div class="aside-tab">
              <h3>最新收录</h3>
              <ul class="aside-list">
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="http://free2me.top:3001">
                        <img class="aside-img" src="../../static/1.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                   <router-link  :to="{ name: 'accountInfo', params: { id: 'bwchinesewx' }}">BWC中文网</router-link>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="http://free2me.top:3001">
                        <img class="aside-img" src="../../static/2.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                  <router-link  :to="{ name: 'accountInfo', params: { id: 'nbdnews' }}">每日经济新闻</router-link>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="http://free2me.top:3001/">
                        <img class="aside-img" src="../../static/c3.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                   <router-link  :to="{ name: 'accountInfo', params: { id: 'cdzvision' }}">充电桩视界</router-link>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/4.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                   <router-link  :to="{ name: 'accountInfo', params: { id: 'kongjiansheji88' }}">空间设计</router-link>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/5.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                   <router-link  :to="{ name: 'accountInfo', params: { id: 'czxxdck' }}">中医护理</router-link>
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
                      <a href="http://free2me.top:3001">
                        <img class="aside-img" src="../../static/6.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <router-link  :to="{ name: 'accountInfo', params: { id: 'czxxdck' }}">南方都市报</router-link>
                  </strong>
                </li>
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="http://free2me.top:3001/api">
                        <img class="aside-img" src="../../static/7.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <router-link  :to="{ name: 'accountInfo', params: { id: 'czxxdck' }}">初中学习大参考</router-link>
                  </strong>
                </li>
              
               
              </ul>
            </div>
            <div class="aside-tab ad-special">
              <strong>
                <h3>资源分享</h3>
                <h3>
                  <h4><a href="https://shimo.im/">Shimo</a></h4><br>
                  <h4><a href="static/DoubanMovieTOP250(rky9).xls" download="DoubanFilm">豆瓣电影 Top 250 分享</a></h4><br>
                  <h4><a href="https://pan.baidu.com/s/1dFyCwxz">秋季档每日影单</a></h4><br> 
                </h3>
              </strong>
            </div>
            <!-- 标签区域 -->
            <div class="aside-tab">
              <h3>分类帐号</h3>
              <ul id="tagList">
                <li class="tagTitle" v-for="(tag,index) in tags" v-if="index < 28">
                  <el-tag >
                    <router-link :to="{ name: 'category', query: {tag: tag.tag}}">
                     <strong>{{tag.tag}}</strong>  </router-link>
                    <div class="border"></div>
                  </el-tag>

                </li>
              </ul>
            </div>
            <!-- 标签区域 -->
           <a href='https://clustrmaps.com/site/19utb'  title='Visit tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=300&t=tt&d=jg9wjKM1AM5wfpjis6A7Ac_oqXLqNzbv0WvjcuaqGjc&co=2d78ad&ct=ffffff'/></a>
            <!-- <a data-type="16" data-tmpl="300x360" data-tmplid="218" biz-loc_name="上海" biz-from_city="" biz-begin_date="" biz-end_date="" data-rd="2" data-style="2" data-border="1" href="#"></a>-->
          </aside>
        </el-col>

      </section>
    </el-row>

  </div>
</template>
<script>
import { goodTime } from "../config/method"; //引入时间过滤函数等方法
import clipLoader from 'vue-spinner/src/RiseLoader.vue'

export default {
  data() {
    return {
      lists: [],
      input2: "",
      ok: false,
      tags: [],
      searchBarFixed: false, // 顶栏fixed样式开关
      hshow: true,           // 顶栏是否显示
      // changeCate: false,     // 点击进入分类页开关 更新视图watch的值
      cate:'' ,
      scrollView:""  ,             // 当前分类，由对应分类标签页（el-menu-item）的子元素i的classList[1]获得
      curpg:1 ,
      pgIsLittle:false,
      loading: false,
      color: '#3AB982'
    };
  },
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
   components: {
    'clip-loader':clipLoader
  },
  created() {
    localStorage.removeItem('utitle'),
    this.get_data(),
    this.getTag(),
    this.checkMobile()
    // this.emitEvent()
    // window.addEventListener('scroll', this.showTop)
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll) // 在mounted钩子中给window添加一个滚动滚动监听事件
    // window.addEventListener("mousewheel", this.handleScroll); // 监听鼠标滚动（方向？）
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll)
    // window.removeEventListener("mousewheel", this.handleScroll); //离开页面时取消监听，避免内存溢出
  },
  watch: {
    curpg(val) {
      //  console.log('new: %s, old: %s', val, oldVal),
      this.get_data();
    },
    '$route' (to, from) {                          // 监听路由变化 重新获取数据
    //  console.log(this.$route.path)
     this.curpg = 1
     
    //  this.$refs.pageButton.currentPage=1
     this.get_data()
     
    
   }
  },

  filters: {
    goodTime(val) {
      return goodTime(val*1000);                  // 当后端时间戳位数不一致(10)，需要转换为13位js时间戳
    },
    substr: function(value) {
      return value.substring(0, 6) + "..."; //截取字符串
    }
  },
  methods: {
    // setT,
    // handleIconClick: function(ev, params) {             // 搜索功能
    //   console.log(ev)
    //   var v = this
    //   if (!params) params = {}
    //   v.$api.get('search', { kw: this.input2 }, function(r) {
    //     v.lists = r.data.search    // 追加数据（覆盖加载）
    //   })
    // },

    get_data: function(params) {
      this.loading = true;
      var v = this;
      if (!params) params = {};
      // 使用全局绑定的$api方法来获取数据
      // console.log(this.$route.params.tag)
      v.$api.get("get", { 
        list: this.$route.params.itag?this.$route.params.itag:'hot', 
        p: this.curpg   }, function(r) {
        // console.log(r.data.data);
        if(r.data.status===0){
         v.$router.replace({path: '/404'})
        }else{
               v.lists = r.data.data.sort((a, b) => b._id - a._id); // 排序(升序)/追加数据（覆盖加载）备用无限加载: v.lists.concat(r.data.sites)
               console.log(v.$route)
               v.loading = false
        } 
      });
    },
    getTag: function(params) {
      var v = this;
      if (!params) params = {};
      
      v.$api.get("category", { tag: "all" }, function(r) {
        v.tags = r.data.data; //追加数据（覆盖加载）
      });
    },
    handleScroll: function(e) {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      let clientWidth = document.documentElement.clientWidth ;
        if(scrollTop > 350 && clientWidth >960) {
          this.scrollView = "el-menu affix"
        }else{
          this.scrollView = "el-menu"
        }
      // var offsetTop = document.querySelector("#header").offsetTop;
      // if (e.deltaY < 0) {
      //   if (scrollTop - offsetTop > 100) {
      //     // 滚动距离超过元素自身距顶部距离时触发，大于100避免覆盖下层元素
      //     this.searchBarFixed = true; // 影响css类的属性
      //     this.hshow = true; // 关联transition动画
      //   } else {
      //     // 回到顶部时取消吸顶 (取消相关样式)
      //     this.searchBarFixed = false;
      //     this.hshow = true;
      //   }
      // } else if (e.deltaY > 0) {
      //   //向下滚动事件
      //   this.searchBarFixed = false;
      //   this.hshow = false;
      // }
    },
    pgChange: function(cur){
      this.curpg = cur
    },
    checkMobile: function() {
    let ua = navigator.userAgent.toLowerCase() || window.navigator.userAgent.toLowerCase();
      //判断user-agent
     let isWX = /MicroMessenger/i.test(ua)  //微信端
     let isIOS = /(iPhone|iPad|iPod|iOS)/i.test(ua) //苹果家族
     let isAndroid = /(android|nexus)/i.test(ua)  //安卓家族
     if(isWX||isIOS||isAndroid){
       this.pgIsLittle = true
     }
    }
    // getCategory: function(params) {
    //   // console.log(e.currentTarget)
    //   let v = this;
    //   if (!params) params = {};
    //   // 使用全局绑定的$api方法来获取数据
    //   v.$api.get("get", { list: this.$route.params.tag?this.$route.params.tag:'hot', p: this.page }, function(r) {
    //     console.log(r.data.data);
    //     v.lists = r.data.data.sort((a, b) => b._id - a._id); // 排序(升序)/追加数据（覆盖加载）备用无限加载: v.lists.concat(r.data.sites)
    //   });
    // }
  }
};
</script>

