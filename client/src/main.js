import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import axios from 'axios';

import 'vue-instant/dist/vue-instant.css';
import VueInstant from 'vue-instant';

Vue.use(VueInstant);

axios.defaults.baseURL = 'http://localhost:3006';

import './style.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
