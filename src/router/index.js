import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Manage from '@/views/Manage.vue'
import Rules from '@/views/Rules.vue'
import Audit from '@/views/Audit.vue'
import New from '@/views/New.vue'
import Search from '@/views/Search.vue'
import Chart from '@/views/Chart.vue'
import Adder from '@/views/Adder.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/rules',
    name: 'rules',
    component: Rules
  },
  {
    path: '/audit',
    name: 'audit',
    component: Audit
  },
  {
    path: '/new',
    name: 'new',
    component: New
  },
  {
    path: '/manage',
    name: 'manage',
    component: Manage
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/chart',
    name: 'chart',
    component: Chart
  },
  {
    path: '/adder',
    name: 'adder',
    component: Adder
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/ui/',
  routes
})

export default router
