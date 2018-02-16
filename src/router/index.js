import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import HelloEarth from '@/components/HelloEarth.vue'
import HelloMoon from '@/components/HelloMoon.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/earth',
      component: HelloEarth
    },
    {
      path: '/earth/moon',
      component: HelloMoon
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
