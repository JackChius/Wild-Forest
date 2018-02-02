<template>
    <div>
        <el-row :gutter="90">
    
            <el-col  :xs="{span: 22, offset: 1}" :sm="{span:20,offset:2}" :md="{span:16,offset:4}" :lg="{span: 11, offset: 5}">
                <div class="grid-content bg-purple-light">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span style="line-height: 36px;">
                                <el-breadcrumb separator="/">
                                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                    <el-breadcrumb-item>账号详情</el-breadcrumb-item>
    
                                </el-breadcrumb>
                            </span>
                            <el-button style="float: right;" type="success">change</el-button>
                        </div>
                        <div class="text item">
                            <i class="user_ico">
                                <!-- <img style="width:40px;" :src="words.logo" v-bind:alt="words.gzh_name"> -->
                            </i>
                              <h1> {{words.gzh_name}}  <span style="font-size:18px;">关注:{{ words.c_text }} </span>  </h1>                            
                              
                             <br><br>
                            <span class="icon-tab">注册时间: {{words.id}} <br> </span> <br>
                            <el-collapse v-model="activeNames2">
                                <el-collapse-item title="账号历史热文" name="1">
                                    <ul v-for="coll in colls">
                                        <li style="list-style-type:none">
                                            <router-link :to="{ name: 'content', params: { id: coll.id,tag: coll.tag } }">
                                               <h2> {{coll.title}}</h2>  <br>
                                                <span class="icon-tab"> {{coll.abstract}}</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </el-card>
                    <br>
    
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <h3 style="line-height: 1px;">
                                最近发布的文章
                            </h3>
                        </div>
                        <div class="text item">
                            <ul v-for="item in lists">
                                <li style="list-style-type:none">
                                    <router-link :to="{ name: 'content', params: { id: item.id,tag: item.tag } }">
                                       <h2>{{item.title}}</h2> <br>
                                      
                                    </router-link>
                                </li>
                                <br>
                            </ul>
                        </div>
                    </el-card><br>
    
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <h3 style="line-height: 1px;">
                                最多人回复的文章
                            </h3>
                        </div>
                        <div class="text item">
                            <ul v-for="item in lists2">
                                <li style="list-style-type:none">
                                    <router-link :to="{ name: 'content',  params: { id: item.id,tag: item.tag } }">
                                       <h3>{{item.title}}</h3> <br>
                                        <span class="icon-tab">最近回复 {{item.abstract}}</span>
                                    </router-link>
                                </li>
                                <br>
                            </ul>
                        </div>
                    </el-card>
    
                </div>
            </el-col>
            <el-col :xs= "{span: 22, offset: 1}" :sm="20" :md="18" :lg="5">
                <el-card :body-style="{ padding: '0px' }">
                    <img style="width:100%;height:200px" :src="words.article[0].logo" class="image">
                    <div style="padding: 14px;">
                        <strong><h3>{{ words.gzh_name }}</h3></strong>
                        <div class="bottom clearfix">
                            <time class="time">---></time>
                            <el-button type="text" class="button">分享到微信</el-button>
                        </div>
                    </div>
                </el-card><br>
                <div class="grid-content bg-purple">
                    <el-collapse v-model="activeNames">
                        <el-collapse-item title="相关帐号 Consistency" name="1">
                            <div>{{words.introduce}}</div>
                            <div>所有的元素和结构在车中一致<br></div>
                        </el-collapse-item>
                        <el-collapse-item title="订阅更多 Feedback" name="2">
                            <div>{{words.introduce}}</div>
                            
                        </el-collapse-item>
    
                    </el-collapse>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>

export default {
 
    data() {
        return {
            activeNames: ['1'],
            lists: [],
            lists2: [],
            words: [],
            activeNames2: ['1'],
            colls: []
        };
    },
    created() {
        this.get_info()
            // this.get_collect(),
            // this.checkTips()


    },
    methods: {
        get_info: function (params) {

            var v = this
            if (!params) params = {}
            v.$api.get('account', {id:this.$route.query.id} , function (r) {
                if(r.data.status===0){
         
                v.$router.replace({ path: '/404' })
                }else{
                v.lists = r.data.data[0].article
                v.words = r.data.data[0]
                // v.lists2 = r.data.data[0].article
                v.colls = r.data.data[0].article
                // console.log(r.data.data[0].article)
                }
            })
        }
        // get_collect: function (params) {
        //     var v = this
        //     if (!params) params = {}
        //     v.$api.get('account?id=' + this.$route.params.id, params, function (r) {
        //         v.colls = r.data.data[0].article


        //     })
        // }
        // checkTips: function () {
        //     if (!localStorage.acname) {
        //         this.$alert('你并未登录，访问个人中心需要登录', '提示', {
        //             confirmButtonText: '确定',
        //             callback: action => {
        //                 this.$message({
        //                     type: 'info',
        //                     message: `action: ${action}`
        //                 });
        //             }
        //         });
        //     }
        // }
    }

}
</script>