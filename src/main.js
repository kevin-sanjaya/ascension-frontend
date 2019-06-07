import Vue from 'vue';
import Ascension from './Ascension.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: inject => inject(Ascension),
}).$mount('#ascension');
