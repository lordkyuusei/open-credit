import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Connect & Register',
    component: () => import('@/views/ConnectRegister.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/HomePage.vue'),
    props: {
      componentName: 'HOME',
    },
  },
  {
    path: '/transactions',
    name: 'Transactions',
    component: () => import('@/views/TransactionsPage.vue'),
    props: {
      componentName: 'TRANSACTIONS',
    },
  },
  {
    path: '/immeuble',
    name: 'Immeuble',
    component: () => import('@/views/ImmeublePage.vue'),
    props: {
      componentName: 'IMMEUBLE',
    },
  },
  {
    path: '/account',
    name: 'Account',
    component: () => import('@/views/AccountPage.vue'),
    props: {
      componentName: 'ACCOUNT',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
