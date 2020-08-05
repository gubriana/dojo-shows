import Vue from 'vue'
import App from './App.vue'
import VueFirestore from 'vue-firestore' 

Vue.use(VueFirestore, {key: 'id'});      // adding this use statement

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')