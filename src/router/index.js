import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Services from '../views/Services.vue'
import Bottom from '../views/Bottom.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path : "/Services",
    component : Services
  },
  {
    path : "/Bottom",
    name : "Bottom",
    component : Bottom
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
