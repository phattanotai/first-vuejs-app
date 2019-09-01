import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Customers from '@/components/Customers'
import Employee from '@/components/Employee'
import Boxes from '@/components/Boxes'
import Product from '@/components/Product'
import Promotion from '@/components/Promotion'
import Storage from '@/components/Storage'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Customers',
      name: 'Customers',
      component: Customers
    },
    {
      path: '/Employee',
      name: 'Employee',
      component: Employee
    },
    {
      path: '/Promotion',
      name: 'Promotion',
      component: Promotion
    },
    {
      path: '/Boxes',
      name: 'Boxes',
      component: Boxes
    },
    {
      path: '/Product',
      name: 'Product',
      component: Product
    },
    {
      path: '/Storage',
      name: 'Storage',
      component: Storage
    }
  ]
})
