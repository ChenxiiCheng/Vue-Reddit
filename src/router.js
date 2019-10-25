import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import UserProfile from './views/UserProfile.vue';
import Detail from './views/Detail.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:loginname',
      name: 'user',
      component: UserProfile
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    }
  ]
});
