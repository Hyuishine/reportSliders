<!--
 * @Author: 黄宇/hyuishine
 * @Date: 2020-07-11 11:05:01
 * @LastEditors: 黄宇/hyuishine
 * @LastEditTime: 2020-07-11 17:38:56
 * @Description: 
 * @Email: hyuishine@gmail.com
 * @Company: 3xData
 * @youWant: 多三角背景 trianglify 包含一个背景，一个内容插槽 
--> 
<template>
  <div class="sectionContainer">
    <v-content></v-content>
    <div class="canvasBack"></div>
  </div>
</template>
<script>
export default {
  props: {
    // 传入的背景颜色 渐变
    color: {
      type: Array,
    }
  },
  data () {
    return {

    }
  },
  created () {
  }

}
</script>