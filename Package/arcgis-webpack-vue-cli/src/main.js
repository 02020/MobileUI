/** @format */
import Vue from 'vue';
import App from './App.vue';

import './esriconfig';

Vue.config.productionTip = false;
console.log(`Node environment: ${process.env.NODE_ENV}`);
console.log(`VUE_APP_TITLE from .env: ${process.env.VUE_APP_TITLE}`);

window.GIS = new Vue({
  render: (h) => h(App),
});


