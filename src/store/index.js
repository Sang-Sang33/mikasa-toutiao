import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    state: {
        userInfo: JSON.parse(localStorage.getItem('userInfo')) || {},
        // userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')) : {},
        nidArticle: JSON.parse(localStorage.getItem('nidArticle')) || {}
        // nidArticle:localStorage.getItem('nidArticle')?JSON.parse(localStorage.getItem('nidArticle')) : {}
    },
    mutations: {

        setData(state, userData) {
            localStorage.setItem('userInfo', JSON.stringify(userData));
            state.userInfo = userData;
        },

        setNidArticle(state, nidArticle) {
            localStorage.setItem('nidArticle', JSON.stringify(nidArticle));
            state.nidArticle = nidArticle;
        },

        setCounts(state, { prop, num }) {
            state.userInfo[prop] += num;
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        },

        modifyUserInfo(state, { name, url }) {
            state.userInfo.nickname = name;
            state.userInfo.avator = url;
            localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
        },
    }
})