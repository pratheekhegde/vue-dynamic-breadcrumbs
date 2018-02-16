import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

export default router
