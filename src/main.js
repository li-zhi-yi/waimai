// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入vuex
import store from './store/store'
//解决个手机浏览器样式不一致的问题
import 'style/reset.css'
//解决1px边框的问题
import 'style/border.css'
//引入iconfont 字体图标
import 'style/iconfont.css'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
