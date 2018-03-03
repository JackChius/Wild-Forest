<template>
  <div class="content">
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-4">Hello, world!</h1>
            <p class="lead">传播开源的理念,推广开源项目,为 IT 开发者提供了一个发现、使用、并交流开源技术的平台。</p>
            <hr class="my-4">
            <p>{{funny}}</p>
            <br><p class="lead">
            <nuxt-link to="/" class="btn btn-secondary  btn-lg active" role="button" aria-pressed="true">好像有些什么东西</nuxt-link>
            </p>
        </div>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol @click="changePic" class="carousel-indicators">
                <li  data-target="#carouselExampleIndicators" data-slide-to="0" >1</li>
                <li  data-target="#carouselExampleIndicators" data-slide-to="1" ></li>
                <li  data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div @click="changePic" class="carousel-inner">
                <div class="carousel-item active">
                <img height="300" class="img" :src="ximg" alt="First slide">
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>


    </div>
  </div>
</template>

<script>
import jok from "static/jok.json";

export default {
  components: {
  
  },
  head: {
    title: "一个超酷的地方"
  },
  data: () => ({
    ximg: '',
    funny: jok.result.data[Math.floor(Math.random()*7)].title
  }),
   created() {
          this.ximg = 'pg'+Math.floor(Math.random()*10)+'.jpg'
      },
  methods: {
     changePic () {
         this.ximg = 'pg'+Math.floor(Math.random()*10)+'.jpg'
     }
  }
};
</script>

<style>
.content{
    text-align: center;
}
</style>
