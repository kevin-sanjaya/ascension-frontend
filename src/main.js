import Vue from 'vue';
import Ascension from './Ascension.vue';
import router from './router';
import '@/assets/vendor/fontawesome-free/css/all.min.css';
import '@/assets/css/sb-admin-2.min.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: inject => inject(Ascension),
}).$mount('#ascension');
