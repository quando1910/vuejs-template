import Vue from 'vue';

const filterPlugin = {
  install() {
    Vue.filter('moneyConvert', (value: any) => {
      return value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
    });
  },
};

export default filterPlugin;

