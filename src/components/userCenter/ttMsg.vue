<template>
    <ul class="tt_Msg" >
        <li v-for="(item,index) in TT_Arr" :key="index+'TT'" @mouseover="displayBtn(index)" @mouseleave="removeBtn()">
            <div class="userImagAndName">
                <img :src="userInfo.avator" />
                <span class="nickname">{{userInfo.nickname}}</span>
            </div>
            <h3 v-if="item.type=='Article'">{{item.title}}</h3>
            <div class="contentBox">
                <div class="publishContent" v-html="item.content"><span>{{item.content}}</span></div>
                <div class="btn">
                    <input v-if="currentIndex==index" type="button" value='删除' @click="deleteArt(item.nid,index,item.type)">
                </div>
            </div>            
            <div>{{item.created_at}}</div>
        </li>
    </ul>
</template>

<script>
export default {
    props:['TT_Arr'],
    mixins:['mixin'],
    data(){
        return {
            currentIndex:-1
        }
    },
    methods:{
        displayBtn(index){
            this.currentIndex=index;
        },
        removeBtn(){
            this.currentIndex = -1;
        },
        deleteArt(id,index,type){
            this.$axios.post('/deleteArticle',{
                nid:id,
            }).then((res)=>{
                if(res.data.status===0){
                    this.TT_Arr.splice(index,1);
                    //判断删除的是文章还是头条给相应的数量-1
                    if(type=='TT'){
                        this.$store.commit('setCounts',{prop:'tt_count',num:-1});
                    }else if(type=='Article'){
                        this.$store.commit('setCounts',{prop:'article_count',num:-1});
                    }
                }
            })
        }
    }
}
</script>

<style>

</style>