// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill' // 必须在最开始引入垫片
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './utils/axios'
//import * as utils from '@/utils' 
// 引入定制标题的指令
//import 'directives/customTitle.js'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
Vue.prototype.$axios = axios
// Vue 的全局配置
Vue.config.productionTip = false
window.axios=axios;
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})