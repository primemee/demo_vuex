import Vue from 'vue'
import VueRouter from 'vue-router'
import ShopCart from '../views/ShopCart.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ShopCart',
    component: ShopCart
  },
]

const router = new VueRouter({
  routes
})

export default router
