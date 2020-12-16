import Vue from 'vue'
import VueRouter from 'vue-router'

import LoginPage from '@/presentation/auth/pages/LoginPage'
import RegisterPage from '@/presentation/auth/pages/RegisterPage'
import PomodoroPage from '@/presentation/pomodoro/pages/PomodoroPage'
import NewTask from '@/presentation/pomodoro/pages/NewTask'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: RegisterPage
  },
  {
    path: '/pomodoro',
    name: 'Pomodoro',
    component: PomodoroPage
  },
  {
    path: '/new-task',
    name: 'NewTask',
    component: NewTask
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
