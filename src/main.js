import Vue from 'vue'
import App from './App.vue'
import elementui from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public/css/common.css'
import VueRouter from 'vue-router'
import router from './router/index.js'

Vue.use(elementui)
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
