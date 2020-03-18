import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue} from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';
Vue.use(BootstrapVue);
Vue.use(VueCarousel);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
