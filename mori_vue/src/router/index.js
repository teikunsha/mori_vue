import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home');
const About = () => import('@/components/about/About');
const Goods = () => import('@/components/goods/Goods');
const Cart = () => import('@/components/cart/Cart');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/goods',
    component: Goods
  },
  {
    path: '/cart',
    component: Cart
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
