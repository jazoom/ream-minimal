import Vue from 'vue'
import Router from 'vue-router'

const Home = () => System.import('./views/home/index.vue');
const About = () => System.import('./views/about/index.vue');

Vue.use(Router);

const createRouter = () => new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home,
    children: [
      { path: '/about', component: About }
    ]
  }]
})

export default { createRouter }