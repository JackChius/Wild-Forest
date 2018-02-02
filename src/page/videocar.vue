<template>
<div class="video">
<el-row type="flex" class="row-bg" justify="center" >
    <el-col :span="24">
        <div class="grid-content bg-purple">
        <slick ref="slick" :options="slickOptions">
            <a href="#"><img src="http://image.uisdc.com/wp-content/uploads/2017/11/uisdc-bannerb-1117.jpg" alt=""></a>
            <a href="#"><img src="http://image.uisdc.com/wp-content/uploads/2017/11/uisdc-bbanner-kt1106.jpg" alt=""></a>
            <a href="#"><img src="http://image.uisdc.com/wp-content/uploads/2017/11/new-uisdc-banner-11202-1.jpg" alt=""></a>
            <a href="#"><img src="http://image.uisdc.com/wp-content/uploads/2017/11/uisdc-banner-11032-2.jpg" alt=""></a>
            <a href="#"><img src="http://image.uisdc.com/wp-content/uploads/2017/11/uisdc-C4D-Banner11102.jpg" alt=""></a>
        </slick>
        </div>
    </el-col>
</el-row>

<el-row type="flex" class="row-bg" justify="center" >
 <el-col :span="22">
    <div class="grid-content bg-purple">
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="开发视频" name="first">
            <el-row type="flex"  justify="end" :gutter="45" >
                <div class="videoArea">
                <el-col  class="videoList" v-for="(vItem,index) in videoList.coding" :key="vItem.flow" :offset="1" :span="6">    
                    <el-card class="box-card">
                        
                        <div class="text item">                                  
                           <router-link :to="{name:'video',query:{ id:vItem.flow,vname:index }}">
                             <img class="videoLogo" :src="vItem.imgsrc" alt="">
                             <div class="textContent">
                                 <h3 class="title">{{vItem.name}}</h3>
                                 <span class="alias">{{vItem.desc}}</span>
                             </div>
                           </router-link>
                        </div>
                        <div slot="header" class="clearfix">
                            <el-tag v-if="vItem.vip">VIP</el-tag>
                            <span>{{currentDate}}</span>                           
                            <el-button style="float: right; padding: 3px 0" type="text"> {{ vItem.time +'分' }}</el-button>
                           
                        </div>

                    </el-card>
                    <h1 style="visibility:hidden">Hidden</h1>
                </el-col>
                </div>
            </el-row>
        </el-tab-pane>
        <el-tab-pane label="影视资源" name="second">

            <el-row type="flex"  justify="end" :gutter="45" >
                <div class="videoArea">
                <el-col  class="videoList" v-for="(vItem,index) in videoList.movie" :key="vItem.flow" :offset="1" :span="6">    
                    <el-card class="box-card" style="background-color: rgba(193,255,193,0.4);">
                        
                        <div class="text item">                                  
                           <router-link :to="{name:'video',query:{ id:vItem.flow,vname:index }}">
                             <img class="videoLogo" :src="vItem.imgsrc" alt="">
                             <div class="textContent">
                                 <h3 class="title">{{vItem.name}}</h3>
                                 <span class="alias">{{vItem.desc}}</span>
                             </div>
                           </router-link>
                        </div>
                        <div slot="header" class="clearfix">
                            <el-tag v-if="vItem.vip">VIP</el-tag>
                            <span>{{currentDate}}</span>                           
                            <el-button style="float: right; padding: 3px 0" type="text"> {{ vItem.time +'分' }}</el-button>
                           
                        </div>

                    </el-card>
                    <h1 style="visibility:hidden">Hidden</h1>
                </el-col>
                </div>
            </el-row>

        </el-tab-pane>
        <el-tab-pane label="笔记分享" name="third">笔记分享</el-tab-pane>
        <el-tab-pane label="定时活动任务" name="fourth">定时活动任务</el-tab-pane>
        </el-tabs>
    </div>   
    </el-col> 
</el-row>
</div>
</template>

<script>
import Slick from "vue-slick";
import vData from "../../data.json"


export default {
  components: { Slick },

  data() {
    return {
      slickOptions: {
        slidesToShow: 2
        // Any other options that can be got from plugin documentation
      },
      activeName: 'first',
      currentDate: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
      videoList: vData
     
    }
    
  },
  created() {
   window.timer = setInterval(this._next,4000)
   
  },
  beforeRouteLeave (to, from, next) {
    clearInterval(window.timer)                  //当当前路由变化离开前 清除定时器(挂载在window上?或许有更好的方法?)
    next()  
  },
  watch:{
     
      '$route' (to,from) {
          this.$router.go(0)                   // 监听路由变化，刷新当前页面
      }
  
  },
  methods: {
    // _destroy () {
    //     clearInterval(this._next)
    // },
    _next() {     
      this.$refs.slick.next()
    },

    prev() {
      this.$refs.slick.prev()
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },
     handleClick(tab, event) {
        return true;
      }
  }
};
</script>

<style scoped>
@import "../../node_modules/slick-carousel/slick/slick.css";
</style>

