import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/components/Menu'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: 'hello',
          name: 'Hello',
          component: HelloWorld,
        },
        {
          path: 'menu',
          name: 'menu',
          component: Menu
        }
      ]
    }
  ]
})
