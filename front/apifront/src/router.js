import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Projets from './views/Projets.vue'
import Salaries from './views/Salaries.vue'
import SalarieDetail from './views/SalarieDetail.vue'
import SalarieCreate from './views/SalarieCreate.vue'
import SalarieUpdate from './views/SalarieUpdate.vue'
import Clients from './views/Clients.vue'
import ClientDetail from './views/ClientDetail.vue'
import ClientCreate from './views/ClientCreate.vue'
import ClientUpdate from './views/ClientUpdate.vue'


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
      path: '/salarie',
      name: 'salarie',
      component: SalarieDetail
    },
    {
      path: '/salarie-create',
      name: 'salarieCreate',
      component: SalarieCreate
    },
    {
      path: '/salarie-update',
      name: 'salarieUpdate',
      component: SalarieUpdate
    },
    {
      path: '/clients',
      name: 'clients',
      component: Clients
    },
    {
      path: '/client',
      name: 'client',
      component: ClientDetail
    },
    {
      path: '/client-create',
      name: 'clientCreate',
      component: ClientCreate
    },
    {
      path: '/client-update',
      name: 'clientUpdate',
      component: ClientUpdate
    }
  ]
})
