<template>
    <div id="userDataModify">
        <div class="modifyTitle">
            <h3 
                v-for='(item,index) in arr' 
                :key="index+'userDataModify'"
                @click = 'toActive(index)'
                :class='{active:currentIndex==index}'
            >
                {{item}}
            </h3>
        </div>

        <table v-if="currentIndex==0" class="userName">
            <tr>
                <td><span>名称</span></td>
                <td><input type="text"  v-model="name"></td>
            </tr>
            <tr>
                <td><span>头像</span></td>
                <td class="img">
                    <img :src="url" alt="" />
                    <input type="file" @change="modifyImg" />
                </td>
            </tr>
            <tr>
                <td></td>
                <td><input type="button" value="更新资料" @click="renewInfo" /></td>
            </tr>
        </table>

        <table v-else class="modifyPsd">
            <tr>
                <td><span>当前密码</span></td>
                <td><input type="password" v-model="currentPsd" /></td>
            </tr>
            <tr>
                <td><span>新密码</span></td>
                <td><input type="password" v-model="updatePsd" /></td>
            </tr>
            <tr>
                <td></td>
                <td><input type="button" value="更新资料" @click="renewPsd" /></td>
            </tr>
        </table>

    </div> 
</template>

<script>
export default {
    methods:{
        toActive(index){
            this.currentIndex=index;
        },
        modifyImg(ev){
            let params = new FormData();
            let fl = ev.target.files[0];
            params.append('file',fl);
            this.$axios.post('/aliossUpload',
                params
            ).then((res)=>{
                if(res.data.status==0){
                    this.url = res.data.url;
                }
            });
        },
        renewInfo(){
            this.$axios.post('/updateUserInfo',{
                nickname:this.name,
                avator:this.url,
            }
            ).then((res)=>{
                console.log(res.data);
                if(res.data.status==0){
                    this.$store.commit('modifyUserInfo',{name:this.name,url:this.url});
                }
            });
        },
        renewPsd(){
            this.$axios.post('/updatePassword',{
                currentPassword:this.currentPsd,
                updatePassword:this.updatePsd,
            }).then((res)=>{
                console.log(res.data)
                if(res.data.status==0){

                }
            })
        }
    },
    data(){
        return{
            arr:['账户信息','密码管理'],
            currentIndex:0,
            url:'',
            name:'',
            currentPsd:'',
            updatePsd:''
        }
    },
    mixins:['mixin'],
    created(){
        this.name = this.userInfo.nickname;
        this.url = this.userInfo.avator;
    }
}
</script>

<style>

</style>