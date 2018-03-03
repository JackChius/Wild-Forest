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
                <router-link :to="{ name: 'indexcate', params: { itag: 'book', p: 1 }}">读书</router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'indexcate', params: { itag: 'food', p: 1 }}"> 美食 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'indexcate', params: { itag: 'history', p: 1 }}"> 历史读书 </router-link>
              </li>
              <li class="tab">
                <router-link :to="{ name: 'indexcate', params: { itag: 'video', p: 1 }}"> 影视 </router-link>
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
                <h1>{{lists.msg?lists.msg:''}}</h1>
                <i class="user_ico">              
                  <img v-bind:src="item.logo">              
                </i>
                <h3>
                   <router-link  :to="{ name: 'content',params: { 
                     id: item._id ? item._id : 1,
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
          </el-pagination><br>
            <!-- 聊天室部分 -->
            <div id="loginbox" class="login-wrap" v-show="clogshow">
                <h2 class="title">聊一聊</h2><br>
                <div class="login-wrap">
                    <div class="user-ipt">
                        <h3  class="user-name">用户名：</h3><br>
                        <el-input id="chatname" v-model="chatname"  class="name-ipt" type="text" />
                    </div><br>
                    <el-button type="info" round id="loginbutton" @click="setUsername" class="login-button">现在登录,聊一聊</el-button>
                </div>
            </div>
            <div id="chatbox" class="chat-wrap" v-show="cboxshow">
                <el-alert
                  title="欢迎 "
                  :closable=false
                  type="success"> <strong> <span style="color:gray;font-size:16px;">{{ chatname}}</span>  来到聊一聊 当前在线人数: <span style="color:darkgreen;font-size:16px;">{{curChater}}</span></strong> 
                </el-alert>
                <el-card id="ctcontent"  class="chat-content">
                   <ul>
                     <li v-for="item in chatList">
                       <strong>
                         <p :class="item.look"> <span id="otherpo">{{item.username}}</span> <el-tag type="success" id="curmsg">  {{item.msg}}  </el-tag>  <span id="selfpo">   {{item.username}}  </span> </p>
                       </strong>
                     </li>
                   </ul>
                </el-card>
               <el-card>
                    <el-input v-model="chatcon" @keydown.native="chatmit($event)" rows="3" cols="50" id="chatmessage" class="message-ipt" type="textarea" placeholder="请输入要发送的内容 Enter发送"></el-input>
               </el-card>
            </div>
        <!-- 聊天室部分 -->
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
                     <strong>{{tag[1]}}</strong>  </router-link>
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
import clipLoader from "vue-spinner/src/RiseLoader.vue";
let PassRes = true; // 限制访问预留变量，如果有的话
export default {
  data() {
    return {
      lists: [],
      input2: "",
      ok: false,
      tags: [],
      searchBarFixed: false, // 顶栏fixed样式开关
      hshow: true, // 顶栏是否显示
      // changeCate: false,     // 点击进入分类页开关 更新视图watch的值
      cate: "",
      scrollView: "", // 当前分类，由对应分类标签页（el-menu-item）的子元素i的classList[1]获得
      curpg: 1,
      pgIsLittle: false,
      loading: false,
      color: "#3AB982",
      chatname: "",
      cboxshow: false,
      clogshow: true,
      chatcon: "",
      chatList: [],
      curChater: ''
    };
  },
  props: {
    page: {
      type: Number,
      default: 1
    }
  },
  components: {
    "clip-loader": clipLoader
  },
  created() {
    localStorage.removeItem("utitle"),
      this.get_data(),
      this.getTag(),
      this.checkMobile();
    // this.emitEvent()
    // window.addEventListener('scroll', this.showTop)
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 在mounted钩子中给window添加一个滚动滚动监听事件
    // window.addEventListener("mousewheel", this.handleScroll); // 监听鼠标滚动（方向？）
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    // window.removeEventListener("mousewheel", this.handleScroll); //离开页面时取消监听，避免内存溢出
  },
  watch: {
    curpg(val) {
      //  console.log('new: %s, old: %s', val, oldVal),
      this.get_data();
    },
    $route(to, from) {
      // 监听路由变化 重新获取数据
      //  console.log(this.$route.path)
      this.curpg = 1;
      //  this.$refs.pageButton.currentPage=1
      this.get_data();
    },
    chatList() {
      this.$nextTick(() => {
        document.getElementById(
          "ctcontent"
        ).scrollTop = document.getElementById("ctcontent").scrollHeight;
      });
    }
  },
  // updated: function(){
  //    document.getElementById('ctcontent').scrollTop = document.getElementById('ctcontent').scrollHeight;
  // },                 // 和watch chatList都可以监听并自动滚动聊天窗口到底部

  filters: {
    goodTime(val) {
      return goodTime(val * 1000); // 当后端时间戳位数不一致(10)，需要转换为13位js时间戳
    },
    substr: function(value) {
      return value.substring(0, 6) + "..."; //截取字符串
    }
  },

  sockets: {
    connect: function() {
      console.log("socket connected");
    },
    loginResult: function(data) {
      if (data.code === 0) {
        console.log('当前在线人数'+data.curChater);
        this.curChater = data.curChater;
        let welData = {
          username: this.chatname,
          message: '欢迎欢迎[此条消息由系统自动发送233]'
        };
        this.showMessage(welData);
        this.showChatRoom();
        console.log("初次登录多多关照");
      } else if (data.code === 1) {
      this.$notify({
          title: "功能提示",
          message:  this.chatname + " 你已登录过,后续功能开发完成前,你需要换个马甲" ,
          position: "top-right"
        });
      } else {
        alert("登录失败！");
      }
    },
    receiveMessage: function(data) {
      this.showMessage(data);
      console.log("123");
    },
    userDiscon: function(data) {
     this.curChater = data.curChater;
     this.$notify({
          title: "最新动态",
          message:  data.msg ,
          position: "bottom-right"
        });
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
      v.$api.get(
        "get",
        {
          list: this.$route.params.itag ? this.$route.params.itag : "hot",
          p: this.curpg
        },
        function(r) {
          // console.log(r.data.data);
          if (r.data.status === 0) {
            v.lists = r.data ? r.data : "";
            v.$router.push({ path: "/" });
          } else {
            let testAr = [
              { title: "此类目下暂无内容" },
              { title: "请等一下", tag: "......\n" }
            ];
            for (let i = 3; i < 15; i++) {
              testAr.push({
                title: " ...",
                tag: " ...",
                update_time: '160030078'
              });
            }
            v.lists = r.data.data.length != 0 ? r.data.data : testAr;
            //  r.data.data.sort((a, b) => b._id - a._id);  // 可按json里的_id属性排序(升序)/追加数据（覆盖加载）备用无限加载: v.lists.concat(r.data.sites)
            console.log(v.$route);
            v.loading = false;
          }
        }
      );
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
      let clientWidth = document.documentElement.clientWidth;
      if (scrollTop > 350 && clientWidth > 960) {
        this.scrollView = "el-menu affix";
      } else {
        this.scrollView = "el-menu";
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
    pgChange: function(cur) {
      this.curpg = cur;
    },
    checkMobile: function() {
      let ua =
        navigator.userAgent.toLowerCase() ||
        window.navigator.userAgent.toLowerCase();
      //判断user-agent
      let isWX = /MicroMessenger/i.test(ua); //微信端
      let isIOS = /(iPhone|iPad|iPod|iOS)/i.test(ua); //苹果家族
      let isAndroid = /(android|nexus)/i.test(ua); //安卓家族
      if (isWX || isIOS || isAndroid) {
        this.pgIsLittle = true;
      }
    },
    setUsername: function() {
      let _username = this.chatname; //得到输入框中用户输入的用户名
      console.log(_username);
      //判断用户名是否存在
      if (_username) {
        this.$socket.emit("login", { username: _username }); //如果用户名存在，就代表可以登录了，我们就触发登录事件，就相当于告诉服务器我们要登录了
        this.$notify({
          title: "一条提示",
          message: "登录成功 欢迎 " + _username,
          position: "top-right"
        });
      } else {
        this.$notify({
          title: "一条提示",
          message: "请输入你的大名",
          position: "bottom-right"
        });
      }
    },
    showChatRoom: function() {
      this.clogshow = false;
      this.cboxshow = true;
    },
    sendMsg: function() {
      let _message = this.chatcon; //得到要发送的的对话信息
      if (_message.length > 1) {
        this.$socket.emit("sendMessage", {
          username: this.chatname,
          message: _message
        });
      } else {
        this.$notify({
          title: "一条提示",
          message: "请输入发送消息...",
          position: "bottom-right"
        });
      }
    },
    chatmit: function(ev) {
      if (ev.keyCode === 13) {
        this.sendMsg();
        this.chatcon = "";
      }
    },
    showMessage: function(data) {
      //先判断这个消息是不是自己发出的，然后再以不同的样式显示
      if (data.username === this.chatname) {
        this.chatList.push({
          username: data.username,
          msg: data.message,
          look: "selfca"
        });
      } else {
        this.chatList.push({
          username: data.username,
          msg: data.message,
          look: "otherca"
        });

        // $("#content").append(`<p class='other-message'><span class='name'>${data.username}: </span><span class='msg'>${data.message}</span></p>`);
      }
    }
  }
};
</script>

<style scoped>
.selfca {
  color: goldenrod;
  text-align: right;
}
.selfca span#curmsg {
  font-size: 18px;
  color: darkgreen;
}
.selfca span#otherpo {
  display: none;
}
.otherca {
  color: green;
  text-align-last: start;
}
.otherca span#otherpo {
  color: skyblue;
}
.otherca span#selfpo {
  display: none;
}
.otherca span#curmsg {
  font-size: 18px;
  color: darkolivegreen;
  background-color: lightcyan;
}
#chatbox #ctcontent {
  height: 390px;
  overflow: auto;
}
</style>


