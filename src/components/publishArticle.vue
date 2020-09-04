<template>
    <div class="publish_Article">
        <input type="text" placeholder="请输入标题" v-model="title" />
        <VueEditor 
            v-model ='richContent' 
            use-custom-image-handler
            @image-added='handerAddedImage'
        />
        <input type="button" value="发布" @click='creatArticle' />
    </div>
</template>

<script>
import {VueEditor} from 'vue2-editor'

export default {
    components:{VueEditor},
    data(){
        return {
            richContent:'',
            title:'',
        }
    },
    methods:{
        creatArticle(){
            this.$axios.post('/createArticle',{
                content:this.richContent,
                img:'',
                title:this.title,
            }).then((res)=>{
                //发布成功后给相应的文章数+1
                if(res.data.status==0){
                    this.$store.commit('setCounts',{prop:'article_count',num:1});
                    //初始化输入框里的内容
                }
                this.title='';
                this.richContent='';
            });
        },
        //获取上传的图片地址，并显示在富文本框
        handerAddedImage(file,Editor,cursorLocation,resetUploader){
            let params = new FormData();
            params.append('file',file);
            this.$axios.post('/aliossUpload',params).then((res)=>{
                let url=res.data.url;
                Editor.insertEmbed(cursorLocation, "image", url);
                resetUploader();
            })
        }
    },
    mixins:['mixin'],
}

</script>

<style>

</style>