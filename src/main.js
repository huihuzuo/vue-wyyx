//入口js文件

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import FooterNav from './components/FooterNav/FooterNav.vue'

import './mock/mockServer'//因为mock数据不是暴露模块，无需引入对象，直接写路径

Vue.config.productionTip = false
Vue.component('FooterNav', FooterNav)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h => h(App),
  store,
  components:{App},
  template:"<App/>"
})
