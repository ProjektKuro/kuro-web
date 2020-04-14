import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import router from './router'
import i18n from './i18n'
import VueResource from 'vue-resource'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  store,
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app');
