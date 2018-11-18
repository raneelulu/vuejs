import Vue from 'vue'
import Router from 'vue-router'

import {
  ViewMovieInfo,
} from '@/containers'

import {
  HelloWorld,
} from '@/components'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/md',
      name: 'ViewMovieInfo',
      component: ViewMovieInfo
    }
  ]
})