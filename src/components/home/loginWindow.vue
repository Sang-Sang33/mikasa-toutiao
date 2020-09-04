<template>
    <div class='loginWindow'>
        <span>登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条</span>
        <input type='button' value ='登录' name='login' class='log' @click='login' />
    </div>
</template>

<script>
export default {
    props:['login']
}
</script>

<style>

</style>