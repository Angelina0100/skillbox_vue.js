import Vue from 'vue';
import App from './App.vue';

import { message1, message2 } from './message';

import showMessage from './function';

showMessage(message1);
showMessage(message2);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
