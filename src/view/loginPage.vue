<template>
    <div is='Login' :loginOrRegister = 'login'>
        <h3 slot = 'title'>账号登录</h3>
        <a href="#" slot='link' @click.prevent.stop = 'toRegister' >注册用户</a>
    </div>
</template>

<script>
import Login from '@/components/login'

export default {
    components:{ Login },
    methods:{
        //前往注册页面
        toRegister(){
            console.log(this.$route.path);
            this.$router.push({path:'/registerPage'});
        },
        //登录
        login(id,psd){
            this.$axios.post('/loginCheck',{
                username:id,
                password:psd
            }).then((res)=>{
                console.log(res.data);
                if(res.data.status===0){
                    console.log(res.data.wdata);
                    this.$store.commit('setData',res.data.wdata);
                    this.$router.push({name:'home'});
                    console.log({id,psd});
                }
                else if (res.data.status===100){
                    alert(res.data.msg);
                }
            })
        },

    }
}
</script>

<style>

</style>