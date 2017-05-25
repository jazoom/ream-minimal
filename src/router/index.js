'use strict';
import Vue from 'vue'
import Router from 'vue-router';

const Home = () => System.import('../views/home/index.vue');
const Page1 = () => System.import('../views/page1/index.vue');
const Page2 = () => System.import('../views/page2/index.vue');
const Page3 = () => System.import('../views/page3/index.vue');

Vue.use(Router);

const createRouter = () => new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: Home,
      children: [
        { path: 'page1', component: Page1 },
        { path: 'page2', component: Page2 },
        { path: 'page3', component: Page3 }
      ]
    }
  ]
});

export default createRouter;