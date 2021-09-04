import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Lazyout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [

  {//登录
    path: '/signin',
    name: 'Signin',
    component: () => import('../components/signin/Signin.vue'),
    meta: {
      title: '登录'
    }
  },
  {//注册
    path: '/register',
    name: 'Register',
    component: () => import('../components/register/Register.vue'),
    meta: {
      title: '注册'
    }
  },
  // {
  //   path: '',
  //   // component: Lazyout,
  //   children: [
  //     {//首页 
  //       path: '/',
  //       name: 'Home',
  //       component: Home,
  //       meta: {
  //         title: '首页'
  //       }
  //     },
  // {//全部
  //   path: '/whole',
  //   name: 'Whole',
  //   component: () => import('../components/whole/Whole.vue'),
  //   meta: {
  //     title: '首页'
  //   }
  // }
  //   ]
  // }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
export default router
