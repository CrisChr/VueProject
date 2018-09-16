import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Blog from '../components/Blog'
import MyBlog from '../components/MyBlog'
import Account from '../components/Account'
import Setting from '../components/Setting'
import Login from '../components/Login'
import Signup from '../components/SignUp'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'blog',
      path: '/blog',
      component: Blog
    },
    {
      name: 'myblog',
      path: '/myblog',
      component: MyBlog
    },
    {
      name: 'account',
      path: '/account',
      component: Account
    },
    {
      name: 'setting',
      path: '/account/setting',
      component: Setting
    },
    {
      name: 'login',
      path: '/account/login/:from',
      props: getFrom,
      component: Login
    },
    {
      name: 'signup',
      path: '/account/signup',
      component: Signup
    }
  ]
})

function getFrom(route){
  return {
    from: route.params.from
  }
}