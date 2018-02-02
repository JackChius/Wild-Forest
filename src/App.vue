<template>
  <div>

       <!--Header start-->
    <transition name="slide">
      <!-- Vue动画层 -->
      <header v-show="hshow" id="header" :class="searchBarFixed == true ? 'header isFixed' :'header' ">
        <!--设定class跟fixed样式绑定-->
        <h1 class="logo">
          <a href="/" title="Micro-site">Micro-site</a>
        </h1>
        <!-- <el-input class="find" placeholder="搜索" icon="search" v-model="input2" @keyup.enter.native="handleIconClick" :on-icon-click="handleIconClick">
        </el-input> -->
        <nav class="nav">

          <ul>
            <li>
               <router-link class="on" :to="{ name: 'index' } "><strong>推荐</strong></router-link>
            </li>
            <li>
               <router-link style="font-size:15px;" :to="{ name: 'videocar'} " ><strong><span style="color:black">黑</span>仓库</strong></router-link>           
            </li>
            <li>
              <a href="#" title="推荐" >推荐账号</a>
            </li>
            <li>
              <a href="#" >关于</a>
            </li>
          </ul>
        </nav>
      </header>
    </transition>
    <!--Header end-->    
   
    <router-view class="view" :page="page"   transition transition-mode="out-in">
 <!-- :trigger="finsh" @update:trigger="val => finish = val"   -->
    </router-view>

    <center>
      
      <!-- <div id="pageB" v-if="this.$route.name=='index' " >
        <a class="button curP " @click="back1"> 首页 </a>
        <a class="button" @click="prev">前一页
          <span>{{page-1}}</span>
        </a>
        <a class="button curP">
          <span>{{page}}</span>
        </a>
        <a class="button" @click="next">下一页
          <span>{{page+1}}</span>
        </a>
        <!-- 加载动画开始 -->
        <!-- <div id="loader" v-show="!finish" :transition="up? 'up-start':'down-start'">
          <span>Loading</span>
        </div> -->
        <!-- 加载动画结束 -->
      <!-- </div>  -->
    </center>
    <div v-on:click="goTop" v-show="ok" class="go_top"></div> <br><br><br><br>
    <footer class="copy">
    © 2017 Artistic index Page. All Rights Reserved | Design by QiquLand
    </footer>
  </div>
</template>

<script>

export default {
  data() {
    return {
      page: 1,
      ok: false,
      finish: true,
      up: false,
      searchBarFixed: false, // 顶栏fixed样式开关 
      hshow: true            // 顶栏是否显示   
    }
  },

  created() {  
      window.addEventListener('scroll', this.showTop)     //添加滚动事件监听  不能直接created showTop()
  },

  methods: {
    // next() {
    //   if (this.page !== 9) {
    //     this.page++
    //     this.up = false
    //     this.finish = false        
    //   }
    // },
    // prev() {
    //   if (this.page !== 1) {
    //     this.page--
    //     this.up = true
    //     this.finish = false
    //   }
    // },
    // back1() {
    //   this.page = 1
    // },
    showTop: function () {
      document.body.scrollTop > 350 || document.documentElement.scrollTop ? this.ok = true : this.ok = false
     
    },
    goTop: function (event) {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  },
  components: {}
}
</script>

<style lang="scss">
@import "./style/style";
</style>
<style scoped>
 html, body {
    height: 100%;
  }
.button {
  display: inline-block;
  width: 110px;
  background: #212121;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding: 1em;
  cursor: pointer;
  text-decoration: none;
  margin-top: 20px;
  top: 0px;
  transition: top, width, height 0.5s, 0.5s, 1s;
  /* height: 10px; */
}

.button:hover {
  position: relative;
  top: -2px;
  width: 150px;
  /* height: 50px; */
  transition: top, width, height 0.5s, 0.5s, 1s;
  box-shadow: -1px 6px lightgrey;
}

.button span {
  margin-left: 2em;
  font-size: .5rem;
  color: #d6d6d6;
}

.curP {
  width: 50px;
}

.curP span {
  margin-left: -1px;
  font-size: 1.1rem;
}

#pageB {
  margin-right: 60px;
}


/* 加载动画部分 */

#loader {
  width: 100%;
  min-height: 3em;
  position: fixed;
  left: 0;
  background: #212121;
  color: black;
}

#loader span {
  display: block;
  width: 100%;
  text-align: center;
  position: absolute;
  top: 50%;
  margin-top: -0.5em;
}

.down-start-transition {
  bottom: 0;
  height: 100%;
}

.down-start-enter {
  animation: expand .5s 1 cubic-bezier(0, 1, 0, 1) both;
}

.down-start-leave {
  animation: collapse .5s 1 cubic-bezier(0, 1, 0, 1) both;
  top: 0;
  bottom: auto;
}

.up-start-transition {
  top: 0;
  height: 100%;
}

.up-start-enter {
  animation: expand .5s 1 cubic-bezier(0, 1, 0, 1) both;
}

.up-start-leave {
  animation: collapse .5s 1 cubic-bezier(0, 1, 0, 1) both;
  top: auto;
  bottom: 0;
}

@keyframes expand {
  0% {
    height: 3em;
    transform: translate3d(0, 0, 0);
  }
  100% {
    height: 100%;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes collapse {
  0% {
    height: 100%;
    transform: translate3d(0, 0, 0);
  }
  100% {
    height: 3em;
    transform: translate3d(0, 0, 0);
  }
}
</style>
