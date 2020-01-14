import Vue from 'vue';
import App from './App.vue';
import Btn from '@/components/Btn.vue';

import './assets/tailwind.css';

Vue.config.productionTip = false;

Vue.component('Btn', Btn);

new Vue({
  render: h => h(App),
}).$mount('#app');
