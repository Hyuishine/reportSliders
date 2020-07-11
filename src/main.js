/*
 * @Author: 黄宇/hyuishine
 * @Date: 2020-07-11 09:46:13
 * @LastEditors: 黄宇/hyuishine
 * @LastEditTime: 2020-07-11 18:33:05
 * @Description: 
 * @Email: hyuishine@gmail.com
 * @Company: 3xData
 * @youWant: add you want
 */ 
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import trianglify from 'trianglify'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  trianglify,
  render: h => h(App)
}).$mount('#app')
