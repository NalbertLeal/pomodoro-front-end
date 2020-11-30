import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeWrapper from '@/presentation/views/HomeWrapper.vue'
import Pomodoro from '@/presentation/views/Pomodoro.vue'
import Login from '@/presentation/views/Login.vue'
import RegisterNewUser from '@/presentation/views/RegisterNewUser.vue'
import Error404 from '@/presentation/views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomeWrapper',
    component: HomeWrapper
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/pomodoro',
    name: 'Pomodoro',
    component: Pomodoro
  },
  {
    path: '/register-new-user',
    name: 'RegisterNewUser',
    component: RegisterNewUser
  },
  {
    path: '*',
    name: 'Error404',
    component: Error404
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
