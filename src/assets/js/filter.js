import Vue from 'vue'
Vue.filter('setWH', (url, arg) => {
    return url.replace(/w\.h/, arg)
})