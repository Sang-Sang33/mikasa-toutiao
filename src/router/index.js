import VueRouter from "vue-router";
import Vue from 'vue'

import Home from '@/view/home'

const LoginPage = () => import('@/view/loginPage');
const RegisterPage = () => import('@/view/registerPage');
const userCenter = () => import('@/view/userCenter');
const userData = () => import('@/view/userData');
const newsDetail = () => import('@/view/newsDetail');

Vue.use(VueRouter)



let router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
            meta: {requiredLogin:false}
        },{
            path: '/registerPage',
            component: RegisterPage,
            name: 'registerPage',
            meta: {requiredLogin:false}
        },{
            path: '/loginPage',
            component: LoginPage,
            name: 'loginPage',
            meta: {requiredLogin:false}
        },{
            path: '/userCenter',
            component: userCenter,
            name: 'userCenter',
            meta: {requiredLogin:true}
        },{
            path: '/userData',
            component: userData,
            name: 'userData',
            meta: {requiredLogin:true}
        },{
            path: '/newsDetail',
            component: newsDetail,
            name: 'newsDetail',
            meta: {requiredLogin:true}
        },
    ]
})

router.beforeEach((to,from,next) => { 
    let userInfo = localStorage.getItem('userInfo');
    //判断用户是否登录
    if (userInfo == '{}' || userInfo == null) {
        //判断跳转的页面是否需要登录
        if (to.meta.requiredLogin) {
            next({ path: '/loginPage'});
        }
        else {
            next();
        }
    }
    else { 
        next();
    }
})


export default router