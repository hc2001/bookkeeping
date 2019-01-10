// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' // 引入路由挂载

Vue.config.productionTip = false

import store from './vuex' // 引入Vuex

import './lib/js/rem.js'    // 引入rem Js文件
import 'vant/lib/index.css' // 引入vant Ui样式文件
import { NavBar,Icon  } from 'vant';  // 引入NavBar导航栏组件
Vue
  .use(NavBar)
  .use(Icon)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
