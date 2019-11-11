import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { test1 } from './test'

Vue.config.productionTip = false

// aaaa


// bbb

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
