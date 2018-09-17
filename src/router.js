import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './views/Dashboard.vue'
import Products from './views/Products.vue'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  { 
    path: "/Products", 
    name: "Products", 
    component: Products 
  },
  ]
})
