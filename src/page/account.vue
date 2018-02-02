<template>
  <div>
    <!--Header start-->
    <header class="header">
      <h1 class="logo">
        <a href="index.html" title="Micro-site">Micro-site</a>
      </h1>
      <el-input class="find" placeholder="请输入内容" icon="search" v-model="input2" :on-icon-click="handleIconClick">
      </el-input>
      <nav class="nav">
  
        <ul>
          <li>
            <a href="index.html" class="on">首页</a>
          </li>
          <li>
            <a href="#" target="_blank">最新收录</a>
          </li>
          <li>
            <a href="#" title="推荐" target="_blank">推荐账号</a>
          </li>
          <li>
            <a href="#" target="_blank">关于</a>
          </li>
        </ul>
      </nav>
    </header>
    <!--Header end-->
    <!-- <div id="main-wrapper"> -->
    <el-row :gutter="10">
      <section class="home">
        <el-col :md="4" :lg="3">
          <div class="e_col w1">
  
           <ul class="simple_tabs">
              <li class="tab">
                <span style="font-weight: bold">
                  <a href="index.html"> 动态 </a>
                </span>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'tourism' }}"> 旅行 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'cate' }}"> 美食 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'car' }}"> 汽车 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'funny' }}"> 搞笑 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'news' }}"> 新闻 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'life' }}"> 生活 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'Bisexual' }}"> 两性 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'comic' }}"> 漫画 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'game' }}"> 游戏 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'category', params: { id: 'history' }}"> 历史 </router-link>
              </li>
            </ul>
  
          </div>
        </el-col>
        <el-col :xs="24" :md="16" :lg="18">
          <section class="main">
            <!-- 循环接收服务器数据开始 -->
            <ul class="list">
              <li v-for="item in lists">
                <i class="user_ico">
                  <img :src="item.logo" v-bind:alt="item.wechat_id">
                  <span>
                    <router-link :to="{ name: 'content', params: { id: item.id }}"> {{item.gzh_name}} </router-link>
                  </span>
                </i>
                <time class="time"> 帐号分类 : {{ item.tag }} </time>
                <h3>
                  <router-link :to="{ name: 'content', params: { id: item.id }}"> {{item.title}} </router-link>
                </h3>
                <strong>
                  <div class="article_content" v-html="item.introduce"></div>
                </strong>
                <span class="ckey">
                  <!-- <router-link :class="classA" :to="{ name: 'account', params: { id: item.wechat_id }}" > {{ item.wechat_id }} </router-link> -->
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
                <h3>云服务提供</h3>
                <h3>
                  <a href="http://www.aliyun.com">阿里云</a>
                </h3>
              </strong>
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
      lists: [],
      input2: '',
      classA: 'test'
    }
  },
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  created() {
    this.get_data(),
      this.watchName()
  },
  watch: {
    page(val) {
      //  console.log('new: %s, old: %s', val, oldVal),
      this.get_data()
    },
    classA: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    }
  },
  filters: {
    goodTime(val) {
      return goodTime(val)
    }
  },
  methods: {
    get_data: function (params) {
      var v = this
      if (!params) params = {}
      // 使用全局绑定的$api方法来获取数据
      v.$api.get('account?id=' + this.$route.params.id, params, function (r) {
     
        v.lists = r.data.account    //追加数据（非覆盖加载）
      })

    }

  }
}
</script>