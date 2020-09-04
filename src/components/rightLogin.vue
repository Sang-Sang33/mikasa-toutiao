<template>
    <div class='rigtLogin'>

        <div class='search'>
            <input type='text' placeholder = '搜索站内资料'  />
            <input type='button' value = '搜索' />
        </div>
        <div v-if="!userInfo.nickname" is='loginWindow' :login='login'></div>
        <div v-else is='userInfo' :logout='logout' ></div>
    </div>
</template>

<script>

import loginWindow from './loginWindow'
import userInfo from './userInfo'

export default {
    methods:{
        login(){
            this.$router.push('/loginPage');
        },
        logout(){
            localStorage.removeItem('userInfo');
            this.$store.commit('setData',{});
        }
    },
    components:{loginWindow,userInfo}
}
</script>

<style>

</style>