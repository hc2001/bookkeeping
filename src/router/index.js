import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Remember from '@/components/remember'
import About from '@/components/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home', // 重定向 
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/remember',
      name: 'Remember',
      component: Remember
    },
    {
      path: '/home/about',
      name: 'About',
      component: About
    }
  ]
})
