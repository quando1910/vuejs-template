import Vue from 'vue';
import VueI18n from 'vue-i18n';

// /**
//  * Import Language
//  */
import i18nLang from './i18n';

// /**
//  * Config
//  */
Vue.use(VueI18n);

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'en',
  messages: i18nLang,
});
