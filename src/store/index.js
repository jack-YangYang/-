import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)


import nowPlaying from './module/nowplaying'
import city from './module/city'
import commingPlaying from './module/commintPlaying'
import search from './module/search'
import cinema from './module/cinema'
const store = new Vuex.Store({
    modules: {
        nowPlaying,
        city,
        commingPlaying,
        search,
        cinema
    }
})
export default store