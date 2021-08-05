import Vue from 'vue'
import App from './App'


import Api from './api/api'
Vue.prototype.$api = Api

import store from './store' //从第二步文件夹中引入的store
Vue.prototype.$store = store //将store挂载到vue原型上
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

