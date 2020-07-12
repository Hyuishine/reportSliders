<!--
 * @Author: 黄宇/hyuishine
 * @Date: 2020-07-11 09:46:13
 * @LastEditors: 黄宇/hyuishine
 * @LastEditTime: 2020-07-12 14:11:58
 * @Description: 
 * @Email: hyuishine@gmail.com
 * @Company: 3xData
 * @youWant: add you want
--> 
<template>
  <full-page :options="options"
             ref="fullpage">
    <!-- 创建一个 section 以绑定 acitve 作为第一页 -->
    <transition enter-active-class="fadeInLeft animated"
                leave-active-class="fadeOutLeft animated">
      <div class="section active">
        首页
      </div>
    </transition>
    <!-- 循环创建 动画组，组件中以动态组件形式绑定引入的组件名， -->
    <!-- 动态组件通过判断该组件是否有 “ active ”类名 创建、以达到 生命周期 创建 创建后；执行vue动画 -->
    <transition v-for="(page,index) in pageData"
                :key="index"
                :enter-active-class="page.inAnimation"
                :leave-active-class="page.outAnimation">
      <div class="section">
        <component :is="page.viewPath"></component>
      </div>
    </transition>
  </full-page>
</template>
<script>
// 引入作为测试
import duty from "@/views/duty.vue"




export default {
  name: 'App',
  data () {
    return {
      options: {
        scrollOverflow: true, // 超出不显示滚动条
        scrollBar: false, // 滚动条
        resize: true, // 自适应
        loopBottom: true, // 到最后一页是循环，跳到首页
        // 首页，责任，已完成的工作，问题/缺点，学到的东西，未来
        anchors: ['home', 'duty', 'done', 'fault', 'learned', 'future'], //定义锚链接 链接后缀
        sectionsColor: ["rgba(255,255,255,0.2)",],// 每个页面的背景色
      },
      // 页面数据
      pageData: [
        {
          viewPath: duty, // 引入的组件名
          title: '', // 备用中文名
          inAnimation: 'bounceInDown animated', // 该页面进入动画
          outAnimation: 'bounceInDown animated', // 该页面离开动画
        },
        {

        }
      ]
    }
  },
  computed: {
    // pageData () {
    //   return [
    //     {
    //       viewPath: viewPage[Object.keys(viewPage)[0]], // 引入的组件名
    //       title: '', // 备用中文名
    //       inAnimation: 'bounceInDown animated', // 该页面进入动画
    //       outAnimation: 'bounceInDown animated', // 该页面离开动画
    //     },
    //   ]
    // }
  },
  methods: {
    // 是否处于活动状态？ 判断section是否有active类名 以处理组件完成生命周期 创建 - 销毁 
    // 从而执行 transition 动画 进入 离开
    isActive () {
      // if (dom.classList.contains('active')) {
      //   return true
      // } else {
      //   return false
      // }
      return false
    }
  },
  created () {

  },
  mounted () {

  }
};
</script>
