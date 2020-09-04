<template>
    <div class="userInfo">
        <div class="logout">
            <input type="button" value="退出登录" @click="logout" />
        </div>
        <div class="userImg">
            <img :src="userInfo.avator" @click='toUserInfoPage' />
            <span class="nickname">{{userInfo.nickname}}</span>
        </div>
        <div class="totalMsg">
            <div class="tt_count">
                <span>{{userInfo.tt_count}}</span> <span>{{userInfo.article_count}}</span>
            </div>
            <div class="article_count">
                <span>头条数</span><span>文章数</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['logout'],
    methods:{
        toUserInfoPage(){
            this.$router.push({path:'/userCenter'});
        }
    },
    mixins:['mixin'],
}
</script>

<style>

</style>