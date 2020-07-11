/*
 * @Author: 黄宇/hyuishine
 * @Date: 2020-07-11 09:46:13
 * @LastEditors: 黄宇/hyuishine
 * @LastEditTime: 2020-07-11 23:17:31
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
import 'vue-fullpage.js/node_modules/fullpage.js/vendors/scrolloverflow'
import VueFullPage from 'vue-fullpage.js'

Vue.config.productionTip = false
Vue.use(VueFullPage)
new Vue({
  router,
  store,
  vuetify,
  trianglify,
  VueFullPage,
  render: h => h(App)
}).$mount('#app')
