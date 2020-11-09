import Vue from 'vue'
import VueRouter from 'vue-router'

import Authentication from '@/views/Authentication.vue'
import Timer from '../views/Timer.vue'
import CreateNewUser from '../views/CreateNewUser.vue'
import RecoverUserPassword from '../views/RecoverUserPassword.vue'
import Error404 from '../views/Error404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Authentication',
    component: Authentication
  },
  {
    path: '/timer',
    name: 'Timer',
    component: Timer
  },
  {
    path: '/create-new-user',
    name: 'CreateNewUser',
    component: CreateNewUser
  },
  {
    path: '/recover-user-password',
    name: 'RecoverUserPassword',
    component: RecoverUserPassword
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
