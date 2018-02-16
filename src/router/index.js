import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import HelloEarth from '@/components/HelloEarth.vue'
import HelloMoon from '@/components/HelloMoon.vue'
import HelloSaturn from '@/components/HelloSaturn.vue'
import HelloSaturnMoon from '@/components/HelloSaturnMoon.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld,
      meta: {
        breadCrumb: 'Hello World'
      }
    },
    {
      path: '/earth',
      component: HelloEarth,
      meta: {
        breadCrumb: 'Earth'
      },
      children: [
        {
          path: 'moon',
          component: HelloMoon,
          meta: {
            breadCrumb: 'Moon'
          }
        }
      ]
    },
    {
      path: '/saturn',
      component: HelloSaturn,
      meta: {
        breadCrumb: 'Saturn'
      },
      children: [
        {
          path: ':moon',
          component: HelloSaturnMoon,
          props: true
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
