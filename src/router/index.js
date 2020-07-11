/*
 * @Author: 黄宇/hyuishine
 * @Date: 2020-07-11 09:48:29
 * @LastEditors: 黄宇/hyuishine
 * @LastEditTime: 2020-07-11 10:28:17
 * @Description: 
 * @Email: hyuishine@gmail.com
 * @Company: 3xData
 * @youWant: add you want
 */ 
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    // 首页
    path: '/',
    name: 'Home',    
    title:'首页',
    component: () => import(/* webpackChunkName: "about" */ '@/App.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
