<template>
    <div class='aside '>
        <ul class='nav '>
        <h3>头条</h3>
            <li v-for = '(item,index) in arr' :key="index+'navitem'">
                <a href='#'>{{item}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            arr:['推荐','西瓜视频','财经','热点','直播','图片','科技','游戏','体育','懂车帝','热点',]
        }
    }
}
</script>

<style>

</style>