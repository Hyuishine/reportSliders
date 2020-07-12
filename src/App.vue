<!--
 * @Author: 黄宇/hyuishine
 * @Date: 2020-07-11 09:46:13
 * @LastEditors: 黄宇/hyuishine
 * @LastEditTime: 2020-07-12 16:04:53
 * @Description: 
 * @Email: hyuishine@gmail.com
 * @Company: 3xData
 * @youWant: 将views 中所有页面导入、导入时会按照首字母排序，
 为了方便知晓序列、故文件名以首字母排序作为顺序，批量导入时 会自动截取掉前两位 取之后的名字作为链接后缀
 此页面以能自动导入views 页面，想要新增幻灯片只需在views中新增页面，无需配路由，添加section

 views名命规范：a_home.vue, " a_ ": 排序; “ home ” : 连接后缀
--> 
<template>
  <full-page :options="options"
             ref="fullpage">
    <!-- 循环创建 动画组，组件中以动态组件形式绑定引入的组件名， -->
    <!-- 动态组件通过判断该组件是否有 “ active ”类名 创建、以达到 生命周期 创建 创建后；执行vue动画 -->
    <div class="section"
         v-for="(page,index) in pageData"
         :key="index">
      <component :is="page.viewPath"></component>
    </div>
  </full-page>
</template>
<script>
// 引入作为测试
const viewPage = {}; // 储存引入的页面 用于 注册组件
const path = require("path"); // 地址类型
const files = require.context("@/views", true, /\.vue$/); // 正则遍历匹配“ .vue ” 结尾的文件
files.keys().forEach(key => {
  const name = path.basename(key, ".vue");
  viewPage[name] = files(key).default || files(key);
});
// 将pageName的key值转换为字符串数组 用于创建链接后缀名
var pageName = [];
pageName = Object.keys(viewPage)

export default {
  name: 'App',
  data () {
    return {
      slideTitle: ['首页', '责任', '已完成的工作', '需要改进的地方', '学到的东西', '未来规划'], // 幻灯片标题
      pageData: [], // 页面数据
      options: {
        css3:false,
        easing:'easeInOutCubic',
        scrollOverflow: true, // 超出不显示滚动条
        scrollBar: false, // 滚动条
        resize: true, // 自适应
        loopBottom: true, // 到最后一页是循环，跳到首页
        // 首页，责任，已完成的工作，问题/缺点，学到的东西，未来
        anchors: [],//['home', 'duty', 'done', 'fault', 'learned', 'future'], //定义锚链接 链接后缀
        sectionsColor: ["rgba(255,255,255,0.2)",],// 每个页面的背景色
      },
    }
  },
  methods: {
    // 创建页面数据，将幻灯片的 标题一个数组传入
    createPageDate (slideTitle) {
      var i
      var temp = {
        viewPath: '',
        title: '',
        inAnimation: '',
        outAnimation: ''
      }
      // 按照views文件夹下 “ .vue ” 文件数量，遍历赋值 动态组件使用的路径
      for (i = 0; i < pageName.length; i++) {
        temp.viewPath = viewPage[Object.keys(viewPage)[i]]
        temp.title = slideTitle[i]
        this.pageData.push(temp)
      }
    }
  },
  created () {
    // 去除文件名的两个用于排序的字符
    pageName.forEach((item) => {
      this.options.anchors.push(item.substring(2, item.length))
    })
    // 创建页面数据
    this.createPageDate(this.slideTitle)
  },
};
</script>
