import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'

// 加载mock逻辑
require('./mock.js')

// import { t1 } from './test1'
// import { t2 } from './test2'

Vue.config.productionTip = false

Vue.use(ViewUI)

// aaaa
// bbb

// t1()
// t2()

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
