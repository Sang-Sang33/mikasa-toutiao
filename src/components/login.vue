<template>
    <div id='loginPage'>
        <slot name='title'> </slot>
        <input type="text" name="id" id="id" placeholder="账号"  v-model = 'account' />
        <input type="password" name="psd" id="psd" placeholder="密码"  v-model = 'passWord' />
        <input type="button" value="确定" @click="loginOrRegister(account,passWord)" />

        <div class="userAgreement fixed">
            <span>登录和注册表示你同意 </span> 
            <em ><a href="#">用户协议</a></em>和<em><a href="#">隐私条款</a></em>
            <em class="registerLink fRight">
                <slot name='link' > </slot>
            </em>
        </div>

    </div>
</template>

<script>
export default {
    props:['loginOrRegister'],
    data(){
        return {
            account:'',
            passWord:''
        }
    }
}
</script>

<style>

</style>