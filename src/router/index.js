import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home/main'
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/Main.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/List.vue')
      },
      {
        path: 'option',
        name: 'option',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/Option.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/Cart.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        component: () => import(/* webpackChunkName: "about" */ '../views/pages/Mine.vue')
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
