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
      component: HelloWorld
    },
    {
      path: '/earth',
      component: HelloEarth,
      children: [
        {
          path: 'moon',
          component: HelloMoon
        }
      ]
    },
    {
      path: '/saturn',
      component: HelloSaturn,
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
