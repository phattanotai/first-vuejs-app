import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import Customers from '@/components/Customers'
import Employee from '@/components/Employee'

Vue.use(Router)

export default new Router({
  routes: [
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
    }
  ]
})
