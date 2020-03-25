import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue} from 'bootstrap-vue'
import VueCarousel from 'vue-carousel';
Vue.use(BootstrapVue);
Vue.use(VueCarousel);


//  font aweseome library after installing all the npm plugin 
// from https://medium.com/front-end-weekly/how-to-use-fon-awesome-5-on-vuejs-project-ff0f28310821
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
Vue.component('font-awesome-icon', FontAwesomeIcon)

// to use all the free default icons that arent brand names like facebook
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)



//to be able to use <i></i> font awesome tags in html
import { dom } from '@fortawesome/fontawesome-svg-core'
dom.watch()

// to use all the brands font awesome icons on my Page
import { faFacebook,faTwitter,faGoogle,faInstagram,faLinkedin,faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'
library.add(faFacebook,faTwitter,faGoogle,faInstagram,faLinkedin,faYoutubeSquare)
// import StarRating from 'vue-star-rating'
// Vue.component('star-rating', StarRating);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
