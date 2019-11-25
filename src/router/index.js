import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Manage from '@/views/Manage.vue'
import New from '@/views/New.vue'
import Search from '@/views/Search.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: '/ui/',
  routes
})

export default router
