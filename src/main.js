import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from '@/store';
import './plugins/element.js';
import moment from 'moment';
import tab from '@/utils/tab';

Vue.config.productionTip = false;
Vue.prototype.$moment = moment;
Vue.prototype.$tab = tab;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
