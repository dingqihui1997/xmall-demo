import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {//登录
    path: '/signin',
    name: 'Signin',
    component: () => import('../components/signin/Signin.vue')
  },
  {//注册
    path: '/register',
    name: 'Register',
    component: () => import('../components/register/Register.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
