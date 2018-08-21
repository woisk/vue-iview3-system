// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import iView from 'iview'
import config from '@/libs/config'
import importDirective from '@/directive'
//import 'iview/dist/styles/iview.css'
import '@/assets/css/index.less'
import '@/assets/icons/iconfont.css'
// 实际打包时应该不引入mock
//import '@/mock'
//process.env.NODE_ENV === 'development' ? require('@/mock') : ''

Vue.use(iView)
Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
/**
 * 注册指令
 */
importDirective(Vue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
