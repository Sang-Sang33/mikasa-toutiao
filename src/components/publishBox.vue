<template>
    <div class="publish_Box">

        <div class="publish_title">

            <h3 
                v-for='(item,index) in arr' 
                :key="index+'title'"
                @click = 'toActive(index)'
                :class='{active:currentIndex==index}'
            >{{item}}</h3>

        </div>
      
        <div v-if='currentIndex==0' is='publishStory'></div>

        <div v-else is='publishArticle'></div>

        <div class="reloadBtn">
            <input type="button" value="点击刷新"  @click='reLoad'  />
        </div>
        
    </div>
</template>

<script>

import publishStory from './publishStory'
import publishArticle from './publishArticle'


export default {
    components: {publishStory,publishArticle},
    data(){
        return {
            arr:['发微头条','写文章'],
            currentIndex:0
        }
    },
    methods:{
        toActive(index){
            console.log(this.data);
            this.currentIndex=index;
        },
        reLoad(){
            this.$router.go(0);
        }
    },
    mixins:['mixin'],
}
</script>

<style>

</style>