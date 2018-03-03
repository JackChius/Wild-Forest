<template>
    <div>
      <!-- <app-logo/> -->
       <div class="container-fluid">
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">一个开源集</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">首页 <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">发现</a>
              </li>
              <li  class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  开源项目
                </a>
                <div  :class="dropClass" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="#">工具集</a>
                  <a class="dropdown-item" href="#">Another action</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">专题</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="请输入关键字" aria-label="Search">
              <button class="btn btn-outline-success my-2 my-sm-0" type="submit">检索</button>
            </form>
          </div>
        </nav>
        </div>

        <div class="ftab row justify-content-center ">
          <div class="watch col-11 ">
          <div class="index-hottags box">
                    <ul>
                        <div class="tit"><h3>热门编程语言</h3></div>
                                <li v-for="data in hot_lng" :key="data">
                                    <nuxt-link to="/about">{{data}}</nuxt-link>
                                </li>
                    </ul>
                    <ul>
                        <div class="tit"><h3>热搜关键词</h3></div> 
                            <li v-for="data in hot_fr" :key="data">
                               <nuxt-link to="/about">{{data}}</nuxt-link>
                            </li>
                    </ul>
                </div>
          </div>   
        </div>

        <div class="row justify-content-md-center">
          <div class="batch col col-md-2">
            <dl>
              <dt><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">源码清单</font></font></dt>
              <dd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">左侧分栏区域-最新收录</font></font></dd>
              <dt><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Euismod</font></font></dt>
              <dd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Vestibulum id ligula porta felis euismod semper eget lacinia odio sem。</font></font></dd>
              <dd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">在eget metus的Donec id elit non mi porta gravida。</font></font></dd>
              <dt><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Malesuada porta</font></font></dt>
              <dd><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Etiam porta sem malesuada magna mollis euismod。</font></font></dd>
            </dl>
          </div>
          <div class="batch col-md-7">
             <div class="list-group">
                <nuxt-link to="/about" v-for="data in cats" :key="data.name" class="list-group-item list-group-item-action flex-column align-items-start ">
                  <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">{{data.name}}</h5>
                    <small>3 days ago</small>
                  </div>
                  <p class="mb-1">{{data.desc}}.</p>
                  <small>Donec id </small>
                </nuxt-link>
              </div>
          </div>
          <div class="batch  col-md-2">
            <details>
              <summary><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右侧分栏区域</font></font></summary>
              <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">右侧分栏区域-编辑推荐</font></font></p>
            </details>
            <details open="">
              <summary><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">更多细节</font></font></summary>
              <p><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">这里有更多关于细节的细节。</font></font></p>
            </details>
          </div>
        </div>
   
    </div>
</template>

<script>
import AppLogo from "~/components/AppLogo.vue";

export default {
  components: {
    AppLogo
  },
  head: {
    title: "一个超酷的地方"
  },
  data() {
    return {
      name: "One of Gold columns",
      cats:[
        {name:'Wekan 0.74 基于 Meteor 的看板管理应用',desc:'Wekan 是模仿 Trello 且最接近其的开源 KanBan 管理应用，它的前端后端都是用 JavaScript 写的，基于 Meteor 框架'},
        {name:'Jboot v1.3.4 ，新增在线流量控制，无需重启服务器',desc:'Jboot 是一个基于 JFinal 和 Undertow 开发的微服务框架'}
      ],
      hot_lng:['Java','Python','Golang','Php','C#','Js','Kotlin','Swift','Html/Css','Ruby'],
      hot_fr:['小程序','管理后台','Android','开发框架','爬虫','模板','微信','.net core','mvc'],
      dropClass: 'dropdown-menu'
    };
  },
  methods: {
    // showDrop () {
    //   this.dropClass = 'dropdown-menu showing'
    // }
  }
};
</script>

<style>
.watch{
  color: #444;
  background: #fff;
  border: 1px solid #e7eaf1;
  padding: 5px 0px 0px 5px;
  height: 93px;
}
.batch{
  background-color: rgba(217,247,249, 0.6);
  border-right: 5px solid #f7f8fa;
  border-left: 5px solid #f7f8fa;
}
.ftab { margin-top: 10px; } 
.row { margin-top: 15px; } 

.showing {
  display: block;
}
.dropdown:hover .dropdown-menu {
  display: block;
} 
.dropdown .dropdown-menu {
  display: none;
}
</style>
