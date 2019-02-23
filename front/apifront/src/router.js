import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projets from './views/Projets.vue'
import Salaries from './views/Salaries.vue'
import Clients from './views/Clients.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projets',
      name: 'projets',
      component: Projets
    },
    {
      path: '/salaries',
      name: 'salaries',
      component: Salaries
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients
    }
  ]
})
