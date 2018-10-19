import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/layout'
import Details from '@/pages/details'
import Health1 from '@/pages/details/health1'
import Health2 from '@/pages/details/health2'
import Health3 from '@/pages/details/health3'
import Health4 from '@/pages/details/health4'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }, {
      path: '/details',
      name: 'details',
      component: Details,
      redirect: 'details/health1',
      children: [
        {
          name: 'Health1',
          path: 'health1',
          component: Health1
        },
        {
          name: 'Health2',
          path: 'health2',
          component: Health2
        },
        {
          name: 'Health3',
          path: 'health3',
          component: Health3
        },
        {
          name: 'Health4',
          path: 'health4',
          component: Health4
        }
      ]
    }
  ]
})
