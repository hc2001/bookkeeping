// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由挂载

Vue.config.productionTip = false

import store from './vuex' // 引入Vuex

import 'vant/lib/icon/local.css'  // 使用本地字体图标
// import './lib/icon/iconfont.js' // 本地字体图标
import './lib/js/rem.js'    // 引入rem Js文件
import 'vant/lib/index.css' // 引入vant Ui样式文件
import { NavBar,Icon,Tab,Tabs,NumberKeyboard,Toast,Popup,Panel  } from 'vant';  // 引入NavBar导航栏组件
Vue
  .use(NavBar)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(NumberKeyboard)
  .use(Toast)
  .use(Popup)
  .use(Panel)

// 过滤
Vue.filter('sz',function(msg){
  if(msg == 1){
    return '支出'
  } else {
    return '收入'
  }
})
Vue.filter('pay_type',function(msg){
  if(msg == 1){
    return '现金'
  } else if(msg == 2) {
    return '支付宝'
  } else if(msg == 3) {
    return '微信'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
