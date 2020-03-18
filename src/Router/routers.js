
const login = () => import(/* webpackChunkName */ '../views/login.vue')
const index = () => import(/* webpackChunkName */ '../views/index.vue')
const cinema = () => import(/* webpackChunkName */ '../views/layout/cinema.vue')
const home = () => import(/* webpackChunkName */ '../views/layout/home.vue')
const mine = () => import(/* webpackChunkName */ '../views/layout/mine.vue')

const routes = [
  {
    path: '/',
    redirect: {name: 'Login'}
  },
  {
    path: '/login',
    component: login,
    name: 'Login',
  },
  {
    path: '/movie',
    component: index,
    redirect: {name: 'home'},
    children: [
      {
        path: 'home',
        name: 'home',
        component: home,
        redirect: {name: 'nowplaying'},
        children: [
          {
            path: 'city',
            component: () => import(/* webpackChunkName: 'city' */ '../components/city'),
            name: 'city'
          },
          {
            path: 'commingplay',
            component: () => import(/* webpackChunkName: 'city' */ '../components/commingplay'),
            name: 'commingplay'
          },
          {
            path: 'nowplaying',
            component: () => import(/* webpackChunkName: 'city' */ '../components/nowplaying'),
            name: 'nowplaying'
          },
          {
            path: 'search',
            component: () => import(/* webpackChunkName: 'city' */ '../components/search'),
            name: 'search'
          },
        ]
      },
      {
        path: 'cinema',
        name: 'cinema',
        component: cinema,
        redirect: {name: 'clyList'},
        children: [
          {
            path: 'clyList',
            component: () => import(/* webpackChunkName: 'clyList' */ '../components/clyList'),
            name: 'clyList'
          },
          {
            path: 'brand',
            component: () => import(/* webpackChunkName: 'brand' */ '../components/brand'),
            name: 'brand'
          },
          {
            path: 'feature',
            component: () => import(/* webpackChunkName: 'feature' */ '../components/feature'),
            name: 'feature'
          },
        ]
      },
      {
        path: 'mine',
        name: 'mine',
        component: mine
      },
      {
        path: '/*',
        redirect: {name: 'home'}
      }
    ]
  },
  {
    path: '/*',
    redirect: {
      name: 'Login'
    }
  }
]
export default routes