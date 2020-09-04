<template>
    <div class="publish_Story">
        <textarea name="" id=""  placeholder="有什么新鲜事想高速大家" v-model="msg"></textarea>
        <div class="publish_Story_btn"> 
            <input type="button" value="图片" @click='uploadImg' />
            <input type="button" value="发布" @click = 'createTT'/>
            <h3 v-if="flag">+</h3>
            <input  type="file" id="file" @change="insertImg" />
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            flag:false,
            msg:'',
            url:''
        }
    },
    methods:{
        uploadImg(){
            this.flag = !this.flag;
        },
        createTT(){
            //创建头条
            this.$axios.post('/createTT',{
                content:this.msg,
                imgs:this.url,
            }).then((res)=>{
                console.log(res.data);
                if(res.data.status==0){
                    //头条发布成功后，给相应的头条数+1
                    this.$store.commit('setCounts',{prop:'tt_count',num:1});
                }
                //头条发布成功后，初始化输入框里的内容
                this.msg='';
            });
        },
        insertImg(ev){
            let params = new FormData();
            let fl = ev.target.files[0];
            params.append('file',fl);
            this.$axios.post('/aliossUpload',
                params
            ).then((res)=>{
                this.url = res.data.url;
            });
        }
    },
    mixins:['mixin'],
}
</script>

<style>

</style>