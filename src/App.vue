<!--
 * @Author: 黄宇/hyuishine
 * @Date: 2020-07-11 09:46:13
 * @LastEditors: 黄宇/hyuishine
 * @LastEditTime: 2020-07-12 00:27:04
 * @Description: 
 * @Email: hyuishine@gmail.com
 * @Company: 3xData
 * @youWant: add you want
--> 
<template>
  <full-page :options="options"
             ref="fullpage">
    <!-- <template slot-scope="scope"> -->
      <div class="section active" v-if="isActive()">123</div>
      <div class="section">456</div>
      <div class="section">789</div>
      <div class="section">1112</div>
    <!-- </template> -->
  </full-page>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      options: {
        scrollOverflow: true, // 超出不显示滚动条
        scrollBar: false, // 滚动条
        resize: true, // 自适应
        loopBottom: true, // 到底时循环
        menu: "#menu",
        anchors: ['home', 'scheme', 'enterprise', 'about'], //定义锚链接 链接后缀
        sectionsColor: ["rgba(255,255,255,0.2)",],// 每个页面的背景色
      }
    }
  },
  methods: {
    // 是否处于活动状态？ 判断section是否有active类名
    isActive () {
      console.log('123')
      // if (self.classList.contains('active')) {
      //   return true
      // } else {
      //   return false
      // }
    }
  }
};
</script>
