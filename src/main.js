import Vue from 'vue';
import Eagle from 'eagle.js';
import App from './App.vue';
import 'normalize.css/normalize.css';
import './assets/styles/common.styl';
import './assets/font/metropolis/stylesheet.css';
import './assets/font/source-code-pro/stylesheet.css';
import 'eagle.js/dist/eagle.css';
import 'animate.css/animate.min.css';

Vue.config.productionTip = false;

Vue.use(Eagle);

new Vue({
  render: h => h(App),
}).$mount('#app');
