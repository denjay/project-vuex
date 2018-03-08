import Vue from 'vue'
import Router from 'vue-router'
import father from '@/components/father'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'father',
      component: father
    }
  ]
})
