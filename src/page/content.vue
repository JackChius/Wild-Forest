<template>
  <div> 
    <el-row :gutter="10">
      <section class="home">
        <el-col :xs="24" :md="18" :lg="20">
         
          
          <article class="article">
           
            <h1 class="title">{{ coninfo }}</h1>
             <ring-loader :loading="loading" color="#3AB982" size="46px"></ring-loader>
            <div class="date">
              <router-link :to="{ name:this.$route.params.utag==='hot'?'index':'category', query: {tag: this.$route.params.utag}}">
                    <el-tag size="small" type="info" ><i class="el-icon-service"></i> <span style="color:#909399" > <strong>  {{this.$route.params.utag}}  </strong> </span> </el-tag>
              </router-link>
              <router-link  :to="{ name: 'accountInfo', query: { id: this.$route.params.uchatid }}">
                <strong>  <i class="el-icon-view"></i>  {{ this.$route.params.uname }} </strong>
              </router-link>
            
              <strong> {{words.wechat_id}} </strong> |
              <strong>
                <i class="el-icon-time"></i> {{this.$route.params.utime | goodTime}} </strong>
              <router-link :to="{name:'index'}"> &nbsp; 回到首页<i class="el-icon-back"></i> </router-link>
            </div>
            <strong>
           
              <div class="article_content" v-html="words.text.toString().replace(/data-src/g,'src')" ></div>              <!-- toString()过滤转义字符  -->
            </strong>
            <div style="margin-left:30px" class="bdsharebuttonbox">
              <a href="#" class="bds_more" data-cmd="more"></a>
              <a href="#" class="bds_qzone" data-cmd="qzone"></a>
              <a href="#" class="bds_tsina" data-cmd="tsina"></a>
              <a href="#" class="bds_tqq" data-cmd="tqq"></a>
              <a href="#" class="bds_renren" data-cmd="renren"></a>
              <a href="#" class="bds_weixin" data-cmd="weixin"></a>
            </div>
            <h3 class="replies_title">留言评论</h3>
            <ul class="list">
              <li>
                <i class="user_ico">
                  <img>
                  <span>Test speaking
                  </span>
                </i>
                <time class="time"></time>
                <div class="talk"></div>
              </li>
            </ul>
          </article>

        </el-col>

        <el-col :md="6" :lg="4">

          <aside class="bar">
          <h2>{{words.gzh_name}}的二维码</h2><br>
          <div style="width:80%">
           <el-card :body-style="{padding:'0px'}" class="box-card">
              <div class="text item">
                <img style="width:100%" v-bind:src="words.qr_code" alt="客官稍等-----二维码好像开小差了">
                <center> <h3> 
                  {{words.introduce}}</h3></center>
              </div>    
          </el-card>
          </div>

            <div class="aside-tab">
              <h3>本账号的相关账号</h3>
              <ul class="aside-list">
                <li class="aside-list-item">
                  <strong>
                    <span class="pic-item">
                      <a href="#">
                        <img class="aside-img" src="../../static/2.jpg" width="25" height="25" alt="test">
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
                        <img class="aside-img" src="../../static/1.jpg" width="25" height="25" alt="test">
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
                        <img class="aside-img" src="../../static/4.jpg" width="25" height="25" alt="test">
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
                        <img class="aside-img" src="../../static/c3.jpg" width="25" height="25" alt="test">
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
                        <img class="aside-img" src="../../static/6.jpg" width="25" height="25" alt="test">
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
                        <img class="aside-img" src="../../static/10.jpg" width="25" height="25" alt="test">
                      </a>
                    </span>
                    <a href="#">
                      <span>滴答滴答</span>
                    </a>
                  </strong>
                </li>
             
              </ul>
            </div>
            <!-- <div class="aside-tab ad-special">
             
            </div> -->
            <div class="aside-tab">
           
                <h3>节点导航</h3>
              <ul id="tagList">
                <li class="tagTitle" v-for="(tag,index) in tags" v-if="index < 28">
                  <el-tag size="middle" type="success">
                    <router-link :to="{ name: 'category', query: { tag: tag.tag,p: 1 } }"> <strong> {{tag.tag}} </strong></router-link>
                  </el-tag>
                </li>
              </ul>
            </div>
          </aside>

        </el-col>

      </section>

    </el-row>

  </div>
</template>

<script>
import { goodTime } from '../config/method'  //引入时间过滤函数等方法
import riseLoader from 'vue-spinner/src/MoonLoader.vue'  //加载中动画组件
export default {
  data() {
    return {
      words: [],
      show: console.log(this.$route.matched[0].path),
      tags: [],
      searchBarFixed: false,
      hshow: true,
      coninfo:'',
      loading: false
    }
  },
  components: {
    'ring-loader':riseLoader
  },
  beforeRouteLeave(to,from,next){
    if(to.name=='accountInfo'||'category'){
      let utitle = this.$route.params.utitle
      localStorage.setItem('utitle',utitle)
    }else{
      localStorage.removeItem('utitle')
    }
    next()
  },
  created() {  
    this.get_data(),
    this.getTag()
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll),
      window.addEventListener('mousewheel', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll),
    window.removeEventListener('mousewheel', this.handleScroll)
  },
  filters: {
    goodTime(val) {
      return goodTime(val*1000);                  // 当后端时间戳位数不一致(10)，需要转换为13位js时间戳
    }
  },
  methods: {
    get_data: function(params) {
     
      
      let v = this
      setTimeout(function(){  v.loading = true },1000)
      setTimeout(function(){  v.loading = false },1000)
      if (!params) params = {}
      // 使用全局绑定的$api方法来获取数据
      v.$api.get('stm', { tag: this.$route.params.tag, id: this.$route.params.id }, function(r) {
        if(r.data.status===0){      
         v.$router.replace({ path: '/404' })
        }else{
           v.words = r.data.data[0]
           let utitle = localStorage.getItem('utitle')
            console.log('utitle: '+utitle)
            if (utitle===null){
              v.coninfo = v.words.title ? v.words.title : v.$route.params.utitl
              v.loading = true
            }else{
              v.coninfo = utitle ? utitle : v.words.title
              v.loading = true
          }
        }
       
      })
    },
    getTag: function(params) {  
      console.log(this.$route)                             // 获取文章分类
      var v = this
      if (!params) params = {}
      v.$api.get('category', {tag:'all'}, function(r) {
        v.tags = r.data.data   //追加数据（覆盖加载）
      })
    },
    handleScroll: function(e) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('#header').offsetTop
      if (e.deltaY < 0) {                    //鼠标向上滑动

        if (scrollTop - offsetTop > 100) {       // 滚动距离超过元素自身距顶部距离时触发，大于100避免覆盖下层元素
          this.searchBarFixed = true              // 影响css类的属性
          this.hshow = true                       // 关联transition动画
        } else {                                 // 回到顶部时取消吸顶 (取消相关样式)
          this.searchBarFixed = false
          this.hshow = true
        }


      } else if (e.deltaY > 0) {              //向下滚动事件

        this.searchBarFixed = false
        this.hshow = false

      }
    }

  }
}
</script>

