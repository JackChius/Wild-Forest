<template>
   <div id="app">
        <div class="container">
            <el-row>
                <el-col :offset="2" :span="15">
                    <br><h1>{{curData}}</h1><br><br>
                </el-col>          
            </el-row>
            <el-row type="flex" justify="center">
                
                <el-col :span="18">
                  
                  <my-video ref="profile" :sources="video.sources" :options="video.options"></my-video>
              
                </el-col>
            </el-row><br>
            <el-row type="flex" justify="space-around">
                <el-col :span="8">
                    <el-tag  type="info" plain><h3> {{curTime }} </h3></el-tag>&nbsp;&nbsp;
                    <el-button v-if="canPress"  size="middle">
                        <router-link :to="{name:'video',query:{ id:preVideoName, vname:Number(this.$route.query.vname)-1 }}">上一节</router-link>
                    </el-button>
                    <el-button size="middle">
                     <router-link :to="{name:'video',query:{ id:nextVideoName, vname:Number(this.$route.query.vname)+1 }}">下一节</router-link>
                    </el-button>
                    <el-button size="middle"><router-link :to="{ name: 'videocar'} " >返回</router-link> </el-button>
                </el-col>   
                <el-col :span="4">
                    <el-select  v-model="value" @change="setPlaySpeed" placeholder="播放速度">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.sppedValue"
                        >
                        </el-option>
                    </el-select>
                </el-col>               
            </el-row><br>
            <el-row type="flex" justify="start">
                 <el-col :offset="4" :span="16">
                    <el-tag style="margin:20px 0;" ><h2>评论</h2> </el-tag>
                    <hr></hr>  <br><br>
                    <el-input
                        class="commentInput"
                        type="textarea"
                        :rows="8"
                        resize="none"
                        placeholder="开始输入内容"
                        v-model="textarea">
                    </el-input>
                    <el-button type="success" plain  >提交评论</el-button>
                    <el-button type="warning" plain >取消</el-button>
                </el-col>
            </el-row>

               

        </div>
    </div>
</template>

<script>
import myVideo from "vue-video";
import vData from "../../data.json"

const film = document.getElementsByTagName("video");      // 当前视频子组件<video>本体

export default {
  data() {
    return {
      video: {
        sources: [
          {
            src:
              "http://static.free2me.top/" +
              this.$route.query.id +
              ".mp4",
            type: "video/mp4"
          }
        ],
        options: {
          autoplay: false,
          volume: 0.8,
          poster: this.curSrc
        }
      },
      curSpeed: "", // 视频当前播放速度
      textarea: "", // 评论默认内容
      curTime: 0,   //当前已播放时间
      options: [
        {
          sppedValue: "选项0.5",
          label: "0.5"
        },
        {
          sppedValue: "选项1",
          label: "1"
        },
        {
          sppedValue: "选项1.5",
          label: "1.5"
        },
        {
          sppedValue: "选项2",
          label: "2"
        },
        {
          sppedValue: "选项2.5",
          label: "2.5"
        }
      ],
      value: '',
      curData: '',
      curSrc:'',
      preVideoName:'1',
      nextVideoName:this.$route.query.id.substr(0,1)=='s' ? 'stanger2':'1' ,           // ！！待解决BUG 分类第一个视频在getVip方法中无法获取路由信息
      canPress:false
    };
  },
  mounted() {
    window.addEventListener("keyup", this.handleKey) // 在mounted钩子中给window添加一个键盘监听事件
    film[0].addEventListener("click",this.handleMouse) //鼠标监听点击播放暂停
    film[0].addEventListener("timeupdate",this.getPlayTime)    //取得当前播放秒数
  },
  destroyed() {
    window.removeEventListener("keyup", this.handleKey) // 解除在mounted钩子中给window添加一个键盘监听事件
    film[0].removeEventListener("click",this.handleMouse) //解除鼠标点击播放暂停
    film[0].removeEventListener("timeupdate",this.getPlayTime)    //解除取得当前播放秒数
  },
  created() {
      this.getVip(),
      this.canButton()
  },
  watch:{
      '$route' (to,from) {
          this.$router.go(0)                   // 监听路由变化，刷新当前页面
      }
  },
  beforeRouteEnter(to,from,next){
    // let v = this
    let routeQuery = to.query
    let isVip = vData.coding[routeQuery.vname].vip 
    if(isVip){  
                next(vm=>{
                vm.$prompt('邀请码', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                inputPattern: /^(2017)$/,
                inputErrorMessage: '无效的邀请码',
                lockScroll: true
                }).then(({ value }) => {
                vm.$message({
                    type: 'success',
                    message: '欢迎' + value
                });
                }).catch(() => {
                vm.$router.go(-1)
                vm.$message({
                    type: 'info',
                    message: '取消浏览'
                });       
                });  
                })  
                      
          }
   
  },
  methods: {
    getPlayTime() {
      this.curTime = Math.floor(film[0].currentTime)
    //   console.log(film[0].currentTime); //获取视频/音频的播放速度
    },
    setPlaySpeed(cur) {
      this.curSpeed = cur.substr(2);        // 切割字符串取数字部分
      film[0].playbackRate = this.curSpeed; //设置视频/音频的播放速度

    },
    handleKey(event) {
       if(event.keyCode == '32'){      
           let childPlay = this.$refs.profile.play()
       
       }
    },
    handleMouse(e) {        
           let childPlay2 = this.$refs.profile.play()
        //    console.log(e.type)  
       },
    getVip (){
        let v = this
        let routeQuery = this.$route.query
        let routerId = this.$route.query.id      
        let isVip = vData.coding[routeQuery.vname].vip          // 判断有无VIP标识

        let isCoding = vData.coding
        let isMovie = vData.movie

        let isCodingName = vData.coding[routeQuery.vname].name
        let isMovieName = vData.movie[routeQuery.vname].name

        let isCodingSrc = vData.coding[routeQuery.vname].imgsrc
        let isMovieSrc = vData.movie[routeQuery.vname].imgsrc

        let curRouterId = routerId.substr(0,1)
        if(curRouterId == "s"){  
            
            this.curData =  isMovieName 
            this.curSrc =  isMovieSrc                                 // S开头为Movie类视频
            this.preVideoName = isMovie[(routeQuery.vname)-1].flow   // 取得上一节视频flow名称作为路由的ID
            this.nextVideoName = isMovie[Number(routeQuery.vname)+1].flow    
            // console.log(this.$route.query) 放这里获取不到当前路由信息 why？   
            
        }else{   
           
            this.curData =  isCodingName   
            this.curSrc =  isCodingSrc                                                // 否则为Coding类视频
            this.preVideoName = isCoding[(routeQuery.vname)-1].flow      // 取得上一节视频flow名称作为路由的ID
            this.nextVideoName = isCoding[Number(routeQuery.vname)+1].flow 
            
          }
        },
        // next(){
        //     return false;  /^(2017)$/
        // },
        canButton() {
            console.log(this.$route.query)
            if(this.$route.query.vname == '0') {
                this.canPress = false
            }else{
                this.canPress = true
            }
        }
    },
  
  components: {
    myVideo
  }
};
</script>
