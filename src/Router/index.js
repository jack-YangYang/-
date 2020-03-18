import Vuerouter from 'vue-router'
import routes from './routers'
export default () => {
  return new Vuerouter({
    routes,
    mode: 'history',
    // linkActiveClass: 'active-link', // 凡是router-link的标签都会绑定这个class
    // linkExactActiveClass: 'exact-active-link', // 会根据router-link 当前对应的path 和 浏览器url的path进行对比，如果相同就会绑定这个class
    scrollBehavior (to, from, savedPosition) { // 会记录当前跳转的路由 to：代码进入页面的路由 from：当前页面的路由 savedPisition是否进来过
      if (savedPosition) { // 如果有来过 那么则记录滚动条的位置
        return savedPosition
      } else {
        return {x: 0, y: 0} // 如果没有则x轴 y轴 都是0
      }
    },
    // base: '/base/', // 在端口后面会加一段路径 去掉当前路径也不会影响页面路径出错
    fallback: true
    // parseQuery (query) { // 将当前路由导航栏上的参数转为对象

    // },
    // stringifyQuery (obj) { // 将当前路由导航栏上的参数转为字符串

    // }
  })
}