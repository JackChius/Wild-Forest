<template>
<div >
		<el-row id="notfind" type="flex" class="row-bg" justify="space-around">
            <el-col :span="10">
                  <br>
                    <div class="agileits-content">
                    </div>
                    <div class="layouts-right">
                        <div class="ls-text">
                            <h3>&nbsp;&nbsp;提示</h3><br>
                            <iframe scrolling='no' frameborder='0' src='http://yibo.iyiyun.com/Home/Distribute/ad404/key/1332719' width='654' height='470' style='display:block;'></iframe>
                          <br> <a style="font-size:22px;font-weight:bold" href="/">&nbsp;&nbsp;返回奇趣林</a>
                             <br><br><br>&nbsp;&nbsp;或联系网站管理员 <a href="mailto:ayihui010t@163.com">123456789@gnome.com</a></p>
                                <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
                
                        </div>
                            
                    </div>
                </el-col>
            
            <!-- <el-col :span="6"><div class="grid-content bg-purple"></div></el-col> -->
        </el-row>
        
     

	</div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.testmeta();
  },
  methods: {
    testmeta: function() {
      console.log(this.$route);
    }
  }
};
</script>
<style>
#notfind {
  background-color: rgba(66, 66, 66, 0.2);
}
</style>
