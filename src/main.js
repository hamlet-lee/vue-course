import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { t1 } from './test1'
// import { t2 } from './test2'

Vue.config.productionTip = false

// aaaa
// bbb

// t1()
// t2()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
