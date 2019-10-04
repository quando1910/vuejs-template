import Vue from 'vue';

const directivePlugin = {
  install() {
    Vue.directive('demo', (el: any, binding: any) => {
      el.style.backgroundColor = binding.value;
      el.style.color = 'white';
      el.style.fontSize = '40px';
    });
  },
};

export default directivePlugin;

