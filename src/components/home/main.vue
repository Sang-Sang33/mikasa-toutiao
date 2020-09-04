<template>
    <div class='main '>

        <div is='publishBox' ></div>
        <div class = 'articles '>
            <ul>
                <li v-for='(item,index) in arr' class='items ' :key="index+'items'" @click="sendId(item.nid)" >
                    <div class='userMsg '>
                        <img :src='item.user.avator' class='' />
                        <h3 class=''>{{item.title}}</h3>
                    </div>
                    <div class='userInfo '>
                        <div class=''><span>{{item.user.nickname}}</span></div>
                        <div class=''><span>{{item.created_at}}</span></div>                              
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import publishBox from './publishBox'
export default {
    props:['arr'],
    components:{ publishBox },
    methods:{
        sendId(nid){
            this.$axios.post('/getArticleById',{
                nid
            }).then((res)=>{
                if(res.data.status==0){
                    console.log(res.data)
                    this.$store.commit('setNidArticle',res.data.article);
                    this.$router.push({path:'/newsDetail'});
                }
            })
        }
    },
}
</script>

<style>

</style>