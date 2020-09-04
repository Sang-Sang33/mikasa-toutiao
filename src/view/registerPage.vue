<template>
    <div is='Login' :loginOrRegister = 'registerID'>
        <h3 slot = 'title'>账号注册</h3>
        <!-- prevent阻止事件本身行为,如阻止超链接的点击跳转 -->
        <a href="#" slot='link' @click.prevent.stop ="toLogin" >登录</a>
    </div>
</template>

<script>
import Login from '@/components/login'

export default {
    components:{ Login },
    methods:{
        //前往登录页面
        toLogin(){
            this.$router.push({path:'/loginPage'});
        },
        //注册用户
        registerID(id,psd){
            this.$axios.post('/createUser',{
                username:id,
                password:psd
            }).then((res)=>{
                if(res.data.status===0){
                    this.$router.push({path:'/loginPage'});
                }
                else if (res.data.status===100) {
                    alert(res.data.msg);
                }
            })
        }
    }
}
</script>

<style>

</style>