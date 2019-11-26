import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 使用iview
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
Vue.use(ViewUI)

// 加载mock逻辑
// 仅在非production场景下加载
if (process.env.NODE_ENV !== 'production') {
  require('./mock.js')
}

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
