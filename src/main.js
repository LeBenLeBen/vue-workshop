import Vue from 'vue';
import App from './App.vue';
import Btn from '@/components/Btn.vue';

import './assets/tailwind.css';
import i18n from './i18n';
import router from './router';

Vue.config.productionTip = false;

Vue.component('Btn', Btn);

new Vue({
  i18n,
  router,
  render: h => h(App),
}).$mount('#app');
