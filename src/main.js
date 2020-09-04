import Vue from 'vue'
import App from './App.vue'
import './css/style.css'
import axios from 'axios'
import router from '@/router'
import store from '@/store'
import mixin from '@/common/mixins'
import '@/http'

Vue.prototype.$axios = axios;

Vue.mixin(mixin);

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

new Vue({
  components:{ App },
  render: h => h(App),
  router,
  store
}).$mount('#app')
