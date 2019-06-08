import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/Home.vue'),
    },
    {
      path: '/schedules',
      name: 'Schedules',
      component: () => import('./views/Schedules.vue'),
    },
    {
      path: '/results',
      name: 'Results',
      component: () => import('./views/Results.vue'),
    },
    {
      path: '/divisions',
      name: 'Divisions',
      component: () => import('./views/Divisions.vue'),
    },
  ],
});
