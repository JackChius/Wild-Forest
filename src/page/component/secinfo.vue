<template>
<div class="secinfo">
  <el-col :xs="22" :md="12" :lg="12">
      <el-tabs type="border-card">
        <el-tab-pane label="滑一滑">
          <!-- <el-carousel style="  text-align: center; background-color:gray;" height="150px">
            <el-carousel-item v-for="item in 4" :key="item">
              <br><br><br><br>  <h2 style="color:white" >{{ item }}</h2>
          </el-carousel-item>
    
          </el-carousel> -->
        <div>
        <h3>游戏指南 : 按下方向键，向迷宫底部出口出发</h3><br>
        <el-button @click="loadHard">升级困难迷宫</el-button>
        <el-button @click="loadEasy">简单迷宫</el-button>
        <!-- <el-button @click="changeClo">换装</el-button> -->
        </div><br>
        <canvas id="crash"></canvas>
        <img style="display:none" id="face" src="static/images/laugh.png">

         <canvas id="canvas" width="300" height="300" style="border:1px dotted green">Canvas画板</canvas>
         <br><el-button type="info" v-on:click="clear">擦除</el-button>
         <el-button  type="success" v-on:click="drawMethod">生长</el-button>
         <el-button type="success" v-on:click="plusDot">+</el-button>
         <el-button type="success" v-on:click="subDot">-</el-button>
       

        </el-tab-pane>
        <el-tab-pane label="黑科技">
               <ul>
                <li v-for="item in mlist.coding">
                    <h3>{{item.name}}</h3>
                    <el-tag type="success">{{item.desc}}</el-tag>
                </li>
            </ul>
        </el-tab-pane>
        <el-tab-pane label="日常心得">
           1
        </el-tab-pane>
        <el-tab-pane label="小饼干">小饼干</el-tab-pane>
      </el-tabs>
  </el-col>
  <el-col :xs="22" :md="12" :lg="12">
      <el-tabs type="border-card">
        <el-tab-pane label="实用源码">
            <ul>
                <li v-for="item in mlist.coding">
                    <h3>{{item.name}}</h3>
                    <el-tag type="success">{{item.desc}}</el-tag>
                </li>
            </ul>
        </el-tab-pane>
        <el-tab-pane label="绿色工具">
              <ul>
                <li v-for="item in mlist.movie">
                    <h3>{{item.name}}</h3>
                    <el-tag type="success">{{item.desc}}</el-tag>
                </li>
            </ul>
        </el-tab-pane>
        <el-tab-pane label="开源动态">开源动态</el-tab-pane>
        <el-tab-pane label="小技巧">小技巧</el-tab-pane>
      </el-tabs>
  </el-col>
</div>
</template>

<script>
import vData from "../../../data.json";
var draw;
var myCrash;
// timer引用，这样重新加载迷宫的时候可以很方便地停止绘制
var timer;

class Draw {
  constructor(el) {
    this.el = el;
    this.canvas = document.getElementById(this.el);
    this.ctx = this.canvas.getContext("2d");
    this.stage_info = canvas.getBoundingClientRect();
    this.cw = 300; // 画布分辨率
    this.ch = 300; // 画布分辨率
    this.path = {
      beginX: 0,
      beginY: 0,
      endX: 0,
      endY: 0
    };
  }
  clear() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 300, 250);
    this.ctx.clearRect(0, 10, 300, 300);
  }
}

export default {
  name: "secinfo",
  data() {
    return {
      mlist: [],
      drawDot: 50,
      x: 0, // 记录笑脸图标的当前位置
      y: 0,
      dx: 0, // 记录笑脸在x轴和y轴方向上每一帧要移动多少像素
      dy: 0,
      laughSrc: ''
    };
  },
  mounted() {
    //  draw = new Draw('canvas');
    this.drawMethod();
    this.drawCrash();
    //  this.drawLine(draw);
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo: function() {
      this.mlist = vData;
      console.log(this.mlist);
    },
    drawLine: function(target, i) {
      target.ctx.beginPath();
      // target.ctx.lineWidth = 5
      // target.ctx.moveTo(i,i)
      // target.ctx.lineTo(260,200)
      //  target.ctx.closePath();
      // target.ctx.stroke()
      target.ctx.moveTo(i, 0);
      target.ctx.quadraticCurveTo(55, 5, 55, 25);
      target.ctx.lineTo(55, 40);
      target.ctx.arc(60, 40, 5, Math.PI, Math.PI / 2, true);
      target.ctx.lineTo(75, i);
      target.ctx.quadraticCurveTo(95, 45, 100, 50);
      target.ctx.lineTo(i, 0);

      var gradient = target.ctx.createLinearGradient(50, 50, 75, 75);
      gradient.addColorStop(0, "#ccc");
      gradient.addColorStop(0.7, "#111");
      gradient.addColorStop(1, "#000");
      target.ctx.fillStyle = gradient;
      target.ctx.fill();
    },
    drawMethod: function(item) {
      draw = new Draw("canvas");
      var dci = this.drawDot;
      this.drawLine(draw, dci);
      // draw.ctx.clearRect(0, 0, 300, 300);
      //   window.requestAnimationFrame(function(){
      //     draw();
      // })
    },
    clear: function() {
      draw.clear();
    },
    plusDot: function() {
      this.drawDot += 30;
    },
    subDot: function() {
      this.drawDot -= 30;
    },
    drawCrash: function() {
      myCrash = new Draw("crash");
      this.drawMaze("static/images/jiandan.png", 5, 5); // 绘制迷宫背景
      window.onkeydown = this.processKey;
    },
    processKey: function(e) {
      // 如果笑脸在移动，停止
      this.dx = 0;
      this.dy = 0;
      // 按下了向上键，向上移动
      if (e.keyCode == 38) {
        e.preventDefault();
        this.dy = -1;
      }

      // 按下了向下键，向下移动
      if (e.keyCode == 40) {
        this.dy = 1;
      }

      // 按下了向左键，向左移动
      if (e.keyCode == 37) {
        this.dx = -1;
      }

      // 按下了向右键，向右移动
      if (e.keyCode == 39) {
        this.dx = 1;
      }
    },
    drawMaze: function(mazeFile, startingX, startingY) {
      // 先停止绘制
      clearTimeout(timer);
      // 停止笑脸
      this.dx = 0;
      this.dy = 0;
      // 加载迷宫图片
      var imgMaze = new Image();
      let that = this;
      imgMaze.onload = function() {
        // 调整画布大小以适应迷宫图片
        myCrash.canvas.width = imgMaze.width;
        myCrash.canvas.height = imgMaze.height;

        // 绘制迷宫
        myCrash.ctx.drawImage(imgMaze, 0, 0);

        // 绘制笑脸
        that.x = startingX;
        that.y = startingY;

        var imgFace = document.getElementById("face");
        myCrash.ctx.drawImage(imgFace, that.x, that.y);
        myCrash.ctx.stroke();
        // 10毫秒后绘制下一帧
        timer = setTimeout(that.drawFrame, 10);
      };
      imgMaze.src = mazeFile;
    },
    drawFrame: function() {
      let that = this;
      // 检测笑脸是否正在哪个方向上移动，如果不是，则什么也不做。
      if (this.dx != 0 || this.dy != 0) {
        // 在笑脸当前位置绘制一块黄色背景（表示移动痕迹），然后把笑脸移到下一个位置
        myCrash.ctx.beginPath();
        myCrash.ctx.fillStyle = "rgb(254,244,207)";
        myCrash.ctx.rect(that.x, that.y, 15, 15);
        myCrash.ctx.fill();

        // 增大位置值
        that.x += that.dx;
        that.y += that.dy;

        // 碰撞检测（撞墙的话笑脸需要放回上一个位置并停止移动）
        if (that.checkForCollision()) {
          that.x -= that.dx;
          that.y -= that.dy;
          that.dx = 0;
          that.dy = 0;
        }

        // 这里可以绘制笑脸
        var imgFace = document.getElementById("face");
        myCrash.ctx.drawImage(imgFace, that.x, that.y);

        // 检测笑脸是否已经到达迷宫底部，是的话提示成功
        if (that.y > myCrash.canvas.height - 19) {
          this.$alert("真棒~不过你好像还没拿到宝藏呢~", "通关!!", {
            confirmButtonText: "OK",
            callback: action => {
              this.$message({
                type: "success",
                message: `action: ${action}`
              });
            }
          });
          return;
        }
      }
      // 10毫秒后绘制下一正
      timer = setTimeout(this.drawFrame, 10);
    },
    checkForCollision: function() {
      // 取得笑脸所在的像素块，再稍微扩展一点
      let imgData = myCrash.ctx.getImageData(
        this.x - 1,
        this.y - 1,
        15 + 3,
        15 + 3
      );
      let pixels = imgData.data;
      let n = pixels.length;

      // 检测其中的像素
      for (let i = 0; i < n; i += 4) {
        var red = pixels[i];
        var green = pixels[i + 1];
        var blue = pixels[i + 2];
        var alpha = pixels[i + 3];

        // 检测黑色的墙（如果检测到，说明撞墙了）
        if (red == 0 && green == 0 && blue == 0) {
          return true;
        }
        // 检测灰色的边（如果检测到，说明撞墙了）
        if (red == 169 && green == 169 && blue == 169) {
          return true;
        }
      }
      // 没有撞墙
      return false;
    },
    loadEasy: function() {
      this.drawMaze("static/images/jiandan.png", 5, 5);
    },
    loadHard: function() {
      this.drawMaze("static/images/fuza.png", 268, 5);
    },
    changeClo: function() {
      this.laughSrc = ''
    }
  }
};
</script>

<style>
.jk {
  text-align: center;
}
</style>


