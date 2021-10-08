import App from './App'
import Vue from 'vue'
import config from '@/global/global-config/config.js'
Vue.prototype.$store = config

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
