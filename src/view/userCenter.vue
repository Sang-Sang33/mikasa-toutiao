<template>
<div id="userCenter">
    
    <div class="userMsg">
        <img :src="userInfo.avator" />
        <span class="nickname">{{userInfo.nickname}}</span>
        <input type="button" value="编辑" @click="toEditPage" />
    </div>

    <div class="userCenterTitle">
        <h3 
            v-for='(item,index) in arr' 
            :key="index+'userCenterTitle'"
            @click = 'toActive(index)'
            :class='{active:currentIndex==index}'
        >
            {{item}}
        </h3>
    </div>

    <ul v-if="currentIndex==0" is='TTMsg' :TT_Arr='TT_Arr'></ul>

    <ul v-else is='TTMsg' :TT_Arr='Article_Arr' >
    </ul>

</div>
</template>

<script>
import TTMsg from '@/components/userCenter/ttMsg'
export default {
    components:{TTMsg},
    mixins:['mixin'],
    data(){
        return {
            arr:['微头条','文章'],
            currentIndex:0,
            TT_Arr:[],
            Article_Arr:[],
            content:''
        }
    },
    methods:{
        //标题样式激活
        toActive(index){
            this.currentIndex=index;
        },
        //封装请求
        requestData(type){
            return this.$axios.post('/getArticlesByType',{
                type:type,
            })
        },
        //获取用户头条数据
        getUserTT() { 
            this.requestData('TT').then((res)=>{
                if(res.data.status==0){
                    this.TT_Arr = res.data.articles;
                }
            })
        },
        //获取用户文章数据并渲染视图
        getUserArticle(){
            this.requestData('article').then((res)=>{
                if(res.data.status==0){
                    this.Article_Arr = res.data.articles;
                }
            })
        },
        
        toEditPage(){
            this.$router.push({path:'/userData'});
        }
    },
    created(){
        this.getUserTT();
        this.getUserArticle();
    }
}
</script>

<style>

</style>