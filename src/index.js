
import Vue from 'vue';
import Vuerouter from 'vue-router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios
import App from './App.vue';
import createRouter from './Router'
import './public/css/iconfont/iconfont.css'
import './public/css/common.css'
import './assets/js/filter'
Vue.use(Vuerouter)
const router = createRouter()
// console.log(BaseURL)
new Vue ({
  el: '#root',
  router,
  store,
  render: h => h(App)
})