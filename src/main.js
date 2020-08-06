import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueFirestore from 'vue-firestore';

Vue.use(VueFirestore, {key: 'id'});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')