import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueI18n from 'vue-i18n';
import i18n from './locales/config';
import './registerServiceWorker';
import './assets/styling/scss/styles.scss';
import filterPlugin from './helpers/filter';
import directivePlugin from './helpers/directive';

import { APIService } from './helpers/services/api.service';

const api = new APIService();

Vue.config.productionTip = false;
Vue.prototype.$http = api;
Vue.use(VueI18n);
Vue.use(directivePlugin);
Vue.use(filterPlugin);

new Vue({
  router,
  i18n,
  store,
  render: (h) => h(App),
}).$mount('#app');
