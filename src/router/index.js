import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home 
    },
    {
      path:'/list/:id',
      name:'List',
      component:()=>import ('../pages/List/List.vue')
    },
    {
      path:'/detail/:id',
      name:'Detail',
      component:()=>import ('../pages/Detail/Detail.vue')
    },
    {
      path:'/payment',
      name:'Payment',
      component:()=>import ('../pages/Payment/Payment.vue')
    },
  ]
})
